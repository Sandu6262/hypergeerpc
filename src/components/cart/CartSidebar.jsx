'use client'

import { useEffect } from 'react'
import { ShoppingCart, X, CheckCheck } from 'lucide-react'
import { useStore } from '@/store/StoreContext'
import { formatPrice } from '@/lib/formatPrice'

export default function CartSidebar() {
  const { state, toggleCart, closeCart, removeFromCart, clearCart, showToast } = useStore()
  const { cart, cartOpen } = state

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeCart() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [closeCart])

  const total = cart.reduce((s, i) => s + i.price, 0)

  function checkout() {
    if (!cart.length) { showToast('Cosul tau este gol!'); return }
    const t = total
    clearCart()
    closeCart()
    setTimeout(() => showToast(`Comanda plasata! Total: ${formatPrice(t)}`), 400)
  }

  return (
    <>
      <div className={`cart-overlay${cartOpen ? ' open' : ''}`} onClick={closeCart} />
      <div className={`cart-sidebar${cartOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>
            <ShoppingCart size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
            Cos de Cumparaturi
          </h2>
          <button onClick={toggleCart} className="cart-close">
            <X size={16} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">
                <ShoppingCart size={52} strokeWidth={1} style={{ margin: '0 auto', display: 'block' }} />
              </span>
              <p>Cosul tau este gol</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <button className="ci-remove" onClick={() => removeFromCart(item.id)}>
                  <X size={14} />
                </button>
                <div className="ci-name">{item.name}</div>
                <div className="ci-desc">{item.desc}</div>
                <div className="ci-price">{formatPrice(item.price)}</div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total-row">
            <span>Total:</span>
            <span className="total-price">{formatPrice(total)}</span>
          </div>
          <button className="btn-buy" onClick={checkout}>
            <CheckCheck size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
            Plaseaza Comanda
          </button>
        </div>
      </div>
    </>
  )
}
