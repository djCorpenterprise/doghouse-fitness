import ProductCard from '@/components/ProductCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dog House Fitness — Coming Soon',
  description: 'The first Dog House Fitness drop is almost here. Built different, made in limited runs. Hats drop first.',
}

const PRODUCTS = [
  { id: 'f_cap_black',  name: 'Rope Cap',       price: 44, img: '/images/f_cap_black.png', first: true  },
  { id: 'f_cap_camo',   name: 'Camo Cap',        price: 44, img: '/images/f_cap_camo.png',  first: true  },
  { id: 'f_tee',        name: 'Oversized Tee',   price: 48, img: '/images/f_tee.png',       first: false },
  { id: 'f_zip',        name: 'Zip Hoodie',      price: 88, img: '/images/f_zip.png',       first: false },
  { id: 'f_sweat',      name: 'Sweatpants',      price: 68, img: '/images/f_sweat.png',     first: false },
  { id: 'f_beanie',     name: 'Beanie',           price: 28, img: '/images/f_beanie.png',    first: false },
  { id: 'f_shaker',     name: 'Shaker Bottle',   price: 25, img: '/images/f_shaker.png',    first: false },
  { id: 'f_duffle',     name: 'Duffle Bag',      price: 78, img: '/images/f_duffle.png',    first: false },
]

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
