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
import { Facebook, Twitter, Instagram, Rss, Mail, Phone, MapPin } from "lucide-react"
import { ScrollButton } from "./scroll-button"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-8 sm:pt-12 pb-4 sm:pb-6 px-4 sm:px-0">
      <div className="container mx-auto px-4">
        {/* Top section with logo and navigation columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo and about section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/logo-restorative-media.png"
                alt="Restorative Media Logo"
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 mr-2 sm:mr-3"
              />
              <span className="text-lg sm:text-xl font-bold tracking-wider">RESTORATIVE MEDIA</span>
            </div>
            <p className="text-gray-400 mb-4 pr-4">
              Restorative Media is your premier destination for video content across gaming, movies, music, and more.
              Discover, watch, and engage with the content you love.
            </p>
            <div className="flex space-x-3 mb-4">
              <Link
                href="#"
                className="bg-gray-800 hover:bg-restorative-gold text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-restorative-gold text-white p-2 rounded-full transition-colors"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-restorative-gold text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-restorative-gold text-white p-2 rounded-full transition-colors"
              >
                <Rss size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-restorative-gold after:left-0 after:-bottom-2">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-restorative-gold after:left-0 after:-bottom-2">
                Categories
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/channels/gaming" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Gaming
                </Link>
              </li>
              <li>
                <Link href="/channels/movies" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Movie & TV
                </Link>
              </li>
              <li>
                <Link href="/channels/music" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/channels/food" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link href="/channels/sports" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/channels/travel" className="text-gray-400 hover:text-restorative-gold transition-colors">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-restorative-gold after:left-0 after:-bottom-2">
                Contact Us
              </span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-restorative-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Media Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-restorative-gold mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-restorative-gold mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@restorativemedia.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and back to top */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0 text-center sm:text-left">
            © 2025 Restorative Media. All rights reserved.
          </div>

          <ScrollButton />
        </div>
      </div>
    </footer>
  )
}
