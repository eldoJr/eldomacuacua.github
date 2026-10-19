"use client";

import { motion } from "motion/react";
import { useLang, t } from "@/lib/lang";

const ease = [0.4, 0, 0.2, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease },
});

export default function Hero() {
  const { lang } = useLang();
  const h = t.hero;

  return (
    <section className="hero">
      <motion.p className="hero-greeting" {...fadeUp(4.6)}>
        {h.greeting[lang]}
      </motion.p>

      <motion.h1 className="hero-name" {...fadeUp(4.75)}>
        Eldo<span className="hero-dot">.</span>
      </motion.h1>

      <motion.h2 className="hero-role" {...fadeUp(4.9)}>
        {h.role[lang]}
      </motion.h2>

      <motion.p className="hero-bio" {...fadeUp(5.05)}>
        {h.bio1[lang]}
      </motion.p>

      <motion.p className="hero-bio" {...fadeUp(5.15)}>
        {h.bio2[lang]}
      </motion.p>

      <motion.div {...fadeUp(5.3)}>
        <a href="#contact" className="hero-cta">
          {h.cta[lang]}
        </a>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: calc(var(--nb-height) + 2rem) var(--nb-px) 4rem;
          max-width: 520px;
          margin-left: 8vw;
        }

        .hero-greeting {
          font-family: var(--font-sf-mono);
          font-size: var(--text-sm);
          color: var(--color-accent);
          margin-bottom: 1rem;
          letter-spacing: 0.03em;
        }

        .hero-name {
          font-family: var(--font-sf-pro);
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .hero-dot {
          color: var(--color-accent);
        }

        .hero-role {
          font-family: var(--font-sf-pro);
          font-size: clamp(1.4rem, 4vw, 2.4rem);
          font-weight: 500;
          color: var(--foreground);
          opacity: 0.45;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
          max-width: 100vw;
          white-space: nowrap;
        }

        .hero-bio {
          font-family: var(--font-sf-pro);
          font-size: var(--text-base);
          line-height: 1.75;
          color: var(--foreground);
          opacity: 0.55;
          max-width: 560px;
          margin-bottom: 1rem;
        }

        .hero-cta {
          display: inline-block;
          margin-top: 1.5rem;
          font-family: var(--font-sf-mono);
          font-size: var(--text-sm);
          color: var(--color-accent);
          text-decoration: none;
          padding: var(--btn-py) var(--btn-px);
          border: 1px solid var(--color-accent);
          border-radius: var(--radius-sm);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .hero-cta:hover {
          background: color-mix(in srgb, var(--color-accent) 10%, transparent);
        }

        @media (max-width: 768px) {
          .hero {
            padding-left: var(--nb-px-mobile);
            padding-right: var(--nb-px-mobile);
          }
        }
      `}</style>
    </section>
  );
}
