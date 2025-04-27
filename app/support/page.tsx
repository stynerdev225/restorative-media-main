"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Users,
  Gift,
  CreditCard,
  Calendar,
  Clock,
  Check,
  ArrowRight,
  Play,
  ChevronDown,
  Video,
  MapPin,
  Clock3,
  Briefcase,
  ExternalLink,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SupportPage() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [selectedPlan, setSelectedPlan] = useState<string | null>("Advocate")

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <span className="bg-amber-500 text-black px-2 py-1 text-xs font-bold uppercase">SUPPORT US</span>
                <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
                  Help Us Create Meaningful Content That Matters
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Your support enables us to produce independent, thought-provoking media that challenges perspectives
                  and inspires positive change.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#donate"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Donate Now</span>
                  </Link>
                  <Link
                    href="#membership"
                    className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Users className="h-5 w-5" />
                    <span>Become a Member</span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/documentary-crew-action.png"
                    alt="Support Restorative Media"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-amber-500/90 rounded-full p-4 shadow-xl cursor-pointer hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-amber-500 rounded-full p-2">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Join Our Community</div>
                      <div className="text-xs text-gray-500">5,000+ supporters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Impact Stats */}
              <div className="bg-zinc-800 rounded-xl p-8 mb-12 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Your Support Makes a Difference</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/30 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-amber-500 mb-2">100+</div>
                    <div className="text-white">Original videos produced annually</div>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-amber-500 mb-2">50K+</div>
                    <div className="text-white">Community members worldwide</div>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-amber-500 mb-2">12</div>
                    <div className="text-white">Journalism awards received</div>
                  </div>
                </div>
              </div>

              {/* Our Mission & Vision Section */}
              <div className="mb-16">
                {/* Top row with two images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/documentary-crew-interview.png"
                      alt="Our mission in action"
                      width={600}
                      height={450}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase">OUR MISSION</span>
                      <h3 className="text-xl font-bold text-white mt-2">Amplifying Unheard Voices</h3>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/community-gathering.png"
                      alt="Our community impact"
                      width={600}
                      height={450}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase">OUR IMPACT</span>
                      <h3 className="text-xl font-bold text-white mt-2">Building Stronger Communities</h3>
                    </div>
                  </div>
                </div>

                {/* Vision section - Horizontal layout */}
                <div className="bg-zinc-800 rounded-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase">
                          OUR VISION
                        </span>
                        <h2 className="text-2xl font-bold text-white">Creating Media That Matters</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-300 mb-4">
                            At Restorative Media, we believe in the power of storytelling to heal, transform, and
                            inspire. Our vision is to create a world where every voice is heard, every story matters,
                            and media serves as a catalyst for positive change.
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-300 mb-4">
                            Through our documentaries, podcasts, and educational content, we shine a light on untold
                            stories, challenge perspectives, and build bridges across communities.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="bg-black/30 p-4 rounded-lg flex-1">
                          <div className="text-amber-500 font-bold text-lg mb-1">100+</div>
                          <div className="text-white text-sm">Communities served</div>
                        </div>
                        <div className="bg-black/30 p-4 rounded-lg flex-1">
                          <div className="text-amber-500 font-bold text-lg mb-1">50+</div>
                          <div className="text-white text-sm">Documentaries produced</div>
                        </div>
                        <div className="bg-black/30 p-4 rounded-lg flex-1">
                          <div className="text-amber-500 font-bold text-lg mb-1">12</div>
                          <div className="text-white text-sm">Industry awards</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 relative min-h-[250px] md:min-h-0">
                      <Image src="/prison-documentary.png" alt="Our documentary work" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-amber-500/90 rounded-full p-4 shadow-xl cursor-pointer hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                          <Play className="h-8 w-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center">
                  <h2 className="text-3xl font-bold mb-4">Join Our Community of Supporters</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    Your support enables us to continue our mission of creating meaningful content that challenges,
                    inspires, and transforms. Together, we can amplify voices that need to be heard and create media
                    that makes a difference.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="#donate"
                      className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Support Our Work
                    </Link>
                    <Link
                      href="/about"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ways to Support */}
              <div id="donate" className="scroll-mt-20 mb-12">
                <h2 className="text-2xl font-bold mb-6">Ways to Support Our Work</h2>

                {/* One-time Donation */}
                <div className="bg-white p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500/10 p-3 rounded-full">
                      <Gift className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">One-time Donation</h3>
                      <p className="text-gray-600 mb-6">
                        Your one-time gift helps us create independent journalism that informs, inspires, and empowers
                        our audience.
                      </p>

                      <div className="mb-6">
                        <div className="text-sm font-medium mb-2">Select an amount:</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {["$25", "$50", "$100", "$250"].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => handleAmountSelect(amount)}
                              className={`border-2 rounded-lg py-3 font-medium transition-colors duration-200 ${
                                selectedAmount === amount
                                  ? "border-amber-500 bg-amber-500/10 text-amber-700"
                                  : "border-gray-200 hover:border-amber-500 hover:bg-amber-500/5"
                              }`}
                            >
                              {amount}
                            </button>
                          ))}
                        </div>
                        <div className="mt-3">
                          <Input
                            type="text"
                            placeholder="Other amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className={`border-2 ${
                              customAmount
                                ? "border-amber-500 focus:border-amber-500"
                                : "border-gray-200 focus:border-amber-500"
                            }`}
                          />
                        </div>
                      </div>

                      <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        <span>Donate Now</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Membership */}
                <div
                  id="membership"
                  className="scroll-mt-20 bg-white p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Become a Member</h3>
                      <p className="text-gray-600 mb-6">
                        Join our community of supporters with a monthly contribution and get exclusive benefits.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {[
                          {
                            title: "Supporter",
                            price: "$5",
                            features: [
                              "Ad-free viewing experience",
                              "Members-only newsletter",
                              "Early access to new content",
                            ],
                          },
                          {
                            title: "Advocate",
                            price: "$15",
                            features: [
                              "All Supporter benefits",
                              "Exclusive behind-the-scenes content",
                              "Quarterly virtual events",
                              "Name in credits",
                            ],
                            recommended: true,
                          },
                          {
                            title: "Champion",
                            price: "$30",
                            features: [
                              "All Advocate benefits",
                              "Direct access to creators",
                              "Input on future content",
                              "Annual special gift",
                            ],
                          },
                        ].map((plan, index) => (
                          <div
                            key={index}
                            className={`border-2 rounded-xl p-6 relative ${
                              selectedPlan === plan.title
                                ? "border-amber-500 bg-amber-50 shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => handlePlanSelect(plan.title)}
                          >
                            {plan.recommended && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                                MOST POPULAR
                              </div>
                            )}
                            {selectedPlan === plan.title && (
                              <div className="absolute top-4 right-4 bg-amber-500 rounded-full p-1">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <h4 className="text-lg font-bold mb-1">{plan.title}</h4>
                            <div className="flex items-baseline mb-4">
                              <span className="text-2xl font-bold">{plan.price}</span>
                              <span className="text-gray-500 ml-1">/month</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <button
                              className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                                selectedPlan === plan.title
                                  ? "bg-amber-500 text-black hover:bg-amber-600"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                              }`}
                            >
                              {selectedPlan === plan.title ? "Selected" : "Select"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Sponsorship */}
                <div className="bg-white p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500/10 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Corporate Sponsorship</h3>
                      <p className="text-gray-600 mb-4">
                        Align your brand with our mission and reach our engaged audience through corporate sponsorship
                        opportunities.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1 border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Episode Sponsorship</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Sponsor individual episodes of our most popular series.
                          </p>
                          <Link
                            href="#"
                            className="text-amber-500 hover:text-amber-600 font-medium text-sm flex items-center gap-1"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="flex-1 border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Series Sponsorship</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Become the exclusive sponsor for an entire content series.
                          </p>
                          <Link
                            href="#"
                            className="text-amber-500 hover:text-amber-600 font-medium text-sm flex items-center gap-1"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>

                      <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                        <span>Contact Our Sponsorship Team</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteer Opportunities Section - Magazine Style */}
              <div id="volunteer" className="scroll-mt-20 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold">Volunteer Opportunities</h2>
                  <Link href="#" className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1">
                    <span>View all positions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative mb-12 overflow-hidden rounded-xl">
                  <Image
                    src="/volunteer-hero-image.png"
                    alt="Volunteers working together"
                    width={1200}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase w-fit mb-3">
                      JOIN OUR TEAM
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Make a Difference Through Volunteering
                    </h3>
                    <p className="text-white/90 max-w-2xl mb-4">
                      Our volunteers are the backbone of our organization, helping us create impactful content and build
                      stronger communities.
                    </p>
                    <Link
                      href="#volunteer-positions"
                      className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit flex items-center gap-2"
                    >
                      <span>Explore Opportunities</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div id="volunteer-positions" className="space-y-8">
                  {/* Featured Position */}
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <Image
                          src="/production-assistant.png"
                          alt="Production Assistant"
                          width={500}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                          FEATURED
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Video className="h-5 w-5 text-amber-500" />
                            <span className="text-sm font-medium text-amber-500">Production Team</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">Production Assistant</h3>
                          <p className="text-gray-600 mb-4">
                            Join our documentary team and help create compelling visual stories that inspire change.
                            You'll work directly with our award-winning filmmakers on location and in post-production.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock3 className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">4-8 hours/week</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">San Francisco, CA</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Link
                            href="#"
                            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            Apply Now
                          </Link>
                          <Link
                            href="#"
                            className="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center gap-1"
                          >
                            <span>Learn more</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Positions - Magazine Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Event Coordinator */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/event-coordinator.png"
                          alt="Event Coordinator"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Events Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Event Coordinator</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Help plan and execute screenings, live podcasts, and community events that bring our content
                          to life.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">5-10 hours/month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Bay Area</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Community Outreach */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/community-outreach.png"
                          alt="Community Outreach"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Community Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Connect with community partners and help spread the word about our initiatives and impact.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">3-6 hours/week</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Remote & In-person</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Content Creator */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/content-creator.png"
                          alt="Content Creator"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Content Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Content Creator</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Contribute writing, photography, or social media content to support our mission and reach new
                          audiences.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Flexible</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Remote</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Technical Support */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border-2 border-amber-500 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/confident-speaker.png"
                          alt="Technical Support"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                          NEW
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Tech Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Help with livestreams, website maintenance, and digital content management. Perfect for
                          tech-savvy volunteers!
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">5-10 hours/month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Remote (Some In-Person)</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>

                    {/* Production Assistant */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/film-camera-documentary-crew.png"
                          alt="Production Assistant"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Production Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Production Assistant</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Help with documentary and podcast production, including setup, coordination, and technical
                          support.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">4-8 hours/week</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Various locations</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Fundraiser */}
                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src="/community-celebration.png"
                          alt="Fundraiser"
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-medium text-amber-500">Fundraising Team</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Fundraiser</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          Help organize fundraising events, connect with potential donors, and develop creative
                          campaigns to support our mission.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">6-10 hours/month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">Remote & In-person</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm text-center transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Volunteer Testimonial */}
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3">
                        <Image
                          src="/volunteer-testimonial.png"
                          alt="Volunteer Testimonial"
                          width={300}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="text-xl md:text-2xl italic text-gray-700 mb-6">
                          "Volunteering with Restorative Media has been one of the most rewarding experiences of my
                          life. I've developed new skills, made lasting connections, and contributed to stories that
                          truly matter."
                        </div>
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold">Marcus Johnson</div>
                            <div className="text-sm text-gray-500">Production Assistant Volunteer, 2 years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start a Fundraiser Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold">Start a Fundraiser</h2>
                  <Link href="#" className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1">
                    <span>See all fundraisers</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Hero Banner */}
                <div className="relative mb-10 overflow-hidden rounded-xl">
                  <Image
                    src="/community-celebration.png"
                    alt="Start a Fundraiser"
                    width={1200}
                    height={400}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase w-fit mb-3">
                      MAKE AN IMPACT
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Create Your Own Fundraising Campaign
                    </h3>
                    <p className="text-white/90 max-w-2xl mb-4">
                      Rally your friends, family, and community to support our mission of creating meaningful media that
                      matters.
                    </p>
                  </div>
                </div>

                {/* Fundraiser Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Create Your Campaign */}
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image
                      src="/documentary-screening.png"
                      alt="Create Your Campaign"
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Host a Screening</h3>
                      <p className="text-white/80 mb-4">
                        Organize a documentary screening in your community and collect donations.
                      </p>
                      <Link
                        href="#"
                        className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-lg text-sm w-fit transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>

                  {/* Birthday Fundraiser */}
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image
                      src="/confident-leader.png"
                      alt="Birthday Fundraiser"
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Birthday Fundraiser</h3>
                      <p className="text-white/80 mb-4">Ask for donations instead of gifts for your next birthday.</p>
                      <Link
                        href="#"
                        className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-lg text-sm w-fit transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Start Now
                      </Link>
                    </div>
                  </div>

                  {/* Challenge Fundraiser */}
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image
                      src="/mountain-biking-hero.png"
                      alt="Challenge Fundraiser"
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Challenge Fundraiser</h3>
                      <p className="text-white/80 mb-4">
                        Take on a personal challenge and get sponsored to support our cause.
                      </p>
                      <Link
                        href="#"
                        className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-lg text-sm w-fit transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Get Inspired
                      </Link>
                    </div>
                  </div>

                  {/* Create Your Own */}
                  <div className="group relative overflow-hidden rounded-xl">
                    <Image
                      src="/community-gathering.png"
                      alt="Create Your Own"
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Create Your Own</h3>
                      <p className="text-white/80 mb-4">
                        Have a creative idea? Start your own unique fundraising campaign.
                      </p>
                      <Link
                        href="#"
                        className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-lg text-sm w-fit transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Start Creating
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Success Story */}
                <div className="mt-10 bg-gray-50 rounded-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <Image
                        src="/documentary-crew-interview.png"
                        alt="Fundraising Success Story"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <span className="text-amber-500 font-medium mb-2">SUCCESS STORY</span>
                      <h3 className="text-2xl font-bold mb-4">$15,000 Raised for Youth Documentary</h3>
                      <p className="text-gray-600 mb-6">
                        Sarah organized a series of community screenings that raised over $15,000 to fund our youth
                        documentary program, giving young filmmakers the opportunity to tell their stories.
                      </p>
                      <Link
                        href="#"
                        className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1 w-fit"
                      >
                        <span>Read the full story</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">What Our Supporters Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      quote:
                        "Supporting Restorative Media has been one of the most meaningful investments I've made. Their content has changed how I see the world.",
                      name: "Sarah Johnson",
                      title: "Monthly Member since 2020",
                      image: "/confident-leader.png",
                    },
                    {
                      quote:
                        "As a corporate sponsor, we've seen incredible engagement with our brand through Restorative Media's authentic approach to storytelling.",
                      name: "Michael Chen",
                      title: "Marketing Director, EcoTech Solutions",
                      image: "/confident-asian-businessman.png",
                    },
                    {
                      quote:
                        "The depth and quality of reporting is unmatched. I'm proud to support journalism that actually makes a difference.",
                      name: "Aisha Williams",
                      title: "Champion Member",
                      image: "/confident-city-woman.png",
                    },
                    {
                      quote:
                        "Their documentary series on rehabilitation changed my perspective completely. This is the kind of media we need more of.",
                      name: "David Rodriguez",
                      title: "Annual Donor",
                      image: "/thoughtful-gaze.png",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-4 text-gray-600 italic flex-1">"{testimonial.quote}"</div>
                        <div className="flex items-center gap-3 mt-auto">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "Is my donation tax-deductible?",
                      answer:
                        "Yes, Restorative Media is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.",
                    },
                    {
                      question: "How is my donation used?",
                      answer:
                        "Your donation directly supports our content creation, including research, production, editing, and distribution. It also helps us maintain our platform, develop new series, and expand our reach to new audiences. We are committed to transparency and publish an annual report detailing how funds are allocated.",
                    },
                    {
                      question: "Can I cancel my membership at any time?",
                      answer:
                        "Absolutely. While we hope you'll continue to support our work, you can cancel your membership at any time through your account settings or by contacting our support team. There are no cancellation fees or penalties.",
                    },
                    {
                      question: "Do you accept donations in cryptocurrencies?",
                      answer:
                        "Yes, we accept donations in several cryptocurrencies including Bitcoin, Ethereum, and others. Please contact our support team for the specific wallet addresses and instructions for cryptocurrency donations.",
                    },
                    {
                      question: "Can I donate equipment or services instead of money?",
                      answer:
                        "We do accept in-kind donations of equipment and professional services that align with our needs. Please contact us with details about what you'd like to donate, and our team will follow up to discuss whether it meets our current needs.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100"
                    >
                      <div className="flex justify-between items-center cursor-pointer">
                        <h3 className="font-bold text-lg">{faq.question}</h3>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="mt-3 text-gray-600">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-12">
                <h2 className="text-2xl font-bold mb-6">Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help. Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is your question about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="privacy" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-amber-500 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted about my inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-20">
                {/* Impact Story */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-4">Your Impact in Action</h3>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/documentary-crew-interview.png"
                      alt="Documentary filming"
                      width={350}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-amber-500/90 rounded-full p-3 shadow-xl cursor-pointer hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                        <Play className="h-6 w-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">San Quentin: Stories of Rehabilitation</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    This award-winning documentary series was made possible by supporters like you. It has reached over
                    2 million viewers and influenced policy discussions nationwide.
                  </p>
                  <Link
                    href="/documentary/inside-san-quentin"
                    className="text-amber-500 hover:text-amber-600 font-medium text-sm flex items-center gap-1"
                  >
                    <span>Watch the series</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-4">Upcoming Member Events</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Virtual Q&A: The Future of Documentary Filmmaking",
                        date: "May 15, 2025",
                        time: "7:00 PM EST",
                        icon: <Calendar className="h-5 w-5 text-amber-500" />,
                      },
                      {
                        title: "Behind the Scenes: Our Latest Food Series",
                        date: "June 2, 2025",
                        time: "6:30 PM EST",
                        icon: <Clock className="h-5 w-5 text-amber-500" />,
                      },
                      {
                        title: "Member Meetup: New York City",
                        date: "June 18, 2025",
                        time: "7:00 PM EST",
                        icon: <Users className="h-5 w-5 text-amber-500" />,
                      },
                    ].map((event, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="bg-amber-500/10 p-2 rounded-full h-fit">{event.icon}</div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="text-sm text-gray-500">
                            {event.date} • {event.time}
                          </div>
                          <Link
                            href="#"
                            className="text-amber-500 hover:text-amber-600 text-sm font-medium mt-1 inline-block"
                          >
                            Register →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Annual Report */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 mb-8 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-4">Transparency</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center gap-3">
                    <div className="bg-amber-500/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">2024 Annual Report</h4>
                      <p className="text-sm text-gray-500">See how we used donor funds last year</p>
                    </div>
                    <Link
                      href="#"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg text-sm font-medium flex items-center gap-1"
                    >
                      <span>Download PDF</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    We're committed to transparency in how we operate. View our financial reports, impact assessments,
                    and organizational structure.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="#"
                      className="text-amber-500 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
                    >
                      <span>Financial statements</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-amber-500 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
                    >
                      <span>Board of directors</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-amber-500 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
                    >
                      <span>Ethics policy</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter for updates on our work, impact stories, and ways to get involved.
                  </p>
                  <form className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-amber-500/20"
                    />
                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="mt-4 text-xs text-gray-500">
                    By subscribing, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>
                    . You can unsubscribe at any time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdvertisementBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
