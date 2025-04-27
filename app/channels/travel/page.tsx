import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoCard } from "@/components/video-card"

export default function TravelChannelPage() {
  // Sample data for travel videos
  const featuredVideos = [
    {
      id: 1,
      title: "Hidden Gems of Southeast Asia",
      image: "/southeast-asia-map.jpg",
      views: "1.8M",
      date: "2 weeks ago",
      duration: "24:32",
      channel: "Wanderlust",
      category: "Travel",
    },
    {
      id: 2,
      title: "Remote Destinations: Off the Beaten Path",
      image: "/remote-destinations-hero.jpg",
      views: "950K",
      date: "1 month ago",
      duration: "28:15",
      channel: "Adventure Seekers",
      category: "Travel",
    },
    {
      id: 3,
      title: "Urban Panorama: City Skylines",
      image: "/urban-panorama.png",
      views: "1.2M",
      date: "3 weeks ago",
      duration: "18:48",
      channel: "Urban Explorer",
      category: "Travel",
    },
    {
      id: 4,
      title: "Castle Contemplation: Medieval Europe",
      image: "/castle-contemplation.png",
      views: "780K",
      date: "5 days ago",
      duration: "32:10",
      channel: "History Travels",
      category: "Travel",
    },
    {
      id: 5,
      title: "Budget Travel: Europe on $50 a Day",
      image: "/featured-travel-1.jpg",
      views: "2.4M",
      date: "2 months ago",
      duration: "22:45",
      channel: "Budget Nomad",
      category: "Travel",
    },
    {
      id: 6,
      title: "Luxury Island Resorts: Ultimate Guide",
      image: "/featured-travel-2.png",
      views: "1.5M",
      date: "3 weeks ago",
      duration: "26:12",
      channel: "Luxury Escapes",
      category: "Travel",
    },
    {
      id: 7,
      title: "Solo Female Travel: Safety Tips",
      image: "/movie-unsplash-9.jpg",
      views: "3.2M",
      date: "1 month ago",
      duration: "19:35",
      channel: "Solo Traveler",
      category: "Travel",
    },
    {
      id: 8,
      title: "Digital Nomad Lifestyle: Work From Anywhere",
      image: "/movie-unsplash-10.jpg",
      views: "1.8M",
      date: "2 weeks ago",
      duration: "24:18",
      channel: "Remote Life",
      category: "Travel",
    },
  ]

  const destinations = [
    { name: "Europe", image: "/movie-unsplash-11.jpg" },
    { name: "Asia", image: "/movie-unsplash-12.jpg" },
    { name: "North America", image: "/movie-unsplash-1.jpg" },
    { name: "South America", image: "/movie-unsplash-2.jpg" },
    { name: "Africa", image: "/movie-unsplash-3.jpg" },
    { name: "Oceania", image: "/movie-unsplash-4.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/remote-destinations-new.png"
              alt="Travel Channel"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">TRAVEL</h1>
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
                  date={video.date}
                  category={video.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Destinations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {destinations.map((destination, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-3">
                      <p className="text-white font-medium text-center">{destination.name}</p>
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
            <h2 className="text-2xl font-bold mb-6">More Travel Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.slice(4).map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  image={video.image}
                  date={video.date}
                  category={video.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Travel News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Travel News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-5.jpg" alt="Travel Restrictions" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Major Countries Ease Travel Restrictions</h3>
                  <p className="text-gray-600 text-sm">
                    Several popular destinations have announced simplified entry requirements for tourists.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2 days ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-6.jpg" alt="Sustainable Tourism" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Sustainable Tourism Initiative Launches</h3>
                  <p className="text-gray-600 text-sm">
                    New global program aims to reduce the environmental impact of tourism while supporting local
                    communities.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 week ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-7.jpg" alt="Airline News" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Major Airline Announces New Routes</h3>
                  <p className="text-gray-600 text-sm">
                    The carrier will begin service to five new international destinations starting next month.
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
