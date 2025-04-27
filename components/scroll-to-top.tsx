"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // First effect to handle the mounted state
  useEffect(() => {
    setMounted(true)
  }, [])

  // Second effect to handle scrolling only after component is mounted
  useEffect(() => {
    // Only execute scroll behavior if the component is mounted (client-side)
    if (mounted) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [pathname, mounted])

  return null
}
