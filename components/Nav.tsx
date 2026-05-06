"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/plans", label: "Plans" },
  { href: "/wod", label: "WOD" },
  { href: "/the-house", label: "The House" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
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
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 600,
              fontSize: 22,
              color: "#1B2742",
              letterSpacing: "-0.01em",
            }}
          >
            Dog House Fitness
          </span>
          <span
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
          style={{
            listStyle: "none",
            display: "flex",
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
      </div>
    </nav>
  );
}
