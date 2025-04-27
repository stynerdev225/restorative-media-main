import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BladeRunner2049Page() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="blade-runner-2049-trailer"
                            thumbnailUrl="/movie-unsplash-2.jpg"
                            title="Blade Runner 2049: New Trailer Reveals More About Ryan Gosling's Character"
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
                                        <h3 className="font-bold">Alex Morgan</h3>
                                        <p className="text-sm text-gray-500">Film Critic</p>
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
                                        Blade Runner 2049: New Trailer Reveals More About Ryan Gosling's Character
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 4, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        The latest trailer for Denis Villeneuve's highly anticipated sequel to the sci-fi classic provides new insights into Officer K's mysterious mission.
                                    </p>

                                    <p>
                                        Warner Bros. and Sony Pictures have released a new trailer for "Blade Runner 2049," the long-awaited sequel to Ridley Scott's 1982 sci-fi masterpiece. While previous teasers have focused on establishing the film's stunning visual aesthetic, this latest preview delves deeper into the narrative, particularly the journey of Ryan Gosling's character, LAPD Officer K.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A New Blade Runner's Mission</h2>

                                    <p>
                                        The trailer reveals that Officer K, a blade runner for the Los Angeles Police Department, uncovers a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who has been missing for 30 years.
                                    </p>

                                    <p>
                                        "Your story isn't over yet. There's still a page left," K says to Deckard in one of the trailer's most intriguing exchanges, suggesting that Deckard's past will play a crucial role in the film's central mystery.
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-2.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The World Thirty Years Later</h2>

                                    <p>
                                        Set thirty years after the events of the first film, "Blade Runner 2049" presents a world that has further deteriorated. The trailer showcases sprawling, desolate landscapes and massive, holographic advertisements that tower over the city, highlighting the film's exploration of corporatism and technological advancement.
                                    </p>

                                    <p>
                                        The Tyrell Corporation, which manufactured replicants in the original film, has been replaced by the Wallace Corporation, led by Niander Wallace (Jared Leto). "Every civilization was built off the back of a disposable workforce," Wallace says in the trailer, suggesting that he has continued and perhaps expanded upon Tyrell's work.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">NEW</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-2.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Key Cast and Characters
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Ryan Gosling:</span>
                                                <span>Officer K, a new blade runner for the LAPD</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Harrison Ford:</span>
                                                <span>Rick Deckard, a former blade runner who has been missing for decades</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Jared Leto:</span>
                                                <span>Niander Wallace, a powerful manufacturer of replicants</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Ana de Armas:</span>
                                                <span>Joi, a mysterious character connected to Officer K</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Robin Wright:</span>
                                                <span>Lieutenant Joshi, K's superior at the LAPD</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Visionary Direction</h2>

                                    <p>
                                        Denis Villeneuve, known for his work on "Arrival," "Sicario," and "Prisoners," directs the sequel with cinematography by Roger Deakins, a 13-time Oscar nominee. The trailer showcases their collaboration, featuring striking imagery of a dystopian Los Angeles, a ruined Las Vegas, and snow-covered landscapes.
                                    </p>

                                    <p>
                                        "The original 'Blade Runner' is one of the most influential films of all time," Villeneuve has stated in interviews. "Our goal wasn't to replicate it, but to honor its legacy while moving the story forward in a meaningful way."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Replicant Evolution</h2>

                                    <p>
                                        The trailer hints at new developments in replicant technology. Wallace is seen creating a new replicant in one scene, while in another, he suggests that Officer K might not understand his own identity. "You're special," Wallace tells him. "Your history isn't over yet. There's still a page left."
                                    </p>

                                    <p>
                                        This dialogue, along with Lieutenant Joshi's (Robin Wright) warning that there is "an order to things" that K's discovery threatens, suggests that the film will continue the original's exploration of what it means to be human.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Details</h2>

                                    <p>
                                        "Blade Runner 2049" was written by Hampton Fancher, co-writer of the original film, and Michael Green. Ridley Scott, who directed the 1982 classic, serves as an executive producer. The film also stars Sylvia Hoeks, Mackenzie Davis, Carla Juri, Lennie James, Dave Bautista, and Edward James Olmos, reprising his role as Gaff from the original.
                                    </p>

                                    <p>
                                        The film's budget is reported to be around $185 million, significantly higher than the original's $28 million. This investment is evident in the trailer's impressive visual effects and set designs, which expand upon the iconic look of the original while introducing new elements.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Musical Legacy</h2>

                                    <p>
                                        Hans Zimmer and Benjamin Wallfisch have composed the score for "Blade Runner 2049," taking over from Jóhann Jóhannsson, who was originally attached to the project. The trailer features music that echoes Vangelis's iconic synthesizer score from the original film while adding new elements that reflect the passage of time.
                                    </p>

                                    <p>
                                        "The sound of the original 'Blade Runner' is so iconic that we wanted to honor it while creating something new," Zimmer has explained. "It's about finding the balance between nostalgia and innovation."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Release and Expectations</h2>

                                    <p>
                                        "Blade Runner 2049" is scheduled for release on October 6, 2017, in 2D, 3D, and IMAX formats. Early reactions from critics who have seen footage from the film have been overwhelmingly positive, with many praising Villeneuve's direction and Deakins's cinematography.
                                    </p>

                                    <p>
                                        With its talented cast, visionary director, and the legacy of one of science fiction's most influential films, "Blade Runner 2049" is poised to be one of the most significant releases of the year. As Officer K says in the trailer, "I've never seen a miracle." For fans of the original, this long-awaited sequel might just qualify.
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
                                        <button className="text-red-500">
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
                                        title: "Original Blade Runner (1982) - Retrospective",
                                        image: "/desert-rescue.png",
                                        views: "2.1M views",
                                        time: "18:32",
                                    },
                                    {
                                        title: "Denis Villeneuve's Filmmaking Style",
                                        image: "/women-in-shadows.png",
                                        views: "1.6M views",
                                        time: "12:45",
                                    },
                                    {
                                        title: "The Philosophy of Blade Runner",
                                        image: "/facing-adversaries.png",
                                        views: "3.2M views",
                                        time: "22:19",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={42}
                                comments={[
                                    {
                                        author: "Rick Deckard",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "2 days ago",
                                        content: "I've been waiting 35 years for this sequel. The visuals look incredible, and I'm glad Harrison Ford is back!",
                                        likes: 318,
                                        replies: 15,
                                    },
                                    {
                                        author: "Rachael",
                                        avatar: "/commenter-marie.jpg",
                                        time: "3 days ago",
                                        content: "Denis Villeneuve is the perfect director for this. If anyone can do justice to the original, it's him.",
                                        likes: 254,
                                        replies: 8,
                                    },
                                    {
                                        author: "Gaff",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "1 week ago",
                                        content: "I wonder if this film will finally answer whether Deckard is a replicant or not. The trailer seems to be hinting at it.",
                                        likes: 192,
                                        replies: 27,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Blade Runner 2049: Official Trailer",
                                        image: "/movie-unsplash-2.jpg",
                                        views: "18.3M views",
                                        time: "2:32",
                                    },
                                    {
                                        title: "Ryan Gosling Interview on Blade Runner",
                                        image: "/women-in-shadows.png",
                                        views: "4.1M views",
                                        time: "7:15",
                                    },
                                    {
                                        title: "The Visual Effects of Blade Runner 2049",
                                        image: "/desert-rescue.png",
                                        views: "2.5M views",
                                        time: "15:42",
                                    },
                                    {
                                        title: "Evolution of Cyberpunk in Cinema",
                                        image: "/facing-adversaries.png",
                                        views: "1.8M views",
                                        time: "20:08",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Blade Runner
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Sci-Fi
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Ryan Gosling
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Harrison Ford
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Denis Villeneuve
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Cyberpunk
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Dystopian
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Replicants
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest movie reviews and trailers.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
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