import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InfinityWarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="infinity-war-trailer"
              thumbnailUrl="/infinity-war.png"
              title="Marvel unleashes first 'Infinity War' teaser trailer, its surprising"
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
                    <h3 className="font-bold">Thomas Anderson</h3>
                    <p className="text-sm text-gray-500">Senior Entertainment Editor</p>
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
                    Marvel unleashes first 'Infinity War' teaser trailer, its surprising
                  </h1>

                  <p className="lead text-xl mb-6">
                    The first teaser trailer for Marvel's highly anticipated "Avengers: Infinity War" has finally
                    dropped, and it's packed with more superhero action than fans could have imagined.
                  </p>

                  <p>
                    After years of build-up across 17 films, the Marvel Cinematic Universe is finally bringing together
                    all of its heroes to face the ultimate threat: Thanos. The new trailer gives us our first real look
                    at the Mad Titan in action, and he's every bit as menacing as the comics suggested.
                  </p>

                  <p>
                    The trailer opens with a voiceover from various Avengers reciting Nick Fury's famous "There was an
                    idea..." speech from the first Avengers film, setting the tone for what appears to be the most
                    ambitious crossover event in cinema history.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/infinity-war-comparison.png')` }}
                    ></div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Surprising Character Interactions</h2>

                  <p>
                    One of the most exciting aspects of the trailer is seeing characters from different corners of the
                    MCU interacting for the first time. Spider-Man meeting the Guardians of the Galaxy, Doctor Strange
                    working alongside Iron Man, and Captain America reuniting with Black Panther in Wakanda are just a
                    few of the exciting moments teased.
                  </p>

                  <p>
                    The trailer also confirms that the Guardians of the Galaxy will play a significant role in the film,
                    with Star-Lord and his team appearing to encounter Thor floating in space. This suggests the film
                    will pick up directly after the events of "Thor: Ragnarok."
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/infinity-war-evolution.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Key Revelations About 'Infinity War'
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>Thanos already has two Infinity Stones in his gauntlet</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>Vision appears to be in danger as Thanos wants the Mind Stone</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>The battle will take place in multiple locations including Wakanda</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Captain America has a new shield and a beard</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>Spider-Man has a new suit that resembles the Iron Spider from the comics</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Threat of Thanos</h2>

                  <p>
                    Josh Brolin's Thanos has been teased since the first Avengers film, but "Infinity War" will finally
                    put him front and center as the main antagonist. The trailer shows him wielding the Infinity
                    Gauntlet with at least two stones already in place, suggesting he's well on his way to collecting
                    all six.
                  </p>

                  <p>
                    "Fun isn't something one considers when balancing the universe," Thanos says in the trailer. "But
                    this does put a smile on my face." This ominous line hints at his motivation: he believes he's on a
                    righteous mission to bring balance to the universe, regardless of the cost.
                  </p>

                  <p>
                    The trailer ends with Thor asking the Guardians of the Galaxy "Who the hell are you guys?" - a
                    perfect comedic beat to close out what is otherwise an intense and action-packed preview.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">What's Next?</h2>

                  <p>
                    "Avengers: Infinity War" is scheduled to hit theaters on May 4, 2018. Directed by Anthony and Joe
                    Russo, who previously helmed "Captain America: The Winter Soldier" and "Captain America: Civil War,"
                    the film promises to be the culmination of everything the MCU has been building toward since "Iron
                    Man" in 2008.
                  </p>

                  <p>
                    With so many characters and storylines to juggle, it remains to be seen how the Russos will balance
                    everything, but if this trailer is any indication, fans are in for an epic superhero spectacle
                    unlike anything we've seen before.
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
                    title: "Thor: Ragnarok - How It Sets Up Infinity War",
                    image: "/related-force-awakens.png",
                    views: "1.2M views",
                    time: "15:24",
                  },
                  {
                    title: "The Complete MCU Timeline Explained",
                    image: "/related-rogue-one.png",
                    views: "856K views",
                    time: "25:10",
                  },
                  {
                    title: "Every Infinity Stone Explained",
                    image: "/related-special-effects.png",
                    views: "1.5M views",
                    time: "18:42",
                  },
                ]}
              />

              <CommentsSection
                commentCount={24}
                comments={[
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "2 hours ago",
                    content:
                      "I can't believe they're finally bringing Thanos into the spotlight! Been waiting for this since that first post-credits scene.",
                    likes: 45,
                    replies: 3,
                  },
                  {
                    author: "Dylan Cooper",
                    avatar: "/commenter-dylan.jpg",
                    time: "5 hours ago",
                    content:
                      "That shot of all the heroes running together in Wakanda gave me chills. This is going to be epic!",
                    likes: 32,
                    replies: 1,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "1 day ago",
                    content:
                      "I'm worried about Vision. That scene where someone is trying to remove the Mind Stone from his head looks painful.",
                    likes: 18,
                    replies: 5,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "Black Panther - First Trailer Breakdown",
                    image: "/movie-unsplash-1.jpg",
                    views: "1.5M views",
                    time: "10:45",
                  },
                  {
                    title: "Top 10 Most Anticipated Movies of 2018",
                    image: "/movie-unsplash-2.jpg",
                    views: "982K views",
                    time: "15:20",
                  },
                  {
                    title: "The Evolution of the Marvel Cinematic Universe",
                    image: "/movie-unsplash-3.jpg",
                    views: "2.1M views",
                    time: "22:15",
                  },
                  {
                    title: "Avengers: Infinity War - Cast Interview",
                    image: "/movie-unsplash-4.jpg",
                    views: "1.3M views",
                    time: "18:30",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Marvel
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Avengers
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Infinity War
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Thanos
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Iron Man
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Captain America
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Thor
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Black Panther
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Guardians of the Galaxy
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest movie news and updates.</p>
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
