import Link from "next/link"
import {
  CalendarDays,
  Clock,
  Tag,
  BookOpen,
  Film,
  Scale,
  Tv,
  Recycle,
  Users,
  GraduationCap,
  ChevronRight,
} from "lucide-react"

export default function TroyWilliamsJournalPage() {
  return (
    <div>
      {/* Featured Video Hero Section - Dark background */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "url('/low-poly-black-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 py-8 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Featured Video</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main featured video (larger) */}
            <div className="md:col-span-7 relative group overflow-hidden rounded-lg">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <img src="/mountain-biking-hero.png" alt="Mountain Biking" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <div className="h-8 w-8 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">SPORTS</span>
                  <h3 className="text-white font-bold text-xl mt-2 line-clamp-2 drop-shadow-md">
                    Aggressive Downhill, Cross Country & All Mountain Bike Racing
                  </h3>
                </div>
              </div>
            </div>

            {/* Right column with 2 smaller videos */}
            <div className="md:col-span-5 flex flex-col space-y-6">
              {/* Food video */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <img
                    src="/street-food-seminyak.png"
                    alt="Street Food in Seminyak"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute right-4 top-4">
                    <div className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <div className="h-5 w-5 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">FOOD</span>
                    <h3 className="text-white font-bold text-lg mt-2 line-clamp-2 drop-shadow-md">
                      This Great Street Food Truck You Should Try in Seminyak
                    </h3>
                  </div>
                </div>
              </div>

              {/* Music video */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <img
                    src="/kendrick-lamar-mixtape.png"
                    alt="Kendrick Lamar Mixtape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute right-4 top-4">
                    <div className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <div className="h-5 w-5 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">MUSIC</span>
                    <h3 className="text-white font-bold text-lg mt-2 line-clamp-2 drop-shadow-md">
                      Mixtape Primer: Reviewing Kendrick Lamar's Pre-Fame Output
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advertisement Banner with Image */}
        <div className="relative z-10 mt-6 mb-8 container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full h-[90px] rounded-xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/featured-video-bg.png"
                  alt="Advertisement background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center justify-between px-6">
                <div className="text-white">
                  <div className="text-sm font-medium drop-shadow-md">Smart & Responsive</div>
                  <div className="text-xl font-bold drop-shadow-md">ADVERTISEMENT</div>
                </div>
                <div className="text-white text-2xl font-bold drop-shadow-md">970×90</div>
                <button className="bg-yellow-600 hover:bg-yellow-500 transition-colors text-black text-xs font-bold px-4 py-1 rounded-md">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White background for all sections below the hero */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 py-12">
          {/* Original Title Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl">Troy Williams Journal</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Personal reflections, insights, and stories from my journey through life and media.
            </p>
          </div>

          {/* Author Bio - 3D Effect */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden bg-white border border-gray-200 p-8 shadow-lg transform perspective-1000">
              {/* 3D Edge Effects */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gray-100"></div>
              <div className="absolute top-0 bottom-0 right-0 w-1 bg-gray-300"></div>

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100 opacity-80"></div>

              {/* Content with 3D Transform */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative h-48 w-48 rounded-full transform hover:translate-z-10 transition-transform duration-300">
                  {/* Image Shadow */}
                  <div className="absolute -bottom-2 -right-2 h-full w-full rounded-full bg-gray-400 opacity-20 blur-md"></div>
                  {/* Image */}
                  <div
                    className="relative h-full w-full rounded-full bg-cover bg-center bg-no-repeat ring-4 ring-white shadow-xl"
                    style={{ backgroundImage: "url('/thoughtful-gaze.png')" }}
                  ></div>
                  {/* Glossy Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 bg-white opacity-20 rounded-t-full"></div>
                </div>

                <div className="max-w-2xl text-center md:text-left relative">
                  {/* Text Shadow for 3D Effect */}
                  <h2 className="mb-4 text-2xl font-bold text-black relative">
                    <span className="relative z-10">About Troy Williams</span>
                    <span className="absolute -bottom-0.5 left-0 text-gray-300 z-0 select-none hidden md:inline">
                      About Troy Williams
                    </span>
                  </h2>
                  <p className="mb-4 text-gray-700 relative z-10">
                    Troy Williams is a journalist, filmmaker, and advocate with over 15 years of experience in media.
                    His work focuses on social justice, rehabilitation, and giving voice to marginalized communities.
                    Troy's unique perspective comes from his own journey of transformation and his commitment to
                    restorative practices in media.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 shadow-sm transform transition-transform hover:translate-y-px hover:shadow-md">
                      Journalism
                    </span>
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 shadow-sm transform transition-transform hover:translate-y-px hover:shadow-md">
                      Social Justice
                    </span>
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 shadow-sm transform transition-transform hover:translate-y-px hover:shadow-md">
                      Filmmaking
                    </span>
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 shadow-sm transform transition-transform hover:translate-y-px hover:shadow-md">
                      Rehabilitation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journal Entries */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-black">Latest Journal Entries</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Entry 1 */}
              <Link href="/troy-williams-journal/finding-my-voice" className="group">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="h-64 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: "url('/confident-speaker.png')" }}
                  ></div>
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      April 15, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />8 min read
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black transition-colors group-hover:text-yellow-600">
                    Finding My Voice: From Incarceration to Inspiration
                  </h3>
                  <p className="text-gray-600">
                    My journey of discovering the power of storytelling and how it transformed my life after
                    incarceration.
                  </p>
                </div>
              </Link>

              {/* Entry 2 */}
              <Link href="/troy-williams-journal/media-representation" className="group">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="h-64 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: "url('/community-gathering.png')" }}
                  ></div>
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      March 28, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      12 min read
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black transition-colors group-hover:text-yellow-600">
                    The Power of Representation in Media
                  </h3>
                  <p className="text-gray-600">
                    Why authentic representation matters and how it can change narratives around marginalized
                    communities.
                  </p>
                </div>
              </Link>

              {/* Entry 3 */}
              <Link href="/troy-williams-journal/documentary-filmmaking" className="group">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="h-64 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: "url('/film-camera-documentary-crew.png')" }}
                  ></div>
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      March 10, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      10 min read
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black transition-colors group-hover:text-yellow-600">
                    The Art of Documentary Filmmaking
                  </h3>
                  <p className="text-gray-600">
                    Lessons I've learned about capturing authentic stories and giving voice to those who need to be
                    heard.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Journal Entry */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-black">Featured Entry</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat md:h-auto"
                  style={{ backgroundImage: "url('/prison-documentary.png')" }}
                ></div>
                <div className="p-8 bg-white">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      February 20, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      Personal
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black">Returning to San Quentin: A Full Circle Moment</h3>
                  <p className="mb-6 text-gray-700">
                    Last week, I returned to San Quentin State Prison—not as an inmate, but as a filmmaker and mentor.
                    The experience was surreal, emotional, and ultimately transformative. In this journal entry, I
                    reflect on what it means to come full circle and use my past to create a better future for others.
                  </p>
                  <Link
                    href="/troy-williams-journal/returning-to-san-quentin"
                    className="inline-block rounded-lg bg-yellow-600 px-4 py-2 font-medium text-white transition-colors hover:bg-yellow-500"
                  >
                    Read Full Entry
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hand-picked Videos Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Watch hand-picked video */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-black">Watch hand-picked video</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Video 1 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/herbed-scramble.png"
                        alt="Scrambled Eggs"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          FOOD
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      This Is How All Your Favorite Chefs Make Scrambled Eggs
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>

                  {/* Video 2 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/professional-recording-studio.png"
                        alt="Radiohead"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          MUSIC
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      Radiohead Have Announced Their Own Signature Fender Guitar
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>

                  {/* Video 3 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/castle-contemplation.png"
                        alt="Game of Thrones"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          MOVIE
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      'Game of Thrones' premiere proves the ladies are running the show
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>

                  {/* Video 4 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/sunset-mountain-bike-race.png"
                        alt="Workout"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          SPORTS
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      Fat Burning Cardio Workout: Best Workout For Losing Weight?
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>

                  {/* Video 5 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/daft-punk-evolution.jpg"
                        alt="Daft Punk"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          MUSIC
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      The Complete History Of Daft Punk Told Through A Creative Infographic
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>

                  {/* Video 6 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                      <img
                        src="/mclaren-honda-comparison.jpg"
                        alt="Valentino Rossi"
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                          SPORTS
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 text-black">
                      Valentino Rossi: Essential to build on Assen triumph
                    </h3>
                    <div className="text-xs text-gray-500">
                      <span>SEPTEMBER 5, 2017</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Popular Video */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6 text-black">Popular Video</h2>
                <div className="space-y-4">
                  {/* Popular Video 1 */}
                  <div className="flex gap-4 group">
                    <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg shadow-sm">
                      <img src="/herbed-scramble.png" alt="Scrambled Eggs" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 line-clamp-2 text-black">
                        This Is How All Your Favorite Chefs Make Scrambled Eggs
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>SEPTEMBER 5, 2017</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Video 2 */}
                  <div className="flex gap-4 group">
                    <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg shadow-sm">
                      <img
                        src="/castle-contemplation.png"
                        alt="Game of Thrones"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 line-clamp-2 text-black">
                        'Game of Thrones' premiere proves the ladies are running the show
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>SEPTEMBER 5, 2017</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Video 3 */}
                  <div className="flex gap-4 group">
                    <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg shadow-sm">
                      <img
                        src="/professional-recording-studio.png"
                        alt="Radiohead"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 line-clamp-2 text-black">
                        Radiohead Have Announced Their Own Signature Fender Guitar
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>SEPTEMBER 5, 2017</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Video 4 */}
                  <div className="flex gap-4 group">
                    <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg shadow-sm">
                      <img src="/daft-punk-evolution.jpg" alt="Daft Punk" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-red-600/80 transition-colors">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 line-clamp-2 text-black">
                        The Complete History Of Daft Punk Told Through A Creative Infographic
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>SEPTEMBER 5, 2017</span>
                      </div>
                    </div>
                  </div>

                  {/* Advertisement */}
                  <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <div className="relative">
                      <img src="/advertisement-watch.png" alt="Smart watch advertisement" className="w-full h-auto" />
                      <div className="absolute top-2 left-2">
                        <div className="text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">Smart & Responsive</div>
                        <div className="text-xs font-bold bg-white/80 px-2 py-1 rounded mt-1">ADVERTISEMENT</div>
                      </div>
                      <button className="absolute bottom-3 right-3 bg-gray-800 text-white text-xs font-bold px-4 py-1 rounded hover:bg-gray-700 transition-colors">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Journal Topics Section - Monochromatic Design */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-black">Journal Topics</h2>
              <Link
                href="/troy-williams-journal/topics/all"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center"
              >
                View All Topics <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Personal Reflections */}
              <Link href="/troy-williams-journal/topics/personal-reflections" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <BookOpen className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Reflections</h3>
                    <p className="text-gray-600 text-sm mb-4">Thoughts on life, growth, and personal transformation</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        12 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Filmmaking */}
              <Link href="/troy-williams-journal/topics/filmmaking" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <Film className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Filmmaking</h3>
                    <p className="text-gray-600 text-sm mb-4">The art and craft of visual storytelling</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        8 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Social Justice */}
              <Link href="/troy-williams-journal/topics/social-justice" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <Scale className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Social Justice</h3>
                    <p className="text-gray-600 text-sm mb-4">Advocacy for equality and systemic change</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        15 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Media Industry */}
              <Link href="/troy-williams-journal/topics/media-industry" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <Tv className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Media Industry</h3>
                    <p className="text-gray-600 text-sm mb-4">Insights on trends and changes in media</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        10 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Rehabilitation */}
              <Link href="/troy-williams-journal/topics/rehabilitation" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <Recycle className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rehabilitation</h3>
                    <p className="text-gray-600 text-sm mb-4">The journey of healing and second chances</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        9 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Community Building */}
              <Link href="/troy-williams-journal/topics/community" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <Users className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Building</h3>
                    <p className="text-gray-600 text-sm mb-4">Creating connections and fostering belonging</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        7 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Education */}
              <Link href="/troy-williams-journal/topics/education" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="p-6 flex flex-col h-full min-h-[180px]">
                    <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                      <GraduationCap className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                    <p className="text-gray-600 text-sm mb-4">Learning as a path to empowerment</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        6 Entries{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* View All Topics */}
              <Link href="/troy-williams-journal/topics/all" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-900 hover:bg-gray-800 transition-colors">
                  <div className="p-6 flex flex-col items-center justify-center h-full min-h-[180px]">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <ChevronRight className="h-8 w-8 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">View All Topics</h3>
                    <p className="text-gray-300 text-sm text-center mt-2">Explore all 15+ journal categories</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ABC News Style Updates Section - WHITE Theme */}
          <div className="bg-white text-black py-12 w-full border-t border-gray-200">
            <div className="container mx-auto px-4">
              {/* News Updates Section */}
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">Journal Updates</h2>

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Update 1 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-md mb-3">
                      <img
                        src="/confident-speaker.png"
                        alt="Troy Williams speaking"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <h3 className="text-black text-base font-medium mb-1">
                      Troy Williams named one of Time Magazine's Most Influential People of 2025
                    </h3>
                  </div>

                  {/* Update 2 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-md mb-3">
                      <img
                        src="/film-camera-documentary-crew.png"
                        alt="Documentary crew"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <h3 className="text-black text-base font-medium mb-1">
                      Join the "Media Justice 5K," a virtual nationwide fundraiser, on Wednesday, May 14
                    </h3>
                  </div>

                  {/* Update 3 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-md mb-3">
                      <img
                        src="/prison-documentary.png"
                        alt="Prison documentary"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <h3 className="text-black text-base font-medium mb-1">
                      Watch the special anniversary episode of 'Voices Behind Walls' documentary series
                    </h3>
                  </div>

                  {/* Update 4 */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-md mb-3">
                      <img
                        src="/community-gathering.png"
                        alt="Community gathering"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <h3 className="text-black text-base font-medium mb-1">
                      "The View From Inside" expands into a new streaming series on major platforms
                    </h3>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-800">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Featured Partners Section - 3D Style */}
              <h2 className="text-2xl font-bold mt-16 mb-6 uppercase tracking-wide">Featured Partners</h2>

              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {/* Restorative Media */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-xl text-center">restorative media</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-900"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-red-300"></div>
                    </div>
                  </div>

                  {/* MediaJustice */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-xl text-center">MediaJustice</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-900"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-purple-300"></div>
                    </div>
                  </div>

                  {/* FX */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-3xl text-center">FX</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-900"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-300"></div>
                    </div>
                  </div>

                  {/* NatGeo */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-xl text-center">NatGeo</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300"></div>
                    </div>
                  </div>

                  {/* KQED */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-2xl text-center">KQED</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-950"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-500"></div>
                    </div>
                  </div>

                  {/* Hulu */}
                  <div className="group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {/* 3D Effect with Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700"></div>

                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

                      {/* Logo Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="text-white font-bold text-2xl text-center">hulu</div>
                        <div className="text-white/70 text-xs mt-2">OFFICIAL SPONSOR</div>
                      </div>

                      {/* 3D Edge Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-900"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-green-300"></div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-800">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* My List Section */}
              <div className="mt-16 bg-gray-100 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Quickly access your favorites</h2>
                    <p className="text-gray-600 mb-6">Select + from a Journal Page to start building My List</p>
                    <button className="bg-gray-900 text-white font-bold py-3 px-6 rounded-full w-fit hover:bg-gray-800 transition-colors">
                      ADD JOURNALS
                    </button>
                  </div>
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent z-10 lg:block hidden"></div>
                    <img
                      src="/media-team-brainstorm.png"
                      alt="Collection of journal entries"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
