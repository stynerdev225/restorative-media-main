"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Play, Info, ExternalLink, ChevronDown } from "lucide-react"
import { SafeImage } from "@/components/safe-image"

// Define the show type for better type safety
interface Show {
  id: string | number
  title: string
  image: string
  description: string
  rating: string
  genre?: string
  year?: string
}

// Define the category type
interface Category {
  id: string | number
  title: string
  image: string
  color: string
}

// Define the trailer type
interface Trailer {
  id: string | number
  title: string
  image: string
  category: string
  duration: string
}

interface Book {
  id: string | number
  title: string
  image: string
  author: string
  amazonUrl: string
  publisher: string
}

export default function LoginPage() {
  const router = useRouter()
  const [actionPage, setActionPage] = useState(0)
  const [feelGoodPage, setFeelGoodPage] = useState(0)
  const [tvShowsPage, setTvShowsPage] = useState(0)
  const [mustSeeHitsPage, setMustSeeHitsPage] = useState(0)
  const [bestsellerPage, setBestsellerPage] = useState(0)
  const [fictionPage, setFictionPage] = useState(0)
  const [isOpenArray, setIsOpenArray] = useState(Array(6).fill(false))

  // Action shows - 14 cards (2 pages of 7)
  const actionShows: Show[] = [
    {
      id: 1,
      title: "The Last Jedi",
      image: "/last-jedi.png",
      description:
        "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
      rating: "PG-13",
    },
    {
      id: 2,
      title: "Infinity War",
      image: "/infinity-war.png",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      rating: "PG-13",
    },
    {
      id: 3,
      title: "Wonder Woman",
      image: "/wonder-woman.png",
      description:
        "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
      rating: "PG-13",
    },
    {
      id: 4,
      title: "Fullmetal Alchemist",
      image: "/fullmetal-alchemist.png",
      description:
        "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong and leaves them in damaged physical forms.",
      rating: "TV-14",
    },
    {
      id: 5,
      title: "Mountain Bike Racing",
      image: "/mountain-biking-hero.png",
      description:
        "Follow the world's top mountain bikers as they brave treacherous trails and compete in the most challenging downhill races across five continents.",
      rating: "TV-PG",
    },
    {
      id: 6,
      title: "Martial Arts Masters",
      image: "/martial-arts-masters.png",
      description:
        "Discover the ancient traditions and modern applications of martial arts through the eyes of masters who have dedicated their lives to these disciplines.",
      rating: "TV-14",
    },
    {
      id: 7,
      title: "Extreme Sports",
      image: "/extreme-sports.png",
      description:
        "Adrenaline junkies push the boundaries of human capability in this heart-pounding documentary showcasing the world's most dangerous and thrilling extreme sports.",
      rating: "TV-14",
    },
    // Page 2 - 7 more cards
    {
      id: 8,
      title: "Racing Champions",
      image: "/racing-champions.png",
      description:
        "Experience the high-octane world of professional racing, following the lives of champions as they compete for glory on tracks around the world.",
      rating: "TV-PG",
    },
    {
      id: 9,
      title: "Superhero Origins",
      image: "/superhero-origins.png",
      description:
        "Explore the fascinating origin stories behind your favorite comic book heroes and how they evolved from page to screen over decades of popular culture.",
      rating: "TV-PG",
    },
    {
      id: 10,
      title: "Samurai Legacy",
      image: "/samurai-legacy.png",
      description:
        "Journey through feudal Japan to uncover the true history of the samurai warriors, their code of honor, and their lasting impact on Japanese culture.",
      rating: "TV-14",
    },
    {
      id: 11,
      title: "Space Battles",
      image: "/space-battles.png",
      description:
        "Epic intergalactic conflicts come to life in this sci-fi adventure series where the fate of entire civilizations hangs in the balance of cosmic warfare.",
      rating: "TV-14",
    },
    {
      id: 12,
      title: "Ninja Warriors",
      image: "/ninja-warriors.png",
      description:
        "The secretive world of ninja assassins is revealed through historical accounts and modern practitioners who keep these ancient stealth techniques alive.",
      rating: "TV-14",
    },
    {
      id: 13,
      title: "Boxing Legends",
      image: "/boxing-legends.png",
      description:
        "Step into the ring with history's greatest boxers, exploring their rise to fame, legendary matches, and the personal struggles behind their public personas.",
      rating: "TV-14",
    },
    {
      id: 14,
      title: "Stunt Performers",
      image: "/stunt-performers.png",
      description:
        "Meet the unsung heroes of action films - the stunt performers who risk their lives to create cinema's most spectacular and dangerous sequences.",
      rating: "TV-14",
    },
  ]

  // Feel-Good shows - 14 cards (2 pages of 7)
  const feelGoodShows: Show[] = [
    {
      id: 1,
      title: "Chicago's Best Burger",
      image: "/chicago-burger.png",
      description:
        "Join food critic Marcus Chen as he searches through Chicago's neighborhoods to find the city's most delicious and authentic burger experiences.",
      rating: "TV-G",
    },
    {
      id: 2,
      title: "Album Production",
      image: "/featured-music-1.jpg",
      description:
        "Go behind the scenes with today's top music producers as they craft chart-topping albums and reveal the creative process behind hit songs.",
      rating: "TV-PG",
    },
    {
      id: 3,
      title: "Seminyak Street Food",
      image: "/street-food-seminyak.png",
      description:
        "Explore the vibrant street food culture of Seminyak, Bali, where traditional Indonesian flavors meet international influences in a culinary paradise.",
      rating: "TV-G",
    },
    {
      id: 4,
      title: "Remote Destinations",
      image: "/remote-destinations-new.png",
      description:
        "Travel to the world's most isolated and breathtaking locations, where few tourists venture and ancient ways of life continue undisturbed by modern society.",
      rating: "TV-G",
    },
    {
      id: 5,
      title: "Culinary Adventures",
      image: "/culinary-adventures.png",
      description:
        "Follow renowned chef Isabella Moreno as she journeys around the world, learning traditional cooking techniques and creating fusion dishes inspired by local ingredients.",
      rating: "TV-G",
    },
    {
      id: 6,
      title: "Wellness Retreats",
      image: "/wellness-retreats.png",
      description:
        "Discover the world's most rejuvenating wellness destinations, from mountain ashrams to beachside yoga retreats, focusing on holistic health and mindfulness.",
      rating: "TV-G",
    },
    {
      id: 7,
      title: "Pet Therapy",
      image: "/pet-therapy.png",
      description:
        "Witness the healing power of animals as therapy pets bring comfort, joy and remarkable health benefits to people facing physical and emotional challenges.",
      rating: "TV-G",
    },
    // Page 2 - 7 more cards
    {
      id: 8,
      title: "Baking Champions",
      image: "/baking-champions.png",
      description:
        "Amateur bakers compete to create spectacular cakes, pastries, and breads, showcasing their skills and creativity under pressure in this delightful competition.",
      rating: "TV-G",
    },
    {
      id: 9,
      title: "Garden Makeovers",
      image: "/garden-makeovers.png",
      description:
        "Watch as landscape designers transform neglected outdoor spaces into stunning gardens, bringing beauty and tranquility to deserving homeowners.",
      rating: "TV-G",
    },
    {
      id: 10,
      title: "Tiny Homes",
      image: "/tiny-homes.png",
      description:
        "Explore the tiny house movement as innovative designers create functional, beautiful living spaces in under 400 square feet for people embracing minimalist lifestyles.",
      rating: "TV-G",
    },
    {
      id: 11,
      title: "Family Reunions",
      image: "/family-reunions.png",
      description:
        "Emotional journeys unfold as long-separated family members reconnect, often meeting for the first time after decades apart or discovering unknown relatives.",
      rating: "TV-PG",
    },
    {
      id: 12,
      title: "Volunteer Heroes",
      image: "/volunteer-heroes.png",
      description:
        "Meet everyday people making extraordinary differences in their communities through volunteer work, from disaster relief to mentoring at-risk youth.",
      rating: "TV-G",
    },
    {
      id: 13,
      title: "Inspiring Teachers",
      image: "/inspiring-teachers.png",
      description:
        "Celebrate educators who go above and beyond, transforming students' lives through innovative teaching methods and unwavering dedication.",
      rating: "TV-G",
    },
    {
      id: 14,
      title: "Rescue Animals",
      image: "/rescue-animals.png",
      description:
        "Follow heartwarming stories of abandoned and injured animals finding rehabilitation, recovery and forever homes thanks to dedicated rescue organizations.",
      rating: "TV-G",
    },
  ]

  // TV Shows - 14 cards (2 pages of 7)
  const tvShows: Show[] = [
    {
      id: 1,
      title: "Inside San Quentin",
      image: "/san-quentin-1.jpg",
      description:
        "Explore the rehabilitation programs transforming lives inside one of America's most notorious prisons, offering inmates a path to redemption and hope.",
      rating: "TV-14",
    },
    {
      id: 2,
      title: "Game of Thrones Premiere",
      image: "/got-women-power.jpg",
      description:
        "An in-depth analysis of the cultural phenomenon that was Game of Thrones, examining its impact on television and pop culture worldwide.",
      rating: "TV-MA",
    },
    {
      id: 3,
      title: "Daft Punk History",
      image: "/daft-punk-evolution.jpg",
      description:
        "Chart the revolutionary career of electronic music pioneers Daft Punk, from their early days in the French house scene to global superstardom.",
      rating: "TV-14",
    },
    {
      id: 4,
      title: "Sustainable Technology",
      image: "/sustainable-technology-new.png",
      description:
        "Discover cutting-edge innovations in sustainable technology that are helping combat climate change and creating a more environmentally friendly future.",
      rating: "TV-G",
    },
    {
      id: 5,
      title: "Space Exploration",
      image: "/space-exploration.png",
      description:
        "Journey to the frontiers of human knowledge as scientists and astronauts push the boundaries of space exploration with groundbreaking missions.",
      rating: "TV-G",
    },
    {
      id: 6,
      title: "True Crime Stories",
      image: "/true-crime-stories.png",
      description:
        "Delve into notorious criminal cases with detailed investigations, expert analysis, and interviews with those involved in solving these compelling mysteries.",
      rating: "TV-14",
    },
    {
      id: 7,
      title: "Wildlife Documentaries",
      image: "/wildlife-documentaries.png",
      description:
        "Experience the wonders of the natural world through stunning cinematography capturing rare animal behaviors in the most remote wilderness areas.",
      rating: "TV-G",
    },
    // Page 2 - 7 more cards
    {
      id: 8,
      title: "Medical Mysteries",
      image: "/medical-mysteries.png",
      description:
        "Follow doctors as they diagnose and treat patients with rare and baffling medical conditions, showcasing the detective work involved in modern medicine.",
      rating: "TV-14",
    },
    {
      id: 9,
      title: "Historical Dramas",
      image: "/historical-dramas.png",
      description:
        "Step back in time with lavish period dramas that bring pivotal historical events to life through compelling storytelling and meticulous attention to detail.",
      rating: "TV-14",
    },
    {
      id: 10,
      title: "Cooking Competitions",
      image: "/cooking-competitions.png",
      description:
        "Amateur and professional chefs face off in high-pressure cooking challenges that test their culinary skills, creativity, and ability to perform under pressure.",
      rating: "TV-G",
    },
    {
      id: 11,
      title: "Sci-Fi Adventures",
      image: "/sci-fi-adventures.png",
      description:
        "Embark on mind-bending journeys through space and time in these thought-provoking science fiction series that explore the possibilities of future technologies.",
      rating: "TV-14",
    },
    {
      id: 12,
      title: "Political Thrillers",
      image: "/political-thrillers.png",
      description:
        "Navigate the treacherous world of high-stakes politics where power, corruption, and moral ambiguity create tension-filled dramas with unexpected twists.",
      rating: "TV-MA",
    },
    {
      id: 13,
      title: "Reality Challenges",
      image: "/reality-challenges.png",
      description:
        "Contestants push their physical and mental limits in extreme challenges designed to test endurance, strategy, and teamwork in pursuit of substantial prizes.",
      rating: "TV-14",
    },
    {
      id: 14,
      title: "Comedy Specials",
      image: "/comedy-specials.png",
      description:
        "Laugh along with stand-up performances from comedy's biggest stars and rising talents as they share hilarious observations about life, culture, and society.",
      rating: "TV-MA",
    },
  ]

  // Featured Show - Similar to the "Lifestyles of the Rich and Scandalous" banner
  const featuredPromo = {
    id: "featured-promo",
    title: "YOUR FRIENDS & NEIGHBORS",
    subtitle: "New Episodes Fridays",
    callToAction: "Watch it on Restorative Media now.",
    image: "/twilight-contemplation.png",
    description: "A gripping drama about the secrets that lie behind the perfect facades of suburban life.",
    rating: "TV-MA",
  }

  // Browse by Category - 4 cards
  const categories: Category[] = [
    {
      id: 1,
      title: "Coming Soon",
      image: "/shimmering-gold-flow.png",
      color: "from-amber-700 to-yellow-500",
    },
    {
      id: 2,
      title: "Sci-Fi Films & Series",
      image: "/cosmic-night.png",
      color: "from-indigo-900 to-cyan-600",
    },
    {
      id: 3,
      title: "Kids & Family",
      image: "/fiery-flow.png",
      color: "from-yellow-600 to-red-500",
    },
    {
      id: 4,
      title: "Nonfiction Films & Series",
      image: "/deep-forest-fade.png",
      color: "from-green-900 to-green-600",
    },
  ]

  // Must-See Hits - 4 cards
  const mustSeeHits: Show[] = [
    {
      id: 1,
      title: "SILO",
      image: "/lone-voyager.png",
      description:
        "The world as we know it is gone. A community exists in a giant silo underground, hundreds of stories deep.",
      rating: "TV-MA",
    },
    {
      id: 2,
      title: "SLOW HORSES",
      image: "/rain-soaked-rendezvous.png",
      description:
        "Follow a team of British intelligence agents who serve as a dumping ground for MI5's unwanted personnel.",
      rating: "TV-MA",
    },
    {
      id: 3,
      title: "BAD SISTERS",
      image: "/women-in-shadows.png",
      description:
        "A dark comedy about five sisters who plot to kill their abusive brother-in-law to free their sister from his control.",
      rating: "TV-MA",
    },
    {
      id: 4,
      title: "THE MORNING SHOW",
      image: "/news-team-interview.png",
      description: "An inside look at the modern workplace through the lens of the people who help wake America up.",
      rating: "TV-MA",
    },
  ]

  // Latest Trailers - 4 cards
  const latestTrailers: Trailer[] = [
    {
      id: 1,
      title: "Fountain of Youth",
      image: "/perilous-descent.png",
      category: "Action",
      duration: "2 min",
    },
    {
      id: 2,
      title: "Carême",
      image: "/placeholder.svg?key=24cm8",
      category: "Drama",
      duration: "1 min",
    },
    {
      id: 3,
      title: "Long Way Home",
      image: "/countryside-roadtrip.png",
      category: "Documentary",
      duration: "2 min",
    },
    {
      id: 4,
      title: "Murderbot",
      image: "/android-contemplation.png",
      category: "Sci-Fi",
      duration: "2 min",
    },
  ]

  // Top Chart: TV Shows
  const topChartTVShows: Show[] = [
    {
      id: 1,
      title: "Your Friends & Neighbors",
      image: "/twilight-contemplation.png",
      description: "A desperate man will do anything to stay wealthy—including robbing his friends.",
      rating: "TV-MA",
      genre: "Drama",
    },
    {
      id: 2,
      title: "Severance",
      image: "/corporate-divide.png",
      description: "Mark leads a team whose memories have been surgically divided between work and personal lives.",
      rating: "TV-MA",
      genre: "Thriller",
    },
    {
      id: 3,
      title: "The Studio",
      image: "/palm-studio.png",
      description: "A comedy series about the chaotic inner workings of a Hollywood production studio.",
      rating: "TV-MA",
      genre: "Comedy",
    },
    {
      id: 4,
      title: "Ted Lasso",
      image: "/soccer-celebration.png",
      description: "An American football coach is hired to manage a British soccer team with unexpected results.",
      rating: "TV-MA",
      genre: "Comedy",
    },
  ]

  // Top Chart: Movies
  const topChartMovies: Show[] = [
    {
      id: 1,
      title: "The Gorge",
      image: "/mysterious-couple.png",
      description: "Two strangers with dark pasts find themselves trapped in a mysterious gorge with no way out.",
      rating: "R",
      genre: "Thriller",
      year: "2025",
    },
    {
      id: 2,
      title: "Wolfs",
      image: "/facing-adversaries.png",
      description: "Two professional fixers find themselves forced to work together on a dangerous job.",
      rating: "R",
      genre: "Action",
      year: "2024",
    },
    {
      id: 3,
      title: "Greyhound",
      image: "/naval-commander.png",
      description: "A naval commander leads an Allied convoy being stalked by German U-boat wolfpacks during WWII.",
      rating: "PG-13",
      genre: "Action",
      year: "2020",
    },
    {
      id: 4,
      title: "Ghosted",
      image: "/desert-rescue.png",
      description:
        "A man falls for a woman who turns out to be a secret agent, thrusting him into an international adventure.",
      rating: "PG-13",
      genre: "Action",
      year: "2023",
    },
  ]

  // New Releases
  const newReleases: Show[] = [
    {
      id: 1,
      title: "Government Cheese",
      image: "/geometric-portrait.png",
      description: "A higher power seemingly steers an ex-con's bumpy path to success.",
      rating: "TV-MA",
      genre: "COMEDY",
    },
    {
      id: 2,
      title: "Your Friends & Neighbors",
      image: "/twilight-contemplation.png",
      description: "A desperate man will do anything to stay wealthy—including robbing his friends.",
      rating: "TV-MA",
      genre: "DRAMA",
    },
    {
      id: 3,
      title: "Number One on the Call Sheet",
      image: "/diverse-cast.png",
      description: "Iconic actors get candid about what it takes to make it in Hollywood.",
      rating: "TV-MA",
      genre: "DOCUMENTARY",
    },
    {
      id: 4,
      title: "Fight for Glory: 2024 World Series",
      image: "/baseball-triumph.png",
      description: "Go deeper than ever into the Fall Classic as MLB's most storied rivalry reignites.",
      rating: "TV-G",
      genre: "DOCUMENTARY",
    },
  ]
  ;<div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-8 mt-8">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900"></div>
    <div
      className="absolute inset-0 opacity-30 mix-blend-overlay"
      style={{ backgroundImage: 'url("/abstract-book-stack.png")', backgroundSize: "cover" }}
    ></div>
    <div className="relative h-full flex items-center justify-between px-8">
      <div className="max-w-2xl">
        <h3 className="text-amber-300 text-lg font-bold mb-2">DISCOVER YOUR NEXT GREAT READ</h3>
        <h2 className="text-3xl font-bold mb-2 text-white">Restorative Media Books</h2>
        <p className="text-gray-200 mb-4">
          Explore bestsellers, new releases, and curated collections from top authors
        </p>
        <button className="bg-white text-indigo-900 px-6 py-2 rounded-full font-bold">Browse All Books</button>
      </div>
      <div className="hidden lg:flex space-x-[-80px] mr-8">
        <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[-15deg] bg-white">
          <div className="w-full h-full relative rounded-md overflow-hidden">
            <SafeImage src="/fourth-wing-cover.png" alt="Featured Book" fill className="object-cover" />
          </div>
        </div>
        <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[-5deg] bg-white">
          <div className="w-full h-full relative rounded-md overflow-hidden">
            <SafeImage src="/atomic-habits-cover.png" alt="Featured Book" fill className="object-cover" />
          </div>
        </div>
        <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[5deg] bg-white">
          <div className="w-full h-full relative rounded-md overflow-hidden">
            <SafeImage src="/silent-patient-cover.png" alt="Featured Book" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>

  // Bestselling Books - 10 cards (2 pages of 5)
  const bestsellingBooks: Book[] = [
    {
      id: 1,
      title: "The Silent Patient",
      image: "/silent-patient-cover.png",
      author: "Alex Michaelides",
      amazonUrl: "https://www.amazon.com/Silent-Patient-Alex-Michaelides/dp/1250301696/",
      publisher: "CELADON",
    },
    {
      id: 2,
      title: "Fourth Wing",
      image: "/fourth-wing-cover.png",
      author: "Rebecca Yarros",
      amazonUrl: "https://www.amazon.com/Fourth-Wing-Empyrean-Rebecca-Yarros/dp/1649374046/",
      publisher: "ENTANGLED",
    },
    {
      id: 3,
      title: "Atomic Habits",
      image: "/atomic-habits-cover.png",
      author: "James Clear",
      amazonUrl: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/",
      publisher: "AVERY",
    },
    {
      id: 4,
      title: "The 48 Laws of Power",
      image: "/48-laws-power-cover.png",
      author: "Robert Greene",
      amazonUrl: "https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197/",
      publisher: "PENGUIN",
    },
    {
      id: 5,
      title: "Iron Flame",
      image: "/iron-flame-cover.png",
      author: "Rebecca Yarros",
      amazonUrl: "https://www.amazon.com/Iron-Flame-Empyrean-Rebecca-Yarros/dp/1649374178/",
      publisher: "ENTANGLED",
    },
    {
      id: 6,
      title: "The Psychology of Money",
      image: "/psychology-money-cover.png",
      author: "Morgan Housel",
      amazonUrl: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681/",
      publisher: "HARRIMAN HOUSE",
    },
    {
      id: 7,
      title: "Verity",
      image: "/verity-cover.png",
      author: "Colleen Hoover",
      amazonUrl: "https://www.amazon.com/Verity-Colleen-Hoover/dp/1538724731/",
      publisher: "GRAND CENTRAL",
    },
    {
      id: 8,
      title: "It Ends with Us",
      image: "/it-ends-with-us-cover.png",
      author: "Colleen Hoover",
      amazonUrl: "https://www.amazon.com/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/",
      publisher: "ATRIA",
    },
    {
      id: 9,
      title: "Can't Hurt Me",
      image: "/cant-hurt-me-cover.png",
      author: "David Goggins",
      amazonUrl: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287/",
      publisher: "LIONCREST",
    },
    {
      id: 10,
      title: "The Body Keeps the Score",
      image: "/body-keeps-score-cover.png",
      author: "Bessel van der Kolk",
      amazonUrl: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748/",
      publisher: "PENGUIN",
    },
  ]

  // Fiction Books - 10 cards (2 pages of 5)
  const fictionBooks: Book[] = [
    {
      id: 1,
      title: "The Housemaid",
      image: "/housemaid-cover.png",
      author: "Freida McFadden",
      amazonUrl: "https://www.amazon.com/Housemaid-Freida-McFadden/dp/1538742578/",
      publisher: "GRAND CENTRAL",
    },
    {
      id: 2,
      title: "A Court of Thorns and Roses",
      image: "/court-thorns-roses-cover.png",
      author: "Sarah J. Maas",
      amazonUrl: "https://www.amazon.com/Court-Thorns-Roses-Sarah-Maas/dp/1635575559/",
      publisher: "BLOOMSBURY",
    },
    {
      id: 3,
      title: "The Heaven & Earth Grocery Store",
      image: "/heaven-earth-grocery-cover.png",
      author: "James McBride",
      amazonUrl: "https://www.amazon.com/Heaven-Earth-Grocery-Store-Novel/dp/0593422945/",
      publisher: "RIVERHEAD",
    },
    {
      id: 4,
      title: "The Covenant of Water",
      image: "/covenant-water-cover.png",
      author: "Abraham Verghese",
      amazonUrl: "https://www.amazon.com/Covenant-Water-Oprahs-Book-Club/dp/0802162177/",
      publisher: "GROVE PRESS",
    },
    {
      id: 5,
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      image: "/tomorrow-cover.png",
      author: "Gabrielle Zevin",
      amazonUrl: "https://www.amazon.com/Tomorrow-novel-Gabrielle-Zevin/dp/0593321200/",
      publisher: "KNOPF",
    },
    {
      id: 6,
      title: "The Midnight Library",
      image: "/midnight-library-cover.png",
      author: "Matt Haig",
      amazonUrl: "https://www.amazon.com/Midnight-Library-Novel-Matt-Haig/dp/0525559477/",
      publisher: "VIKING",
    },
    {
      id: 7,
      title: "Lessons in Chemistry",
      image: "/lessons-chemistry-cover.png",
      author: "Bonnie Garmus",
      amazonUrl: "https://www.amazon.com/Lessons-Chemistry-Novel-Bonnie-Garmus/dp/038554734X/",
      publisher: "DOUBLEDAY",
    },
    {
      id: 8,
      title: "The Seven Husbands of Evelyn Hugo",
      image: "/seven-husbands-cover.png",
      author: "Taylor Jenkins Reid",
      amazonUrl: "https://www.amazon.com/Seven-Husbands-Evelyn-Hugo-Novel/dp/1501161938/",
      publisher: "WASHINGTON SQUARE",
    },
    {
      id: 9,
      title: "Project Hail Mary",
      image: "/project-hail-mary-cover.png",
      author: "Andy Weir",
      amazonUrl: "https://www.amazon.com/Project-Hail-Mary-Andy-Weir/dp/0593135202/",
      publisher: "BALLANTINE",
    },
    {
      id: 10,
      title: "The Invisible Life of Addie LaRue",
      image: "/addie-larue-cover.png",
      author: "V.E. Schwab",
      amazonUrl: "https://www.amazon.com/Invisible-Life-Addie-LaRue/dp/0765387565/",
      publisher: "TOR",
    },
  ]

  // Default placeholder for empty slots
  const placeholderShow: Show = {
    id: "placeholder",
    title: "Discover More Content",
    image: "/diverse-media-landscape.png",
    description:
      "Browse through our extensive library of shows, movies, and documentaries to find your next favorite watch.",
    rating: "All Ratings",
  }

  // State to track the currently featured show
  const [featuredShow, setFeaturedShow] = useState<Show>({
    id: "featured",
    title: "Inside San Quentin",
    description:
      "Explore the rehabilitation programs transforming lives inside one of America's most notorious prisons, offering inmates a path to redemption and hope.",
    image: "/san-quentin-1.jpg",
    rating: "TV-14",
  })

  // Helper functions to get current page items
  const getCurrentPageItems = (items: Show[], page: number, itemsPerPage = 7): Show[] => {
    const totalPages = Math.ceil(items.length / itemsPerPage)
    // Ensure page is within valid range
    const safePage = Math.max(0, Math.min(page, totalPages - 1))
    const startIndex = safePage * itemsPerPage
    const result = items.slice(startIndex, startIndex + itemsPerPage)

    // If we don't have enough items, pad with placeholder items
    if (result.length < itemsPerPage) {
      const padding = Array(itemsPerPage - result.length)
        .fill(null)
        .map((_, i) => ({
          ...placeholderShow,
          id: `placeholder-${Date.now()}-${i}`,
        }))
      return [...result, ...padding]
    }

    return result
  }

  // Helper function to get current page books
  const getCurrentPageBooks = (items: Book[], page: number, itemsPerPage = 5): Book[] => {
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const safePage = Math.max(0, Math.min(page, totalPages - 1))
    const startIndex = safePage * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }

  // Navigation handlers
  const nextPage = (section: string) => {
    if (section === "action") {
      setActionPage((prev) => (prev < Math.floor(actionShows.length / 7) ? prev + 1 : 0))
    } else if (section === "feelGood") {
      setFeelGoodPage((prev) => (prev < Math.floor(feelGoodShows.length / 7) ? prev + 1 : 0))
    } else if (section === "tvShows") {
      setTvShowsPage((prev) => (prev < Math.floor(tvShows.length / 7) ? prev + 1 : 0))
    } else if (section === "mustSeeHits") {
      setMustSeeHitsPage((prev) => (prev < Math.floor(mustSeeHits.length / 4) ? prev + 1 : 0))
    } else if (section === "bestsellers") {
      setBestsellerPage((prev) => (prev < Math.floor(bestsellingBooks.length / 5) ? prev + 1 : 0))
    } else if (section === "fiction") {
      setFictionPage((prev) => (prev < Math.floor(fictionBooks.length / 5) ? prev + 1 : 0))
    }
  }

  const prevPage = (section: string) => {
    if (section === "action") {
      setActionPage((prev) => (prev > 0 ? prev - 1 : Math.floor(actionShows.length / 7)))
    } else if (section === "feelGood") {
      setFeelGoodPage((prev) => (prev > 0 ? prev - 1 : Math.floor(feelGoodShows.length / 7)))
    } else if (section === "tvShows") {
      setTvShowsPage((prev) => (prev > 0 ? prev - 1 : Math.floor(tvShows.length / 7)))
    } else if (section === "mustSeeHits") {
      setMustSeeHitsPage((prev) => (prev > 0 ? prev - 1 : Math.floor(mustSeeHits.length / 4)))
    } else if (section === "bestsellers") {
      setBestsellerPage((prev) => (prev > 0 ? prev - 1 : Math.floor(bestsellingBooks.length / 5)))
    } else if (section === "fiction") {
      setFictionPage((prev) => (prev > 0 ? prev - 1 : Math.floor(fictionBooks.length / 5)))
    }
  }

  // Get current items for each section
  const currentActionShows = getCurrentPageItems(actionShows, actionPage)
  const currentFeelGoodShows = getCurrentPageItems(feelGoodShows, feelGoodPage)
  const currentTvShows = getCurrentPageItems(tvShows, tvShowsPage)
  const currentBestsellerBooks = getCurrentPageBooks(bestsellingBooks, bestsellerPage)
  const currentFictionBooks = getCurrentPageBooks(fictionBooks, fictionPage)

  // Handler for when a card is clicked
  const handleCardClick = (show: any) => {
    // Update the featured show with all properties from the clicked show
    setFeaturedShow(show)

    // Scroll to top to show the hero section
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Add this function to handle Amazon redirects
  const handleBookClick = (amazonUrl: string) => {
    window.open(amazonUrl, "_blank")
  }

  // Function to toggle FAQ item
  const toggleFAQ = (index: number) => {
    const newIsOpenArray = [...isOpenArray]
    newIsOpenArray[index] = !newIsOpenArray[index]
    setIsOpenArray(newIsOpenArray)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <SafeImage
              src="/logo-restorative-media.png"
              alt="Restorative Media"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                Documentaries
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                TV Shows
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                Movies
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                New & Popular
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                My List
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button
              className="bg-amber-600 text-white px-4 py-1 text-sm font-medium rounded hover:bg-amber-700 transition-colors"
              onClick={() => router.push("/")}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Netflix Style) */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <SafeImage src={featuredShow.image} alt={featuredShow.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-32 px-4 md:px-12 max-w-5xl">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{featuredShow.title}</h1>
            <p className="text-lg max-w-2xl mb-6">{featuredShow.description}</p>
            <div className="flex space-x-3">
              <Button className="bg-white text-black font-medium px-8">
                <Play className="mr-2 h-5 w-5 fill-black" /> Play
              </Button>
              <Button
                variant="outline"
                className="bg-gray-500/40 hover:bg-gray-500/60 border-none text-white font-medium px-8"
              >
                <Info className="mr-2 h-5 w-5" /> More Info
              </Button>
            </div>
          </div>
          <div className="absolute top-8 right-12">
            <div className="inline-block bg-gray-800/80 px-2 py-1 text-sm font-medium rounded">
              {featuredShow.rating}
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-10 mt-[-50px] px-4 md:px-12 space-y-16 pb-20">
        {/* Action Row */}
        <div>
          <h2 className="text-xl font-bold mb-4">Action</h2>
          <div className="relative">
            <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
              {currentActionShows.map((show) => (
                <div
                  key={show.id}
                  className="flex-none w-[250px] h-[140px] relative rounded overflow-hidden group cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <SafeImage
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{show.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage("action")
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage("action")
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Feel-Good Row */}
        <div>
          <h2 className="text-xl font-bold mb-4">Feel-Good</h2>
          <div className="relative">
            <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
              {currentFeelGoodShows.map((show) => (
                <div
                  key={show.id}
                  className="flex-none w-[250px] h-[140px] relative rounded overflow-hidden group cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <SafeImage
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{show.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage("feelGood")
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage("feelGood")
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* TV Shows Row */}
        <div>
          <h2 className="text-xl font-bold mb-4">TV Shows</h2>
          <div className="relative">
            <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
              {currentTvShows.map((show) => (
                <div
                  key={show.id}
                  className="flex-none w-[250px] h-[140px] relative rounded overflow-hidden group cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <SafeImage
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{show.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage("tvShows")
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage("tvShows")
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Featured Promo - Similar to "Lifestyles of the Rich and Scandalous" */}
        <div>
          <h2 className="text-xl font-bold mb-4">Lifestyles of the Rich and Scandalous</h2>
          <div
            className="relative w-full h-[350px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(featuredPromo)}
          >
            <SafeImage src={featuredPromo.image} alt={featuredPromo.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-3xl font-bold mb-2">{featuredPromo.title}</h3>
              <p className="text-lg mb-2">{featuredPromo.subtitle}</p>
              <p className="text-lg">{featuredPromo.callToAction}</p>
            </div>
            <div className="absolute top-4 right-4">
              <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-8" />
            </div>
          </div>
        </div>

        {/* Browse by Category */}
        <div>
          <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative h-[220px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() =>
                  handleCardClick({
                    id: `category-${category.id}`,
                    title: category.title,
                    image: category.image,
                    description: `Browse our collection of ${category.title.toLowerCase()} content.`,
                    rating: "All Ratings",
                  })
                }
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-center">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Must-See Hits */}
        <div>
          <h2 className="text-xl font-bold mb-4">Must-See Hits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mustSeeHits.map((show) => (
              <div
                key={show.id}
                className="relative h-[250px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(show)}
              >
                <SafeImage src={show.image} alt={show.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-2xl font-bold">{show.title}</h3>
                </div>
                <div className="absolute top-2 right-2">
                  <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Trailers */}
        <div>
          <h2 className="text-xl font-bold mb-4">Latest Trailers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latestTrailers.map((trailer) => (
              <div
                key={trailer.id}
                className="relative cursor-pointer"
                onClick={() =>
                  handleCardClick({
                    id: `trailer-${trailer.id}`,
                    title: trailer.title,
                    image: trailer.image,
                    description: `${trailer.category} trailer - ${trailer.duration}`,
                    rating: "All Ratings",
                  })
                }
              >
                <div className="relative h-[250px] rounded-lg overflow-hidden mb-2">
                  <SafeImage src={trailer.image} alt={trailer.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="bg-black/50 inline-block px-2 py-1 rounded text-xs">TRAILER</div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-5" />
                  </div>
                </div>
                <h3 className="font-bold">{trailer.title}</h3>
                <p className="text-sm text-gray-400">
                  {trailer.category} · {trailer.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Chart: TV Shows */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Top Chart: TV Shows</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              See All &gt;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topChartTVShows.map((show, index) => (
              <div key={show.id} className="relative cursor-pointer" onClick={() => handleCardClick(show)}>
                <div className="relative h-[180px] rounded-lg overflow-hidden mb-2">
                  <SafeImage src={show.image} alt={show.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-2 right-2">
                    <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-5" />
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-5xl font-bold text-gray-500 mr-3">{index + 1}</span>
                  <div>
                    <h3 className="font-bold">{show.title}</h3>
                    <p className="text-sm text-gray-400">{show.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Chart: Movies */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Top Chart: Movies</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              See All &gt;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topChartMovies.map((movie, index) => (
              <div key={movie.id} className="relative cursor-pointer" onClick={() => handleCardClick(movie)}>
                <div className="relative h-[180px] rounded-lg overflow-hidden mb-2">
                  <SafeImage src={movie.image} alt={movie.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-2 right-2">
                    <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-5" />
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-5xl font-bold text-gray-500 mr-3">{index + 1}</span>
                  <div>
                    <h3 className="font-bold">{movie.title}</h3>
                    <p className="text-sm text-gray-400">
                      {movie.year} · {movie.genre}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div>
          <h2 className="text-xl font-bold mb-4">New Releases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newReleases.map((release) => (
              <div key={release.id} className="relative cursor-pointer" onClick={() => handleCardClick(release)}>
                <div className="relative h-[180px] rounded-lg overflow-hidden mb-3">
                  <SafeImage src={release.image} alt={release.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-2 right-2">
                    <img src="/retro-television-logo.png" alt="TV+ Logo" className="h-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400">{release.genre}</p>
                  <h3 className="font-bold text-lg">{release.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{release.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Advertising Banner */}
        <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-8 mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900"></div>
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: 'url("/abstract-book-stack.png")', backgroundSize: "cover" }}
          ></div>
          <div className="relative h-full flex items-center justify-between px-8">
            <div className="max-w-2xl">
              <h3 className="text-amber-300 text-lg font-bold mb-2">DISCOVER YOUR NEXT GREAT READ</h3>
              <h2 className="text-3xl font-bold mb-2 text-white">Restorative Media Books</h2>
              <p className="text-gray-200 mb-4">
                Explore bestsellers, new releases, and curated collections from top authors
              </p>
              <button className="bg-white text-indigo-900 px-6 py-2 rounded-full font-bold">Browse All Books</button>
            </div>
            <div className="hidden lg:flex space-x-[-80px] mr-8">
              <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[-15deg] bg-white">
                <div className="w-full h-full relative rounded-md overflow-hidden">
                  <SafeImage src="/fourth-wing-cover.png" alt="Featured Book" fill className="object-cover" />
                </div>
              </div>
              <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[-5deg] bg-white">
                <div className="w-full h-full relative rounded-md overflow-hidden">
                  <SafeImage src="/atomic-habits-cover.png" alt="Featured Book" fill className="object-cover" />
                </div>
              </div>
              <div className="w-[100px] h-[150px] rounded-md shadow-lg transform rotate-[5deg] bg-white">
                <div className="w-full h-full relative rounded-md overflow-hidden">
                  <SafeImage src="/silent-patient-cover.png" alt="Featured Book" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bestselling Books */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">BESTSELLERS</h2>
            <a
              href="https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white flex items-center"
            >
              See All on Amazon <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" id="bestsellers-container">
              {bestsellingBooks.map((book) => (
                <div
                  key={book.id}
                  className="relative cursor-pointer transition-transform hover:scale-105 flex-none"
                  onClick={() => handleBookClick(book.amazonUrl)}
                >
                  <div className="relative w-[180px] h-[270px] rounded-md overflow-hidden shadow-lg">
                    <SafeImage src={book.image} alt={book.title} fill className="object-cover" />
                    <div className="absolute bottom-0 right-0 bg-black/70 px-2 py-1 m-2 rounded text-xs font-bold">
                      {book.publisher}
                    </div>
                  </div>
                  <div className="mt-2 w-[180px]">
                    <h3 className="font-bold line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage("bestsellers")
                const container = document.getElementById("bestsellers-container")
                if (container) {
                  container.scrollBy({ left: -900, behavior: "smooth" })
                }
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage("bestsellers")
                const container = document.getElementById("bestsellers-container")
                if (container) {
                  container.scrollBy({ left: 900, behavior: "smooth" })
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Fiction Books */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">FICTION</h2>
            <a
              href="https://www.amazon.com/b?node=17143709011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white flex items-center"
            >
              See All on Amazon <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" id="fiction-container">
              {fictionBooks.map((book) => (
                <div
                  key={book.id}
                  className="relative cursor-pointer transition-transform hover:scale-105 flex-none"
                  onClick={() => handleBookClick(book.amazonUrl)}
                >
                  <div className="relative w-[180px] h-[270px] rounded-md overflow-hidden shadow-lg">
                    <SafeImage src={book.image} alt={book.title} fill className="object-cover" />
                    <div className="absolute bottom-0 right-0 bg-black/70 px-2 py-1 m-2 rounded text-xs font-bold">
                      {book.publisher}
                    </div>
                  </div>
                  <div className="mt-2 w-[180px]">
                    <h3 className="font-bold line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage("fiction")
                const container = document.getElementById("fiction-container")
                if (container) {
                  container.scrollBy({ left: -900, behavior: "smooth" })
                }
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage("fiction")
                const container = document.getElementById("fiction-container")
                if (container) {
                  container.scrollBy({ left: 900, behavior: "smooth" })
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Featured Book Promo */}
        <div
          className="relative w-full h-[300px] rounded-lg overflow-hidden cursor-pointer mb-16"
          onClick={() => handleBookClick("https://www.amazon.com/Fourth-Wing-Empyrean-Rebecca-Yarros/dp/1649374046/")}
        >
          <SafeImage src="/fourth-wing-banner.png" alt="Fourth Wing by Rebecca Yarros" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h3 className="text-amber-400 text-lg font-bold mb-2">ENTANGLED</h3>
              <h2 className="text-5xl font-bold mb-4">FOURTH WING</h2>
              <p className="text-xl mb-6">
                Enter a world of dragons, danger, and destiny in the #1 New York Times bestseller
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold">BUY NOW</button>
            </div>
          </div>
        </div>

        {/* Local Community Events */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-amber-400 text-sm font-bold mb-1">CONNECT LOCALLY</h3>
              <h2 className="text-2xl font-bold">Community Events</h2>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center">
              See All Events <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-[180px]">
                <SafeImage
                  src="/community-garden-event.png"
                  alt="Community Garden Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
                  THIS WEEKEND
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Community Garden Workshop</h3>
                <p className="text-gray-400 text-sm mb-3">Oakland, CA • May 25, 2024</p>
                <p className="text-sm text-gray-300 mb-4">
                  Learn sustainable gardening practices and help build our neighborhood garden. All experience levels
                  welcome.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">FREE EVENT</span>
                  <button className="text-sm text-white hover:text-amber-400">Add to Calendar</button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-[180px]">
                <SafeImage
                  src="/youth-basketball-tournament.png"
                  alt="Youth Basketball Tournament"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  REGISTRATION OPEN
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Youth Basketball Tournament</h3>
                <p className="text-gray-400 text-sm mb-3">San Francisco, CA • June 10-12, 2024</p>
                <p className="text-sm text-gray-300 mb-4">
                  Annual tournament bringing together youth teams from across the Bay Area. Proceeds support
                  after-school programs.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">$15 ENTRY</span>
                  <button className="text-sm text-white hover:text-amber-400">Register Now</button>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-[180px]">
                <SafeImage
                  src="/documentary-screening.png"
                  alt="Documentary Screening & Discussion"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  FEATURED EVENT
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Documentary Screening & Discussion</h3>
                <p className="text-gray-400 text-sm mb-3">Berkeley, CA • May 30, 2024</p>
                <p className="text-sm text-gray-300 mb-4">
                  Join us for a screening of "Voices of Resilience" followed by a panel discussion with the filmmakers
                  and community leaders.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">$5 SUGGESTED</span>
                  <button className="text-sm text-white hover:text-amber-400">Reserve Seat</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Podcasts Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-amber-400 text-sm font-bold mb-1">LISTEN & LEARN</h3>
              <h2 className="text-2xl font-bold">Featured Podcasts</h2>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center">
              Browse All Podcasts <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" id="podcasts-container">
              {/* Podcast 1 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage src="/untold-stories-podcast.png" alt="Untold Stories" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">Untold Stories</h3>
                      <p className="text-xs text-gray-300">Weekly • 45 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 42: The History of Oakland's Chinatown</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Exploring the rich cultural heritage and challenges faced by one of America's oldest Chinatown
                    communities.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-indigo-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-indigo-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 18, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 2 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-amber-900 to-orange-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage src="/second-chances-podcast.png" alt="Second Chances" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">Second Chances</h3>
                      <p className="text-xs text-gray-300">Biweekly • 60 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 15: From Prison to Purpose</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Former inmates share their journeys of transformation and how they're giving back to their
                    communities.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-amber-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-amber-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 10, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 3 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-green-900 to-emerald-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage src="/food-justice-podcast.png" alt="Food Justice Now" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">Food Justice Now</h3>
                      <p className="text-xs text-gray-300">Weekly • 30 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 28: Urban Farming Revolution</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    How community-led agriculture initiatives are addressing food deserts and building sustainable local
                    food systems.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-green-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-green-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 22, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 4 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-blue-900 to-sky-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage src="/tech-equity-podcast.png" alt="Tech for All" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">Tech for All</h3>
                      <p className="text-xs text-gray-300">Monthly • 50 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 7: Bridging the Digital Divide</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Innovative programs bringing technology access and education to underserved communities across the
                    Bay Area.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-blue-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-blue-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>April 30, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 5 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-red-900 to-rose-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage src="/art-activism-podcast.png" alt="Art as Activism" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">Art as Activism</h3>
                      <p className="text-xs text-gray-300">Biweekly • 40 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 19: The Murals of Mission District</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Exploring how public art has become a powerful tool for social commentary and community expression
                    in San Francisco.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-red-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-red-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 15, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 6 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-pink-900 to-fuchsia-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage
                        src="/women-leadership-podcast.png"
                        alt="Women in Leadership"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Women in Leadership</h3>
                      <p className="text-xs text-gray-300">Weekly • 55 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 33: Breaking Barriers in Tech</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Conversations with pioneering women who are reshaping the technology landscape and creating pathways
                    for future generations.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-pink-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-pink-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 20, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 7 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-cyan-900 to-teal-700 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage
                        src="/climate-solutions-podcast.png"
                        alt="Climate Solutions"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Climate Solutions</h3>
                      <p className="text-xs text-gray-300">Biweekly • 45 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 21: Coastal Communities Adapt</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    How Bay Area coastal communities are developing innovative approaches to rising sea levels and
                    climate resilience strategies.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-cyan-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-cyan-900" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 17, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast 8 */}
              <div className="flex-none w-[280px]">
                <div className="bg-gradient-to-br from-yellow-800 to-amber-600 rounded-lg p-4 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <SafeImage
                        src="/financial-freedom-podcast.png"
                        alt="Financial Freedom"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Financial Freedom</h3>
                      <p className="text-xs text-gray-300">Weekly • 35 min</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2 line-clamp-1">Ep 47: Community Banking Revolution</h4>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                    Exploring how credit unions and community banks are creating economic opportunities in underserved
                    neighborhoods.
                  </p>
                  <div className="flex items-center">
                    <button className="bg-white text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <Play className="h-5 w-5 fill-yellow-800" />
                    </button>
                    <div className="text-xs text-gray-300">
                      <span className="block">Latest Episode</span>
                      <span>May 21, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                const container = document.getElementById("podcasts-container")
                if (container) {
                  container.scrollBy({ left: -600, behavior: "smooth" })
                }
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                const container = document.getElementById("podcasts-container")
                if (container) {
                  container.scrollBy({ left: 600, behavior: "smooth" })
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Video Podcasts Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-amber-400 text-sm font-bold mb-1">WATCH & LISTEN</h3>
              <h2 className="text-2xl font-bold">Video Podcasts</h2>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center">
              See All Videos <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" id="video-podcasts-container">
              {/* Video Podcast 1 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/untold-stories-video.png"
                    alt="Untold Stories Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/untold-stories-podcast.png"
                          alt="Untold Stories"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Untold Stories</h3>
                        <p className="text-xs text-gray-300">Ep 42: The History of Oakland's Chinatown</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">45:18</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Join host Maria Chen as she explores the rich cultural heritage and challenges faced by one of
                    America's oldest Chinatown communities.
                  </p>
                </div>
              </div>

              {/* Video Podcast 2 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/second-chances-video.png"
                    alt="Second Chances Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/second-chances-podcast.png"
                          alt="Second Chances"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Second Chances</h3>
                        <p className="text-xs text-gray-300">Ep 15: From Prison to Purpose</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">58:42</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Former inmates share their journeys of transformation and how they're giving back to their
                    communities through mentorship and advocacy.
                  </p>
                </div>
              </div>

              {/* Video Podcast 3 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/food-justice-video.png"
                    alt="Food Justice Now Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/food-justice-podcast.png"
                          alt="Food Justice Now"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Food Justice Now</h3>
                        <p className="text-xs text-gray-300">Ep 28: Urban Farming Revolution</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">32:15</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    How community-led agriculture initiatives are addressing food deserts and building sustainable local
                    food systems in urban environments.
                  </p>
                </div>
              </div>

              {/* Video Podcast 4 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/tech-equity-video.png"
                    alt="Tech for All Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage src="/tech-equity-podcast.png" alt="Tech for All" fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Tech for All</h3>
                        <p className="text-xs text-gray-300">Ep 7: Bridging the Digital Divide</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">49:37</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Innovative programs bringing technology access and education to underserved communities across the
                    Bay Area and beyond.
                  </p>
                </div>
              </div>

              {/* Video Podcast 5 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/art-activism-video.png"
                    alt="Art as Activism Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/art-activism-podcast.png"
                          alt="Art as Activism"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Art as Activism</h3>
                        <p className="text-xs text-gray-300">Ep 19: The Murals of Mission District</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">41:23</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Exploring how public art has become a powerful tool for social commentary and community expression
                    in San Francisco's vibrant neighborhoods.
                  </p>
                </div>
              </div>

              {/* Video Podcast 6 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/women-leadership-video.png"
                    alt="Women in Leadership Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/women-leadership-podcast.png"
                          alt="Women in Leadership"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Women in Leadership</h3>
                        <p className="text-xs text-gray-300">Ep 33: Breaking Barriers in Tech</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">54:12</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Conversations with pioneering women who are reshaping the technology landscape and creating pathways
                    for future generations of female leaders.
                  </p>
                </div>
              </div>

              {/* Video Podcast 7 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/climate-solutions-video.png"
                    alt="Climate Solutions Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/climate-solutions-podcast.png"
                          alt="Climate Solutions"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Climate Solutions</h3>
                        <p className="text-xs text-gray-300">Ep 21: Coastal Communities Adapt</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">45:52</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    How Bay Area coastal communities are developing innovative approaches to rising sea levels and
                    climate resilience strategies.
                  </p>
                </div>
              </div>

              {/* Video Podcast 8 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/financial-freedom-video.png"
                    alt="Financial Freedom Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/financial-freedom-podcast.png"
                          alt="Financial Freedom"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Financial Freedom</h3>
                        <p className="text-xs text-gray-300">Ep 47: Community Banking Revolution</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">36:18</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Exploring how credit unions and community banks are creating economic opportunities in underserved
                    neighborhoods across America.
                  </p>
                </div>
              </div>

              {/* Video Podcast 9 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/mental-health-video.png"
                    alt="Mental Health Matters Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/mental-health-podcast.png"
                          alt="Mental Health Matters"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Mental Health Matters</h3>
                        <p className="text-xs text-gray-300">Ep 12: Breaking the Stigma</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">51:24</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Mental health professionals and advocates discuss the importance of normalizing conversations about
                    mental wellness in diverse communities.
                  </p>
                </div>
              </div>

              {/* Video Podcast 10 */}
              <div className="flex-none w-[350px] bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-[200px] group cursor-pointer">
                  <SafeImage
                    src="/indigenous-voices-video.png"
                    alt="Indigenous Voices Video Podcast"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-10 w-10 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <SafeImage
                          src="/indigenous-voices-podcast.png"
                          alt="Indigenous Voices"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Indigenous Voices</h3>
                        <p className="text-xs text-gray-300">Ep 8: Land Back Movement</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">62:37</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <Play className="h-4 w-4 fill-gray-900" />
                      </button>
                      <span className="text-sm">Watch Now</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-share-2"
                        >
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Indigenous leaders discuss the growing movement for land reclamation and sovereignty across North
                    America and its cultural significance.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                const container = document.getElementById("video-podcasts-container")
                if (container) {
                  container.scrollBy({ left: -400, behavior: "smooth" })
                }
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-r-md hover:bg-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                const container = document.getElementById("video-podcasts-container")
                if (container) {
                  container.scrollBy({ left: 400, behavior: "smooth" })
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 p-2 rounded-l-md hover:bg-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Add this section at the very end of the component, just before the closing </div> and before the style jsx global section

// Add this FAQ section right before the footer section (just before the line that says "Add this footer section at the bottom of the page") */}
      {/* FAQ Section */}
      <div className="bg-white mt-16 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-black text-center mb-4 tracking-wide">FREQUENTLY ASKED QUESTIONS</h3>
          <h2 className="text-3xl font-bold text-center mb-12">Questions? Answers.</h2>

          {/* FAQ Items with working dropdowns */}
          {[
            {
              question: "What is Restorative Media?",
              answer:
                "Restorative Media is a streaming platform dedicated to content that inspires positive change and amplifies diverse voices across documentaries, films, TV shows, and podcasts.",
            },
            {
              question: "How much does a subscription cost?",
              answer:
                "We offer several subscription tiers starting at $7.99/month. Our annual plans provide significant savings, and we offer special rates for students and educators.",
            },
            {
              question: "Can I download content to watch offline?",
              answer:
                "Yes! Premium and Plus subscribers can download content to watch offline on mobile devices and tablets through our iOS and Android apps.",
            },
            {
              question: "How many devices can I stream on?",
              answer:
                "Depending on your subscription plan, you can stream on 1-4 devices simultaneously. Family plans allow for up to 6 devices with personalized profiles.",
            },
            {
              question: "Is there a free trial available?",
              answer:
                "Yes, we offer a 14-day free trial for new subscribers. You can experience our full content library and cancel anytime before the trial ends.",
            },
            {
              question: "How can I submit my own content?",
              answer:
                'We welcome submissions from independent creators. Visit our "Pitch Your Content" page to learn about our submission process and content guidelines.',
            },
          ].map((faq, index) => {
            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full text-left py-6"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpenArray[index]}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${isOpenArray[index] ? "transform rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpenArray[index] ? "max-h-96 pb-6" : "max-h-0"}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add this footer section at the bottom of the page */}
      <div className="bg-black mt-0 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Devices
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Cookie Preferences
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-sm">Download our app:</p>
              <div className="flex space-x-2 mt-2">
                <button className="bg-gray-900 text-white text-xs px-3 py-2 rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-apple mr-1"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                  App Store
                </button>
                <button className="bg-gray-900 text-white text-xs px-3 py-2 rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play mr-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© 2024 Restorative Media. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">
              Restorative Media is committed to creating content that inspires positive change and amplifies diverse
              voices.
            </p>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar hiding styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
