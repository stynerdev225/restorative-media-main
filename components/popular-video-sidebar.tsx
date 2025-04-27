import { Play } from "lucide-react"
import Link from "next/link"

interface VideoItem {
  id: string
  category: string
  title: string
  image: string
  url: string
  date: string
}

interface PopularVideoSidebarProps {
  videos: VideoItem[]
}

export function PopularVideoSidebar({ videos }: PopularVideoSidebarProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Popular Video</h2>

      {videos.map((video) => (
        <div key={video.id} className="flex space-x-4 group">
          <div className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
            <Link href={video.url}>
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-black/40 flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex-1">
            <Link href={video.url} className="hover:text-restorative-gold transition-colors">
              <h3 className="font-bold line-clamp-2 text-sm">{video.title}</h3>
            </Link>
            <div className="text-xs mt-1 text-gray-500">{video.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
