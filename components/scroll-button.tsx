"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className="bg-restorative-gold hover:bg-restorative-gold/80 text-white flex items-center justify-center h-10 w-10 rounded-full p-0"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </Button>
  )
}
