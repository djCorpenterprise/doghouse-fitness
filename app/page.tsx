export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#F5EDD8", color: "#1B2742" }}
    >
      <div className="text-center px-8">
        <p
          className="text-xs uppercase mb-6"
          style={{
            fontFamily: "var(--font-spectral)",
            letterSpacing: "0.4em",
            color: "#8C5E1F",
          }}
        >
          Dog House Fitness
        </p>
        <h1
          className="text-7xl md:text-9xl font-medium leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            letterSpacing: "-0.015em",
          }}
        >
          Faithful{" "}
          <span style={{ fontStyle: "italic", color: "#8C5E1F" }}>to</span> the
          work.
        </h1>
        <p
          className="mt-8 text-lg max-w-md mx-auto"
          style={{
            fontFamily: "var(--font-spectral)",
            color: "#1B2742",
            opacity: 0.85,
          }}
        >
          Custom training programs and a daily workout, for people who would
          rather earn the result than market it.
        </p>
      </div>
    </main>
  );
}
