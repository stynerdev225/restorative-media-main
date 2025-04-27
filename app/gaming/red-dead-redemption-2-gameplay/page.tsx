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

export default function RedDeadRedemption2Article() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="red-dead-redemption-2-gameplay"
              thumbnailUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              title="Red Dead Redemption 2 Gameplay Details Leaked Online"
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
                  Red Dead Redemption 2 Gameplay Details Leaked Online
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-gordon.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/alex-morgan" className="font-medium hover:text-restorative-gold">
                        Alex Morgan
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 3, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">5.2k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">342</span>
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
                  Several purported gameplay details for the highly anticipated Red Dead Redemption 2 have surfaced online after what appears to be a development document was leaked. The information, which has not been confirmed by Rockstar Games, suggests an ambitious evolution of the open-world mechanics that made the original game a beloved classic.
                </p>

                <p>
                  According to the leaked documents, which first appeared on a gaming forum before spreading across social media, Red Dead Redemption 2 will feature a massive open world that spans multiple distinct territories, each with its own ecosystem of wildlife, weather patterns, and settlements. The game reportedly takes place in 1899, predating the events of the original Red Dead Redemption by over a decade.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🤠</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Leaked Gameplay Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Protagonist Arthur Morgan is a senior member of the Van der Linde gang",
                        "Dynamic weather system affects gameplay and NPC behavior",
                        "Expanded hunting mechanics with over 200 species of animals",
                        "Deeper crafting system for weapons, clothing, and supplies",
                        "Realistic horse bonding and care mechanics",
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

                <h2>A New Protagonist and Setting</h2>
                <p>
                  The most significant revelation from the leak is confirmation that players will control a new protagonist named Arthur Morgan, a trusted enforcer in Dutch van der Linde's gang. The documents describe Morgan as a complex character with a conflicted moral compass, caught between his loyalty to Dutch and his growing doubts about the gang's direction as the era of outlaws comes to an end.
                </p>

                <p>
                  The leaked information also suggests that John Marston, the protagonist of the original Red Dead Redemption, will play a significant role in the story as a younger member of the gang, allowing players to witness pivotal events that were only mentioned in the first game.
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80"
                        alt="A rugged western landscape reminiscent of the setting in Red Dead Redemption 2"
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
                        The vast, detailed landscapes of Red Dead Redemption 2 promise an immersive wilderness experience
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Advanced Open-World Systems</h2>
                <p>
                  According to the documents, Rockstar has developed several groundbreaking systems to create what they internally refer to as "the most detailed and realistic open world ever created." The leak describes a dynamic ecosystem where predators hunt prey, weather patterns affect animal behavior, and landscapes transform with changing seasons.
                </p>

                <p>
                  One of the most intriguing aspects mentioned is an advanced NPC interaction system. Players will reportedly be able to engage with nearly every character in meaningful ways, from friendly conversations to intimidation, with each interaction potentially having consequences later in the game. NPCs will remember the player's actions and react accordingly when encountered again.
                </p>

                <h2>Expanded Survival Elements</h2>
                <p>
                  The documents suggest that Red Dead Redemption 2 will incorporate more survival elements than its predecessor. Players will need to hunt for food, maintain their weapons to prevent deterioration, and dress appropriately for different weather conditions. The camp system, which serves as the gang's mobile headquarters, will require regular contributions of supplies and money to maintain morale among members.
                </p>

                <p>
                  Hunting has reportedly been greatly expanded, with over 200 species of animals inhabiting the game world, each with realistic behaviors and habitats. The leaked information describes a detailed crafting system where various animal parts can be used to create clothing, weapon upgrades, and consumable items.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "Our goal with Red Dead Redemption 2 is to create a world that feels alive and responsive to player actions in ways that haven't been possible before. Every system in the game is designed to offer meaningful choices and consequences that shape the player's experience."
                  <footer className="mt-2 text-right text-sm">— Alleged quote from internal Rockstar document</footer>
                </blockquote>

                <h2>Realistic Horse Mechanics</h2>
                <p>
                  Horses, which were already a crucial aspect of the original Red Dead Redemption, have reportedly received significant attention in the sequel. According to the leak, players will develop bonds with their horses over time, with each animal having distinct personality traits and performance characteristics. Proper care and treatment of horses will reward players with increased stamina, better handling, and unique abilities.
                </p>

                <p>
                  The documents mention 19 different horse breeds, each with varying attributes for speed, stamina, and temperament. Players will allegedly be able to train their horses for specific situations, such as remaining calm during gunfights or navigating treacherous terrain.
                </p>

                <h2>Multiplayer Ambitions</h2>
                <p>
                  While the leaked documents primarily focus on the single-player experience, they do contain brief mentions of multiplayer components. According to the information, Red Dead Redemption 2 will feature an expanded version of the original game's multiplayer, with persistent character progression, property ownership, and gang formation mechanics.
                </p>

                <p>
                  The leak suggests that players will be able to establish camps in the multiplayer world, which can be upgraded and customized over time. These camps would serve as bases of operation for player-created gangs to plan heists, hunt together, or engage in territory disputes with rival players.
                </p>

                <h2>Rockstar's Response</h2>
                <p>
                  Rockstar Games has not officially responded to the leaked information, maintaining their characteristic secrecy regarding upcoming releases. The company has previously stated that Red Dead Redemption 2 will release in Spring 2018 for PlayStation 4 and Xbox One, though rumors of a PC version continue to circulate despite no official announcement.
                </p>

                <p>
                  Industry analysts have noted that while the leaked information appears credible and aligns with previously released trailers, fans should approach unconfirmed details with caution. Rockstar is known for keeping tight control over information about their games prior to release, making verified details scarce until official announcements.
                </p>

                <p>
                  Nevertheless, the potential features described in the leak have generated considerable excitement among fans of the original game, who have been eagerly awaiting a sequel since Red Dead Redemption's release in 2010. If the leaked details prove accurate, Red Dead Redemption 2 seems poised to set new standards for open-world gaming when it releases next year.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/red-dead-redemption" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  red dead redemption
                </Link>
                <Link href="/tag/rockstar-games" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  rockstar games
                </Link>
                <Link href="/tag/open-world" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  open world
                </Link>
                <Link href="/tag/leaks" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  leaks
                </Link>
                <Link href="/tag/western" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  western
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-gordon.jpg"
                        alt="Alex Morgan"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Alex Morgan</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Alex has been covering Rockstar Games for over a decade, specializing in open-world game design and narrative development. With deep industry connections and a background in game development, he brings unique insights into the technical and creative aspects of major titles. He previously worked as a QA tester at a major studio before transitioning to gaming journalism.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/alex-morgan"
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
                commentCount={342}
                comments={[
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "2 days ago",
                    content: "The horse bonding mechanics sound incredible. I got so attached to my horse in the first game, so I'm excited to see this expanded. The survival elements also remind me a bit of what they did with GTA 5, but hopefully more integral to the gameplay.",
                    likes: 89,
                    replies: 7
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "3 days ago",
                    content: "I'm most excited about the dynamic ecosystem with animals having realistic behaviors. The hunting in the original RDR was one of my favorite parts of the game, so having 200+ species to hunt is going to be amazing. Hope the leak is legitimate!",
                    likes: 65,
                    replies: 5
                  },
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "3 days ago",
                    content: "Playing as a member of Dutch's gang during its prime is exactly what I wanted from a sequel. Getting to see John Marston's earlier days and how everything fell apart will be fascinating. Can't wait to see how they handle Dutch's descent.",
                    likes: 103,
                    replies: 9
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Red Dead Redemption 2: All Trailer Analysis & Hidden Details",
                      category: "GAMING",
                      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                      views: "1.6M views",
                      time: "22:14",
                      url: "/gaming/rdr2-trailer-analysis"
                    },
                    {
                      title: "History of Rockstar Games: From GTA to Red Dead",
                      category: "GAMING",
                      image: "https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                      views: "987K views",
                      time: "28:36",
                      url: "/gaming/rockstar-history"
                    },
                    {
                      title: "Red Dead Redemption: The Complete Story Recap Before RDR2",
                      category: "GAMING",
                      image: "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                      views: "2.3M views",
                      time: "34:52",
                      url: "/gaming/red-dead-story-recap"
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
                        title: "Most Anticipated Open World Games of 2018",
                        category: "GAMING",
                        image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                        views: "1.2M views",
                        time: "18:24",
                        url: "/gaming/anticipated-open-world-2018"
                      },
                      {
                        title: "How Red Dead Redemption Changed Open World Design",
                        category: "GAMING",
                        image: "https://images.unsplash.com/photo-1577368211130-4bbd0349c6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        views: "875K views",
                        time: "22:16",
                        url: "/gaming/rdr-open-world-impact"
                      },
                      {
                        title: "The Evolution of Western Video Games",
                        category: "GAMING",
                        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                        views: "654K views",
                        time: "26:42",
                        url: "/gaming/western-games-evolution"
                      },
                      {
                        title: "Biggest Video Game Leaks That Turned Out To Be True",
                        category: "GAMING",
                        image: "https://images.unsplash.com/photo-1567306226614-2c4dc13c8164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        views: "1.8M views",
                        time: "24:38",
                        url: "/gaming/game-leaks-true"
                      },
                      {
                        title: "GTA 5 vs Red Dead Redemption: Rockstar's Different Approaches",
                        category: "GAMING",
                        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        views: "1.4M views",
                        time: "19:57",
                        url: "/gaming/gta-vs-rdr"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/rockstar-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      rockstar games
                    </Link>
                    <Link
                      href="/tag/open-world"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      open world
                    </Link>
                    <Link
                      href="/tag/western"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      western
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
                      href="/tag/leaks"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      leaks
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