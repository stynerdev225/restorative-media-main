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

export default function MonsterHunterWorldArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="monster-hunter-world-release-date"
              thumbnailUrl="/monster-hunter.png"
              title="Monster Hunter World Release Date Announced With New Trailer"
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
                  Monster Hunter World Release Date Announced With New Trailer
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
                      <Link href="/author/emily-tanaka" className="font-medium hover:text-restorative-gold">
                        Emily Tanaka
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 3, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">4.5k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">312</span>
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
                  Capcom has officially announced that Monster Hunter World will launch globally on January 26, 2018, for PlayStation 4 and Xbox One, with a PC release to follow later. The announcement was accompanied by a spectacular new trailer showcasing never-before-seen monsters, environments, and gameplay mechanics from the highly anticipated action RPG.
                </p>

                <p>
                  The release date reveal came during Sony's pre-Tokyo Game Show press conference, where Producer Ryozo Tsujimoto took the stage to share the news with fans. The date marks the series' return to PlayStation home consoles after a long period of primarily releasing on handheld platforms, and represents the first simultaneous worldwide launch in Monster Hunter's history.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🐉</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Release Details</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Global release on January 26, 2018 for PS4 and Xbox One",
                        "PC version confirmed but launching at a later date",
                        "First simultaneous worldwide release in series history",
                        "Digital Deluxe and Collector's Editions announced",
                        "Pre-order bonuses include exclusive gear and items",
                      ].map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>New Trailer Highlights</h2>
                <p>
                  The stunning new trailer released alongside the announcement offers the most comprehensive look yet at Monster Hunter World's lush environments and diverse ecosystem of creatures. The footage showcases several new monsters that players will encounter in the game, including the imposing Elder Dragon Nergigante, which appears to be one of the primary threats in the game's narrative.
                </p>

                <p>
                  "Nergigante represents the kind of challenge we want veteran hunters to face," explained Tsujimoto. "It's aggressive, relentless, and has unique abilities that will force players to adapt their strategies. We designed it to be a formidable opponent that embodies the evolution of Monster Hunter's combat system."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/monster-hunter.png"
                        alt="A hunter facing off against the Elder Dragon Nergigante in Monster Hunter World"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          ACTION RPG
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        The Elder Dragon Nergigante features prominently in the new trailer as one of the game's most challenging monsters
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Seamless Gameplay Experience</h2>
                <p>
                  The trailer also highlights Monster Hunter World's seamless gameplay, which eliminates loading screens between areas to create a more immersive hunting experience. Players can track monsters across vast, interconnected ecosystems that feature dynamic weather patterns and day-night cycles that affect monster behavior and availability.
                </p>

                <p>
                  "We've completely reimagined how players interact with the environment," said Kaname Fujioka, Executive Director and Art Director for Monster Hunter World. "The ecosystem is living and reactive—monsters have territories they defend, predator-prey relationships with other creatures, and will even fight each other for dominance. Hunters can use all of this to their advantage."
                </p>

                <h2>Multiplayer Focus</h2>
                <p>
                  Cooperative multiplayer remains a cornerstone of the Monster Hunter experience, and the trailer showcases how the system has been refined for World. Players can now easily join friends' hunts in progress through an improved matchmaking system, and the game will feature drop-in, drop-out functionality that allows hunters to come to each other's aid mid-mission.
                </p>

                <p>
                  A particularly interesting new feature demonstrated in the trailer is the SOS flare, which allows a hunter in trouble to signal for help from the wider player community. When a flare is fired, other players can choose to respond and join the hunt, creating opportunities for spontaneous cooperation between strangers.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "Monster Hunter has always been about bringing players together to overcome incredible challenges. With World, we've removed many of the barriers that might have made it difficult for friends to hunt together in previous games. Our goal was to make multiplayer as seamless and accessible as possible."
                  <footer className="mt-2 text-right text-sm">— Ryozo Tsujimoto, Producer</footer>
                </blockquote>

                <h2>Special Editions and Pre-order Bonuses</h2>
                <p>
                  In addition to the standard release, Capcom announced Digital Deluxe and Collector's Editions of Monster Hunter World. The Digital Deluxe Edition includes the full game, a Samurai skin set, additional gestures, hairstyles, and other customization options. The physical Collector's Edition contains everything in the Digital Deluxe version, plus a hardcover art book, high-quality monster statue, and soundtrack CD.
                </p>

                <p>
                  Pre-ordering any version of the game will grant players access to the Origin armor set and Fair Wind charm, which provide helpful early-game bonuses. PlayStation 4 players will also receive exclusive access to armor inspired by Horizon Zero Dawn protagonist Aloy, though details on how to obtain this special equipment will be revealed closer to launch.
                </p>

                <h2>Reception and Expectations</h2>
                <p>
                  The announcement and new trailer have generated significant excitement within the Monster Hunter community and beyond. The January release date positions the game as one of the first major titles of 2018, and expectations are high for what many consider to be the most ambitious entry in the series to date.
                </p>

                <p>
                  Industry analysts have noted that Monster Hunter World represents Capcom's strongest effort yet to expand the franchise's popularity in Western markets, where it has historically had a smaller but dedicated following compared to its massive success in Japan. The simultaneous worldwide release, enhanced visuals, and streamlined mechanics are all seen as steps toward making the series more accessible to newcomers while still maintaining the deep gameplay that has defined Monster Hunter since its inception.
                </p>

                <p>
                  With its impressive visuals, expanded scope, and refined gameplay systems, Monster Hunter World appears poised to deliver on its promise of creating the most immersive and engaging hunting experience in the franchise's history when it launches on January 26, 2018.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/monster-hunter" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  monster hunter
                </Link>
                <Link href="/tag/capcom" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  capcom
                </Link>
                <Link href="/tag/action-rpg" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  action rpg
                </Link>
                <Link href="/tag/multiplayer" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  multiplayer
                </Link>
                <Link href="/tag/playstation-4" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  playstation 4
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/commenter-marie.jpg"
                        alt="Emily Tanaka"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Emily Tanaka</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Emily is our resident expert on Japanese game franchises and action RPGs. With over a decade covering Monster Hunter and similar series, she brings deep knowledge of the franchise's evolution and mechanics. She has attended multiple Tokyo Game Shows and interviewed many key developers from major Japanese studios, including Capcom and Square Enix.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/emily-tanaka"
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
                commentCount={312}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "I've been waiting for a proper console Monster Hunter game for so long! The graphics look incredible, and I'm really excited about the seamless maps. No more loading screens between areas is going to make a huge difference.",
                    likes: 82,
                    replies: 6
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "As a longtime fan of the series since Freedom Unite on PSP, I'm cautiously optimistic about these changes. The SOS flare system sounds great for bringing in help when you need it, but I hope they don't make the monsters too easy for Western audiences.",
                    likes: 64,
                    replies: 8
                  },
                  {
                    author: "Gordon Ramsay",
                    avatar: "/commenter-gordon.jpg",
                    time: "4 days ago",
                    content: "That Nergigante looks absolutely terrifying! I can already tell I'm going to cart constantly trying to take that thing down. Can't wait to see what kind of weapons and armor we can craft from it though.",
                    likes: 53,
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
                      title: "Monster Hunter World - All 14 Weapon Types Showcase",
                      category: "GAMING",
                      image: "/mhw-weapons.png",
                      views: "1.2M views",
                      time: "18:34",
                      url: "/gaming/mhw-weapons"
                    },
                    {
                      title: "Monster Hunter: The Evolution of the Series (2004-2018)",
                      category: "GAMING",
                      image: "/mh-evolution.png",
                      views: "876K views",
                      time: "24:15",
                      url: "/gaming/mh-evolution"
                    },
                    {
                      title: "Top 10 Most Challenging Monsters in Monster Hunter History",
                      category: "GAMING",
                      image: "/mh-top-monsters.png",
                      views: "1.5M views",
                      time: "16:28",
                      url: "/gaming/mh-top-monsters"
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
                        title: "Monster Hunter World - Beginner's Guide & Essential Tips",
                        category: "GAMING",
                        image: "/mhw-beginners-guide.png",
                        views: "1.8M views",
                        time: "22:16",
                        url: "/gaming/mhw-beginners-guide"
                      },
                      {
                        title: "The Art of Monster Hunter: Designing Iconic Creatures",
                        category: "GAMING",
                        image: "/mh-art-design.png",
                        views: "654K views",
                        time: "15:48",
                        url: "/gaming/mh-art-design"
                      },
                      {
                        title: "Capcom's Renaissance: How Monster Hunter Led the Comeback",
                        category: "GAMING",
                        image: "/capcom-renaissance.png",
                        views: "532K views",
                        time: "19:21",
                        url: "/gaming/capcom-renaissance"
                      },
                      {
                        title: "The Social Experience of Monster Hunter: Why Hunting Together Matters",
                        category: "GAMING",
                        image: "/mh-social-hunting.png",
                        views: "487K views",
                        time: "14:36",
                        url: "/gaming/mh-social-hunting"
                      },
                      {
                        title: "Most Anticipated Games of 2018: What to Look Forward To",
                        category: "GAMING",
                        image: "/anticipated-2018.png",
                        views: "923K views",
                        time: "26:12",
                        url: "/gaming/anticipated-2018"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/action-rpg"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      action rpg
                    </Link>
                    <Link
                      href="/tag/capcom"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      capcom
                    </Link>
                    <Link
                      href="/tag/japanese-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      japanese games
                    </Link>
                    <Link
                      href="/tag/ps4"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      ps4
                    </Link>
                    <Link
                      href="/tag/xbox-one"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      xbox one
                    </Link>
                    <Link
                      href="/tag/coop"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      coop
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