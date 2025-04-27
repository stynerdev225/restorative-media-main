import { Play } from "lucide-react"

interface VideoCardProps {
  category: string
  title: string
  date: string
  image: string
  categoryColor?: string
}

export function VideoCard({ category, title, date, image, categoryColor = "bg-restorative-gold" }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded">
      <div className="aspect-video relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-3 left-3">
          <span className={`${categoryColor} px-2 py-1 text-xs font-bold text-white uppercase inline-block`}>
            {category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-4 w-4 sm:h-6 sm:w-6 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="font-bold text-sm sm:text-base line-clamp-2">{title}</h3>
          <div className="text-xs mt-1 opacity-80">{date}</div>
        </div>
      </div>
    </div>
  )
}
