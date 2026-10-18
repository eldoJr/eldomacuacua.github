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
