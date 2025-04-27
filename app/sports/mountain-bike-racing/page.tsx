import Image from "next/image"
import Link from "next/link"
import { Clock, ThumbsUp, MessageSquare, Share2, Facebook, Twitter, Mail, Bookmark, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { RecommendedVideos } from "@/components/recommended-videos"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"

export default function MountainBikeRacingArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="mountain-bike-racing"
              thumbnailUrl="/sunset-mountain-bike-race.png"
              title="Aggressive Downhill, Cross Country & All Mountain Bike Racing"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">SPORTS</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Aggressive Downhill, Cross Country & All Mountain Bike Racing
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-margaery.jpg"
                    alt="Margaery Tyrell"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/margaery-tyrell" className="font-medium hover:text-restorative-gold">
                        Margaery Tyrell
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">September 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">1.5k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">42</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">6 min read</span>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">SHARE:</span>
                    <button className="bg-[#3b5998] text-white p-2 rounded">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="bg-[#1da1f2] text-white p-2 rounded">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="bg-gray-200 text-gray-700 p-2 rounded">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  Mountain biking has evolved from a niche hobby into a diverse sport with multiple disciplines, each
                  offering its own unique challenges and thrills. From the adrenaline-pumping descents of downhill
                  racing to the endurance-testing cross-country events, mountain biking continues to push the boundaries
                  of what's possible on two wheels.
                </p>

                <h2>Downhill Racing: The Gravity-Fueled Adrenaline Rush</h2>
                <p>
                  Downhill mountain biking (DH) is perhaps the most visually spectacular discipline in the sport. Riders
                  navigate steep, technical descents at speeds that can exceed 50 mph, negotiating rock gardens, drops,
                  jumps, and berms along the way. The bikes are specially designed with 200mm+ of suspension travel,
                  robust frames, and powerful disc brakes to handle the extreme terrain.
                </p>

                <p>
                  The UCI Downhill World Cup series represents the pinnacle of the sport, with events held at iconic
                  venues like Fort William in Scotland, Mont-Sainte-Anne in Canada, and Val di Sole in Italy. Athletes
                  like Rachel Atherton, Aaron Gwin, and Loic Bruni have dominated the circuit in recent years, pushing
                  the limits of what's possible on a downhill track.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🚵</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Mountain Bike Disciplines</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Downhill (DH): Timed runs down steep, technical tracks with jumps, drops, and obstacles",
                        "Cross-Country (XC): Endurance-focused racing on varied terrain, emphasizing climbing and descending skills",
                        "Enduro: Multi-stage events combining downhill sections with untimed climbs between stages",
                        "Freeride: Creative expression on natural terrain and man-made features, focusing on style and amplitude",
                        "Dirt Jump: Technical jumping and aerial tricks on purpose-built dirt jumps",
                        "Slopestyle: Combination of big-air jumps, technical trail features, and freestyle elements",
                      ].map((discipline, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{discipline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Cross-Country: The Test of Endurance and Skill</h2>
                <p>
                  Cross-country (XC) racing is the most traditional form of mountain bike competition and the only
                  discipline currently featured in the Olympic Games. XC courses typically include a mix of climbs,
                  descents, and technical features, testing riders' all-around abilities and endurance.
                </p>

                <p>
                  Modern XC racing has evolved significantly, with courses becoming increasingly technical. Today's XC
                  bikes strike a balance between lightweight efficiency for climbing and capable handling for the
                  descents, typically featuring 100-120mm of suspension travel and progressive geometry.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/mtb-comparison.jpg"
                        alt="Different types of mountain bikes for various disciplines"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          BIKE COMPARISON
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        From left to right: Downhill bike with 200mm travel, Enduro bike with 160mm travel,
                        Trail/All-Mountain bike with 140mm travel, and Cross-Country bike with 100mm travel
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Enduro: The Best of Both Worlds</h2>
                <p>
                  Enduro racing has exploded in popularity over the past decade, offering a format that many consider
                  the closest to how "regular" mountain bikers actually ride. Competitors are timed only on the downhill
                  sections (stages), while the climbs between stages are untimed but must be completed within an overall
                  time limit.
                </p>

                <p>
                  The Enduro World Series (EWS) has become the premier competition for this discipline, featuring
                  multi-day events in diverse locations around the globe. Enduro bikes typically feature 150-170mm of
                  suspension travel, striking a balance that allows them to descend aggressively while still being
                  efficient enough to pedal uphill.
                </p>

                <h2>All-Mountain: The Versatile Middle Ground</h2>
                <p>
                  All-mountain riding isn't a specific racing discipline but rather a style of riding that emphasizes
                  versatility. All-mountain bikes (often called "trail bikes") are designed to handle a wide variety of
                  terrain reasonably well, making them ideal for riders who want to tackle everything from technical
                  climbs to challenging descents without specializing in any one area.
                </p>

                <p>
                  With typically 130-150mm of suspension travel, all-mountain bikes represent the largest segment of the
                  mountain bike market. They're the Swiss Army knives of the mountain bike world, capable of handling
                  most trails while still being enjoyable to pedal for extended periods.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Notable Mountain Bike Events</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "UCI Mountain Bike World Cup: Premier global series for Downhill and Cross-Country",
                        "Enduro World Series (EWS): The highest level of enduro racing with events worldwide",
                        "Cape Epic: Prestigious multi-day stage race in South Africa",
                        "Crankworx: Festival series featuring multiple disciplines including Slopestyle and Downhill",
                        "Red Bull Rampage: Invitation-only freeride competition on the extreme terrain of Virgin, Utah",
                        "BC Bike Race: Seven-day stage race through British Columbia's legendary singletrack",
                      ].map((event, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>The Evolution of Mountain Bike Technology</h2>
                <p>
                  The rapid advancement of mountain bike technology has been a key driver in the sport's evolution.
                  Modern mountain bikes bear little resemblance to their rigid ancestors from the 1980s. Carbon fiber
                  frames, sophisticated suspension systems, dropper posts, tubeless tires, and 1x drivetrains have all
                  contributed to bikes that are more capable, reliable, and fun to ride than ever before.
                </p>

                <p>
                  Geometry has also evolved significantly, with longer reaches, slacker head angles, and steeper seat
                  tube angles becoming the norm across all disciplines. These changes have resulted in bikes that are
                  more stable at speed and more capable on technical terrain while still maintaining climbing
                  efficiency.
                </p>

                <h2>The Future of Mountain Biking</h2>
                <p>
                  As mountain biking continues to grow in popularity, we're seeing increased investment in trail
                  networks, bike parks, and racing infrastructure around the world. The inclusion of new disciplines
                  like E-MTB racing (for electric-assist mountain bikes) suggests that the sport will continue to
                  diversify and evolve.
                </p>

                <p>
                  The rise of social media has also transformed how mountain biking is consumed and promoted, with
                  athletes and brands able to share content directly with fans. This has led to increased visibility for
                  the sport and has helped create a new generation of mountain bike stars who are known as much for
                  their video parts as their race results.
                </p>

                <p>
                  Whether you're drawn to the raw speed of downhill, the endurance challenge of cross-country, or the
                  versatility of all-mountain riding, there's never been a better time to experience the thrill of
                  mountain biking. As bike technology continues to improve and trail access expands, the sport's future
                  looks brighter than ever.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/mountain-biking" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mountain biking
                </Link>
                <Link href="/tag/downhill" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  downhill
                </Link>
                <Link href="/tag/cross-country" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  cross-country
                </Link>
                <Link href="/tag/enduro" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  enduro
                </Link>
                <Link href="/tag/mtb" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mtb
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-margaery.jpg"
                        alt="Margaery Tyrell"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Margaery Tyrell</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Margaery is a sports journalist with a passion for outdoor adventure and action sports. When
                        she's not writing, she can be found exploring mountain bike trails around the world and
                        competing in amateur enduro events.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/margaery-tyrell"
                          className="text-restorative-gold hover:text-restorative-gold/80 hover:underline text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          <span>View all posts</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <CommentsSection />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-20">
                {/* Save Button */}
                <div className="mb-6 flex justify-end">
                  <button className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    <Bookmark className="h-4 w-4" />
                    <span className="text-sm font-medium">Save</span>
                  </button>
                </div>

                {/* Advertisement */}
                <div className="mb-8">
                  <div className="text-xs text-gray-500 uppercase mb-2">Advertisement</div>
                  <div className="relative w-full h-[90px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-white">
                      <div className="text-sm">Smart & Responsive</div>
                      <div className="text-xl font-bold">ADVERTISEMENT</div>
                    </div>
                    <div className="text-white text-2xl font-bold">728×90</div>
                  </div>
                </div>

                {/* Recommended Videos */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Recommended</h3>
                  <RecommendedVideos />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/mountain-biking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mountain biking
                    </Link>
                    <Link
                      href="/tag/cycling"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cycling
                    </Link>
                    <Link
                      href="/tag/extreme-sports"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      extreme sports
                    </Link>
                    <Link
                      href="/tag/downhill"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      downhill
                    </Link>
                    <Link
                      href="/tag/enduro"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      enduro
                    </Link>
                    <Link
                      href="/tag/cross-country"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cross-country
                    </Link>
                    <Link
                      href="/tag/mtb-gear"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mtb gear
                    </Link>
                    <Link
                      href="/tag/trail-riding"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      trail riding
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest sports news and exclusive content delivered to your inbox
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
                    />
                    <button
                      type="submit"
                      className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-white py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-restorative-gold/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Subscribe
                    </button>
                  </form>
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
