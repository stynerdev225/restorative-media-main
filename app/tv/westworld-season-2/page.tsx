import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WestworldSeasonTwoPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="westworld-season-2-trailer"
                            thumbnailUrl="/movie-unsplash-8.jpg"
                            title="Westworld Season 2: New Characters and Locations Revealed"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <div className="flex items-center mb-6">
                                    <div className="mr-4">
                                        <Image src="/commenter-dylan.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Daniel Park</h3>
                                        <p className="text-sm text-gray-500">TV & Science Fiction Writer</p>
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
                                        Westworld Season 2: New Characters and Locations Revealed
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 3, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        HBO's hit sci-fi western prepares to expand its universe with new parks, characters, and deeper exploration of the mysterious corporation behind it all.
                                    </p>

                                    <p>
                                        After a groundbreaking first season that left viewers with more questions than answers, HBO's "Westworld" is gearing up for its second season, scheduled to premiere in spring 2018. Recent interviews with the show's creators, Jonathan Nolan and Lisa Joy, along with newly released promotional materials, have revealed exciting new details about the upcoming season.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Westworld: New Parks Confirmed</h2>

                                    <p>
                                        The Season 1 finale briefly teased the existence of "Samurai World," and now the creators have confirmed that Season 2 will indeed explore additional theme parks operated by Delos Incorporated. While they've been careful not to reveal too much, Nolan hinted that we'll see at least two new parks in the upcoming season.
                                    </p>

                                    <p>
                                        "We wanted to expand the world in a meaningful way," Nolan explained in a recent interview. "These new parks aren't just set dressing—they're integral to understanding the scale and ambition of what Delos has been building, and the different ways the company has been exploiting this technology."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-8.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">New Characters Enter the Maze</h2>

                                    <p>
                                        Several new cast members have been announced for the second season. Katja Herbers ("Manhattan") will play Grace, a seasoned guest of the park who finds herself caught up in the host rebellion. Additionally, Neil Jackson ("Sleepy Hollow") will portray Nicholas, a charming and resourceful man who finds himself in unfamiliar territory.
                                    </p>

                                    <p>
                                        Perhaps the most intriguing addition is Gustaf Skarsgård ("Vikings") as Karl Strand, a white-collar executive with a military background who's tasked with restoring order to the park. His character suggests we'll see more of the corporate side of Delos and their response to the chaos unleashed in the Season 1 finale.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-purple-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">NEW CAST</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-8.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Season 2 New Characters
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Katja Herbers:</span>
                                                <span>Grace, a seasoned guest caught in the host rebellion</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Gustaf Skarsgård:</span>
                                                <span>Karl Strand, an executive with military experience sent to restore order</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Neil Jackson:</span>
                                                <span>Nicholas, a charming man who finds himself in uncharted territory</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Fares Fares:</span>
                                                <span>Antoine Costa, a tech expert assigned to secure the park</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Hiroyuki Sanada:</span>
                                                <span>Musashi, a character connected to one of the new parks</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Deeper Into Delos</h2>

                                    <p>
                                        One of the most significant revelations is that Season 2 will delve more deeply into Delos Incorporated, the mysterious company behind Westworld and its sister parks. According to Lisa Joy, viewers will get to explore the corporate headquarters and understand more about the company's true motivations.
                                    </p>

                                    <p>
                                        "Season 1 was very much about the hosts discovering their reality and breaking free from their loops," Joy said. "Season 2 expands the lens to show who's been watching them all along and why. The Delos corporation has agendas that go far beyond simple entertainment."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Aftermath of Rebellion</h2>

                                    <p>
                                        The first season ended with Dolores (Evan Rachel Wood) firing the shot that potentially killed Robert Ford (Anthony Hopkins) and signaled the beginning of a host rebellion. Season 2 will pick up immediately after these events, showing the immediate chaos that ensues.
                                    </p>

                                    <p>
                                        "We're dealing with the immediate aftermath of Ford's new narrative," Nolan explained. "What does it mean for hosts who have been trapped in these loops for decades to suddenly have agency? Some will handle it better than others. And the guests, who are accustomed to consequence-free actions, suddenly find themselves in a world with very real danger."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Man in Black's New Journey</h2>

                                    <p>
                                        Ed Harris will return as the enigmatic Man in Black, though his storyline will reportedly take a very different turn. After spending years searching for the center of the maze, only to discover it wasn't meant for him, he now finds himself in a scenario he's always wanted: a game with real stakes.
                                    </p>

                                    <p>
                                        "He finally gets what he's been looking for, but it may not be in the form he expected," teased Nolan. "The power dynamic has completely shifted, and the Man in Black has to navigate a park where he's no longer the most dangerous thing in it."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Maeve's Quest</h2>

                                    <p>
                                        Thandie Newton's Maeve made a conscious choice in the Season 1 finale to go back into the park instead of escaping, determined to find her daughter from a previous narrative. Her journey will take center stage in Season 2, exploring the nature of attachments and whether programmed love can transform into something genuine.
                                    </p>

                                    <p>
                                        "Maeve's journey is perhaps the most emotional arc of the new season," said Joy. "She's operating with full awareness now, but she's driven by this connection that was programmed into her. The question becomes: does knowing the source of your love make it any less real?"
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Bernard's Struggle</h2>

                                    <p>
                                        After the shocking revelation that Bernard (Jeffrey Wright) is actually a host modeled after Ford's former partner Arnold, Season 2 will explore his unique position straddling both worlds. As someone who believed himself to be human, he now has to reconcile his true nature while navigating the chaos of the uprising.
                                    </p>

                                    <p>
                                        "Bernard is experiencing an existential crisis unlike any other character," Wright said during a panel discussion. "He's a host with intimate knowledge of how humans think—he thought he was one of them. Now he's caught between these two worlds, and his allegiances will be tested repeatedly."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Expanded Timeline</h2>

                                    <p>
                                        The complex timeline was one of the first season's most discussed elements, with the revelation that William (Jimmi Simpson) and the Man in Black were the same character at different points in time. The creators have confirmed that Season 2 will continue to play with chronology, potentially going even further back to show the park's early days.
                                    </p>

                                    <p>
                                        "We're still telling a story from the hosts' perspective, where memory doesn't work the same way it does for humans," explained Nolan. "Past, present, and future are more fluid concepts when your mind is essentially a computer that can access different time periods with perfect recall."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Scale</h2>

                                    <p>
                                        The second season has reportedly been even more ambitious in terms of production scale. With multiple parks to depict and more extensive visual effects requirements, the budget has increased significantly. Filming has taken place in various locations across Utah, California, and Singapore, the latter presumably serving as a setting for some of the new parks or the Delos headquarters.
                                    </p>

                                    <p>
                                        "The scope of this season makes the first look like a warmup," noted executive producer J.J. Abrams. "Jonathan and Lisa are pushing boundaries in television storytelling, both narratively and visually. The ambition of what they're attempting is staggering."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Questions to Be Answered</h2>

                                    <p>
                                        While the new season will introduce fresh mysteries, it will also address some of the lingering questions from Season 1. Viewers will learn more about the true purpose of the host data collection, the significance of the mysterious "weapon" mentioned by Dolores, and whether Ford actually had his own consciousness uploaded into a host body before his apparent death.
                                    </p>

                                    <p>
                                        "We're not interested in dragging mysteries out indefinitely," Joy assured in a recent interview. "Some questions will be answered definitively in Season 2, even as new ones emerge. We're building toward a specific destination, and every reveal serves the larger story we're telling."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Release and Expectations</h2>

                                    <p>
                                        HBO has confirmed that "Westworld" Season 2 will premiere in spring 2018, though an exact date has not yet been announced. Given the first season's critical acclaim and 22 Emmy nominations (with 5 wins), expectations are extraordinarily high for the sophomore effort.
                                    </p>

                                    <p>
                                        With an expanded universe, new characters, and deeper exploration of the themes that made the first season so compelling, "Westworld" appears poised to continue its examination of consciousness, free will, and what it truly means to be human—all wrapped in the guise of a futuristic theme park where the attractions are starting to fight back.
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
                                        title: "Westworld Season 1 Recap: Everything You Need to Know",
                                        image: "/desert-rescue.png",
                                        views: "4.2M views",
                                        time: "15:38",
                                    },
                                    {
                                        title: "The Philosophy of Consciousness in Westworld",
                                        image: "/women-in-shadows.png",
                                        views: "2.1M views",
                                        time: "12:45",
                                    },
                                    {
                                        title: "Jonathan Nolan & Lisa Joy Interview on Season 2",
                                        image: "/facing-adversaries.png",
                                        views: "980K views",
                                        time: "8:53",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={56}
                                comments={[
                                    {
                                        author: "WestworldObsessed",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "Can't wait to see Samurai World! I've been theorizing about the other parks since the brief tease in the Season 1 finale. I wonder how many parks Delos actually operates?",
                                        likes: 247,
                                        replies: 18,
                                    },
                                    {
                                        author: "SciFiPhilosopher",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "The exploration of consciousness in this show is incredible. Can't wait to see how hosts like Maeve develop now that they've broken free of their programming. Does true free will exist for them?",
                                        likes: 193,
                                        replies: 11,
                                    },
                                    {
                                        author: "TVCritic2020",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "Season 1 had one of the most satisfying payoffs to complex storytelling I've ever seen. The multiple timeline reveals were masterfully done. Hope they can maintain that quality!",
                                        likes: 165,
                                        replies: 9,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Westworld Season 2 Official Trailer",
                                        image: "/movie-unsplash-8.jpg",
                                        views: "12.7M views",
                                        time: "2:38",
                                    },
                                    {
                                        title: "Evan Rachel Wood on Dolores' Evolution",
                                        image: "/women-in-shadows.png",
                                        views: "3.2M views",
                                        time: "9:15",
                                    },
                                    {
                                        title: "The Technology of Westworld Explained",
                                        image: "/desert-rescue.png",
                                        views: "1.8M views",
                                        time: "14:22",
                                    },
                                    {
                                        title: "HBO's Most Ambitious Shows: Behind the Scenes",
                                        image: "/facing-adversaries.png",
                                        views: "2.4M views",
                                        time: "18:05",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Westworld
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        HBO
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Science Fiction
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Season 2
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Dolores
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Evan Rachel Wood
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Artificial Intelligence
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Jonathan Nolan
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest TV show updates and exclusive content.</p>
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