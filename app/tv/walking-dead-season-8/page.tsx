import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WalkingDeadSeasonEightPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="walking-dead-season-8-trailer"
                            thumbnailUrl="/movie-unsplash-5.jpg"
                            title="The Walking Dead Season 8 Will Have More Action Than Ever Before"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <div className="flex items-center mb-6">
                                    <div className="mr-4">
                                        <Image src="/commenter-marie.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Sarah Johnson</h3>
                                        <p className="text-sm text-gray-500">TV Critic</p>
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
                                        The Walking Dead Season 8 Will Have More Action Than Ever Before
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 3, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        The upcoming eighth season of AMC's hit zombie drama promises to deliver unprecedented levels of action as the survivors gear up for all-out war against Negan and the Saviors.
                                    </p>

                                    <p>
                                        AMC has released new information about the highly anticipated eighth season of "The Walking Dead," which is set to premiere on October 22, 2017. According to showrunner Scott M. Gimple, this season will feature more action sequences than any previous season of the show.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">All-Out War Begins</h2>

                                    <p>
                                        Season 8 will adapt the "All-Out War" storyline from Robert Kirkman's comic book series, which sees Rick Grimes (Andrew Lincoln) and his allies from Alexandria, the Hilltop, and the Kingdom unite to battle Negan (Jeffrey Dean Morgan) and his group of Saviors.
                                    </p>

                                    <p>
                                        "We're starting with a full-blown war," Gimple said in a recent interview. "The first four episodes especially are going to be breakneck and relentless. The pace is going to be unlike anything we've seen on the show before."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-5.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A New Dynamic</h2>

                                    <p>
                                        After a seventh season that many critics and fans described as slow-paced and emotionally grueling, Season 8 promises to shift gears dramatically. The characters, who spent much of the previous season under Negan's oppressive rule, will now be fighting back with renewed determination.
                                    </p>

                                    <p>
                                        "Last season was about breaking the group down and this season is about rebuilding and finding a new path forward," explained Lincoln. "Rick is back. He's made the decision to fight, and he's willing to die trying. That creates a different kind of show with a different energy."
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-purple-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">NEW</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-5.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Key Cast and Characters for Season 8
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Andrew Lincoln:</span>
                                                <span>Rick Grimes, the leader of Alexandria</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Jeffrey Dean Morgan:</span>
                                                <span>Negan, the ruthless leader of the Saviors</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Melissa McBride:</span>
                                                <span>Carol Peletier, a skilled survivor now at the Kingdom</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Norman Reedus:</span>
                                                <span>Daryl Dixon, Rick's right-hand man</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Danai Gurira:</span>
                                                <span>Michonne, a fierce warrior and Rick's partner</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The 100th Episode Milestone</h2>

                                    <p>
                                        The Season 8 premiere will also mark the show's 100th episode, a significant milestone that the creators plan to celebrate with several easter eggs and callbacks to earlier seasons.
                                    </p>

                                    <p>
                                        "We wanted to honor the history of the show while also moving the story forward in a significant way," Gimple noted. "Fans who have been with us from the beginning will notice some familiar visual references and story beats that call back to our first season."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">New Alliances, New Threats</h2>

                                    <p>
                                        While the war with Negan will be the central focus of the new season, executive producer Greg Nicotero has hinted that other threats will emerge as well. "The world is expanding," he said. "We'll be introducing new communities and new characters that will complicate the already volatile situation."
                                    </p>

                                    <p>
                                        Among these new elements is Jadis (Pollyanna McIntosh) and her junkyard community, whose loyalty remains questionable after their betrayal of Rick in the Season 7 finale. Additionally, the massive herd of walkers that has been teased in promotional material will present a danger to all of the human factions.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Character Development Amidst Chaos</h2>

                                    <p>
                                        Despite the increased focus on action, the producers insist that character development remains at the heart of "The Walking Dead." Several characters will face significant personal challenges as the war unfolds.
                                    </p>

                                    <p>
                                        "Morgan (Lennie James) is dealing with his renewed willingness to kill, which conflicts with his previous peaceful philosophy," explained Gimple. "Ezekiel (Khary Payton) is leading his people into combat for the first time. Maggie (Lauren Cohan) is stepping up as a leader at Hilltop while preparing to become a mother. These personal journeys are just as important as the larger conflict."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Details</h2>

                                    <p>
                                        Filming for Season 8 began in May 2017 in Georgia, with the production team constructing massive new sets to accommodate the war storyline. The season will consist of 16 episodes, split into two eight-episode blocks as has become standard for the series.
                                    </p>

                                    <p>
                                        "The scale of what we're doing this year is unlike anything we've attempted before," said Nicotero, who directs several episodes including the premiere. "Multiple storylines, multiple battles happening simultaneously—it's been a logistical challenge, but the results are spectacular."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Ratings Expectations</h2>

                                    <p>
                                        While "The Walking Dead" remains one of the highest-rated shows on television, its viewership has declined in recent seasons. AMC executives hope that the action-packed eighth season will reinvigorate the fan base and reverse this trend.
                                    </p>

                                    <p>
                                        "We believe this season represents a return to what made the show a cultural phenomenon in the first place," said Charlie Collier, president of AMC. "It's about survival, hope, and people coming together against overwhelming odds. That's the heart of 'The Walking Dead,' and Season 8 delivers that in a big way."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">What's Next?</h2>

                                    <p>
                                        With Season 8 focusing on the war with Negan, fans are already speculating about what might come next. Kirkman's comic series has introduced several major storylines after "All-Out War," including the Whisperers, a group that wears walker skins to blend in with the dead.
                                    </p>

                                    <p>
                                        For now, however, the cast and crew are focused on delivering a season that they believe will satisfy longtime fans while also attracting new viewers. "This is 'The Walking Dead' at its most intense," concluded Gimple. "If you've ever considered watching the show, this is the season to jump in."
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
                                        title: "Walking Dead Season 7 Recap",
                                        image: "/desert-rescue.png",
                                        views: "3.4M views",
                                        time: "15:22",
                                    },
                                    {
                                        title: "Negan: Character Analysis",
                                        image: "/women-in-shadows.png",
                                        views: "2.1M views",
                                        time: "10:45",
                                    },
                                    {
                                        title: "The Evolution of Rick Grimes",
                                        image: "/facing-adversaries.png",
                                        views: "4.7M views",
                                        time: "18:34",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={38}
                                comments={[
                                    {
                                        author: "RickGrimesFan",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "I hope this season delivers better pacing. Season 7 was way too slow and depressing. Ready for Rick and the gang to fight back!",
                                        likes: 245,
                                        replies: 12,
                                    },
                                    {
                                        author: "ZombieHunter",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "All-Out War was my favorite arc in the comics. If they do it justice, this could be the best season yet!",
                                        likes: 187,
                                        replies: 8,
                                    },
                                    {
                                        author: "NeganRules",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "Jeffrey Dean Morgan deserves an Emmy for his portrayal of Negan. Best villain on television, hands down.",
                                        likes: 156,
                                        replies: 22,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "The Walking Dead Season 8 Official Trailer",
                                        image: "/movie-unsplash-5.jpg",
                                        views: "12.6M views",
                                        time: "5:42",
                                    },
                                    {
                                        title: "Cast Interview: Preparing for War",
                                        image: "/women-in-shadows.png",
                                        views: "3.8M views",
                                        time: "8:15",
                                    },
                                    {
                                        title: "Behind the Scenes: Season 8 Stunts",
                                        image: "/desert-rescue.png",
                                        views: "1.9M views",
                                        time: "12:32",
                                    },
                                    {
                                        title: "The Walking Dead Universe Expansion",
                                        image: "/facing-adversaries.png",
                                        views: "2.4M views",
                                        time: "7:18",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Walking Dead
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Zombies
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        AMC
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Rick Grimes
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Negan
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Season 8
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Post-Apocalyptic
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        All-Out War
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