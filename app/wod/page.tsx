import type { Metadata } from "next";
import BeehiivForm from "@/components/BeehiivForm";

export const metadata: Metadata = {
  title: "Dog House Fitness · The Long Walk",
  description:
    "A free workout, every morning. Built for real garages, not commercial gyms. The Long Walk.",
};

// Today's WOD (placeholder, swap in real workouts as they're written)
const todayWOD = {
  date: "Tuesday, May 6",
  title: "The Friday Furnace",
  subtitle: "Conditioning, full body, 35 minutes",
  description:
    "A short, hard finish to the week. The pace stays even, the rest stays honest, the work stays the work. Built to be done in a garage with one bar and a kettlebell. No fancy machines, no excuses.",
  blocks: [
    {
      heading: "Warm-up",
      duration: "8 minutes",
      items: [
        "Easy bike or row, 3 minutes",
        "World's greatest stretch, 3 each side",
        "Air squats, 15 reps",
        "Push-ups, 10 reps",
      ],
    },
    {
      heading: "Block A: Strength",
      duration: "12 minutes",
      items: [
        "Trap bar deadlift, 5 sets of 5",
        "Rest 90 seconds between sets",
        "Build to a top set, then drop sets to 80%",
      ],
    },
    {
      heading: "Block B: Conditioning",
      duration: "12 minutes AMRAP",
      items: [
        "10 kettlebell swings",
        "10 push-ups",
        "10 air squats",
        "200m run or 30s bike",
      ],
    },
    {
      heading: "Cool-down",
      duration: "3 minutes",
      items: ["Walk it off. Drink water. Eat protein."],
    },
  ],
};

export default function WODPage() {
  return (
    <>
      {/* Page Intro */}
      <section style={{ padding: "100px 0 40px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 840,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 14,
              color: "#8C5E1F",
              letterSpacing: "0.1em",
              marginBottom: 18,
            }}
          >
            III
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#1B2742",
              lineHeight: 1.04,
              letterSpacing: "-0.015em",
              margin: 0,
            }}
          >
            The{" "}
            <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>
              Long Walk.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 20,
              color: "#6F6750",
              lineHeight: 1.5,
              maxWidth: 600,
              margin: "32px auto 0",
            }}
          >
            A free workout, every morning. Built for real garages, not
            commercial gyms. Show up, do the work, walk on.
          </p>
        </div>
      </section>

      {/* Today's WOD */}
      <section
        style={{
          padding: "60px 0",
          background: "#ECE0C2",
          borderTop: "1px solid rgba(176, 122, 44, 0.35)",
          borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 840,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontFamily: "var(--font-spectral)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: "#8C5E1F",
                marginBottom: 12,
              }}
            >
              Today, {todayWOD.date}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "#1B2742",
                lineHeight: 1.1,
                margin: 0,
                marginBottom: 8,
              }}
            >
              {todayWOD.title}
            </h2>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: 18,
                color: "#6F6750",
              }}
            >
              {todayWOD.subtitle}
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-spectral)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#1B2742",
              marginBottom: 40,
            }}
          >
            {todayWOD.description}
          </p>

          {/* Blocks */}
          <div>
            {todayWOD.blocks.map((block, i) => (
              <div
                key={i}
                style={{
                  paddingTop: 28,
                  paddingBottom: 28,
                  borderTop: "1px solid rgba(176, 122, 44, 0.35)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 14,
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 500,
                      fontSize: 26,
                      color: "#1B2742",
                      margin: 0,
                    }}
                  >
                    {block.heading}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-spectral)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      color: "#8C5E1F",
                    }}
                  >
                    {block.duration}
                  </div>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontFamily: "var(--font-spectral)",
                    fontSize: 16,
                    color: "#1B2742",
                    lineHeight: 1.7,
                  }}
                >
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        marginBottom: 6,
                        paddingLeft: 18,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#8C5E1F",
                        }}
                      >
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Gate */}
      <section style={{ padding: "100px 0 80px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-spectral)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              color: "#8C5E1F",
              marginBottom: 16,
            }}
          >
            The Archive
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#1B2742",
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 24,
            }}
          >
            Want to see{" "}
            <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>
              what came before?
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 18,
              color: "#6F6750",
              lineHeight: 1.5,
              maxWidth: 540,
              margin: "0 auto 40px",
            }}
          >
            Today&apos;s workout is yours, free, every day. The full archive,
            the back catalog of past dispatches, lives in your inbox. One
            email gets you in.
          </p>

          {/* Beehiiv subscribe form */}
          <BeehiivForm formId="b9a0d812-2e48-4678-bdb5-8b7ed027d6c1" />

          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 14,
              color: "#6F6750",
              margin: 0,
              marginTop: 24,
            }}
          >
            One email. Six days a week. No filler. Unsubscribe whenever.
          </p>
        </div>
      </section>
    </>
  );
}
