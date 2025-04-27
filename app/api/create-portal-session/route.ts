import { NextResponse } from "next/server"

// Mock implementation that doesn't require Stripe
export async function POST(request: Request) {
  try {
    // Just return a mock portal URL
    return NextResponse.json({
      url: "/account/billing?mock=true",
    })
  } catch (error) {
    console.error("Error creating portal session:", error)
    return NextResponse.json({ message: "Error creating portal session" }, { status: 500 })
  }
}
