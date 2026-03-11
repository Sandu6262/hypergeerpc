'use client'

import { useEffect, useCallback, useRef } from 'react'
import {
  Cpu, Layers, Database, HardDrive, CircuitBoard,
  Zap, Package, Wind, Settings, Wrench, BarChart2,
  ShoppingCart, RotateCcw,
} from 'lucide-react'
import { useStore } from '@/store/StoreContext'
import { ParticleCard, MagicBentoSpotlight } from '@/components/ui/ParticleCard'
import { components, typeLabels } from '@/data/components'
import { autoBuildWithinBudget } from '@/lib/autoBuild'
import { computeRatings } from '@/lib/ratings'
import { formatPrice } from '@/lib/formatPrice'

const ORDER = ['gpu', 'cpu', 'ram', 'storage', 'mobo', 'psu', 'cooling', 'case']

const groupMeta = [
  { type: 'cpu',     Icon: Cpu,          label: 'Procesor (CPU)' },
  { type: 'gpu',     Icon: Layers,       label: 'Placa Video (GPU)' },
  { type: 'ram',     Icon: Database,     label: 'Memorie RAM' },
  { type: 'storage', Icon: HardDrive,    label: 'Stocare' },
  { type: 'mobo',    Icon: CircuitBoard, label: 'Placa de Baza' },
  { type: 'psu',     Icon: Zap,          label: 'Sursa de Alimentare (PSU)' },
  { type: 'case',    Icon: Package,      label: 'Carcasa' },
  { type: 'cooling', Icon: Wind,         label: 'Sistem de Racire' },
]

export default function BuilderSection() {
  const gridRef = useRef(null)
  const { state, setComponents, setBudget, addToCart, showToast } = useStore()
  const { selectedComps, budgetMax } = state

  useEffect(() => {
    setComponents(autoBuildWithinBudget(budgetMax))
  }, [budgetMax, setComponents])

  const handleBudget = useCallback((val) => {
    setBudget(val)
  }, [setBudget])

  function selectComp(type, comp) {
    setComponents({ ...selectedComps, [type]: { ...comp, type } })
  }

  function resetBuild() {
    setComponents({})
    showToast('Configuratia a fost resetata')
  }

  function addBuildToCart() {
    const items = Object.values(selectedComps).filter(Boolean)
    if (!items.length) { showToast('Selecteaza cel putin o componenta!'); return }
    const total = items.reduce((s, c) => s + c.price, 0)
    const desc = items.slice(0, 3).map(c => c.name).join(', ') + (items.length > 3 ? '...' : '')
    addToCart({ id: Date.now() + Math.random(), name: 'Custom Build', desc, price: total })
    showToast(`Custom Build (${formatPrice(total)}) adaugat in cos!`)
  }

  const items = Object.values(selectedComps).filter(Boolean)
  const total = items.reduce((s, c) => s + c.price, 0)
  const ratings = computeRatings(items)
  const progressPct = Math.min((total / budgetMax) * 100, 100)
  const progressColor = total > budgetMax
    ? 'linear-gradient(90deg,#ff4444,#ff8800)'
    : 'linear-gradient(135deg,#8B00FF,#FF1493)'
  const remaining = budgetMax - total

  function isOverBudget(type, comp) {
    const current = selectedComps[type]
    if (current?.name === comp.name) return false
    return comp.price > remaining + (current?.price ?? 0)
  }

  function isVisible(type, comp) {
    return comp.price <= budgetMax || comp.price === 0
  }

  return (
    <section className="builder-section" id="builder">
      <div className="container">
        <h2 className="section-title">PC <span className="accent">Builder</span></h2>
        <p className="section-desc">Alege componentele si calculeaza pretul in timp real. Bugetul tau, regulile tale.</p>

        <div className="budget-slider-wrap">
          <label className="budget-label-top">
            Buget maxim:{' '}
            <span className="budget-val-display">{budgetMax.toLocaleString('ro-MD')} MDL</span>
          </label>
          <input
            type="range"
            className="budget-slider"
            min={5000}
            max={95000}
            step={500}
            value={budgetMax}
            onChange={e => handleBudget(parseInt(e.target.value))}
          />
          <div className="slider-markers">
            <span>5K</span><span>24K</span><span>50K</span><span>72K</span><span>95K MDL</span>
          </div>
        </div>

        <MagicBentoSpotlight gridRef={gridRef} />
        <div className="builder-layout bento-section" ref={gridRef}>
          <div className="builder-form">
            {groupMeta.map(({ type, Icon, label }) => {
              const typeComps = components[type]
              const visibleComps = typeComps.filter(c => isVisible(type, c))
              const showComps = visibleComps.length > 0 ? visibleComps : [typeComps[0]]

              return (
                <ParticleCard key={type} className="component-group">
                  <h3 className="comp-title">
                    <span className="comp-icon"><Icon size={20} /></span> {label}
                  </h3>
                  <div className="comp-options">
                    {showComps.map((comp, idx) => {
                      const isSelected = selectedComps[type]?.name === comp.name
                      const over = !isSelected && isOverBudget(type, comp)
                      const isMinim = visibleComps.length === 0 && idx === 0

                      return (
                        <div
                          key={idx}
                          className={`comp-opt${isSelected ? ' selected' : ''}${over ? ' over-budget' : ''}`}
                          onClick={() => !over && selectComp(type, comp)}
                        >
                          <div className="opt-name">
                            {comp.name}
                            {isMinim && <span style={{ fontSize: '10px', opacity: 0.6 }}> (minim)</span>}
                          </div>
                          <div className={`opt-price${comp.price === 0 ? ' free' : ''}`}>
                            {comp.price === 0 ? 'Inclus' : formatPrice(comp.price)}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ParticleCard>
              )
            })}
          </div>

          <div className="build-summary">
            <ParticleCard className="summary-card">
              <h3>
                <Settings size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                Configuratia Ta
              </h3>
              <div className="summary-list">
                {items.length === 0 ? (
                  <div className="no-config">
                    <Wrench size={38} style={{ margin: '0 auto 10px', display: 'block', opacity: 0.4 }} />
                    <p>Selecteaza componente pentru a incepe</p>
                  </div>
                ) : (
                  items.map(c => (
                    <div key={c.type} className="summary-item">
                      <div className="si-left">
                        <span className="si-cat">{typeLabels[c.type]}</span>
                        <span className="si-name">{c.name}</span>
                      </div>
                      <span className="si-price">
                        {c.price === 0 ? 'Inclus' : formatPrice(c.price)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="budget-display-box">
                <div className="budget-row">
                  <span>Total:</span>
                  <span className="build-price">{items.length ? formatPrice(total) : '0 MDL'}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progressPct}%`, background: progressColor }} />
                </div>
                <div className="budget-range-labels">
                  <span>0 MDL</span>
                  <span>{budgetMax.toLocaleString('ro-MD')} MDL</span>
                </div>
              </div>

              <div className="performance-rating">
                <h4>
                  <BarChart2 size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  Rating Performanta
                </h4>
                {[
                  { label: 'Gaming',       val: ratings.gaming, cls: 'gaming-fill' },
                  { label: 'Productivitate', val: ratings.prod,   cls: 'prod-fill' },
                  { label: 'Valoare/Pret', val: ratings.value,  cls: 'value-fill' },
                ].map(r => (
                  <div key={r.label} className="rating-item">
                    <span className="rating-name">{r.label}</span>
                    <div className="rating-bar">
                      <div className={`rating-fill ${r.cls}`} style={{ width: `${r.val}%` }} />
                    </div>
                    <span className="rating-pct">{r.val}%</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary full-width" onClick={addBuildToCart}>
                <ShoppingCart size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                Adauga in Cos
              </button>
              <button className="btn-secondary full-width mt10" onClick={resetBuild}>
                <RotateCcw size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                Reseteaza Configuratia
              </button>
            </ParticleCard>
          </div>
        </div>
      </div>
    </section>
  )
}
