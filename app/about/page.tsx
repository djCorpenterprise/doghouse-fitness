import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House — About',
  description: 'One Brand. Two Worlds. Built on loyalty, discipline, and strength.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-logos">
          <Image src="/images/logo_fitness.png" alt="Dog House Fitness" width={80} height={80} />
          <span className="about-x">×</span>
          <Image src="/images/logo_golf.png" alt="Dog House Golf" width={80} height={80} />
        </div>
        <div className="about-eyebrow">Est. 2026</div>
        <h1 className="about-title">One Brand. <span>Two Worlds.</span></h1>
        <p className="about-lead">
          Dog House is built on one idea: show up, put in the work, and stay loyal to the pack —
          whether that&apos;s under the bar or out on the course.
        </p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <p>
          Dog House started in 2026 with a simple belief: the gym and the golf course aren&apos;t
          as different as they look. Both reward discipline. Both humble you.
          Both are better with your people around you.
        </p>
        <p>
          So we built two worlds under one roof. <span>Dog House Fitness</span> is for the early
          mornings and the heavy sets — built different, made to earn your spot.{' '}
          <span>Dog House Golf</span> is for the back nine and the long game — premium gear,
          built for the love of it.
        </p>
        <p>
          Everything we make is run in limited quantities and built to last. No throwaway merch,
          no cut corners — just gear we&apos;d wear ourselves. That&apos;s the Dog House way.
        </p>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-item">
            <svg className="value-icon" viewBox="0 0 24 24">
              <circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/>
              <circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/>
              <path d="M8 16c0-2.5 1.8-4 4-4s4 1.5 4 4-1.8 4-4 4-4-1.5-4-4z"/>
            </svg>
            <div className="value-title">Loyalty</div>
            <div className="value-sub">We&apos;re loyal to the pack.</div>
          </div>
          <div className="value-item">
            <svg className="value-icon" viewBox="0 0 24 24">
              <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>
            </svg>
            <div className="value-title">Discipline</div>
            <div className="value-sub">Stay consistent. Stay focused.</div>
          </div>
          <div className="value-item">
            <svg className="value-icon" viewBox="0 0 24 24">
              <path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"/>
            </svg>
            <div className="value-title">Strength</div>
            <div className="value-sub">Built in the gym. Built on the course.</div>
          </div>
          <div className="value-item">
            <svg className="value-icon" viewBox="0 0 24 24">
              <path d="M10 5l2-2 2 2M7 8c-2 0-3 2-3 4 0 3 3 5 8 5s8-2 8-5c0-2-1-4-3-4"/>
              <circle cx="9.5" cy="11" r=".6" fill="currentColor"/>
              <circle cx="14.5" cy="11" r=".6" fill="currentColor"/>
            </svg>
            <div className="value-title">Family</div>
            <div className="value-sub">For the dogs. For life.</div>
          </div>
        </div>
      </section>

      {/* SHOP CARDS */}
      <section className="about-cards">
        <Link href="/fitness" className="about-card">
          <div className="about-card-bg" style={{ backgroundImage: "url('/images/bg_fit_panel.jpg')" }} />
          <div className="about-card-veil" />
          <div className="about-card-inner">
            <div className="about-card-name">Fitness</div>
            <div className="about-card-go">Enter →</div>
          </div>
        </Link>
        <Link href="/golf" className="about-card">
          <div className="about-card-bg" style={{ backgroundImage: "url('/images/bg_golf_panel.jpg')" }} />
          <div className="about-card-veil" />
          <div className="about-card-inner">
            <div className="about-card-name gold">Golf</div>
            <div className="about-card-go">Enter →</div>
          </div>
        </Link>
      </section>
    </>
  )
}
