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

export default function MarvelCapcomArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="marvel-capcom-ironman-megaman"
              thumbnailUrl="/marvel-capcom.png"
              title="New Marvel Vs. Capcom: Infinite Gameplay Video Reveals Iron Man vs Mega Man"
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
                  New Marvel Vs. Capcom: Infinite Gameplay Video Reveals Iron Man vs Mega Man
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
                      <Link href="/author/michael-wong" className="font-medium hover:text-restorative-gold">
                        Michael Wong
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">2.1k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">136</span>
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
                  Capcom has released a new gameplay video for Marvel vs. Capcom: Infinite showcasing an intense battle between Iron Man and Mega Man. The footage, which debuted at Gamescom 2017, offers the most detailed look yet at how these iconic characters from different universes will square off in the upcoming crossover fighting game.
                </p>

                <p>
                  The four-minute video demonstrates the unique fighting styles of both characters, with Iron Man utilizing his repulsor blasts and advanced technology while Mega Man cycles through his various weapons and abilities. The gameplay shows off the game's refined combat system, which appears more accessible than previous entries while still maintaining the depth that fighting game enthusiasts expect.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">⚔️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Marvel vs. Capcom: Infinite - Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "New 2v2 team battle system, replacing the 3v3 format from previous games",
                        "Infinity Stones that grant unique abilities and stat boosts",
                        "Simplified control scheme with accessible combos for newcomers",
                        "Cinematic story mode featuring characters from both universes",
                        "30 characters at launch with more coming as DLC",
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

                <h2>Iron Man vs. Mega Man: A Battle of Tech Titans</h2>
                <p>
                  The matchup between Iron Man and Mega Man is particularly interesting given both characters' technological origins. In the gameplay footage, Iron Man appears to be a highly mobile character with a focus on air superiority, utilizing his flight capabilities to maintain positional advantage. His arsenal includes repulsor beams, the Unibeam chest blast, and various missile attacks, all rendered with impressive visual effects.
                </p>

                <p>
                  Mega Man, on the other hand, takes a more methodical approach, utilizing his signature weapon-copying abilities to access a varied arsenal. The Blue Bomber's moves are heavily inspired by his lengthy video game history, with weapons like Metal Blade, Leaf Shield, and Flame Blast all making appearances. A particular highlight shows Mega Man using Rush, his robot dog companion, as part of a complex combo sequence.
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/marvel-vs-capcom-battle.jpg"
                        alt="Iron Man facing off against Mega Man in Marvel vs. Capcom: Infinite"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          GAMEPLAY
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Iron Man and Mega Man clash in a high-energy battle, showcasing special moves and Infinity Stone powers
                      </p>
                    </div>
                  </div>
                </div>

                <h2>The Infinity Stone System</h2>
                <p>
                  The new gameplay video also highlights one of Marvel vs. Capcom: Infinite's most significant additions: the Infinity Stone system. Players can choose one of six Infinity Stones before battle, each granting unique abilities. In the demonstration, Iron Man utilizes the Power Stone, enhancing his damage output and granting access to a screen-clearing super move, while Mega Man employs the Time Stone to increase his mobility and execute time-slowing techniques.
                </p>

                <p>
                  "The Infinity Stones really change how each character plays," explained Peter "Combofiend" Rosas, Associate Producer at Capcom. "They allow players to customize their favorite characters to better suit their playstyle, or to shore up weaknesses in certain matchups. This creates a huge amount of strategic depth beyond just picking your team."
                </p>

                <h2>A More Accessible Fighting Game</h2>
                <p>
                  One aspect that becomes clear from the footage is Capcom's focus on making Marvel vs. Capcom: Infinite more accessible to newcomers. While previous entries in the series were known for their complex mechanics and demanding execution requirements, Infinite appears to feature more straightforward controls and combo systems.
                </p>

                <p>
                  "We wanted to make a game that anyone could pick up and enjoy, while still providing the depth that fighting game veterans crave," said Mike Evans, Director of Production at Capcom. "The auto-combo system and simplified controls give new players a fighting chance, but there's still so much to master in terms of team synergy, Infinity Stone usage, and advanced techniques."
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "This is the most accessible Marvel vs. Capcom game we've ever made, but don't mistake accessibility for lack of depth. The combo potential and strategic options are still incredibly vast."
                  <footer className="mt-2 text-right text-sm">— Mike Evans, Director of Production</footer>
                </blockquote>

                <h2>Roster Controversies and X-Men Absence</h2>
                <p>
                  While the new gameplay footage has generated excitement, it comes amid ongoing discussions about the game's roster. Marvel vs. Capcom: Infinite has drawn criticism for the absence of X-Men characters, who were staples in previous entries. Characters like Wolverine, Magneto, and Storm have been replaced with figures more prominently featured in the Marvel Cinematic Universe.
                </p>

                <p>
                  When questioned about this decision, Marvel Games' Bill Rosemann stated: "We're focusing on characters that our fans know and love from the Marvel Cinematic Universe, plus some other favorites. That's not to say we're forgetting about X-Men entirely, but right now we're concentrating on Avengers, Guardians of the Galaxy, and other characters featured in current Marvel Studios films."
                </p>

                <h2>Release Date and Platforms</h2>
                <p>
                  Marvel vs. Capcom: Infinite is scheduled for release on September 19, 2017, for PlayStation 4, Xbox One, and PC. The game will launch with 30 characters, with more to be added as downloadable content. A Deluxe Edition will include the Character Pass, granting access to six post-launch DLC fighters, and a Collector's Edition featuring four character dioramas will also be available.
                </p>

                <p>
                  With its release just a few weeks away, the Iron Man vs. Mega Man gameplay footage serves as an enticing preview of what's to come. Whether you're a fighting game enthusiast or simply a fan of these iconic universes, Marvel vs. Capcom: Infinite seems poised to deliver a compelling crossover experience that bridges two beloved worlds.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/marvel-vs-capcom" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  marvel vs capcom
                </Link>
                <Link href="/tag/fighting-games" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  fighting games
                </Link>
                <Link href="/tag/capcom" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  capcom
                </Link>
                <Link href="/tag/marvel" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  marvel
                </Link>
                <Link href="/tag/esports" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  esports
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-dylan.jpg"
                        alt="Michael Wong"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Michael Wong</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Michael is a gaming journalist who specializes in fighting games and competitive esports. A former semi-professional Street Fighter player, he brings both technical knowledge and a player's perspective to his coverage. When not writing about games, he streams fighting game tournaments and tutorials.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/michael-wong"
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
                commentCount={192}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "3 days ago",
                    content: "The roster is definitely smaller than MvC3, but I'm excited to see how the Infinity Stones system changes the gameplay meta. It's a fresh take on the series mechanics.",
                    likes: 47,
                    replies: 4
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "4 days ago",
                    content: "Really disappointed that X-Men characters are missing from the lineup. The Marvel vs Capcom series has always featured iconic X-Men fighters like Wolverine and Magneto.",
                    likes: 86,
                    replies: 7
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "5 days ago",
                    content: "The cinematic story mode looks promising. It's about time fighting games put more effort into single-player content rather than just focusing on competitive play.",
                    likes: 32,
                    replies: 2
                  }
                ]}
              />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos 
                  videos={[
                    {
                      title: "Marvel vs Capcom Infinite - All Character Supers and Hyper Combos",
                      category: "GAMING",
                      image: "/mvc-infinite-supers.png",
                      views: "964K views",
                      time: "18:27",
                      url: "/gaming/mvc-infinite-supers"
                    },
                    {
                      title: "Understanding the Infinity Stone System in MvC Infinite",
                      category: "GAMING",
                      image: "/infinity-stones-guide.png",
                      views: "578K views",
                      time: "14:32",
                      url: "/gaming/infinity-stones-guide"
                    },
                    {
                      title: "The Evolution of Marvel vs Capcom: From X-Men vs Street Fighter to Infinite",
                      category: "GAMING",
                      image: "/mvc-evolution.png",
                      views: "842K views",
                      time: "22:15",
                      url: "/gaming/mvc-evolution"
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
                        title: "Marvel vs Capcom Infinite: Beginner's Guide",
                        category: "GAMING",
                        image: "/mvc-beginners-guide.png",
                        views: "726K views",
                        time: "15:48",
                        url: "/gaming/mvc-beginners-guide"
                      },
                      {
                        title: "Top 10 Characters in Marvel vs Capcom Infinite",
                        category: "GAMING",
                        image: "/mvc-top-characters.png",
                        views: "893K views",
                        time: "18:22",
                        url: "/gaming/mvc-top-characters"
                      },
                      {
                        title: "The History of Capcom Fighting Games",
                        category: "GAMING",
                        image: "/capcom-fighting-history.png",
                        views: "1.1M views",
                        time: "24:35",
                        url: "/gaming/capcom-fighting-history"
                      },
                      {
                        title: "Marvel vs Capcom Infinite: Story Mode Full Cutscenes",
                        category: "GAMING",
                        image: "/mvc-story-cutscenes.png",
                        views: "752K views",
                        time: "42:18",
                        url: "/gaming/mvc-story-cutscenes"
                      },
                      {
                        title: "How to Use Every Infinity Stone in MvC Infinite",
                        category: "GAMING",
                        image: "/infinity-stones-tutorial.png",
                        views: "634K views",
                        time: "16:42",
                        url: "/gaming/infinity-stones-tutorial"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/fighting-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fighting games
                    </Link>
                    <Link
                      href="/tag/esports"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      esports
                    </Link>
                    <Link
                      href="/tag/competitive-gaming"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      competitive gaming
                    </Link>
                    <Link
                      href="/tag/arcade"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      arcade
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