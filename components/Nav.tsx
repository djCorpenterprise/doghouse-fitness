"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/plans", label: "Plans" },
  { href: "/wod", label: "WOD" },
  { href: "/the-house", label: "The House" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-apply { display: inline-block; }
        .nav-hamburger { display: none; }
        .nav-est { display: inline; }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none; }
          .nav-desktop-apply { display: none; }
          .nav-hamburger { display: flex; }
          .nav-est { display: none; }
          .nav-logo { font-size: 18px !important; }
          .nav-inner { padding: 14px 20px !important; }
        }
      `}</style>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#F5EDD8",
          borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
        }}
      >
        <div
          className="nav-inner"
          style={{
            width: "100%",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "18px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <span
              className="nav-logo"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: 22,
                color: "#1B2742",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              Dog House Fitness
            </span>
            <span
              className="nav-est"
              style={{
                fontFamily: "var(--font-spectral)",
                fontSize: 9,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: "#8C5E1F",
              }}
            >
              Est. MMXXVI
            </span>
          </Link>

          <ul
            className="nav-desktop-links"
            style={{
              listStyle: "none",
              gap: 36,
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-spectral)",
                      fontSize: 13,
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: isActive ? "#8C5E1F" : "#1B2742",
                      paddingBottom: 4,
                      borderBottom: isActive ? "1px solid #B07A2C" : "none",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/apply"
            className="nav-desktop-apply"
            style={{
              background: "#1B2742",
              color: "#F5EDD8",
              padding: "10px 18px",
              fontFamily: "var(--font-spectral)",
              fontSize: 12,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              border: "1px solid #1B2742",
              textDecoration: "none",
            }}
          >
            Apply
          </Link>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              background: "transparent",
              border: "none",
              padding: 8,
              cursor: "pointer",
              zIndex: 51,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1.5,
                background: "#1B2742",
                transition: "transform 0.2s",
                transformOrigin: "center",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                width: 24,
                height: 1.5,
                background: "#1B2742",
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                width: 24,
                height: 1.5,
                background: "#1B2742",
                transition: "transform 0.2s",
                transformOrigin: "center",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {open && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#F5EDD8",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              paddingTop: 76,
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "12px 32px 0",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.href}
                    style={{
                      borderBottom: "1px solid rgba(176, 122, 44, 0.25)",
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 500,
                        fontSize: 32,
                        color: isActive ? "#8C5E1F" : "#1B2742",
                        padding: "20px 0",
                        textDecoration: "none",
                        fontStyle: isActive ? "italic" : "normal",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              style={{
                padding: "32px",
                marginTop: "auto",
                paddingBottom: 48,
              }}
            >
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  background: "#1B2742",
                  color: "#F5EDD8",
                  padding: "16px 24px",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 14,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid #1B2742",
                }}
              >
                Apply
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
