'use client'

import { createContext, useContext, useReducer, useCallback } from 'react'
import { appReducer, initialState } from './reducer'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addToCart = useCallback((item) => dispatch({ type: 'ADD_TO_CART', payload: item }), [])
  const removeFromCart = useCallback((id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])
  const setComponents = useCallback((comps) => dispatch({ type: 'SET_COMPONENTS', payload: comps }), [])
  const setBudget = useCallback((val) => dispatch({ type: 'SET_BUDGET', payload: val }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])
  const showToast = useCallback((msg) => {
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
