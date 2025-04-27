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

export default function FortniteArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="fortnite-battle-royale-announcement"
              thumbnailUrl="/fortnite-battle-royale.png"
              title="Fortnite Battle Royale Mode Announced, Free-to-Play Coming Soon"
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
                  Fortnite Battle Royale Mode Announced, Free-to-Play Coming Soon
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/commenter-marie.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/sarah-jenkins" className="font-medium hover:text-restorative-gold">
                        Sarah Jenkins
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 2, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">7.8k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">421</span>
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
                  Epic Games has officially announced "Fortnite Battle Royale," a new free-to-play PvP mode for their cooperative survival game Fortnite. The announcement comes amid growing popularity of the battle royale genre, pioneered by games like PlayerUnknown's Battlegrounds (PUBG).
                </p>

                <p>
                  According to Epic Games, the new mode will be available as a standalone free-to-play game on September 26 for PC, PlayStation 4, and Xbox One, separate from the base Fortnite game which remains in paid early access.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🔫</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Fortnite Battle Royale Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "100-player PvP mode with a massive map",
                        "Building and destruction mechanics from the base game",
                        "Free-to-play access on PC, PS4, and Xbox One",
                        "Squad-based gameplay options",
                        "Regular content updates promised",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>A New Contender in the Battle Royale Genre</h2>
                <p>
                  The battle royale format, which pits multiple players against each other in a last-man-standing scenario, has surged in popularity this year largely due to the success of PlayerUnknown's Battlegrounds. Epic Games appears to be capitalizing on this trend with their own unique spin on the formula.
                </p>

                <p>
                  Fortnite Battle Royale will drop 100 players onto a large map where they must scavenge for weapons and resources while eliminating opponents. The play area gradually shrinks as the match progresses, forcing remaining players into increasingly tense confrontations.
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/fortnite-colorful-design.png"
                        alt="Colorful video game visual reminiscent of Fortnite's vibrant style"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          COLORFUL DESIGN
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Fortnite's distinctive colorful art style sets it apart from more realistic battle royale titles
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Building Mechanics as a Key Differentiator</h2>
                <p>
                  What sets Fortnite Battle Royale apart from its competitors is the integration of building mechanics from the base game. Players can harvest materials and construct defensive structures, adding a layer of strategy not present in other battle royale titles.
                </p>

                <p>
                  "Fortnite Battle Royale is a 100-player PvP mode that's free for everyone! One giant map. A battle bus. Fortnite building skills and destructible environments combined with intense PvP combat," Epic Games stated in their announcement.
                </p>

                <p>
                  This unique combination of shooting and building promises a fresh take on the increasingly crowded battle royale landscape, potentially attracting players looking for something different from PUBG's more simulation-focused approach.
                </p>

                <h2>Free-to-Play Model</h2>
                <p>
                  Perhaps the most significant aspect of the announcement is Epic's decision to make Fortnite Battle Royale completely free-to-play, in contrast to PUBG's premium price point. This move could lower the barrier of entry for curious players who may be hesitant to purchase PUBG.
                </p>

                <p>
                  "We love battle royale games like PUBG and thought Fortnite would make a great foundation for our own version," said Epic Games in their announcement post. "A few weeks ago we rolled out a limited-time Battle Royale mode, and the response has been so positive that we're now working on a stand-alone free version for everyone to enjoy."
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "We love battle royale games like PUBG and thought Fortnite would make a great foundation for our own version. The mode combines the building mechanics of Fortnite with the last-player-standing gameplay of battle royale games, creating a unique blend of intense combat and dynamic construction."
                  <footer className="mt-2 text-right text-sm">— Epic Games official announcement</footer>
                </blockquote>

                <h2>Controversy with PUBG Developers</h2>
                <p>
                  The announcement has not been without controversy. Bluehole, the studio behind PlayerUnknown's Battlegrounds, has expressed concerns about the similarities between Fortnite Battle Royale and their game.
                </p>

                <p>
                  "We've had an ongoing relationship with Epic Games throughout PUBG's development as they are the creators of UE4, the engine we licensed for the game," said Bluehole VP Chang Han Kim in a statement. "After listening to the growing feedback from our community and reviewing the gameplay for ourselves, we are concerned that Fortnite may be replicating the experience for which PUBG is known."
                </p>

                <p>
                  Bluehole specifically mentioned Epic's references to PUBG in promotional materials for Fortnite Battle Royale as a point of contention, suggesting they are attempting to directly capitalize on PUBG's success.
                </p>

                <h2>Development Timeline</h2>
                <p>
                  Epic Games has been surprisingly quick to develop and announce this mode. Fortnite, which has been in development for several years, only recently entered early access in July 2017. The rapid pivot to include a battle royale mode suggests Epic recognized the potential market opportunity and moved quickly to capitalize on it.
                </p>

                <p>
                  According to Epic, they had already been testing a limited-time battle royale mode with players, and the positive response encouraged them to develop it into a standalone free-to-play experience. The team has promised regular updates and new features as the mode evolves.
                </p>

                <h2>Cross-Platform Potential</h2>
                <p>
                  Fortnite Battle Royale's availability across PC, PlayStation 4, and Xbox One from launch gives it an immediate advantage over PUBG, which is currently only available on PC with an Xbox One version in development. While Epic hasn't confirmed cross-platform play for the battle royale mode, the base Fortnite game has demonstrated some cross-platform capabilities.
                </p>

                <p>
                  The combination of multi-platform availability, free-to-play access, and unique building mechanics positions Fortnite Battle Royale as a potentially significant competitor in the rapidly growing battle royale space. Whether it can challenge PUBG's dominant position remains to be seen, but Epic Games' established expertise and resources make them a formidable entrant to the genre.
                </p>

                <p>
                  For players interested in trying Fortnite Battle Royale, the mode will be available for free download beginning September 26 on PC, PlayStation 4, and Xbox One.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/fortnite" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  fortnite
                </Link>
                <Link href="/tag/epic-games" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  epic games
                </Link>
                <Link href="/tag/battle-royale" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  battle royale
                </Link>
                <Link href="/tag/pubg" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  pubg
                </Link>
                <Link href="/tag/free-to-play" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  free-to-play
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/commenter-marie.jpg"
                        alt="Sarah Jenkins"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Sarah Jenkins</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Sarah specializes in covering the free-to-play gaming market and emerging multiplayer trends. With a background in game design and five years of industry experience before turning to journalism, she brings technical insight and player perspective to her analysis of new gaming phenomena.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/sarah-jenkins"
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
                commentCount={421}
                comments={[
                  {
                    author: "Nathan Drake",
                    avatar: "/commenter-dylan.jpg",
                    time: "1 day ago",
                    content: "Free-to-play is a genius move by Epic. PUBG might be the original, but $30 entry fee vs free is no contest for most casual gamers. Plus the building mechanics could be a real game-changer for the battle royale format.",
                    likes: 157,
                    replies: 12
                  },
                  {
                    author: "Ellie Williams",
                    avatar: "/commenter-marie.jpg",
                    time: "2 days ago",
                    content: "Interesting to see Bluehole's reaction. They can't copyright a game mode, but I understand their frustration with Epic directly referencing PUBG in marketing. Either way, competition is good for players!",
                    likes: 93,
                    replies: 8
                  },
                  {
                    author: "Joel Miller",
                    avatar: "/commenter-gordon.jpg",
                    time: "2 days ago",
                    content: "The cartoony graphics might actually be perfect for battle royale. Less anxiety-inducing than PUBG's realistic approach, and probably more accessible to younger players. Smart move by Epic to differentiate.",
                    likes: 76,
                    replies: 4
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Fortnite Battle Royale - First Gameplay Trailer Breakdown",
                      category: "GAMING",
                      image: "/fortnite-gameplay-trailer.png",
                      views: "2.1M views",
                      time: "15:42",
                      url: "/gaming/fortnite-battle-royale-trailer-breakdown"
                    },
                    {
                      title: "PUBG vs. Fortnite: Battle of the Battle Royales",
                      category: "GAMING",
                      image: "/pubg-vs-fortnite.png",
                      views: "1.8M views",
                      time: "22:14",
                      url: "/gaming/pubg-vs-fortnite"
                    },
                    {
                      title: "Epic Games' History: From Unreal to Fortnite",
                      category: "GAMING",
                      image: "/epic-games-history.png",
                      views: "987K views",
                      time: "28:36",
                      url: "/gaming/epic-games-history"
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
                  <div className="relative w-full h-[90px] bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
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
                        title: "How to Win in Fortnite Battle Royale - Beginner's Guide",
                        category: "GAMING",
                        image: "/fortnite-beginners-guide.png",
                        views: "3.4M views",
                        time: "18:24",
                        url: "/gaming/fortnite-beginners-guide"
                      },
                      {
                        title: "The Rise of Battle Royale: Gaming's New Phenomenon",
                        category: "GAMING",
                        image: "/battle-royale-rise.png",
                        views: "1.2M views",
                        time: "24:56",
                        url: "/gaming/battle-royale-rise"
                      },
                      {
                        title: "Fortnite's Building Mechanics Explained",
                        category: "GAMING",
                        image: "/fortnite-building-basics.png",
                        views: "1.7M views",
                        time: "15:22",
                        url: "/gaming/fortnite-building-basics"
                      },
                      {
                        title: "Free-to-Play Games That Dominated the Market",
                        category: "GAMING",
                        image: "/free-to-play-games.png",
                        views: "925K views",
                        time: "21:48",
                        url: "/gaming/successful-free-to-play-games"
                      },
                      {
                        title: "Epic vs. Bluehole: The Battle Royale Legal Battle Explained",
                        category: "GAMING",
                        image: "/battle-royale-legal-issues.png",
                        views: "1.1M views",
                        time: "19:37",
                        url: "/gaming/battle-royale-legal-issues"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/fortnite"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fortnite
                    </Link>
                    <Link
                      href="/tag/epic-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      epic games
                    </Link>
                    <Link
                      href="/tag/battle-royale"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      battle royale
                    </Link>
                    <Link
                      href="/tag/pubg"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      pubg
                    </Link>
                    <Link
                      href="/tag/free-to-play"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      free-to-play
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