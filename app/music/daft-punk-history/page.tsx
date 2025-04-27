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

export default function DaftPunkArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="daft-punk-history"
              thumbnailUrl="/professional-recording-studio.png"
              title="The Complete History Of Daft Punk Told Through A Creative Infographic"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">MUSIC</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  The Complete History Of Daft Punk Told Through A Creative Infographic
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
                    <span className="text-sm">2.7k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">89</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">5 min read</span>
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
                  Few electronic music acts have had as profound an impact on the industry as Daft Punk. The French duo,
                  consisting of Thomas Bangalter and Guy-Manuel de Homem-Christo, revolutionized dance music over their
                  nearly three-decade career. This creative infographic takes you through their remarkable journey from
                  Parisian teenagers to global music icons.
                </p>

                <h2>The Early Years: From Darlin' to Daft Punk</h2>
                <p>
                  Before they were Daft Punk, Thomas Bangalter and Guy-Manuel de Homem-Christo were part of a rock trio
                  called Darlin' with Laurent Brancowitz (who later joined Phoenix). A negative review in UK music
                  magazine Melody Maker described their music as "a daft punky thrash" – inadvertently giving birth to
                  one of the most iconic names in electronic music.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎵</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Daft Punk Timeline</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "1993: Formation of Daft Punk after the dissolution of Darlin'",
                        "1995: Signing with Virgin Records after early singles gained underground attention",
                        "1997: Release of debut album 'Homework' featuring hits 'Around the World' and 'Da Funk'",
                        "2001: 'Discovery' album release with iconic singles 'One More Time' and 'Harder, Better, Faster, Stronger'",
                        "2005: 'Human After All' album released, initially receiving mixed reviews",
                        "2007: Groundbreaking 'Alive 2007' tour with the iconic pyramid stage",
                        "2013: 'Random Access Memories' album featuring the global hit 'Get Lucky'",
                        "2021: Announcement of the duo's split after 28 years",
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

                <h2>The Homework Era: Underground Beginnings</h2>
                <p>
                  Daft Punk's debut album 'Homework' (1997) was recorded in Bangalter's bedroom and became an unexpected
                  commercial success. The album's raw, sample-heavy house music, combined with innovative music videos
                  directed by Spike Jonze and Michel Gondry, established Daft Punk as pioneers in the French house
                  scene. Singles like "Around the World" and "Da Funk" became instant club classics.
                </p>

                <p>
                  It was during this era that the duo began cultivating their mysterious image, rarely appearing in
                  public without disguises and eventually adopting their iconic robot helmets.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/daft-punk-evolution.jpg"
                        alt="The evolution of Daft Punk's helmets and aesthetic"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          EVOLUTION
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        The evolution of Daft Punk's iconic robot helmets from 1999 to 2013, showing their progression
                        from simple designs to sophisticated, custom-built technology
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Discovery: The Robot Persona Takes Shape</h2>
                <p>
                  With their second album 'Discovery' (2001), Daft Punk fully embraced their robot personas, claiming
                  they had been injured in a studio accident and transformed into robots. This album marked a
                  significant shift in their sound, incorporating elements of disco, pop, and R&B with electronic music.
                </p>

                <p>
                  'Discovery' spawned hits like "One More Time," "Digital Love," and "Harder, Better, Faster, Stronger"
                  (later sampled by Kanye West). The album was also accompanied by "Interstella 5555," an anime film
                  created in collaboration with Japanese animator Leiji Matsumoto, which told a visual story across all
                  of the album's tracks.
                </p>

                <h2>Human After All and the Pyramid</h2>
                <p>
                  Their third album, 'Human After All' (2005), was recorded in just six weeks and initially received
                  mixed reviews for its repetitive, harsher sound. However, it was the subsequent 'Alive 2007' tour that
                  cemented Daft Punk's legendary status in electronic music.
                </p>

                <p>
                  Performing inside a giant illuminated pyramid, Daft Punk created one of the most influential live
                  electronic shows ever, seamlessly mixing tracks from all three of their albums. The Coachella 2006
                  performance in particular is often credited with helping to catalyze the EDM boom in the United
                  States.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Daft Punk By The Numbers</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "4 studio albums released over their 28-year career",
                        "13 Grammy nominations with 6 wins, including Album of the Year for 'Random Access Memories'",
                        "'Get Lucky' reached #1 in over 30 countries worldwide",
                        "Over 12 million albums sold globally",
                        "'Random Access Memories' featured collaborations with 27 different musicians",
                        "The 'Alive 2007' tour visited 48 cities across the globe",
                      ].map((stat, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Random Access Memories: A Return to Live Instrumentation</h2>
                <p>
                  After scoring the soundtrack for 'TRON: Legacy' (2010), Daft Punk released their final studio album,
                  'Random Access Memories' (2013). Moving away from samples, they embraced live instrumentation and
                  collaborated with artists like Pharrell Williams, Nile Rodgers, and Giorgio Moroder.
                </p>

                <p>
                  The lead single "Get Lucky" became a global phenomenon, topping charts in over 30 countries. The album
                  won five Grammy Awards, including Album of the Year and Record of the Year. Its meticulous production
                  and fusion of electronic music with disco, funk, and rock showcased Daft Punk's evolution as artists.
                </p>

                <h2>Legacy and Influence</h2>
                <p>
                  On February 22, 2021, Daft Punk announced their split through an 8-minute video titled "Epilogue." The
                  duo's influence extends far beyond their music. They revolutionized live electronic performances,
                  pioneered the fusion of visual storytelling with music, and maintained complete creative control
                  throughout their career while preserving their personal privacy.
                </p>

                <p>
                  Their impact can be heard in countless artists across genres, from EDM producers to pop stars. Their
                  innovative approach to marketing, merchandising, and visual identity set new standards for artist
                  branding. Most importantly, they consistently pushed the boundaries of what electronic music could be,
                  never settling into a comfortable formula.
                </p>

                <p>
                  As our infographic shows, Daft Punk's journey from Parisian teenagers to robot-helmeted icons
                  represents one of the most fascinating evolutions in modern music history. Though they may have
                  powered down, their influence will continue to reverberate through music for generations to come.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/daft-punk" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  daft punk
                </Link>
                <Link href="/tag/electronic-music" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  electronic music
                </Link>
                <Link href="/tag/french-house" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  french house
                </Link>
                <Link href="/tag/music-history" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  music history
                </Link>
                <Link href="/tag/infographic" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  infographic
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
                        Margaery is a music journalist with a passion for electronic music history and visual
                        storytelling. She specializes in creating engaging infographics that make music history
                        accessible and entertaining for readers of all backgrounds.
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
                      href="/tag/electronic-music"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      electronic music
                    </Link>
                    <Link
                      href="/tag/daft-punk"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      daft punk
                    </Link>
                    <Link
                      href="/tag/music-production"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      music production
                    </Link>
                    <Link
                      href="/tag/edm"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      edm
                    </Link>
                    <Link
                      href="/tag/house-music"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      house music
                    </Link>
                    <Link
                      href="/tag/french-touch"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      french touch
                    </Link>
                    <Link
                      href="/tag/music-history"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      music history
                    </Link>
                    <Link
                      href="/tag/grammy-winners"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      grammy winners
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest music news and exclusive content delivered to your inbox
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
