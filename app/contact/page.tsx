"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Users,
} from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  // Testimonials data
  const testimonials = [
    {
      quote: "Restorative Media responded quickly to my inquiry and helped bring my documentary idea to life.",
      author: "Michael Chen, Independent Filmmaker",
      image: "/confident-asian-businessman.png",
    },
    {
      quote: "The team was incredibly supportive throughout our collaboration process. Highly recommended!",
      author: "Sarah Johnson, Community Organizer",
      image: "/confident-city-woman.png",
    },
    {
      quote: "Their guidance helped our nonprofit tell our story in a compelling and authentic way.",
      author: "David Rodriguez, Nonprofit Director",
      image: "/relaxed-latino-man.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <Image
          src="/documentary-crew-interview.png"
          alt="Contact Restorative Media"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Have questions, feedback, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <MapPin size={24} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p>123 Media Street, San Francisco, CA 94103</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={24} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail size={24} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email Address</h3>
                <p>contact@restorativemedia.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock size={24} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Office Hours</h3>
                <p>Monday-Friday: 9am - 5pm PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form and Additional Content in a single column */}
          <div className="lg:col-span-2">
            {/* Contact Form Card */}
            <div className="bg-white rounded-lg shadow-lg p-5 mb-6">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="mb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="bg-restorative-gold hover:bg-amber-600 text-white font-medium">
                  Send Message
                </Button>
              </form>
            </div>

            {/* What to Expect Section - Separate card */}
            <div className="bg-white rounded-lg shadow-lg p-5 mb-6">
              <h3 className="text-xl font-bold mb-3">What to Expect After Contacting Us</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 p-1.5 rounded-full mr-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Confirmation</h4>
                  </div>
                  <p className="text-xs text-gray-600">
                    You'll receive an immediate confirmation that we've received your message.
                  </p>
                </div>

                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 p-1.5 rounded-full mr-2">
                      <MessageSquare className="h-4 w-4 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Personal Response</h4>
                  </div>
                  <p className="text-xs text-gray-600">
                    A team member will personally respond to your inquiry within 24-48 hours.
                  </p>
                </div>

                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 p-1.5 rounded-full mr-2">
                      <Users className="h-4 w-4 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Next Steps</h4>
                  </div>
                  <p className="text-xs text-gray-600">
                    We'll schedule a call or meeting if needed to discuss your project further.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery - Separate card */}
            <div className="bg-white rounded-lg shadow-lg p-5">
              <h3 className="text-xl font-bold mb-3">Our Team in Action</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/documentary-crew-action.png"
                    alt="Documentary Crew"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/film-camera-documentary-crew.png"
                    alt="Film Camera"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/news-team-interview.png"
                    alt="News Team Interview"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/community-gathering.png"
                    alt="Community Gathering"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-40">
                <Image src={"/oakland-fruitvale-map.png"} alt="Our Location" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Visit Our Studio</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Located in the heart of San Francisco, our studio is easily accessible by public transportation.
                </p>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white text-sm">Get Directions</Button>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg mb-2">Connect With Us</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600"
                  >
                    <Youtube className="h-4 w-4" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Team Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/media-team-brainstorm.png"
                alt="Our Media Team"
                width={400}
                height={200}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Our Team</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Meet the passionate professionals behind Restorative Media's innovative content.
                </p>
                <Link href="/about">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white text-sm">About Us</Button>
                </Link>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg mb-2">What People Say</h3>
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 pb-2 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs italic mb-1">"{testimonial.quote}"</p>
                      <p className="text-xs font-medium">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-6 mt-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Interested in Collaborating?</h2>
          <p className="text-base mb-4 max-w-2xl mx-auto">
            We're always looking for creative partners to help tell important stories.
          </p>
          <Link href="/pitch-your-content">
            <Button className="bg-restorative-gold hover:bg-amber-600 text-white font-medium">
              Pitch Your Content
            </Button>
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Stay updated with our latest content, events, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Your email address" className="flex-grow" />
              <Button className="bg-restorative-gold hover:bg-amber-600 text-white whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
