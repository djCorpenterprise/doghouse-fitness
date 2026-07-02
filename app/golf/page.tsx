import ProductCard from '@/components/ProductCard'
import { GOLF_PRODUCTS } from '@/lib/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House Golf — Coming Soon',
  description: 'Dog House Golf is teeing off soon. Premium gear, built for the game and made in limited runs.',
}

export default function GolfPage() {
  return (
    <>
      <div
        className="store-hero-img"
        style={{ backgroundImage: "url('/images/bg_golf.jpg')" }}
      />
      <div className="announce-bar">
        <span className="announce-dot" />
        <span className="announce-text">Dog House Golf — Coming Soon &nbsp;·&nbsp; Hats Dropping First</span>
      </div>
      <div className="section-label">
        <span className="section-line" />
        <h2>The Collection</h2>
        <span className="section-line" />
      </div>
      <div className="pgrid">
        {GOLF_PRODUCTS.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            slug={p.slug}
            name={p.name}
            price={p.price}
            img={p.img}
            droppingFirst={p.droppingFirst}
            href={`/golf/${p.slug}`}
          />
        ))}
      </div>
    </>
  )
}
