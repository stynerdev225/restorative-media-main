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

export default function SustainableTechnologyArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="sustainable-technology"
              thumbnailUrl="/sustainable-tech-hero.jpg"
              title="Sustainable Technology: Innovations for a Greener Future"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">TECH</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Sustainable Technology: Innovations for a Greener Future
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-thomas.jpg"
                    alt="Thomas Green"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/thomas-green" className="font-medium hover:text-restorative-gold">
                        Thomas Green
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">September 2, 2017</div>
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
                  As climate change concerns mount and natural resources dwindle, the tech industry is pivoting toward
                  sustainable solutions that promise to revolutionize how we live, work, and interact with our planet.
                  From renewable energy innovations to circular economy technologies, these advancements are paving the
                  way for a greener, more sustainable future.
                </p>

                <h2>The Rise of Clean Energy Tech</h2>
                <p>
                  The renewable energy sector has seen remarkable growth in recent years, with innovations making solar,
                  wind, and hydroelectric power more efficient and accessible than ever before. Next-generation solar
                  panels now incorporate perovskite cells that can achieve conversion efficiencies of over 25%, a
                  significant improvement over traditional silicon-based panels.
                </p>
                <p>
                  Meanwhile, offshore wind farms are being revolutionized by floating turbine technology, allowing clean
                  energy generation in deeper waters where winds are stronger and more consistent. These floating
                  platforms can be deployed in areas previously inaccessible to fixed-foundation turbines, dramatically
                  expanding potential wind energy capacity.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">💡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Clean Energy Breakthroughs</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Perovskite solar cells achieving 25%+ efficiency",
                        "Floating offshore wind turbines for deeper water deployment",
                        "Advanced grid-scale battery storage solutions",
                        "Hydrogen fuel cells with improved catalysts",
                      ].map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Smart Grid Technologies</h2>
                <p>
                  The traditional power grid is undergoing a transformation into a smart, responsive network capable of
                  integrating renewable energy sources and optimizing energy distribution. Advanced sensors, machine
                  learning algorithms, and IoT devices are enabling real-time monitoring and management of energy flow,
                  reducing waste and improving reliability.
                </p>
                <p>
                  Grid-scale energy storage solutions are also advancing rapidly, with new battery technologies offering
                  higher capacity, longer lifespans, and faster charging capabilities. These storage systems are crucial
                  for balancing supply and demand in renewable energy networks, storing excess energy during peak
                  production periods for use when production is low.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/sustainable-tech-comparison.jpg"
                        alt="Different sustainable technology solutions compared"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          COMPARISON
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Comparison of traditional vs. sustainable technology solutions across key metrics
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Circular Economy and Waste Reduction</h2>
                <p>
                  The concept of a circular economy—where products are designed for durability, reusability, and
                  recyclability—is gaining traction in the tech industry. Companies are developing innovative materials
                  that can be easily recycled or biodegraded, reducing the environmental impact of electronic waste.
                </p>
                <p>
                  Modular design approaches are making electronics more repairable and upgradable, extending product
                  lifespans and reducing waste. Some manufacturers now offer take-back programs and incentives for
                  returning old devices, ensuring proper recycling and recovery of valuable materials.
                </p>

                <h2>Sustainable Transportation</h2>
                <p>
                  The transportation sector is undergoing a green revolution with the rise of electric vehicles (EVs)
                  and alternative fuel technologies. Advances in battery technology are increasing EV range and reducing
                  charging times, while the expansion of charging infrastructure is making electric mobility more
                  practical for everyday use.
                </p>
                <p>
                  Beyond personal vehicles, sustainable transportation innovations include electric buses and trucks,
                  hydrogen fuel cell vehicles, and even electric aircraft for short-haul flights. Smart traffic
                  management systems and autonomous vehicle technologies promise to further reduce emissions by
                  optimizing routes and reducing congestion.
                </p>

                <h2>Green Building Technologies</h2>
                <p>
                  Buildings account for a significant portion of global energy consumption and carbon emissions.
                  Sustainable building technologies are addressing this challenge through energy-efficient designs,
                  smart building management systems, and renewable energy integration.
                </p>
                <p>
                  Advanced materials like transparent solar cells can be integrated into windows, generating electricity
                  while allowing natural light to enter. Smart thermostats and lighting systems adjust automatically
                  based on occupancy and natural light levels, minimizing energy waste. Green roofs and walls improve
                  insulation while supporting biodiversity in urban environments.
                </p>

                <h2>Water Conservation Technologies</h2>
                <p>
                  As water scarcity becomes a growing concern in many regions, technologies for water conservation and
                  purification are increasingly important. Smart irrigation systems use soil moisture sensors and
                  weather data to optimize watering schedules, reducing water usage in agriculture and landscaping.
                </p>
                <p>
                  Advanced filtration and desalination technologies are making it possible to safely reuse wastewater
                  and convert seawater into freshwater with greater energy efficiency. Atmospheric water generators can
                  even extract moisture from the air in arid regions, providing a new source of clean water.
                </p>

                <h2>The Future of Sustainable Tech</h2>
                <p>
                  Looking ahead, emerging technologies like artificial intelligence and blockchain have the potential to
                  further advance sustainability efforts. AI can optimize energy usage across complex systems, predict
                  maintenance needs to extend equipment lifespans, and accelerate the discovery of new sustainable
                  materials.
                </p>
                <p>
                  Blockchain technology is being applied to create transparent supply chains that verify the
                  sustainability of materials and manufacturing processes. It's also enabling peer-to-peer energy
                  trading in microgrids, allowing consumers with solar panels to sell excess energy directly to
                  neighbors.
                </p>

                <h2>Conclusion</h2>
                <p>
                  The transition to sustainable technology is not just an environmental imperative but also an economic
                  opportunity. As these innovations scale up and costs come down, they're becoming increasingly
                  competitive with traditional alternatives. By embracing these technologies, we can build a future that
                  meets our needs while preserving the planet for generations to come.
                </p>
                <p>
                  The path to a sustainable future will require continued innovation, investment, and collaboration
                  across industries and borders. But with the remarkable progress we're already seeing in sustainable
                  technology, there's reason for optimism that we can create a greener, more resilient world.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/sustainable-tech" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  sustainable tech
                </Link>
                <Link href="/tag/green-energy" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  green energy
                </Link>
                <Link href="/tag/innovation" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  innovation
                </Link>
                <Link href="/tag/circular-economy" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  circular economy
                </Link>
                <Link href="/tag/smart-grid" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  smart grid
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-thomas.jpg"
                        alt="Thomas Green"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Thomas Green</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Thomas is a technology journalist specializing in sustainable innovation and environmental tech.
                        With over a decade of experience covering the intersection of technology and sustainability, he
                        has written for leading publications including Wired, MIT Technology Review, and The Guardian.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/thomas-green"
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
                      href="/tag/tech"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      tech
                    </Link>
                    <Link
                      href="/tag/sustainability"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      sustainability
                    </Link>
                    <Link
                      href="/tag/renewable-energy"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      renewable energy
                    </Link>
                    <Link
                      href="/tag/electric-vehicles"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      electric vehicles
                    </Link>
                    <Link
                      href="/tag/smart-grid"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      smart grid
                    </Link>
                    <Link
                      href="/tag/circular-economy"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      circular economy
                    </Link>
                    <Link
                      href="/tag/green-building"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      green building
                    </Link>
                    <Link
                      href="/tag/innovation"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      innovation
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest tech videos and articles delivered to your inbox
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
