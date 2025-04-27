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

export default function OverwatchLeagueArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="overwatch-league-teams"
              thumbnailUrl="/overwatch-league.png"
              title="Overwatch League Teams Announced, Includes Teams From Four Continents"
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
                  Overwatch League Teams Announced, Includes Teams From Four Continents
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
                      <Link href="/author/sarah-johnson" className="font-medium hover:text-restorative-gold">
                        Sarah Johnson
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 4, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.9k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">247</span>
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
                  Blizzard Entertainment has officially revealed the first seven teams that will compete in the inaugural season of the Overwatch League, marking a significant milestone for the company's ambitious esports initiative. The announcement features franchises spanning four continents, with teams based in major cities across the United States, China, South Korea, and the United Kingdom.
                </p>

                <p>
                  The announcement comes after months of speculation about which organizations would secure spots in what is being positioned as the world's premier Overwatch competition. The league represents a bold new approach to esports, implementing a city-based franchise model similar to traditional sports leagues rather than the organization-based structure common in competitive gaming.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎮</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Confirmed Overwatch League Teams</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Boston, USA - Owned by Robert Kraft, Chairman and CEO of the Kraft Group",
                        "New York, USA - Owned by Jeff Wilpon, COO of the New York Mets",
                        "San Francisco, USA - Owned by Andy Miller, Chairman of NRG Esports",
                        "Los Angeles, USA - Owned by Noah Whinston, CEO of Immortals",
                        "Miami-Orlando, USA - Owned by Ben Spoont, CEO of Misfits Gaming",
                        "Shanghai, China - Owned by NetEase, Inc.",
                        "Seoul, South Korea - Owned by Kevin Chou, co-founder of Kabam",
                      ].map((team, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{team}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>A New Model for Esports</h2>
                <p>
                  What makes the Overwatch League unique is its city-based approach, which Blizzard hopes will foster local fan communities similar to those in traditional sports. Each team will represent a major global city, with the goal of eventually hosting home and away games in their local markets. This model is a significant departure from the norm in esports, where teams are typically associated with organizations rather than locations.
                </p>

                <p>
                  "We're building this league for fans," said Mike Morhaime, CEO and co-founder of Blizzard Entertainment. "Overwatch already connects over 30 million players worldwide, and now we're designing the Overwatch League to bring together millions more in celebration of exceptional Overwatch gameplay. We've seen how passionate Overwatch players are about the game, and we know they'll love cheering on hometown teams in the Overwatch League."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/overwatch-league-teams.jpg"
                        alt="Overwatch League team owners and Blizzard executives at announcement event"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          ESPORTS
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Team owners and Blizzard executives gathered for the official Overwatch League team announcement
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Traditional Sports Owners Enter the Arena</h2>
                <p>
                  Perhaps the most notable aspect of the announcement is the involvement of several high-profile traditional sports executives and organizations. Robert Kraft, owner of the New England Patriots NFL team, has secured the Boston franchise, while Jeff Wilpon, COO of the New York Mets MLB team, will control the New York franchise. Their participation lends significant credibility to Blizzard's ambitious project and signals growing mainstream interest in esports.
                </p>

                <p>
                  "We have been exploring the esports market for a number of years and have been waiting for the right opportunity to enter," said Robert Kraft. "The incredible global success of Overwatch since its launch, coupled with the league's meticulous focus on a structure and strategy that clearly represents the future of esports, made this the obvious entry point for the Kraft Group."
                </p>

                <h2>Global Reach from Day One</h2>
                <p>
                  The initial roster of teams shows Blizzard's commitment to making the Overwatch League a truly global competition from its inception. While five of the seven announced teams are based in the United States, the inclusion of franchises in Seoul, South Korea, and Shanghai, China, emphasizes the international appeal of both Overwatch and esports in general.
                </p>

                <p>
                  South Korea has long been recognized as an esports powerhouse, and many of the world's top Overwatch players hail from the country. Meanwhile, China represents one of the largest gaming markets in the world. These strategic locations will help the league tap into established fan bases while further growing the game's popularity internationally.
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "We're excited to be building a league that brings together the world's best competitive Overwatch players with fans and viewers around the globe. This is just the beginning—we have many more team announcements to share in the coming months."
                  <footer className="mt-2 text-right text-sm">— Nate Nanzer, Overwatch League Commissioner</footer>
                </blockquote>

                <h2>Investment and Franchise Costs</h2>
                <p>
                  While Blizzard has not officially disclosed the cost of acquiring an Overwatch League franchise, reports suggest that team slots sold for approximately $20 million each, representing a significant investment for owners. This high entry barrier has been a subject of debate within the esports community, with some expressing concern about whether such investments can be recouped.
                </p>

                <p>
                  However, the league's revenue-sharing model appears designed to address these concerns. Teams will receive an equal share of league-wide net revenues, as well as keeping a percentage of local revenues generated in their home territory. Additionally, teams will receive 50% of all league-wide merchandise sales and the same percentage of Overwatch League-themed in-game items.
                </p>

                <h2>Player Selection and Compensation</h2>
                <p>
                  The next major milestone for the Overwatch League will be the player signing period, which is set to begin on August 1. Teams will have exclusive rights to sign players from their home territory, followed by a free agency period where they can sign eligible players from anywhere in the world.
                </p>

                <p>
                  Blizzard has emphasized its commitment to player welfare, establishing minimum salaries of $50,000 per year for each player. Additionally, teams must provide health insurance, housing, and practice facilities for their players throughout the season. Players will also be eligible for performance bonuses that could significantly increase their earnings.
                </p>

                <h2>Timeline and Expansion Plans</h2>
                <p>
                  According to Nate Nanzer, Overwatch League Commissioner, the inaugural season is scheduled to begin later this year, though specific dates have not yet been announced. The first season will be played at an esports arena in the Los Angeles area, with teams expected to move to their home cities for future seasons as they establish local venues.
                </p>

                <p>
                  While the initial announcement covers seven teams, Blizzard has confirmed that additional teams will be announced in the coming months. Reports suggest the league is targeting 12-14 teams for its first season, with potential expansion to 28 or more teams in future years, similar to traditional sports leagues.
                </p>

                <p>
                  With this announcement, the Overwatch League takes a significant step toward realizing Blizzard's vision of creating a sustainable, professional esports ecosystem. The involvement of established sports executives, global reach, and player-focused policies suggest the company is building for the long term, potentially setting a new standard for how esports leagues are structured and operated.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/overwatch" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  overwatch
                </Link>
                <Link href="/tag/blizzard" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  blizzard
                </Link>
                <Link href="/tag/esports" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  esports
                </Link>
                <Link href="/tag/competitive-gaming" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  competitive gaming
                </Link>
                <Link href="/tag/overwatch-league" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  overwatch league
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-dylan.jpg"
                        alt="Sarah Johnson"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Sarah Johnson</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Sarah is an esports journalist who has covered competitive gaming for over eight years. A former collegiate Starcraft player, she specializes in competitive team-based games with particular focus on Overwatch and League of Legends. Sarah has interviewed dozens of professional players and frequently appears as an analyst on esports broadcasts.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/sarah-johnson"
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
                    author: "Margaery Tyrell",
                    avatar: "/author-margaery.jpg",
                    time: "2 days ago",
                    content: "This is huge for esports! I'm especially excited to see traditional sports owners getting involved. It shows how the industry is maturing and gaining mainstream recognition.",
                    likes: 56,
                    replies: 2
                  },
                  {
                    author: "Dylan McKenzie",
                    avatar: "/commenter-dylan.jpg",
                    time: "3 days ago",
                    content: "As someone who's been following Overwatch since beta, I'm thrilled to see this league taking shape. The city-based approach is innovative for esports and could really help build sustainable fan communities.",
                    likes: 43,
                    replies: 5
                  },
                  {
                    author: "Marie Daddario",
                    avatar: "/commenter-marie.jpg",
                    time: "4 days ago",
                    content: "That $20 million buy-in price is pretty steep! I wonder if these teams will be able to generate enough revenue to make it worthwhile for the owners.",
                    likes: 28,
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
                      title: "Overwatch Pro Players React to New Overwatch League Teams",
                      category: "GAMING",
                      image: "/overwatch-pro-reactions.png",
                      views: "875K views",
                      time: "15:30",
                      url: "/gaming/overwatch-pro-reactions"
                    },
                    {
                      title: "The Economics of Esports: Are $20M Franchise Fees Worth It?",
                      category: "GAMING",
                      image: "/esports-economics.png",
                      views: "542K views",
                      time: "18:45",
                      url: "/gaming/esports-economics"
                    },
                    {
                      title: "From Seoul to Shanghai: Asian Esports Dominance Explained",
                      category: "GAMING",
                      image: "/asian-esports.png",
                      views: "651K views",
                      time: "12:20",
                      url: "/gaming/asian-esports-dominance"
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
                        title: "Inside the Overwatch League: Behind the Scenes with Players and Coaches",
                        category: "GAMING",
                        image: "/overwatch-league-behind-scenes.png",
                        views: "762K views",
                        time: "24:15",
                        url: "/gaming/overwatch-league-behind-scenes"
                      },
                      {
                        title: "Top 10 Overwatch League Plays of All Time",
                        category: "GAMING",
                        image: "/overwatch-top-plays.png",
                        views: "1.2M views",
                        time: "15:45",
                        url: "/gaming/overwatch-top-plays"
                      },
                      {
                        title: "The Future of Esports Franchising: What We Can Learn from OWL",
                        category: "GAMING",
                        image: "/esports-franchising.png",
                        views: "489K views",
                        time: "20:30",
                        url: "/gaming/esports-franchising-future"
                      },
                      {
                        title: "From Amateur to Pro: The Path to Becoming an Overwatch League Player",
                        category: "GAMING",
                        image: "/overwatch-pro-path.png",
                        views: "674K views",
                        time: "18:20",
                        url: "/gaming/overwatch-pro-path"
                      },
                      {
                        title: "Overwatch League Team Rivalries: The Stories Behind the Competition",
                        category: "GAMING",
                        image: "/overwatch-rivalries.png",
                        views: "521K views",
                        time: "22:10",
                        url: "/gaming/overwatch-team-rivalries"
                      }
                    ]}
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
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
                      href="/tag/fps"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fps
                    </Link>
                    <Link
                      href="/tag/blizzard"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      blizzard
                    </Link>
                    <Link
                      href="/tag/team-based"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      team-based
                    </Link>
                    <Link
                      href="/tag/streaming"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      streaming
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