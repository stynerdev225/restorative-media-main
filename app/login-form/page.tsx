// Developed by Stiner.dev
// Professional Web Developer
// Date: April 26, 2025
// Contact: stiner.dev

// Project: RESTORATIVE MEDIA Website
// Client: Troy Williams (Owner of RESTORATIVE MEDIA)

// Project Overview:
// "Restorative Media" is a multimedia content platform featuring articles, videos, and vlogs focused on technology, gaming, food, movies, sports, and music. 
// Key features include user authentication, subscription plans, content pitching, journal entries, and channel-based organization. 
// Built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and optimized for responsive, cross-platform performance.

// Disclaimer:
// This website was developed by Stiner.dev as a personal favor, without financial compensation or formal employment. 
// Development is provided "as-is" with no warranties or guarantees of future maintenance, security, or legal compliance. 
// Stiner.dev assumes no responsibility for copyright, licensing, or legal issues arising from the client's content, images, branding, or assets. 
// The client, Troy Williams and RESTORATIVE MEDIA, is solely responsible for ensuring all necessary rights, licenses, and security practices are upheld after project delivery.
// Stiner.dev is not liable for future updates, content management, hacking, or misuse post-handoff.

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // In a real app, you would validate credentials with your backend
      // For this demo, we'll just simulate a successful login after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to the dashboard
      router.push("/login")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-500 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-restorative-gold hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white text-black border-gray-300 placeholder:text-gray-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me for 30 days
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-restorative-gold hover:bg-restorative-gold/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-restorative-gold hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>

            {/* Right Side Content */}
            <div className="hidden lg:block">
              {/* Featured Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 w-full">
                  <Image src="/san-quentin-1.jpg" alt="Inside San Quentin Documentary" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="mb-1 block text-xs font-medium text-restorative-gold">Featured Documentary</span>
                    <h3 className="text-xl font-bold text-white">Inside San Quentin: Stories of Transformation</h3>
                  </div>
                </div>
              </div>

              {/* Advertisement Banner */}
              <div className="relative mb-8 w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium opacity-80">ADVERTISEMENT</p>
                    <h3 className="text-lg font-bold">Premium Offer</h3>
                    <p className="text-sm">Get 50% off your first 3 months</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-80">728×90</p>
                    <Button size="sm" variant="outline" className="mt-2 border-white text-white hover:bg-white/20">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Experience Restorative Media</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 text-restorative-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to exclusive documentaries and series</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 text-restorative-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>HD streaming on all your devices</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 text-restorative-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>New content added weekly</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 text-restorative-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cancel anytime, no commitments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
