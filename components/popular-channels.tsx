import Link from "next/link"

interface ChannelCardProps {
  title: string
  image: string
  href: string
}

function ChannelCard({ title, image, href }: ChannelCardProps) {
  return (
    <Link href={href} className="block relative overflow-hidden rounded-lg aspect-[4/3] group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">{title}</h3>
      </div>
    </Link>
  )
}

export function PopularChannels() {
  const channels = [
    {
      title: "GAMING",
      image: "/channel-gaming-stock.jpg",
      href: "/channels/gaming",
    },
    {
      title: "Movie & Series",
      image: "/channel-movie-stock.jpg",
      href: "/channels/movies",
    },
    {
      title: "MUSIC",
      image: "/channel-music-stock.jpg",
      href: "/channels/music",
    },
    {
      title: "SPORTS",
      image: "/channel-sports-stock.jpg",
      href: "/channels/sports",
    },
    {
      title: "FOOD",
      image: "/channel-food-stock.jpg",
      href: "/channels/food",
    },
    {
      title: "TRAVEL",
      image: "/remote-destinations-new.png",
      href: "/channels/travel",
    },
  ]

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Video Channels</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {channels.map((channel, index) => (
            <ChannelCard key={index} title={channel.title} image={channel.image} href={channel.href} />
          ))}
        </div>
      </div>
    </section>
  )
}
