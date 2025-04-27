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

export default function LastOfUsPartIIArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="last-of-us-part-ii-update"
              thumbnailUrl="/last-of-us.png"
              title="The Last of Us Part II Development Update From Naughty Dog"
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
                  The Last of Us Part II Development Update From Naughty Dog
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
                      <Link href="/author/alex-williams" className="font-medium hover:text-restorative-gold">
                        Alex Williams
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 4, 2017</div>
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
                    <span className="text-sm">298</span>
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
                  Naughty Dog has shared a comprehensive development update on The Last of Us Part II, providing fans with new insights into the highly anticipated sequel's progress. The studio revealed that the game has reached a significant milestone in its development cycle, with all core gameplay systems now implemented and functional.
                </p>

                <p>
                  The update came during a PlayStation showcase event where Neil Druckmann, Creative Director at Naughty Dog, discussed the team's vision for the sequel to 2013's critically acclaimed post-apocalyptic adventure. While no specific release date was announced, Druckmann confirmed that development is proceeding as planned, with the team now focused on content creation and refinement.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎮</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Development Milestones</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Core gameplay systems completed and in testing phase",
                        "Mocap sessions for primary narrative sequences completed",
                        "Troy Baker and Ashley Johnson back as Joel and Ellie",
                        "New characters and environments significantly expanded from the original",
                        "Game engine enhancements for improved graphics and physics",
                      ].map((milestone, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>A Darker Journey</h2>
                <p>
                  According to Druckmann, The Last of Us Part II will feature a narrative that's significantly darker and more emotionally challenging than its predecessor. Set five years after the events of the first game, the sequel will continue to follow Ellie, now 19 years old, as she navigates a world still ravaged by the Cordyceps fungal infection and the often brutal human survivors.
                </p>

                <p>
                  "With The Last of Us Part II, we wanted to examine the cycle of violence and the cost of seeking vengeance," Druckmann explained. "We're exploring complex themes of hate, trauma, and the lengths people will go to for the ones they love. It's been a challenging story to tell, but we believe players will connect with these characters in profound ways."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/last-of-us.png"
                        alt="Ellie from The Last of Us Part II looking determined with a weapon in hand"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          SEQUEL
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Ellie returns as the protagonist in The Last of Us Part II, now older and driven by a mysterious vendetta
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Expanded Gameplay Systems</h2>
                <p>
                  The development update provided new details about the game's expanded gameplay mechanics. Building upon the survival mechanics of the original, The Last of Us Part II will feature more sophisticated stealth systems, expanded crafting options, and increased enemy AI complexity. Druckmann highlighted that enemies will communicate more realistically, coordinate searches, and adapt to player tactics.
                </p>

                <p>
                  "We've rebuilt our combat systems from the ground up," said Anthony Newman, Co-Game Director. "Movement is more fluid, the feel of the weapons has been refined, and the AI creates incredibly tense encounters. We want players to feel completely immersed in Ellie's desperate fight for survival."
                </p>

                <h2>Environmental Storytelling</h2>
                <p>
                  One aspect emphasized in the update was Naughty Dog's commitment to environmental storytelling. The game will feature diverse locations across the post-apocalyptic United States, each telling its own story of survival and collapse. From overgrown urban environments to mountainous wilderness, these settings will provide context to the world's history since the outbreak.
                </p>

                <p>
                  The team has reportedly gone to extraordinary lengths to ensure these environments feel authentic, with detailed world-building that reflects how different communities have adapted to life after the pandemic. Artists have studied how materials decay over time and how nature reclaims human-made structures to create believable settings.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "Every environment tells a story. We want players to piece together what happened in these spaces just by exploring and observing. The environmental storytelling is as important to us as the main narrative."
                  <footer className="mt-2 text-right text-sm">— Neil Druckmann, Creative Director</footer>
                </blockquote>

                <h2>Technological Advancements</h2>
                <p>
                  The update also touched on the technological improvements enabling the team's creative vision. Naughty Dog has significantly enhanced its proprietary engine to take full advantage of the PlayStation 4's hardware. These improvements include more detailed character models with advanced facial animations, enhanced lighting systems, and more sophisticated physics for environmental interactions.
                </p>

                <p>
                  Motion capture techniques have also evolved since the development of the first game. The team is using new technologies to capture subtle facial expressions and body movements, allowing for more nuanced performances from the cast. Troy Baker and Ashley Johnson, returning as Joel and Ellie respectively, have reportedly delivered emotionally charged performances that push the boundaries of storytelling in games.
                </p>

                <h2>Release Window</h2>
                <p>
                  While Naughty Dog did not announce a specific release date, the studio reassured fans that development is progressing well. Industry analysts speculate that The Last of Us Part II might target a late 2018 or early 2019 release, though the studio has emphasized that the game will launch "when it's ready."
                </p>

                <p>
                  "We're taking the time we need to get this right," Druckmann concluded. "The Last of Us means so much to our team and to fans around the world. We're committed to delivering a sequel that honors that legacy and pushes the medium forward in meaningful ways."
                </p>

                <p>
                  The Last of Us Part II continues to be one of the most anticipated PlayStation exclusives in development. With this latest update providing reassurance about the game's progress, fans can look forward to more details in the coming months as Naughty Dog prepares to share more of Ellie's next chapter.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/last-of-us" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  last of us
                </Link>
                <Link href="/tag/naughty-dog" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  naughty dog
                </Link>
                <Link href="/tag/playstation" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  playstation
                </Link>
                <Link href="/tag/survival-horror" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  survival horror
                </Link>
                <Link href="/tag/exclusive" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  exclusive
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-thomas.jpg"
                        alt="Alex Williams"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Alex Williams</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Alex is a senior gaming correspondent specializing in narrative-driven games and PlayStation exclusives. With over a decade of industry experience, he has interviewed numerous game directors and writers, including Neil Druckmann and Amy Hennig. Alex is particularly interested in how games tell stories and create emotional connections with players.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/alex-williams"
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
                commentCount={298}
                comments={[
                  {
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "I still remember the emotional impact the first game had on me. From what Neil is saying, it sounds like the sequel will be even more hard-hitting. Can't wait to see how Ellie's story continues.",
                    likes: 74,
                    replies: 6
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "The improved stealth mechanics sound promising. The original had great tension during those encounters, but the AI could be a bit predictable after a while.",
                    likes: 58,
                    replies: 3
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "4 days ago",
                    content: "I'm concerned about the 'darker than the original' comments. The first game already pushed me to my emotional limits! But I trust Naughty Dog to tell a meaningful story.",
                    likes: 42,
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
                      title: "The Last of Us Part II - Character Evolution: From Ellie to Protagonist",
                      category: "GAMING",
                      image: "/ellie-evolution.png",
                      views: "967K views",
                      time: "14:23",
                      url: "/gaming/ellie-evolution"
                    },
                    {
                      title: "Naughty Dog's Storytelling Evolution: From Crash Bandicoot to The Last of Us",
                      category: "GAMING",
                      image: "/naughty-dog-evolution.png",
                      views: "723K views",
                      time: "21:45",
                      url: "/gaming/naughty-dog-evolution"
                    },
                    {
                      title: "The Making of The Last of Us: Behind the Scenes Documentary",
                      category: "GAMING",
                      image: "/last-of-us-making-of.png",
                      views: "1.2M views",
                      time: "32:18",
                      url: "/gaming/last-of-us-making-of"
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
                        title: "Troy Baker Interview: Returning as Joel in The Last of Us Part II",
                        category: "GAMING",
                        image: "/troy-baker-interview.png",
                        views: "845K views",
                        time: "18:37",
                        url: "/gaming/troy-baker-interview"
                      },
                      {
                        title: "The Last of Us Part II - Everything We Know So Far",
                        category: "GAMING",
                        image: "/last-of-us-2-details.png",
                        views: "1.5M views",
                        time: "15:22",
                        url: "/gaming/last-of-us-2-details"
                      },
                      {
                        title: "PlayStation's Upcoming Exclusives: 2018-2019 Preview",
                        category: "GAMING",
                        image: "/playstation-exclusives.png",
                        views: "934K views",
                        time: "24:18",
                        url: "/gaming/playstation-exclusives-preview"
                      },
                      {
                        title: "The Last of Us Remastered - Retrospective Analysis",
                        category: "GAMING",
                        image: "/last-of-us-retrospective.png",
                        views: "782K views",
                        time: "26:45",
                        url: "/gaming/last-of-us-retrospective"
                      },
                      {
                        title: "Post-Apocalyptic Storytelling in Games: From Fallout to The Last of Us",
                        category: "GAMING",
                        image: "/post-apocalyptic-games.png",
                        views: "623K views",
                        time: "19:52",
                        url: "/gaming/post-apocalyptic-games"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/playstation-4"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      playstation 4
                    </Link>
                    <Link
                      href="/tag/exclusive-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      exclusive games
                    </Link>
                    <Link
                      href="/tag/naughty-dog"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      naughty dog
                    </Link>
                    <Link
                      href="/tag/story-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      story games
                    </Link>
                    <Link
                      href="/tag/action-adventure"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      action adventure
                    </Link>
                    <Link
                      href="/tag/survival-horror"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      survival horror
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