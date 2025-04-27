import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function StrangerThingsS2Page() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="stranger-things-s2"
                            thumbnailUrl="/movie-unsplash-3.jpg"
                            title="Stranger Things Season 2 Will Be Darker and More Intense"
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
                                        <h3 className="font-bold">Thomas Reynolds</h3>
                                        <p className="text-sm text-gray-500">TV & Culture Writer</p>
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
                                        Stranger Things Season 2 Will Be Darker and More Intense
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 4, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        The breakout Netflix hit of 2016 is returning this Halloween with a second season that promises to ramp up the scares and delve deeper into the mysterious Upside Down.
                                    </p>

                                    <p>
                                        When "Stranger Things" debuted on Netflix last summer, few could have predicted the cultural phenomenon it would become. The series, created by the previously unknown Duffer Brothers, combined 1980s nostalgia with supernatural horror and instantly captivated audiences worldwide. Now, with Season 2 set to premiere on October 27, 2017, the show's creators and cast are promising a follow-up that will exceed expectations.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A Darker, More Expansive World</h2>

                                    <p>
                                        According to the Duffer Brothers, Season 2 will explore a "bigger mythology" behind the Upside Down, the sinister alternate dimension that played a central role in the first season. "We're introducing new characters, expanding our world, and tying up some loose ends from Season 1," Ross Duffer explained in a recent interview.
                                    </p>

                                    <p>
                                        Executive producer Shawn Levy has described the new season as "bigger and potentially darker" than its predecessor. "The threats to Hawkins and to our characters are bigger, darker, often times scarier," he said. This sentiment was echoed by actor Noah Schnapp, who plays Will Byers, when he described Season 2 as "more horror-oriented."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-3.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Picking Up Where We Left Off</h2>

                                    <p>
                                        Season 2 is set in 1984, almost a year after the events of Season 1. Will Byers has been rescued from the Upside Down, but all is not well. He's experiencing "episodes" where he seemingly flashes back to the Upside Down, suggesting a continued connection to the alternate dimension.
                                    </p>

                                    <p>
                                        Meanwhile, Chief Hopper (David Harbour) has been working to cover up the supernatural events of the previous year to protect the town and especially the kids. And Eleven (Millie Bobby Brown), whose fate was left ambiguous in the Season 1 finale, will indeed return, though the circumstances of her reappearance remain one of the show's most closely guarded secrets.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-purple-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">NEW</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-3.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            New Characters Coming to Hawkins
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Max:</span>
                                                <span>A tough new girl at Hawkins Middle School (Sadie Sink)</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Billy:</span>
                                                <span>Max's older stepbrother with a violent streak (Dacre Montgomery)</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Dr. Owens:</span>
                                                <span>A Department of Energy scientist (Paul Reiser)</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Bob Newby:</span>
                                                <span>A former classmate of Joyce and Hopper who runs the local RadioShack (Sean Astin)</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Roman:</span>
                                                <span>A mysterious character connected to Hawkins Lab (Linnea Berthelsen)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">New Threats Emerge</h2>

                                    <p>
                                        The trailers for Season 2 have revealed a new monster lurking in the Upside Down—a massive, spider-like creature that Will has dubbed the "Shadow Monster." This entity appears to be significantly larger and more formidable than the Demogorgon from Season 1, suggesting an escalation of the supernatural threat.
                                    </p>

                                    <p>
                                        "The Demogorgon was just the tip of the iceberg," teased Matt Duffer. "There's an entire ecosystem in the Upside Down that we're only beginning to understand."
                                    </p>

                                    <p>
                                        Additionally, the government conspiracy elements that were hinted at in Season 1 will be further explored. While Dr. Brenner (Matthew Modine) is presumed dead, new Department of Energy scientist Dr. Owens (Paul Reiser) has arrived in Hawkins. His intentions—whether benevolent or sinister—remain to be seen.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Character Development</h2>

                                    <p>
                                        The core cast of characters from Season 1 will continue to evolve in Season 2. Nancy (Natalia Dyer) and Steve (Joe Keery) are still together but dealing with the trauma of Barb's death. Jonathan (Charlie Heaton) continues to be an outsider but finds new purpose in helping his brother. And the core group of boys—Mike (Finn Wolfhard), Dustin (Gaten Matarazzo), and Lucas (Caleb McLaughlin)—are trying to move on with their lives while still missing Eleven.
                                    </p>

                                    <p>
                                        "Every character is dealing with the aftermath of Season 1 in their own way," explained Wolfhard. "Mike is depressed because he doesn't know what happened to Eleven. He's closed off from his friends and struggling."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Justice for Barb</h2>

                                    <p>
                                        One of the most surprising outcomes of Season 1 was the passionate fan response to the character of Barb (Shannon Purser), Nancy's best friend who met a grisly fate in the Upside Down. The hashtag #JusticeForBarb became a viral sensation, with fans demanding closure for the character.
                                    </p>

                                    <p>
                                        The Duffers have confirmed that Barb's death will not be forgotten in Season 2. "Barb will not be forgotten," promised Matt Duffer. "Her parents believe she's just missing, and Nancy is dealing with serious guilt over her death. It's a major part of Nancy's storyline this season."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">What to Expect</h2>

                                    <p>
                                        With nine episodes instead of eight, a larger budget, and the confidence that comes from having created a hit show, the Duffer Brothers are aiming to make Season 2 of "Stranger Things" even more compelling than its predecessor. The Halloween release date is fitting for a season that promises to heighten the horror elements while continuing to develop the lovable characters that made the first season so endearing.
                                    </p>

                                    <p>
                                        As David Harbour cryptically teased, "If you thought Season 1 was scary, just wait. The Upside Down is just getting started."
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
                                        <button className="text-purple-500">
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
                                        title: "Stranger Things Season 1 Recap",
                                        image: "/desert-rescue.png",
                                        views: "3.8M views",
                                        time: "14:32",
                                    },
                                    {
                                        title: "The 80s References in Stranger Things",
                                        image: "/women-in-shadows.png",
                                        views: "2.1M views",
                                        time: "22:45",
                                    },
                                    {
                                        title: "The Making of Stranger Things",
                                        image: "/facing-adversaries.png",
                                        views: "1.5M views",
                                        time: "18:19",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={36}
                                comments={[
                                    {
                                        author: "Mike Wheeler",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "2 days ago",
                                        content: "I really hope El comes back this season! The first season was incredible, can't wait for Halloween!",
                                        likes: 472,
                                        replies: 23,
                                    },
                                    {
                                        author: "Dustin Henderson",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "The Demogorgon was scary enough, but now there's a shadow monster? I'm gonna need more pudding for this.",
                                        likes: 385,
                                        replies: 9,
                                    },
                                    {
                                        author: "Nancy Wheeler",
                                        avatar: "/commenter-marie.jpg",
                                        time: "1 week ago",
                                        content: "Justice for Barb! I'm glad they're addressing what happened to her this season.",
                                        likes: 529,
                                        replies: 31,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Stranger Things 2: Official Trailer",
                                        image: "/movie-unsplash-3.jpg",
                                        views: "12.7M views",
                                        time: "2:44",
                                    },
                                    {
                                        title: "Interview with Millie Bobby Brown",
                                        image: "/women-in-shadows.png",
                                        views: "5.6M views",
                                        time: "8:21",
                                    },
                                    {
                                        title: "Theories About the Upside Down",
                                        image: "/desert-rescue.png",
                                        views: "2.8M views",
                                        time: "15:38",
                                    },
                                    {
                                        title: "Evolution of Horror in Television",
                                        image: "/facing-adversaries.png",
                                        views: "1.9M views",
                                        time: "20:15",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Stranger Things
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Netflix
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Horror
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Eleven
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Upside Down
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        80s Nostalgia
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Sci-Fi
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Duffer Brothers
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest TV and movie news.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg">
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