// src/lib/image-helpers.ts

// Liste von Bildern, die als "kritisch" für den First View gelten
const aboveFoldImages = ['images/home/gruppe.webp', 'images/logo.png']
const eagerLoadImages = ['images/home/gruppe.webp', 'images/logo.png']


// Entscheidet, ob ein Bild preloaded werden soll
export const shouldPreload = (src: string): boolean => {
  return !!src && aboveFoldImages.some((img) => src.includes(img))
}

// Entscheidet, ob ein Bild eager geladen werden soll
export const shouldEagerLoad = (src: string): boolean => {
  return !!src && eagerLoadImages.some((img) => src.includes(img))
}

// Fügt ein <link rel="preload"> für kritische Bilder in den <head> ein
export const preloadCriticalImage = (src: string): HTMLLinkElement | null => {
  if (!src) return null

  const existing = document.querySelector(`link[rel="preload"][href="${src}"]`)
  if (existing) return existing as HTMLLinkElement

  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = src
  link.as = 'image'
  link.setAttribute('fetchpriority', 'high')

  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
    link.type = 'image/jpeg'
  } else if (src.endsWith('.png')) {
    link.type = 'image/png'
  } else if (src.endsWith('.webp')) {
    link.type = 'image/webp'
  }

  document.head.appendChild(link)
  return link
}
