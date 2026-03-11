import { components, Component, ComponentType } from '@/data/components'

export interface SelectedComponent extends Component {
  type: ComponentType
}

export type SelectedComponentsMap = Partial<Record<ComponentType, SelectedComponent>>

const ORDER: ComponentType[] = ['gpu', 'cpu', 'ram', 'storage', 'mobo', 'psu', 'cooling', 'case']

export function autoBuildWithinBudget(budget: number): SelectedComponentsMap {
  // Step 1: assign cheapest from each category
  const chosen: Record<string, Component> = {}
  let remaining = budget

  ORDER.forEach(type => {
    const cheapest = [...components[type]].sort((a, b) => a.price - b.price)[0]
    chosen[type] = cheapest
    remaining -= cheapest.price
  })

  // Step 2: upgrade greedily — pick best that fits within remaining budget
  let upgraded = true
  while (upgraded) {
    upgraded = false
    ORDER.forEach(type => {
      const sorted = [...components[type]].sort((a, b) => b.price - a.price)
      for (const comp of sorted) {
        const diff = comp.price - chosen[type].price
        if (diff > 0 && diff <= remaining) {
          remaining -= diff
          chosen[type] = comp
          upgraded = true
          break
        }
      }
    })
  }

  // Step 3: return selection
  const result: SelectedComponentsMap = {}
  ORDER.forEach(type => {
    result[type] = { ...chosen[type], type }
  })
  return result
}
