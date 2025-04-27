"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard, Loader2 } from "lucide-react"

export default function BillingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleManageBilling = async () => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show a mock billing management message
      alert("This is a mock implementation. In a real app, you would be redirected to the Stripe billing portal.")
    } catch (error) {
      console.error("Error redirecting to billing portal:", error)
      alert("Could not access billing portal. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>

      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Manage Your Subscription</h2>
        <p className="text-gray-400 mb-6">
          You can update your payment method, change your subscription plan, or cancel your subscription through our
          secure billing portal.
        </p>

        <Button
          onClick={handleManageBilling}
          disabled={isLoading}
          className="bg-restorative-gold hover:bg-amber-600 text-black"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Billing
            </>
          )}
        </Button>

        <div className="mt-4 p-3 bg-gray-800 rounded-md">
          <p className="text-sm text-gray-300">
            <strong>Note:</strong> This is a demo implementation. No actual billing will occur.
          </p>
        </div>
      </div>
    </div>
  )
}
