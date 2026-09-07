'use client'
import { useEffect } from 'react'

const ADSENSE_ENABLED = false

interface AdSlotProps {
  slot: string
  format: 'leaderboard' | 'rectangle' | 'mobile-banner'
}

const dimensions: Record<AdSlotProps['format'], { width: number; height: number }> = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  'mobile-banner': { width: 320, height: 50 },
}

export default function AdSlot({ slot, format }: AdSlotProps) {
  const { width, height } = dimensions[format]

  useEffect(() => {
    if (!ADSENSE_ENABLED) return
    try {
      const adsbygoogle = (window as any).adsbygoogle
      if (adsbygoogle) adsbygoogle.push({})
    } catch {}
  }, [])

  // Con AdSense apagado no se renderiza nada. Una caja gris etiquetada
  // "Advertisement" sin ningun ad es enganosa y, en una reaplicacion, le
  // muestra al revisor un esqueleto de ads en vez de un sitio de contenido.
  if (!ADSENSE_ENABLED) return null


  return (
    <div style={{ width: '100%', maxWidth: width, margin: '0 auto', overflow: 'hidden' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8680464039127093"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
