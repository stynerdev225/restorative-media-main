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

export default function ScrambledEggsArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="scrambled-eggs-chefs"
              thumbnailUrl="/scrambled-eggs-hero.jpg"
              title="This Is How All Your Favorite Chefs Make Scrambled Eggs"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">FOOD</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  This Is How All Your Favorite Chefs Make Scrambled Eggs
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
                    <span className="text-sm">1.8k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">36</span>
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
                  Scrambled eggs might seem like the simplest dish to make, but achieving that perfect creamy texture
                  can be surprisingly challenging. We've gathered techniques from world-renowned chefs to show you how
                  the professionals make this breakfast staple.
                </p>

                <h2>Gordon Ramsay's Creamy Scrambled Eggs</h2>
                <p>
                  Gordon Ramsay's technique is perhaps the most famous. He starts with cold eggs in a cold pan with a
                  generous amount of butter. The key is to cook them slowly over medium-low heat, constantly stirring
                  and taking the pan on and off the heat to control the temperature. Just before they're done, he adds a
                  spoonful of crème fraîche for extra creaminess.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">👨‍🍳</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Gordon's Top Tips</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Never season eggs until they're off the heat (salt can break down the eggs too early)",
                        "Keep stirring constantly for small, creamy curds",
                        "Finish with crème fraîche for luxurious texture",
                        "Serve on buttered toast with smoked salmon for an elevated breakfast",
                      ].map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Jacques Pépin's Perfect French Omelette</h2>
                <p>
                  While not technically scrambled eggs, Jacques Pépin's French omelette technique is worth mentioning.
                  He beats eggs thoroughly, then cooks them in a hot pan with butter, constantly shaking and stirring.
                  The result is a exterior with tiny, delicate curds and a slightly runny interior.
                </p>

                <h2>Jamie Oliver's One-Pan English Breakfast Eggs</h2>
                <p>
                  Jamie Oliver takes a more rustic approach. He cooks his eggs in the same pan as sautéed vegetables and
                  herbs, creating a one-pan breakfast scramble. His technique involves cooking over medium heat and
                  folding rather than stirring constantly, resulting in larger, fluffier curds.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/scrambled-eggs-comparison.jpg"
                        alt="Different styles of scrambled eggs"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          COMPARISON
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Left to right: Gordon Ramsay's creamy style, Jacques Pépin's French style, and Jamie Oliver's
                        rustic style
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Alton Brown's Scientific Approach</h2>
                <p>
                  Always the scientist, Alton Brown recommends whisking eggs with a small amount of milk and a pinch of
                  salt 15 minutes before cooking. This allows the proteins to relax, resulting in more tender eggs. He
                  cooks them over low heat in a non-stick pan, using a silicone spatula to create large, soft curds.
                </p>

                <h2>Heston Blumenthal's Sous-Vide Perfection</h2>
                <p>
                  For the ultimate in precision, Heston Blumenthal cooks his eggs sous-vide. He combines eggs with
                  butter, cream, and salt in a bag, then cooks them at exactly 73°C (163.4°F) for 15 minutes. The result
                  is perfectly uniform, silky eggs with an almost custard-like consistency.
                </p>

                <h2>The Common Threads</h2>
                <p>Despite their differences, all these chefs agree on a few key principles:</p>
                <ul>
                  <li>Quality ingredients matter - use fresh, free-range eggs whenever possible</li>
                  <li>Temperature control is crucial - most prefer lower heat for creamier results</li>
                  <li>Timing is everything - scrambled eggs continue cooking even after removed from heat</li>
                  <li>Fat is your friend - whether butter, cream, or crème fraîche, fat creates silkier eggs</li>
                </ul>

                <p>
                  Next time you make scrambled eggs, try one of these techniques and elevate this simple dish to
                  restaurant quality. Your breakfast table will never be the same!
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/scrambled-eggs" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  scrambled eggs
                </Link>
                <Link href="/tag/gordon-ramsay" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  gordon ramsay
                </Link>
                <Link href="/tag/breakfast" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  breakfast
                </Link>
                <Link
                  href="/tag/cooking-techniques"
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm"
                >
                  cooking techniques
                </Link>
                <Link href="/tag/chef-recipes" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  chef recipes
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
                        Margaery is a food writer and culinary explorer with a passion for uncovering the techniques
                        behind seemingly simple dishes. She has written for major food publications and is currently
                        working on her first cookbook.
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
                      href="/tag/food"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      food
                    </Link>
                    <Link
                      href="/tag/recipes"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      recipes
                    </Link>
                    <Link
                      href="/tag/cooking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cooking
                    </Link>
                    <Link
                      href="/tag/breakfast"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      breakfast
                    </Link>
                    <Link
                      href="/tag/chefs"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      chefs
                    </Link>
                    <Link
                      href="/tag/gordon-ramsay"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      gordon ramsay
                    </Link>
                    <Link
                      href="/tag/jamie-oliver"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      jamie oliver
                    </Link>
                    <Link
                      href="/tag/kitchen-tips"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      kitchen tips
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest food videos and recipes delivered to your inbox
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
