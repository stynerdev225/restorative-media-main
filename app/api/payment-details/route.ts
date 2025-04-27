import { NextResponse } from "next/server"

// Mock implementation that doesn't require Stripe
export async function GET(request: Request) {
  // Return mock payment details
  return NextResponse.json({
    cardBrand: "Visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2025,
  })
}

export async function POST(request: Request) {
  // Return success response
  return NextResponse.json({ success: true })
}
