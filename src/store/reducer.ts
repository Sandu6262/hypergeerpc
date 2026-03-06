import { CartItem, SelectedComps } from '@/data/types'

export interface AppState {
  cart: CartItem[]
  selectedComps: SelectedComps
  budgetMax: number
  cartOpen: boolean
  toastMessage: string
  toastVisible: boolean
}

export const initialState: AppState = {
  cart: [],
  selectedComps: {},
  budgetMax: 95000,
  cartOpen: false,
  toastMessage: '',
  toastVisible: false,
}

export type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_COMPONENTS'; payload: SelectedComps }
  | { type: 'SET_BUDGET'; payload: number }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'SHOW_TOAST'; payload: string }
  | { type: 'HIDE_TOAST' }

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'SET_COMPONENTS':
      return { ...state, selectedComps: action.payload }
    case 'SET_BUDGET':
      return { ...state, budgetMax: action.payload }
    case 'TOGGLE_CART':
      return { ...state, cartOpen: !state.cartOpen }
    case 'CLOSE_CART':
      return { ...state, cartOpen: false }
    case 'SHOW_TOAST':
      return { ...state, toastMessage: action.payload, toastVisible: true }
    case 'HIDE_TOAST':
      return { ...state, toastVisible: false }
    default:
      return state
  }
}
