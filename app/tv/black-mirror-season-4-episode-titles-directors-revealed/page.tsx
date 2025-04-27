import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlackMirrorSeasonFourPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="black-mirror-season-4-reveal"
                            thumbnailUrl="/tv-unsplash-4.jpg"
                            title="Black Mirror Season 4: All Episode Titles and Directors Revealed"
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
                                        <h3 className="font-bold">Emma Chen</h3>
                                        <p className="text-sm text-gray-500">Technology & Culture Writer</p>
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
                                        Black Mirror Season 4: All Episode Titles and Directors Revealed
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 2, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Netflix's acclaimed anthology series reveals episode details for its upcoming fourth season, featuring an impressive lineup of directors and intriguing new concepts.
                                    </p>

                                    <p>
                                        Netflix has officially unveiled the complete episode lineup for the highly anticipated fourth season of "Black Mirror," Charlie Brooker's dark anthology series exploring technology's impact on society. The announcement, made during the Edinburgh International Television Festival, included all six episode titles along with their directors and brief teaser information.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Episode Lineup</h2>

                                    <p>
                                        The fourth season will consist of six episodes, continuing the format established when the series moved from Channel 4 to Netflix. While premiere dates haven't yet been announced, the new information provides significant insight into what viewers can expect from the upcoming season.
                                    </p>

                                    <p>
                                        "We're incredibly excited about this season's directors and stories," said creator Charlie Brooker during the panel. "We've pushed into some new territory while keeping the core of what makes 'Black Mirror' resonate with audiences."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/tv-unsplash-4.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Star-Studded Directors</h2>

                                    <p>
                                        Perhaps the most notable aspect of the announcement is the impressive roster of directors attached to the new season. Jodie Foster, the acclaimed actress and director known for her work on films like "Money Monster" and "The Beaver," will direct an episode titled "Arkangel," marking her first work for television in over 30 years.
                                    </p>

                                    <p>
                                        "Jodie brings a unique perspective to the series," Brooker explained. "Her episode explores parental anxieties in a technological age in a way that will resonate with many viewers."
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">SEASON 4</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/tv-unsplash-4.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Black Mirror Season 4 Episodes
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"Arkangel"</span>
                                                <span>Directed by Jodie Foster; described as exploring "the mother-daughter relationship" with a technological twist</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"USS Callister"</span>
                                                <span>Directed by Toby Haynes (Doctor Who); a space adventure with a Black Mirror spin</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"Crocodile"</span>
                                                <span>Directed by John Hillcoat (The Road); set in Iceland with themes of memory and recall</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"Hang the DJ"</span>
                                                <span>Directed by Tim Van Patten (Game of Thrones, The Sopranos); reported to involve a dating system</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"Metalhead"</span>
                                                <span>Directed by David Slade (American Gods); a black-and-white episode described as "the most violent" of the season</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">"Black Museum"</span>
                                                <span>Directed by Colm McCarthy (The Girl with All the Gifts); features three stories interwoven around a crime museum</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Details</h2>

                                    <p>
                                        Other notable directors in the lineup include John Hillcoat, known for films like "The Road" and "Lawless," who will direct an episode titled "Crocodile." David Slade, who has worked on "American Gods" and "Hannibal," is directing "Metalhead," which Brooker described as "the most violent episode of the season" and will be presented entirely in black and white.
                                    </p>

                                    <p>
                                        Tim Van Patten, whose extensive television credits include "Game of Thrones," "Boardwalk Empire," and "The Sopranos," will direct "Hang the DJ." Toby Haynes, known for his work on "Doctor Who," is handling "USS Callister," while Colm McCarthy, director of "The Girl with All the Gifts," is at the helm for "Black Museum."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Episode Themes and Settings</h2>

                                    <p>
                                        While specific plot details remain under wraps, the panel provided some tantalizing hints about each episode's themes and settings.
                                    </p>

                                    <p>
                                        "USS Callister" appears to be the most visually distinct episode, described as a space adventure with a "Black Mirror" twist. Promotional images show what looks like a Star Trek-inspired setting, suggesting a potential commentary on science fiction fandom or virtual reality.
                                    </p>

                                    <p>
                                        "Crocodile" was filmed in Iceland and reportedly deals with themes of memory and how we recall events. "Hang the DJ" is rumored to involve a dating system, potentially exploring themes similar to season three's popular "San Junipero" episode.
                                    </p>

                                    <p>
                                        "Black Museum" will feature three stories in one, interwoven around a crime museum that houses technological artifacts. Executive producer Annabel Jones described it as "a mini Black Mirror film festival" within a single episode.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Technological Focus</h2>

                                    <p>
                                        As with previous seasons, technology remains at the center of each story, though Brooker emphasized that the series is ultimately about people and their relationships with both technology and each other.
                                    </p>

                                    <p>
                                        "Technology is never the villain in 'Black Mirror,'" Brooker said during the panel. "It's about how people use, misuse, or abuse the tools we create. Sometimes the most nightmarish scenarios come from the most well-intentioned innovations."
                                    </p>

                                    <p>
                                        The new season is expected to continue exploring emergent technologies, with virtual reality, advanced surveillance, and artificial intelligence all likely to feature prominently. "Arkangel," in particular, appears to focus on parental monitoring technology, a theme previously touched on in earlier episodes like "The Entire History of You."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Cast Revelations</h2>

                                    <p>
                                        While the full cast for each episode hasn't been announced, several names have been confirmed. Rosemarie DeWitt, known for her roles in "La La Land" and "Mad Men," will appear in "Arkangel." Jesse Plemons ("Fargo," "Breaking Bad") and Cristin Milioti ("How I Met Your Mother") will star in "USS Callister."
                                    </p>

                                    <p>
                                        "We've been fortunate to attract incredible talent both in front of and behind the camera," said Jones. "The anthology format allows us to work with people who might not otherwise be available for a full TV series commitment."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Values</h2>

                                    <p>
                                        Netflix's investment in the series appears to have paid off in terms of production values, with the brief clips shown at Edinburgh suggesting a cinematic quality to the new episodes. "USS Callister" in particular looks to have required significant special effects work for its space setting.
                                    </p>

                                    <p>
                                        "The budgets allow us to realize the stories exactly as we envision them," Brooker explained. "Whether that's a space adventure or an intimate domestic drama with subtle technological elements, we're not constrained in the way we might have been previously."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Release Strategy</h2>

                                    <p>
                                        While no specific release date has been announced, Netflix is expected to debut the fourth season later this year, potentially in December to mirror the release strategy of season three. There's also speculation that the streaming service might experiment with a different release pattern than the all-at-once approach used for the previous season.
                                    </p>

                                    <p>
                                        "We're discussing various possibilities for how viewers will experience the new episodes," said Jones. "Each 'Black Mirror' story is designed to stand alone, which gives us flexibility in how we present them."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Future of Black Mirror</h2>

                                    <p>
                                        Beyond season four, the future of "Black Mirror" appears secure. Brooker confirmed that ideas are already being developed for potential fifth season episodes, though no formal announcement has been made.
                                    </p>

                                    <p>
                                        "Unfortunately, the world continues to give us plenty of material to work with," Brooker joked during the panel. "As long as technology continues to advance and human nature remains flawed, we'll have stories to tell."
                                    </p>

                                    <p>
                                        With its anthology format, cinematic production values, and unflinching examination of modern anxieties, "Black Mirror" has established itself as one of the most distinctive and thought-provoking series in the current television landscape. If the impressive director lineup and intriguing episode descriptions are any indication, the fourth season appears poised to continue that tradition.
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
                                        title: "Black Mirror: From Channel 4 to Global Success",
                                        image: "/desert-rescue.png",
                                        views: "4.1M views",
                                        time: "18:54",
                                    },
                                    {
                                        title: "The Philosophy of Black Mirror: Technology and Humanity",
                                        image: "/women-in-shadows.png",
                                        views: "2.8M views",
                                        time: "22:17",
                                    },
                                    {
                                        title: "San Junipero: Breaking Down Black Mirror's Emmy Win",
                                        image: "/facing-adversaries.png",
                                        views: "3.5M views",
                                        time: "15:39",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={64}
                                comments={[
                                    {
                                        author: "TechFuturist",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "The director lineup is incredible! Jodie Foster directing television is a huge coup. USS Callister looks like it's going to be this season's San Junipero - a complete visual departure from what we've seen before.",
                                        likes: 287,
                                        replies: 14,
                                    },
                                    {
                                        author: "NosediveRating",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "A black and white episode directed by David Slade? Count me in. His work on Hannibal was visually stunning, can't wait to see what he does in the Black Mirror universe.",
                                        likes: 203,
                                        replies: 7,
                                    },
                                    {
                                        author: "WhiteBearWatcher",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "I'm most intrigued by Black Museum. The idea of interconnected stories within a single episode sounds like Brooker pushing the format in new directions. Also love that they're filming internationally now.",
                                        likes: 178,
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
                                        title: "Black Mirror Season 4: Official Announcement",
                                        image: "/tv-unsplash-4.jpg",
                                        views: "5.7M views",
                                        time: "3:24",
                                    },
                                    {
                                        title: "Interview: Charlie Brooker on Technology Fears",
                                        image: "/women-in-shadows.png",
                                        views: "2.9M views",
                                        time: "12:48",
                                    },
                                    {
                                        title: "Evolution of Anthology Series in Television",
                                        image: "/desert-rescue.png",
                                        views: "1.6M views",
                                        time: "16:21",
                                    },
                                    {
                                        title: "Netflix's Most Anticipated Shows of 2017",
                                        image: "/facing-adversaries.png",
                                        views: "3.2M views",
                                        time: "10:37",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Black Mirror
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Netflix
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Charlie Brooker
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Jodie Foster
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Anthology Series
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Technology
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Science Fiction
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Dystopian
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest TV show updates and analysis.</p>
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