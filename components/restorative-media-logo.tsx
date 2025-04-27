import Image from "next/image"
import type { HTMLAttributes } from "react"

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
}

export const RestorativeMediaLogo = ({ className, width = 50, height = 50, ...props }: LogoProps) => (
  <div className={className} {...props}>
    <Image src="/logo-restorative-media.png" alt="Restorative Media Logo" width={width} height={height} />
  </div>
)
