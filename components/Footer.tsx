import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-wm">Dog House</div>
          <div className="footer-brand-est">— Est 2026 —</div>
          <div className="footer-tagline">
            Loyalty. Discipline. Strength.<br />
            <span>That&apos;s the Dog House Way.</span>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Shop</div>
          <Link href="/fitness">Dog House Fitness</Link>
          <Link href="/golf">Dog House Golf</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Brand</div>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">&copy; 2026 Dog House. All rights reserved.</span>
        <span className="footer-est-b">EST. 2026</span>
      </div>
    </footer>
  )
}
