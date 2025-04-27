"use client"

import Image from "next/image"
import { FeaturedVideoHero } from "@/components/featured-video-hero"
import { AdvertisementBox } from "@/components/advertisement-box"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Calendar,
  Building2,
  Film,
  Users,
  Handshake,
  Globe,
  Library,
  Star,
  BadgeCheck,
  Lightbulb,
  Heart,
  Clock,
  Leaf,
  Play,
} from "lucide-react"

export default function AboutPage() {
  const [showMoreVideos, setShowMoreVideos] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [floatingMarkers, setFloatingMarkers] = useState<{ 
    width: string; 
    height: string; 
    left: string; 
    top: string; 
    opacity: number; 
    transform: string; 
    animation: string; 
  }[]>([])

  // Add scroll event listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Initialize random particle properties on client-side only
  useEffect(() => {
    // Create markers with randomized properties only after mount
    const markers = Array.from({ length: 8 }).map(() => ({
      width: `${Math.random() * 20 + 15}px`,
      height: `${Math.random() * 20 + 15}px`,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      opacity: Math.random() * 0.3 + 0.1,
      transform: `translateZ(${Math.random() * 40}px)`,
      animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out`,
    }))

    setFloatingMarkers(markers)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Featured Video Hero Section */}
      <FeaturedVideoHero />

      {/* Advertisement Banner */}
      <div className="container mx-auto py-8">
        <AdvertisementBox width={970} height={90} className="mx-auto" />
      </div>

      {/* About Restorative Media Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story: Redefining Digital Media</h2>

            {/* Added image to About section */}
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about-restorative-media.png"
                alt="Restorative Media Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose max-w-none text-gray-700">
              <p className="text-lg">
                Restorative Media is a cutting-edge digital platform dedicated to delivering high-quality, engaging
                content across multiple categories including sports, food, music, movies, and more.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Mission & Vision</h3>
              <p>
                Founded in 2020, our mission is to provide a diverse range of content that informs, entertains, and
                inspires our global audience. We work with talented creators and journalists to bring you the latest
                trends, in-depth analyses, and compelling stories.
              </p>
              <p>
                Our platform serves millions of viewers worldwide, with a commitment to quality, authenticity, and
                innovation in digital media.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">The Restorative Difference</h3>
              <p>
                What sets Restorative Media apart is our unique approach to content creation and curation. We believe in
                the power of storytelling to connect, inspire, and transform. Our team of dedicated professionals works
                tirelessly to bring you content that not only entertains but also educates and enriches.
              </p>
              <p>
                We leverage cutting-edge technology and innovative production techniques to deliver immersive
                experiences across all our content categories. From breathtaking sports footage to mouthwatering
                culinary adventures, from insightful music analyses to thought-provoking film reviews – we strive for
                excellence in everything we produce.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Global Community</h3>
              <p>
                Restorative Media has built a vibrant, engaged community of viewers, creators, and partners from around
                the world. We celebrate diversity and inclusion, showcasing voices and perspectives from different
                cultures, backgrounds, and experiences.
              </p>
              <p>
                Our platform serves as a bridge connecting talented creators with passionate audiences, fostering
                meaningful interactions and conversations around shared interests and passions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Innovation & Technology</h3>
              <p>
                At the heart of Restorative Media is our commitment to technological innovation. We continuously invest
                in state-of-the-art production equipment, streaming technology, and user experience design to ensure our
                platform delivers content seamlessly across all devices and platforms.
              </p>
              <p>
                Our proprietary recommendation algorithm helps users discover new content tailored to their interests,
                while our interactive features encourage community engagement and participation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Content Creation Process</h3>
              <p>
                Our content creation process is built on a foundation of research, creativity, and technical excellence.
                Each piece of content goes through a rigorous development pipeline that ensures quality at every step:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Concept Development:</span> Our creative teams brainstorm ideas based on
                  audience insights, trends, and cultural relevance.
                </li>
                <li>
                  <span className="font-medium">Research & Planning:</span> Thorough research ensures our content is
                  accurate, informative, and provides unique perspectives.
                </li>
                <li>
                  <span className="font-medium">Production:</span> Using state-of-the-art equipment and techniques, our
                  production teams bring concepts to life with stunning visuals and audio.
                </li>
                <li>
                  <span className="font-medium">Post-Production:</span> Expert editors, sound designers, and visual
                  effects artists refine the content to professional standards.
                </li>
                <li>
                  <span className="font-medium">Quality Assurance:</span> Every piece of content undergoes rigorous
                  quality checks before publication.
                </li>
              </ul>

              {/* Additional content to fill the left column */}
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Commitment to Excellence</h3>
              <p>
                At Restorative Media, excellence is not just a goal—it's our standard. We are committed to delivering
                content that meets the highest standards of quality, accuracy, and creativity. Our team of experienced
                professionals works diligently to ensure that every piece of content we produce reflects our dedication
                to excellence.
              </p>
              <p>
                We believe that quality content has the power to inform, inspire, and transform. That's why we invest in
                the best talent, tools, and technologies to create content that resonates with our audience and stands
                out in a crowded digital landscape.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Approach to Storytelling</h3>
              <p>
                Storytelling is at the heart of what we do at Restorative Media. We believe that compelling stories have
                the power to connect people, bridge divides, and foster understanding. Our approach to storytelling is
                rooted in authenticity, empathy, and creativity.
              </p>
              <p>
                We seek out diverse voices and perspectives, ensuring that our content reflects the rich tapestry of
                human experience. Whether we're covering sports, food, music, or movies, we strive to tell stories that
                are engaging, informative, and thought-provoking.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Editorial Standards</h3>
              <p>
                Integrity and accuracy are the cornerstones of our editorial standards. We are committed to providing
                content that is factually accurate, balanced, and fair. Our editorial team follows rigorous
                fact-checking processes to ensure the accuracy of our content.
              </p>
              <p>
                We also value transparency and accountability. When we make mistakes, we acknowledge them promptly and
                correct them openly. We believe that maintaining high editorial standards is essential to building and
                maintaining trust with our audience.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Vision for the Future</h3>
              <p>
                As we look to the future, we are excited about the opportunities that lie ahead. We are committed to
                staying at the forefront of digital media, embracing new technologies and platforms to deliver content
                in innovative and engaging ways.
              </p>
              <p>
                We envision a future where Restorative Media continues to grow and evolve, reaching new audiences and
                exploring new content categories. But no matter how much we grow or change, our commitment to quality,
                authenticity, and innovation will remain constant.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Join Our Journey</h3>
              <p>
                We invite you to join us on our journey. Whether you're a viewer, a creator, or a potential partner,
                there's a place for you in the Restorative Media community. Together, we can create and share content
                that informs, entertains, and inspires.
              </p>
              <p>
                Thank you for being part of our story. We look forward to continuing to serve you with high-quality,
                engaging content across all our platforms.
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            {/* Special Offer Watch Advertisement */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[250px] w-full bg-gradient-to-b from-gray-300 to-gray-500">
                  <Image src="/advertisement-watch.png" alt="Premium Watch" fill className="object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <p className="text-white text-xs mb-1">SPECIAL OFFER</p>
                    <h4 className="text-white font-bold text-xl mb-2">Limited Edition Collection</h4>
                    <p className="text-white text-sm mb-4">Exclusive discount for a limited time</p>
                    <button className="bg-amber-500 text-white text-sm py-2 px-6 rounded-md hover:bg-amber-600 transition-colors">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sustainability Commitment Section */}
            <div className="mb-6">
              <div
                className="bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 transform transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                  Sustainability Commitment
                </h3>
                <div className="space-y-4 mt-4">
                  <div className="flex items-start">
                    <Leaf size={18} className="text-gray-700 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      Restorative Media is committed to sustainable business practices and reducing our environmental
                      footprint through green initiatives.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Leaf size={18} className="text-gray-700 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      Our production facilities utilize renewable energy sources where possible, and we've established a
                      carbon offset program for our digital infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement 3 - Eco-Friendly Tech */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/sustainable-future-city.png"
                    alt="Eco-friendly Technology"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <p className="text-white text-xs mb-1">SPONSORED</p>
                    <h4 className="text-white font-bold text-xl mb-2">Eco-Friendly Tech Solutions</h4>
                    <p className="text-white text-sm mb-3">
                      Reduce your carbon footprint with our sustainable technology
                    </p>
                    <button className="bg-green-600 text-white text-sm py-2 px-4 rounded-md hover:bg-green-700 transition-colors w-fit">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement 4 - Solar Energy */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[250px] w-full">
                  <Image src="/shining-solar-future.png" alt="Renewable Energy" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <p className="text-white text-xs mb-1">ADVERTISEMENT</p>
                    <h4 className="text-white font-bold text-xl mb-2">Switch to Solar Today</h4>
                    <p className="text-white text-sm mb-3">Save money and the planet with renewable energy</p>
                    <button className="bg-amber-500 text-white text-sm py-2 px-4 rounded-md hover:bg-amber-600 transition-colors w-fit">
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement 5 - Premium Content */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[250px] w-full bg-gradient-to-b from-gray-300 to-gray-500">
                  <Image src="/advertisement-watch.png" alt="Premium Watch" fill className="object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <p className="text-white text-xs mb-1">Smart & Responsive</p>
                    <h4 className="text-white font-bold text-xl mb-2">PREMIUM CONTENT</h4>
                    <p className="text-white text-sm mb-4"></p>
                    <button className="bg-gray-800 text-white text-sm py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement 6 - Special Offer */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[250px] w-full bg-gradient-to-b from-gray-300 to-gray-500">
                  <Image src="/advertisement-watch.png" alt="Premium Watch" fill className="object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <p className="text-white text-xs mb-1">Smart & Responsive</p>
                    <h4 className="text-white font-bold text-xl mb-2">SPECIAL OFFER</h4>
                    <p className="text-white text-sm mb-4"></p>
                    <button className="bg-gray-800 text-white text-sm py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts Section */}
            <div className="mb-6">
              <div
                className="bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 transform transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">Quick Facts</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Calendar size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Founded:</span>
                      <span className="ml-2 text-gray-700">2020</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Building2 size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Headquarters:</span>
                      <span className="ml-2 text-gray-700">San Francisco, CA</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Film size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Content Categories:</span>
                      <span className="ml-2 text-gray-700">Sports, Food, Music, Movies, Tech, Travel</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Users size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Monthly Viewers:</span>
                      <span className="ml-2 text-gray-700">15+ Million</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Handshake size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Content Partners:</span>
                      <span className="ml-2 text-gray-700">200+</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Globe size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Global Reach:</span>
                      <span className="ml-2 text-gray-700">180+ Countries</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Library size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Content Library:</span>
                      <span className="ml-2 text-gray-700">50,000+ Videos</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Users size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Team Size:</span>
                      <span className="ml-2 text-gray-700">120+ Employees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values Section */}
            <div className="mb-6">
              <div
                className="bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 transform transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">Our Values</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Star size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Quality:</span>
                      <span className="ml-2 text-gray-700">We never compromise on content quality</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <BadgeCheck size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Authenticity:</span>
                      <span className="ml-2 text-gray-700">We value genuine stories and perspectives</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Lightbulb size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Innovation:</span>
                      <span className="ml-2 text-gray-700">We embrace new technologies and approaches</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Users size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Diversity:</span>
                      <span className="ml-2 text-gray-700">We celebrate diverse voices and viewpoints</span>
                    </div>
                  </div>

                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-200">
                    <Heart size={18} className="text-gray-700 mr-3" />
                    <div>
                      <span className="font-semibold text-gray-800">Community:</span>
                      <span className="ml-2 text-gray-700">We foster meaningful connections</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section with 3D Effect and Oakland Fruitvale Map */}
      <div
        className="relative py-16 overflow-hidden"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Oakland Fruitvale Map Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/oakland-fruitvale-map.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            transform: `translateZ(-50px) translateY(${scrollY * 0.05}px) scale(1.1)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>

        {/* Map Overlay for 3D Effect */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white opacity-40"
          style={{
            transform: `translateZ(-30px)`,
          }}
        ></div>

        {/* Floating Markers - Representing Key Locations */}
        <div className="absolute inset-0 z-0">
          {floatingMarkers.map((marker, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-red-500"
              style={{
                width: marker.width,
                height: marker.height,
                left: marker.left,
                top: marker.top,
                opacity: marker.opacity,
                transform: marker.transform,
                animation: marker.animation,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          {/* Title styled exactly like the "Submit Your Content Now" button */}
          <div className="relative mb-16 mx-auto max-w-3xl">
            <h2
              className="text-4xl font-bold text-center text-black py-6 px-8 rounded-xl bg-gradient-to-r from-restorative-gold to-amber-500 hover:from-amber-500 hover:to-restorative-gold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                transform: `translateZ(20px)`,
              }}
            >
              Our Journey: Key Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line with 3D effect */}
              <div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-2 bg-gradient-to-b from-red-400 to-red-600"
                style={{
                  boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
                  transform: `translateZ(20px)`,
                }}
              ></div>

              {/* Timeline items */}
              <div className="space-y-16">
                {/* 2020 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div
                    className="flex-1 md:text-right md:pr-10 pb-4 md:pb-0"
                    style={{
                      transform: `translateZ(10px) translateX(${scrollY * -0.02}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-end">
                      <Clock className="inline-block mr-2 text-red-500" size={24} />
                      2020
                    </h3>
                    <div className="bg-white bg-opacity-95 p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-gray-700">
                        Restorative Media founded in San Francisco with a team of 15 passionate media professionals
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white z-10"
                    style={{
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                      transform: `translateZ(40px)`,
                    }}
                  ></div>
                  <div className="flex-1 md:pl-10"></div>
                </div>

                {/* 2021 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 order-1 md:order-1 pb-4 md:pb-0"></div>
                  <div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white z-10 order-2"
                    style={{
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                      transform: `translateZ(40px)`,
                    }}
                  ></div>
                  <div
                    className="flex-1 md:pl-10 order-3"
                    style={{
                      transform: `translateZ(10px) translateX(${scrollY * 0.02}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                      <Clock className="inline-block mr-2 text-red-500" size={24} />
                      2021
                    </h3>
                    <div className="bg-white bg-opacity-95 p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-gray-700">
                        Reached 5 million monthly viewers and expanded into international markets
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div
                    className="flex-1 md:text-right md:pr-10 pb-4 md:pb-0"
                    style={{
                      transform: `translateZ(10px) translateX(${scrollY * -0.02}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-end">
                      <Clock className="inline-block mr-2 text-red-500" size={24} />
                      2022
                    </h3>
                    <div className="bg-white bg-opacity-95 p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-gray-700">
                        Launched our mobile app and introduced premium subscription service
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white z-10"
                    style={{
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                      transform: `translateZ(40px)`,
                    }}
                  ></div>
                  <div className="flex-1 md:pl-10"></div>
                </div>

                {/* 2023 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 order-1 md:order-1 pb-4 md:pb-0"></div>
                  <div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white z-10 order-2"
                    style={{
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                      transform: `translateZ(40px)`,
                    }}
                  ></div>
                  <div
                    className="flex-1 md:pl-10 order-3"
                    style={{
                      transform: `translateZ(10px) translateX(${scrollY * 0.02}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                      <Clock className="inline-block mr-2 text-red-500" size={24} />
                      2023
                    </h3>
                    <div className="bg-white bg-opacity-95 p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-gray-700">
                        Surpassed 10 million monthly viewers and established creator partnership program
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div
                    className="flex-1 md:text-right md:pr-10 pb-4 md:pb-0"
                    style={{
                      transform: `translateZ(10px) translateX(${scrollY * -0.02}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-end">
                      <Clock className="inline-block mr-2 text-red-500" size={24} />
                      2024
                    </h3>
                    <div className="bg-white bg-opacity-95 p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-gray-700">
                        Expanded to 15+ million monthly viewers and launched our original content studio
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white z-10"
                    style={{
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                      transform: `translateZ(40px)`,
                    }}
                  ></div>
                  <div className="flex-1 md:pl-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Advertisement below timeline */}
          <div
            className="max-w-4xl mx-auto mt-16"
            style={{
              transform: `translateZ(20px)`,
            }}
          >
            <AdvertisementBox width="100%" height={120} text="GROW WITH US" buttonText="PARTNER NOW" />
          </div>
        </div>

        {/* Add CSS animation for floating markers */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1) translateZ(20px);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.5) translateZ(30px);
              opacity: 0.3;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-15px) translateX(15px);
            }
            50% {
              transform: translateY(0) translateX(30px);
            }
            75% {
              transform: translateY(15px) translateX(15px);
            }
          }
        `}</style>
      </div>

      {/* Team Section with Advertisement */}
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Leadership Team</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Meet the passionate individuals driving Restorative Media's vision and growth. Our leadership team brings
            decades of combined experience in media, technology, and content creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/team-member-1.png" alt="Sarah Johnson, CEO" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                <p className="text-sm text-gray-500">
                  Former VP of Content at Netflix with 15+ years of experience in digital media and entertainment.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/team-member-2.png" alt="Michael Chen, CTO" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">Michael Chen</h3>
                <p className="text-gray-600 mb-2">Chief Technology Officer</p>
                <p className="text-sm text-gray-500">
                  Tech innovator with previous leadership roles at Google and Amazon. Expert in scalable media
                  platforms.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/team-member-3.png" alt="Aisha Patel, Content Director" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">Aisha Patel</h3>
                <p className="text-gray-600 mb-2">Content Director</p>
                <p className="text-sm text-gray-500">
                  Award-winning producer and content strategist with background in documentary filmmaking and digital
                  storytelling.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/team-member-4.png"
                  alt="David Rodriguez, Marketing Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">David Rodriguez</h3>
                <p className="text-gray-600 mb-2">Marketing Director</p>
                <p className="text-sm text-gray-500">
                  Digital marketing pioneer with expertise in audience growth, brand development, and strategic
                  partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Advertisement below team section */}
          <div className="max-w-4xl mx-auto">
            <AdvertisementBox width="100%" height={120} text="JOIN OUR TEAM" buttonText="VIEW CAREERS" />
          </div>
        </div>
      </div>

      {/* Discover the world section */}
      <div className="bg-black py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Discover the world</h2>
            <div className="hidden md:flex space-x-4 text-sm">
              <Link href="#" className="text-white hover:text-red-500 transition">
                ALL
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition">
                MOVIE
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition">
                MUSIC
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition">
                TECH
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition">
                TRAVEL
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition">
                SPORTS
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Video 1 */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative h-56 md:h-64">
                <Image src="/xiaomi-mi6-comparison.jpg" alt="Xiaomi Mi6" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">TECH</span>
              </div>
              <div className="p-4 bg-black bg-opacity-80 absolute bottom-0 left-0 right-0">
                <h3 className="text-white font-bold mb-1">Xiaomi Mi6 hands on: It's as good as the iPhone 7 Plus</h3>
                <p className="text-gray-400 text-xs">SEPTEMBER 5, 2017</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative h-56 md:h-64">
                <Image src="/featured-music-1.jpg" alt="Bayu Cuaca" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MUSIC</span>
              </div>
              <div className="p-4 bg-black bg-opacity-80 absolute bottom-0 left-0 right-0">
                <h3 className="text-white font-bold mb-1">
                  Bayu Cuaca Spins 'Tunangan Langka' Into An Acoustic Fantasy
                </h3>
                <p className="text-gray-400 text-xs">SEPTEMBER 5, 2017</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative h-56 md:h-64">
                <Image src="/chicago-burger.png" alt="Chicago's Best Burger" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">FOOD</span>
              </div>
              <div className="p-4 bg-black bg-opacity-80 absolute bottom-0 left-0 right-0">
                <h3 className="text-white font-bold mb-1">Chicago's Best Burger: Because we all love Krabby Patty</h3>
                <p className="text-gray-400 text-xs">SEPTEMBER 5, 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Video and Watch Now Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* More Video Section - 2/3 width */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">More Video</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video 1 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/last-jedi.png" alt="The Last Jedi" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">Everything we just learned about 'The Last Jedi'</h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/infinity-war.png" alt="Infinity War" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">
                      Marvel unleashes first 'Infinity War' teaser trailer, its surprising
                    </h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/wonder-woman.png" alt="Wonder Woman" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">Here's Wonder Woman just hanging with her Justice League boys</h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Video 4 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/fullmetal-alchemist.png" alt="Fullmetal Alchemist" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">
                      Fullmetal Alchemist Live-Action Movie Releases Its First Full Trailer
                    </h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Video 5 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/anonymous-tapes.png" alt="13 Reasons Why" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">
                      '13 Reasons Why': Christian Navarro talks Tony, Season 2 spoilers
                    </h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Video 6 */}
                <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                  <div className="relative h-56">
                    <Image src="/castle-contemplation.png" alt="Game of Thrones" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">Game of Thrones Season 7: Second Trailer #WinterIsHere</h3>
                    <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => setShowMoreVideos(!showMoreVideos)}
                  className="border border-gray-300 text-gray-600 hover:text-gray-900 px-6 py-2 rounded text-sm font-medium transition-colors"
                >
                  {showMoreVideos ? "SHOW LESS" : "LOAD MORE"}
                </button>
              </div>

              {showMoreVideos && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Additional Videos - Only shown when Load More is clicked */}
                  {/* Video 7 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image src="/agent-327.png" alt="Agent 327" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Agent 327: Operation Barbershop - Blender Animation Short</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>

                  {/* Video 8 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image src="/interstellar.png" alt="Interstellar" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MOVIE</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Interstellar Theory: Cooper Actually Died in Space</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>

                  {/* Video 9 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image src="/street-food.png" alt="Street Food" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">FOOD</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Seminyak Street Food: A Culinary Journey Through Bali</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>

                  {/* Video 10 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image src="/kendrick-lamar-mixtape.png" alt="Kendrick Lamar" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MUSIC</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Kendrick Lamar's New Mixtape: A Deep Dive Analysis</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>

                  {/* Video 11 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image src="/mountain-biking-hero.png" alt="Mountain Biking" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">SPORTS</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Mountain Bike Racing: The Ultimate Guide to Downhill Speed</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>

                  {/* Video 12 */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md mb-6">
                    <div className="relative h-56">
                      <Image
                        src="/professional-recording-studio.png"
                        alt="Recording Studio"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">MUSIC</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">Inside the Modern Recording Studio: How Albums Are Made</h3>
                      <p className="text-gray-500 text-xs">SEPTEMBER 5, 2017</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Watch Now Section - 1/3 width */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Watch Now</h2>
              <div className="space-y-4">
                {/* Watch Item 1 */}
                <div className="flex space-x-4 group">
                  <div className="relative flex-shrink-0 w-24 h-24">
                    <Image src="/celebrity-foodies.png" alt="Celebrity Foodies" className="object-cover rounded" fill />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Celebrity Foodies: See What the Stars Are Snacking on Today</h3>
                    <p className="text-xs text-gray-500 mt-1">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Watch Item 2 */}
                <div className="flex space-x-4 group">
                  <div className="relative flex-shrink-0 w-24 h-24">
                    <Image
                      src="/giant-meatball-spaghetti.png"
                      alt="Giant Meatball"
                      className="object-cover rounded"
                      fill
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Eat the Trend: Giant Meatball Stuffed With Spaghetti</h3>
                    <p className="text-xs text-gray-500 mt-1">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Watch Item 3 */}
                <div className="flex space-x-4 group">
                  <div className="relative flex-shrink-0 w-24 h-24">
                    <Image src="/featured-travel-1.jpg" alt="Barack Obama" className="object-cover rounded" fill />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Barack Obama Returns To Indonesia For Family Vacation</h3>
                    <p className="text-xs text-gray-500 mt-1">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Watch Item 4 */}
                <div className="flex space-x-4 group">
                  <div className="relative flex-shrink-0 w-24 h-24">
                    <Image
                      src="/balinese-street-food.png"
                      alt="Balinese Street Food"
                      className="object-cover rounded"
                      fill
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">
                      These delicious Balinese street foods you need to try right now
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Watch Item 5 */}
                <div className="flex space-x-4 group">
                  <div className="relative flex-shrink-0 w-24 h-24">
                    <Image
                      src="/diverse-young-adults-food-gathering.png"
                      alt="Food Culture"
                      className="object-cover rounded"
                      fill
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Young adults and the evolution of modern food culture</h3>
                    <p className="text-xs text-gray-500 mt-1">SEPTEMBER 5, 2017</p>
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-center font-bold text-lg mb-4">
                    SUBSCRIBE TO GET DAILY NEWS UPDATE DIRECT TO YOUR INBOX!
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email address..."
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
