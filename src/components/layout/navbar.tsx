"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import LogoSvg from "@/components/common/logosvg";
import { setNavLogoRef } from "@/components/common/loader";
import { useTheme } from "@/lib/theme";
import { useLang, t } from "@/lib/lang";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const linkDefs = [
  { num: "01.", key: "about",      href: "#about" },
  { num: "02.", key: "experience", href: "#experience" },
  { num: "03.", key: "projects",   href: "#projects" },
  { num: "04.", key: "contact",    href: "#contact" },
] as const;

const ease = [0.4, 0, 0.2, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();
  const links = linkDefs.map(({ num, key, href }) => ({ num, href, label: t.nav[key][lang] }));
  const { scrollY } = useScroll();

  // shrink navbar on scroll
  const height    = useTransform(scrollY, [0, 60], ["var(--nb-height)", "48px"]);
  const paddingX  = useTransform(scrollY, [0, 60], ["var(--nb-px)", "1.6rem"]);
  const opacity   = useTransform(scrollY, [0, 60], [0, 1]);  // backdrop opacity

  useEffect(() => {
    setNavLogoRef(logoRef);
  }, []);

  return (
    <>
      <motion.nav
        style={{ height, paddingLeft: paddingX, paddingRight: paddingX }}
        className="nb"
      >
        {/* frosted backdrop fades in on scroll */}
        <motion.div className="nb-backdrop" style={{ opacity }} />

        <Link ref={logoRef} href="/" className="nb-logo">
          <LogoSvg width={24} />
        </Link>

        {/* desktop links */}
        <ul className="nb-links">
          {links.map(({ num, label, href }, i) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.3 + i * 0.07, duration: 0.35, ease }}
            >
              <Link href={href} className="nb-link">
                <span className="nb-num">{num}</span>{label}
              </Link>
            </motion.li>
          ))}

          <motion.li
            className="nb-controls"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.3 + links.length * 0.07, duration: 0.35, ease }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="nb-ctrl-btn" aria-label="Language">
                <i className="bi bi-globe2" />
                <span className="nb-lang-label">{lang}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="nb-dropdown">
                <DropdownMenuItem onClick={() => setLang("EN")} className={lang === "EN" ? "nb-dd-active" : ""}>
                  <i className="bi bi-check2" style={{ opacity: lang === "EN" ? 1 : 0 }} /> EN — English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("PT")} className={lang === "PT" ? "nb-dd-active" : ""}>
                  <i className="bi bi-check2" style={{ opacity: lang === "PT" ? 1 : 0 }} /> PT — Português
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={toggle} className="nb-ctrl-btn" aria-label="Toggle theme">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                  exit={{    opacity: 0, rotate:  30, scale: 0.7 }}
                  transition={{ duration: 0.2, ease }}
                  style={{ display: "flex" }}
                >
                  {theme === "dark" ? (
                    <i className="bi bi-sun" />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                      <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.3 + (links.length + 1) * 0.07, duration: 0.35, ease }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nb-resume">
              <span>{t.nav.resume[lang]}</span>
            </a>
          </motion.li>
        </ul>

        {/* hamburger */}
        <button className="nb-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease }} className="bl" />
          <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2, ease }} className="bl" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease }} className="bl" />
        </button>
      </motion.nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nb-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
          >
            <ul className="nb-mlinks">
              {links.map(({ num, label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease }}
                >
                  <Link href={href} className="nb-mlink" onClick={() => setOpen(false)}>
                    <span className="nb-num">{num}</span>{label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.3, ease }}
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nb-resume">
                  <span>{t.nav.resume[lang]}</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nb-backdrop {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: color-mix(in srgb, var(--background) 80%, transparent);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--color-border);
        }

        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          opacity: 0;
          animation: nbLogoIn 0.35s ease 4.2s forwards;
        }
        @keyframes nbLogoIn { to { opacity: 1; } }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0; padding: 0;
        }

        .nb-controls {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nb-ctrl-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--foreground);
          opacity: 0.65;
          font-size: var(--text-base);
          padding: var(--icon-btn-py) var(--icon-btn-px);
          border-radius: var(--radius-sm);
          transition: opacity 0.2s ease;
          font-family: var(--font-sf-mono);
        }
        .nb-ctrl-btn:hover {
          opacity: 1;
          animation: nbCtrlShimmer var(--shimmer-duration) ease forwards;
        }
        @keyframes nbCtrlShimmer {
          0%   { color: var(--foreground); }
          30%  { color: var(--color-accent); }
          60%  { color: #ff9a3c; }
          100% { color: var(--color-accent); }
        }

        .nb-lang-label {
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        .nb-dropdown {
          font-family: var(--font-sf-pro);
          font-size: var(--text-sm);
          min-width: 140px;
        }
        .nb-dd-active { color: var(--color-accent); }

        .nb-num {
          font-family: var(--font-sf-mono);
          font-size: 0.72rem;
          color: var(--color-accent);
          -webkit-text-fill-color: var(--color-accent);
          margin-right: 0.3rem;
          font-weight: 600;
        }

        .nb-link {
          font-family: var(--font-sf-pro);
          font-size: var(--text-sm);
          text-decoration: none;
          opacity: 0.65;
          position: relative;
          padding-bottom: 3px;
          transition: opacity 0.2s ease;
          background: linear-gradient(90deg, var(--foreground) 0%, var(--foreground) 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%; height: 1px;
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          background-position: 100% 0;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .nb-link:hover {
          opacity: 1;
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: nbShimmer var(--shimmer-duration) ease forwards;
        }
        .nb-link:hover::after {
          opacity: 1;
          animation: nbLineShimmer var(--shimmer-duration) ease forwards;
        }
        @keyframes nbShimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: 0% 0; }
        }
        @keyframes nbLineShimmer {
          0%   { background-position: 100% 0; opacity: 0; }
          15%  { opacity: 1; }
          100% { background-position: 0% 0; opacity: 1; }
        }

        .nb-resume {
          font-family: var(--font-sf-pro);
          font-size: var(--text-sm);
          color: var(--color-accent);
          text-decoration: none;
          padding: var(--btn-py) var(--btn-px);
          border: 1px solid var(--color-accent);
          border-radius: var(--radius-sm);
          background: transparent;
          min-width: 6.5rem;
          text-align: center;
        }
        .nb-resume span {
          display: inline-block;
          -webkit-text-fill-color: var(--color-accent);
        }
        .nb-resume:hover span {
          background: var(--shimmer-gradient);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nbShimmer var(--shimmer-duration) ease forwards;
        }

        .nb-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .bl {
          display: block;
          width: 24px; height: 2px;
          background: var(--foreground);
          border-radius: var(--radius-sm);
        }

        .nb-mobile {
          position: fixed;
          top: var(--nb-height); left: 0; right: 0; bottom: 0;
          z-index: 99;
          background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nb-mlinks {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }
        .nb-mlink {
          font-family: var(--font-sf-pro);
          font-size: var(--text-3xl);
          font-weight: 500;
          color: var(--foreground);
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.2s ease;
        }
        .nb-mlink:hover { opacity: 1; }

        @media (max-width: 768px) {
          .nb-links { display: none; }
          .nb-burger { display: flex; }
        }
      `}</style>
    </>
  );
}
