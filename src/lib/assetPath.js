const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function assetPath(path) {
  return `${BASE}${path}`
}
