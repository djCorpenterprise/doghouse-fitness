import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dog House Fitness · The House",
  description:
    "Whose names are on the door. The coach, the companion, the patron.",
};

export default function HousePage() {
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
            IV
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
            Whose{" "}
            <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>house.</span>
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
            Every workshop has names on the door. One who writes the programs.
            One who walks beside them. One who watches over the work.
          </p>
        </div>
      </section>

      {/* I. Dante */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(176, 122, 44, 0.35)",
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
            className="house-grid"
          >
            <div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  background: "#ECE0C2",
                  border: "1px solid rgba(176, 122, 44, 0.35)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/dante.jpg"
                  alt="Dante in the workshop"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 880px) 100vw, 33vw"
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#6F6750",
                  textAlign: "center",
                  marginTop: 14,
                }}
              >
                Dante, in the workshop.
              </div>
            </div>

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
                  fontWeight: 500,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  color: "#1B2742",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                Dante.
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 32,
                }}
              >
                Coach
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 20,
                }}
              >
                Former D1 pitcher. Florida Atlantic, then Western Carolina.
                Throwing arm intact, hips less so; two torn labrums and
                counting. That&apos;s most of how Dog House Fitness got
                started. Programs written for elite twenty-two-year-olds
                don&apos;t always work for the rest of us. They don&apos;t
                always work for elite twenty-two-year-olds either.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 20,
                }}
              >
                I write the programs. I review the form-check videos. I answer
                the messenger.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  margin: 0,
                }}
              >
                The pitch isn&apos;t that I have it all figured out. The pitch
                is that I&apos;ve been the guy who showed up to the gym with
                the wrong plan enough times to know what the right one looks
                like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* II. Giovanni */}
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
              gridTemplateColumns: "2fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
            className="house-grid-reverse"
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
                  fontWeight: 500,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  color: "#1B2742",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                Giovanni.
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 32,
                }}
              >
                Companion
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 20,
                }}
              >
                Man&apos;s best friend and elite training partner. Never misses
                a workout, by my side through thick and thin. Not a great
                spotter, but an elite companion. Wakes up for tug-of-war,
                walks, and the sound of the treat drawer.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  margin: 0,
                }}
              >
                Doesn&apos;t know what soreness is. Doesn&apos;t know what
                motivation is. Shows up because the day arrived. There&apos;s
                a lesson in there for the rest of us.
              </p>
            </div>

            <div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  background: "#F5EDD8",
                  border: "1px solid rgba(176, 122, 44, 0.35)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/gio.jpg"
                  alt="Giovanni mid-game"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 880px) 100vw, 33vw"
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#6F6750",
                  textAlign: "center",
                  marginTop: 14,
                }}
              >
                Giovanni, mid-game.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* III. Saint Michael */}
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
            className="house-grid"
          >
            <div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  background: "#ECE0C2",
                  border: "1px solid rgba(176, 122, 44, 0.35)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/saint-michael.jpg"
                  alt="Saint Michael the Archangel"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 880px) 100vw, 33vw"
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#6F6750",
                  textAlign: "center",
                  marginTop: 14,
                }}
              >
                Saint Michael, in the classical style.
              </div>
            </div>

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
                  fontWeight: 500,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  color: "#1B2742",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                Saint Michael.
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 32,
                }}
              >
                Patron
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 20,
                }}
              >
                The fighter. The protector. The one with a sword in his hand
                and his foot on the dragon. He is the patron of the warriors
                among us, and we look to him in reflection of the warrior
                within.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 28,
                }}
              >
                The discipline to stand when the body is asking you to sit.
                The fight against your own weakness. The willingness to show
                up in the dark hour of the morning, alone with the bar. The
                example is the example, and we keep it on the wall.
              </p>

              <div
                style={{
                  paddingTop: 20,
                  borderTop: "1px solid rgba(176, 122, 44, 0.35)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: "#8C5E1F",
                    marginBottom: 6,
                  }}
                >
                  Quis ut Deus.
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-spectral)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.32em",
                    color: "#6F6750",
                  }}
                >
                  Who is like God, the meaning of his name.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
