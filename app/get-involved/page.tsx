"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { SafeImage } from "@/components/safe-image"
import Link from "next/link"
import { ArrowRight, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react"
import Image from "next/image"

// Default placeholder images
const DEFAULT_EVENT_IMAGE = "/community-gathering.png"
const DEFAULT_FUNDRAISER_IMAGE = "/documentary-screening.png"

export default function GetInvolvedPage() {
  const [donationAmount, setDonationAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")

  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <div className="relative h-[300px] w-full mb-12 overflow-hidden rounded-xl">
          <SafeImage src="/community-gathering.png" alt="Community Gathering" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-restorative-gold">Get Involved</h1>
            <p className="text-xl max-w-2xl">
              Support our mission by purchasing tickets to events, donating to our causes, or volunteering your time.
            </p>
          </div>
        </div>

        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8 bg-white">
            <TabsTrigger
              value="tickets"
              className="text-black data-[state=active]:text-white data-[state=active]:bg-restorative-gold"
            >
              Tickets
            </TabsTrigger>
            <TabsTrigger
              value="donate"
              className="text-black data-[state=active]:text-white data-[state=active]:bg-restorative-gold"
            >
              Donate
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              className="text-black data-[state=active]:text-white data-[state=active]:bg-restorative-gold"
            >
              Volunteer
            </TabsTrigger>
            <TabsTrigger
              value="fundraise"
              className="text-black data-[state=active]:text-white data-[state=active]:bg-restorative-gold"
            >
              Fundraise
            </TabsTrigger>
          </TabsList>

          {/* Tickets Tab */}
          <TabsContent value="tickets" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EventCard
                title="Documentary Screening: Inside San Quentin"
                date="May 15, 2025"
                image="/san-quentin-1.jpg"
                price="$15.00"
                location="Oakland Community Theater"
                type="Documentary"
              />
              <EventCard
                title="Podcast Live: Untold Stories"
                date="May 22, 2025"
                image="/untold-stories-podcast.png"
                price="$10.00"
                location="Berkeley Arts Center"
                type="Podcast"
              />
              <EventCard
                title="Film Premiere: The Last Journey"
                date="June 5, 2025"
                image="/movie-unsplash-1.jpg"
                price="$20.00"
                location="San Francisco Film Center"
                type="Movie"
              />
              <EventCard
                title="Community Forum: Food Justice"
                date="June 12, 2025"
                image="/food-justice-video.png"
                price="$5.00"
                location="Oakland Urban Farm"
                type="Community Event"
              />
              <EventCard
                title="Documentary Series: Climate Solutions"
                date="June 20, 2025"
                image="/climate-solutions-video.png"
                price="$12.00"
                location="SF Green Space"
                type="Documentary"
              />
              <EventCard
                title="Podcast Live: Second Chances"
                date="July 8, 2025"
                image="/second-chances-podcast.png"
                price="$10.00"
                location="Restorative Justice Center"
                type="Podcast"
              />
            </div>
          </TabsContent>

          {/* Donate Tab */}
          <TabsContent value="donate" className="space-y-8">
            <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-restorative-gold">Support Our Mission</h2>
              <p className="mb-8">
                Your donation helps us create impactful media that amplifies marginalized voices and promotes
                restorative justice in our communities.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Select an amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {["10", "25", "50", "100"].map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount ? "default" : "outline"}
                        className={
                          donationAmount === amount
                            ? "bg-restorative-gold hover:bg-restorative-gold/90 text-black"
                            : "border-restorative-gold text-restorative-gold hover:text-black"
                        }
                        onClick={() => {
                          setDonationAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="w-full">
                      <Label htmlFor="custom-amount">Custom amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value)
                            setDonationAmount("")
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Select a cause</h3>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a cause" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Support</SelectItem>
                      <SelectItem value="documentary">Documentary Production</SelectItem>
                      <SelectItem value="education">Educational Programs</SelectItem>
                      <SelectItem value="community">Community Outreach</SelectItem>
                      <SelectItem value="justice">Restorative Justice Initiatives</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Sign up for our newsletter</Label>
                  </div>
                </div>

                <Button className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-black font-bold py-3">
                  Donate Now
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="space-y-8">
            <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-restorative-gold">Volunteer Opportunities</h2>
              <p className="mb-8">
                Join our team of dedicated volunteers who help make our events, productions, and community initiatives
                possible.
              </p>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <VolunteerCard
                    title="Production Assistant"
                    description="Help with documentary and podcast production, including setup, coordination, and technical support."
                    commitment="4-8 hours per week"
                    location="Various locations"
                  />
                  <VolunteerCard
                    title="Event Coordinator"
                    description="Assist with planning and executing screenings, live podcasts, and community events."
                    commitment="5-10 hours per month"
                    location="Bay Area"
                  />
                  <VolunteerCard
                    title="Community Outreach"
                    description="Help spread the word about our initiatives and connect with community partners."
                    commitment="3-6 hours per week"
                    location="Remote & In-person"
                  />
                  <VolunteerCard
                    title="Content Creator"
                    description="Contribute writing, photography, or social media content to support our mission."
                    commitment="Flexible"
                    location="Remote"
                  />
                  <VolunteerCard
                    title="Technical Support"
                    description="Provide technical assistance for livestreams, website maintenance, and digital content management."
                    commitment="5-10 hours per month"
                    location="Remote with occasional in-person"
                    className="border-2 border-restorative-gold"
                  />
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Apply to Volunteer</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="v-first-name">First Name</Label>
                        <Input id="v-first-name" />
                      </div>
                      <div>
                        <Label htmlFor="v-last-name">Last Name</Label>
                        <Input id="v-last-name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="v-email">Email</Label>
                      <Input id="v-email" type="email" />
                    </div>
                    <div>
                      <Label htmlFor="v-phone">Phone</Label>
                      <Input id="v-phone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="v-interest">Area of Interest</Label>
                      <Select defaultValue="production">
                        <SelectTrigger>
                          <SelectValue placeholder="Select area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="production">Production Assistant</SelectItem>
                          <SelectItem value="event">Event Coordinator</SelectItem>
                          <SelectItem value="outreach">Community Outreach</SelectItem>
                          <SelectItem value="content">Content Creator</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="v-message">Why do you want to volunteer?</Label>
                      <Textarea id="v-message" rows={4} />
                    </div>
                    <Button className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-black font-bold">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Fundraise Tab */}
          <TabsContent value="fundraise" className="space-y-8">
            <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-restorative-gold">Start a Fundraiser</h2>
              <p className="mb-8">
                Create your own fundraising campaign to support Restorative Media's projects and initiatives.
              </p>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FundraiserCard
                    title="Host a Screening"
                    description="Organize a documentary screening in your community and collect donations."
                    image="/documentary-screening.png"
                  />
                  <FundraiserCard
                    title="Birthday Fundraiser"
                    description="Ask for donations instead of gifts for your next birthday."
                    image="/community-gathering.png"
                  />
                  <FundraiserCard
                    title="Challenge Fundraiser"
                    description="Take on a personal challenge and get sponsored to support our cause."
                    image="/youth-basketball-tournament.png"
                  />
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Start Your Fundraiser</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="f-name">Your Name</Label>
                        <Input id="f-name" />
                      </div>
                      <div>
                        <Label htmlFor="f-email">Email</Label>
                        <Input id="f-email" type="email" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="f-title">Fundraiser Title</Label>
                      <Input id="f-title" />
                    </div>
                    <div>
                      <Label htmlFor="f-goal">Fundraising Goal ($)</Label>
                      <Input id="f-goal" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="f-type">Fundraiser Type</Label>
                      <Select defaultValue="event">
                        <SelectTrigger>
                          <SelectValue placeholder="Select fundraiser type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="personal">Personal Challenge</SelectItem>
                          <SelectItem value="occasion">Special Occasion</SelectItem>
                          <SelectItem value="memorial">In Memory Of</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="f-description">Fundraiser Description</Label>
                      <Textarea id="f-description" rows={4} />
                    </div>
                    <Button className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-black font-bold">
                      Create Fundraiser
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Closing Section with white background */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          {/* Main heading and intro */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community of Change-Makers</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your involvement makes a difference. Whether you attend an event, make a donation, volunteer your time, or
              start a fundraiser, you're helping us create media that matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/support">
                <Button className="bg-restorative-gold hover:bg-restorative-gold/90 text-black">
                  Subscribe to Our Newsletter
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-restorative-gold text-restorative-gold hover:bg-restorative-gold/10"
                >
                  Learn About Our Impact
                </Button>
              </Link>
            </div>
          </div>

          {/* Advertisement Banner with Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full h-[120px] md:h-[150px] bg-gradient-to-r from-restorative-gold to-amber-500 rounded-xl overflow-hidden flex items-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Image src="/community-celebration.png" alt="Community Celebration" fill className="object-cover" />
              </div>
              <div className="relative z-10 flex justify-between items-center w-full px-6">
                <div className="text-black">
                  <div className="text-sm font-medium">Support Our Mission</div>
                  <div className="text-xl md:text-2xl font-bold">BECOME A MONTHLY DONOR</div>
                </div>
                <Link href="/support">
                  <Button className="bg-black hover:bg-black/80 text-white whitespace-nowrap">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="text-restorative-gold" size={18} />
                <span>info@restorativemedia.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="text-restorative-gold" size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Follow Us</h3>
              <p className="mb-3">Stay connected with us on social media for updates and behind-the-scenes content.</p>
              <div className="flex justify-center gap-4 mb-3">
                <Instagram className="text-restorative-gold hover:text-restorative-gold/80 cursor-pointer" size={24} />
                <Twitter className="text-restorative-gold hover:text-restorative-gold/80 cursor-pointer" size={24} />
                <Facebook className="text-restorative-gold hover:text-restorative-gold/80 cursor-pointer" size={24} />
                <Youtube className="text-restorative-gold hover:text-restorative-gold/80 cursor-pointer" size={24} />
              </div>
              <Link href="#" className="text-restorative-gold hover:underline inline-flex items-center">
                View Our Social Media <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Upcoming Events</h3>
              <p className="mb-3">Check out our calendar for screenings, live podcasts, and community gatherings.</p>
              <Link href="#" className="text-restorative-gold hover:underline inline-flex items-center">
                View Calendar <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for event cards in the Tickets tab
function EventCard({
  title,
  date,
  image,
  price,
  location,
  type,
}: {
  title: string
  date: string
  image: string
  price: string
  location: string
  type: string
}) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <SafeImage src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-restorative-gold text-black px-2 py-1 rounded text-xs font-bold">
          {type}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-sm text-gray-300 mb-2">
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-restorative-gold font-bold">{price}</span>
          <Button className="bg-restorative-gold hover:bg-restorative-gold/90 text-black">Buy Tickets</Button>
        </div>
      </div>
    </div>
  )
}

// Component for volunteer cards in the Volunteer tab
function VolunteerCard({
  title,
  description,
  commitment,
  location,
  className = "",
}: {
  title: string
  description: string
  commitment: string
  location: string
  className?: string
}) {
  return (
    <div className={`bg-zinc-800 p-6 rounded-lg ${className}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-sm text-gray-400">
        <p>
          <span className="text-restorative-gold">Time Commitment:</span> {commitment}
        </p>
        <p>
          <span className="text-restorative-gold">Location:</span> {location}
        </p>
      </div>
    </div>
  )
}

// Component for fundraiser cards in the Fundraise tab
function FundraiserCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="relative h-40 w-full">
        <SafeImage src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}
