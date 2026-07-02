import ProductCard from '@/components/ProductCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House Golf — Coming Soon',
  description: 'Dog House Golf is teeing off soon. Premium gear, built for the game and made in limited runs.',
}

const PRODUCTS = [
  { id: 'g_cap_navy',     name: 'Rope Cap',           price: 44,  img: '/images/g_cap_navy.png',     first: true  },
  { id: 'g_cap_charcoal', name: 'Charcoal Rope Cap',  price: 44,  img: '/images/g_cap_charcoal.png', first: true  },
  { id: 'g_bucket',       name: 'Bucket Hat',         price: 44,  img: '/images/g_bucket.png',       first: true  },
  { id: 'g_polo',         name: 'Striped Polo',       price: 68,  img: '/images/g_polo.png',         first: false },
  { id: 'g_qzip',         name: 'Quarter Zip',        price: 118, img: '/images/g_qzip2.png',        first: false },
  { id: 'g_vest',         name: 'Performance Vest',   price: 90,  img: '/images/g_vest.png',         first: false },
  { id: 'g_belt',         name: 'Needlepoint Belt',   price: 68,  img: '/images/g_belt.png',         first: false },
  { id: 'g_hoodie',       name: 'Golf Hoodie',        price: 85,  img: '/images/g_hoodie2.png',      first: false },
]

export default function GolfPage() {
  return (
    <>
      {/* HERO */}
      <div
        className="store-hero-img"
        style={{ backgroundImage: "url('/images/bg_golf.jpg')" }}
      />

      {/* ANNOUNCE BAR */}
      <div className="announce-bar">
        <span className="announce-dot" />
        <span className="announce-text">Coming Soon &nbsp;·&nbsp; Hats Dropping First</span>
      </div>

      {/* COLLECTION */}
      <div className="section-label">
        <span className="section-line" />
        <h2>The Collection</h2>
        <span className="section-line" />
      </div>

      <div className="pgrid">
        {PRODUCTS.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            img={p.img}
            droppingFirst={p.first}
          />
        ))}
      </div>
    </>
  )
}
