import Link from "next/link"
import { Play } from "lucide-react"

interface RecommendedVideoProps {
  title: string
  image: string
  views: string
  time: string
  category?: string
  date?: string
  url?: string
}

function RecommendedVideoCard({ title, category, image, views, date, time, url }: RecommendedVideoProps) {
  return (
    <Link href={url || "#"} className="flex gap-3 group mb-4">
      <div className="relative w-24 h-16 overflow-hidden rounded flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="h-3 w-3 text-white fill-white" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-restorative-gold transition-colors">
          {title}
        </h3>
        <div className="flex items-center mt-1">
          {category && (
            <>
              <span className="text-xs text-restorative-gold">{category}</span>
              <span className="mx-1 text-xs text-gray-400">•</span>
            </>
          )}
          <span className="text-xs text-gray-400">{views}</span>
          <span className="mx-1 text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">{time || date}</span>
        </div>
      </div>
    </Link>
  )
}

interface RecommendedVideosProps {
  videos: RecommendedVideoProps[]
}

export function RecommendedVideos({ videos }: RecommendedVideosProps) {
  // Use passed videos if available, otherwise use default videos
  const displayVideos = videos || [
    {
      title: "This Is How All Your Favorite Chefs Make Scrambled Eggs",
      category: "FOOD",
      image: "/herbed-scramble.png",
      views: "1.2M views",
      time: "12:45",
      date: "Sep 5, 2017",
      url: "/food/scrambled-eggs-chefs",
    },
    {
      title: "Chicago's Best Burger: Because we all love Krabby Patty",
      category: "FOOD",
      image: "/chicago-burger.png",
      views: "980K views",
      time: "15:30",
      date: "Sep 5, 2017",
      url: "/food/chicago-best-burger",
    },
    {
      title: "This Great Street Food Truck You Should Try in Seminyak",
      category: "FOOD",
      image: "/street-food-seminyak.png",
      views: "756K views",
      time: "10:15",
      date: "Sep 5, 2017",
      url: "/food/seminyak-street-food",
    },
    {
      title: "The Art of Sourdough: Mastering Bread Making at Home",
      category: "FOOD",
      image: "/featured-food-1.jpg",
      views: "1.1M views",
      time: "18:22",
      date: "Sep 4, 2017",
      url: "/food/sourdough-bread-making",
    },
    {
      title: "Farm to Table: The Journey of Sustainable Cuisine",
      category: "FOOD",
      image: "/featured-food-2.jpg",
      views: "875K views",
      time: "14:45",
      date: "Sep 2, 2017",
      url: "/food/farm-to-table",
    },
  ]

  return (
    <div>
      {displayVideos.map((video, index) => (
        <RecommendedVideoCard
          key={index}
          title={video.title}
          category={video.category}
          image={video.image}
          views={video.views}
          date={video.date}
          time={video.time}
          url={video.url}
        />
      ))}
    </div>
  )
}
