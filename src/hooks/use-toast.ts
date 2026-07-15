'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | 'success'
  duration?: number
}

interface ToastState {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => string
  removeToast: (id: string) => void
}

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

let count = 0

function generateId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

export function useToast(): ToastState {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = generateId()
    const newToast = { ...toast, id }
    setToasts((prev) => [newToast, ...prev].slice(0, TOAST_LIMIT))
    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  // Auto-remove toasts after duration
  useEffect(() => {
    const timeouts = toasts
      .filter((toast) => toast.duration !== undefined)
      .map((toast) => {
        const duration = toast.duration ?? TOAST_REMOVE_DELAY
        return setTimeout(() => removeToast(toast.id), duration)
      })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [toasts])

  return { toasts, addToast, removeToast }
}

// Export toast function for convenience
export function toast(options: Omit<Toast, 'id'>) {
  // This is a placeholder - actual implementation would use a context
  console.log('Toast:', options)
}