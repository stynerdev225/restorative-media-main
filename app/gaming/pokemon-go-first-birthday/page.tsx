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

export default function PokemonGoArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="pokemon-go-birthday"
              thumbnailUrl="/pokemon-go.png"
              title="Pokémon Go celebrates first birthday with events across the globe"
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
                  Pokémon Go celebrates first birthday with events across the globe
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-thomas.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/sarah-chen" className="font-medium hover:text-restorative-gold">
                        Sarah Chen
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.6k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">245</span>
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
                  Pokémon Go, the augmented reality mobile game that took the world by storm last summer, is celebrating its first anniversary with a series of global events designed to bring players back to the streets in search of digital monsters. Developer Niantic has announced several in-game events alongside real-world gatherings to commemorate the game's unprecedented success.
                </p>

                <p>
                  The mobile phenomenon, which has been downloaded over 750 million times since its launch in July 2016, transformed city streets and parks into hunting grounds for virtual Pokémon creatures. Despite a significant drop-off in daily users since its initial explosion in popularity, the game still boasts a dedicated community of more than 65 million monthly active players.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎂</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Anniversary Events</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Pikachu wearing birthday hats appearing more frequently in the wild",
                        "Anniversary Box available in the in-game shop with special items",
                        "Pokémon Go Fest in Chicago's Grant Park on July 22",
                        "European Safari Zone events at shopping centers across major cities",
                        "Yokohama Pikachu Outbreak collaboration in Japan during August",
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

                <h2>Global Real-World Celebrations</h2>
                <p>
                  The centerpiece of the anniversary celebrations is Pokémon Go Fest, a ticketed event scheduled for July 22 in Chicago's Grant Park. The festival promises unique in-game challenges and rewards, special Pokéstops, and rare Pokémon spawns. Tickets sold out within minutes of going on sale, showcasing the game's enduring appeal despite its declining mainstream presence.
                </p>

                <p>
                  "Pokémon Go Fest represents our commitment to bringing players together in meaningful ways," said John Hanke, CEO of Niantic. "We've learned a lot in our first year, and we want to thank our dedicated community by creating unique experiences where people can connect and share their love for Pokémon."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/pokemon-go-community.jpg"
                        alt="Players gathering at a Pokémon Go event"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          COMMUNITY
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Hundreds of Pokémon Go players gathered at a community event, showcasing the game's power to bring people together
                      </p>
                    </div>
                  </div>
                </div>

                <h2>European and Asian Expansions</h2>
                <p>
                  Beyond the Chicago event, European players can look forward to Safari Zone events at shopping centers across major cities, where rare Pokémon normally not found in Europe will appear. Meanwhile, in Japan, Niantic is partnering with the annual Pikachu Outbreak event in Yokohama, transforming the already Pokémon-themed celebration into an augmented reality playground.
                </p>

                <p>
                  The international scope of these events reflects Pokémon Go's global impact, having achieved mainstream success in territories ranging from North America and Europe to Asia and Oceania. Local community organizers have also announced hundreds of unofficial meetups to coincide with the anniversary.
                </p>

                <h2>In-Game Bonuses and New Features</h2>
                <p>
                  Players unable to attend physical events can still participate in the celebrations through special in-game bonuses. The instantly recognizable Pikachu will appear more frequently in the wild wearing a festive birthday hat, while an Anniversary Box containing premium items like Incubators, Max Revives, Ultra Balls, and a Raid Pass is available in the game's shop.
                </p>

                <p>
                  These anniversary celebrations come on the heels of Pokémon Go's biggest update since launch: the introduction of Raid Battles and a revamped Gym system. The new features encourage more cooperative gameplay, allowing players to team up to defeat powerful Pokémon in time-limited raids.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "Pokémon Go isn't just a game; it's become a social movement that has helped millions of people become more active and explore their neighborhoods. We're continuously working to build on that foundation."
                  <footer className="mt-2 text-right text-sm">— John Hanke, Niantic CEO</footer>
                </blockquote>

                <h2>A Year of Impact</h2>
                <p>
                  As Pokémon Go marks its first year, its cultural impact remains undeniable. The game has been credited with popularizing augmented reality technology, promoting physical activity, and creating spontaneous social gatherings. Research published in the British Medical Journal suggested that in the weeks following the game's launch, physical activity among players increased by an average of 26%.
                </p>

                <p>
                  The game also pioneered new models of location-based entertainment, inspiring numerous imitators and prompting other established franchises to explore augmented reality experiences. Perhaps most significantly, Pokémon Go demonstrated the continued relevance of the 25-year-old Pokémon franchise, leading to increased sales of traditional Pokémon games and merchandise.
                </p>

                <p>
                  As Niantic continues to roll out new features and expand to additional territories, the question remains whether Pokémon Go can recapture the cultural zeitgeist it achieved in those initial summer months of 2016. Whether it does or not, its place in gaming history—and its status as one of the most successful mobile applications of all time—is already secure.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/pokemon-go" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  pokemon go
                </Link>
                <Link href="/tag/niantic" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  niantic
                </Link>
                <Link href="/tag/mobile-gaming" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mobile gaming
                </Link>
                <Link href="/tag/pokemon" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  pokemon
                </Link>
                <Link href="/tag/augmented-reality" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  augmented reality
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-thomas.jpg"
                        alt="Sarah Chen"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Sarah Chen</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Sarah is a tech and gaming journalist specializing in mobile gaming and augmented reality. She's been covering Pokémon Go since its launch and has attended numerous gaming events worldwide. When not writing, she's probably out catching Pokémon.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/sarah-chen"
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
                commentCount={218}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "It's amazing to see how far Pokémon GO has come! I remember when the servers would crash every few minutes during launch week. Now it's one of the most stable mobile games out there.",
                    likes: 53,
                    replies: 4
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "The anniversary event was a lot of fun. I caught so many Pikachu with party hats! I'm excited to see what they have planned for year two.",
                    likes: 38,
                    replies: 2
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "4 days ago",
                    content: "I think they need to hurry up with trading and PvP battles. Those features were promised a long time ago and still haven't materialized.",
                    likes: 64,
                    replies: 8
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Pokémon GO Fest Chicago: Event Highlights",
                      category: "GAMING",
                      image: "/pokemon-go-fest-chicago.png",
                      views: "1.2M views",
                      time: "14:35",
                      url: "/gaming/pokemon-go-fest-highlights"
                    },
                    {
                      title: "How to Catch Legendary Pokémon in Raid Battles",
                      category: "GAMING",
                      image: "/legendary-raid-guide.png",
                      views: "945K views",
                      time: "12:22",
                      url: "/gaming/legendary-raid-guide"
                    },
                    {
                      title: "One Year of Pokémon GO: The Game's Evolution",
                      category: "GAMING",
                      image: "/pokemon-go-evolution.png",
                      views: "782K views",
                      time: "18:47",
                      url: "/gaming/pokemon-go-one-year-evolution"
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
                        title: "Top 10 Tips for New Pokémon GO Players in 2017",
                        category: "GAMING",
                        image: "/pokemon-go-tips-2017.png",
                        views: "1.4M views",
                        time: "16:38",
                        url: "/gaming/pokemon-go-tips-2017"
                      },
                      {
                        title: "The Complete Guide to Pokémon GO Raid Battles",
                        category: "GAMING",
                        image: "/raid-battles-guide.png",
                        views: "874K views",
                        time: "21:15",
                        url: "/gaming/raid-battles-guide"
                      },
                      {
                        title: "How Pokémon GO Changed Mobile Gaming Forever",
                        category: "TECH",
                        image: "/pokemon-go-mobile-impact.png",
                        views: "632K views",
                        time: "14:42",
                        url: "/tech/pokemon-go-mobile-impact"
                      },
                      {
                        title: "Best Pokémon GO Accessories for Serious Trainers",
                        category: "TECH",
                        image: "/pokemon-go-accessories.png",
                        views: "547K views",
                        time: "12:37",
                        url: "/tech/pokemon-go-accessories"
                      },
                      {
                        title: "Pokémon GO: From Launch Disaster to Sustainable Success",
                        category: "GAMING",
                        image: "/pokemon-go-success-story.png",
                        views: "912K views",
                        time: "18:24",
                        url: "/gaming/pokemon-go-success-story"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/mobile-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mobile games
                    </Link>
                    <Link
                      href="/tag/nintendo"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      nintendo
                    </Link>
                    <Link
                      href="/tag/augmented-reality"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      augmented reality
                    </Link>
                    <Link
                      href="/tag/ios-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      ios games
                    </Link>
                    <Link
                      href="/tag/android-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      android games
                    </Link>
                    <Link
                      href="/tag/gaming-events"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      gaming events
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