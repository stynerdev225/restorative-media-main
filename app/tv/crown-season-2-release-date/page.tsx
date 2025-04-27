import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CrownSeasonTwoPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="crown-season-2-trailer"
                            thumbnailUrl="/movie-unsplash-4.jpg"
                            title="The Crown Season 2 Gets Release Date and First Trailer"
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
                                        <h3 className="font-bold">Emily Richards</h3>
                                        <p className="text-sm text-gray-500">TV Drama Correspondent</p>
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
                                        The Crown Season 2 Gets Release Date and First Trailer
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 2, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Netflix's lavish royal drama returns on December 8th, with Claire Foy and Matt Smith reprising their roles as Queen Elizabeth II and Prince Philip for the final time.
                                    </p>

                                    <p>
                                        Netflix has officially announced that the highly anticipated second season of "The Crown" will premiere on December 8, 2017. The streaming service also released the first trailer for the new season, offering viewers a glimpse into the continuing saga of Queen Elizabeth II's reign during a turbulent period in British history.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A New Era for the Monarchy</h2>

                                    <p>
                                        The sophomore season of Peter Morgan's acclaimed drama will cover approximately a decade of Elizabeth's reign, from the Suez Crisis in 1956 through the scandal of the Profumo Affair in 1963. This period marks a time of significant transition for both the British monarchy and society at large, as post-war Britain gives way to the swinging sixties.
                                    </p>

                                    <p>
                                        "Season two sees the end of the age of deference, and the beginning of the revolutionary era of the 1960s," Morgan explained in a recent interview. "The royal family has to adapt to a new world where people are beginning to question the very idea of monarchy."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-4.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Royal Marriage Under Strain</h2>

                                    <p>
                                        The trailer suggests that Elizabeth and Philip's marriage will face significant challenges in the new season. As Philip embarks on a five-month royal tour that takes him around the world, rumors of infidelity begin to circulate, putting additional pressure on their already complicated relationship.
                                    </p>

                                    <p>
                                        "This is a marriage under extreme pressure," said Foy, who returns for her final season as the Queen before the role is recast for seasons three and four. "Philip and Elizabeth are both struggling with their roles and their identities, and that inevitably affects their personal relationship."
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-blue-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">CAST</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-4.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Key Cast Members for Season 2
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-blue-500 font-bold mr-2">Claire Foy:</span>
                                                <span>Queen Elizabeth II, in her final season before the role is recast</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-blue-500 font-bold mr-2">Matt Smith:</span>
                                                <span>Prince Philip, Duke of Edinburgh, also in his final season</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-blue-500 font-bold mr-2">Vanessa Kirby:</span>
                                                <span>Princess Margaret, whose love life takes center stage</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-blue-500 font-bold mr-2">Matthew Goode:</span>
                                                <span>Antony Armstrong-Jones (Lord Snowdon), Margaret's new romantic interest</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-blue-500 font-bold mr-2">Michael C. Hall:</span>
                                                <span>President John F. Kennedy, who visits Buckingham Palace with Jackie Kennedy</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">New Historical Figures</h2>

                                    <p>
                                        Season 2 will introduce several significant historical figures, including President John F. Kennedy and First Lady Jackie Kennedy, played by Michael C. Hall and Jodi Balfour respectively. Their visit to Buckingham Palace in 1961 is expected to be a key moment in the season.
                                    </p>

                                    <p>
                                        Matthew Goode also joins the cast as Antony Armstrong-Jones (later Lord Snowdon), the photographer who becomes romantically involved with Princess Margaret (Vanessa Kirby). "Their relationship represents a huge shift for the royal family," Kirby noted. "Tony wasn't aristocracy — he was bohemian, artistic, and represented a completely different world."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Political Turmoil</h2>

                                    <p>
                                        The Suez Crisis serves as a backdrop for the early episodes of the new season, with Prime Minister Anthony Eden (Jeremy Northam) leading Britain into what many historians consider one of the country's greatest foreign policy failures. The crisis not only damaged Britain's international standing but also had profound effects on Eden's health and career.
                                    </p>

                                    <p>
                                        "We see how these major political events affect the Queen personally and professionally," explained executive producer Suzanne Mackie. "She's constantly having to navigate these incredibly complex situations while maintaining the dignity and neutrality of the monarchy."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Behind the Scenes</h2>

                                    <p>
                                        The production values for season two remain extraordinarily high, with the budget reportedly exceeding $130 million for the ten episodes. Filming took place across the UK and in locations standing in for international settings, including South Africa for the sequences set during Philip's royal tour.
                                    </p>

                                    <p>
                                        "The ambition of the show has grown for season two," said director Philip Martin. "We're covering more years and more locations, but we still maintain that intimate focus on the human beings at the center of these huge historical events."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Critical Anticipation</h2>

                                    <p>
                                        The first season of "The Crown" was met with widespread critical acclaim, winning multiple awards including Golden Globes for Best Television Series – Drama and Best Actress in a Television Series – Drama for Claire Foy. It was also nominated for 13 Emmy Awards, with John Lithgow winning Outstanding Supporting Actor for his portrayal of Winston Churchill.
                                    </p>

                                    <p>
                                        Critics who have seen early footage of season two suggest that the sophomore outing may be even stronger than the first. "What we're seeing is a deeper exploration of these characters now that the groundwork has been laid," said one industry insider. "The emotional stakes feel higher, and the performances, particularly from Foy and Smith, are even more nuanced."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Future of The Crown</h2>

                                    <p>
                                        As previously announced, season two will be the final outing for Claire Foy and Matt Smith in their respective roles. For the planned third and fourth seasons, which will move the story forward into the 1970s and 80s, Olivia Colman has been confirmed to take over the role of Queen Elizabeth II.
                                    </p>

                                    <p>
                                        "It's a peculiar challenge, to cast different actors as these characters age," Morgan has said of the transition. "But I believe it's the right decision. Claire and Matt have been extraordinary, but asking them to age up 20 years with makeup and prosthetics would be a mistake. We need actors who can naturally embody these characters at a different stage of life."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A Season of Transformation</h2>

                                    <p>
                                        Based on the trailer and comments from the cast and creative team, season two appears to focus on themes of transformation and adaptation. The monarchy finds itself struggling to remain relevant in a rapidly changing world, while the central characters grapple with their personal identities amidst the constraints of duty and tradition.
                                    </p>

                                    <p>
                                        "The question at the heart of this season is how does one change and grow while bound by such rigid protocols and expectations?" said Peter Morgan. "It's something all the characters are facing in different ways, but particularly Elizabeth. She's learning that being Queen means sometimes subsuming her own personality and desires for the sake of the institution."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">What to Expect</h2>

                                    <p>
                                        In addition to the major historical events already mentioned, season two is expected to explore the Queen's complicated relationship with Prime Minister Harold Macmillan (who replaced Eden), the birth of Prince Andrew and Prince Edward, and the 1963 Profumo scandal that rocked the British establishment.
                                    </p>

                                    <p>
                                        "While we remain historically accurate about the major events," explained Morgan, "what happens behind closed doors is our dramatic interpretation. We're always asking ourselves: what might have happened? What could these conversations have been like? That's where the drama lives."
                                    </p>

                                    <p>
                                        All ten episodes of "The Crown" Season 2 will be available to stream on Netflix beginning December 8, 2017.
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
                                        <button className="text-blue-500">
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
                                        title: "The Crown Season 1 Recap: Everything You Need to Know",
                                        image: "/desert-rescue.png",
                                        views: "3.1M views",
                                        time: "12:45",
                                    },
                                    {
                                        title: "Claire Foy's Journey as Queen Elizabeth II",
                                        image: "/women-in-shadows.png",
                                        views: "1.8M views",
                                        time: "9:22",
                                    },
                                    {
                                        title: "The Real History Behind The Crown",
                                        image: "/facing-adversaries.png",
                                        views: "2.4M views",
                                        time: "15:38",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={58}
                                comments={[
                                    {
                                        author: "HistoryBuff",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "Claire Foy deserves all the awards for her portrayal of the Queen. I'm sad this is her last season, but I'm intrigued to see how Olivia Colman takes on the role for the next era.",
                                        likes: 214,
                                        replies: 12,
                                    },
                                    {
                                        author: "RoyalWatcher",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "I'm especially looking forward to the Kennedy's visit to Buckingham Palace. The meeting between these two iconic women - Jackie and Elizabeth - is going to be fascinating to watch.",
                                        likes: 189,
                                        replies: 8,
                                    },
                                    {
                                        author: "TVCritic",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "No other show on television matches The Crown's production values. The attention to historical detail is remarkable, and the writing is consistently excellent. December can't come soon enough!",
                                        likes: 156,
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
                                        title: "The Crown Season 2 Official Trailer",
                                        image: "/movie-unsplash-4.jpg",
                                        views: "8.4M views",
                                        time: "2:23",
                                    },
                                    {
                                        title: "Matt Smith on Playing Prince Philip",
                                        image: "/women-in-shadows.png",
                                        views: "2.7M views",
                                        time: "7:45",
                                    },
                                    {
                                        title: "The Most Expensive TV Shows Ever Made",
                                        image: "/desert-rescue.png",
                                        views: "4.2M views",
                                        time: "11:32",
                                    },
                                    {
                                        title: "British Royal Family: A Historical Overview",
                                        image: "/facing-adversaries.png",
                                        views: "1.9M views",
                                        time: "18:15",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        The Crown
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Netflix
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Claire Foy
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Matt Smith
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Queen Elizabeth II
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Royal Drama
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Historical Drama
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Peter Morgan
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest TV show updates and streaming recommendations.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
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