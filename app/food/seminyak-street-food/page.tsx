import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SeminyakStreetFoodPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="seminyak-street-food"
              thumbnailUrl="/street-food-seminyak.png"
              title="This Great Street Food Truck You Should Try in Seminyak"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="/author-dylan.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold">Dylan Cooper</h3>
                    <p className="text-sm text-gray-500">Food & Travel Writer</p>
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
                    This Great Street Food Truck You Should Try in Seminyak
                  </h1>
                  <div className="text-sm text-gray-500 mb-4">SEPTEMBER 5, 2017</div>

                  <p className="lead text-xl mb-6">
                    Amid the upscale restaurants and trendy cafes that line the streets of Bali's fashionable Seminyak district,
                    an unassuming food truck is drawing crowds of locals and tourists alike, serving up what might be the most
                    authentic and delicious Indonesian street food experience in the area.
                  </p>

                  <p>
                    Bali's culinary scene has exploded in recent years, with high-end establishments and Instagram-worthy brunch spots
                    dominating the landscape. But for those seeking a taste of authentic local cuisine without the hefty price tag or
                    pretentious atmosphere, "Warung Roda" (which translates to "Wheel Stall") offers a refreshing return to basics.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Hidden Gem on Wheels</h2>

                  <p>
                    Parked nightly on Jalan Kayu Aya (Eat Street) near Seminyak Square, this vibrant blue food truck stands out against
                    the backdrop of designer boutiques and upscale galleries. The truck's exterior is adorned with colorful paintings of
                    Indonesian spices and ingredients, while fairy lights strung around the awning create a warm, inviting glow as the
                    sun sets.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/street-food-seminyak.png')` }}
                    ></div>
                  </div>

                  <p>
                    Behind the counter, you'll find Made and Kadek, a husband-and-wife team who have been cooking together for over
                    25 years. They started Warung Roda three years ago after Made lost his job as a chef at a luxury resort during
                    pandemic-related downsizing. What began as a necessity has blossomed into one of Seminyak's most talked-about
                    culinary experiences.
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/balinese-street-food.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Must-Try Dishes at Warung Roda
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>Babi Guling Tacos - A fusion dish combining Bali's famous suckling pig with a Mexican-inspired delivery system</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>Nasi Campur - A customizable plate with rice and your choice of 4-5 different side dishes</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>Mie Goreng - Wok-fried noodles with vegetables and your choice of protein</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Es Daluman - A refreshing green jelly drink made from local grass jelly</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>Pisang Goreng - Fried bananas with a scoop of coconut ice cream</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">More Than Just Food</h2>

                  <p>
                    What sets Warung Roda apart isn't just the quality of the food—though that alone would be worth the visit—but
                    the entire experience. Unlike many street food vendors who have simplified their menus to appeal to tourists,
                    Made and Kadek offer an extensive selection of authentic Balinese and Indonesian dishes, many based on family
                    recipes passed down through generations.
                  </p>

                  <p>
                    "We cook with our hearts," Kadek told me as she expertly assembled my plate of nasi campur, adding a generous
                    portion of their signature spicy sambal. "Food is how we show love in Bali. When people eat our food, they
                    become like family."
                  </p>

                  <p>
                    This philosophy extends to their business practices as well. All ingredients are sourced locally, supporting
                    small-scale farmers and producers throughout the island. They've also established a "pay-it-forward" system
                    where customers can pre-purchase meals for those in need—a concept that has created a beautiful cycle of
                    generosity within the community.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Standout Dish</h2>

                  <p>
                    While everything I tasted was exceptional, the dish that has earned Warung Roda its cult following is without
                    doubt their Babi Guling Tacos. This innovative creation takes Bali's famous suckling pig—typically served as part
                    of a ceremonial meal—and transforms it into a handheld street food delight.
                  </p>

                  <p>
                    The soft corn tortilla (made fresh daily) cradles tender, aromatic pork with crispy skin, topped with a fresh
                    lawar salad of young jackfruit, long beans, and grated coconut. A drizzle of spicy sambal adds heat, while a
                    touch of sweet kecap manis (Indonesian sweet soy sauce) balances the flavors perfectly. It's a harmonious
                    fusion that somehow manages to respect both culinary traditions while creating something entirely new.
                  </p>

                  <p>
                    At 25,000 IDR (approximately $1.75 USD) per taco, it's also incredibly affordable, especially considering the
                    quality and portion size. I found two tacos to be a satisfying meal, though you might be tempted to order more
                    once you take your first bite.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Practical Information</h2>

                  <p>
                    Warung Roda operates from 5 PM to 11 PM daily, except on Nyepi (Balinese Day of Silence). The truck is typically
                    parked near Seminyak Square, though its exact location is sometimes updated on their Instagram account (@warungroda_bali).
                  </p>

                  <p>
                    Be prepared to wait during peak dinner hours (7-9 PM), as the truck has developed quite a following. However, the
                    line moves quickly, and there's a pleasant camaraderie among those waiting, with many people striking up conversations
                    and offering menu recommendations to first-timers.
                  </p>

                  <p>
                    Small plastic stools and folding tables are set up nearby, creating an impromptu dining area. If you'd prefer more
                    comfortable seating, you can also take your food to-go and enjoy it back at your accommodation.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Verdict</h2>

                  <p>
                    In a destination increasingly defined by its luxury offerings, Warung Roda offers something increasingly rare:
                    an authentic, unpretentious culinary experience that connects visitors to local culture through food. It represents
                    the best of Bali's street food tradition while embracing innovation and sustainability.
                  </p>

                  <p>
                    Whether you're a food enthusiast seeking authentic flavors, a budget traveler looking for an affordable meal, or
                    simply someone who appreciates the stories behind the food you eat, Warung Roda deserves a place on your Seminyak
                    itinerary. Just be warned: after eating here, those overpriced resort meals might lose some of their appeal.
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
                    title: "The Best Street Food Markets in Bali",
                    image: "/balinese-street-food.png",
                    views: "1.4M views",
                    time: "15:28",
                  },
                  {
                    title: "How to Make Authentic Balinese Sambal",
                    image: "/herbed-scramble.png",
                    views: "780K views",
                    time: "8:45",
                  },
                  {
                    title: "Bali Food Tour: Beyond the Tourist Traps",
                    image: "/street-food-seminyak.png",
                    views: "2.1M views",
                    time: "23:15",
                  },
                ]}
              />

              <CommentsSection
                commentCount={28}
                comments={[
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "1 week ago",
                    content: "I tried this place based on your recommendation and it was AMAZING! The babi guling tacos are worth the trip to Bali alone. Thank you for highlighting these local gems!",
                    likes: 124,
                    replies: 3,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "2 weeks ago",
                    content: "As someone who's lived in Bali for 5 years, I can confirm this is legit. Made and Kadek are treasures, and they remember regular customers by name. Pro tip: ask for extra sambal if you can handle the heat!",
                    likes: 97,
                    replies: 5,
                  },
                  {
                    author: "Thomas Reynolds",
                    avatar: "/author-thomas.jpg",
                    time: "3 weeks ago",
                    content: "Great write-up! I'm planning a trip to Bali next month and have added this to my list. Any other food trucks or warungs you'd recommend in the area?",
                    likes: 42,
                    replies: 2,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "5 Must-Try Dishes in Bali",
                    image: "/celebrity-foodies.png",
                    views: "2.5M views",
                    time: "12:45",
                  },
                  {
                    title: "Street Food vs. Resort Food in Bali",
                    image: "/chicago-burger.png",
                    views: "1.8M views",
                    time: "16:22",
                  },
                  {
                    title: "How to Eat Like a Local in Seminyak",
                    image: "/balinese-street-food.png",
                    views: "920K views",
                    time: "14:38",
                  },
                  {
                    title: "The Story Behind Babi Guling",
                    image: "/street-food-seminyak.png",
                    views: "1.3M views",
                    time: "19:15",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Bali Food
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Seminyak
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Street Food
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Indonesian Cuisine
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Food Trucks
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Warung Roda
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Babi Guling
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Budget Travel
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest food and travel recommendations.</p>
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
