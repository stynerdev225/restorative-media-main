import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Extract the session_id from the URL
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get("session_id")

  if (!sessionId) {
    return NextResponse.json({ message: "Missing session ID" }, { status: 400 })
  }

  try {
    // Return mock subscription data
    return NextResponse.json({
      id: "sub_mock123456",
      plan: "Monthly Premium",
      status: "active",
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    })
  } catch (error) {
    console.error("Error fetching subscription details:", error)
    return NextResponse.json({ message: "Error fetching subscription details" }, { status: 500 })
  }
}
