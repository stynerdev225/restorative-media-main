import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would create a user in your database
    // For this mock implementation, we'll just return a success response
    return NextResponse.json({
      userId: "user_" + Math.random().toString(36).substring(2, 15),
      message: "User created successfully",
    })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ message: "Error creating user" }, { status: 500 })
  }
}
