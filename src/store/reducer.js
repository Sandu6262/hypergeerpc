export const initialState = {
  cart: [],
  selectedComps: {},
  budgetMax: 95000,
  cartOpen: false,
  toastMessage: '',
  toastVisible: false,
}

export function appReducer(state, action) {
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
