import { Play } from "lucide-react"
import Link from "next/link"

interface VideoItem {
  id: string
  category: string
  title: string
  image: string
  url: string
  date: string
  categoryColor: string
}

interface VideoGridSectionProps {
  title: string
  videos: VideoItem[]
}

export function VideoGridSection({ title, videos }: VideoGridSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="relative group overflow-hidden rounded-md">
              <Link href={video.url}>
                <div className="aspect-[16/9] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 text-xs font-bold text-white uppercase bg-${video.categoryColor || "restorative-gold"}`}
                    >
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-black/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="font-bold line-clamp-2">{video.title}</h3>
                    <div className="text-xs mt-1 opacity-80">{video.date}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
