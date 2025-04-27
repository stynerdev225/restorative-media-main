import type React from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Troy Williams Journal | Restorative Media",
  description: "Personal journal and insights from Troy Williams",
}

export default function TroyWilliamsJournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-black text-white">{children}</div>
      <SiteFooter />
    </>
  )
}
