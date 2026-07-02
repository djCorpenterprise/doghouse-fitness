'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: string
  slug: string
  name: string
  price: number
  img: string
  droppingFirst?: boolean
  href: string
}

export default function ProductCard({ name, price, img, droppingFirst, href }: Props) {
  return (
    <Link href={href} className="pcard">
      <div className="pcard-img-wrap">
        <Image src={img} alt={name} fill sizes="(max-width:500px) 50vw, (max-width:1000px) 25vw, 320px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
        <div className="badges">
          <span className="badge-soon">Coming Soon</span>
          {droppingFirst && <span className="badge-first">Dropping First</span>}
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-name">{name}</div>
        <div className="pcard-row">
          <span className="pcard-price">${price}</span>
          <span className="pcard-shop">Shop →</span>
        </div>
      </div>
    </Link>
  )
}
