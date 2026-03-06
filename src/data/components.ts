import { ComponentSpec, ComponentType } from './types'

export const components: Record<ComponentType, ComponentSpec[]> = {
  cpu: [
    { name: 'AMD Ryzen 5 5500 Tray',       price: 1799,  sc: { g: 50, p: 55, v: 95 } },
    { name: 'AMD Ryzen 5 5600 Tray',       price: 2489,  sc: { g: 58, p: 62, v: 90 } },
    { name: 'Intel Core i5-12400F Tray',   price: 2749,  sc: { g: 62, p: 65, v: 88 } },
    { name: 'AMD Ryzen 5 7500F Tray',      price: 2999,  sc: { g: 66, p: 68, v: 85 } },
    { name: 'AMD Ryzen 7 5700X Tray',      price: 3249,  sc: { g: 68, p: 70, v: 82 } },
    { name: 'Intel Core i5-13400F Tray',   price: 3649,  sc: { g: 70, p: 72, v: 80 } },
    { name: 'Intel Core i5-14600KF Tray',  price: 5029,  sc: { g: 76, p: 75, v: 74 } },
    { name: 'AMD Ryzen 7 7700X Tray',      price: 5889,  sc: { g: 80, p: 82, v: 70 } },
    { name: 'AMD Ryzen 7 7800X3D Tray',    price: 7099,  sc: { g: 90, p: 80, v: 65 } },
    { name: 'Intel Core i7-14700KF Tray',  price: 7289,  sc: { g: 84, p: 87, v: 63 } },
    { name: 'Intel Core i9-14900K Tray',   price: 10239, sc: { g: 92, p: 93, v: 55 } },
  ],
  gpu: [
    { name: 'BIOSTAR GTX 1660 Ti 6GB',         price: 4949,  sc: { g: 38, p: 32, v: 88 } },
    { name: 'ASUS Dual RTX 3050 OC 6GB',       price: 5629,  sc: { g: 50, p: 48, v: 83 } },
    { name: 'ASUS Dual RTX 5060 OC 8GB',       price: 9139,  sc: { g: 66, p: 62, v: 72 } },
    { name: 'GIGABYTE RTX 5060 Ti OC 16G',     price: 14929, sc: { g: 78, p: 74, v: 62 } },
    { name: 'GIGABYTE RX 9070 XT Gaming 16G',  price: 19429, sc: { g: 88, p: 84, v: 52 } },
    { name: 'GIGABYTE RTX 5080 WINDFORCE 16G', price: 32899, sc: { g: 98, p: 95, v: 38 } },
  ],
  ram: [
    { name: '8GB DDR4 3200MHz',         price: 1869, sc: { g: 30, p: 25, v: 92 } },
    { name: '16GB DDR5 5600MHz',        price: 3299, sc: { g: 65, p: 60, v: 80 } },
    { name: '16GB DDR4 3600MHz (2×8)',  price: 4059, sc: { g: 62, p: 58, v: 78 } },
    { name: '32GB DDR4 3200MHz (2×16)', price: 6229, sc: { g: 76, p: 76, v: 70 } },
    { name: '32GB DDR5 6000MHz (2×16)', price: 8919, sc: { g: 84, p: 88, v: 60 } },
  ],
  storage: [
    { name: '256GB SSD NVMe',                   price: 899,  sc: { g: 42, p: 38, v: 88 } },
    { name: '512GB SSD NVMe',                   price: 1599, sc: { g: 62, p: 58, v: 84 } },
    { name: '1TB HDD 7200RPM',                  price: 989,  sc: { g: 28, p: 38, v: 78 } },
    { name: '2TB HDD 7200RPM',                  price: 1579, sc: { g: 28, p: 44, v: 74 } },
    { name: '1TB SSD NVMe (Kingston NV3)',       price: 3999, sc: { g: 82, p: 80, v: 75 } },
    { name: '2TB SSD NVMe',                     price: 6599, sc: { g: 90, p: 90, v: 68 } },
  ],
  mobo: [
    { name: 'B450 (AMD AM4) - Budget',  price: 1299, sc: { g: 52, p: 52, v: 88 } },
    { name: 'B550 (AMD AM4) - Mid',     price: 1899, sc: { g: 60, p: 60, v: 82 } },
    { name: 'B650M (AMD AM5) - WiFi',   price: 3049, sc: { g: 74, p: 74, v: 73 } },
    { name: 'Z690 (Intel LGA1700)',      price: 3399, sc: { g: 74, p: 74, v: 70 } },
    { name: 'Z790 (Intel LGA1700) High', price: 5299, sc: { g: 87, p: 88, v: 60 } },
  ],
  psu: [
    { name: '500W 80+ Bronze',    price: 599,  sc: { g: 38, p: 38, v: 88 } },
    { name: '650W 80+ Bronze',    price: 879,  sc: { g: 55, p: 55, v: 82 } },
    { name: '750W 80+ Gold',      price: 1299, sc: { g: 75, p: 75, v: 76 } },
    { name: '850W 80+ Gold',      price: 1799, sc: { g: 85, p: 85, v: 70 } },
    { name: '1000W 80+ Platinum', price: 2799, sc: { g: 92, p: 92, v: 62 } },
  ],
  case: [
    { name: 'Budget Mini Tower',  price: 499,  sc: { g: 38, p: 38, v: 92 } },
    { name: 'Mid Tower Standard', price: 799,  sc: { g: 58, p: 58, v: 84 } },
    { name: 'Mid Tower RGB',      price: 1199, sc: { g: 70, p: 65, v: 74 } },
    { name: 'Full Tower RGB',     price: 1999, sc: { g: 80, p: 75, v: 65 } },
  ],
  cooling: [
    { name: 'Stock Cooler (Inclus)',     price: 0,    sc: { g: 18, p: 18, v: 100 } },
    { name: 'Deepcool Air Cooler 120mm', price: 559,  sc: { g: 55, p: 55, v: 86 } },
    { name: 'Air Cooler Premium 240mm',  price: 899,  sc: { g: 72, p: 72, v: 78 } },
    { name: 'AIO 240mm Liquid',          price: 1599, sc: { g: 86, p: 86, v: 68 } },
    { name: 'AIO 360mm Liquid',          price: 2499, sc: { g: 96, p: 94, v: 58 } },
  ],
}

export const typeLabels: Record<string, string> = {
  cpu: 'CPU',
  gpu: 'GPU',
  ram: 'RAM',
  storage: 'Stocare',
  mobo: 'Placa de Baza',
  psu: 'Sursa',
  case: 'Carcasa',
  cooling: 'Racire',
}
