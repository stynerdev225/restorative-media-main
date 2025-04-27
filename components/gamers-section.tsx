import { VideoCard } from "@/components/video-card"
import Link from "next/link"

const prisonReportVideos = [
  {
    category: "DOCUMENTARY",
    title: "Inside San Quentin: A Look at California's Oldest Prison",
    date: "SEPTEMBER 5, 2017",
    image: "/san-quentin-1.jpg",
    categoryColor: "bg-restorative-gold",
    url: "/documentary/inside-san-quentin",
  },
  {
    category: "DOCUMENTARY",
    title: "Rehabilitation Programs Making a Difference at San Quentin",
    date: "SEPTEMBER 5, 2017",
    image: "/san-quentin-2.jpg",
    categoryColor: "bg-restorative-gold",
    url: "/documentary/rehabilitation-san-quentin",
  },
  {
    category: "DOCUMENTARY",
    title: "The History of San Quentin: From 1852 to Present Day",
    date: "SEPTEMBER 5, 2017",
    image: "/san-quentin-3.jpg",
    categoryColor: "bg-restorative-gold",
    url: "/documentary/history-san-quentin",
  },
  {
    category: "DOCUMENTARY",
    title: "Voices from Within: Inmates Share Their Stories",
    date: "SEPTEMBER 5, 2017",
    image: "/san-quentin-4.jpg",
    categoryColor: "bg-restorative-gold",
    url: "/documentary/inmate-stories-san-quentin",
  },
]

export function GamersSection() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">San Quentin Prison Report</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prisonReportVideos.map((video, index) => (
            <Link key={index} href={video.url} className="flex flex-col group">
              <VideoCard
                category={video.category}
                title=""
                date=""
                image={video.image}
                categoryColor={video.categoryColor}
              />
              <div className="mt-2">
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-restorative-gold transition-colors">{video.title}</h3>
                <div className="text-xs mt-1 text-gray-500">{video.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
