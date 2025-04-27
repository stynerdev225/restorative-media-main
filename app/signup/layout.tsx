import type React from "react"
export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  )
}
