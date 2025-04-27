import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ChicagosBestBurgerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="chicago-best-burger"
              thumbnailUrl="/chicago-burger.png"
              title="Chicago's Best Burger: Because we all love Krabby Patty"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="/author-thomas.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold">Thomas Reynolds</h3>
                    <p className="text-sm text-gray-500">Food Critic & Burger Enthusiast</p>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <button className="bg-blue-500 text-white p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button className="bg-blue-400 text-white p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>

                <article className="prose max-w-none">
                  <h1 className="text-3xl font-bold mb-4">
                    Chicago's Best Burger: Because we all love Krabby Patty
                  </h1>
                  <div className="text-sm text-gray-500 mb-4">SEPTEMBER 5, 2017</div>

                  <p className="lead text-xl mb-6">
                    Chicago has long been known for its deep-dish pizza, but the city's burger scene has been quietly evolving
                    into something truly spectacular. Among the many contenders for the city's best burger, one stands out as
                    the undisputed champion.
                  </p>

                  <p>
                    Located in the heart of downtown Chicago, "Patty's Place" has been serving what locals affectionately call
                    the "Krabby Patty" - a nod to the famous cartoon burger that has captured the hearts of both children and
                    adults alike. But unlike its fictional counterpart, this burger is very real and absolutely delicious.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">What Makes It Special?</h2>

                  <p>
                    The secret to the Krabby Patty's success lies in its perfect balance of flavors and textures. The patty
                    itself is a blend of prime chuck, brisket, and short rib, ground fresh daily and cooked to a perfect
                    medium - pink in the center with a caramelized crust. The bun, baked in-house every morning, has the
                    perfect chew and subtle sweetness that complements the savory elements.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/celebrity-foodies.png')` }}
                    ></div>
                  </div>

                  <p>
                    But what truly sets this burger apart is the special sauce - a closely guarded recipe that owner Patrick
                    Star (yes, that's his real name) refuses to divulge. "The sauce has been in my family for generations," he
                    says with a smile. "All I can tell you is that it contains exactly 7 ingredients, and one of them is love."
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/chicago-burger.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Krabby Patty: The Breakdown
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>House-baked brioche bun</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>8oz triple-blend patty (chuck, brisket, short rib)</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>Aged cheddar cheese</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Butter lettuce, heirloom tomato, caramelized onions</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>The secret "formula" sauce</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Perfect Burger Experience</h2>

                  <p>
                    A visit to Patty's Place is more than just a meal - it's an experience. The restaurant's nautical-themed
                    decor, complete with portholes and fishing nets, creates a whimsical atmosphere that appeals to diners of
                    all ages. The staff, dressed in sailor uniforms, are knowledgeable and passionate about burgers.
                  </p>

                  <p>
                    The menu is refreshingly simple: burgers, fries, and milkshakes. There are no distractions, no attempts to
                    be everything to everyone. This laser focus on doing one thing exceptionally well has earned Patty's Place
                    a devoted following and lines that often stretch around the block.
                  </p>

                  <p>
                    The sides deserve special mention as well. The hand-cut fries, twice-fried in beef tallow, are crispy on
                    the outside and fluffy on the inside. And the milkshakes, made with locally-sourced ice cream, are the
                    perfect complement to the rich, savory burger.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Verdict</h2>

                  <p>
                    Is the Krabby Patty the best burger in Chicago? After multiple visits (all in the name of thorough
                    research, of course), I can confidently say: absolutely. It's a masterclass in burger craftsmanship, a
                    perfect balance of flavors and textures that satisfies on a primal level.
                  </p>

                  <p>
                    So the next time you find yourself in the Windy City, skip the deep-dish pizza (just this once) and head
                    to Patty's Place. Your taste buds will thank you.
                  </p>
                </article>

                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                  <div>
                    <button className="text-restorative-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <RelatedVideos
                videos={[
                  {
                    title: "Top 10 Burgers in America",
                    image: "/related-steak.jpg",
                    views: "1.2M views",
                    time: "14:28",
                  },
                  {
                    title: "The Secret to Perfect French Fries",
                    image: "/related-pasta.jpg",
                    views: "890K views",
                    time: "10:15",
                  },
                  {
                    title: "Chicago's Hidden Food Gems",
                    image: "/related-workout.jpg",
                    views: "750K views",
                    time: "18:22",
                  },
                ]}
              />

              <CommentsSection
                commentCount={18}
                comments={[
                  {
                    author: "Gordon Ramsay",
                    avatar: "/commenter-gordon.jpg",
                    time: "2 days ago",
                    content: "Finally, a burger that doesn't need any of my criticism! Absolutely spot on, mate.",
                    likes: 342,
                    replies: 5,
                  },
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "1 week ago",
                    content: "I tried this burger last weekend and it was AMAZING! The sauce really is something special.",
                    likes: 156,
                    replies: 2,
                  },
                  {
                    author: "Dylan Cooper",
                    avatar: "/commenter-dylan.jpg",
                    time: "2 weeks ago",
                    content: "As a Chicago native, I can confirm this is legit. Patty's Place is a local treasure!",
                    likes: 89,
                    replies: 3,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "How to Make Restaurant-Quality Burgers at Home",
                    image: "/herbed-scramble.png",
                    views: "1.5M views",
                    time: "12:45",
                  },
                  {
                    title: "The Art of Burger Toppings",
                    image: "/balinese-street-food.png",
                    views: "980K views",
                    time: "16:22",
                  },
                  {
                    title: "Chicago vs. New York: Food Wars",
                    image: "/chicago-burger.png",
                    views: "2.1M views",
                    time: "22:38",
                  },
                  {
                    title: "The History of America's Favorite Fast Food",
                    image: "/street-food-seminyak.png",
                    views: "1.8M views",
                    time: "19:15",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Burgers
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Chicago Food
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Restaurant Reviews
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    American Cuisine
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Food Critics
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Patty's Place
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Krabby Patty
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Gourmet Burgers
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest food trends and reviews.</p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-restorative-gold"
                  />
                  <button className="w-full bg-restorative-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
