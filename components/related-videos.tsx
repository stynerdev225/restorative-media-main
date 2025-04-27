import Link from "next/link"
import { Play } from "lucide-react"

interface RelatedVideoProps {
  title: string
  image: string
  views: string
  time: string
  category?: string
  date?: string
  url?: string
}

function RelatedVideoCard({ title, category, image, views, date, time, url }: RelatedVideoProps) {
  return (
    <Link href={url || "#"} className="group block">
      <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
          {category && (
            <div className="absolute top-3 left-3">
              <span className="bg-restorative-gold px-2 py-1 text-xs font-bold text-white uppercase rounded shadow-md">
                {category}
              </span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-white/30">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-bold text-white text-shadow-sm line-clamp-2 group-hover:text-restorative-gold transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-xs text-white/80 mt-1">
              <span>{views}</span>
              <span className="mx-1">•</span>
              <span>{time || date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

interface RelatedVideosProps {
  videos: RelatedVideoProps[]
}

export function RelatedVideos({ videos }: RelatedVideosProps) {
  // Use passed videos if available, otherwise use default videos
  const displayVideos = videos || [
    {
      title: "Star Wars: The Force Awakens - Complete Analysis",
      category: "MOVIE",
      image: "/related-force-awakens.png",
      views: "1.5M views",
      date: "2 years ago",
      time: "15:30",
      url: "/movie/force-awakens-analysis",
    },
    {
      title: "Rogue One: A Star Wars Story - Behind the Scenes",
      category: "MOVIE",
      image: "/related-rogue-one.png",
      views: "876K views",
      date: "1 year ago",
      time: "12:45",
      url: "/movie/rogue-one-behind-scenes",
    },
    {
      title: "The Evolution of Star Wars Special Effects",
      category: "MOVIE",
      image: "/related-special-effects.png",
      views: "543K views",
      date: "8 months ago",
      time: "18:20",
      url: "/movie/star-wars-special-effects",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayVideos.map((video, index) => (
        <RelatedVideoCard
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
