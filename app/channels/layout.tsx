import type { ReactNode } from "react"

interface ChannelsLayoutProps {
  children: ReactNode
}

export default function ChannelsLayout({ children }: ChannelsLayoutProps) {
  return <>{children}</>
}
