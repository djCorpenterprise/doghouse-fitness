import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House — One Brand. Two Worlds.',
}

export default function Home() {
  return (
    <div className="doorway">
      {/* FITNESS PANEL */}
      <Link href="/fitness" className="panel">
        <div
          className="panel-bg"
          style={{ backgroundImage: "url('/images/bg_fit_panel.jpg')" }}
        />
        <div className="panel-tint" />
        <div className="panel-inner">
          <Image
            src="/images/logo_fitness.png"
            alt="Dog House Fitness"
            width={80}
            height={80}
            className="panel-logo"
          />
          <div className="panel-eyebrow">Dog House</div>
          <div className="panel-name-f">Fitness</div>
          <div className="panel-sub">Built Different. Earn Your Spot.</div>
          <span className="panel-btn-f">Enter Fitness →</span>
        </div>
      </Link>

      {/* CENTER PIP */}
      <div className="panel-divider">
        <div className="panel-pip">
          <span className="pip-line1">One Brand.</span>
          <span className="pip-line2">Two Worlds.</span>
          <span className="pip-line3">Built for Loyalty.</span>
        </div>
      </div>

      {/* GOLF PANEL */}
      <Link href="/golf" className="panel">
        <div
          className="panel-bg"
          style={{ backgroundImage: "url('/images/bg_golf_panel.jpg')" }}
        />
        <div className="panel-tint" />
        <div className="panel-inner">
          <Image
            src="/images/logo_golf.png"
            alt="Dog House Golf"
            width={80}
            height={80}
            className="panel-logo"
          />
          <div className="panel-eyebrow">Dog House</div>
          <div className="panel-name-g">Golf</div>
          <div className="panel-sub">Welcome to the Dog House.</div>
          <span className="panel-btn-g">Enter Golf →</span>
        </div>
      </Link>
    </div>
  )
}
