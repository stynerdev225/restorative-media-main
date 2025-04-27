"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Link from "next/link"

interface GamingNewsItemProps {
  title: string
  image: string
  date: string
  slug: string
}

function GamingNewsItem({ title, image, date, slug }: GamingNewsItemProps) {
  return (
    <Link href={`/gaming/${slug}`} className="flex flex-col group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded mb-2 group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 px-2 py-1 text-xs font-bold text-white uppercase">GAMING</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
      </div>
      <h3 className="font-medium text-sm line-clamp-2 group-hover:text-red-500 transition-colors">{title}</h3>
      <div className="text-xs mt-1 text-gray-500">{date}</div>
    </Link>
  )
}

export function GamingNews() {
  const [showMore, setShowMore] = useState(false)

  const initialNews = [
    {
      title: "Death Stranding: No showing at E3 this year, says Kojima",
      image: "/death-stranding.png",
      date: "SEPTEMBER 5, 2017",
      slug: "death-stranding-no-e3",
    },
    {
      title: "Pokémon Go celebrates first birthday with events across the globe",
      image: "/pokemon-go.png",
      date: "SEPTEMBER 5, 2017",
      slug: "pokemon-go-first-birthday",
    },
    {
      title: "Watch Video of New Toy Story World in Kingdom Hearts 3 – Will Release 2018",
      image: "/kingdom-hearts.png",
      date: "SEPTEMBER 5, 2017",
      slug: "kingdom-hearts-3-toy-story",
    },
    {
      title: "New Marvel Vs. Capcom: Infinite Gameplay Video Reveals Iron Man vs Mega Man",
      image: "/marvel-capcom.png",
      date: "SEPTEMBER 5, 2017",
      slug: "marvel-vs-capcom-infinite",
    },
  ]

  const additionalNews = [
    // Row 1
    {
      title: "Destiny 2 PC Beta Dates Announced, System Requirements Revealed",
      image: "/destiny-2.png",
      date: "SEPTEMBER 4, 2017",
      slug: "destiny-2-pc-beta",
    },
    {
      title: "Final Fantasy XV Multiplayer Expansion 'Comrades' Gets Release Date",
      image: "/final-fantasy-xv.png",
      date: "SEPTEMBER 4, 2017",
      slug: "final-fantasy-xv-comrades",
    },
    {
      title: "Overwatch League Teams Announced, Includes Teams From Four Continents",
      image: "/overwatch.png",
      date: "SEPTEMBER 4, 2017",
      slug: "overwatch-league-teams",
    },
    {
      title: "The Last of Us Part II Development Update From Naughty Dog",
      image: "/last-of-us.png",
      date: "SEPTEMBER 4, 2017",
      slug: "last-of-us-part-ii",
    },
    // Row 2
    {
      title: "Assassin's Creed Origins: New Gameplay Shows Off Ancient Egypt",
      image: "/assassins-creed.png",
      date: "SEPTEMBER 3, 2017",
      slug: "assassins-creed-origins-gameplay",
    },
    {
      title: "Call of Duty: WWII Beta Extended, New Features Added",
      image: "/call-of-duty.png",
      date: "SEPTEMBER 3, 2017",
      slug: "call-of-duty-wwii-beta-extended",
    },
    {
      title: "Monster Hunter World Release Date Announced With New Trailer",
      image: "/monster-hunter.png",
      date: "SEPTEMBER 3, 2017",
      slug: "monster-hunter-world-release-date",
    },
    {
      title: "Red Dead Redemption 2 Gameplay Details Leaked Online",
      image: "/red-dead.png",
      date: "SEPTEMBER 3, 2017",
      slug: "red-dead-redemption-2-gameplay-details-leaked",
    },
    // Row 3
    {
      title: "Fortnite Battle Royale Mode Announced, Free-to-Play Coming Soon",
      image: "/fortnite.png",
      date: "SEPTEMBER 2, 2017",
      slug: "fortnite-battle-royale-mode-announced",
    },
    {
      title: "Minecraft Better Together Update Brings Cross-Platform Play",
      image: "/minecraft.png",
      date: "SEPTEMBER 2, 2017",
      slug: "minecraft-better-together-update",
    },
    {
      title: "Star Wars Battlefront II Beta Details and Dates Revealed",
      image: "/star-wars.png",
      date: "SEPTEMBER 2, 2017",
      slug: "star-wars-battlefront-2-beta-details",
    },
    {
      title: "The Witcher 3 Gets PS4 Pro 4K Update, Xbox One X Support Coming",
      image: "/witcher-3.png",
      date: "SEPTEMBER 2, 2017",
      slug: "witcher-3-ps4-pro-4k-update",
    },
  ]

  const handleLoadMore = () => {
    setShowMore(true)
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">GAMING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {initialNews.map((item, index) => (
            <GamingNewsItem 
              key={`initial-${index}`} 
              title={item.title} 
              image={item.image} 
              date={item.date} 
              slug={item.slug} 
            />
          ))}

          {showMore &&
            additionalNews.map((item, index) => (
              <GamingNewsItem 
                key={`additional-${index}`} 
                title={item.title} 
                image={item.image} 
                date={item.date} 
                slug={item.slug} 
              />
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
