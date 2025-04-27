"use client"

import { useState } from "react"
import { VideoCard } from "@/components/video-card"
import Link from "next/link"

const categories = ["ALL", "MOVIE", "MUSIC", "TECH", "SPORTS", "TRAVEL"]

export function FeaturedVideos() {
  const [showMore, setShowMore] = useState(false)

  const initialVideos = [
    {
      category: "FOOD",
      title: "This Is How All Your Favorite Chefs Make Scrambled Eggs",
      date: "SEPTEMBER 5, 2017",
      image: "/herbed-scramble.png",
      categoryColor: "bg-restorative-gold",
      url: "/food/scrambled-eggs-chefs",
    },
    {
      category: "MOVIE",
      title: "'Game of Thrones' premiere proves the ladies are running the show",
      date: "SEPTEMBER 5, 2017",
      image: "/castle-contemplation.png",
      categoryColor: "bg-restorative-gold",
      url: "/movie/game-of-thrones-premiere",
    },
    {
      category: "MUSIC",
      title: "The Complete History Of Daft Punk Told Through A Creative Infographic",
      date: "SEPTEMBER 5, 2017",
      image: "/professional-recording-studio.png",
      categoryColor: "bg-restorative-gold",
      url: "/music/daft-punk-history",
    },
    {
      category: "SPORTS",
      title: "Aggressive Downhill, Cross Country & All Mountain Bike Racing",
      date: "SEPTEMBER 5, 2017",
      image: "/sunset-mountain-bike-race.png",
      categoryColor: "bg-restorative-gold",
      url: "/sports/mountain-bike-racing",
    },
    {
      category: "SPORTS",
      title: "McLaren Drivers Get Honda's Spec 3 Engine For Austria",
      date: "SEPTEMBER 5, 2017",
      image: "/speed-demon.png",
      categoryColor: "bg-restorative-gold",
      url: "/sports/mclaren-honda-engine",
    },
    {
      category: "TECH",
      title: "Xiaomi Mi6 hands on: it's as good as the iPhone 7 Plus",
      date: "SEPTEMBER 5, 2017",
      image: "/crimson-phone.png",
      categoryColor: "bg-restorative-gold",
      url: "/tech/xiaomi-mi6-review",
    },
  ]

  const additionalVideos = [
    // Row 1
    {
      category: "TRAVEL",
      title: "10 Hidden Gems in Southeast Asia You Need to Visit",
      date: "SEPTEMBER 4, 2017",
      image: "/featured-travel-1.jpg",
      categoryColor: "bg-restorative-gold",
      url: "/travel/southeast-asia-gems",
    },
    {
      category: "FOOD",
      title: "The Art of Sourdough: Mastering Bread Making at Home",
      date: "SEPTEMBER 4, 2017",
      image: "/featured-food-1.jpg",
      categoryColor: "bg-restorative-gold",
      url: "/food/sourdough-bread-making",
    },
    {
      category: "TECH",
      title: "The Future of AI: How Machine Learning is Changing Everything",
      date: "SEPTEMBER 4, 2017",
      image: "/featured-tech-1.jpg",
      categoryColor: "bg-restorative-gold",
      url: "/tech/ai-machine-learning",
    },
    // Row 2
    {
      category: "MUSIC",
      title: "Behind the Scenes: How Your Favorite Albums Are Produced",
      date: "SEPTEMBER 3, 2017",
      image: "/featured-music-1.jpg",
      categoryColor: "bg-restorative-gold",
      url: "/music/album-production",
    },
    {
      category: "MOVIE",
      title: "The Evolution of Superhero Films: From Comics to Blockbusters",
      date: "SEPTEMBER 3, 2017",
      image: "/featured-movie-1.jpg",
      categoryColor: "bg-restorative-gold",
      url: "/movie/superhero-film-evolution",
    },
    {
      category: "SPORTS",
      title: "Inside the Mind of Champions: Mental Training for Athletes",
      date: "SEPTEMBER 3, 2017",
      image: "/featured-sports-1.png",
      categoryColor: "bg-restorative-gold",
      url: "/sports/mental-training-athletes",
    },
    // Row 3
    {
      category: "TECH",
      title: "Sustainable Technology: Innovations for a Greener Future",
      date: "SEPTEMBER 2, 2017",
      image: "/featured-tech-2.png",
      categoryColor: "bg-restorative-gold",
      url: "/tech/sustainable-technology",
    },
    {
      category: "TRAVEL",
      title: "Off the Beaten Path: Exploring Remote Destinations",
      date: "SEPTEMBER 2, 2017",
      image: "/featured-travel-2.png",
      categoryColor: "bg-restorative-gold",
      url: "/travel/remote-destinations",
    },
    {
      category: "FOOD",
      title: "Farm to Table: The Journey of Sustainable Cuisine",
      date: "SEPTEMBER 2, 2017",
      image: "/featured-food-2.png",
      categoryColor: "bg-restorative-gold",
      url: "/food/farm-to-table",
    },
  ]

  const handleLoadMore = () => {
    setShowMore(true)
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Restorative Media Home</h2>
          <div className="hidden md:flex space-x-4">
            {categories.map((category) => (
              <button key={category} className="text-sm font-medium text-gray-500 hover:text-restorative-gold">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {initialVideos.map((video, index) => (
            <Link href={video.url} key={`initial-${index}`}>
              <VideoCard
                category={video.category}
                title={video.title}
                date={video.date}
                image={video.image}
                categoryColor={video.categoryColor}
              />
            </Link>
          ))}

          {showMore &&
            additionalVideos.map((video, index) => (
              <Link href={video.url} key={`additional-${index}`}>
                <VideoCard
                  category={video.category}
                  title={video.title}
                  date={video.date}
                  image={video.image}
                  categoryColor={video.categoryColor}
                />
              </Link>
            ))}
        </div>

        {!showMore && (
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="border border-gray-300 text-gray-600 hover:text-gray-900 px-4 sm:px-6 py-2 rounded text-sm font-medium transition-colors w-full sm:w-auto"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
