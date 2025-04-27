import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoCard } from "@/components/video-card"

export default function MusicChannelPage() {
  // Sample data for music videos
  const featuredVideos = [
    {
      id: 1,
      title: "Daft Punk: The Evolution of Electronic Music",
      image: "/daft-punk-evolution.jpg",
      views: "3.2M",
      date: "2 weeks ago",
      duration: "18:32",
      channel: "Music Evolution",
    },
    {
      id: 2,
      title: "Inside a Professional Recording Studio",
      image: "/professional-recording-studio.png",
      views: "1.8M",
      date: "1 month ago",
      duration: "22:15",
      channel: "Studio Insider",
    },
    {
      id: 3,
      title: "The Art of Album Production",
      image: "/recording-studio-layout.jpg",
      views: "950K",
      date: "3 weeks ago",
      duration: "25:48",
      channel: "Producer's Guild",
    },
    {
      id: 4,
      title: "Kendrick Lamar: Mixtape to Masterpiece",
      image: "/kendrick-lamar-mixtape.png",
      views: "2.7M",
      date: "5 days ago",
      duration: "24:10",
      channel: "Hip Hop Analysis",
    },
    {
      id: 5,
      title: "The History of Jazz: New Orleans to New York",
      image: "/featured-music-1.jpg",
      views: "1.2M",
      date: "2 months ago",
      duration: "32:45",
      channel: "Jazz Heritage",
    },
    {
      id: 6,
      title: "How to Mix a Song: Professional Techniques",
      image: "/anonymous-tapes.png",
      views: "1.5M",
      date: "3 weeks ago",
      duration: "28:12",
      channel: "Mix Master",
    },
    {
      id: 7,
      title: "The Rise of K-Pop: Global Phenomenon",
      image: "/movie-unsplash-9.jpg",
      views: "4.8M",
      date: "1 month ago",
      duration: "22:35",
      channel: "Global Music Trends",
    },
    {
      id: 8,
      title: "Vinyl Records: The Analog Revival",
      image: "/movie-unsplash-10.jpg",
      views: "890K",
      date: "2 weeks ago",
      duration: "19:18",
      channel: "Analog Audio",
    },
  ]

  const musicGenres = [
    { name: "Pop", image: "/movie-unsplash-11.jpg" },
    { name: "Rock", image: "/movie-unsplash-12.jpg" },
    { name: "Hip Hop", image: "/movie-unsplash-1.jpg" },
    { name: "Electronic", image: "/movie-unsplash-2.jpg" },
    { name: "Jazz", image: "/movie-unsplash-3.jpg" },
    { name: "Classical", image: "/movie-unsplash-4.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/channel-music-stock.jpg"
              alt="Music Channel"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">MUSIC</h1>
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

        {/* Music Genres */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Music Genres</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {musicGenres.map((genre, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={genre.image || "/placeholder.svg"}
                      alt={genre.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full p-3">
                      <p className="text-white font-medium text-center">{genre.name}</p>
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
            <h2 className="text-2xl font-bold mb-6">More Music Videos</h2>
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

        {/* Music News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Music News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-5.jpg" alt="Grammy Awards" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Grammy Awards: Complete Winners List</h3>
                  <p className="text-gray-600 text-sm">
                    See who took home the biggest awards in music's biggest night.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2 days ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-6.jpg" alt="World Tour" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Major Artist Announces World Tour Dates</h3>
                  <p className="text-gray-600 text-sm">
                    The highly anticipated tour will span 5 continents and 30 countries.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 week ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src="/movie-unsplash-7.jpg" alt="Streaming Services" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Music Streaming Services Raise Royalty Rates</h3>
                  <p className="text-gray-600 text-sm">
                    After years of criticism, major streaming platforms announce better compensation for artists.
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
