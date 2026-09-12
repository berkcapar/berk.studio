/**
 * Delivers a visitor's question to Berk's inbox via Resend.
 *
 * Needs two environment variables to be live:
 *   RESEND_API_KEY   from resend.com/api-keys
 *   CONTACT_FROM     a verified sender, e.g. "berk.studio <hello@berk.studio>"
 * Optional:
 *   CONTACT_TO       defaults to berkcapar@gmail.com
 *
 * Without them this responds 503 and the client falls back to a prefilled
 * mailto, so a message is never silently dropped.
 */

const TO = process.env.CONTACT_TO || "berkcapar@gmail.com";

// One message per IP per minute is plenty for a personal site.
const RATE_MS = 60 * 1000;
const seen = new Map();

function rateLimited(ip) {
  const now = Date.now();
  for (const [key, at] of seen) if (now - at > RATE_MS) seen.delete(key);
  if (seen.has(ip)) return true;
  seen.set(ip, now);
  return false;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const { email, question } = req.body || {};

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "invalid_email" });
  }
  if (typeof question !== "string" || question.trim().length < 2) {
    return res.status(400).json({ error: "invalid_question" });
  }
  if (question.length > 4000) {
    return res.status(400).json({ error: "too_long" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!key || !from) {
    return res.status(503).json({ error: "not_configured" });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO],
        reply_to: email,
        subject: `berk.studio: ${question.slice(0, 70)}`,
        text: `${question}\n\nFrom: ${email}\n`,
      }),
    });

    if (!r.ok) {
      console.error("resend failed", r.status, await r.text());
      return res.status(502).json({ error: "send_failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact handler threw", err);
    return res.status(502).json({ error: "send_failed" });
  }
}
