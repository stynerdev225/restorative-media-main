import { NextResponse } from "next/server"

// Mock implementation that doesn't require Stripe
export async function POST(request: Request) {
  // Just return a success response
  return NextResponse.json({ received: true })
}
