import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlackMirrorSeason4Page() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="black-mirror-season-4-titles"
                            thumbnailUrl="/movie-unsplash-6.jpg"
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
                                        <Image src="/commenter-gordon.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Alex Morgan</h3>
                                        <p className="text-sm text-gray-500">Sci-Fi & Technology Correspondent</p>
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
                                    <div className="text-sm text-gray-500 mb-4">AUGUST 25, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Netflix announces the complete lineup of episodes for Charlie Brooker's acclaimed anthology series, with directors including Jodie Foster and titles hinting at dystopian themes.
                                    </p>

                                    <p>
                                        Netflix has officially revealed the complete list of episode titles for the highly anticipated fourth season of "Black Mirror," along with the directors attached to each installment. The announcement came during the streaming service's presentation at the Edinburgh International TV Festival, where creator Charlie Brooker shared new details about the upcoming season.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Complete Lineup</h2>

                                    <p>
                                        Season 4 will consist of six episodes, maintaining the same format as the third season (the first produced for Netflix after the show moved from Britain's Channel 4). While specific plot details remain under wraps, the episode titles and directors offer intriguing hints about what viewers can expect from the new installments of the dystopian anthology series.
                                    </p>

                                    <p>
                                        "Each episode has a different flavor, a different tone, a different type of story," Brooker explained during the panel. "We've deliberately varied the tone more than we ever have before."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-6.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">High-Profile Directors</h2>

                                    <p>
                                        Perhaps most notably, the lineup includes an episode directed by Oscar-winning actress Jodie Foster, marking her first foray into the "Black Mirror" universe. Other acclaimed directors include John Hillcoat ("The Road," "Lawless"), Toby Haynes (who has previously directed episodes of "Doctor Who" and "Sherlock"), and Tim Van Patten (known for his work on "Game of Thrones" and "Boardwalk Empire").
                                    </p>

                                    <p>
                                        "We've been incredibly fortunate to attract directors of this caliber," said executive producer Annabel Jones. "Each brings their own unique vision to the material, which is exactly what you want in an anthology series. The variety of perspectives enhances the storytelling."
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-purple-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">EPISODES</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-6.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Black Mirror Season 4: Episode Breakdown
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"Arkangel":</span>
                                                <span>Directed by Jodie Foster. Rumored to explore themes of parental control and surveillance.</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"USS Callister":</span>
                                                <span>Directed by Toby Haynes. The space-themed title and promotional images suggest a Star Trek-inspired setting.</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"Crocodile":</span>
                                                <span>Directed by John Hillcoat. Details are scarce, but Hillcoat's involvement suggests a potentially darker, more intense story.</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"Hang the DJ":</span>
                                                <span>Directed by Tim Van Patten. The title references a line from The Smiths' song "Panic."</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"Metalhead":</span>
                                                <span>Directed by David Slade (known for "Hard Candy" and "30 Days of Night"). Reported to be filmed entirely in black and white.</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">"Black Museum":</span>
                                                <span>Directed by Colm McCarthy. The title suggests a possible anthology-within-an-anthology format, similar to season 3's "White Christmas."</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Cryptic Teases</h2>

                                    <p>
                                        While Brooker was careful not to reveal too much about the specific plots, he did offer some tantalizing hints. "USS Callister," which appears to have a space setting, was described as "a departure in tone" for the series, while "Metalhead" was confirmed to be filmed entirely in black and white, a first for "Black Mirror."
                                    </p>

                                    <p>
                                        "One thing I can tell you is that 'Metalhead' is the most paired-down, brutal survival story we've done," Brooker revealed. "It's relentless and visually distinctive. When David Slade pitched shooting it in black and white, we immediately knew that was the right approach."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Jodie Foster's Involvement</h2>

                                    <p>
                                        Foster's episode, titled "Arkangel," reportedly centers on a mother and daughter relationship, though specific plot details remain under wraps. This marks a significant coup for the series, attracting a two-time Oscar winner to the director's chair.
                                    </p>

                                    <p>
                                        "Jodie brings incredible sensitivity to the material," Jones stated. "Her episode explores parental anxiety and the lengths we might go to protect our children. Having someone of her caliber interpret the script has elevated it in ways we couldn't have imagined."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">New Technological Nightmares</h2>

                                    <p>
                                        As with previous seasons, each episode will explore the unanticipated consequences of emerging technologies. However, Brooker emphasized that the focus remains squarely on the human element.
                                    </p>

                                    <p>
                                        "Technology is never the villain in 'Black Mirror,'" Brooker explained. "It's about how we use it, misuse it, or allow it to change us. Sometimes the technology is almost benign, but human nature warps its application. That's where the horror often lies."
                                    </p>

                                    <p>
                                        Executive producer Annabel Jones added: "We're not making a show about technology; we're making a show about contemporary anxieties. Technology just happens to be the thing that's currently triggering many of those anxieties."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Scale</h2>

                                    <p>
                                        According to Brooker, season 4 represents the most ambitious production yet for the series. "We've gone bigger in some episodes, more intimate in others," he noted. "We've shot in locations all over the world, worked with a broader range of visual styles. The one consistency is that each episode will hopefully leave you feeling slightly disturbed."
                                    </p>

                                    <p>
                                        This variety extends to the genres explored in the new season. While "Black Mirror" has always blended elements of science fiction, psychological horror, and dark satire, Brooker hinted that season 4 takes even more creative risks with format.
                                    </p>

                                    <p>
                                        "We've got one episode that has almost the scope of a feature film, and another that's more like a chamber piece," he revealed. "There's a police procedural element to one story, while another has aspects of a rom-com, though obviously filtered through the 'Black Mirror' lens, so don't expect a conventional happy ending."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Notable Cast Members</h2>

                                    <p>
                                        While the complete cast list hasn't been revealed, several performers have been confirmed across the six episodes. Jesse Plemons ("Breaking Bad," "Fargo") and Cristin Milioti ("How I Met Your Mother," "The Wolf of Wall Street") will appear in "USS Callister," while Andrea Riseborough ("Birdman," "Battle of the Sexes") and Kiran Sonia Sawar ("Murdered By My Father") have roles in "Crocodile."
                                    </p>

                                    <p>
                                        "The cast we've assembled is just phenomenal," Jones said. "Because we're an anthology, we can attract actors who might not want to commit to multiple seasons of a show but are drawn to the unique, self-contained stories we tell."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Release Date Speculation</h2>

                                    <p>
                                        While Netflix hasn't announced an official premiere date, Brooker confirmed that all episodes have finished production. Industry insiders suggest the new season will likely debut in late 2017 or early 2018, potentially around the holiday season, similar to when the 2016 Christmas special "White Christmas" aired.
                                    </p>

                                    <p>
                                        "We're in post-production now, putting the finishing touches on all six episodes," Brooker said. "It's always a meticulous process because the technological elements need to be just right—believable but slightly ahead of where we are now."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Continuing the Shared Universe</h2>

                                    <p>
                                        Fans of the series have noticed subtle connections between episodes across previous seasons, suggesting all stories might exist within a shared universe. When asked about this during the panel, Brooker played coy but did confirm that season 4 will contain "Easter eggs and references that attentive viewers will pick up on."
                                    </p>

                                    <p>
                                        "We don't want to be too heavy-handed with these connections," he explained. "They're there for people who enjoy spotting them, but each episode still works completely as a standalone story. You don't need to have seen any previous 'Black Mirror' to appreciate the new season."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Critical Anticipation</h2>

                                    <p>
                                        Since its move to Netflix for season 3, "Black Mirror" has expanded its global audience while maintaining the critical acclaim it garnered during its Channel 4 years. The series has been praised for its prescient examination of technology's impact on society, with some episodes seemingly predicting real-world developments.
                                    </p>

                                    <p>
                                        The anticipation for season 4 comes on the heels of an Emmy win for season 3's standout episode "San Junipero," which took home the award for Outstanding Television Movie and Outstanding Writing for a Limited Series, Movie, or Dramatic Special.
                                    </p>

                                    <p>
                                        "The success of 'San Junipero' was particularly gratifying," Brooker acknowledged, "especially since it represented a more optimistic story than we usually tell. It showed us that 'Black Mirror' can surprise viewers not just with tech concepts or twists, but with emotion as well."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

                                    <p>
                                        As for the future beyond season 4, Brooker remained non-committal but optimistic. "We're not running out of ideas. If anything, the challenge is selecting which ones to develop further," he noted. "The world keeps giving us material, unfortunately or fortunately, depending on how you look at it."
                                    </p>

                                    <p>
                                        When asked if there might be more interactive elements in future episodes—building on the choose-your-own-path mechanic explored in some Netflix kids' shows—Brooker smiled. "We're always thinking about new ways to unsettle people," he said. "Let's leave it at that for now."
                                    </p>

                                    <p>
                                        With six new stories on the horizon and a team of acclaimed directors at the helm, "Black Mirror" season 4 looks set to continue pushing boundaries and examining the darker reflections of our increasingly tech-saturated world.
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
                                        title: "Black Mirror Season 3: Top Episodes Ranked",
                                        image: "/desert-rescue.png",
                                        views: "4.7M views",
                                        time: "14:32",
                                    },
                                    {
                                        title: "The Technology of Black Mirror: How Close Are We?",
                                        image: "/women-in-shadows.png",
                                        views: "2.3M views",
                                        time: "18:15",
                                    },
                                    {
                                        title: "Charlie Brooker Interview: The Mind Behind Black Mirror",
                                        image: "/facing-adversaries.png",
                                        views: "1.9M views",
                                        time: "22:47",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={92}
                                comments={[
                                    {
                                        author: "TechDystopia",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "Jodie Foster directing is HUGE news! She's incredibly selective about her projects, so this speaks volumes about the quality of Black Mirror. I'm most intrigued by 'Metalhead' - the black and white approach sounds unlike anything they've done before.",
                                        likes: 427,
                                        replies: 31,
                                    },
                                    {
                                        author: "BingeWatcher",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "San Junipero was such a masterpiece - it showed that Black Mirror can do hopeful stories just as powerfully as dystopian ones. I'm curious if any of these new episodes will follow that more optimistic path or if we're going back to pure psychological horror.",
                                        likes: 356,
                                        replies: 24,
                                    },
                                    {
                                        author: "SciFiEnthusiast",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "The USS Callister episode sounds very intriguing with its Star Trek vibes. Black Mirror does its best work when it takes familiar formats and twists them into something disturbing. Can't wait to see what they do with this sci-fi setting.",
                                        likes: 298,
                                        replies: 19,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Black Mirror Season 4: Trailer Breakdown",
                                        image: "/movie-unsplash-6.jpg",
                                        views: "2.7M views",
                                        time: "12:35",
                                    },
                                    {
                                        title: "How Black Mirror Changed Television Forever",
                                        image: "/women-in-shadows.png",
                                        views: "3.4M views",
                                        time: "16:24",
                                    },
                                    {
                                        title: "Predicting the Future: Black Mirror's Most Accurate Episodes",
                                        image: "/desert-rescue.png",
                                        views: "1.8M views",
                                        time: "14:22",
                                    },
                                    {
                                        title: "From The Twilight Zone to Black Mirror: The Evolution of Anthology Series",
                                        image: "/facing-adversaries.png",
                                        views: "956K views",
                                        time: "24:18",
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
                                        Sci-Fi
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Jodie Foster
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Technology
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Dystopian
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Anthology Series
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest TV and streaming updates, reviews, and exclusive content.</p>
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