'use client'

import { useState } from 'react'
import { Star, TrendingDown, TrendingUp, Zap, LucideIcon } from 'lucide-react'
import { prebuiltPCs, PrebuiltPC } from '@/data/prebuiltPCs'
import PCCard from './PCCard'

type FilterId = 'all' | 'low' | 'mid' | 'high'

const filterFns: Record<Exclude<FilterId, 'all'>, (pc: PrebuiltPC) => boolean> = {
  low:  pc => pc.price < 14000,
  mid:  pc => pc.price >= 14000 && pc.price <= 38000,
  high: pc => pc.price > 38000,
}

interface FilterButton {
  id: FilterId
  label: string
  Icon: LucideIcon
}

const filterButtons: FilterButton[] = [
  { id: 'all',  label: 'Toate',             Icon: Star },
  { id: 'low',  label: 'Buget Mic (<14K)',   Icon: TrendingDown },
  { id: 'mid',  label: 'Buget Mediu (14-38K)', Icon: TrendingUp },
  { id: 'high', label: 'Buget Mare (>38K)',  Icon: Zap },
]

export default function PrebuiltSection() {
  const [filter, setFilter] = useState<FilterId>('all')

  const list = filter === 'all' ? prebuiltPCs : prebuiltPCs.filter(filterFns[filter])

  return (
    <>
      <section className="filters-section" id="prebuilt">
        <div className="container">
          <h2 className="section-title">Calculatoare <span className="accent">Prefabricate</span></h2>
          <p className="section-desc">Selecteaza dupa buget sau alege configuratia perfecta pentru tine</p>
          <div className="filter-buttons">
            {filterButtons.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`filter-btn cursor-target${filter === id ? ' active' : ''}`}
                onClick={() => setFilter(id)}
              >
                <Icon size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pcs-grid-section">
        <div className="container">
          <div className="pcs-grid">
            {list.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">
                  <Star size={54} style={{ margin: '0 auto 16px', display: 'block', opacity: 0.4 }} />
                </div>
                <p>Nu exista calculatoare in aceasta categorie de pret.</p>
              </div>
            ) : (
              list.map((pc, i) => (
                <PCCard key={pc.id} pc={pc} highlight={i === 1 && filter === 'all'} index={i} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
