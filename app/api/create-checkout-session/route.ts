import { NextResponse } from "next/server"

// Mock implementation that doesn't require Stripe
export async function POST(request: Request) {
  try {
    // Just return a mock success response
    return NextResponse.json({
      url: "/signup/success?mock=true",
    })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ message: "Error creating checkout session" }, { status: 500 })
  }
}
