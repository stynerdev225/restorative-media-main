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

export default function GameOfThronesArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="game-of-thrones-premiere"
              thumbnailUrl="/castle-contemplation.png"
              title="'Game of Thrones' premiere proves the ladies are running the show"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">MOVIE</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  'Game of Thrones' premiere proves the ladies are running the show
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-margaery.jpg"
                    alt="Margaery Tyrell"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/margaery-tyrell" className="font-medium hover:text-restorative-gold">
                        Margaery Tyrell
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">September 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.2k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">124</span>
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
                  The highly anticipated premiere of Game of Thrones' latest season has finally arrived, and one thing
                  is abundantly clear: the women of Westeros are taking center stage like never before. From strategic
                  political maneuvers to battlefield dominance, the female characters have emerged as the true power
                  players in this epic saga.
                </p>

                <h2>Cersei Lannister: The Queen of Calculated Revenge</h2>
                <p>
                  The season opens with Cersei Lannister firmly seated on the Iron Throne, having eliminated virtually
                  all of her enemies in King's Landing with one devastating move. Her transformation from a queen
                  consort manipulating from the shadows to the undisputed ruler of the Seven Kingdoms represents one of
                  the show's most compelling character arcs.
                </p>

                <p>
                  "I understand the way this game is played," Cersei declares in one pivotal scene, demonstrating that
                  she's no longer playing by anyone else's rules. Her alliance with Euron Greyjoy shows her strategic
                  thinking, even as she remains focused on the threats from both the North and across the Narrow Sea.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">👑</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Power Players</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Cersei Lannister - Now ruling from the Iron Throne after eliminating her enemies",
                        "Daenerys Targaryen - Finally landed in Westeros with three dragons and multiple armies",
                        "Sansa Stark - Emerging as a skilled political strategist at Winterfell",
                        "Arya Stark - Developed into a formidable assassin with a deadly skillset",
                        "Lady Olenna - Still a force to be reckoned with despite House Tyrell's losses",
                      ].map((player, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{player}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Daenerys Targaryen: The Homecoming</h2>
                <p>
                  After six seasons of building her power across Essos, Daenerys Targaryen has finally set foot on
                  Westerosi soil. Her arrival at Dragonstone, her ancestral home, is filmed with breathtaking
                  cinematography that emphasizes the significance of this moment. With three growing dragons, an army of
                  Unsullied, a horde of Dothraki, and strategic alliances with Houses Greyjoy, Tyrell, and Martell,
                  Daenerys has assembled perhaps the most formidable force the Seven Kingdoms has seen in centuries.
                </p>

                <p>
                  "Shall we begin?" she asks Tyrion in the episode's final moments, signaling that the true game for the
                  throne is only just starting. Her character has evolved from a pawn in her brother's political
                  machinations to a queen in her own right, commanding respect through both strength and compassion.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/got-women-power.jpg"
                        alt="The powerful women of Game of Thrones"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          KEY PLAYERS
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        From left to right: Cersei Lannister, Daenerys Targaryen, Sansa Stark, and Arya Stark - the
                        women shaping the future of Westeros
                      </p>
                    </div>
                  </div>
                </div>

                <h2>The Stark Sisters: Reunited and Empowered</h2>
                <p>
                  In the North, Sansa Stark has emerged as a political force to be reckoned with. Her experiences have
                  transformed her from a naive girl dreaming of fairy tales to a shrewd strategist who understands the
                  brutal realities of power. Her public disagreement with Jon Snow demonstrates that she's no longer
                  willing to be silent, even when it means challenging the King in the North.
                </p>

                <p>
                  Meanwhile, Arya Stark's opening scene reminds viewers just how far she's come from the spirited young
                  girl who left Winterfell. Her methodical elimination of House Frey—"Tell them winter came for House
                  Frey"—establishes her as one of the most dangerous individuals in Westeros, capable of changing faces
                  and striking anywhere.
                </p>

                <h2>Lady Olenna and Ellaria Sand: Vengeance in Alliance</h2>
                <p>
                  Even in supporting roles, the women of Game of Thrones are driving the narrative forward. Lady Olenna
                  Tyrell, having lost her family to Cersei's machinations, has allied with Daenerys through Varys,
                  promising the support of the Reach. Her cutting wit remains intact, but now it's paired with a
                  singular focus on revenge.
                </p>

                <p>
                  Similarly, Ellaria Sand and the Sand Snakes of Dorne have joined Daenerys's coalition, bringing the
                  military might of Dorne into the equation. Their presence ensures that Cersei will face threats from
                  multiple directions.
                </p>

                <h2>A Changing Landscape</h2>
                <p>
                  What makes this power shift particularly noteworthy is how it contrasts with the show's beginnings.
                  Early seasons of Game of Thrones were often criticized for their treatment of female characters, who
                  frequently suffered at the hands of male characters. Now, the tables have turned dramatically.
                </p>

                <p>
                  The men who once dominated the political landscape have largely been eliminated or sidelined. Robert
                  Baratheon, Ned Stark, Tywin Lannister, Joffrey Baratheon, Robb Stark, Stannis Baratheon, Roose Bolton,
                  Ramsay Bolton—all dead. Even Jon Snow, who has risen to become King in the North, seems unaware of the
                  larger game being played around him, focused instead on the threat beyond the Wall.
                </p>

                <p>
                  As the new season unfolds, it's clear that the fight for the Iron Throne has become predominantly a
                  women's war, with Cersei and Daenerys as the primary contenders, backed by formidable female allies.
                  Even as the White Walkers approach from the North, these powerful women are reshaping the political
                  landscape of Westeros in ways that will have lasting consequences for the realm.
                </p>

                <p>
                  The premiere sets the stage for what promises to be the most female-driven season of Game of Thrones
                  yet. As one character aptly puts it: "The men are gone. The future of our house rests with us now."
                  Indeed, the future of all the great houses—and of Westeros itself—now rests primarily in the hands of
                  its women.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/game-of-thrones" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  game of thrones
                </Link>
                <Link href="/tag/hbo" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  hbo
                </Link>
                <Link href="/tag/tv-series" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  tv series
                </Link>
                <Link href="/tag/cersei-lannister" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  cersei lannister
                </Link>
                <Link
                  href="/tag/daenerys-targaryen"
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm"
                >
                  daenerys targaryen
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-margaery.jpg"
                        alt="Margaery Tyrell"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Margaery Tyrell</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Margaery is an entertainment writer specializing in television and film analysis. With a
                        particular interest in how female characters are portrayed in popular media, she brings a unique
                        perspective to her coverage of shows like Game of Thrones.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/margaery-tyrell"
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
              <CommentsSection />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos />
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
                  <RecommendedVideos />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/game-of-thrones"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      game of thrones
                    </Link>
                    <Link
                      href="/tag/tv-shows"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      tv shows
                    </Link>
                    <Link
                      href="/tag/hbo"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      hbo
                    </Link>
                    <Link
                      href="/tag/fantasy"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fantasy
                    </Link>
                    <Link
                      href="/tag/drama"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      drama
                    </Link>
                    <Link
                      href="/tag/westeros"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      westeros
                    </Link>
                    <Link
                      href="/tag/jon-snow"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      jon snow
                    </Link>
                    <Link
                      href="/tag/season-premiere"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      season premiere
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest entertainment news and reviews delivered to your inbox
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
