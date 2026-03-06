'use client'

import { useStore } from '@/store/StoreContext'

export default function Toast() {
  const { state } = useStore()
  return (
    <div className={`toast${state.toastVisible ? ' show' : ''}`}>
      {state.toastMessage}
    </div>
  )
}
