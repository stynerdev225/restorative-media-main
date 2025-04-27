import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function FullmetalAlchemistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="fullmetal-alchemist-trailer"
              thumbnailUrl="/fullmetal-alchemist.png"
              title="Fullmetal Alchemist Live-Action Movie Releases Its First Full Trailer"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="/author-thomas.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold">Edward Elric</h3>
                    <p className="text-sm text-gray-500">Anime & Manga Specialist</p>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <button className="bg-blue-500 text-white p-2 rounded-full">
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
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button className="bg-blue-400 text-white p-2 rounded-full">
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
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-full">
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
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>

                <article className="prose max-w-none">
                  <h1 className="text-3xl font-bold mb-4">
                    Fullmetal Alchemist Live-Action Movie Releases Its First Full Trailer
                  </h1>

                  <p className="lead text-xl mb-6">
                    The beloved anime and manga series Fullmetal Alchemist is getting the live-action treatment, and
                    Warner Bros. Japan has just released the first full trailer for the upcoming film.
                  </p>

                  <p>
                    Directed by Fumihiko Sori, the live-action adaptation of Hiromu Arakawa's popular manga series looks
                    to be a faithful recreation of the source material. The trailer gives fans their first substantial
                    look at the Elric brothers, the homunculi, and the impressive alchemy effects that will bring the
                    fantastical world to life.
                  </p>

                  <p>
                    For those unfamiliar with the story, Fullmetal Alchemist follows brothers Edward and Alphonse Elric,
                    who use the science of alchemy in their quest to restore their bodies after a failed attempt to
                    resurrect their mother. Edward lost an arm and a leg, while Alphonse lost his entire body, with his
                    soul bound to a suit of armor.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/fullmetal-comparison.png')` }}
                    ></div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Bringing Anime to Life</h2>

                  <p>
                    The trailer showcases several iconic scenes from the series, including the Elric brothers' attempt
                    at human transmutation, Edward receiving his automail limbs, and confrontations with several of the
                    homunculi antagonists. Fans will recognize characters like Colonel Roy Mustang, Lieutenant Riza
                    Hawkeye, and the villainous Lust.
                  </p>

                  <p>
                    One of the most impressive aspects of the trailer is the CGI used to create Alphonse, who appears as
                    a large, animated suit of armor throughout most of the series. The visual effects team seems to have
                    done an admirable job bringing this challenging character to life, maintaining the imposing yet
                    gentle presence that made Al so beloved in the anime.
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/fullmetal-evolution.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Key Revelations About 'Fullmetal Alchemist'
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>The film will cover the early arcs of the manga/anime</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>All main cast members are Japanese actors, despite the European-inspired setting</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>The film features advanced CGI for alchemy transmutations and Alphonse's armor</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Several homunculi will appear, including Lust, Gluttony, and Envy</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>The film is scheduled for release in Japan on December 1, 2017</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">All-Japanese Cast</h2>

                  <p>
                    Unlike some recent anime adaptations that have faced criticism for whitewashing, Fullmetal Alchemist
                    features an all-Japanese cast. Ryosuke Yamada, a member of the boy band Hey! Say! JUMP, stars as
                    Edward Elric, while Atomu Mizuishi provides the voice for Alphonse.
                  </p>

                  <p>
                    The decision to cast Japanese actors in a story set in a fictional European-inspired world has
                    sparked some debate among fans. Director Sori addressed this choice, stating: "I want to create a
                    film that will be loved by fans worldwide, not just in Japan. That's why I'm making the characters
                    Japanese."
                  </p>

                  <p>
                    Other cast members include Tsubasa Honda as Winry Rockbell, Dean Fujioka as Roy Mustang, and Yasuko
                    Matsuyuki as Lust. The trailer gives brief glimpses of each character, and fans will be pleased to
                    see that their iconic looks have been faithfully recreated.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Adaptation Challenges</h2>

                  <p>
                    Adapting Fullmetal Alchemist presents numerous challenges. The original manga spans 27 volumes, and
                    the anime adaptations (both the 2003 version and 2009's Fullmetal Alchemist: Brotherhood) run for
                    dozens of episodes. Condensing this sprawling narrative into a single film is no small task.
                  </p>

                  <p>
                    Based on the trailer, it appears the movie will focus on the early arcs of the story, potentially
                    setting up sequels if successful. Key moments shown include the Elric brothers' backstory, their
                    search for the Philosopher's Stone, and encounters with early antagonists.
                  </p>

                  <p>
                    The film is scheduled for release in Japan on December 1, 2017. International release dates have not
                    yet been announced, but given the global popularity of the franchise, a worldwide release seems
                    likely. Fans of the series will be watching closely to see if this adaptation can succeed where many
                    other anime-to-live-action conversions have struggled.
                  </p>
                </article>

                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600">
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
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600">
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
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600">
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
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                  <div>
                    <button className="text-restorative-gold">
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
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <RelatedVideos
                videos={[
                  {
                    title: "Top 10 Anime to Live-Action Adaptations",
                    image: "/related-force-awakens.png",
                    views: "920K views",
                    time: "14:52",
                  },
                  {
                    title: "Fullmetal Alchemist: Brotherhood vs. Original Anime",
                    image: "/related-rogue-one.png",
                    views: "1.1M views",
                    time: "20:18",
                  },
                  {
                    title: "The Philosophy of Alchemy in Fullmetal Alchemist",
                    image: "/related-special-effects.png",
                    views: "780K views",
                    time: "16:35",
                  },
                ]}
              />

              <CommentsSection
                commentCount={22}
                comments={[
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "4 hours ago",
                    content: "I'm cautiously optimistic about this. The CGI for Alphonse looks better than I expected!",
                    likes: 38,
                    replies: 4,
                  },
                  {
                    author: "Dylan Cooper",
                    avatar: "/commenter-dylan.jpg",
                    time: "7 hours ago",
                    content:
                      "I hope they don't try to cram too much of the story into one movie. FMA has such a complex plot.",
                    likes: 26,
                    replies: 2,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "1 day ago",
                    content:
                      "The transmutation effects look amazing! I'm curious how they'll handle some of the more emotional scenes.",
                    likes: 19,
                    replies: 3,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "Anime to Live-Action: Why Most Fail",
                    image: "/movie-unsplash-1.jpg",
                    views: "1.4M views",
                    time: "18:22",
                  },
                  {
                    title: "The Legacy of Fullmetal Alchemist",
                    image: "/movie-unsplash-2.jpg",
                    views: "950K views",
                    time: "22:10",
                  },
                  {
                    title: "Top 10 Anime of All Time",
                    image: "/movie-unsplash-3.jpg",
                    views: "2.3M views",
                    time: "15:45",
                  },
                  {
                    title: "Japanese Cinema: The Rise of Anime Adaptations",
                    image: "/movie-unsplash-4.jpg",
                    views: "780K views",
                    time: "20:18",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Anime
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Fullmetal Alchemist
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Manga
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Live-Action
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Edward Elric
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Alphonse Elric
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Alchemy
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Japanese Cinema
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest anime and movie news.</p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-restorative-gold"
                  />
                  <button className="w-full bg-restorative-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
