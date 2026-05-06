import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog House Fitness · Plans",
  description:
    "Three tiers of coaching, from the self-coached lifter to the close-hand client. Starter Protocol, Adaptive Coaching, Premium Coaching.",
};

const faqs = [
  {
    q: "How is the program built?",
    a: "Every program begins with the intake form. Your equipment, your goals, your injuries, your schedule, your training history. The program is forged from those answers using the Dog House framework: the principles, the tier of coaching you have chosen. It arrives in 24 hours as a clean PDF you can open on your phone or print.",
  },
  {
    q: "What if I have never trained before?",
    a: "Welcome. The intake includes a section for training experience, and the program will be built to your starting point. Beginners get more emphasis on movement quality, longer warmups, and a slower progression curve. The work is the same; the dose is different.",
  },
  {
    q: "What if I have an existing injury or a medical condition?",
    a: "The intake asks about injuries, surgeries, and conditions in detail. The program is built around them, not in spite of them. If you have something serious, the program includes specific work-around protocols. I am not your physician. If you have anything diagnosed and unmanaged, please clear training with them first.",
  },
  {
    q: "Why three tiers and not one?",
    a: "Different lifters need different things. Some have done this for years and want a smart plan they can run independently. Some want check-ins and form review. Some want close coaching with calls and nutrition. Same craft, different levels of contact.",
  },
  {
    q: "Can I upgrade or downgrade tiers later?",
    a: "Yes. If you start with the Starter Protocol and want messenger access later, the difference is credited toward Adaptive Coaching. If you outgrow Premium, you can step down. The work is the priority; the structure should serve it.",
  },
  {
    q: "Is there a refund policy?",
    a: "The Starter Protocol is non-refundable once the program has been delivered, since it is a custom one-time deliverable. Adaptive and Premium can be canceled month-to-month before the next billing cycle. If something is genuinely wrong with the work, message me directly and we will make it right.",
  },
  {
    q: "How do I apply?",
    a: "Click Apply. Fill the intake honestly. The program is only as good as the information it is built from.",
  },
];

export default function PlansPage() {
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
            II
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
            The work,{" "}
            <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>
              offered three ways.
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
            Each program is forged from your intake, built to your body, your
            goals, your gym. Choose the level of coaching you need; the work is
            yours either way.
          </p>
        </div>
      </section>

      {/* Three Tiers */}
      <section style={{ padding: "40px 0 80px" }}>
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
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 0,
              borderTop: "1px solid rgba(176, 122, 44, 0.35)",
              borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
            }}
            className="tiers-grid"
          >
            {/* Tier I: Starter Protocol */}
            <div
              style={{
                padding: "60px 36px",
                borderRight: "1px solid rgba(176, 122, 44, 0.35)",
                position: "relative",
              }}
              className="tier-card"
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 14,
                }}
              >
                i.
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 500,
                  fontSize: 32,
                  color: "#1B2742",
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                The Starter Protocol
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 24,
                }}
              >
                The Self-Coached Lifter
              </div>

              <div style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: 48,
                    fontWeight: 500,
                    color: "#1B2742",
                  }}
                >
                  $150
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-spectral)",
                    fontSize: 13,
                    color: "#6F6750",
                    marginLeft: 8,
                  }}
                >
                  once, 8 weeks
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                A custom 8-week program, written from your intake. PDF
                delivery in 24 hours. For lifters who already know how to
                train and want a smart plan to run.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 14,
                  color: "#1B2742",
                  lineHeight: 1.7,
                }}
              >
                <li style={{ marginBottom: 6 }}>· Custom 8-week program</li>
                <li style={{ marginBottom: 6 }}>
                  · Built around your equipment and schedule
                </li>
                <li style={{ marginBottom: 6 }}>
                  · Hip-safe and injury-aware programming
                </li>
                <li style={{ marginBottom: 6 }}>· Branded PDF, 24-hour delivery</li>
              </ul>

              <Link
                href="/apply"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "transparent",
                  border: "1px solid #1B2742",
                  color: "#1B2742",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                }}
              >
                Apply
              </Link>
            </div>

            {/* Tier II: Adaptive Coaching */}
            <div
              style={{
                padding: "60px 36px",
                borderRight: "1px solid rgba(176, 122, 44, 0.35)",
                background: "#ECE0C2",
                position: "relative",
              }}
              className="tier-card tier-featured"
            >
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "#B07A2C",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 14,
                }}
              >
                ii.
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 500,
                  fontSize: 32,
                  color: "#1B2742",
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                Adaptive Coaching
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 24,
                }}
              >
                The Coached Lifter
              </div>

              <div style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: 48,
                    fontWeight: 500,
                    color: "#1B2742",
                  }}
                >
                  $225
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-spectral)",
                    fontSize: 13,
                    color: "#6F6750",
                    marginLeft: 8,
                  }}
                >
                  per month
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                Custom programming with messenger access. Form-check video
                review twice a week. Friday async check-in. For lifters who
                want eyes on the work.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 14,
                  color: "#1B2742",
                  lineHeight: 1.7,
                }}
              >
                <li style={{ marginBottom: 6 }}>· Everything in Starter</li>
                <li style={{ marginBottom: 6 }}>· Messenger access (DM-style)</li>
                <li style={{ marginBottom: 6 }}>
                  · Two form-check videos per week
                </li>
                <li style={{ marginBottom: 6 }}>· Friday async check-in</li>
                <li style={{ marginBottom: 6 }}>
                  · Programs adjusted weekly to your progress
                </li>
              </ul>

              <Link
                href="/apply"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "#1B2742",
                  border: "1px solid #1B2742",
                  color: "#F5EDD8",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                }}
              >
                Apply
              </Link>
            </div>

            {/* Tier III: Premium Coaching */}
            <div
              style={{
                padding: "60px 36px",
                position: "relative",
              }}
              className="tier-card"
            >
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  fontFamily: "var(--font-spectral)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#8C5E1F",
                  border: "1px solid #B07A2C",
                  padding: "4px 10px",
                }}
              >
                Limited Spots
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#8C5E1F",
                  marginBottom: 14,
                }}
              >
                iii.
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 500,
                  fontSize: 32,
                  color: "#1B2742",
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                Premium Coaching
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.32em",
                  color: "#8C5E1F",
                  marginBottom: 24,
                }}
              >
                The Close-Hand Client
              </div>

              <div style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: 48,
                    fontWeight: 500,
                    color: "#1B2742",
                  }}
                >
                  $375
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-spectral)",
                    fontSize: 13,
                    color: "#6F6750",
                    marginLeft: 8,
                  }}
                >
                  per month
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#1B2742",
                  marginBottom: 24,
                }}
              >
                Weekly 15-minute calls. Custom training and nutrition.
                Priority messenger response. For lifters who want the closest
                possible coaching relationship.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 14,
                  color: "#1B2742",
                  lineHeight: 1.7,
                }}
              >
                <li style={{ marginBottom: 6 }}>· Everything in Adaptive</li>
                <li style={{ marginBottom: 6 }}>
                  · Weekly 15-minute video call
                </li>
                <li style={{ marginBottom: 6 }}>
                  · Custom nutrition guidance
                </li>
                <li style={{ marginBottom: 6 }}>
                  · Priority messenger response
                </li>
                <li style={{ marginBottom: 6 }}>· Quarterly review and reset</li>
              </ul>

              <Link
                href="/apply"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "transparent",
                  border: "1px solid #1B2742",
                  color: "#1B2742",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  textDecoration: "none",
                }}
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "#ECE0C2",
          borderTop: "1px solid rgba(176, 122, 44, 0.35)",
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
          <div style={{ textAlign: "center", marginBottom: 60 }}>
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
              Frequently Asked
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "#1B2742",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Questions{" "}
              <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>
                worth answering.
              </span>
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  borderBottom:
                    i === faqs.length - 1
                      ? "none"
                      : "1px solid rgba(176, 122, 44, 0.35)",
                }}
              >
                <summary
                  style={{
                    padding: "24px 0",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                    fontSize: 22,
                    color: "#1B2742",
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: 28,
                      color: "#8C5E1F",
                      lineHeight: 1,
                      marginLeft: 16,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div style={{ padding: "0 0 28px 0" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-spectral)",
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "#1B2742",
                      margin: 0,
                      maxWidth: "85%",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
