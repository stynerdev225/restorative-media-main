import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ITMovieReviewPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="it-movie-review"
                            thumbnailUrl="/movie-unsplash-6.jpg"
                            title="IT Movie Review: A Terrifying Adaptation of Stephen King's Novel"
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
                                        <h3 className="font-bold">Michael Chen</h3>
                                        <p className="text-sm text-gray-500">Horror Film Critic</p>
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
                                        IT Movie Review: A Terrifying Adaptation of Stephen King's Novel
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 3, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Director Andy Muschietti delivers a chilling new adaptation of Stephen King's iconic novel, proving that Pennywise the Dancing Clown still has the power to terrify audiences.
                                    </p>

                                    <p>
                                        Stephen King's "IT" has long been considered one of the author's most terrifying works, and the new film adaptation demonstrates why the story continues to resonate with audiences nearly three decades after the publication of the novel. Set for release on September 8, 2017, this R-rated horror film successfully balances nostalgic coming-of-age elements with genuine scares.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A New Vision of Derry</h2>

                                    <p>
                                        The film transports the story's setting from the 1950s to the late 1980s, focusing on the childhood portion of King's sprawling novel. The fictional town of Derry, Maine is brought to life with meticulous attention to period detail, creating an atmosphere that feels both nostalgic and unsettling.
                                    </p>

                                    <p>
                                        "We wanted Derry to feel like a character in the film," director Andy Muschietti explained in a recent interview. "There's something not quite right about this town, and we tried to convey that sense of wrongness in subtle ways throughout the film."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-6.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Losers' Club</h2>

                                    <p>
                                        At the heart of "IT" is the Losers' Club, a group of seven outcast children who band together to confront the evil that's haunting their town. The young cast delivers performances that are remarkably authentic and emotionally nuanced, particularly Jaeden Lieberher as Bill Denbrough, the group's stuttering leader, and Sophia Lillis as Beverly Marsh, the sole girl in the group.
                                    </p>

                                    <p>
                                        The chemistry between the young actors creates a believable friendship that forms the emotional core of the film. Their interactions capture the particular mixture of innocence and profanity that characterizes childhood friendships, making their terror all the more impactful when they encounter Pennywise.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">CAST</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-6.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            The Losers' Club
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Jaeden Lieberher:</span>
                                                <span>Bill Denbrough, the leader still grieving for his brother Georgie</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Sophia Lillis:</span>
                                                <span>Beverly Marsh, dealing with abuse at home and bullying at school</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Finn Wolfhard:</span>
                                                <span>Richie Tozier, the group's foul-mouthed comedian</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Jack Dylan Grazer:</span>
                                                <span>Eddie Kaspbrak, a hypochondriac with an overprotective mother</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Bill Skarsgård:</span>
                                                <span>Pennywise the Dancing Clown, the film's terrifying antagonist</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A New Pennywise</h2>

                                    <p>
                                        Bill Skarsgård had the unenviable task of stepping into the clown shoes made famous by Tim Curry in the 1990 miniseries adaptation. Rather than attempting to recreate Curry's performance, Skarsgård delivers a wholly original take on the character that is deeply unsettling in its own right.
                                    </p>

                                    <p>
                                        "I wanted to create something that would be truly disturbing," Skarsgård has said of his approach to the role. "There's something inherently wrong with my Pennywise. He's not even trying to hide the fact that he's a monster pretending to be a clown."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Horror Elements</h2>

                                    <p>
                                        What makes "IT" stand out in the crowded horror landscape is its ability to create genuine terror without relying solely on jump scares. Muschietti employs a variety of techniques to build dread, from the sound design (which features subtle, uncomfortable audio cues) to the way Pennywise is often introduced subtly in the background of scenes.
                                    </p>

                                    <p>
                                        The film doesn't shy away from graphic content when necessary, but its most effective moments are often the quietest ones, where the threat of violence creates more tension than the violence itself. A scene involving a slideshow projector stands out as one of the most inventive and terrifying sequences in recent horror cinema.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Coming of Age in the Shadow of Fear</h2>

                                    <p>
                                        Beyond its effectiveness as a horror film, "IT" succeeds as a poignant coming-of-age story. Each member of the Losers' Club faces personal demons that are just as threatening as Pennywise, from parental abuse to grief over lost siblings to the universal anxieties of adolescence.
                                    </p>

                                    <p>
                                        The film draws clear parallels between the supernatural horrors of Pennywise and the very real horrors of growing up in a world that can be cruel and indifferent. By confronting Pennywise, the children are also confronting the fears that define their young lives.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Adaptation Choices</h2>

                                    <p>
                                        As with any adaptation of a 1,100-page novel, certain elements have been altered or omitted. The film wisely focuses solely on the childhood portion of the story, leaving the adult timeline for the planned sequel. Some of the novel's more controversial elements have been removed or toned down, and certain character backstories have been streamlined.
                                    </p>

                                    <p>
                                        Despite these changes, the adaptation remains remarkably faithful to the spirit of King's novel, capturing both its visceral horror and its emotional depth. King himself has expressed approval of the film, saying it exceeded his expectations.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Technical Achievements</h2>

                                    <p>
                                        From a technical standpoint, "IT" is impressively crafted. Cinematographer Chung-hoon Chung, known for his work with director Park Chan-wook, brings a visual richness to the film that elevates it above standard horror fare. The period details feel authentic without becoming distracting, and the special effects blend seamlessly with practical makeup and prosthetics.
                                    </p>

                                    <p>
                                        Composer Benjamin Wallfisch's score enhances the film's atmosphere, incorporating childlike musical motifs that become increasingly distorted as the danger intensifies. The sound design is particularly noteworthy, with Pennywise's voice modulations creating a sense of otherworldly menace.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Box Office Expectations</h2>

                                    <p>
                                        Industry analysts predict a strong opening weekend for "IT," with projections suggesting it could break September box office records. Early screenings have generated significant buzz, particularly for Skarsgård's performance and the film's effective scare sequences.
                                    </p>

                                    <p>
                                        Warner Bros. has already begun development on a sequel that will focus on the adult portion of the story, with the Losers' Club returning to Derry 27 years later to confront Pennywise once again. The success of this first chapter seems likely to ensure that the second part will receive a similarly lavish production.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Final Verdict</h2>

                                    <p>
                                        "IT" stands as one of the most successful Stephen King adaptations to date, capturing the author's ability to blend supernatural horror with deeply human stories. It's a rare horror film that works equally well as a character study and as a vehicle for scares.
                                    </p>

                                    <p>
                                        For horror fans, "IT" offers plenty of frights and disturbing imagery. For those who appreciated King's novel, it provides a thoughtful adaptation that understands what made the source material so affecting. And for general audiences, it delivers a compelling story about childhood, friendship, and overcoming fear that happens to be wrapped in the trappings of a horror film.
                                    </p>

                                    <p>
                                        In a cinema landscape dominated by franchises and shared universes, "IT" proves that a well-executed adaptation of a beloved novel can still captivate audiences. You'll float too.
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
                                        title: "Stephen King's IT: Book vs. Miniseries vs. Movie",
                                        image: "/desert-rescue.png",
                                        views: "1.8M views",
                                        time: "14:22",
                                    },
                                    {
                                        title: "The History of Pennywise Explained",
                                        image: "/women-in-shadows.png",
                                        views: "3.2M views",
                                        time: "11:45",
                                    },
                                    {
                                        title: "Horror Movie Practical Effects: Behind the Scenes",
                                        image: "/facing-adversaries.png",
                                        views: "922K views",
                                        time: "8:34",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={51}
                                comments={[
                                    {
                                        author: "HorrorFanatic",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "I was skeptical about another adaptation after the miniseries, but this looks genuinely terrifying. Skarsgård seems perfect as Pennywise!",
                                        likes: 284,
                                        replies: 14,
                                    },
                                    {
                                        author: "BookWorm1990",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "As a huge fan of the novel, I'm excited they're splitting it into two parts to do justice to the story. The childhood section is my favorite part anyway.",
                                        likes: 197,
                                        replies: 8,
                                    },
                                    {
                                        author: "CinematicVisions",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "The trailer alone gave me nightmares. I can't wait to see how they handle the Neibolt house scenes. Those were the scariest parts of the book for me.",
                                        likes: 145,
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
                                        title: "IT (2017) - Official Trailer",
                                        image: "/movie-unsplash-6.jpg",
                                        views: "45.2M views",
                                        time: "2:32",
                                    },
                                    {
                                        title: "Bill Skarsgård's Pennywise Transformation",
                                        image: "/women-in-shadows.png",
                                        views: "8.7M views",
                                        time: "9:15",
                                    },
                                    {
                                        title: "Top 10 Stephen King Adaptations",
                                        image: "/desert-rescue.png",
                                        views: "3.1M views",
                                        time: "12:42",
                                    },
                                    {
                                        title: "The Psychology of Fear in Horror Movies",
                                        image: "/facing-adversaries.png",
                                        views: "1.4M views",
                                        time: "15:08",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Stephen King
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Horror
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Pennywise
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Bill Skarsgård
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Andy Muschietti
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Movie Reviews
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Adaptations
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Derry
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest movie reviews and horror film updates.</p>
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