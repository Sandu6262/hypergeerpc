export interface PCSpec {
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
  badge: string
  badgeText: string
  emoji: string
  img: string
  imgPos: string
  specs: PCSpec[]
}

export const prebuiltPCs: PrebuiltPC[] = [
  {
    id: 1, name: 'Starter Pack', cat: 'Gaming Entry-Level',
    price: 9500, level: 'low', badge: 'starter', badgeText: 'Buget Mic', emoji: '💻',
    img: 'pc1.jpg', imgPos: 'center top',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'AMD Ryzen 5 5500 (6C/12T)' },
      { icon: '🟣', name: 'GPU', val: 'AMD RX 6600 8GB GDDR6' },
      { icon: '🟡', name: 'RAM', val: '16GB DDR4 3200MHz' },
      { icon: '🔴', name: 'SSD', val: '512GB NVMe Gen3' },
      { icon: '⚡', name: 'PSU', val: '550W 80+ Bronze' },
      { icon: '🖥️', name: 'Carcasa', val: 'Cooler Master Q300L' },
      { icon: '❄️', name: 'Racire', val: 'Air Cooler 120mm' },
    ],
  },
  {
    id: 2, name: 'Mid Warrior', cat: 'Gaming Mid-Range',
    price: 21500, level: 'mid', badge: 'popular', badgeText: 'Popular', emoji: '🖥️',
    img: 'pc2.jpg', imgPos: 'center center',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'AMD Ryzen 7 7700X (8C/16T)' },
      { icon: '🟣', name: 'GPU', val: 'NVIDIA RTX 4070 12GB GDDR6X' },
      { icon: '🟡', name: 'RAM', val: '32GB DDR5 5600MHz' },
      { icon: '🔴', name: 'SSD', val: '1TB NVMe Gen4' },
      { icon: '⚡', name: 'PSU', val: '750W 80+ Gold' },
      { icon: '🖥️', name: 'Carcasa', val: 'NZXT H510 Flow' },
      { icon: '❄️', name: 'Racire', val: 'AIO 240mm Liquid' },
    ],
  },
  {
    id: 3, name: 'Pro Beast', cat: 'Gaming High-End',
    price: 45000, level: 'high', badge: 'pro', badgeText: 'Pro', emoji: '🔥',
    img: 'pc3.jpg', imgPos: 'center center',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'Intel Core i9-14900K (24C)' },
      { icon: '🟣', name: 'GPU', val: 'NVIDIA RTX 4080 Super 16GB' },
      { icon: '🟡', name: 'RAM', val: '64GB DDR5 6000MHz' },
      { icon: '🔴', name: 'SSD', val: '2TB NVMe Gen4 + 2TB HDD' },
      { icon: '⚡', name: 'PSU', val: '1000W 80+ Platinum' },
      { icon: '🖥️', name: 'Carcasa', val: 'Lian Li O11 Dynamic RGB' },
      { icon: '❄️', name: 'Racire', val: 'AIO 360mm Liquid' },
    ],
  },
  {
    id: 4, name: 'Ultra Elite', cat: 'Performanta Extrema',
    price: 68000, level: 'high', badge: 'elite', badgeText: 'Elite', emoji: '⚡',
    img: 'pc4.jpg', imgPos: 'center center',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'Intel Core i9-14900KS (24C)' },
      { icon: '🟣', name: 'GPU', val: 'NVIDIA RTX 4090 24GB GDDR6X' },
      { icon: '🟡', name: 'RAM', val: '128GB DDR5 6400MHz' },
      { icon: '🔴', name: 'SSD', val: '4TB NVMe Gen4 + 4TB HDD' },
      { icon: '⚡', name: 'PSU', val: '1200W 80+ Titanium' },
      { icon: '🖥️', name: 'Carcasa', val: 'Lian Li O11 Dynamic XL' },
      { icon: '❄️', name: 'Racire', val: 'AIO 360mm Liquid Custom' },
    ],
  },
  {
    id: 5, name: 'Office Pro', cat: 'Productivitate & Birou',
    price: 7800, level: 'low', badge: 'starter', badgeText: 'Buget Mic', emoji: '💼',
    img: 'pc5.jpg', imgPos: 'center center',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'Intel Core i5-13400 (10C)' },
      { icon: '🟣', name: 'GPU', val: 'Intel UHD Graphics 730' },
      { icon: '🟡', name: 'RAM', val: '16GB DDR4 3200MHz' },
      { icon: '🔴', name: 'SSD', val: '512GB NVMe Gen3' },
      { icon: '⚡', name: 'PSU', val: '450W 80+ Bronze' },
      { icon: '🖥️', name: 'Carcasa', val: 'Corsair 4000D Mini Tower' },
      { icon: '❄️', name: 'Racire', val: 'Stock Intel Cooler' },
    ],
  },
  {
    id: 6, name: 'Creator Station', cat: 'Creare Continut',
    price: 31000, level: 'mid', badge: 'popular', badgeText: 'Popular', emoji: '🎨',
    img: 'pc6.jpg', imgPos: 'center top',
    specs: [
      { icon: '🔵', name: 'CPU', val: 'AMD Ryzen 9 7900X (12C/24T)' },
      { icon: '🟣', name: 'GPU', val: 'NVIDIA RTX 4070 Ti 12GB' },
      { icon: '🟡', name: 'RAM', val: '64GB DDR5 5200MHz' },
      { icon: '🔴', name: 'SSD', val: '2TB NVMe Gen4' },
      { icon: '⚡', name: 'PSU', val: '850W 80+ Gold' },
      { icon: '🖥️', name: 'Carcasa', val: 'Fractal Design North' },
      { icon: '❄️', name: 'Racire', val: 'AIO 280mm Liquid' },
    ],
  },
]
