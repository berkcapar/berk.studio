import { useCallback, useEffect, useRef, useState } from "react";
import { THREADS, EMAIL } from "../data/threads";

const THINK_MS = 620;

/** Threads marked `hidden` keep their content but stay out of the rail. */
const VISIBLE = THREADS.filter((t) => !t.hidden);

/** Icons kept inline so the page ships no icon library. */
const Icons = {
  menu: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h13M12 5.5 18.5 12 12 18.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.98 9.75h4v11.25h-4V9.75zM9.25 9.75h3.84v1.54h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.9h-4v-5.23c0-1.25-.02-2.86-1.8-2.86-1.8 0-2.08 1.36-2.08 2.77v5.32h-4V9.75z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.08 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.08a9.96 9.96 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.58 1.45.21 2.52.11 2.79.67.74 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.5 3h6.05l4.18 5.52L17.53 3z" />
    </svg>
  ),
};

function Answer({ html }) {
  return <div className="a" dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * Shown when a visitor asks something the transcript doesn't answer.
 * Posts to /api/contact; if that isn't configured (or fails) it degrades
 * to a prefilled mailto so the message is never silently lost.
 */
function ContactAnswer({ question }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | sent | manual

  const mailto =
    "mailto:" +
    EMAIL +
    "?subject=" +
    encodeURIComponent("From berk.studio: " + question.slice(0, 70)) +
    "&body=" +
    encodeURIComponent(question + "\n\nFrom: " + email + "\n");

  async function submit(e) {
    e.preventDefault();
    if (email.indexOf("@") < 1) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, question }),
      });
      setState(res.ok ? "sent" : "manual");
    } catch {
      setState("manual");
    }
  }

  if (state === "sent") {
    return (
      <div className="a">
        <p>
          Sent. I&rsquo;ll reply to <strong>{email}</strong>, usually within a
          day.
        </p>
      </div>
    );
  }

  if (state === "manual") {
    return (
      <div className="a">
        <p>
          My inbox hook didn&rsquo;t answer just now, so let&rsquo;s do it the
          direct way. Here&rsquo;s the message, ready to send.
        </p>
        <div className="draft">
          <b>to</b> {EMAIL}
          <br />
          <b>from</b> {email}
          <br />
          <br />
          {question}
        </div>
        <p>
          <a className="out" href={mailto}>
            Open in your mail app &#8599;
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="a">
      <p>
        I haven&rsquo;t written an answer for that one yet, but I&rsquo;d like
        to. Leave your email and I&rsquo;ll reply properly.
      </p>
      <div className="ask-back">
        <label htmlFor="reply-to">Reply to</label>
        <form className="mini" onSubmit={submit}>
          <input
            id="reply-to"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "sending"}
          />
          <button type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send to Berk"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Turn({ turn }) {
  return (
    <div className="turn">
      <div className="msg">
        <div className="av av-you" aria-hidden="true">
          you
        </div>
        <div className="q">{turn.q}</div>
      </div>
      <div className="msg">
        <div className="av av-b" aria-hidden="true" />
        {turn.pending ? (
          <div className="a">
            <div className="think">
              <i />
              <i />
              <i />
            </div>
          </div>
        ) : turn.contact ? (
          <ContactAnswer question={turn.q} />
        ) : (
          <Answer html={turn.a} />
        )}
      </div>
    </div>
  );
}

export default function Console() {
  const [activeId, setActiveId] = useState(VISIBLE[0].id);
  const [extras, setExtras] = useState({}); // threadId -> appended turns
  const [used, setUsed] = useState({}); // threadId -> [chip questions already asked]
  const [busy, setBusy] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const scrollRef = useRef(null);
  const thread = VISIBLE.find((t) => t.id === activeId);
  const turns = [...thread.turns, ...(extras[activeId] || [])];

  const toBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
  }, [activeId]);

  // Follow the conversation down after a turn is appended or an answer lands.
  // Bumping a counter runs this after React has committed the new height;
  // scrolling inline with the state update reads the old one.
  const [followTick, setFollowTick] = useState(0);
  useEffect(() => {
    if (followTick) toBottom();
  }, [followTick, toBottom]);
  const follow = useCallback(() => setFollowTick((n) => n + 1), []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  const ask = useCallback(
    (q, a) => {
      if (busy) return;
      setBusy(true);
      const id = activeId;

      setExtras((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), { q, pending: true }],
      }));
      follow();

      const settle = () => {
        setExtras((prev) => {
          const list = [...(prev[id] || [])];
          list[list.length - 1] = a ? { q, a } : { q, contact: true };
          return { ...prev, [id]: list };
        });
        setBusy(false);
        follow();
      };

      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.setTimeout(settle, reduce ? 0 : THINK_MS);
    },
    [activeId, busy, follow],
  );

  function onChip(chip) {
    setUsed((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), chip.q],
    }));
    ask(chip.q, chip.a);
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    const hit = thread.chips.find((c) => c.q.toLowerCase() === v.toLowerCase());
    ask(v, hit ? hit.a : null);
    setDraft("");
  }

  function openThread(id) {
    setActiveId(id);
    setNavOpen(false);
  }

  return (
    <div className="desk">
      <div className="shell">
        <aside className="rail" aria-label="Conversations">
          <div className="lights" aria-hidden="true">
            <i className="r" />
            <i className="y" />
            <i className="g" />
          </div>
          <div className="rail-head">
            <div className="mark" role="img" aria-label="Berk Çapar" />
            <div className="who">
              <span className="nm">Berk Çapar</span>
              <span className="rl">Senior AI Product Manager</span>
            </div>
          </div>

          <div className="rail-label">Threads</div>
          <nav className="threads">
            {VISIBLE.map((t) => (
              <button
                key={t.id}
                type="button"
                className="thread"
                aria-current={t.id === activeId}
                onClick={() => openThread(t.id)}
              >
                <span className="t-name">{t.name}</span>
                {t.note ? <span className="t-note">{t.note}</span> : null}
              </button>
            ))}
          </nav>

          <div className="rail-foot">
            <div className="links">
              <a
                href="https://www.linkedin.com/in/berkcapar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {Icons.linkedin}
              </a>
              <a
                href="https://github.com/berkcapar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                {Icons.github}
              </a>
              <a
                href="https://x.com/bcaparing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                {Icons.x}
              </a>
            </div>
            <div className="foot-note">Berlin, DE</div>
          </div>
        </aside>

        {navOpen && (
          <button
            className="scrim"
            aria-label="Close menu"
            onClick={() => setNavOpen(false)}
          />
        )}

        <div className="main">
          <header className="topbar">
            <button
              className="menu-btn"
              aria-label="Open conversations"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              {Icons.menu}
            </button>
            <h1>{thread.title}</h1>
            <div className="ctx">
              <span>Pactum AI</span>
              <span className="sep" aria-hidden="true">
                &middot;
              </span>
              <span className="tz">Berlin &middot; UTC+1</span>
            </div>
          </header>

          <div className="scroll" ref={scrollRef}>
            <div className="transcript" aria-live="polite">
              {turns.map((t, i) => (
                <Turn key={activeId + "-" + i} turn={t} />
              ))}
            </div>
          </div>

          <div className="composer">
            <div className="composer-inner">
              <div className="chips">
                {thread.chips.map((c) => {
                  const spent = (used[activeId] || []).includes(c.q);
                  return (
                    <button
                      key={c.q}
                      type="button"
                      className="chip"
                      disabled={spent || busy}
                      onClick={() => onChip(c)}
                    >
                      {c.q}
                    </button>
                  );
                })}
              </div>
              <form className="box" onSubmit={onSubmit}>
                <label htmlFor="ask" className="sr-only">
                  Ask a question
                </label>
                <input
                  id="ask"
                  autoComplete="off"
                  placeholder="Ask about agentic negotiations, the Yara portfolio, the exit…"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button className="send" type="submit" aria-label="Send">
                  {Icons.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
