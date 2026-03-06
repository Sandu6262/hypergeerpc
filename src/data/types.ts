export type ComponentType = 'cpu' | 'gpu' | 'ram' | 'storage' | 'mobo' | 'psu' | 'case' | 'cooling'

export interface ComponentScores {
  g: number
  p: number
  v: number
}

export interface ComponentSpec {
  name: string
  price: number
  sc: ComponentScores
  type?: ComponentType
}

export interface SpecItem {
  icon: string
  name: string
  val: string
}

export interface PrebuiltPC {
  id: number
  name: string
  cat: string
  price: number
  level: 'low' | 'mid' | 'high'
  badge: 'starter' | 'popular' | 'pro' | 'elite'
  badgeText: string
  emoji: string
  img: string
  imgPos: string
  specs: SpecItem[]
}

export interface CartItem {
  id: number
  name: string
  desc: string
  price: number
}

export type SelectedComps = Partial<Record<ComponentType, ComponentSpec & { type: ComponentType }>>
