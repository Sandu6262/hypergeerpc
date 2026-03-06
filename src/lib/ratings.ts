import { ComponentSpec } from '@/data/types'

export interface Ratings {
  gaming: number
  prod: number
  value: number
}

export function computeRatings(items: ComponentSpec[]): Ratings {
  const scored = items.filter(i => i.sc)
  if (!scored.length) return { gaming: 0, prod: 0, value: 0 }

  const avg = (key: 'g' | 'p' | 'v') => {
    const vals = scored.map(i => i.sc[key])
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)
  }

  return { gaming: avg('g'), prod: avg('p'), value: avg('v') }
}
