import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Agent327Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="agent-327-trailer"
              thumbnailUrl="/anonymous-tapes.png"
              title="Agent 327: Operation Barbershop: An Animated Film Based on Martin Lodewijk's Comic"
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
                    <h3 className="font-bold">Margaery Tyrell</h3>
                    <p className="text-sm text-gray-500">Animation Critic & Comic Book Enthusiast</p>
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
                    Agent 327: Operation Barbershop: An Animated Film Based on Martin Lodewijk's Comic
                  </h1>
                  <div className="text-sm text-gray-500 mb-4">SEPTEMBER 5, 2017</div>

                  <p className="lead text-xl mb-6">
                    Blender Animation Studio has released a stunning short film that brings to life one of the Netherlands'
                    most beloved comic book characters, Agent 327, in a thrilling spy adventure that pays homage to the
                    original comics while showcasing cutting-edge animation techniques.
                  </p>

                  <p>
                    Martin Lodewijk's iconic comic book character Agent 327 has been a staple of Dutch pop culture since
                    the 1970s. The bumbling secret agent, whose real name is Hendrik IJzerbroot, has entertained generations
                    with his unlikely victories against international villains. Now, Blender Animation Studio has brought
                    this beloved character to life in a spectacular short film that serves as a proof of concept for a
                    planned feature-length animated movie.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">From Page to Screen</h2>

                  <p>
                    "Agent 327: Operation Barbershop" follows the titular secret agent as he investigates suspicious
                    activities at a barbershop, only to discover that it's a front for a sinister criminal organization.
                    What begins as a routine surveillance operation quickly escalates into a high-stakes confrontation with
                    deadly hairdressers and elaborate deathtraps.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/anonymous-tapes.png')` }}
                    ></div>
                  </div>

                  <p>
                    Director Hjalti Hjalmarsson and co-director Ton Roosendaal have done an exceptional job translating the
                    comic book's distinct visual style and humor to the screen. The character designs are faithful to
                    Lodewijk's illustrations while adding a three-dimensional depth that breathes new life into these
                    familiar figures. Agent 327 himself is instantly recognizable with his prominent nose, trench coat,
                    and perpetually bewildered expression.
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/spy-equipment.png')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Agent 327: Key Elements
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>Created by Dutch comic artist Martin Lodewijk in 1966</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>Real name: Hendrik IJzerbroot, Dutch secret service agent</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>Parody of James Bond and other spy genre tropes</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>Animated short created with Blender, an open-source 3D creation software</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>Short film is a proof of concept for a feature-length movie</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Technical Achievement</h2>

                  <p>
                    What makes "Operation Barbershop" particularly impressive is that it was created using Blender, an
                    open-source 3D creation software. The Blender Animation Studio team has pushed the software to its
                    limits, producing animation quality that rivals that of major studios like Pixar or DreamWorks.
                  </p>

                  <p>
                    The action sequences are particularly noteworthy, featuring fluid character movements and dynamic
                    camera work that enhance the excitement without sacrificing clarity. The fight choreography in the
                    barbershop scene is both thrilling and comical, perfectly capturing the spirit of the source material.
                  </p>

                  <p>
                    Lighting and textures deserve special mention as well. The filmmakers have created a richly detailed
                    world that feels tangible despite its cartoonish aesthetic. From the worn leather of Agent 327's trench
                    coat to the gleaming metal of the barber's scissors-turned-weapons, every surface has been crafted with
                    meticulous attention to detail.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">A Promising Start</h2>

                  <p>
                    At just under four minutes long, "Operation Barbershop" serves as a tantalizing glimpse of what a
                    feature-length Agent 327 film could offer. The short establishes the character, his world, and the
                    tone of the series with remarkable efficiency, leaving viewers eager for more adventures.
                  </p>

                  <p>
                    Blender Animation Studio is currently seeking funding to turn this proof of concept into a full-length
                    film. Given the quality of this short and the enduring popularity of the character in Europe, it seems
                    likely that Agent 327 will soon be joining the ranks of comic book characters who have successfully
                    made the leap to the big screen.
                  </p>

                  <p>
                    For audiences unfamiliar with the character, "Operation Barbershop" stands on its own as an entertaining
                    short film that showcases what can be achieved with open-source software and creative talent. For
                    longtime fans of the comic, it's a faithful adaptation that captures everything they love about Agent
                    327 while bringing him into a new medium.
                  </p>

                  <p>
                    Whether you're a fan of animation, spy films, or comic book adaptations, "Agent 327: Operation Barbershop"
                    is well worth your time. The short film is available to watch for free online, and based on the quality
                    of this initial offering, the future looks bright for the Netherlands' most famous secret agent.
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
                    title: "The Evolution of European Comics in Animation",
                    image: "/space-battles.png",
                    views: "856K views",
                    time: "16:42",
                  },
                  {
                    title: "Blender Studio: Open Source Animation Revolution",
                    image: "/related-force-awakens.png",
                    views: "1.3M views",
                    time: "22:08",
                  },
                  {
                    title: "Top 10 Comic Book Adaptations You've Never Heard Of",
                    image: "/wonder-woman.png",
                    views: "675K views",
                    time: "18:35",
                  },
                ]}
              />

              <CommentsSection
                commentCount={14}
                comments={[
                  {
                    author: "Dylan Cooper",
                    avatar: "/commenter-dylan.jpg",
                    time: "1 day ago",
                    content: "I had no idea who Agent 327 was before this, but now I'm a fan! The animation quality is incredible considering it was made with open-source software.",
                    likes: 108,
                    replies: 3,
                  },
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "3 days ago",
                    content: "As someone who grew up reading these comics in the Netherlands, this adaptation is perfect! They really captured the humor and style of Lodewijk's work.",
                    likes: 87,
                    replies: 2,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "1 week ago",
                    content: "The fight choreography in this short film is better than what I've seen in some big-budget productions. Really impressive work!",
                    likes: 65,
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
                    title: "Behind the Scenes: Agent 327 Animation Process",
                    image: "/mysterious-couple.png",
                    views: "920K views",
                    time: "14:22",
                  },
                  {
                    title: "From Comic to Screen: The Art of Adaptation",
                    image: "/infinity-war.png",
                    views: "1.1M views",
                    time: "20:15",
                  },
                  {
                    title: "The History of Dutch Comics",
                    image: "/anonymous-tapes.png",
                    views: "560K views",
                    time: "25:38",
                  },
                  {
                    title: "Spy Movies That Inspired Agent 327",
                    image: "/classic-film-reel.png",
                    views: "780K views",
                    time: "18:45",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Agent 327
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Animation
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Comic Books
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Blender
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Martin Lodewijk
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Dutch Comics
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Spy Films
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Open Source
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest animation and movie news.</p>
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
