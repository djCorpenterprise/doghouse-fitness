'use client'

import { useEffect, useRef, useState } from 'react'

let showToastFn: ((msg: string) => void) | null = null

export function showToast(msg: string) {
  showToastFn?.(msg)
}

export default function Toast() {
  const [msg, setMsg] = useState('')
  const [visible, setVisible] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    showToastFn = (m: string) => {
      setMsg(m)
      setVisible(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setVisible(false), 1800)
    }
    return () => { showToastFn = null }
  }, [])

  return (
    <div className={`toast${visible ? ' show' : ''}`}>{msg}</div>
  )
}
