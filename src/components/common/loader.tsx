"use client";

import { useEffect, useRef, useState } from "react";
import LogoSvg from "./logosvg";

// Shared ref so loader can read navbar logo position
export let navLogoRef: React.RefObject<HTMLAnchorElement | null> | null = null;
export function setNavLogoRef(r: React.RefObject<HTMLAnchorElement | null>) {
  navLogoRef = r;
}

export default function Loader() {
  const [phase, setPhase] = useState<"draw" | "move" | "done">("draw");
  const [dark, setDark] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(document.documentElement.classList.contains("dark"));
    const handler = () => setDark(document.documentElement.classList.contains("dark"));
    mq.addEventListener("change", handler);
    const observer = new MutationObserver(handler);
    observer.observe(document.documentElement, { attributeFilter: ["class"] });

    const t1 = setTimeout(() => {
      if (ref.current && navLogoRef?.current) {
        const from = ref.current.getBoundingClientRect();
        const to   = navLogoRef.current.getBoundingClientRect();

        // translate from-center to to-center, then scale
        const scaleX = to.width  / from.width;
        const scaleY = to.height / from.height;
        const dx = (to.left + to.width  / 2) - (from.left + from.width  / 2);
        const dy = (to.top  + to.height / 2) - (from.top  + from.height / 2);

        setStyle({
          transform: `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`,
        });
      }
      setPhase("move");
    }, 2700);

    const t2 = setTimeout(() => setPhase("done"), 4500);

    return () => {
      mq.removeEventListener("change", handler);
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const bg = dark ? "#0a0a0a" : "#ffffff";

  return (
    <div
      className="lo-overlay"
      style={{
        background: bg,
        animation: phase === "move" ? "loFadeOut 0.45s ease 1.6s forwards" : "none",
      }}
    >
      <style>{`
        @keyframes drawStroke { to { stroke-dashoffset: 0; } }
        @keyframes ldoIn      { to { opacity: 1; } }
        @keyframes loFadeOut  { to { opacity: 0; pointer-events: none; } }
        .lo-overlay {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
        }
        .lo-svg {
          transform-origin: center center;
          transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);
          will-change: transform;
        }
      `}</style>

      <div ref={ref} className="lo-svg" style={phase === "move" ? style : {}}>
        <LogoSvg animate={phase === "draw"} width={48} />
      </div>
    </div>
  );
}
