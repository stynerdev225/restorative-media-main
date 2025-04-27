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

export default function Destiny2PCBetaArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="destiny2-pc-beta"
              thumbnailUrl="/destiny-2.png"
              title="Destiny 2 PC Beta Dates Announced, System Requirements Revealed"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">GAMING</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Destiny 2 PC Beta Dates Announced, System Requirements Revealed
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-marie.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/emily-parker" className="font-medium hover:text-restorative-gold">
                        Emily Parker
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 4, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.4k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">215</span>
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
                  Bungie has officially announced the dates for Destiny 2's PC beta, giving PC gamers their first opportunity to experience the highly anticipated sequel ahead of its October launch. The PC beta will run from August 28 to August 31, with early access starting on August 28 for those who pre-order the game, and open access beginning on August 29 for all players.
                </p>

                <p>
                  This announcement comes after the successful conclusion of the console beta in July, which allowed PlayStation 4 and Xbox One players to sample the game's opening mission, a competitive multiplayer mode, and a three-player cooperative Strike. The PC version is expected to include the same content, but with the added benefit of keyboard and mouse controls, uncapped framerates, and 4K resolution support.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">💻</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Destiny 2 PC Requirements</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Minimum: Intel Core i3-3250 / AMD FX-4350, 6GB RAM, GeForce GTX 660 2GB / Radeon HD 7850 2GB",
                        "Recommended: Intel Core i5-2400 / AMD Ryzen R5 1600X, 8GB RAM, GeForce GTX 970 / Radeon R9 390",
                        "DirectX 11 compatible video card with 2GB VRAM",
                        "Windows 7, 8.1, or 10 64-bit operating systems",
                        "68GB of available hard drive space",
                      ].map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>System Requirements Detailed</h2>
                <p>
                  Alongside the beta dates, Bungie has revealed the minimum and recommended system requirements for the PC version of Destiny 2. The specifications suggest that the game will be accessible to a wide range of PC configurations, though players will need reasonably modern hardware to experience the game at its best.
                </p>

                <p>
                  The minimum requirements call for an Intel Core i3-3250 or AMD FX-4350 processor, 6GB of RAM, and either a GeForce GTX 660 2GB or Radeon HD 7850 2GB graphics card. For the optimal experience, Bungie recommends an Intel Core i5-2400 or AMD Ryzen R5 1600X processor, 8GB of RAM, and a GeForce GTX 970 or Radeon R9 390 graphics card. The game will require 68GB of available storage space and a 64-bit version of Windows 7, 8.1, or 10.
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/destiny-2-pc-screenshot.jpg"
                        alt="Destiny 2 PC gameplay showing enhanced graphics"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          GRAPHICS
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Destiny 2 on PC supports 4K resolution, uncapped framerates, and enhanced graphics options
                      </p>
                    </div>
                  </div>
                </div>

                <h2>PC-Exclusive Features</h2>
                <p>
                  The PC version of Destiny 2 is being developed in partnership with Vicarious Visions and will include several features not available on consoles. PC players can look forward to uncapped framerates, 4K resolution support, ultrawide monitor compatibility, customizable field of view, detailed graphics settings, and text chat. The game will be exclusively available through Blizzard's Battle.net platform, marking the first non-Blizzard game to use the service.
                </p>

                <p>
                  "We're excited to open up the Destiny universe to PC players for the first time," said David Shaw, PC project lead at Bungie. "The beta will allow us to stress test our servers and gather valuable feedback from players about their experience on various hardware configurations. We've worked hard to ensure Destiny 2 feels natural with mouse and keyboard controls and takes full advantage of PC hardware."
                </p>

                <h2>Beta Content and Improvements</h2>
                <p>
                  The PC beta is expected to include the same content featured in the console beta: the opening story mission "Homecoming," the competitive multiplayer mode "Countdown" on the map "Midtown," and the cooperative Strike "The Inverted Spire." However, Bungie has indicated that the PC version will incorporate various improvements based on feedback from the console beta.
                </p>

                <p>
                  These improvements include adjustments to the in-game economy, increased Super charge rates, increased grenade damage in PvE activities, and improved matchmaking algorithms for the Crucible. Bungie has also addressed concerns about ammunition availability in PvE encounters and promised a more balanced experience for the PC beta.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "The PC platform allows us to deliver the definitive version of Destiny 2 with all the bells and whistles that PC gamers expect. The beta is just a small taste of what's to come, and we can't wait to see how the community reacts."
                  <footer className="mt-2 text-right text-sm">— David Shaw, PC Project Lead at Bungie</footer>
                </blockquote>

                <h2>Pre-Loading and Access</h2>
                <p>
                  Pre-loading for the beta will be available starting on August 25, allowing players to download the client in advance of the beta's launch. Players who have pre-ordered Destiny 2 will need to redeem their early access code on Bungie's website to receive a Battle.net code, which will then grant access to the early access period beginning on August 28.
                </p>

                <p>
                  The open beta phase will begin on August 29 and will be accessible to all players with a Battle.net account, without requiring a pre-order. The beta is scheduled to conclude on August 31, giving players approximately three days to experience the game before its official launch on PC on October 24, 2017, following the console release on September 6.
                </p>

                <h2>Launch Plans and Expectations</h2>
                <p>
                  While console players will get their hands on the full game on September 6, PC players will have to wait until October 24 for the official release. Bungie has explained that the additional time is necessary to ensure the PC version meets their quality standards and incorporates all the features and optimizations that PC gamers expect.
                </p>

                <p>
                  The staggered release has caused some controversy within the community, particularly regarding potential story spoilers for PC players during the seven-week gap between console and PC launches. Bungie has acknowledged these concerns and encouraged players to be mindful of spoilers during this period, while also emphasizing that the extra development time will result in a superior experience for PC players.
                </p>

                <p>
                  With the PC beta just weeks away, anticipation for Destiny 2 continues to build. The game promises to expand on the foundation laid by the original Destiny with a more cinematic story, refined gameplay mechanics, and a wealth of content for both solo players and cooperative fireteams. For PC gamers who have been waiting for their chance to join the fight, the beta represents their first opportunity to see what all the fuss is about.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/destiny-2" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  destiny 2
                </Link>
                <Link href="/tag/bungie" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  bungie
                </Link>
                <Link href="/tag/pc-gaming" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  pc gaming
                </Link>
                <Link href="/tag/beta" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  beta
                </Link>
                <Link href="/tag/fps" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  fps
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-marie.jpg"
                        alt="Emily Parker"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Emily Parker</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Emily is a tech journalist specializing in PC gaming and hardware. She has covered the gaming industry for over seven years and is particularly interested in MMOs and cooperative shooters. Emily has logged over 1,000 hours in the original Destiny and maintains multiple characters across all classes.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/emily-parker"
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
              <CommentsSection
                commentCount={156}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "3 days ago",
                    content: "Can't wait to try this on PC! I've been playing on console but the mouse and keyboard controls should make a huge difference for aiming.",
                    likes: 42,
                    replies: 3
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "4 days ago",
                    content: "Those system requirements are pretty reasonable. Glad to see Bungie optimizing well for PC players!",
                    likes: 36,
                    replies: 2
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "5 days ago",
                    content: "The graphics in the beta look amazing. Really showcases what the PC version can do over console versions.",
                    likes: 24,
                    replies: 1
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos
                  videos={[
                    {
                      title: "Destiny 2 Open Beta Gameplay - First Impressions",
                      category: "GAMING",
                      image: "/destiny-2-beta-gameplay.png",
                      views: "945K views",
                      time: "17:30",
                      url: "/gaming/destiny-2-beta-gameplay"
                    },
                    {
                      title: "Destiny 2 vs Destiny 1: What's Changed?",
                      category: "GAMING",
                      image: "/destiny-comparison.png",
                      views: "732K views",
                      time: "14:15",
                      url: "/gaming/destiny-2-vs-destiny-1"
                    },
                    {
                      title: "Top PC Games Coming in Fall 2017",
                      category: "GAMING",
                      image: "/fall-2017-pc-games.png",
                      views: "521K views",
                      time: "11:40",
                      url: "/gaming/fall-2017-pc-games"
                    }
                  ]}
                />
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
                  <RecommendedVideos
                    videos={[
                      {
                        title: "Destiny 2 Beta: Hunter Class Overview",
                        category: "GAMING",
                        image: "/destiny-2-hunter.png",
                        views: "823K views",
                        time: "14:25",
                        url: "/gaming/destiny-2-hunter-overview"
                      },
                      {
                        title: "Destiny 2 Weapon System Changes Explained",
                        category: "GAMING",
                        image: "/destiny-2-weapons.png",
                        views: "654K views",
                        time: "12:30",
                        url: "/gaming/destiny-2-weapons"
                      },
                      {
                        title: "Building a Budget PC for Destiny 2",
                        category: "TECH",
                        image: "/budget-gaming-pc.png",
                        views: "412K views",
                        time: "18:15",
                        url: "/tech/budget-pc-for-destiny2"
                      },
                      {
                        title: "Destiny 2 PC vs Console Graphics Comparison",
                        category: "GAMING",
                        image: "/destiny-2-graphics-comparison.png",
                        views: "785K views",
                        time: "10:45",
                        url: "/gaming/destiny-2-graphics-comparison"
                      },
                      {
                        title: "Preparing for Destiny 2: What Veterans Need to Know",
                        category: "GAMING",
                        image: "/destiny-2-preparation.png",
                        views: "568K views",
                        time: "16:30",
                        url: "/gaming/destiny-2-preparation-guide"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/pc-gaming"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      pc gaming
                    </Link>
                    <Link
                      href="/tag/fps"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fps
                    </Link>
                    <Link
                      href="/tag/online-gaming"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      online gaming
                    </Link>
                    <Link
                      href="/tag/mmo"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mmo
                    </Link>
                    <Link
                      href="/tag/multiplayer"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      multiplayer
                    </Link>
                    <Link
                      href="/tag/activision"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      activision
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest gaming news and exclusive content delivered to your inbox
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