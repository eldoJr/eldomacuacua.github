"use client";

import { motion } from "motion/react";
import Image from "next/image";
import meImg from "@/assets/img/me.png";
import { useLang, t } from "@/lib/lang";

const ease = [0.4, 0, 0.2, 1] as const;

const hobbyIcons: Record<string, string> = {
  "Play Football":    "bi-dribbble",
  "Read Books":       "bi-book",
  "Code":             "bi-code-slash",
  "Music & Movies":   "bi-music-note-beamed",
  "Solve Problems":   "bi-lightbulb",
  "Gaming":           "bi-controller",
  "Hackathons":       "bi-trophy",
  "Play Chess":       "bi-grid-3x3",
  "Futebol":          "bi-dribbble",
  "Ler Livros":       "bi-book",
  "Programar":        "bi-code-slash",
  "Música & Filmes":  "bi-music-note-beamed",
  "Resolver Problemas": "bi-lightbulb",
  "Jogar Xadrez":     "bi-grid-3x3",
};

export default function About() {
  const { lang } = useLang();
  const a = t.about;

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease }}
      >
        <h2 className="about-title">
          <span className="about-num">01.</span> {a.title[lang]}
        </h2>

        <div className="about-grid">
          {/* LEFT — text */}
          <div className="about-text">
            <p>{a.p1[lang]}</p>
            <p>{a.p2[lang]}</p>
            <p>
              {a.p3[lang].split("__PARUL__").map((part, i) =>
                i === 0 ? part : (
                  <span key={i}>
                    <a href="https://paruluniversity.ac.in" target="_blank" rel="noopener noreferrer" className="about-uni-link">
                      Parul University, India
                    </a>
                    {part}
                  </span>
                )
              )}
            </p>

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

          {/* RIGHT — image */}
          <div className="about-img-col">
            <div className="about-img-wrap">
              <Image
                src={meImg}
                alt="Eldo António Macuácua"
                className="about-img"
                loading="eager"
                width={400}
                height={500}
              />
              <div className="about-img-border" />
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .about {
          width: 100%;
          padding: 8rem 0;
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--nb-px);
        }

        .about-title {
          font-family: var(--font-sf-pro);
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        .about-title::after {
          content: '';
          display: block;
          height: 1px;
          flex: 1;
          max-width: 300px;
          background: var(--color-border);
          margin-left: 1rem;
        }

        .about-num {
          font-family: var(--font-sf-mono);
          font-size: 1rem;
          color: var(--color-accent);
          font-weight: 400;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 5rem;
          align-items: center;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .about-text p {
          font-family: var(--font-sf-pro);
          font-size: var(--text-base);
          line-height: 1.8;
          color: var(--foreground);
          opacity: 0.65;
        }

        .about-uni-link {
          color: var(--color-accent);
          -webkit-text-fill-color: var(--color-accent);
          text-decoration: none;
          position: relative;
          font-weight: 500;
        }
        .about-uni-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 100%; height: 1px;
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          background-position: 100% 0;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .about-uni-link:hover {
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nbShimmer var(--shimmer-duration) ease forwards;
        }
        .about-uni-link:hover::after {
          opacity: 1;
          animation: nbLineShimmer var(--shimmer-duration) ease forwards;
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
          max-width: 360px;
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

        /* image column */
        .about-img-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-img-wrap {
          position: relative;
          width: 340px;
          height: 420px;
          cursor: default;
        }

        .about-img {
          position: relative;
          z-index: 1;
          display: block;
          width: 340px !important;
          height: 420px !important;
          object-fit: cover;
          border-radius: 6px;
          filter: grayscale(20%);
          transition: filter 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.06),
            0 8px 16px rgba(0,0,0,0.12),
            0 20px 40px rgba(0,0,0,0.10),
            0 40px 80px rgba(0,0,0,0.06);
        }

        .about-img-border {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 340px;
          height: 420px;
          border: 2px solid var(--color-accent);
          border-radius: 6px;
          z-index: 0;
          transition: top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .about-img-wrap:hover .about-img {
          filter: grayscale(0%);
          transform: translate(-5px, -5px);
        }
        .about-img-wrap:hover .about-img-border {
          top: 20px;
          left: 20px;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-img-col { justify-content: flex-start; }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 var(--nb-px-mobile);
          }
          .about-title::after { display: none; }
          .about-img-wrap { width: 280px; height: 350px; }
          .about-img { width: 280px !important; height: 350px !important; }
          .about-img-border { width: 280px; height: 350px; }
        }
      `}</style>
    </section>
  );
}
