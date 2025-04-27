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

import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ChevronDown,
  Menu,
  LogIn,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Add a prop that can be used to enforce consistent styling
export function SiteHeader({ className = "" }: { className?: string }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className={`sticky top-0 z-50 w-full bg-black text-white ${className}`}>
      <div className="flex h-16 items-center w-full">
        <div className="flex-none pl-4 md:pl-6 ml-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-restorative-media.png"
              alt="Restorative Media Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-bold text-xl hidden sm:inline whitespace-nowrap">RESTORATIVE MEDIA</span>
          </Link>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap",
                isActive("/") && "text-restorative-gold underline",
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap",
                isActive("/about") && "text-restorative-gold underline",
              )}
            >
              About
            </Link>
            <Link
              href="/troy-williams-journal"
              className={cn(
                "transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap",
                isActive("/troy-williams-journal") && "text-restorative-gold underline",
              )}
            >
              Troy's Journal
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={cn(
                    "transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap flex items-center cursor-pointer",
                    (isActive("/get-involved") || isActive("/support")) && "text-restorative-gold underline",
                  )}
                >
                  Get Involved <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-black border border-gray-800">
                <DropdownMenuItem className="p-0 focus:bg-transparent hover:bg-transparent">
                  <Link
                    href="/get-involved"
                    className={cn(
                      "w-full px-2 py-1.5 block transition-colors text-white hover:text-restorative-gold hover:underline",
                      isActive("/get-involved") && "text-restorative-gold underline",
                    )}
                  >
                    Get Involved
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0 focus:bg-transparent hover:bg-transparent">
                  <Link
                    href="/support"
                    className={cn(
                      "w-full px-2 py-1.5 block transition-colors text-white hover:text-restorative-gold hover:underline",
                      isActive("/support") && "text-restorative-gold underline",
                    )}
                  >
                    Support Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-restorative-gold hover:underline whitespace-nowrap",
                isActive("/contact") && "text-restorative-gold underline",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
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
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-orange-500 bg-transparent hover:bg-transparent"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-orange-500 bg-transparent hover:bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
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
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white border-r border-gray-800">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restorative-gold",
                  isActive("/") && "text-restorative-gold",
                )}
              >
                Home
              </Link>
              <Link href="/documentaries" className="text-lg font-medium transition-colors hover:text-restorative-gold">
                Documentaries
              </Link>
              <Link href="/tv-shows" className="text-lg font-medium transition-colors hover:text-restorative-gold">
                TV Shows
              </Link>
              <Link href="/movies" className="text-lg font-medium transition-colors hover:text-restorative-gold">
                Movies
              </Link>
              <Link href="/new-popular" className="text-lg font-medium transition-colors hover:text-restorative-gold">
                New & Popular
              </Link>
              <Link href="/my-list" className="text-lg font-medium transition-colors hover:text-restorative-gold">
                My List
              </Link>
              <div className="pt-4 border-t border-gray-800">
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-restorative-gold",
                    isActive("/about") && "text-restorative-gold",
                  )}
                >
                  About
                </Link>
              </div>
              <Link
                href="/troy-williams-journal"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restorative-gold",
                  isActive("/troy-williams-journal") && "text-restorative-gold",
                )}
              >
                Troy's Journal
              </Link>
              <Link
                href="/get-involved"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restorative-gold",
                  isActive("/get-involved") && "text-restorative-gold",
                )}
              >
                Get Involved
              </Link>
              <Link
                href="/support"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restorative-gold",
                  isActive("/support") && "text-restorative-gold",
                )}
              >
                Support Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restorative-gold",
                  isActive("/contact") && "text-restorative-gold",
                )}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-800">
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:text-restorative-gold bg-transparent hover:bg-transparent"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:text-restorative-gold bg-transparent hover:bg-transparent"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:text-restorative-gold bg-transparent hover:bg-transparent"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:text-restorative-gold bg-transparent hover:bg-transparent"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
