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
    greeting:  { EN: "Hi there, my name is",  PT: "Olá, meu nome é" },
    role:      { EN: "Full-stack developer & AIML geek", PT: "Desenvolvedor full-stack & geek de AIML" },
    bio1:      {
      EN: "Currently working on a B.Tech in Information Technology at Parul University, India. I have been obsessed with creating the most scalable digital solutions, right from web applications to mobile/desktop apps.",
      PT: "Atualmente cursando B.Tech em Tecnologia da Informação na Parul University, Índia. Sou obcecado em criar as soluções digitais mais escaláveis, desde aplicações web até apps mobile/desktop.",
    },
    bio2:      {
      EN: "I have a passion for everything from front-end to back-end. Bridging design and engineering to create functional and elegant solutions.",
      PT: "Tenho paixão por tudo, do front-end ao back-end. Conectando design e engenharia para criar soluções funcionais e elegantes.",
    },
    cta:       { EN: "Let's Connect", PT: "Vamos Conectar" },
  },
  about: {
    title:  { EN: "About Me",  PT: "Sobre Mim" },
    p1: {
      EN: "Hi, this is Eldo António Macuácua, from Inhambane, a province in Mozambique popularly known as the \"Terra de Boa Gente.\"",
      PT: "Olá, sou Eldo António Macuácua, de Inhambane, uma província de Moçambique popularmente conhecida como a \"Terra de Boa Gente.\"",
    },
    p2: {
      EN: "I am a creative, dependable, passionate, results-oriented individual who possesses strong moral principles and integrity. I have an enthusiastic attitude along with great communication skills, excellent organizational skills, and attention to detail.",
      PT: "Sou uma pessoa criativa, confiável, apaixonada e orientada a resultados, com fortes princípios morais e integridade. Tenho uma atitude entusiasta, ótimas habilidades de comunicação, excelentes habilidades organizacionais e atenção aos detalhes.",
    },
    p3: {
      EN: "At present, I am pursuing my Bachelor's in Information Technology & Engineering (2024–2028) from __PARUL__.",
      PT: "Atualmente, estou cursando meu Bacharelado em Tecnologia da Informação e Engenharia (2024–2028) na __PARUL__.",
    },
    hobbiesLabel: { EN: "Below are some of the things that I enjoy doing apart from my studies!", PT: "Abaixo estão algumas das coisas que gosto de fazer além dos estudos!" },
    hobbies: {
      EN: ["Play Football", "Read Books", "Code", "Music & Movies", "Solve Problems", "Gaming", "Hackathons", "Play Chess"],
      PT: ["Futebol", "Ler Livros", "Programar", "Música & Filmes", "Resolver Problemas", "Gaming", "Hackathons", "Jogar Xadrez"],
    },
  },
} as const;
