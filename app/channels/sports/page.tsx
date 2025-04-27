import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoCard } from "@/components/video-card"

export default function SportsChannelPage() {
  // Sample data for sports videos
  const featuredVideos = [
    {
      id: 1,
      title: "Mountain Bike Racing: Ultimate Guide",
      image: "/mountain-biking-hero.png",
      views: "1.2M",
      date: "2 weeks ago",
      duration: "18:32",
      channel: "MTB World",
    },
    {
      id: 2,
      title: "McLaren Honda Engine: Technical Analysis",
      image: "/mclaren-honda-comparison.jpg",
      views: "950K",
      date: "1 month ago",
      duration: "22:15",
      channel: "F1 Technical",
    },
    {
      id: 3,
      title: "Mental Training for Professional Athletes",
      image: "/athlete-mental-training.jpg",
      views: "780K",
      date: "3 weeks ago",
      duration: "25:48",
      channel: "Sports Psychology",
    },
    {
      id: 4,
      title: "Sunset Mountain Bike Race Highlights",
      image: "/sunset-mountain-bike-race.png",
      views: "1.5M",
      date: "5 days ago",
      duration: "14:10",
      channel: "Extreme Sports",
    },
    {
      id: 5,
      title: "NBA Finals: Game 7 Analysis",
      image: "/featured-sports-1.png",
      views: "3.2M",
      date: "2 months ago",
      duration: "32:45",
      channel: "Basketball Zone",
    },
    {
      id: 6,
      title: "The Science of Swimming: Olympic Training",
      image: "/movie-unsplash-8.jpg",
      views: "670K",
      date: "3 weeks ago",
      duration: "28:12",
      channel: "Olympic Channel",
    },
    {
      id: 7,
      title: "Soccer Tactics: Modern Formations Explained",
      image: "/movie-unsplash-9.jpg",
      views: "1.8M",
      date: "1 month ago",
      duration: "22:35",
      channel: "Football Analysis",
    },
    {
      id: 8,
      title: "Marathon Training: 16-Week Program",
      image: "/movie-unsplash-10.jpg",
      views: "890K",
      date: "2 weeks ago",
      duration: "19:18",
      channel: "Runner's World",
    },
  ]

  const sportsCategories = [
    { name: "Football", image: "/movie-unsplash-11.jpg" },
    { name: "Basketball", image: "/movie-unsplash-12.jpg" },
    { name: "Formula 1", image: "/movie-unsplash-1.jpg" },
    { name: "Tennis", image: "/movie-unsplash-2.jpg" },
    { name: "Cycling", image: "/movie-unsplash-3.jpg" },
    { name: "Combat Sports", image: "/movie-unsplash-4.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/channel-sports-stock.jpg"
              alt="Sports Channel"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">SPORTS</h1>
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

        {/* Sports Categories */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Sports Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {sportsCategories.map((category, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
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
            <h2 className="text-2xl font-bold mb-6">More Sports Videos</h2>
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

        {/* Sports News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Sports News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-5.jpg" alt="World Cup" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">World Cup Qualifiers: Final Results</h3>
                  <p className="text-gray-600 text-sm">
                    See which teams have secured their spots in the upcoming World Cup tournament.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2 days ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-6.jpg" alt="Olympics" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Olympic Committee Announces New Sports</h3>
                  <p className="text-gray-600 text-sm">
                    Three new sports will be added to the Olympic program for the next Summer Games.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 week ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-7.jpg" alt="Transfer News" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Major Transfer Shakes Up Basketball League</h3>
                  <p className="text-gray-600 text-sm">
                    Star player signs record-breaking contract with rival team in shocking move.
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
