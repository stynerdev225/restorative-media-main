import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoCard } from "@/components/video-card"

export default function MoviesChannelPage() {
  // Sample data for movie videos
  const featuredVideos = [
    {
      id: 1,
      title: "The Last Jedi: Director's Commentary",
      image: "/last-jedi.png",
      views: "2.4M",
      date: "2 weeks ago",
      duration: "18:32",
      channel: "Star Wars Official",
    },
    {
      id: 2,
      title: "Avengers: Infinity War - Behind the Scenes",
      image: "/infinity-war.png",
      views: "3.8M",
      date: "1 month ago",
      duration: "22:15",
      channel: "Marvel Entertainment",
    },
    {
      id: 3,
      title: "Wonder Woman: The Making of an Icon",
      image: "/wonder-woman.png",
      views: "1.7M",
      date: "3 weeks ago",
      duration: "15:48",
      channel: "DC Films",
    },
    {
      id: 4,
      title: "Fullmetal Alchemist: Brotherhood Analysis",
      image: "/fullmetal-alchemist.png",
      views: "950K",
      date: "5 days ago",
      duration: "24:10",
      channel: "Anime Explained",
    },
    {
      id: 5,
      title: "Game of Thrones: Season 8 Breakdown",
      image: "/got-women-power.jpg",
      views: "4.2M",
      date: "2 months ago",
      duration: "32:45",
      channel: "HBO",
    },
    {
      id: 6,
      title: "Interstellar: Scientific Accuracy",
      image: "/interstellar.png",
      views: "1.5M",
      date: "3 weeks ago",
      duration: "28:12",
      channel: "Science in Films",
    },
    {
      id: 7,
      title: "Agent 327: Operation Barbershop",
      image: "/agent-327.png",
      views: "780K",
      date: "1 month ago",
      duration: "12:35",
      channel: "Blender Animation",
    },
    {
      id: 8,
      title: "Superhero Film Evolution: 2000-2023",
      image: "/superhero-film-timeline.jpg",
      views: "2.1M",
      date: "2 weeks ago",
      duration: "25:18",
      channel: "Film History",
    },
  ]

  const popularCategories = [
    { name: "Action", image: "/movie-unsplash-1.jpg" },
    { name: "Drama", image: "/movie-unsplash-2.jpg" },
    { name: "Sci-Fi", image: "/movie-unsplash-3.jpg" },
    { name: "Comedy", image: "/movie-unsplash-4.jpg" },
    { name: "Horror", image: "/movie-unsplash-5.jpg" },
    { name: "Animation", image: "/movie-unsplash-6.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/channel-movie-stock.jpg"
              alt="Movie & Series Channel"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">MOVIE & SERIES</h1>
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

        {/* Popular Categories */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularCategories.map((category, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-3">
                      <p className="text-white font-medium text-center">{category.name}</p>
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
            <h2 className="text-2xl font-bold mb-6">More Movie & Series Videos</h2>
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

        {/* Movie News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Movie News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/featured-movie-1.jpg" alt="Upcoming Movies" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Top 10 Most Anticipated Movies of 2024</h3>
                  <p className="text-gray-600 text-sm">
                    From superhero blockbusters to indie darlings, these are the films everyone's waiting for.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 day ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-7.jpg" alt="Oscar Nominations" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Oscar Nominations Announced: Full List</h3>
                  <p className="text-gray-600 text-sm">
                    This year's Academy Award nominations feature several surprises and notable snubs.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">3 days ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-8.jpg" alt="Streaming Services" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Streaming Wars: New Platform Launches</h3>
                  <p className="text-gray-600 text-sm">
                    Another major studio enters the streaming market with exclusive content and competitive pricing.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">5 days ago</p>
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
