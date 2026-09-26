import { useEffect, useRef } from "react";

/**
 * A short, quiet fireworks burst for a page's first view: three small bursts
 * in the site's warm palette that fade out in about two seconds. It plays
 * once per browser session, never blocks clicks, and is skipped entirely
 * for people who prefer reduced motion.
 */
const COLORS = ["#F08B60", "#F6B48F", "#FFD9B8", "#ECEAE7"];
const SEEN_KEY = "fireworks-seen";

export default function Fireworks({ id = "page" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      const seen = sessionStorage.getItem(SEEN_KEY) || "";
      if (seen.split(",").includes(id)) return;
      sessionStorage.setItem(SEEN_KEY, seen ? `${seen},${id}` : id);
    } catch {
      // Storage can be blocked; playing once more is harmless.
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    const burst = (x, y) => {
      const count = 46;
      const color = COLORS[Math.floor(Math.random() * 2)];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.2;
        const speed = 1.6 + Math.random() * 2.4;
        particles.push({
          x,
          y,
          px: x,
          py: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.012 + Math.random() * 0.01,
          color: Math.random() < 0.3 ? COLORS[2 + Math.floor(Math.random() * 2)] : color,
          size: 1.2 + Math.random() * 1.2,
        });
      }
    };

    // Positions are fractions of the viewport, kept to the upper area so
    // the bursts frame the opening line rather than cover the video.
    const shots = [
      [0.72, 0.22, 150],
      [0.42, 0.14, 520],
      [0.86, 0.36, 900],
    ];
    const timers = shots.map(([fx, fy, delay]) =>
      setTimeout(() => burst(w * fx, h * fy), delay)
    );

    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.px = p.x;
        p.py = p.y;
        p.vx *= 0.965;
        p.vy = p.vy * 0.965 + 0.045;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(p.life, 0) * 0.9;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p.px - p.vx * 2, p.py - p.vy * 2);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (particles.length || now - start < 1200) {
        raf = requestAnimationFrame(tick);
      } else {
        canvas.style.display = "none";
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [id]);

  return <canvas ref={canvasRef} className="fireworks" aria-hidden="true" />;
}
