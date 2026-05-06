import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog House Fitness · Apply",
  description:
    "Apply for coaching. The intake is the foundation of every program. The more honest the answers, the better the work.",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-spectral)",
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#1B2742",
  marginBottom: 8,
  fontWeight: 500,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontFamily: "var(--font-spectral)",
  fontSize: 16,
  color: "#1B2742",
  background: "#F5EDD8",
  border: "1px solid rgba(176, 122, 44, 0.4)",
  outline: "none",
  marginBottom: 24,
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 100,
  resize: "vertical" as const,
  lineHeight: 1.6,
  fontFamily: "var(--font-spectral)",
};

const sectionStyle: React.CSSProperties = {
  paddingTop: 60,
  paddingBottom: 60,
  borderBottom: "1px solid rgba(176, 122, 44, 0.35)",
};

const sectionNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontStyle: "italic",
  fontSize: 14,
  color: "#8C5E1F",
  marginBottom: 8,
};

const sectionHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 500,
  fontSize: 36,
  color: "#1B2742",
  margin: 0,
  marginBottom: 8,
};

const sectionDescStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontStyle: "italic",
  fontSize: 16,
  color: "#6F6750",
  marginBottom: 32,
};

const helpTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-spectral)",
  fontSize: 13,
  color: "#6F6750",
  marginTop: -16,
  marginBottom: 24,
  fontStyle: "italic",
};

export default function ApplyPage() {
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
            V
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
              intake.
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
            The intake is the foundation of every program. The more honest the
            answers, the better the work. Take your time.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "20px 0 100px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <form>
            {/* Section 1: The Basics */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>i.</div>
              <h2 style={sectionHeadStyle}>The Basics</h2>
              <p style={sectionDescStyle}>
                Who you are, where to reach you.
              </p>

              <label style={labelStyle} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                style={inputStyle}
                required
              />

              <label style={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                style={inputStyle}
                required
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 20,
                }}
                className="basics-grid"
              >
                <div>
                  <label style={labelStyle} htmlFor="age">
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="18"
                    max="99"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="height">
                    Height
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="text"
                    placeholder="6'2&quot;"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="weight">
                    Weight (lbs)
                  </label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Goals */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>ii.</div>
              <h2 style={sectionHeadStyle}>Goals</h2>
              <p style={sectionDescStyle}>
                What are you actually trying to do.
              </p>

              <label style={labelStyle} htmlFor="primary-goal">
                Primary Objective
              </label>
              <select
                id="primary-goal"
                name="primary-goal"
                style={inputStyle}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="lose-fat">Lose body fat</option>
                <option value="build-muscle">Build muscle</option>
                <option value="get-strong">Get stronger</option>
                <option value="recomp">Body recomposition</option>
                <option value="general">General fitness, longevity</option>
                <option value="athletic">Athletic performance</option>
              </select>

              <label style={labelStyle} htmlFor="target">
                Target Outcome
              </label>
              <textarea
                id="target"
                name="target"
                style={textareaStyle}
                placeholder="What does success look like for you in plain language?"
              />

              <label style={labelStyle} htmlFor="timeline">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                style={inputStyle}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="3mo">Next 3 months</option>
                <option value="6mo">Next 6 months</option>
                <option value="12mo">Next 12 months</option>
                <option value="lifetime">Long-term lifestyle</option>
              </select>
            </div>

            {/* Section 3: Training History */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>iii.</div>
              <h2 style={sectionHeadStyle}>Training History</h2>
              <p style={sectionDescStyle}>
                What you have done. What you can do now.
              </p>

              <label style={labelStyle} htmlFor="years-training">
                Years Training
              </label>
              <select
                id="years-training"
                name="years-training"
                style={inputStyle}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="0">Less than 6 months</option>
                <option value="1">6 months to 1 year</option>
                <option value="2-3">2 to 3 years</option>
                <option value="4-7">4 to 7 years</option>
                <option value="8+">8 or more years</option>
              </select>

              <label style={labelStyle} htmlFor="current-routine">
                Current Routine
              </label>
              <textarea
                id="current-routine"
                name="current-routine"
                style={textareaStyle}
                placeholder="What does your current week of training look like? Be specific if you can."
              />

              <label style={labelStyle} htmlFor="lifts">
                Major Lifts You Know
              </label>
              <textarea
                id="lifts"
                name="lifts"
                style={textareaStyle}
                placeholder="Bench, squat, deadlift, OHP, weighted pullup, others. Approximate working weights are useful but not required."
              />
            </div>

            {/* Section 4: Equipment & Schedule */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>iv.</div>
              <h2 style={sectionHeadStyle}>Equipment & Schedule</h2>
              <p style={sectionDescStyle}>
                Where the work happens.
              </p>

              <label style={labelStyle} htmlFor="gym-type">
                Gym Setup
              </label>
              <select
                id="gym-type"
                name="gym-type"
                style={inputStyle}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="commercial">Commercial gym</option>
                <option value="garage-full">
                  Garage gym, fully equipped
                </option>
                <option value="garage-basic">
                  Garage gym, basics only
                </option>
                <option value="hybrid">Mix of gym and home</option>
                <option value="bodyweight">Bodyweight only</option>
              </select>

              <label style={labelStyle} htmlFor="equipment">
                Equipment Available
              </label>
              <textarea
                id="equipment"
                name="equipment"
                style={textareaStyle}
                placeholder="Barbell, dumbbells, rack, bench, machines, cable, etc. List what you actually have access to."
              />

              <label style={labelStyle} htmlFor="days-per-week">
                Days Per Week
              </label>
              <select
                id="days-per-week"
                name="days-per-week"
                style={inputStyle}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
                <option value="7">7 days</option>
              </select>

              <label style={labelStyle} htmlFor="time-per-session">
                Time Per Session
              </label>
              <select
                id="time-per-session"
                name="time-per-session"
                style={inputStyle}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="30">30 minutes or less</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="75">75 minutes</option>
                <option value="90+">90 minutes or more</option>
              </select>
            </div>

            {/* Section 5: Injuries & Conditions */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>v.</div>
              <h2 style={sectionHeadStyle}>Injuries & Conditions</h2>
              <p style={sectionDescStyle}>
                The program is built around them, not in spite of them.
              </p>

              <label style={labelStyle} htmlFor="current-injuries">
                Current Injuries or Pain
              </label>
              <textarea
                id="current-injuries"
                name="current-injuries"
                style={textareaStyle}
                placeholder="Anything that hurts during or after training. Anything you have to work around."
              />

              <label style={labelStyle} htmlFor="past-surgeries">
                Past Surgeries or Major Injuries
              </label>
              <textarea
                id="past-surgeries"
                name="past-surgeries"
                style={textareaStyle}
                placeholder="ACL repair, shoulder labrum, herniated disc, etc. With approximate dates if possible."
              />

              <label style={labelStyle} htmlFor="medical-conditions">
                Medical Conditions
              </label>
              <textarea
                id="medical-conditions"
                name="medical-conditions"
                style={textareaStyle}
                placeholder="Diabetes, blood pressure, heart conditions, autoimmune, anything that affects how you train."
              />
              <p style={helpTextStyle}>
                I am not your physician. If you have anything diagnosed and
                unmanaged, please clear training with them first.
              </p>
            </div>

            {/* Section 6: Body & Recovery */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>vi.</div>
              <h2 style={sectionHeadStyle}>Body & Recovery</h2>
              <p style={sectionDescStyle}>
                What happens between the sessions.
              </p>

              <label style={labelStyle} htmlFor="sleep">
                Average Sleep
              </label>
              <select
                id="sleep"
                name="sleep"
                style={inputStyle}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="under-5">Under 5 hours</option>
                <option value="5-6">5 to 6 hours</option>
                <option value="6-7">6 to 7 hours</option>
                <option value="7-8">7 to 8 hours</option>
                <option value="8+">8 or more hours</option>
              </select>

              <label style={labelStyle} htmlFor="stress">
                Stress Level
              </label>
              <select
                id="stress"
                name="stress"
                style={inputStyle}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="low">Low. Generally calm.</option>
                <option value="moderate">
                  Moderate. Some pressure.
                </option>
                <option value="high">High. Significant pressure.</option>
                <option value="very-high">
                  Very high. Crisis-level.
                </option>
              </select>

              <label style={labelStyle} htmlFor="nutrition">
                Nutrition Approach
              </label>
              <textarea
                id="nutrition"
                name="nutrition"
                style={textareaStyle}
                placeholder="Roughly what does your eating look like? Any tracking, any restrictions, any approach you follow."
              />
            </div>

            {/* Section 7: Tier */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>vii.</div>
              <h2 style={sectionHeadStyle}>Tier of Coaching</h2>
              <p style={sectionDescStyle}>
                Choose the level of contact you want.
              </p>

              <label style={labelStyle} htmlFor="tier">
                Tier
              </label>
              <select
                id="tier"
                name="tier"
                style={inputStyle}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="starter">
                  Starter Protocol, $150 once
                </option>
                <option value="adaptive">
                  Adaptive Coaching, $225 per month
                </option>
                <option value="premium">
                  Premium Coaching, $375 per month
                </option>
              </select>
            </div>

            {/* Section 8: Founding 50 Code */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>viii.</div>
              <h2 style={sectionHeadStyle}>Founding 50 Code</h2>
              <p style={sectionDescStyle}>
                If you have the FOUNDING50 code, enter it here. First 25
                lifters get 50% off the Starter Protocol.
              </p>

              <label style={labelStyle} htmlFor="promo">
                Promo Code (optional)
              </label>
              <input
                id="promo"
                name="promo"
                type="text"
                style={inputStyle}
                placeholder="FOUNDING50"
              />
            </div>

            {/* Section 9: Anything Else */}
            <div style={sectionStyle}>
              <div style={sectionNumStyle}>ix.</div>
              <h2 style={sectionHeadStyle}>Anything Else</h2>
              <p style={sectionDescStyle}>
                Things I should know that the questions did not ask.
              </p>

              <label style={labelStyle} htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                style={{ ...textareaStyle, minHeight: 140 }}
                placeholder="Anything at all. Context about your life, schedule oddities, history, what didn't fit in the boxes above."
              />
            </div>

            {/* Submit */}
            <div
              style={{
                paddingTop: 40,
                paddingBottom: 40,
                textAlign: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  display: "inline-block",
                  padding: "16px 40px",
                  background: "#1B2742",
                  border: "1px solid #1B2742",
                  color: "#F5EDD8",
                  fontFamily: "var(--font-spectral)",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Submit the Intake
              </button>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#6F6750",
                  margin: 0,
                  marginTop: 20,
                }}
              >
                Form submission goes live in Phase 2. For now, this is the
                shape of the intake.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
