import { Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FeaturedVideoHero() {
  // Hardcoded videos to match the exact layout in the screenshot
  const featuredVideos = [
    {
      id: "mountain-biking",
      category: "SPORTS",
      title: "Aggressive Downhill, Cross Country & All Mountain Bike Racing",
      image: "/mountain-biking-hero.png",
      url: "/sports/mountain-bike-racing",
      categoryColor: "red-600",
    },
    {
      id: "street-food",
      category: "FOOD",
      title: "This Great Street Food Truck You Should Try in Seminyak",
      image: "/street-food-seminyak.png",
      url: "/food/seminyak-street-food",
      categoryColor: "red-600",
    },
    {
      id: "kendrick-lamar",
      category: "MUSIC",
      title: "Mixtape Primer: Reviewing Kendrick Lamar's Pre-Fame Output",
      image: "/kendrick-lamar-mixtape.png",
      url: "/music/album-production",
      categoryColor: "red-600",
    },
  ]

  return (
    <section className="relative w-full bg-black">
      {/* Textured background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/featured-video-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto py-12 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
          Featured Video
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {/* Main featured video (larger) - Mountain Biking */}
          <div
            className="md:col-span-7 relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 hover:translate-y-[-5px]"
            style={{
              perspective: "1000px",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Link href={featuredVideos[0].url}>
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <Image
                  src={featuredVideos[0].image || "/placeholder.svg?height=720&width=1280&query=mountain+biking"}
                  alt="Mountain Biking"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-white/20">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                    {featuredVideos[0].category}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-2 line-clamp-2 drop-shadow-md">
                    {featuredVideos[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Right column with 2 smaller videos */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            {/* Food video */}
            <div
              className="relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.03] hover:rotate-1 hover:translate-y-[-5px]"
              style={{
                perspective: "1000px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Link href={featuredVideos[1].url}>
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src={featuredVideos[1].image || "/placeholder.svg?height=720&width=1280&query=street+food"}
                    alt="Street Food in Seminyak"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute right-4 top-4">
                    <div className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Play className="h-5 w-5 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                      {featuredVideos[1].category}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-2 line-clamp-2 drop-shadow-md">
                      {featuredVideos[1].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* Music video */}
            <div
              className="relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.03] hover:rotate-1 hover:translate-y-[-5px]"
              style={{
                perspective: "1000px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Link href={featuredVideos[2].url}>
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src={featuredVideos[2].image || "/placeholder.svg?height=720&width=1280&query=music+album"}
                    alt="Kendrick Lamar Mixtape"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute right-4 top-4">
                    <div className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Play className="h-5 w-5 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                      {featuredVideos[2].category}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-2 line-clamp-2 drop-shadow-md">
                      {featuredVideos[2].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
