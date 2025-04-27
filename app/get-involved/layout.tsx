import type React from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Get Involved | Restorative Media",
  description: "Purchase tickets, donate, volunteer, and support our community initiatives.",
}

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black text-white">{children}</main>
      <SiteFooter />
    </>
  )
}
