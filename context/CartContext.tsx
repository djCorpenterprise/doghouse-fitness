'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  img: string
  qty: number
}

interface CartContextType {
  items: CartItem[]
  count: number
  total: number
  addItem: (item: Omit<CartItem, 'qty'>) => void
  changeQty: (id: string, delta: number) => void
  removeItem: (id: string) => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)
const KEY = 'doghouse_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  const persist = (next: CartItem[]) => {
    setItems(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
  }

  const addItem = (item: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id)
      const next = exists
        ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }]
      try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
      return next
    })
    setIsOpen(true)
  }

  const changeQty = (id: string, delta: number) => {
    setItems(prev => {
      const next = prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
      try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => {
      const next = prev.filter(i => i.id !== id)
      try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{
      items, count, total,
      addItem, changeQty, removeItem,
      isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false)
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
