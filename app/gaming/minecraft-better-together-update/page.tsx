// filepath: /Users/stynerstiner/Downloads/restorative-media-main/app/gaming/minecraft-better-together-update/page.tsx
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

export default function MinecraftBetterTogetherUpdate() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="minecraft-better-together"
              thumbnailUrl="/minecraft-better-together.png"
              title="Minecraft's Better Together Update unites players across platforms"
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
                  Minecraft's Better Together Update unites players across platforms
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-david.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/david-rodriguez" className="font-medium hover:text-restorative-gold">
                        David Rodriguez
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 20, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">4.2k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">318</span>
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
                  Microsoft has finally launched the long-awaited "Better Together" update for Minecraft, unifying the game across multiple platforms and enabling cross-platform play for millions of players worldwide. This ambitious update represents one of the biggest changes to the wildly popular sandbox game since its initial release.
                </p>

                <p>
                  The Better Together update, which has been in beta testing since July, effectively brings together players on Xbox One, Windows 10, VR platforms, and mobile devices (iOS, Android, and Windows Phone) into a single, cohesive ecosystem. Players on these platforms can now play together seamlessly, regardless of their chosen device.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎮</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Key Features of Better Together</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Cross-platform multiplayer across mobile, Xbox One, Windows 10, and VR",
                        "Unified Minecraft Marketplace with community creations",
                        "Servers support across all platforms",
                        "New game features including stained glass and fireworks",
                        "Improved performance and stability across all platforms",
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

                <h2>The Bedrock Engine</h2>
                <p>
                  At the heart of the Better Together update is Microsoft's decision to transition all supported platforms to the "Bedrock Engine," the same codebase used for Minecraft Pocket Edition. This common foundation enables cross-platform compatibility and ensures feature parity across devices.
                </p>

                <p>
                  "We wanted to make sure that Minecraft players on any supported device could play together and have access to the same features," said Jens Bergensten, Lead Developer at Mojang. "The Bedrock Engine allows us to develop once and deploy everywhere, meaning faster updates and more consistent experiences regardless of where you play."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/minecraft-multiplayer.png"
                        alt="Minecraft players building together across different platforms"
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
                        Players across different platforms can now collaborate on massive building projects in real-time
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Not All Platforms Included (Yet)</h2>
                <p>
                  While the Better Together update is a significant step toward platform unification, not all versions of Minecraft are currently included. Nintendo Switch support has been delayed until later this year, and the PlayStation 4 version remains separate, with Sony notably absent from the cross-platform collaboration.
                </p>

                <p>
                  When asked about PlayStation 4 support, Microsoft's head of Xbox Phil Spencer expressed openness to including Sony's platform. "We would love to have PlayStation players join the unified Minecraft experience, but that's a decision that Sony has to make. Our door remains open," Spencer commented.
                </p>

                <p>
                  The Java Edition of Minecraft for PC—the original version of the game developed by Markus "Notch" Persson—will also remain separate from the Bedrock versions, continuing to receive its own updates. Microsoft has assured Java players that this version will continue to be supported for the foreseeable future.
                </p>

                <h2>Marketplace Expansion</h2>
                <p>
                  The Better Together update also expands the Minecraft Marketplace to all supported platforms. The Marketplace, which launched earlier this year on mobile and Windows 10, allows players to purchase community-made content using a new virtual currency called "Minecraft Coins."
                </p>

                <p>
                  Content creators can sell skins, texture packs, worlds, and adventures through the curated Marketplace, with creators receiving a portion of the revenue. This system now extends to Xbox One, creating new opportunities for community creators to reach a wider audience.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "The Better Together Update represents our commitment to Minecraft as a creative platform. By unifying our players and enabling community monetization across more devices, we're empowering both players and creators to push the boundaries of what's possible in Minecraft."
                  <footer className="mt-2 text-right text-sm">— Helen Chiang, Head of Minecraft at Microsoft</footer>
                </blockquote>

                <h2>Technical Improvements</h2>
                <p>
                  Beyond cross-platform play, the Better Together update includes numerous technical improvements and new features. Players across all supported platforms can now enjoy enhanced graphics, including stained glass, fireworks with customizable effects, parrots, banners, armor stands, and jukebox functionality.
                </p>

                <p>
                  The update also brings the ability to save multiplayer worlds on servers, rather than being tied to a single host's device. These "Realms" allow players to access their worlds even when the original creator is offline, making collaborative building projects more accessible.
                </p>

                <p>
                  Performance improvements are another significant aspect of the update, with the Bedrock Engine offering better stability and faster load times across all platforms. This is particularly noticeable on mobile devices, where the game now runs more smoothly even on older hardware.
                </p>

                <h2>The Future of Minecraft</h2>
                <p>
                  With over 130 million monthly active users across all platforms, Minecraft continues to be one of the most popular games in the world more than eight years after its initial release. The Better Together update represents Microsoft's long-term vision for the franchise following its $2.5 billion acquisition of Mojang in 2014.
                </p>

                <p>
                  Looking ahead, Microsoft has already announced the next major update, called "The Update Aquatic," which will overhaul the game's underwater environments with new mobs, blocks, and mechanics. This update is expected to arrive simultaneously across all Bedrock platforms, showcasing the benefits of the unified codebase.
                </p>

                <p>
                  As gaming moves increasingly toward cross-platform experiences, Minecraft's Better Together update stands as one of the most ambitious attempts yet to break down the walls between gaming ecosystems. Whether other major titles will follow Minecraft's lead remains to be seen, but for now, millions of Minecraft players can finally play together in a truly unified experience.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/minecraft" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  minecraft
                </Link>
                <Link href="/tag/microsoft" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  microsoft
                </Link>
                <Link href="/tag/cross-platform" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  cross-platform
                </Link>
                <Link href="/tag/mojang" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mojang
                </Link>
                <Link href="/tag/gaming-news" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  gaming news
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-david.jpg"
                        alt="David Rodriguez"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">David Rodriguez</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        David is a gaming industry analyst and journalist who has been covering Microsoft and Minecraft for over six years. He specializes in platform ecosystems and the business of gaming. When not writing, he's building elaborate redstone contraptions in Minecraft.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/david-rodriguez"
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
                commentCount={247}
                comments={[
                  {
                    author: "CraftMaster2000",
                    avatar: "/commenter-dylan.jpg",
                    time: "1 day ago",
                    content: "Finally! I've been waiting for this update since it was announced. Now I can play with my friends who are on mobile while I'm on my Xbox. This is a game-changer!",
                    likes: 78,
                    replies: 6
                  },
                  {
                    author: "RedstoneRuler",
                    avatar: "/commenter-gordon.jpg",
                    time: "2 days ago",
                    content: "Really disappointed that PS4 isn't included in the cross-play. Sony needs to get with the program and stop isolating their players.",
                    likes: 124,
                    replies: 12
                  },
                  {
                    author: "BlockBuilder99",
                    avatar: "/commenter-marie.jpg",
                    time: "3 days ago",
                    content: "The new marketplace seems like a money grab to me. I've been using free mods on Java Edition for years. Not sure how I feel about Microsoft monetizing community content.",
                    likes: 92,
                    replies: 18
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Better Together Update: Everything You Need to Know",
                      category: "GAMING",
                      image: "/minecraft-better-together-guide.png",
                      views: "1.7M views",
                      time: "15:42",
                      url: "/gaming/minecraft-better-together-guide"
                    },
                    {
                      title: "Cross-Platform Building Challenge: Mobile vs. Console",
                      category: "GAMING",
                      image: "/minecraft-building-challenge.png",
                      views: "985K views",
                      time: "22:18",
                      url: "/gaming/minecraft-building-challenge"
                    },
                    {
                      title: "Minecraft Marketplace: Creator Economy Explained",
                      category: "GAMING",
                      image: "/minecraft-marketplace-explained.png",
                      views: "723K views",
                      time: "18:05",
                      url: "/gaming/minecraft-marketplace-explained"
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
                        title: "How to Join Cross-Platform Servers in Minecraft",
                        category: "GAMING",
                        image: "/minecraft-cross-platform-servers.png",
                        views: "1.2M views",
                        time: "12:24",
                        url: "/gaming/minecraft-cross-platform-servers"
                      },
                      {
                        title: "Minecraft Java vs. Bedrock: Which Is Better?",
                        category: "GAMING",
                        image: "/minecraft-java-vs-bedrock.png",
                        views: "1.8M views",
                        time: "19:37",
                        url: "/gaming/minecraft-java-vs-bedrock"
                      },
                      {
                        title: "The History of Minecraft: From Indie Sensation to Microsoft Acquisition",
                        category: "GAMING",
                        image: "/minecraft-history.png",
                        views: "2.3M views",
                        time: "24:16",
                        url: "/gaming/minecraft-history"
                      },
                      {
                        title: "Creating Custom Minecraft Skins for the Marketplace",
                        category: "TECH",
                        image: "/minecraft-custom-skins.png",
                        views: "654K views",
                        time: "16:42",
                        url: "/tech/minecraft-custom-skins"
                      },
                      {
                        title: "Top 10 Minecraft Creations of 2017",
                        category: "GAMING",
                        image: "/minecraft-top-creations-2017.png",
                        views: "3.1M views",
                        time: "23:18",
                        url: "/gaming/minecraft-top-creations-2017"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/minecraft"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      minecraft
                    </Link>
                    <Link
                      href="/tag/cross-platform"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cross-platform
                    </Link>
                    <Link
                      href="/tag/microsoft-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      microsoft games
                    </Link>
                    <Link
                      href="/tag/game-updates"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      game updates
                    </Link>
                    <Link
                      href="/tag/sandbox-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      sandbox games
                    </Link>
                    <Link
                      href="/tag/mojang"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mojang
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