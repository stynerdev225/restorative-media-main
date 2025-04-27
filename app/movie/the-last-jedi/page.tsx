"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoPlayer } from "@/components/video-player"
import { CommentsSection } from "@/components/comments-section"
import { RecommendedVideos } from "@/components/recommended-videos"
import { RelatedVideos } from "@/components/related-videos"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { Facebook, Twitter, Linkedin, Link2, MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TheLastJediPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <style jsx global>{`
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  .rotate-y-[-5deg] {
    transform: rotateY(-5deg);
  }
  .rotate-y-0 {
    transform: rotateY(0deg);
  }
  .translate-z-12 {
    transform: translateZ(12px);
  }
`}</style>
        {/* Hero Section */}
        <div className="w-full bg-black">
          <div className="container mx-auto px-4 py-8">
            <VideoPlayer
              title="Everything we just learned about 'The Last Jedi'"
              category="MOVIE"
              categoryColor="bg-red-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Breadcrumbs */}
              <div className="flex items-center text-xs text-gray-500 mb-6">
                <Link href="/" className="hover:text-restorative-gold transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/movie" className="hover:text-restorative-gold transition-colors">
                  Movie
                </Link>
                <span className="mx-2">/</span>
                <span className="text-restorative-gold">The Last Jedi</span>
              </div>

              {/* Article Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-500 px-2 py-1 text-xs font-bold text-white uppercase">MOVIE</span>
                  <span className="text-xs text-gray-500">SEPTEMBER 5, 2017</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything we just learned about 'The Last Jedi'
                </h1>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/author-thomas.jpg" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Mark Hamill</p>
                  <p className="text-sm text-gray-500">
                    Film Critic and Star Wars expert with over 15 years of experience covering the franchise
                  </p>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="flex items-center gap-2 mb-8">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Facebook className="h-4 w-4 mr-2" />
                  <span className="text-xs">Share</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Twitter className="h-4 w-4 mr-2" />
                  <span className="text-xs">Tweet</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span className="text-xs">Share</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Link2 className="h-4 w-4 mr-2" />
                  <span className="text-xs">Copy Link</span>
                </Button>
              </div>

              {/* Main Content */}
              <div className="prose max-w-none mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  Director Rian Johnson has finally pulled back the curtain on the highly anticipated next chapter in
                  the Star Wars saga. In a series of exclusive interviews and behind-the-scenes footage, we've gathered
                  everything you need to know about 'The Last Jedi' before its December release.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Luke Skywalker's Journey</h2>
                <p className="mb-6">
                  Mark Hamill returns as the legendary Jedi Master, but this isn't the Luke Skywalker you remember.
                  After going into self-imposed exile, Luke has become disillusioned with the Jedi Order and its legacy.
                  "Luke has lost faith in the Jedi way," Johnson explains. "He's seen too much failure and believes the
                  galaxy might be better off without the Jedi."
                </p>

                <div className="my-8 relative aspect-video">
                  <Image
                    src="/last-jedi-comparison.png"
                    alt="Luke Skywalker in The Last Jedi"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                    Luke Skywalker on Ahch-To
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Rey's Training and Heritage</h2>
                <p className="mb-6">
                  Daisy Ridley's Rey will begin her Jedi training under Luke's reluctant guidance. "Rey arrives with
                  this expectation that Luke is going to be this legendary Jedi Master, but what she finds is a broken
                  man," Ridley shares. The film will also address the mystery of Rey's parentage, a question that has
                  spawned countless fan theories since 'The Force Awakens.'
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Kylo Ren's Evolution</h2>
                <p className="mb-6">
                  After killing his father Han Solo, Adam Driver's Kylo Ren is struggling with the consequences of his
                  actions. "There's a conflict in him that's even deeper now," Johnson reveals. "He's not fully
                  committed to the dark side yet." The film will explore the complex relationship between Kylo and Rey,
                  which some have speculated might have a Force connection.
                </p>

                <div className="my-12 perspective-1000">
                  <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-style-3d rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-restorative-gold rounded-full flex items-center justify-center shadow-lg transform translate-z-12">
                      <span className="text-white font-bold text-xl">!</span>
                    </div>

                    {/* Background Image - More Visible Now */}
                    <div
                      className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat opacity-40 rounded-xl"
                      style={{ backgroundImage: "url('/last-jedi.png')" }}
                    ></div>

                    {/* Content with relative positioning to appear above the background */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Key Revelations About 'The Last Jedi'
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "The film will reveal why Luke went into exile on Ahch-To",
                          "The mysterious Knights of Ren will finally make an appearance",
                          "Carrie Fisher's General Leia has a significant role in the film (her final performance)",
                          "New planets include Canto Bight, a casino world for the galaxy's elite",
                          "The porgs, native creatures of Ahch-To, will provide comic relief",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 p-3 border-b border-gray-100 last:border-0 bg-white/80 rounded-lg"
                          >
                            <div className="min-w-6 h-6 rounded-full bg-restorative-gold/10 flex items-center justify-center">
                              <span className="text-restorative-gold font-bold">{index + 1}</span>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">New Characters</h2>
                <p className="mb-6">
                  'The Last Jedi' introduces several new characters to the Star Wars universe. Laura Dern plays Vice
                  Admiral Holdo, a Resistance officer who clashes with Poe Dameron. Benicio Del Toro portrays a
                  mysterious character known only as "DJ," who may not be trustworthy. Kelly Marie Tran joins the cast
                  as Rose Tico, a Resistance maintenance worker who teams up with Finn on a secret mission.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Future of the Force</h2>
                <p className="mb-6">
                  Perhaps most intriguingly, Johnson hints that 'The Last Jedi' will challenge our understanding of the
                  Force itself. "We're going to expand what we know about the Force," he teases. "There are aspects of
                  it that go beyond light and dark." This suggests the film may explore the more mystical elements of
                  Star Wars lore, potentially drawing from concepts introduced in the animated series and expanded
                  universe.
                </p>
              </div>

              {/* Comparison Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">Then vs Now: The Evolution of Luke Skywalker</h3>
                <div className="relative aspect-[21/9] mb-6">
                  <Image
                    src="/last-jedi-evolution.png"
                    alt="Luke Skywalker Evolution"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700">
                  From the hopeful farm boy on Tatooine to the jaded Jedi Master on Ahch-To, Luke Skywalker's character
                  has undergone one of the most dramatic transformations in the Star Wars saga. Mark Hamill himself has
                  admitted he was initially shocked by the direction Rian Johnson took with the character, but
                  ultimately came to appreciate the bold storytelling choices.
                </p>
              </div>

              {/* Article Footer */}
              <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 mb-8">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-restorative-gold transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-restorative-gold transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                </div>
                <button className="flex items-center gap-1 text-gray-500 hover:text-restorative-gold transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Related Videos */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">Related Videos</h3>
                <RelatedVideos />
              </div>

              {/* Comments Section */}
              <CommentsSection />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Advertisement */}
              <div className="mb-8">
                <div className="relative w-full h-[250px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-sm">Smart & Responsive</div>
                    <div className="text-xl font-bold">ADVERTISEMENT</div>
                    <div className="mt-2">300×250</div>
                  </div>
                </div>
              </div>

              {/* Recommended Videos */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Recommended</h3>
                <RecommendedVideos />
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Star Wars
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    The Last Jedi
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Luke Skywalker
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Rey
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Kylo Ren
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Rian Johnson
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Disney
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-restorative-gold hover:text-white transition-colors"
                  >
                    Lucasfilm
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Get the latest news and updates on your favorite movies and TV shows.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-restorative-gold/20 focus:border-restorative-gold"
                  />
                  <Button className="bg-restorative-gold hover:bg-restorative-gold/90">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advertisement Banner */}
        <AdvertisementBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
