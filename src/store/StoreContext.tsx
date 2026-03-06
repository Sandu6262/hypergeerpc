'use client'

import { createContext, useContext, useReducer, ReactNode, useCallback } from 'react'
import { AppState, Action, appReducer, initialState } from './reducer'
import { CartItem, SelectedComps } from '@/data/types'

interface StoreContextValue {
  state: AppState
  dispatch: React.Dispatch<Action>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  setComponents: (comps: SelectedComps) => void
  setBudget: (val: number) => void
  toggleCart: () => void
  closeCart: () => void
  showToast: (msg: string) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addToCart = useCallback((item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item }), [])
  const removeFromCart = useCallback((id: number) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])
  const setComponents = useCallback((comps: SelectedComps) => dispatch({ type: 'SET_COMPONENTS', payload: comps }), [])
  const setBudget = useCallback((val: number) => dispatch({ type: 'SET_BUDGET', payload: val }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])
  const showToast = useCallback((msg: string) => {
    dispatch({ type: 'SHOW_TOAST', payload: msg })
    setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), 3200)
  }, [])

  return (
    <StoreContext.Provider value={{
      state, dispatch,
      addToCart, removeFromCart, clearCart,
      setComponents, setBudget,
      toggleCart, closeCart, showToast,
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be inside StoreProvider')
  return ctx
}
