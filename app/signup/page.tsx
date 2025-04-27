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
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import { Check, CreditCard, Search, Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronDown, LogIn, UserPlus } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { HeroSection } from "@/components/hero-section"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedPlan, setSelectedPlan] = useState("monthly")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful signup - redirect to success page
      router.push("/signup/success?mock=true")
    } catch (error) {
      console.error("Signup error:", error)
      setErrors((prev) => ({
        ...prev,
        form: error instanceof Error ? error.message : "An unexpected error occurred",
      }))
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Custom header with logo at far left */}
      <header className="sticky top-0 z-50 w-full bg-black text-white">
        <div className="flex h-16 items-center w-full px-4">
          <div className="flex items-center mr-24 min-w-[180px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-restorative-media.png"
                alt="Restorative Media Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-xl hidden sm:inline whitespace-nowrap ml-2">RESTORATIVE MEDIA</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/troy-williams-journal"
              className="transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap"
            >
              Troy's Journal
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          <div className="flex-1"></div>

          <div className="flex justify-center max-w-sm w-full mx-2 md:mx-4 sm:flex">
            <div className="w-full flex items-center relative">
              <Input
                type="search"
                placeholder="Search..."
                className="bg-white border-0 text-black placeholder:text-gray-500 pr-8"
              />
              <Search className="h-4 w-4 absolute right-3 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:text-orange-500 bg-transparent hover:bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:text-orange-500 bg-transparent hover:bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:text-orange-500 bg-transparent hover:bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/pitch-your-content">
                    <Button className="bg-restorative-gold hover:bg-restorative-gold/90 px-4 whitespace-nowrap">
                      <span className="mr-1">▶</span> Pitch Your Content
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Submit your content for a chance to be featured on our site.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-restorative-gold hover:underline bg-transparent hover:bg-transparent whitespace-nowrap"
                >
                  <span className="mr-1">👤</span> Account <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black border border-gray-800 w-48">
                <DropdownMenuItem className="p-0 focus:bg-transparent hover:bg-transparent">
                  <Link
                    href="/login-form"
                    className="w-full px-4 py-2.5 block transition-colors text-white hover:text-restorative-gold hover:bg-gray-800"
                  >
                    <span className="flex items-center">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0 focus:bg-transparent hover:bg-transparent">
                  <Link
                    href="/signup"
                    className="w-full px-4 py-2.5 block transition-colors text-white hover:text-restorative-gold hover:bg-gray-800"
                  >
                    <span className="flex items-center">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <HeroSection />

      <div className="flex flex-1 py-12">
        {/* Left side - Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8 flex justify-center">
              <Logo className="h-16 w-16" />
            </div>

            <h1 className="text-3xl font-bold text-center mb-2">Join Restorative Media</h1>
            <p className="text-gray-400 text-center mb-8">Create your account and get access to exclusive content</p>

            {errors.form && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-md text-red-200">{errors.form}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`bg-white border-gray-300 text-black placeholder:text-gray-500 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className={`bg-white border-gray-300 text-black placeholder:text-gray-500 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  className={`bg-white border-gray-300 text-black placeholder:text-gray-500 ${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password ? (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                ) : (
                  <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={`bg-white border-gray-300 text-black placeholder:text-gray-500 ${errors.confirmPassword ? "border-red-500" : ""}`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsAccepted: checked as boolean }))}
                  className={cn(errors.termsAccepted ? "border-red-500" : "")}
                />
                <div>
                  <Label
                    htmlFor="termsAccepted"
                    className={`text-sm ${errors.termsAccepted ? "text-red-500" : "text-gray-300"}`}
                  >
                    I agree to the{" "}
                    <Link href="/terms-conditions" className="text-restorative-gold hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-restorative-gold hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                  {errors.termsAccepted && <p className="text-red-500 text-xs mt-1">{errors.termsAccepted}</p>}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-4">Choose Your Plan</h3>

                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 rounded-md border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                    <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="monthly" className="text-base font-medium flex items-center">
                        Monthly Plan
                        <span className="ml-2 px-2 py-0.5 text-xs bg-restorative-gold text-black rounded-full">
                          Popular
                        </span>
                      </Label>
                      <p className="text-xl font-bold text-restorative-gold mt-1">
                        $9.99<span className="text-sm text-gray-400 font-normal">/month</span>
                      </p>
                      <ul className="mt-2 text-sm text-gray-300 space-y-1">
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          Full access to all content
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          Ad-free viewing experience
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          Cancel anytime
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 rounded-md border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                    <RadioGroupItem value="annual" id="annual" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="annual" className="text-base font-medium flex items-center">
                        Annual Plan
                        <span className="ml-2 px-2 py-0.5 text-xs bg-restorative-gold text-black rounded-full">
                          Save 20%
                        </span>
                      </Label>
                      <p className="text-xl font-bold text-restorative-gold mt-1">
                        $95.88<span className="text-sm text-gray-400 font-normal">/year</span>
                      </p>
                      <p className="text-sm text-gray-400">$7.99/month, billed annually</p>
                      <ul className="mt-2 text-sm text-gray-300 space-y-1">
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          All monthly benefits
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          Exclusive supporter events
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-restorative-gold" />
                          Supporter badge on profile
                        </li>
                      </ul>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-restorative-gold hover:bg-amber-600 text-black font-semibold py-3"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Continue to Payment
                  </div>
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-restorative-gold hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Image/Info */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/featured-video-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-16 z-20">
            {/* Featured Image above the banner */}
            <div className="w-full mb-6 rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              <Image
                src="/san-quentin-1.jpg"
                alt="San Quentin Documentary"
                width={600}
                height={340}
                className="w-full h-auto object-cover"
              />
              <div className="bg-black/80 p-3">
                <p className="text-sm text-gray-300">Featured Documentary</p>
                <h3 className="text-lg font-semibold text-white">Inside San Quentin: Stories of Transformation</h3>
              </div>
            </div>

            {/* Rectangular Advertisement Banner */}
            <div className="w-full h-24 mb-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-xs">Premium Offer</div>
                <div className="text-xl font-bold">ADVERTISEMENT</div>
              </div>
              <div className="text-white text-2xl font-bold">728×90</div>
            </div>

            <h2 className="text-4xl font-bold mb-6">Experience Restorative Media</h2>
            <div className="space-y-6 max-w-md">
              <div className="flex items-start">
                <div className="bg-restorative-gold rounded-full p-1 mr-4 mt-1">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Exclusive Content</h3>
                  <p className="text-gray-300">
                    Access our full library of documentaries, interviews, and educational resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-restorative-gold rounded-full p-1 mr-4 mt-1">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Support Our Mission</h3>
                  <p className="text-gray-300">
                    Your subscription directly funds our work in restorative justice and community education.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-restorative-gold rounded-full p-1 mr-4 mt-1">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Join Our Community</h3>
                  <p className="text-gray-300">
                    Connect with others who share your passion for social justice and positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
