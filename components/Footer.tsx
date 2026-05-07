import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#F5EDD8",
        padding: "80px 0 36px",
        borderTop: "1px solid rgba(176, 122, 44, 0.35)",
        marginTop: 80,
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
        {/* Closing Maxim */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 50px",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-spectral)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: 11,
              color: "#8C5E1F",
              marginBottom: 24,
            }}
          >
            Closing Maxim
          </span>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#1B2742",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            &ldquo;What we do now echoes in eternity.&rdquo;
          </blockquote>
          <div
            style={{
              fontFamily: "var(--font-spectral)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              color: "#8C5E1F",
              marginTop: 18,
            }}
          >
            Marcus Aurelius, Meditations IV.iii
          </div>
        </div>

        {/* Dual Seals */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 60,
            margin: "40px 0",
            flexWrap: "wrap",
          }}
        >
          {/* Dog House seal */}
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              border: "1px solid rgba(176, 122, 44, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ECE0C2",
              padding: 14,
            }}
          >
            <Image
              src="/dog-house-logo.png"
              alt="Dog House Fitness"
              width={110}
              height={88}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Saint Michael seal */}
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              border: "1px solid rgba(176, 122, 44, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ECE0C2",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              style={{ width: 78, height: 78 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 36 56 Q 18 46, 10 28 Q 20 40, 36 50"
                fill="none"
                stroke="#8C5E1F"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M 32 53 Q 22 48, 18 38"
                fill="none"
                stroke="#8C5E1F"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              <path
                d="M 64 56 Q 82 46, 90 28 Q 80 40, 64 50"
                fill="none"
                stroke="#8C5E1F"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M 68 53 Q 78 48, 82 38"
                fill="none"
                stroke="#8C5E1F"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              <line
                x1="50"
                y1="6"
                x2="50"
                y2="68"
                stroke="#1B2742"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <line
                x1="38"
                y1="58"
                x2="62"
                y2="58"
                stroke="#1B2742"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <line
                x1="50"
                y1="58"
                x2="50"
                y2="78"
                stroke="#1B2742"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <circle cx="50" cy="82" r="3.2" fill="#1B2742" />
              <circle cx="50" cy="6" r="2.2" fill="#8C5E1F" />
            </svg>
          </div>
        </div>

        {/* Invocation */}
        <div
          style={{
            textAlign: "center",
            margin: "24px auto 50px",
            maxWidth: 600,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 18,
              color: "#1B2742",
              lineHeight: 1.4,
              marginBottom: 6,
            }}
          >
            Sancte Michael Archangele, defende nos in proelio.
          </div>
          <div
            style={{
              fontFamily: "var(--font-spectral)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              color: "#8C5E1F",
            }}
          >
            Saint Michael the Archangel, defend us in battle.
          </div>
        </div>

        {/* Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 60,
            paddingTop: 50,
            borderTop: "1px solid rgba(176, 122, 44, 0.35)",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-spectral)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: "#8C5E1F",
                margin: 0,
                marginBottom: 16,
              }}
            >
              Dog House Fitness
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ fontSize: 15, marginBottom: 8, color: "#1B2742" }}>
                doghouse.fitness
              </li>
              <li style={{ fontSize: 15, marginBottom: 8, color: "#1B2742" }}>
                Jacksonville, Florida
              </li>
              <li style={{ fontSize: 15, marginBottom: 8, color: "#1B2742" }}>
                Est. MMXXVI
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-spectral)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: "#8C5E1F",
                margin: 0,
                marginBottom: 16,
              }}
            >
              The Site
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <Link
                  href="/philosophy"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  Philosophy
                </Link>
              </li>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <Link
                  href="/plans"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  Plans
                </Link>
              </li>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <Link
                  href="/wod"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  WOD
                </Link>
              </li>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <Link
                  href="/the-house"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  The House
                </Link>
              </li>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <Link
                  href="/apply"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  Apply
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-spectral)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: "#8C5E1F",
                margin: 0,
                marginBottom: 16,
              }}
            >
              Elsewhere
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ fontSize: 15, marginBottom: 8, color: "#1B2742" }}>
                Instagram, @doghouse.fit
              </li>
              <li style={{ fontSize: 15, marginBottom: 8, color: "#1B2742" }}>
                TikTok, @doghousefitness
              </li>
              <li style={{ fontSize: 15, marginBottom: 8 }}>
                <a
                  href="mailto:dante@doghouse.fitness"
                  style={{ color: "#1B2742", textDecoration: "none" }}
                >
                  dante@doghouse.fitness
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            paddingTop: 28,
            borderTop: "1px solid rgba(176, 122, 44, 0.35)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: 13,
            color: "#6F6750",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>&copy; MMXXVI Dog House Fitness, Built in Jacksonville</span>
          <span>Faithful to the work.</span>
        </div>
      </div>
    </footer>
  );
}
