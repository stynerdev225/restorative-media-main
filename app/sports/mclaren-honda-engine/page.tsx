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

export default function McLarenHondaArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="mclaren-honda-engine"
              thumbnailUrl="/speed-demon.png"
              title="McLaren Drivers Get Honda's Spec 3 Engine For Austria"
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
                  McLaren Drivers Get Honda's Spec 3 Engine For Austria
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
                    <span className="text-sm">2.3k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">78</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">4 min read</span>
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
                  In a significant development for the struggling McLaren-Honda Formula 1 team, both Fernando Alonso and
                  Stoffel Vandoorne will receive Honda's upgraded 'Spec 3' power unit for this weekend's Austrian Grand
                  Prix. This update comes at a critical time for the partnership, which has been under immense pressure
                  due to poor performance and reliability issues.
                </p>

                <h2>The Spec 3 Engine: What's New?</h2>
                <p>
                  Honda's new Spec 3 power unit features significant revisions to both the internal combustion engine
                  (ICE) and the energy recovery systems (ERS). The Japanese manufacturer claims the update will deliver
                  improved reliability and a power increase of approximately 25-30 horsepower, which could translate to
                  around 0.5 seconds per lap at the Red Bull Ring.
                </p>

                <p>
                  Key improvements in the Spec 3 unit include a redesigned combustion chamber, modified valve timing,
                  and a more efficient turbocharger. Honda engineers have also addressed the persistent MGU-H (Motor
                  Generator Unit-Heat) issues that have plagued the power unit throughout the season, with a more robust
                  design that should improve reliability.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏎️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Honda Power Unit Evolution</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Spec 1 (Season Start): ~900 HP, significant reliability issues with MGU-H failures",
                        "Spec 2 (Spain GP): ~920 HP, improved reliability but still behind competitors",
                        "Spec 3 (Austria GP): ~950 HP, redesigned combustion chamber and improved MGU-H",
                        "Projected Spec 4 (Later in season): Targeting 980+ HP with further combustion improvements",
                        "Mercedes 2017 benchmark: ~1000 HP with superior reliability and deployment",
                        "Ferrari 2017 benchmark: ~980 HP with excellent driveability characteristics",
                      ].map((spec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>McLaren-Honda: A Partnership Under Pressure</h2>
                <p>
                  The McLaren-Honda partnership, which was rekindled in 2015 with hopes of recreating the dominance of
                  their late 1980s and early 1990s collaboration, has been fraught with difficulties. Despite having
                  two-time world champion Fernando Alonso and promising rookie Stoffel Vandoorne behind the wheel, the
                  team has struggled to score points consistently.
                </p>

                <p>
                  McLaren's frustration has been palpable, with racing director Eric Boullier and executive director Zak
                  Brown both publicly expressing concerns about Honda's ability to deliver a competitive power unit.
                  Rumors of a potential split have been circulating in the paddock, with McLaren reportedly exploring
                  alternative engine options for 2018.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/mclaren-honda-comparison.jpg"
                        alt="McLaren-Honda performance comparison across seasons"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          PERFORMANCE ANALYSIS
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        McLaren-Honda performance comparison: 2015-2017 seasons showing qualifying positions, race
                        finishes, and reliability statistics
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Alonso's Patience Wearing Thin</h2>
                <p>
                  Fernando Alonso, widely regarded as one of the most talented drivers on the grid, has been
                  increasingly vocal about his frustration with the situation. The Spanish driver, whose contract with
                  McLaren expires at the end of 2017, has made it clear that his future with the team depends on their
                  ability to provide him with a competitive car.
                </p>

                <p>
                  "We need to see some real progress," Alonso told reporters ahead of the Austrian Grand Prix. "The Spec
                  3 engine is a step in the right direction, but we need to see if it delivers on track. I want to be
                  fighting for podiums and wins, not just points."
                </p>

                <h2>The Red Bull Ring Challenge</h2>
                <p>
                  The timing of the engine upgrade is particularly significant given the characteristics of the Red Bull
                  Ring. The Austrian circuit features long straights and high-speed corners that put a premium on power
                  unit performance. With three DRS zones for this year's race, the power deficit that McLaren-Honda has
                  been suffering could be particularly exposed.
                </p>

                <p>
                  However, the track's elevation changes and relatively short lap length (just 4.318 km) could also
                  provide opportunities for McLaren's chassis, which is widely considered to be one of the best on the
                  grid, to shine through in the more technical sections.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">McLaren-Honda 2017 Season Stats</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Points: 12 (9th in Constructor's Championship)",
                        "Best Qualifying Position: 7th (Alonso, Spain)",
                        "Best Race Result: 6th (Alonso, Hungary)",
                        "DNFs due to Engine Issues: 7",
                        "Grid Penalties for Engine Components: 95 positions total",
                        "Estimated Power Deficit to Mercedes: ~80 HP (pre-Spec 3)",
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

                <h2>Looking Ahead: What This Means for McLaren-Honda</h2>
                <p>
                  The introduction of the Spec 3 engine represents a critical juncture for the McLaren-Honda
                  partnership. If the upgrade delivers the promised improvements in both performance and reliability, it
                  could help rebuild confidence in Honda's ability to eventually produce a competitive power unit.
                </p>

                <p>
                  However, if the new specification fails to deliver or introduces new reliability problems, it could
                  accelerate discussions about a potential split. McLaren is believed to have set an internal deadline
                  of September to make a final decision on its 2018 engine supplier, with Mercedes and Renault both
                  mentioned as potential alternatives.
                </p>

                <h2>The Bigger Picture: F1's Engine Formula</h2>
                <p>
                  The struggles of Honda highlight the challenges of Formula 1's current power unit regulations, which
                  were introduced in 2014. The complex hybrid systems, combining a 1.6-liter V6 turbo engine with energy
                  recovery systems, have proven difficult to master for manufacturers outside of Mercedes, who have
                  dominated the formula.
                </p>

                <p>
                  With discussions ongoing about simplifying the engine formula for 2021 and beyond, Honda's experience
                  serves as a cautionary tale about the barriers to entry and competitiveness in the current regulatory
                  environment. For now, though, all eyes will be on the Red Bull Ring this weekend to see if the Spec 3
                  engine can begin to turn the tide for McLaren-Honda.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/formula-1" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  formula 1
                </Link>
                <Link href="/tag/mclaren" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mclaren
                </Link>
                <Link href="/tag/honda" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  honda
                </Link>
                <Link href="/tag/fernando-alonso" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  fernando alonso
                </Link>
                <Link href="/tag/f1-engines" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  f1 engines
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
                        Margaery is a motorsport journalist specializing in Formula 1 technical analysis. With a
                        background in mechanical engineering, she brings unique insights into the complex world of F1
                        power units and aerodynamics.
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
                      href="/tag/formula-1"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      formula 1
                    </Link>
                    <Link
                      href="/tag/f1"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      f1
                    </Link>
                    <Link
                      href="/tag/motorsport"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      motorsport
                    </Link>
                    <Link
                      href="/tag/mclaren"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mclaren
                    </Link>
                    <Link
                      href="/tag/honda"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      honda
                    </Link>
                    <Link
                      href="/tag/fernando-alonso"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fernando alonso
                    </Link>
                    <Link
                      href="/tag/f1-technology"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      f1 technology
                    </Link>
                    <Link
                      href="/tag/austrian-gp"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      austrian gp
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest Formula 1 news and exclusive content delivered to your inbox
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
