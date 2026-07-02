'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { showToast } from './Toast'

interface Props {
  id: string
  name: string
  price: number
  img: string
  droppingFirst?: boolean
}

export default function ProductCard({ id, name, price, img, droppingFirst }: Props) {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem({ id, name, price, img })
    showToast(`${name} added`)
  }

  return (
    <div className="pcard">
      <div className="pcard-img-wrap">
        <Image src={img} alt={name} fill sizes="(max-width:500px) 50vw, (max-width:1000px) 25vw, 320px" style={{ objectFit: 'cover' }} />
        <div className="badges">
          <span className="badge-soon">Coming Soon</span>
          {droppingFirst && <span className="badge-first">Dropping First</span>}
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-name">{name}</div>
        <div className="pcard-row">
          <span className="pcard-price">${price}</span>
          <button className="pcard-add" onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
