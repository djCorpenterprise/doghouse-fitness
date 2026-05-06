import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog House Fitness · Philosophy",
  description:
    "Three pillars, held without apology. Disciplina, Pietas, Ferrum. The values the workshop is built on.",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Page Intro */}
      <section style={{ padding: "100px 0 60px" }}>
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
            I
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
            Three pillars,{" "}
            <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>
              held without apology.
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
            Every workshop has its values, the things it will not compromise.
            These are ours. They are not slogans. They are the rules of the
            work.
          </p>
        </div>
      </section>

      {/* Pillar I: Disciplina */}
      <section
        style={{
          padding: "80px 0",
          background: "#ECE0C2",
          borderTop: "1px solid rgba(176, 122, 44, 0.35)",
          borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "start",
            }}
            className="pillar-grid"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 8,
                }}
              >
                i.
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(48px, 6vw, 80px)",
                  color: "#8C5E1F",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Disciplina
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#1B2742",
                  marginTop: 12,
                }}
              >
                Discipline
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                Show up before you feel like it. Especially when you don&apos;t.
                The work doesn&apos;t care if you slept. The bar doesn&apos;t
                care if you&apos;re sore. The clock on the wall has no opinion
                about your motivation. Move anyway.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 32,
                }}
              >
                Discipline is not the absence of feeling. It is the willingness
                to act in spite of it. Most days you will not want to lift.
                Most days you will lift. That is the practice.
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "#1B2742",
                  lineHeight: 1.4,
                  borderLeft: "2px solid #B07A2C",
                  paddingLeft: 24,
                  margin: "32px 0 12px",
                }}
              >
                &ldquo;You have power over your mind, not outside events.
                Realize this, and you will find strength.&rdquo;
              </blockquote>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  paddingLeft: 24,
                }}
              >
                Marcus Aurelius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar II: Pietas */}
      <section style={{ padding: "80px 0" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "start",
            }}
            className="pillar-grid"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 8,
                }}
              >
                ii.
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(48px, 6vw, 80px)",
                  color: "#8C5E1F",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Pietas
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#1B2742",
                  marginTop: 12,
                }}
              >
                Reverence
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                Reverence for the work, the body, the people who came before.
                Pietas is the older virtue. It does not mean weakness or
                quietude. It means honoring what is owed: to those who taught
                you, to those who built the methods you use, to the long
                tradition of training that did not begin with you and will not
                end with you.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 32,
                }}
              >
                A program is a debt to the people whose work it stands on.
                Train in a way that honors that debt. Take the body
                seriously. Take recovery seriously. Take other people
                seriously. The work is not about you alone.
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "#1B2742",
                  lineHeight: 1.4,
                  borderLeft: "2px solid #B07A2C",
                  paddingLeft: 24,
                  margin: "32px 0 12px",
                }}
              >
                &ldquo;Waste no more time arguing what a good man should be. Be
                one.&rdquo;
              </blockquote>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  paddingLeft: 24,
                }}
              >
                Marcus Aurelius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar III: Ferrum */}
      <section
        style={{
          padding: "80px 0",
          background: "#ECE0C2",
          borderTop: "1px solid rgba(176, 122, 44, 0.35)",
          borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "start",
            }}
            className="pillar-grid"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 8,
                }}
              >
                iii.
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(48px, 6vw, 80px)",
                  color: "#8C5E1F",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Ferrum
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#1B2742",
                  marginTop: 12,
                }}
              >
                Iron
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                The bar is honest. Iron does not flatter you. It does not
                negotiate. It does not care about your story. The plate weighs
                what the plate weighs. The rep is real or it is not. There is
                a clarity in that.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 32,
                }}
              >
                Ferrum is the third pillar because it is the one most easily
                forgotten in modern training. We have machines, screens,
                algorithms. We have programs that change every week and apps
                that gamify movement. Underneath all of that, still: the bar.
                Pick it up. Put it down. Repeat. Years.
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "#1B2742",
                  lineHeight: 1.4,
                  borderLeft: "2px solid #B07A2C",
                  paddingLeft: 24,
                  margin: "32px 0 12px",
                }}
              >
                &ldquo;The impediment to action advances action. What stands in
                the way becomes the way.&rdquo;
              </blockquote>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  paddingLeft: 24,
                }}
              >
                Marcus Aurelius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing thought */}
      <section style={{ padding: "100px 0 60px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 22,
              color: "#1B2742",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            These are the values the programs are written from. Not
            abstractions. Working principles.
          </p>
        </div>
      </section>
    </>
  );
}
