export default function PromoBar() {
  return (
    <>
      <style>{`
        .promo-bar {
          background: #1B2742;
          color: #F5EDD8;
          padding: 9px 16px;
          text-align: center;
          font-family: var(--font-spectral);
          font-size: 12px;
          letter-spacing: 0.16em;
          border-bottom: 1px solid #B07A2C;
          line-height: 1.4;
        }
        .promo-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C99656;
          margin: 0 14px;
          vertical-align: middle;
        }
        .promo-strong {
          color: #C99656;
          font-weight: 600;
        }
        .promo-desktop { display: inline; }
        .promo-mobile { display: none; }
        @media (max-width: 640px) {
          .promo-bar {
            font-size: 10.5px;
            letter-spacing: 0.12em;
            padding: 8px 12px;
          }
          .promo-desktop { display: none; }
          .promo-mobile { display: inline; }
          .promo-dot { margin: 0 8px; }
        }
      `}</style>
      <div className="promo-bar">
        <span className="promo-desktop">
          <span>Founding Members</span>
          <span className="promo-dot" />
          <span>
            First 25 lifters get{" "}
            <strong className="promo-strong">50% off</strong> the Starter
            Protocol
          </span>
          <span className="promo-dot" />
          <span>
            Code <strong className="promo-strong">FOUNDING50</strong>
          </span>
        </span>
        <span className="promo-mobile">
          <span>Founding Members</span>
          <span className="promo-dot" />
          <span>
            <strong className="promo-strong">50% off</strong>
          </span>
          <span className="promo-dot" />
          <span>
            <strong className="promo-strong">FOUNDING50</strong>
          </span>
        </span>
      </div>
    </>
  );
}
