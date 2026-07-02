import ProductCard from '@/components/ProductCard'
import { FITNESS_PRODUCTS } from '@/lib/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House Fitness — Coming Soon',
  description: 'Dog Days Collection 001. Built different, made in limited runs. Hats drop first.',
}

export default function FitnessPage() {
  return (
    <>
      {/* HERO */}
      <div
        className="store-hero-img"
        style={{ backgroundImage: "url('/images/bg_fit_hero.jpg')" }}
      />

      {/* ANNOUNCE BAR */}
      <div className="announce-bar">
        <span className="announce-dot" />
        <span className="announce-text">Dog Days — Drop 001 &nbsp;·&nbsp; Coming Soon &nbsp;·&nbsp; Hats Dropping First</span>
      </div>

      {/* COMPLETE KIT BANNER */}
      <div className="kit-banner">
        <div className="kit-banner-inner">
          <div className="kit-left">
            <div className="kit-label">Complete Kit</div>
            <div className="kit-items">Tee · Zip Hoodie · Joggers · Tank · Beanie</div>
          </div>
          <div className="kit-right">
            <span className="kit-price">$225</span>
            <span className="kit-save">Save $42 vs individual</span>
          </div>
        </div>
      </div>

      {/* COLLECTION */}
      <div className="section-label">
        <span className="section-line" />
        <h2>Dog Days Collection</h2>
        <span className="section-line" />
      </div>

      <div className="pgrid">
        {FITNESS_PRODUCTS.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            slug={p.slug}
            name={p.name}
            price={p.price}
            img={p.img}
            droppingFirst={p.droppingFirst}
            href={`/fitness/${p.slug}`}
          />
        ))}
      </div>
    </>
  )
}
