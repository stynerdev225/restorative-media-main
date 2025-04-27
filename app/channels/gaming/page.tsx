import Link from "next/link"

export default function GamingChannelPage() {
  // Sample data for gaming videos
  const featuredVideos = [
    {
      id: 1,
      title: "Death Stranding: Director's Commentary",
      image: "/death-stranding.png",
      views: "1.2M",
      date: "3 days ago",
      duration: "15:42",
      channel: "GameSpot",
    },
    {
      id: 2,
      title: "Pokémon GO: 5 Years Later",
      image: "/pokemon-go.png",
      views: "856K",
      date: "1 week ago",
      duration: "12:18",
      channel: "Nintendo Life",
    },
    {
      id: 3,
      title: "Kingdom Hearts 4: Everything We Know",
      image: "/kingdom-hearts.png",
      views: "1.5M",
      date: "2 days ago",
      duration: "18:24",
      channel: "IGN",
    },
    {
      id: 4,
      title: "Marvel vs Capcom: Tournament Highlights",
      image: "/marvel-capcom.png",
      views: "723K",
      date: "5 days ago",
      duration: "22:10",
      channel: "EVO Championship",
    },
    {
      id: 5,
      title: "Call of Duty: Modern Warfare - Multiplayer Tips",
      image: "/call-of-duty.png",
      views: "2.1M",
      date: "1 month ago",
      duration: "14:35",
      channel: "GameRanx",
    },
    {
      id: 6,
      title: "Monster Hunter Rise: Sunbreak Expansion Review",
      image: "/monster-hunter.png",
      views: "950K",
      date: "2 weeks ago",
      duration: "16:42",
      channel: "Arekkz Gaming",
    },
    {
      id: 7,
      title: "Red Dead Redemption 2: Hidden Secrets",
      image: "/red-dead.png",
      views: "3.2M",
      date: "3 months ago",
      duration: "25:18",
      channel: "Rockstar Mag",
    },
    {
      id: 8,
      title: "Fortnite Chapter 4: Map Changes Explained",
      image: "/fortnite.png",
      views: "1.8M",
      date: "1 week ago",
      duration: "10:24",
      channel: "Ali-A",
    },
  ]

  const popularGames = [
    { name: "Minecraft", image: "/minecraft.png" },
    { name: "Star Wars Jedi: Survivor", image: "/star-wars.png" },
    { name: "The Witcher 3", image: "/witcher-3.png" },
    { name: "Destiny 2", image: "/destiny-2.png" },
    { name: "Final Fantasy XV", image: "/final-fantasy-xv.png" },
    { name: "Overwatch 2", image: "/overwatch.png" },
    { name: "The Last of Us Part II", image: "/last-of-us.png" },
    { name: "Assassin's Creed Valhalla", image: "/assassins-creed.png" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/channel-gaming-stock.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">GAMING</h1>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Videos</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">Latest</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Popular</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Trending</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.slice(0, 4).map((video) => (
                <div key={video.id} className="group relative overflow-hidden rounded">
                  <div className="aspect-video relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${video.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-restorative-gold px-2 py-1 text-xs font-bold text-white uppercase">
                        GAMING
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 px-2 py-1 text-xs text-white rounded">{video.duration}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="font-bold line-clamp-2">{video.title}</h3>
                      <div className="flex items-center text-xs mt-1 opacity-80">
                        <span>{video.channel}</span>
                        <span className="mx-1">•</span>
                        <span>{video.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Games */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {popularGames.map((game, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${game.image})` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-center">{game.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More Videos */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Gaming Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.slice(4).map((video) => (
                <div key={video.id} className="group relative overflow-hidden rounded">
                  <div className="aspect-video relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${video.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-restorative-gold px-2 py-1 text-xs font-bold text-white uppercase">
                        GAMING
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 px-2 py-1 text-xs text-white rounded">{video.duration}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="font-bold line-clamp-2">{video.title}</h3>
                      <div className="flex items-center text-xs mt-1 opacity-80">
                        <span>{video.channel}</span>
                        <span className="mx-1">•</span>
                        <span>{video.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gaming News */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Gaming News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/arcane-clash.png')" }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">E-Sports Tournament Announces $2M Prize Pool</h3>
                  <p className="text-gray-600 text-sm">
                    The biggest gaming tournament of the year has just announced its record-breaking prize pool for
                    competitors.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2 hours ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/shrouded-blade.png')" }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Highly Anticipated RPG Delayed Until 2024</h3>
                  <p className="text-gray-600 text-sm">
                    Developers cite need for additional polish and feature implementation as reasons for the delay.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">1 day ago</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/glowing-victory-cup.png')" }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Gaming Industry Reaches New Revenue Milestone</h3>
                  <p className="text-gray-600 text-sm">
                    The global gaming market has surpassed $200 billion in annual revenue for the first time.
                  </p>
                  <p className="text-gray-500 text-xs mt-2">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
