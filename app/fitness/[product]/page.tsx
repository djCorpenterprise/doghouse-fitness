'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FITNESS_PRODUCTS } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import { showToast } from '@/components/Toast'

export default function FitnessProductPage({ params }: { params: { product: string } }) {
  const product = FITNESS_PRODUCTS.find(p => p.slug === params.product)
  if (!product) notFound()

  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  )
  const [sizeError, setSizeError] = useState(false)

  const handleAdd = () => {
    if (!selectedSize) { setSizeError(true); return }
    setSizeError(false)
    const id = product.sizes.length > 1 ? `${product.id}_${selectedSize}` : product.id
    addItem({ id, name: `${product.name}${selectedSize !== 'One Size' ? ` — ${selectedSize}` : ''}`, price: product.price, img: product.img })
    showToast(`${product.name} added`)
  }

  return (
    <div className="pdp">
      {/* Breadcrumb */}
      <div className="pdp-breadcrumb">
        <Link href="/fitness">Fitness</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="pdp-grid">
        {/* IMAGE */}
        <div className="pdp-img-wrap">
          <Image
            src={product.imgLg}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            priority
          />
          {product.droppingFirst && (
            <span className="pdp-badge-first">Dropping First</span>
          )}
          <span className="pdp-badge-soon">Coming Soon</span>
        </div>

        {/* INFO */}
        <div className="pdp-info">
          <div className="pdp-collection">{product.collection}</div>
          <h1 className="pdp-name">{product.name}</h1>
          <div className="pdp-price">${product.price}</div>

          <p className="pdp-desc">{product.description}</p>

          {/* SIZE SELECTOR */}
          {product.sizes.length > 1 && (
            <div className="pdp-sizes">
              <div className={`pdp-sizes-label${sizeError ? ' error' : ''}`}>
                {sizeError ? 'Please select a size' : 'Select Size'}
              </div>
              <div className="pdp-size-btns">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`pdp-size-btn${selectedSize === size ? ' selected' : ''}`}
                    onClick={() => { setSelectedSize(size); setSizeError(false) }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes.length === 1 && product.sizes[0] === 'One Size' && (
            <div className="pdp-one-size">One Size Fits Most</div>
          )}

          {/* ADD TO CART */}
          <button className="pdp-add-btn" onClick={handleAdd}>
            Add to Cart — ${product.price}
          </button>

          <div className="pdp-note">
            Coming Soon. Add to cart and be ready at the drop.
          </div>

          {/* DETAILS */}
          <div className="pdp-details">
            <div className="pdp-details-title">Details</div>
            <ul className="pdp-details-list">
              {product.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
