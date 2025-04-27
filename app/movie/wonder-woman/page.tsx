import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WonderWomanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="wonder-woman-justice-league"
              thumbnailUrl="/wonder-woman.png"
              title="Here's Wonder Woman just hanging with her Justice League boys"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="/author-margaery.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold">Diana Prince</h3>
                    <p className="text-sm text-gray-500">DC Entertainment Correspondent</p>
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
                    Here's Wonder Woman just hanging with her Justice League boys
                  </h1>

                  <p className="lead text-xl mb-6">
                    After the massive success of her solo film, Wonder Woman is ready to join forces with Batman,
                    Superman, The Flash, Aquaman, and Cyborg in the upcoming Justice League movie.
                  </p>

                  <p>
                    Warner Bros. has released a new batch of promotional images showing Gal Gadot's Wonder Woman
                    alongside her male counterparts in the Justice League. The photos give fans a closer look at the
                    team's dynamics and hint at Diana Prince's central role in uniting the heroes.
                  </p>

                  <p>
                    Following the events of "Batman v Superman: Dawn of Justice," Bruce Wayne (Ben Affleck) and Diana
                    Prince (Gal Gadot) work together to recruit a team of metahumans to stand against a newly awakened
                    threat. The images show Wonder Woman in her updated costume, which maintains the iconic elements
                    from her solo film while adding subtle refinements for the team-up movie.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/wonder-woman-comparison.png')` }}
                    ></div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">A Central Role in the Team</h2>

                  <p>
                    Director Zack Snyder has emphasized that Wonder Woman will play a crucial role in the Justice
                    League, serving as a bridge between humanity and the more godlike members of the team. "She's the
                    glue that holds the team together in many ways," Snyder explained in a recent interview.
                  </p>

                  <p>
                    The new images show Diana interacting with each team member, suggesting she'll have significant
                    relationships with all of the heroes. One particularly striking photo shows Wonder Woman and Batman
                    strategizing together, highlighting their partnership that began in "Batman v Superman."
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/wonder-woman-evolution.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Key Revelations About Wonder Woman in Justice League
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>Diana has been operating as Wonder Woman in secret for decades</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>Her fighting style has evolved since the events of her solo film</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>She serves as the team's most experienced warrior</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Her relationship with Batman will be a key dynamic in the film</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>She'll be wielding new weapons alongside her iconic lasso and sword</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Building on Solo Success</h2>

                  <p>
                    Wonder Woman's solo film, directed by Patty Jenkins, was both a critical and commercial success,
                    grossing over $820 million worldwide and earning praise for its portrayal of the iconic heroine. The
                    Justice League will build on this momentum, with Gadot bringing the same strength and compassion to
                    her character.
                  </p>

                  <p>
                    "What's great about Diana in Justice League is that she's now embracing her role as a hero," Gadot
                    explained during a set visit. "In her solo film, she was discovering her powers and her place in
                    man's world. Now she's confident and ready to lead."
                  </p>

                  <p>
                    The new images also reveal subtle updates to Wonder Woman's costume, with slightly more vibrant
                    colors and refined details on her armor. Costume designer Michael Wilkinson has stated that these
                    changes reflect Diana's evolution as a character and her growing comfort with her identity as a
                    superhero.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Team Dynamics</h2>

                  <p>
                    The promotional materials emphasize the contrasting personalities within the Justice League. While
                    Batman is brooding and tactical, Wonder Woman is compassionate yet fierce. The Flash brings youthful
                    enthusiasm, Aquaman projects rugged independence, and Cyborg struggles with his human-machine
                    duality.
                  </p>

                  <p>
                    "Diana brings a unique perspective to the team," says Justice League producer Deborah Snyder. "She's
                    lived among humans for a century, but she's not human herself. She understands both worlds in a way
                    none of the other characters do."
                  </p>

                  <p>
                    One particularly interesting dynamic hinted at in the new images is Wonder Woman's relationship with
                    the resurrected Superman. While details of Superman's return remain closely guarded, the photos
                    suggest Diana will play a key role in helping him readjust to life and find his place on the team.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

                  <p>
                    With Wonder Woman 2 already in development and scheduled for release in 2019, Diana Prince's role in
                    the DC Extended Universe continues to expand. Her appearance in Justice League will bridge the gap
                    between her origin story set during World War I and her modern adventures.
                  </p>

                  <p>
                    The Justice League hits theaters on November 17, 2017, and if these images are any indication,
                    Wonder Woman will be a standout character once again, proving that she can hold her own alongside
                    the boys of the Justice League.
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
                    title: "Wonder Woman - Director's Commentary",
                    image: "/related-force-awakens.png",
                    views: "1.1M views",
                    time: "12:34",
                  },
                  {
                    title: "The Evolution of Wonder Woman in Film and TV",
                    image: "/related-rogue-one.png",
                    views: "756K views",
                    time: "18:22",
                  },
                  {
                    title: "Justice League - Behind the Scenes",
                    image: "/related-special-effects.png",
                    views: "1.3M views",
                    time: "15:10",
                  },
                ]}
              />

              <CommentsSection
                commentCount={18}
                comments={[
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "3 hours ago",
                    content:
                      "Gal Gadot is perfect as Wonder Woman! Can't wait to see her interact with the rest of the League.",
                    likes: 42,
                    replies: 2,
                  },
                  {
                    author: "Dylan Cooper",
                    avatar: "/commenter-dylan.jpg",
                    time: "6 hours ago",
                    content:
                      "I'm curious to see how they balance all these characters. Wonder Woman deserves plenty of screen time after her amazing solo film.",
                    likes: 28,
                    replies: 3,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "1 day ago",
                    content:
                      "The costume details look amazing. You can really see how they've refined her look since Batman v Superman.",
                    likes: 15,
                    replies: 1,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "The History of the Justice League in Comics",
                    image: "/movie-unsplash-1.jpg",
                    views: "1.2M views",
                    time: "22:15",
                  },
                  {
                    title: "DC vs Marvel: The Battle for Superhero Dominance",
                    image: "/movie-unsplash-2.jpg",
                    views: "1.8M views",
                    time: "18:40",
                  },
                  {
                    title: "Wonder Woman's Most Powerful Moments",
                    image: "/movie-unsplash-3.jpg",
                    views: "950K views",
                    time: "14:25",
                  },
                  {
                    title: "Justice League: What to Expect",
                    image: "/movie-unsplash-4.jpg",
                    views: "1.1M views",
                    time: "16:30",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    DC
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Wonder Woman
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Justice League
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Gal Gadot
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Batman
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Superman
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    The Flash
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Aquaman
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Cyborg
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
