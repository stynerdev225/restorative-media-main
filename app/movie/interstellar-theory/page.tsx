import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InterstellarTheoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="interstellar-theory"
              thumbnailUrl="/space-battles.png"
              title="This Theory About The Ending Of Interstellar Changes Everything"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="/author-dylan.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold">Dylan Cooper</h3>
                    <p className="text-sm text-gray-500">Film Critic & Sci-Fi Theorist</p>
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
                    This Theory About The Ending Of Interstellar Changes Everything
                  </h1>
                  <div className="text-sm text-gray-500 mb-4">SEPTEMBER 5, 2017</div>

                  <p className="lead text-xl mb-6">
                    Christopher Nolan's 2014 sci-fi epic "Interstellar" left audiences both mesmerized and puzzled with its
                    mind-bending climax. But a compelling fan theory suggests that what we thought we saw in the film's
                    final moments may not be what actually happened.
                  </p>

                  <p>
                    <strong>Warning: Major spoilers ahead for "Interstellar."</strong>
                  </p>

                  <p>
                    In the film's third act, astronaut Cooper (Matthew McConaughey) ejects himself into a black hole called
                    Gargantua to save his colleague Amelia Brand (Anne Hathaway). Inside the black hole, Cooper encounters a
                    tesseract—a four-dimensional cube—constructed by future evolved humans. This allows him to communicate
                    across time with his daughter Murphy, providing her with the quantum data needed to solve the equation for
                    gravity and save humanity.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Established Ending</h2>

                  <p>
                    The conventional understanding of the film's ending is that Cooper is rescued from the black hole and
                    awakens on a space station orbiting Saturn, named "Cooper Station" after his now-elderly daughter who
                    solved the gravity equation. After a brief reunion with the aged Murphy, who encourages him to seek out
                    Brand (now alone on the potentially habitable planet Edmunds), Cooper steals a spacecraft and sets off
                    to find her.
                  </p>

                  <div className="my-8 relative aspect-video">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('/space-battles.png')` }}
                    ></div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The New Theory: Cooper Never Survived</h2>

                  <p>
                    The groundbreaking theory that's gaining traction among film analysts and sci-fi enthusiasts proposes
                    something far more tragic: Cooper never survived his journey into the black hole. Everything we see after
                    he sends the quantum data to Murphy—his rescue, the space station, the reunion with his elderly daughter,
                    and his decision to find Brand—is simply a dying hallucination or a construct created by the fifth-dimensional
                    beings to ease his passing.
                  </p>

                  <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-restorative-gold text-white p-2 rounded-br-lg z-10">
                      <span className="font-bold text-lg">!</span>
                    </div>

                    <div
                      className="absolute inset-0 bg-cover bg-right-bottom opacity-40 z-0"
                      style={{ backgroundImage: `url('/space-station-dock.jpg')` }}
                    ></div>

                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                      Evidence Supporting the Theory
                    </h3>

                    <div className="space-y-3 relative z-10">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">1.</span>
                        <span>The physics of black holes makes survival scientifically impossible</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">2.</span>
                        <span>The convenient timing of Cooper's rescue by rangers patrolling near Saturn</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">3.</span>
                        <span>The idyllic representation of Cooper Station as an idealized version of Earth</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">4.</span>
                        <span>The extremely convenient narrative resolution of all storylines</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="text-restorative-gold font-bold mr-2">5.</span>
                        <span>Parallels to scenes from "2001: A Space Odyssey," which also features a death hallucination</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">The Scientific Impossibility</h2>

                  <p>
                    From a purely scientific standpoint, Cooper's survival is highly implausible. The gravitational forces
                    inside a black hole would produce what physicists call "spaghettification," stretching any object into a
                    long, thin shape before tearing it apart at the atomic level. Even before reaching this point, the radiation
                    and extreme conditions would be lethal to any human.
                  </p>

                  <p>
                    Although the film establishes that the tesseract was created by fifth-dimensional beings as a way for Cooper
                    to communicate across time, it never explicitly states that these beings had the power to extract him
                    physically from the black hole and transport him back to our solar system. The convenient explanation that
                    he was ejected from the black hole and just happened to be found by rangers near Saturn stretches credibility.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Narrative and Symbolic Clues</h2>

                  <p>
                    The theory gains further support from narrative and symbolic elements throughout the film. Nolan is known
                    for his ambiguous endings and complex narratives that reward careful analysis. The final scenes of Interstellar
                    have a distinctly different tone and pacing compared to the rest of the film—they feel almost dreamlike.
                  </p>

                  <p>
                    Cooper Station itself can be seen as an idealized version of Earth—the realization of Cooper's desire to
                    save humanity. The ease with which he steals a spacecraft to find Brand, without any resistance or
                    questioning, further suggests we're not witnessing reality but rather Cooper's ideal scenario playing out.
                  </p>

                  <p>
                    There's also a significant thematic resonance to the idea that Cooper sacrificed himself to save humanity.
                    Throughout the film, Professor Brand (Michael Caine) and others discuss the necessity of individual sacrifice
                    for the greater good. Cooper's ultimate sacrifice would provide a powerful conclusion to this thematic arc.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Cinematic Influences</h2>

                  <p>
                    The theory also finds support in Nolan's cinematic influences. "Interstellar" draws heavily from Stanley
                    Kubrick's "2001: A Space Odyssey," which similarly ends with its protagonist experiencing a surreal sequence
                    that many interpret as a death hallucination. The parallels between the two endings suggest Nolan may have
                    been paying homage to Kubrick's ambiguous conclusion.
                  </p>

                  <p>
                    Furthermore, Nolan's own filmography is filled with unreliable narrators and reality-questioning scenarios,
                    from "Memento" to "Inception." The idea that Cooper's final experiences aren't objectively real but rather
                    a subjective experience fits perfectly with Nolan's established directorial interests.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">What This Means for the Film</h2>

                  <p>
                    If true, this theory transforms "Interstellar" from a ultimately hopeful story where humanity's ingenuity
                    transcends even the most extreme challenges, to a more bittersweet tale about the price of salvation. Cooper
                    does save humanity, but at the cost of his own life, never truly reuniting with his daughter or finding Brand.
                  </p>

                  <p>
                    This interpretation doesn't diminish the film's emotional impact—in fact, it may enhance it. Cooper's
                    willingness to sacrifice himself becomes all the more heroic, and the fifth-dimensional beings'
                    compassionate creation of a comforting death experience adds a layer of poignancy to the story.
                  </p>

                  <p>
                    Christopher Nolan has, of course, never confirmed or denied this theory. Like many of his films, "Interstellar"
                    seems designed to support multiple interpretations, allowing viewers to draw their own conclusions about what
                    actually happens. This ambiguity is part of what makes the film so enduringly fascinating and worthy of
                    discussion years after its release.
                  </p>

                  <p>
                    Whether you believe Cooper truly reunited with his daughter and set off to find Brand, or that his final
                    experiences were merely a comforting illusion, "Interstellar" remains a thought-provoking exploration of
                    human connection, sacrifice, and the transcendent power of love across time and space.
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
                    title: "Christopher Nolan's Cinematic Universe Explained",
                    image: "/related-force-awakens.png",
                    views: "1.8M views",
                    time: "25:42",
                  },
                  {
                    title: "The Science of Interstellar: What's Real and What's Not",
                    image: "/space-battles.png",
                    views: "2.3M views",
                    time: "18:15",
                  },
                  {
                    title: "Top 10 Mind-Bending Movie Endings Explained",
                    image: "/sci-fi-adventures.png",
                    views: "4.5M views",
                    time: "22:35",
                  },
                ]}
              />

              <CommentsSection
                commentCount={42}
                comments={[
                  {
                    author: "Marie Johnson",
                    avatar: "/commenter-marie.jpg",
                    time: "2 days ago",
                    content: "This theory completely blew my mind and changes how I see the entire film. I'll need to rewatch it with this perspective!",
                    likes: 254,
                    replies: 8,
                  },
                  {
                    author: "Gordon Freeman",
                    avatar: "/commenter-gordon.jpg",
                    time: "3 days ago",
                    content: "While it's an interesting theory, I feel like it undermines the core message about love transcending dimensions. Still, a fascinating analysis!",
                    likes: 126,
                    replies: 4,
                  },
                  {
                    author: "Thomas Reynolds",
                    avatar: "/author-thomas.jpg",
                    time: "5 days ago",
                    content: "Nolan loves ambiguous endings so this makes perfect sense. The parallels to 2001 are especially convincing. Great article!",
                    likes: 98,
                    replies: 2,
                  },
                ]}
              />
            </div>

            <div className="lg:w-1/3">
              <AdvertisementBanner className="mb-8" />

              <RecommendedVideos
                videos={[
                  {
                    title: "Matthew McConaughey Explains Interstellar's Ending",
                    image: "/confident-speaker.png",
                    views: "3.2M views",
                    time: "10:45",
                  },
                  {
                    title: "How Interstellar Changed Sci-Fi Cinema",
                    image: "/last-jedi.png",
                    views: "1.5M views",
                    time: "18:22",
                  },
                  {
                    title: "The Visual Effects of Interstellar: Behind the Scenes",
                    image: "/fullmetal-alchemist.png",
                    views: "2.7M views",
                    time: "24:18",
                  },
                  {
                    title: "Inception vs. Interstellar: Nolan's Dream Logic",
                    image: "/related-rogue-one.png",
                    views: "1.9M views",
                    time: "20:35",
                  },
                ]}
              />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Interstellar
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Christopher Nolan
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Film Theories
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Science Fiction
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Matthew McConaughey
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Black Holes
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Space
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Film Analysis
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest film theories and analysis.</p>
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
