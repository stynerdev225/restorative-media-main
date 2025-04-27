"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Check, Home, User } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [subscription, setSubscription] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getSubscriptionDetails() {
      if (searchParams.get("mock") === "true") {
        // Use mock data instead of fetching from API
        setSubscription({
          plan: "Monthly Premium",
          status: "active",
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        })
        setLoading(false)
        return
      }

      if (!sessionId) {
        setError("No session ID found")
        setLoading(false)
        return
      }

      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Use mock data
        setSubscription({
          plan: "Monthly Premium",
          status: "active",
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        })
      } catch (err) {
        console.error("Error fetching subscription details:", err)
        setError("Could not retrieve your subscription details. Please contact support.")
      } finally {
        setLoading(false)
      }
    }

    getSubscriptionDetails()
  }, [sessionId, searchParams])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Logo className="h-16 w-16" />
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 text-center">
            <div className="w-16 h-16 bg-restorative-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-black" />
            </div>

            <h1 className="text-3xl font-bold mb-4">Welcome to Restorative Media!</h1>

            {loading ? (
              <div className="py-8 flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-restorative-gold"></div>
                <p className="mt-4 text-gray-400">Loading your subscription details...</p>
              </div>
            ) : error ? (
              <div className="py-6">
                <p className="text-red-400 mb-4">{error}</p>
                <p className="text-gray-400">
                  Don't worry, your account has been created. You can continue to explore our content.
                </p>
              </div>
            ) : (
              <div className="py-6">
                <p className="text-gray-300 mb-6">
                  Your subscription has been successfully activated. Thank you for supporting our mission!
                </p>

                {subscription && (
                  <div className="bg-gray-800 rounded-md p-4 mb-6 text-left">
                    <h3 className="font-medium mb-2 text-restorative-gold">Subscription Details</h3>
                    <p className="text-sm text-gray-300">
                      <span className="text-gray-400">Plan:</span> {subscription.plan}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="text-gray-400">Status:</span> {subscription.status}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="text-gray-400">Next billing date:</span> {subscription.currentPeriodEnd}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-lg font-medium mb-4">What's Next?</h3>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/">
                  <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800">
                    <Home className="mr-2 h-4 w-4" />
                    Explore Content
                  </Button>
                </Link>

                <Link href="/profile">
                  <Button className="w-full bg-restorative-gold hover:bg-amber-600 text-black">
                    <User className="mr-2 h-4 w-4" />
                    Complete Profile
                  </Button>
                </Link>
              </div>

              <div className="mt-6">
                <Link href="/account/billing" className="text-restorative-gold hover:underline text-sm">
                  Manage your subscription
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Need help?{" "}
              <Link href="/support" className="text-restorative-gold hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
