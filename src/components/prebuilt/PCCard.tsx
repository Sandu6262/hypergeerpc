'use client'

import { useState } from 'react'
import {
  Cpu, Layers, Database, HardDrive, CircuitBoard,
  Zap, Package, Wind, Monitor, ShoppingCart,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PrebuiltPC } from '@/data/types'
import { formatPrice } from '@/lib/formatPrice'
import { assetPath } from '@/lib/assetPath'
import { useStore } from '@/store/StoreContext'
import ElectricBorder from '@/components/ui/ElectricBorder'

const specIconMap: Record<string, LucideIcon> = {
  CPU:     Cpu,
  GPU:     Layers,
  RAM:     Database,
  SSD:     HardDrive,
  Stocare: HardDrive,
  PSU:     Zap,
  Carcasa: Package,
  Racire:  Wind,
}

interface Props {
  pc: PrebuiltPC
  highlight: boolean
  index: number
}

export default function PCCard({ pc, highlight, index }: Props) {
  const { addToCart, showToast } = useStore()
  const [imgError, setImgError] = useState(false)

  function handleAddToCart() {
    addToCart({
      id: Date.now() + Math.random(),
      name: pc.name,
      desc: pc.cat + ' · ' + pc.specs.slice(0, 2).map(s => s.val).join(' / '),
      price: pc.price,
    })
    showToast(`${pc.name} adaugat in cos!`)
  }

  return (
    <ElectricBorder
      color="#EDB600"
      speed={0.8}
      chaos={0.1}
      borderRadius={10}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={`pc-card${highlight ? ' highlight' : ''}`}>
        <span className="corner tl" aria-hidden="true" />
        <span className="corner br" aria-hidden="true" />
        <div className="pc-image">
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={assetPath(`/${pc.img}`)}
              alt={pc.name}
              loading="lazy"
              style={{ objectPosition: pc.imgPos }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="pc-img-fallback">
              <Monitor size={82} strokeWidth={1} opacity={0.6} />
            </span>
          )}
        </div>
        <div className="pc-card-body">
          <div className="pc-name-row">
            <div className="pc-name">{pc.name}</div>
            <span className={`pc-badge badge-${pc.badge}`}>{pc.badgeText}</span>
          </div>
          <div className="pc-cat">{pc.cat}</div>
          <ul className="pc-specs">
            {pc.specs.map((s, i) => {
              const Icon = specIconMap[s.name] ?? Monitor
              return (
                <li key={i}>
                  <span className="s-icon"><Icon size={15} /></span>
                  <span className="s-name">{s.name}</span>
                  <span className="s-val">{s.val}</span>
                </li>
              )
            })}
          </ul>
          <div className="pc-footer">
            <span className="pc-price">{formatPrice(pc.price)}</span>
            <button className="btn-cart" onClick={handleAddToCart}>
              <ShoppingCart size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Adauga
            </button>
          </div>
        </div>
      </div>
    </ElectricBorder>
  )
}
