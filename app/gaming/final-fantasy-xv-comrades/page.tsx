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

export default function FinalFantasyXVComradesArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="ffxv-comrades-trailer"
              thumbnailUrl="/final-fantasy-xv.png"
              title="Final Fantasy XV Multiplayer Expansion 'Comrades' Gets Release Date"
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
                  Final Fantasy XV Multiplayer Expansion 'Comrades' Gets Release Date
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
                      <Link href="/author/ryota-tanaka" className="font-medium hover:text-restorative-gold">
                        Ryota Tanaka
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 4, 2017</div>
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
                    <span className="text-sm">154</span>
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
                  Square Enix has officially announced the release date for "Comrades," the long-awaited multiplayer expansion for Final Fantasy XV. The online multiplayer mode will launch on October 31, 2017, for PlayStation 4 and Xbox One, allowing up to four players to team up and take on quests together in the world of Eos for the first time in the game's history.
                </p>

                <p>
                  The announcement came during a special live stream event where director Hajime Tabata and global brand manager Akio Ofuji shared new details about the expansion and showed off extended gameplay footage. The "Comrades" expansion will be available to players who purchased the Final Fantasy XV Season Pass or can be purchased separately.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">👥</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Comrades Expansion Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Create and customize your own character with unique appearance and abilities",
                        "Set between Chapters 13 and 14 of the main story, filling in narrative gaps",
                        "Play as a member of the Kingsglaive, wielding royal powers and magic",
                        "Undertake quests either solo with AI companions or with up to three friends online",
                        "Earn new weapons, collect Royal Sigils, and grow your character's strength",
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

                <h2>Setting and Story Details</h2>
                <p>
                  According to Tabata, the Comrades expansion is set during the 10-year time gap between Chapters 13 and 14 of the main game's story, a period when the world of Eos was plunged into darkness. Players will take on the role of a survivor from the Kingsglaive, the elite fighting force introduced in the companion film "Kingsglaive: Final Fantasy XV," as they fight to protect what remains of civilization.
                </p>

                <p>
                  "This expansion allows players to experience a crucial part of the FFXV story that wasn't shown in the main game," Tabata explained. "You'll discover what happened during those missing years and how the world changed in Noctis's absence. It's an important piece of the overall narrative that fans have been asking for."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/ffxv-comrades-gameplay.jpg"
                        alt="Four players teaming up in Final Fantasy XV: Comrades"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          MULTIPLAYER
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Players can team up with friends to take on challenging enemies and missions in a world plunged into darkness
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Character Customization</h2>
                <p>
                  One of the most significant features of the Comrades expansion is the ability to create and customize your own character, a first for the traditionally single-player franchise. The character creator shown during the live stream appeared impressively detailed, allowing players to adjust facial features, hairstyles, clothing, and even select their character's hometown from various regions of Eos.
                </p>

                <p>
                  Beyond appearances, players will be able to customize their combat style by equipping different weapons that offer access to unique abilities. Similar to the main game, characters can wield swords, daggers, greatswords, shields, firearms, and polearms, each with different attack patterns and strategic advantages. Additionally, players can collect Royal Sigils that grant special powers inherited from past kings of Lucis.
                </p>

                <h2>Gameplay and Progression</h2>
                <p>
                  The gameplay in Comrades centers around undertaking missions dispatched from survivors' outposts. Players can choose to tackle these quests solo with AI companions or team up with up to three friends online. Missions range from defending settlements from daemon attacks to gathering resources and escorting important NPCs through dangerous territory.
                </p>

                <p>
                  "We wanted to create varied content that would keep players engaged beyond the main storyline," said Akio Ofuji. "There are combat-focused missions for action fans, gathering quests that reveal more about the world, and special boss encounters that will require teamwork and strategy to overcome."
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "With Comrades, we're not just adding multiplayer to Final Fantasy XV—we're creating a unique experience that expands the world and story while offering new ways to play with friends. It's the most ambitious post-launch content we've created for the game."
                  <footer className="mt-2 text-right text-sm">— Hajime Tabata, Director</footer>
                </blockquote>

                <h2>Returning Characters</h2>
                <p>
                  Fans will be pleased to learn that several familiar faces from the main game will appear in the Comrades expansion. Notable characters confirmed during the live stream include Cor Leonis, the Marshal of the Crownsguard; Iris Amicitia, Gladiolus's younger sister; and Cindy Aurum, the skilled mechanic from Hammerhead. Each character plays a role in the ongoing efforts to preserve civilization during the World of Ruin.
                </p>

                <p>
                  Additionally, while not confirmed, Tabata hinted that players might encounter older versions of Gladiolus, Ignis, and Prompto during their adventures, potentially revealing what Noctis's companions were doing during the time gap. "We know fans are curious about what happened to these beloved characters, and Comrades gives us a chance to explore that," Tabata teased.
                </p>

                <h2>Technical Improvements and Updates</h2>
                <p>
                  The development team has made significant technical improvements since the Comrades beta test held in August. According to Tabata, matchmaking has been streamlined, loading times reduced, and overall connection stability enhanced. The team has also implemented a new "Quick Play" option that allows players to jump into missions more rapidly.
                </p>

                <p>
                  Beyond the initial release, Square Enix plans to support Comrades with regular updates adding new quests, weapons, and customization options. "We see Comrades as an evolving experience that will grow over time," Ofuji explained. "We have plans for seasonal events, challenging boss encounters, and additional story content that will roll out in the months following launch."
                </p>

                <p>
                  Final Fantasy XV: Comrades launches on October 31, 2017, for PlayStation 4 and Xbox One, with a PC release expected to coincide with the launch of Final Fantasy XV Windows Edition in early 2018. The expansion will be included for Season Pass holders or available for individual purchase at $19.99.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/final-fantasy-xv" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  final fantasy xv
                </Link>
                <Link href="/tag/square-enix" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  square enix
                </Link>
                <Link href="/tag/jrpg" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  jrpg
                </Link>
                <Link href="/tag/multiplayer" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  multiplayer
                </Link>
                <Link href="/tag/dlc" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  dlc
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-gordon.jpg"
                        alt="Ryota Tanaka"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Ryota Tanaka</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Ryota is a specialist in Japanese RPGs and gaming culture, with a particular focus on Square Enix titles. Born in Tokyo and now based in San Francisco, he brings unique cultural insights to his coverage. He has completed every mainline Final Fantasy game and maintains a comprehensive collection of rare series memorabilia.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/ryota-tanaka"
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
                commentCount={178}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "So excited for this DLC! I've been waiting for a proper multiplayer Final Fantasy experience for ages. The character customization looks amazing too.",
                    likes: 48,
                    replies: 3
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "The gameplay looks solid, but I'm more interested in how they're going to tie this into the main story. It sounds like they're really filling in some narrative gaps here.",
                    likes: 37,
                    replies: 2
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "4 days ago",
                    content: "I hope they make the matchmaking system robust. That's been a problem with some of Square Enix's online games in the past.",
                    likes: 25,
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
                      title: "Final Fantasy XV: Comrades - Extended Gameplay Demo",
                      category: "GAMING",
                      image: "/ffxv-comrades-gameplay.png",
                      views: "865K views",
                      time: "18:42",
                      url: "/gaming/ffxv-comrades-gameplay"
                    },
                    {
                      title: "Character Creation in Final Fantasy XV: Comrades",
                      category: "GAMING",
                      image: "/ffxv-character-creation.png",
                      views: "623K views",
                      time: "12:18",
                      url: "/gaming/ffxv-character-creation"
                    },
                    {
                      title: "Final Fantasy XV: All DLC Explained",
                      category: "GAMING",
                      image: "/ffxv-dlc-guide.png",
                      views: "752K views",
                      time: "14:35",
                      url: "/gaming/ffxv-dlc-guide"
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
                        title: "Top 10 Final Fantasy XV Boss Fights",
                        category: "GAMING",
                        image: "/ffxv-boss-fights.png",
                        views: "945K views",
                        time: "16:25",
                        url: "/gaming/ffxv-boss-fights"
                      },
                      {
                        title: "The Story of Final Fantasy XV Explained",
                        category: "GAMING",
                        image: "/ffxv-story-explained.png",
                        views: "1.2M views",
                        time: "24:30",
                        url: "/gaming/ffxv-story-explained"
                      },
                      {
                        title: "Final Fantasy XV: Episode Gladiolus Review",
                        category: "GAMING",
                        image: "/ffxv-gladiolus-dlc.png",
                        views: "621K views",
                        time: "12:18",
                        url: "/gaming/ffxv-gladiolus-review"
                      },
                      {
                        title: "Final Fantasy XV: Episode Prompto Review",
                        category: "GAMING",
                        image: "/ffxv-prompto-dlc.png",
                        views: "587K views",
                        time: "11:45",
                        url: "/gaming/ffxv-prompto-review"
                      },
                      {
                        title: "Evolution of Final Fantasy Multiplayer: From XI to XV",
                        category: "GAMING",
                        image: "/final-fantasy-multiplayer.png",
                        views: "724K views",
                        time: "18:32",
                        url: "/gaming/final-fantasy-multiplayer-evolution"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/rpgs"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      rpgs
                    </Link>
                    <Link
                      href="/tag/final-fantasy"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      final fantasy
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
                      href="/tag/open-world"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      open world
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