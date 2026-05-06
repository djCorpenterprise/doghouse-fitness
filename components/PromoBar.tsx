export default function PromoBar() {
  return (
    <div
      style={{
        background: "#1B2742",
        color: "#F5EDD8",
        padding: "9px 0",
        textAlign: "center",
        fontFamily: "var(--font-spectral)",
        fontSize: "12px",
        letterSpacing: "0.16em",
        borderBottom: "1px solid #B07A2C",
      }}
    >
      <span>Founding Members</span>
      <span
        style={{
          display: "inline-block",
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "#C99656",
          margin: "0 14px",
          verticalAlign: "middle",
        }}
      />
      <span>
        First 25 lifters get{" "}
        <strong style={{ color: "#C99656", fontWeight: 600 }}>50% off</strong>{" "}
        the Starter Protocol
      </span>
      <span
        style={{
          display: "inline-block",
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "#C99656",
          margin: "0 14px",
          verticalAlign: "middle",
        }}
      />
      <span>
        Code{" "}
        <strong style={{ color: "#C99656", fontWeight: 600 }}>FOUNDING50</strong>
      </span>
    </div>
  );
}
