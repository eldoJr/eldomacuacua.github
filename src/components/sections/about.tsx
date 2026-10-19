"use client";

import { motion } from "motion/react";
import { useLang, t } from "@/lib/lang";

const ease = [0.4, 0, 0.2, 1] as const;

const hobbyIcons: Record<string, string> = {
  "Play Football":        "bi-dribbble",
  "Reading":              "bi-book",
  "Coding":               "bi-code-slash",
  "Photography":          "bi-camera",
  "Problem Solving":      "bi-lightbulb",
  "Gaming":               "bi-controller",
  "Hackathons":           "bi-trophy",
  "Chess":                "bi-grid-3x3",
  "Futebol":              "bi-dribbble",
  "Leitura":              "bi-book",
  "Programar":            "bi-code-slash",
  "Fotografia":           "bi-camera",
  "Resolução de Problemas":"bi-lightbulb",
  "Hackathons":           "bi-trophy",
  "Xadrez":               "bi-grid-3x3",
};

export default function About() {
  const { lang } = useLang();
  const a = t.about;

  return (
    <section id="about" className="about">
      <motion.div
        className="about-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease }}
      >
        <h2 className="about-title">
          <span className="about-num">01.</span> {a.title[lang]}
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p>{a.p1[lang]}</p>
            <p>{a.p2[lang]}</p>
            <p>{a.p3[lang]}</p>

            <p className="about-hobbies-label">{a.hobbiesLabel[lang]}</p>
            <ul className="about-hobbies">
              {a.hobbies[lang].map((hobby) => (
                <li key={hobby}>
                  <i className={`bi ${hobbyIcons[hobby] ?? "bi-star"}`} />
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <style>{`
        .about {
          padding: 6rem var(--nb-px);
          max-width: 860px;
          margin-left: 8vw;
        }

        .about-title {
          font-family: var(--font-sf-pro);
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        .about-title::after {
          content: '';
          display: block;
          height: 1px;
          width: 200px;
          background: var(--color-border);
          margin-left: 1rem;
        }

        .about-num {
          font-family: var(--font-sf-mono);
          font-size: 1rem;
          color: var(--color-accent);
          font-weight: 400;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .about-text p {
          font-family: var(--font-sf-pro);
          font-size: var(--text-base);
          line-height: 1.8;
          color: var(--foreground);
          opacity: 0.65;
          max-width: 580px;
        }

        .about-hobbies-label {
          opacity: 0.75 !important;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .about-hobbies {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem 2rem;
          max-width: 380px;
        }

        .about-hobbies li {
          font-family: var(--font-sf-mono);
          font-size: var(--text-sm);
          color: var(--foreground);
          opacity: 0.65;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .about-hobbies li i {
          color: var(--color-accent);
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .about {
            margin-left: 0;
            padding-left: var(--nb-px-mobile);
            padding-right: var(--nb-px-mobile);
          }
          .about-title::after { display: none; }
        }
      `}</style>
    </section>
  );
}
