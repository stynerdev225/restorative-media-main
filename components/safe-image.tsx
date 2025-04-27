"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"

// Default fallback image that we know exists
const FALLBACK_IMAGE = "/diverse-media-landscape.png"

export function SafeImage({ src, alt, ...props }: ImageProps) {
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>(FALLBACK_IMAGE)

  // Update image source when props change
  useEffect(() => {
    // If src is empty, null, or undefined, use fallback
    if (!src || src === "") {
      setImageSrc(FALLBACK_IMAGE)
    } else {
      setImageSrc(src.toString())
    }
  }, [src])

  return (
    <Image
      {...props}
      src={error ? FALLBACK_IMAGE : imageSrc}
      alt={alt || "Media content"}
      onError={() => setError(true)}
    />
  )
}
