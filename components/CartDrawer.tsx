'use client'

import { useCart } from '@/context/CartContext'
import { useEffect, useRef } from 'react'

function money(n: number) {
  return '$' + n.toFixed(2).replace(/\.00$/, '')
}

export default function CartDrawer() {
  const { items, count, total, changeQty, removeItem, isOpen, closeCart } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleCheckout = () => {
    if (count === 0) return
    alert('Secure checkout coming at launch.')
  }

  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={closeCart} />
      <aside ref={drawerRef} className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">Your cart is empty.</div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-row">
                {item.img && (
                  <img src={item.img} alt={item.name} className="cart-row-img" />
                )}
                <div className="cart-row-info">
                  <div className="cart-row-name">{item.name}</div>
                  <div className="cart-row-price">{money(item.price)}</div>
                  <div className="cart-qty">
                    <button className="cart-qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                    <span className="cart-qty-num">{item.qty}</span>
                    <button className="cart-qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-foot">
          <div className="cart-subtotal">
            <span className="cart-subtotal-lbl">Subtotal</span>
            <span className="cart-subtotal-amt">{money(total)}</span>
          </div>
          <p className="cart-note">
            Pre-launch — limited quantities. Secure checkout via Chase opens at drop. Taxes &amp; shipping calculated at checkout.
          </p>
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
