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

export default function KingdomHeartsArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="kingdom-hearts-toy-story"
              thumbnailUrl="/kingdom-hearts.png"
              title="Watch Video of New Toy Story World in Kingdom Hearts 3 – Will Release 2018"
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
                  Watch Video of New Toy Story World in Kingdom Hearts 3 – Will Release 2018
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
                      <Link href="/author/alex-rodriguez" className="font-medium hover:text-restorative-gold">
                        Alex Rodriguez
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">SEPTEMBER 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">4.8k</span>
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
                  Kingdom Hearts fans, the wait is almost over. Square Enix has finally confirmed a 2018 release window for the highly anticipated Kingdom Hearts 3, while also unveiling an exciting new world based on Pixar's beloved Toy Story franchise. The announcement came during Disney's D23 Expo, where director Tetsuya Nomura presented a stunning gameplay trailer showcasing Sora, Donald, and Goofy joining forces with Woody, Buzz Lightyear, and the rest of the toy gang.
                </p>

                <p>
                  The new trailer revealed the first-ever Pixar world in the Kingdom Hearts series, with Sora and his companions transformed into toy versions of themselves to blend in with their new plastic and plush allies. The level appears to feature iconic locations from the films, including Andy's bedroom and what looks like a vast toy store, filled with enemies and platforming challenges.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎮</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Kingdom Hearts 3 - New Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Pixar worlds making their series debut, starting with Toy Story",
                        "Enhanced combat system with Keyblade transformations and summons",
                        "More dynamic traversal mechanics, including wall-running and environmental interactions",
                        "Redesigned Gummi Ship segments with improved exploration",
                        "Confirmed worlds include Tangled, Big Hero 6, Hercules, and now Toy Story",
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

                <h2>A New Story in the Toy Box</h2>
                <p>
                  Square Enix has confirmed that the Toy Story world won't simply retread the narrative of the films. Instead, it will feature an original story set between the events of Toy Story 2 and Toy Story 3, with Organization XIII members causing trouble in Andy's room. When Andy's toys and other toys from the neighborhood start disappearing, Woody and Buzz team up with Sora to investigate and save their friends.
                </p>

                <p>
                  According to Tetsuya Nomura, the Pixar team was heavily involved in the creation of this world. "The Pixar team gave us a lot of advice on how to capture the characters' personalities and make the world feel authentic," Nomura said through a translator. "They were incredibly supportive and excited to see their characters interact with the Kingdom Hearts universe."
                </p>

                <div className="my-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/kingdom-hearts-toy-story.jpg"
                        alt="Sora, Woody, and Buzz Lightyear in Kingdom Hearts 3"
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
                        Sora, Donald, and Goofy in their toy forms alongside Woody and Buzz Lightyear in the new Kingdom Hearts 3 trailer
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Combat Evolved</h2>
                <p>
                  The trailer also showcased the game's evolved combat system, which builds upon the foundation established in previous titles while introducing new elements. Sora's Keyblade can now transform into various weapons, including a hammer and dual pistols that resemble toy guns in the Toy Story world. These transformations appear to change not only Sora's attack patterns but also his mobility options.
                </p>

                <p>
                  Additionally, we got a glimpse of new summons and special attacks, including a spectacular "Mad Tea Cups" attack that incorporates the iconic Disney theme park ride. The combat looks more fluid and dynamic than ever, with Sora able to run up walls, hop between large toys, and execute impressive aerial combos.
                </p>

                <h2>The Long-Awaited Release Window</h2>
                <p>
                  Perhaps the biggest news from the presentation was the confirmation of a 2018 release window for Kingdom Hearts 3. While no specific date was announced, this is the first time Square Enix has committed to a year for the game's launch since its announcement at E3 2013.
                </p>

                <p>
                  "The game is coming along well, and we're in the final stages of development for many of the worlds," Nomura explained. "We know fans have been waiting patiently, and we want to make sure we deliver a game that lives up to their expectations."
                </p>

                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                  "It's been a dream of ours to include Pixar properties in Kingdom Hearts. Toy Story was the perfect place to start because it's a story about toys coming to life, which fits perfectly with the Kingdom Hearts themes and aesthetics."
                  <footer className="mt-2 text-right text-sm">— Tetsuya Nomura, Director</footer>
                </blockquote>

                <h2>More Worlds To Come</h2>
                <p>
                  While Toy Story is the latest world to be revealed, Square Enix has previously confirmed other Disney properties that will appear in Kingdom Hearts 3. These include the worlds of Tangled, Big Hero 6, and a return to the Hercules-themed Olympus Coliseum, which appears to have been expanded to include more areas from the film.
                </p>

                <p>
                  Fan speculation is running wild about what other worlds might appear in the final game. With Disney now owning both Marvel and Star Wars, some have wondered if these properties could make an appearance, though Nomura has been noncommittal about such possibilities in previous interviews.
                </p>

                <h2>A Long Journey Nearing Its End</h2>
                <p>
                  Kingdom Hearts 3 represents the culmination of a storyline that began with the original game in 2002. Over the years, the series has expanded across multiple platforms with titles like Chain of Memories, 358/2 Days, Birth by Sleep, and Dream Drop Distance, each adding new layers to an increasingly complex narrative.
                </p>

                <p>
                  Square Enix has positioned Kingdom Hearts 3 as the conclusion to what they call the "Dark Seeker Saga," centered around the conflict with Master Xehanort. For longtime fans who have followed Sora's journey across multiple games and platforms, the 2018 release promises to deliver long-awaited resolution to storylines that have been developing for over 15 years.
                </p>

                <p>
                  With the addition of Pixar worlds, enhanced gameplay mechanics, and the promise of narrative closure, Kingdom Hearts 3 is shaping up to be one of the most anticipated RPGs of 2018. After years of waiting, fans can finally look forward to reuniting with Sora, Donald, and Goofy for one last adventure against the darkness.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/kingdom-hearts" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  kingdom hearts
                </Link>
                <Link href="/tag/square-enix" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  square enix
                </Link>
                <Link href="/tag/toy-story" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  toy story
                </Link>
                <Link href="/tag/pixar" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  pixar
                </Link>
                <Link href="/tag/disney" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  disney
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-gordon.jpg"
                        alt="Alex Rodriguez"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Alex Rodriguez</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Alex is a gaming journalist specializing in Japanese RPGs and action games. With a particular passion for the Kingdom Hearts series since its inception, he's covered every major Square Enix release for the past decade. He's been known to cosplay as Organization XIII members at gaming conventions.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/alex-rodriguez"
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
              <CommentsSection commentCount={0} comments={[]} />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos videos={[]} />
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
                  <RecommendedVideos videos={[]} />
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
                      href="/tag/japanese-games"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      japanese games
                    </Link>
                    <Link
                      href="/tag/disney"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      disney
                    </Link>
                    <Link
                      href="/tag/final-fantasy"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      final fantasy
                    </Link>
                    <Link
                      href="/tag/playstation"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      playstation
                    </Link>
                    <Link
                      href="/tag/xbox"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      xbox
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