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

export default function AssassinsCreedOriginsArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="assassins-creed-origins-gameplay"
              thumbnailUrl="/assassins-creed.png"
              title="Assassin's Creed Origins: New Gameplay Shows Off Ancient Egypt"
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
                  Assassin's Creed Origins: New Gameplay Shows Off Ancient Egypt
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-dylan.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/marcus-rodriguez" className="font-medium hover:text-restorative-gold">
                        Marcus Rodriguez
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 3, 2017</div>
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
                    <span className="text-sm">224</span>
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
                  Ubisoft has unveiled an extensive new gameplay demo for Assassin's Creed Origins, showcasing the game's stunning recreation of Ancient Egypt and its overhauled combat system. The 30-minute presentation, which debuted at a recent press event, provides the most detailed look yet at the ambitious title that aims to reinvigorate the long-running franchise.
                </p>

                <p>
                  Assassin's Creed Origins marks a significant departure from previous installments, with Ubisoft taking an extra year of development time to reimagine core gameplay elements. The new footage demonstrates how this additional time has been utilized, highlighting vast open environments, revamped movement mechanics, and a completely rebuilt combat system that emphasizes player skill and strategic engagement.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏺</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Origins Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Complete recreation of Ancient Egypt during the Ptolemaic period",
                        "Revamped combat system with hitbox targeting and flexible weapon choices",
                        "RPG progression elements including skill trees and gear customization",
                        "Dynamic day/night cycle affecting NPC behavior and activities",
                        "New quest system with multiple approaches to mission completion",
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

                <h2>Ancient Egypt Brought to Life</h2>
                <p>
                  The gameplay footage primarily showcases the region surrounding Memphis, one of the oldest and most important cities in Ancient Egypt. Players take control of Bayek, a Medjay (elite Egyptian warrior) who serves as the protagonist and whose journey will reveal the origins of the Assassin Brotherhood. The demo follows Bayek as he investigates corruption among the priests of Ptah and navigates the city's intricate political landscape.
                </p>

                <p>
                  What immediately stands out is the sheer scope and detail of the environment. From the bustling marketplaces of Memphis to the agricultural lands along the Nile Delta, the world feels alive with activity. NPCs engage in daily routines that change depending on the time of day, with farmers tending fields in the morning, merchants hawking wares during midday, and guards increasing patrols after sunset.
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/assassins-creed.png"
                        alt="Bayek overlooking the city of Memphis in Assassin's Creed Origins"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          OPEN WORLD
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        The sprawling city of Memphis showcases the game's attention to historical detail and environmental design
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Combat Reinvented</h2>
                <p>
                  Perhaps the most significant change showcased in the new footage is the completely redesigned combat system. Gone is the counter-based combat of previous titles, replaced with a more dynamic hitbox-based system that emphasizes positioning, timing, and weapon choice. Players can now freely switch between light and heavy attacks, dodge incoming strikes, and parry at precise moments to create openings.
                </p>

                <p>
                  "We wanted to make combat feel more tactical and responsive," explained Ashraf Ismail, game director for Assassin's Creed Origins. "Every weapon type feels distinct and requires a different approach. A heavy mace might be devastating against shielded opponents but leaves you vulnerable due to its slow speed, while dual swords allow for quick strikes but deal less damage per hit."
                </p>

                <h2>RPG Elements</h2>
                <p>
                  The demo also highlighted the game's expanded RPG elements, another major shift for the series. Bayek gains experience points by completing quests and defeating enemies, eventually leveling up and earning ability points to spend in three distinct skill trees: Warrior (combat), Hunter (ranged attacks), and Seer (tools and environmental manipulation).
                </p>

                <p>
                  Equipment now features varying rarity levels and statistical attributes, allowing players to customize their loadout to suit different playstyles. The footage showed Bayek switching between a selection of weapons, including khopesh swords, spears, bows, and shields, each with unique properties and combat animations.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "We're not just layering RPG elements on top of the traditional Assassin's Creed formula. We've rebuilt the core gameplay from scratch to support these systems and create a more personalized experience."
                  <footer className="mt-2 text-right text-sm">— Ashraf Ismail, Game Director</footer>
                </blockquote>

                <h2>Historical Detail</h2>
                <p>
                  One aspect that Ubisoft has emphasized throughout Origins' development is its commitment to historical accuracy. The gameplay demo showcased how the development team has consulted with historians and Egyptologists to recreate not just the architectural marvels of Ancient Egypt, but also the day-to-day life of its people.
                </p>

                <p>
                  The footage displayed authentic religious ceremonies, crafting techniques, and agricultural practices of the period. Even the wildlife is accurately represented, with hippos, crocodiles, and various bird species behaving according to their natural patterns. This attention to detail extends to the game's narrative, which incorporates real historical figures like Cleopatra and Julius Caesar into its storyline.
                </p>

                <h2>Side Activities and Exploration</h2>
                <p>
                  Beyond the main quest, the demo highlighted various side activities available to players. These include gladiatorial arenas where Bayek can test his combat skills, chariot races through desert landscapes, and treasure hunts in ancient tombs filled with puzzles and traps. The game also features a photography mode that allows players to capture the stunning vistas of Ancient Egypt.
                </p>

                <p>
                  Exploration has been significantly expanded as well. Players can now freely swim underwater to discover sunken ruins, use a new climbing system that allows scaling virtually any surface, and ride camels or horses across the vast desert expanses. A new quest system removes map icons in favor of more organic discovery, encouraging players to talk to NPCs and investigate their surroundings.
                </p>

                <p>
                  Assassin's Creed Origins is scheduled for release on October 27, 2017, for PlayStation 4, Xbox One, and PC. With its ambitious scope and fundamental gameplay changes, it represents Ubisoft's effort to revitalize one of gaming's most recognizable franchises after taking a year off from its annual release schedule. Based on this latest gameplay footage, the extra development time appears to have been put to good use.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/assassins-creed" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  assassins creed
                </Link>
                <Link href="/tag/ubisoft" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  ubisoft
                </Link>
                <Link href="/tag/open-world" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  open world
                </Link>
                <Link href="/tag/ancient-egypt" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  ancient egypt
                </Link>
                <Link href="/tag/action-rpg" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  action rpg
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-dylan.jpg"
                        alt="Marcus Rodriguez"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Marcus Rodriguez</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Marcus specializes in action-adventure games and historical settings in video games. A longtime fan of the Assassin's Creed franchise, he has covered the series since its inception and has interviewed many of its developers. He holds a degree in Classical History and often analyzes how games represent historical periods.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/marcus-rodriguez"
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
                commentCount={224}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "The recreation of Ancient Egypt looks absolutely stunning. I've always been fascinated by that period of history, and it looks like they've really done their research to make it authentic.",
                    likes: 68,
                    replies: 4
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "I'm really excited about the combat changes. The old system was getting stale after so many games. Hopefully this hitbox-based approach will make fights more engaging.",
                    likes: 52,
                    replies: 3
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "4 days ago",
                    content: "Taking a year off from the annual release cycle seems to have paid off. This looks like the refresh the series needed. The RPG elements remind me a bit of The Witcher 3, which is definitely not a bad thing!",
                    likes: 47,
                    replies: 6
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Assassin's Creed Origins - Combat System Deep Dive",
                      category: "GAMING",
                      image: "/ac-origins-combat.png",
                      views: "845K views",
                      time: "14:28",
                      url: "/gaming/ac-origins-combat"
                    },
                    {
                      title: "The Historical Accuracy of Assassin's Creed Origins",
                      category: "GAMING",
                      image: "/ac-origins-history.png",
                      views: "623K views",
                      time: "18:35",
                      url: "/gaming/ac-origins-history"
                    },
                    {
                      title: "Evolution of Assassin's Creed: From Altair to Bayek",
                      category: "GAMING",
                      image: "/assassins-creed-evolution.png",
                      views: "1.2M views",
                      time: "22:47",
                      url: "/gaming/assassins-creed-evolution"
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
                        title: "Top 10 New Features in Assassin's Creed Origins",
                        category: "GAMING",
                        image: "/ac-origins-features.png",
                        views: "752K views",
                        time: "12:18",
                        url: "/gaming/ac-origins-features"
                      },
                      {
                        title: "Assassin's Creed Origins: Everything You Need to Know",
                        category: "GAMING",
                        image: "/ac-origins-overview.png",
                        views: "934K views",
                        time: "15:42",
                        url: "/gaming/ac-origins-overview"
                      },
                      {
                        title: "Ubisoft's Open World Design Philosophy",
                        category: "GAMING",
                        image: "/ubisoft-open-world.png",
                        views: "547K views",
                        time: "20:15",
                        url: "/gaming/ubisoft-open-world"
                      },
                      {
                        title: "Ancient Egypt in Gaming: A Historical Perspective",
                        category: "GAMING",
                        image: "/egypt-in-gaming.png",
                        views: "423K views",
                        time: "18:36",
                        url: "/gaming/egypt-in-gaming"
                      },
                      {
                        title: "Fall 2017 Gaming Preview: The Biggest Releases",
                        category: "GAMING",
                        image: "/fall-2017-games.png",
                        views: "865K views",
                        time: "24:51",
                        url: "/gaming/fall-2017-preview"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/action-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      action games
                    </Link>
                    <Link
                      href="/tag/ubisoft"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      ubisoft
                    </Link>
                    <Link
                      href="/tag/historical-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      historical games
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
                      href="/tag/pc-gaming"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      pc gaming
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