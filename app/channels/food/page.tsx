import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoCard } from "@/components/video-card"

export default function FoodChannelPage() {
  // Sample data for food videos
  const featuredVideos = [
    {
      id: 1,
      title: "Perfect Scrambled Eggs: Chef's Techniques",
      image: "/scrambled-eggs-hero.jpg",
      views: "2.4M",
      date: "2 weeks ago",
      duration: "12:32",
      channel: "Culinary Masters",
    },
    {
      id: 2,
      title: "Chicago's Best Burger: Ultimate Guide",
      image: "/chicago-burger.png",
      views: "1.8M",
      date: "1 month ago",
      duration: "18:15",
      channel: "Food Explorers",
    },
    {
      id: 3,
      title: "Sourdough Bread Making: From Starter to Loaf",
      image: "/sourdough-stages.jpg",
      views: "950K",
      date: "3 weeks ago",
      duration: "25:48",
      channel: "Bread Basics",
    },
    {
      id: 4,
      title: "Seminyak Street Food: Balinese Flavors",
      image: "/street-food-seminyak.png",
      views: "1.2M",
      date: "5 days ago",
      duration: "22:10",
      channel: "Global Street Food",
    },
    {
      id: 5,
      title: "Farm to Table: Sustainable Food Movement",
      image: "/farm-to-table-hero.jpg",
      views: "780K",
      date: "2 months ago",
      duration: "28:45",
      channel: "Sustainable Eating",
    },
    {
      id: 6,
      title: "Celebrity Chefs' Home Kitchen Secrets",
      image: "/celebrity-foodies.png",
      views: "3.5M",
      date: "3 weeks ago",
      duration: "15:12",
      channel: "Chef's Table",
    },
    {
      id: 7,
      title: "Giant Meatball Spaghetti: Ultimate Comfort Food",
      image: "/giant-meatball-spaghetti.png",
      views: "4.8M",
      date: "1 month ago",
      duration: "14:35",
      channel: "Comfort Food Classics",
    },
    {
      id: 8,
      title: "Authentic Balinese Cooking: Traditional Methods",
      image: "/balinese-street-food.png",
      views: "890K",
      date: "2 weeks ago",
      duration: "32:18",
      channel: "World Cuisines",
    },
  ]

  const cuisineTypes = [
    { name: "Italian", image: "/movie-unsplash-11.jpg" },
    { name: "Asian", image: "/movie-unsplash-12.jpg" },
    { name: "Mexican", image: "/movie-unsplash-1.jpg" },
    { name: "Mediterranean", image: "/movie-unsplash-2.jpg" },
    { name: "American", image: "/movie-unsplash-3.jpg" },
    { name: "Desserts", image: "/movie-unsplash-4.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/channel-food-stock.jpg"
              alt="Food Channel"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">FOOD</h1>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Videos</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">Latest</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Popular</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Trending</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.slice(0, 4).map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  image={video.image}
                  views={video.views}
                  date={video.date}
                  duration={video.duration}
                  channel={video.channel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cuisine Types */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Cuisine Types</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {cuisineTypes.map((cuisine, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={cuisine.image || "/placeholder.svg"}
                      alt={cuisine.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-3">
                      <p className="text-white font-medium text-center">{cuisine.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More Videos */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Food Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.slice(4).map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  image={video.image}
                  views={video.views}
                  date={video.date}
                  duration={video.duration}
                  channel={video.channel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Food News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Food News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/featured-food-1.jpg" alt="Restaurant Trends" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Top Restaurant Trends for 2024</h3>
                  <p className="text-gray-600 text-sm">
                    From hyper-local sourcing to zero-waste kitchens, these trends are reshaping the industry.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2 days ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/featured-food-2.png" alt="Michelin Stars" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Michelin Guide Announces New Star Recipients</h3>
                  <p className="text-gray-600 text-sm">
                    See which restaurants earned the coveted Michelin stars in this year's guide.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 week ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/diverse-young-adults-food-gathering.png"
                    alt="Food Festival"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">International Food Festival Returns</h3>
                  <p className="text-gray-600 text-sm">
                    The popular culinary event will feature over 50 countries and 200 food vendors.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
