"use client";

import { createContext, useContext, useState } from "react";

type Lang = "EN" | "PT";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "EN",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export const t = {
  nav: {
    about:      { EN: "About",      PT: "Sobre" },
    experience: { EN: "Experience", PT: "Experiência" },
    projects:   { EN: "Projects",   PT: "Projetos" },
    contact:    { EN: "Contact",    PT: "Contato" },
    resume:     { EN: "Resume",     PT: "Currículo" },
  },
  hero: {
    greeting:  { EN: "Hello, my name is",  PT: "Olá, meu nome é" },
    role:      { EN: "Full-stack developer & AIML enthusiast", PT: "Desenvolvedor full-stack & entusiasta de AIML" },
    bio1:      {
      EN: "I'm pursuing a B.Tech in Information Technology at Parul University, India. I'm deeply focused on designing and building modern, scalable digital products, from responsive web applications to mobile solutions.",
      PT: "Estou cursando B.Tech em Tecnologia da Informação na Parul University, Índia. Sou profundamente focado em projetar e construir produtos digitais modernos e escaláveis, de aplicações web responsivas a soluções mobile.",
    },
    bio2:      {
      EN: "I enjoy working across the entire development stack, bridging design and engineering to craft experiences that are both functional and refined.",
      PT: "Gosto de trabalhar em toda a stack de desenvolvimento, conectando design e engenharia para criar experiências funcionais e refinadas.",
    },
    cta:       { EN: "Get In Touch", PT: "Entre em Contato" },
  },
  about: {
    title:  { EN: "About Me",  PT: "Sobre Mim" },
    p1: {
      EN: "Hello! I'm Eldo António Macuácua, hailing from Inhambane, a province in Mozambique fondly referred to as the \"Terra de Boa Gente\".",
      PT: "Olá! Sou Eldo António Macuácua, natural de Inhambane, uma província de Moçambique carinhosamente chamada de \"Terra de Boa Gente\".",
    },
    p2: {
      EN: "I am an innovative, reliable, committed, and results-driven person with solid principles and integrity. I bring enthusiasm, polished communication abilities, exceptional organizational talents, and a keen eye for detail.",
      PT: "Sou uma pessoa inovadora, confiável, comprometida e orientada a resultados, com princípios sólidos e integridade. Trago entusiasmo, habilidades de comunicação refinadas, talentos organizacionais excepcionais e atenção aos detalhes.",
    },
    p3: {
      EN: "I am currently undertaking my Bachelor's degree in Information Technology and Engineering (2024–2028) at Parul University, India.",
      PT: "Atualmente estou cursando meu Bacharelado em Tecnologia da Informação e Engenharia (2024–2028) na Parul University, Índia.",
    },
    hobbiesLabel: { EN: "Here are a few of the other activities that I love to do!", PT: "Aqui estão algumas das outras atividades que adoro fazer!" },
    hobbies: {
      EN: ["Play Football", "Reading", "Coding", "Photography", "Problem Solving", "Gaming", "Hackathons", "Chess"],
      PT: ["Futebol", "Leitura", "Programar", "Fotografia", "Resolução de Problemas", "Gaming", "Hackathons", "Xadrez"],
    },
  },
} as const;
