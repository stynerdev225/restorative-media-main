"use client"

import { useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"

interface MovieItemProps {
  category: string
  title: string
  date: string
  image: string
  categoryColor: string
  link?: string
}

function MovieItem({ category, title, date, image, categoryColor, link }: MovieItemProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded mb-2 group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-3 left-3">
          <span className={`${categoryColor} px-2 py-1 text-xs font-bold text-white uppercase`}>{category}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
      </div>
      <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
      <div className="text-xs mt-1 text-gray-500">{date}</div>
    </div>
  )
}

export function MovieTVSection() {
  const [showMore, setShowMore] = useState(false)

  const initialMovies = [
    // Row 1
    {
      category: "MOVIE",
      title: "Everything we just learned about 'The Last Jedi'",
      date: "SEPTEMBER 5, 2017",
      image: "/last-jedi.png",
      categoryColor: "bg-red-500",
      link: "/movie/the-last-jedi",
    },
    {
      category: "MOVIE",
      title: "Marvel unleashes first 'Infinity War' teaser trailer, its surprising",
      date: "SEPTEMBER 5, 2017",
      image: "/infinity-war.png",
      categoryColor: "bg-red-500",
      link: "/movie/infinity-war",
    },
    {
      category: "MOVIE",
      title: "Here's Wonder Woman just hanging with her Justice League boys",
      date: "SEPTEMBER 5, 2017",
      image: "/wonder-woman.png",
      categoryColor: "bg-red-500",
      link: "/movie/wonder-woman",
    },
    {
      category: "MOVIE",
      title: "Fullmetal Alchemist Live-Action Movie Releases Its First Full Trailer",
      date: "SEPTEMBER 5, 2017",
      image: "/fullmetal-alchemist.png",
      categoryColor: "bg-red-500",
      link: "/movie/fullmetal-alchemist",
    },
    // Row 2
    {
      category: "FOOD",
      title: "Chicago's Best Burger: Because we all love Krabby Patty",
      date: "SEPTEMBER 5, 2017",
      image: "/chicago-burger.png",
      categoryColor: "bg-green-500",
      link: "/food/chicago-best-burger",
    },
    {
      category: "MOVIE",
      title: "Agent 327: Operation Barbershop: An Animated Film Based on Martin Lodewijk's Comic",
      date: "SEPTEMBER 5, 2017",
      image: "/anonymous-tapes.png",
      categoryColor: "bg-red-500",
      link: "/movie/agent-327-operation-barbershop",
    },
    {
      category: "MOVIE",
      title: "This Theory About The Ending Of Interstellar Changes Everything",
      date: "SEPTEMBER 5, 2017",
      image: "/space-battles.png",
      categoryColor: "bg-red-500",
      link: "/movie/interstellar-theory",
    },
    {
      category: "FOOD",
      title: "This Great Street Food Truck You Should Try in Seminyak",
      date: "SEPTEMBER 5, 2017",
      image: "/street-food-seminyak.png",
      categoryColor: "bg-green-500",
      link: "/food/seminyak-street-food",
    },
  ]

  const additionalMovies = [
    // Row 3
    {
      category: "TV",
      title: "Game of Thrones Season 8: Everything We Know So Far",
      date: "SEPTEMBER 4, 2017",
      image: "/movie-unsplash-1.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/game-of-thrones-season-8",
    },
    {
      category: "MOVIE",
      title: "Blade Runner 2049: New Trailer Reveals More About Ryan Gosling's Character",
      date: "SEPTEMBER 4, 2017",
      image: "/movie-unsplash-2.jpg",
      categoryColor: "bg-red-500",
      link: "/movie/blade-runner-2049-trailer",
    },
    {
      category: "TV",
      title: "Stranger Things Season 2 Will Be Darker and More Intense",
      date: "SEPTEMBER 4, 2017",
      image: "/movie-unsplash-3.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/stranger-things-season-2",
    },
    {
      category: "MOVIE",
      title: "Star Wars: The Last Jedi Director Explains Why Kylo Ren Is Compelling",
      date: "SEPTEMBER 4, 2017",
      image: "/movie-unsplash-4.jpg",
      categoryColor: "bg-red-500",
      link: "/movie/star-wars-last-jedi-kylo-ren",
    },
    // Row 4
    {
      category: "TV",
      title: "The Walking Dead Season 8 Will Have More Action Than Ever Before",
      date: "SEPTEMBER 3, 2017",
      image: "/movie-unsplash-5.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/walking-dead-season-8",
    },
    {
      category: "MOVIE",
      title: "IT Movie Review: A Terrifying Adaptation of Stephen King's Novel",
      date: "SEPTEMBER 3, 2017",
      image: "/movie-unsplash-6.jpg",
      categoryColor: "bg-red-500",
      link: "/movie/it-movie-review",
    },
    {
      category: "FOOD",
      title: "The Best Food Scenes in Movies and What They Mean",
      date: "SEPTEMBER 3, 2017",
      image: "/movie-unsplash-7.jpg",
      categoryColor: "bg-green-500",
      link: "/food/best-food-scenes-movies",
    },
    {
      category: "TV",
      title: "Westworld Season 2: New Characters and Locations Revealed",
      date: "SEPTEMBER 3, 2017",
      image: "/movie-unsplash-8.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/westworld-season-2",
    },
    // Row 5
    {
      category: "MOVIE",
      title: "Thor: Ragnarok Director Explains Why He Chose '80s Aesthetic'",
      date: "SEPTEMBER 2, 2017",
      image: "/movie-unsplash-9.jpg",
      categoryColor: "bg-red-500",
      link: "/movie/thor-ragnarok-80s-aesthetic",
    },
    {
      category: "TV",
      title: "The Crown Season 2 Gets Release Date and First Trailer",
      date: "SEPTEMBER 2, 2017",
      image: "/movie-unsplash-10.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/crown-season-2-release-date",
    },
    {
      category: "MOVIE",
      title: "Justice League: New Footage Shows More of the Team in Action",
      date: "SEPTEMBER 2, 2017",
      image: "/movie-unsplash-11.jpg",
      categoryColor: "bg-red-500",
      link: "/movie/justice-league-new-footage",
    },
    {
      category: "TV",
      title: "Black Mirror Season 4: All Episode Titles and Directors Revealed",
      date: "SEPTEMBER 2, 2017",
      image: "/movie-unsplash-12.jpg",
      categoryColor: "bg-purple-500",
      link: "/tv/black-mirror-season-4-episode-titles-directors-revealed",
    },
  ]

  const handleLoadMore = () => {
    setShowMore(true)
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Troy Williams Journal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {initialMovies.map((movie, index) => {
            // Special handling for the second row (indices 4-7)
            if (index >= 4 && index <= 7) {
              return (
                <a
                  href={movie.link || "#"}
                  key={`initial-${index}`}
                  className="cursor-pointer"
                >
                  <MovieItem
                    category={movie.category}
                    title={movie.title}
                    date={movie.date}
                    image={movie.image}
                    categoryColor={movie.categoryColor}
                  />
                </a>
              );
            }

            // Regular handling for other cards
            return (
              <Link
                href={movie.link || "#"}
                key={`initial-${index}`}
              >
                <MovieItem
                  category={movie.category}
                  title={movie.title}
                  date={movie.date}
                  image={movie.image}
                  categoryColor={movie.categoryColor}
                />
              </Link>
            );
          })}

          {showMore &&
            additionalMovies.map((movie, index) => (
              <Link href={movie.link || "#"} key={`additional-${index}`}>
                <MovieItem
                  category={movie.category}
                  title={movie.title}
                  date={movie.date}
                  image={movie.image}
                  categoryColor={movie.categoryColor}
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
