'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function NavigationRefresh() {
  const router = useRouter()
  const hasRefreshed = useRef(false)

  useEffect(() => {
    if (!hasRefreshed.current) {
      hasRefreshed.current = true
      router.refresh()
    }

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        hasRefreshed.current = false
        router.refresh()
      }
    }

    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [router])

  return null
}
