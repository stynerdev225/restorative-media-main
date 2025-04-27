import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GameOfThronesS8Page() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="game-of-thrones-s8"
                            thumbnailUrl="/mountain-vista.png"
                            title="Game of Thrones Season 8: Everything We Know So Far"
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
                                        <h3 className="font-bold">Sophia Martinez</h3>
                                        <p className="text-sm text-gray-500">Senior TV Critic</p>
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
                                        Game of Thrones Season 8: Everything We Know So Far
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 4, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        As HBO's epic fantasy series approaches its final season, speculation runs wild about how the
                                        struggle for the Iron Throne will conclude.
                                    </p>

                                    <p>
                                        With the penultimate season of "Game of Thrones" having just concluded, fans are already looking
                                        ahead to the show's final season. Though we'll likely have to wait until 2019 for Season 8, bits of
                                        information have already begun to emerge about what will be the grand finale of HBO's landmark
                                        fantasy series.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Production Timeline</h2>

                                    <p>
                                        According to multiple sources, production on Season 8 is scheduled to begin in October 2017.
                                        However, despite having only six episodes (compared to Season 7's seven and previous seasons' ten),
                                        filming is expected to run until summer 2018—suggesting that these final episodes will be massive in
                                        scale and complexity.
                                    </p>

                                    <p>
                                        HBO programming president Casey Bloys has indicated that the extended production schedule could push
                                        the premiere date to 2019, meaning fans might have to endure a longer-than-usual wait between
                                        seasons. "Our production team is figuring out the scheduling logistics," Bloys explained. "These
                                        final episodes are going to be monumental in every sense, and that requires time."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/mountain-vista.png')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Episode Count and Directors</h2>

                                    <p>
                                        While Season 8 will contain only six episodes, showrunners David Benioff and D.B. Weiss have
                                        suggested that several may run longer than the usual hour. "Each one will feel like a movie," Weiss
                                        said in a recent interview. "The scale is just enormous."
                                    </p>

                                    <p>
                                        In terms of who will be directing these final chapters, HBO has not made any official announcements.
                                        However, industry insiders expect a return of the show's most accomplished directors. Miguel
                                        Sapochnik, who helmed the acclaimed episodes "Hardhome," "Battle of the Bastards," and "The Winds of
                                        Winter," is rumored to be returning. David Nutter, responsible for the infamous "Red Wedding" episode
                                        ("The Rains of Castamere"), is also expected to direct multiple episodes.
                                    </p>

                                    <p>
                                        Benioff and Weiss themselves, who have only directed two episodes throughout the series thus far, are
                                        widely expected to direct the series finale.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-purple-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">KEY</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/mountain-vista.png')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Major Storylines Heading Into Season 8
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">The Great War:</span>
                                                <span>The Army of the Dead has breached the Wall and is marching south</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Jon & Daenerys:</span>
                                                <span>The two have formed an alliance (and more) while unaware of Jon's true parentage</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Cersei's Betrayal:</span>
                                                <span>The Lannister queen has no intention of sending forces north to fight the dead</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">Jaime's Redemption:</span>
                                                <span>Having abandoned Cersei, Jaime is heading north to honor his pledge</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-purple-500 font-bold mr-2">The Golden Company:</span>
                                                <span>Cersei has sent Euron to fetch mercenaries from Essos to strengthen her position</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Plot Theories and Speculation</h2>

                                    <p>
                                        With the Night King and his army having broken through the Wall in the Season 7 finale, the most
                                        immediate concern for our characters will be the battle against the dead. Winterfell is likely to be
                                        the first major stronghold in their path, setting up what could be the largest battle sequence ever
                                        filmed for television.
                                    </p>

                                    <p>
                                        The revelation of Jon Snow's true parentage—that he is the legitimate son of Rhaegar Targaryen and
                                        Lyanna Stark, making him the rightful heir to the Iron Throne—will also play a crucial role. This
                                        complicates his budding romance with Daenerys Targaryen, who is technically his aunt. How this
                                        revelation will affect their relationship and their respective claims to the throne remains one of the
                                        show's biggest questions.
                                    </p>

                                    <p>
                                        Another major storyline will involve Cersei Lannister, who ended Season 7 by revealing to Jaime that
                                        she had no intention of sending her armies north to fight the dead, despite her promise to do so.
                                        Instead, she plans to use the Golden Company, a renowned mercenary group from Essos, to strengthen
                                        her position while her enemies are distracted by the White Walkers. This betrayal led to Jaime
                                        finally abandoning his sister/lover, potentially setting up a confrontation between the twins.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Cast Insights</h2>

                                    <p>
                                        The cast has been predictably tight-lipped about Season 8's specifics, but a few intriguing comments
                                        have slipped out. Kit Harington (Jon Snow) has described the final season as "heartbreaking" and
                                        suggested that not everyone will be satisfied with how things end. "The thing is, with so many
                                        characters and storylines converging, not everyone is going to get the ending they wanted," he noted.
                                    </p>

                                    <p>
                                        Emilia Clarke (Daenerys Targaryen) has hinted at a challenging arc for her character, saying,
                                        "Daenerys's journey takes some unexpected turns in Season 8. As an actor, it pushed me to places I
                                        hadn't been before with this character."
                                    </p>

                                    <p>
                                        Peter Dinklage (Tyrion Lannister) was more cryptic, simply stating that Tyrion's final chapter is
                                        "beautiful" and "perfect." Meanwhile, Nikolaj Coster-Waldau (Jaime Lannister) has suggested that his
                                        character's redemption arc will come to a "satisfying conclusion," whatever that might mean for the
                                        Kingslayer.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Security Measures</h2>

                                    <p>
                                        HBO has taken unprecedented measures to prevent leaks of Season 8 content. According to Nikolaj
                                        Coster-Waldau, actors now receive their scripts digitally, which disappear after filming the scenes.
                                        Additionally, multiple endings may be filmed to throw off potential leakers and set spies.
                                    </p>

                                    <p>
                                        This extreme secrecy reflects the cultural phenomenon that "Game of Thrones" has become. As the most
                                        pirated show in television history and a consistent target for hackers and leakers, HBO is determined
                                        to protect the conclusion of its flagship series.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The End of an Era</h2>

                                    <p>
                                        When "Game of Thrones" concludes in 2019, it will mark the end of one of television's most ambitious
                                        and successful projects. From its debut in 2011, the adaptation of George R.R. Martin's "A Song of
                                        Ice and Fire" novels has redefined what's possible in television storytelling, both in terms of
                                        narrative complexity and production scale.
                                    </p>

                                    <p>
                                        However, fans needn't despair completely. HBO has multiple prequel series in development, with one
                                        created by Jane Goldman and George R.R. Martin already moving toward production. Set thousands of
                                        years before the events of "Game of Thrones," this prequel will explore "the world's descent from the
                                        golden Age of Heroes into its darkest hour," potentially including the Long Night and the origin of
                                        the White Walkers.
                                    </p>

                                    <p>
                                        But for now, all eyes are on Season 8 and the climactic battle for the fate of Westeros. As Jon Snow
                                        said, "The Great War is here." Soon we'll discover who, if anyone, will sit on the Iron Throne when
                                        the dust settles.
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
                                        title: "Game of Thrones Season 7 Recap",
                                        image: "/castle-contemplation.png",
                                        views: "8.4M views",
                                        time: "12:35",
                                    },
                                    {
                                        title: "The History of the Targaryen Dynasty",
                                        image: "/dragon-flight.png",
                                        views: "4.2M views",
                                        time: "18:22",
                                    },
                                    {
                                        title: "Jon Snow: From Bastard to King",
                                        image: "/facing-adversaries.png",
                                        views: "6.7M views",
                                        time: "15:48",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={86}
                                comments={[
                                    {
                                        author: "Tyrion Lannister",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "I drink and I know things, and I know this final season is going to be epic. Can't wait to see how they wrap up all these storylines!",
                                        likes: 1247,
                                        replies: 43,
                                    },
                                    {
                                        author: "Daenerys Stormborn",
                                        avatar: "/commenter-marie.jpg",
                                        time: "3 days ago",
                                        content: "As the rightful heir to the Iron Throne, I demand this season premiere immediately! Winter has been coming for 7 seasons now, it's about time it arrived.",
                                        likes: 876,
                                        replies: 29,
                                    },
                                    {
                                        author: "Night King",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "2 weeks ago",
                                        content: "❄️👑",
                                        likes: 2031,
                                        replies: 98,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Game of Thrones: Season 8 Teaser",
                                        image: "/mountain-vista.png",
                                        views: "14.9M views",
                                        time: "1:37",
                                    },
                                    {
                                        title: "All Dragon Scenes Compilation",
                                        image: "/dragon-flight.png",
                                        views: "7.3M views",
                                        time: "25:44",
                                    },
                                    {
                                        title: "The Night King's Plan Explained",
                                        image: "/winter-landscape.png",
                                        views: "3.5M views",
                                        time: "11:29",
                                    },
                                    {
                                        title: "Cersei Lannister: Character Analysis",
                                        image: "/palace-gardens.png",
                                        views: "2.8M views",
                                        time: "14:17",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Game of Thrones
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        HBO
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        White Walkers
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Jon Snow
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Daenerys Targaryen
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Night King
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Iron Throne
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Westeros
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
    );
}