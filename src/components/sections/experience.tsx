"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/lib/lang";

const ease = [0.4, 0, 0.2, 1] as const;

const experiences = [
  {
    company: "All Source & Logistic",
    companyUrl: undefined,
    role:     { EN: "Home Office Intern", PT: "Estagiário Home Office" },
    period:   "2025 – 2026",
    location: "Vadodara, Gujarat, India",
    link:     undefined,
    bullets: {
      EN: [
        "Applied full-stack development concepts across frontend interfaces, backend programming, and database technologies.",
        "Continuously expanded technical expertise through online courses, workshops, and hands-on development.",
      ],
      PT: [
        "Aplicou conceitos de desenvolvimento full-stack em interfaces frontend, programação backend e tecnologias de base de dados.",
        "Expandiu continuamente a expertise técnica através de cursos online, workshops e desenvolvimento prático.",
      ],
    },
    stack: ["Full-Stack", "Frontend", "Backend", "Databases"],
  },
  {
    company: "PANLEEN",
    companyUrl: undefined,
    role:     { EN: "Help Desk Technician", PT: "Técnico de Help Desk" },
    period:   "2023 – 2024",
    location: "Maputo, Mozambique",
    link:     undefined,
    bullets: {
      EN: [
        "Delivered technical support and troubleshooting for hardware, software, and user-related issues.",
        "Configured and maintained hardware and software environments to support reliable IT operations.",
      ],
      PT: [
        "Prestou suporte técnico e resolução de problemas de hardware, software e questões dos utilizadores.",
        "Configurou e manteve ambientes de hardware e software para suportar operações de TI confiáveis.",
      ],
    },
    stack: ["Help Desk", "Hardware", "Software", "IT Support"],
  },
  {
    company: "TEACHNOOK",
    companyUrl: "https://www.linkedin.com/company/teachnook",
    role:     { EN: "Artificial Intelligence Intern", PT: "Estagiário de Inteligência Artificial" },
    period:   "Jan 2025 – Feb 2025",
    location: "Remote",
    link:     { label: "View Offer Letter", url: "https://drive.google.com/file/d/1d3rPRWqzkgqUde-s2kNBs7prtwwyhwi2/view?usp=sharing" },
    bullets: {
      EN: [
        "Played an active role in developing and implementing solutions through AI with an emphasis on machine learning models, data pre-processing, and optimization of algorithms.",
        "Was involved in projects that included the implementation of predictive analytics using Python, TensorFlow, NumPy, and Pandas.",
        "Helped develop AI-based prototypes that would increase efficiency and productivity.",
        "Got introduced to various AI-related topics including NLP, computer vision, and reinforcement learning.",
        "Cooperated with different people as part of a team via platforms like Git, Trello, and Zoom.",
      ],
      PT: [
        "Desempenhou papel ativo no desenvolvimento e implementação de soluções com IA, com ênfase em modelos de machine learning, pré-processamento de dados e otimização de algoritmos.",
        "Participou de projetos com implementação de análise preditiva usando Python, TensorFlow, NumPy e Pandas.",
        "Ajudou a desenvolver protótipos baseados em IA para aumentar eficiência e produtividade.",
        "Foi introduzido a tópicos de IA como NLP, visão computacional e aprendizado por reforço.",
        "Colaborou com equipes via Git, Trello e Zoom.",
      ],
    },
    stack: ["Python", "TensorFlow", "NumPy", "Pandas", "NLP"],
  },
  {
    company: "LAUNCHED",
    companyUrl: "https://www.linkedin.com/company/launchedglobal/?originalSubdomain=in",
    role:     { EN: "Web Application Developer Intern", PT: "Estagiário de Desenvolvimento Web" },
    period:   "Jan 2025 – Feb 2025",
    location: "Remote",
    link:     { label: "View Offer Letter", url: "https://drive.google.com/file/d/1guLs6WaJDh_Z1OXrv3sOLbYVher-cLWT/view?usp=sharing" },
    bullets: {
      EN: [
        "Involved in building web applications using HTML, CSS, JavaScript, React, Bootstrap, and other languages like Python, PHP, MySQL, and Java.",
        "Assisted in developing and implementing innovative IT solutions for different projects.",
        "Used excellent problem-solving and communication skills to solve issues and make improvements to ensure client satisfaction.",
        "Gained practical experience in software development, automation, and system integration, helping the organization advance its technology.",
        "Used Git and GitHub for version management and project tracking.",
      ],
      PT: [
        "Envolvido na construção de aplicações web com HTML, CSS, JavaScript, React, Bootstrap e outras linguagens como Python, PHP, MySQL e Java.",
        "Auxiliou no desenvolvimento e implementação de soluções de TI inovadoras para diferentes projetos.",
        "Utilizou habilidades de resolução de problemas e comunicação para resolver questões e garantir a satisfação do cliente.",
        "Adquiriu experiência prática em desenvolvimento de software, automação e integração de sistemas.",
        "Utilizou Git e GitHub para gestão de versões e acompanhamento de projetos.",
      ],
    },
    stack: ["React", "JavaScript", "Python", "PHP", "MySQL", "Git", "GitHub"],
  },
  {
    company: "WKB COMERCIAL",
    companyUrl: "https://www.facebook.com/WKBSALES",
    role:     { EN: "IT Support Technician", PT: "Técnico de Suporte de TI" },
    period:   "May 2021 – Jun 2022",
    location: "On-site",
    link:     undefined,
    bullets: {
      EN: [
        "Provided technical support for hardware and software issues, ensuring minimal downtime and optimal performance for end-users.",
        "Installed, configured, and maintained IT equipment, including desktops, printers, and networking devices, improving system reliability.",
        "Diagnosed and resolved technical problems promptly, achieving a high customer satisfaction rate.",
        "Managed network setups and troubleshooting, including configuring routers and switches to maintain secure and stable connectivity.",
        "Documented technical processes and solutions to streamline future troubleshooting and improve team efficiency.",
        "Utilized tools like Microsoft Office, Windows Server, and TeamViewer to deliver efficient support and system management.",
      ],
      PT: [
        "Forneceu suporte técnico para problemas de hardware e software, garantindo mínimo tempo de inatividade e desempenho ideal para os utilizadores.",
        "Instalou, configurou e manteve equipamentos de TI, incluindo desktops, impressoras e dispositivos de rede, melhorando a confiabilidade do sistema.",
        "Diagnosticou e resolveu problemas técnicos prontamente, atingindo alta taxa de satisfação dos clientes.",
        "Geriu configurações de rede e resolução de problemas, incluindo configuração de routers e switches para manter conectividade segura e estável.",
        "Documentou processos e soluções técnicas para agilizar futuras resoluções e melhorar a eficiência da equipa.",
        "Utilizou ferramentas como Microsoft Office, Windows Server e TeamViewer para suporte eficiente e gestão de sistemas.",
      ],
    },
    stack: ["Windows Server", "TeamViewer", "Microsoft Office", "Networking"],
  },
];

export default function Experience() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="exp">
      <motion.div
        className="exp-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease }}
      >
        <h2 className="exp-title">
          <span className="exp-num">02.</span>
          {lang === "EN" ? "Education & Professional Experience" : "Educação & Experiência Profissional"}
        </h2>

        <div className="exp-body">
          {/* tab list */}
          <div className="exp-tabs" role="tablist">
            {experiences.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={active === i}
                className={`exp-tab ${active === i ? "exp-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                {e.company}
              </button>
            ))}
            <div className="exp-tab-indicator" style={{ top: `${active * 52}px` }} />
          </div>

          {/* panel */}
          <div className="exp-panel-outer">
            <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="exp-panel"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="exp-panel-header">
                <h3 className="exp-role">
                  {exp.role[lang]}&nbsp;
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company exp-company-link">@ {exp.company}</a>
                  ) : (
                    <span className="exp-company">@ {exp.company}</span>
                  )}
                </h3>
                <div className="exp-meta">
                  <span><i className="bi bi-calendar3" /> {exp.period}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets[lang].map((b, i) => (
                  <li key={i}>
                    <span className="exp-arrow">▹</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="exp-stack">
                {exp.stack.map((s) => (
                  <span key={s} className="exp-tag">{s}</span>
                ))}
              </div>

              {exp.link && (
                <a href={exp.link.url} target="_blank" rel="noopener noreferrer" className="exp-link">
                  <i className="bi bi-box-arrow-up-right" />
                  {exp.link.label}
                </a>
              )}
            </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Education + Certifications row */}
        <div className="exp-bottom">

          {/* Education */}
          <div className="exp-edu">
            <h3 className="exp-sub-title">
              <i className="bi bi-mortarboard" />
              {lang === "EN" ? "Academic Path" : "Percurso Acadêmico"}
            </h3>
            <div className="exp-edu-period"><i className="bi bi-calendar3" /> Jul 2021 – May 2028</div>
            <ul className="exp-edu-list">
              {[
                { degree: lang === "EN" ? "Information Technology" : "Tecnologia da Informação",       school: "Parul University" },
                { degree: lang === "EN" ? "Web Programming Technician" : "Técnico de Programação Web", school: "ITC" },
                { degree: lang === "EN" ? "IT Support Technician" : "Técnico de Suporte de TI",        school: "ITC" },
                { degree: lang === "EN" ? "Basic Computing" : "Informática Básica",                   school: "IFPELAC" },
              ].map((e) => (
                <li key={e.degree} className="exp-edu-item">
                  <div className="exp-edu-dot" />
                  <div className="exp-edu-info">
                    <span className="exp-edu-degree">{e.degree}</span>
                    <span className="exp-edu-school">{e.school}</span>
                  </div>
                  <span className="exp-edu-badge">CERTIFICATE</span>
                </li>
              ))}
            </ul>
            <a href="https://drive.google.com/file/d/1a8KZS2_ce86hEaxNKv514pJpKOz-0l8D/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="exp-link">
              <i className="bi bi-file-earmark-person" />
              {lang === "EN" ? "Curriculum Vitae" : "Currículo Vitae"}
            </a>
          </div>

          {/* Certifications */}
          <div className="exp-certs">
            <h3 className="exp-sub-title">
              <i className="bi bi-patch-check" />
              {lang === "EN" ? "Licenses & Certifications" : "Licenças & Certificações"}
            </h3>
            <div className="exp-edu-period"><i className="bi bi-calendar3" /> May 2024 – Jun 2028</div>
            <ul className="exp-edu-list">
              {[
                { degree: "Data Privacy Fundamentals",                                    school: "Etrain" },
                { degree: "Data Visualization with Python",                               school: "Etrain" },
                { degree: "Java",                                                          school: "HackerRank" },
                { degree: "Hardware and Operating System Essentials",                     school: "IBM" },
                { degree: "Hardware and Operating Systems Fundamentals",                  school: "Etrain" },
                { degree: "Information Technology (IT) Fundamentals",                    school: "IBM" },
                { degree: "Generative AI Skills for Data Scientists",                     school: "Etrain" },
                { degree: "Generative AI Skills for Software Developers",                 school: "Etrain" },
                { degree: "Python",                                                        school: "Etrain" },
                { degree: "Python for Data Science",                                      school: "IBM" },
                { degree: "Tech (IT) Support Job Guide: Resume & Interview Preparation",  school: "IBM" },
                { degree: "AWS Educate Introduction to Generative AI",                    school: "AWS" },
                { degree: "IT Specialist - HTML and CSS",                                 school: "Certiport" },
                { degree: "JavaScript",                                                    school: "HackerRank" },
                { degree: "Vadodara Hackathon 6.0",                                       school: "PU" },
              ].map((e) => (
                <li key={e.degree} className="exp-edu-item">
                  <div className="exp-edu-dot" />
                  <div className="exp-edu-info">
                    <span className="exp-edu-degree">{e.degree}</span>
                    <span className="exp-edu-school">{e.school}</span>
                  </div>
                  <span className="exp-edu-badge">CERTIFICATE</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>

      <style>{`
        .exp {
          width: 100%;
          padding: 8rem 0;
        }

        .exp-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--nb-px);
        }

        .exp-title {
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
        .exp-title::after {
          content: '';
          display: block;
          height: 1px;
          flex: 1;
          max-width: 300px;
          background: var(--color-border);
          margin-left: 1rem;
        }

        .exp-num {
          font-family: var(--font-sf-mono);
          font-size: 1rem;
          color: var(--color-accent);
          font-weight: 400;
        }

        .exp-body {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
        }

        /* tabs */
        .exp-tabs {
          position: relative;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          width: 180px;
          border-left: 2px solid var(--color-border);
        }

        .exp-tab {
          position: relative;
          z-index: 1;
          height: 52px;
          padding: 0 1.4rem;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sf-mono);
          font-size: 0.82rem;
          color: var(--foreground);
          opacity: 0.5;
          letter-spacing: 0.02em;
          transition: opacity 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        .exp-tab:hover { opacity: 0.85; }
        .exp-tab--active {
          opacity: 1;
          color: var(--color-accent);
        }

        .exp-tab-indicator {
          position: absolute;
          left: -2px;
          width: 2px;
          height: 52px;
          background: var(--color-accent);
          transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* panel */
        .exp-panel-outer {
          flex: 1;
          min-height: 380px;
          position: relative;
        }

        .exp-panel {
          width: 100%;
        }

        .exp-panel-header {
          margin-bottom: 1.6rem;
        }

        .exp-role {
          font-family: var(--font-sf-pro);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .exp-company {
          color: var(--color-accent);
          -webkit-text-fill-color: var(--color-accent);
        }
        .exp-company-link {
          text-decoration: none;
          position: relative;
        }
        .exp-company-link::after {
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
        .exp-company-link:hover {
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nbShimmer var(--shimmer-duration) ease forwards;
        }
        .exp-company-link:hover::after {
          opacity: 1;
          animation: nbLineShimmer var(--shimmer-duration) ease forwards;
        }

        .exp-meta {
          display: flex;
          gap: 1.5rem;
          font-family: var(--font-sf-mono);
          font-size: 0.78rem;
          color: var(--foreground);
          opacity: 0.45;
          letter-spacing: 0.02em;
        }
        .exp-meta i { margin-right: 0.3rem; }

        .exp-bullets {
          list-style: none;
          margin: 0 0 1.8rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .exp-bullets li {
          display: flex;
          gap: 0.75rem;
          font-family: var(--font-sf-pro);
          font-size: var(--text-base);
          line-height: 1.7;
          color: var(--foreground);
          opacity: 0.65;
        }

        .exp-arrow {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 0.15rem;
          font-size: 0.8rem;
        }

        .exp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.4rem;
        }

        .exp-tag {
          font-family: var(--font-sf-mono);
          font-size: 0.75rem;
          color: var(--color-accent);
          padding: 0.2rem 0;
          letter-spacing: 0.03em;
        }

        .exp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.4rem;
          font-family: var(--font-sf-mono);
          font-size: 0.8rem;
          color: var(--color-accent);
          text-decoration: none;
          letter-spacing: 0.03em;
          position: relative;
        }
        .exp-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 1px;
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          background-position: 100% 0;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .exp-link:hover::after {
          opacity: 1;
          animation: nbLineShimmer var(--shimmer-duration) ease forwards;
        }
        .exp-link:hover {
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nbShimmer var(--shimmer-duration) ease forwards;
        }

        /* bottom row */
        .exp-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .exp-sub-title {
          font-family: var(--font-sf-pro);
          font-size: 1rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .exp-sub-title i { color: var(--color-accent); }

        .exp-edu-period {
          font-family: var(--font-sf-mono);
          font-size: 0.75rem;
          color: var(--foreground);
          opacity: 0.4;
          margin-bottom: 1.2rem;
          letter-spacing: 0.02em;
        }
        .exp-edu-period i { margin-right: 0.3rem; }

        .exp-edu-list {
          list-style: none;
          margin: 0 0 1.4rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .exp-edu-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .exp-edu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
        }

        .exp-edu-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .exp-edu-degree {
          font-family: var(--font-sf-pro);
          font-size: var(--text-sm);
          color: var(--foreground);
          opacity: 0.8;
          font-weight: 500;
        }

        .exp-edu-school {
          font-family: var(--font-sf-mono);
          font-size: 0.72rem;
          color: var(--foreground);
          opacity: 0.4;
          letter-spacing: 0.02em;
        }

        .exp-edu-badge {
          font-family: var(--font-sf-mono);
          font-size: 0.62rem;
          color: var(--color-accent);
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .exp-certs-empty {
          font-family: var(--font-sf-pro);
          font-size: var(--text-sm);
          color: var(--foreground);
          opacity: 0.35;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .exp-container { padding: 0 var(--nb-px-mobile); }
          .exp-title::after { display: none; }
          .exp-bottom { grid-template-columns: 1fr; gap: 2.5rem; }
          .exp-body { flex-direction: column; gap: 2rem; }
          .exp-tabs {
            flex-direction: row;
            width: 100%;
            border-left: none;
            border-bottom: 2px solid var(--color-border);
            overflow-x: auto;
          }
          .exp-tab { height: 44px; padding: 0 1.1rem; }
          .exp-tab-indicator {
            top: auto !important;
            bottom: -2px;
            left: 0;
            width: 180px;
            height: 2px;
            transform: translateX(${0}px);
          }
        }
      `}</style>
    </section>
  );
}
