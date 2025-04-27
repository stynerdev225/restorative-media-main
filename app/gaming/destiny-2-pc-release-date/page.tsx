import Image from "next/image"
import Link from "next/link"
import { Clock, ThumbsUp, MessageSquare, Share2, Facebook, Twitter, Mail, Bookmark, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { RecommendedVideos } from "@/components/recommended-videos"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"

export default function Destiny2PCArticle() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Video Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="destiny-2-pc-release-date"
                            thumbnailUrl="/destiny-2.png"
                            title="Destiny 2 PC Release Date Confirmed, System Requirements Revealed"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Article Header */}
                            <div className="mb-6">
                                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">GAMING</span>
                                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                                    Destiny 2 PC Release Date Confirmed, System Requirements Revealed
                                </h1>

                                <div className="flex items-center mt-4 mb-6">
                                    <Image
                                        src="/commenter-gordon.jpg"
                                        alt="Author"
                                        width={40}
                                        height={40}
                                        className="rounded-full mr-3"
                                    />
                                    <div>
                                        <div className="text-sm">
                                            by{" "}
                                            <Link href="/author/james-parker" className="font-medium hover:text-restorative-gold">
                                                James Parker
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500">SEPTEMBER 2, 2017</div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">3.7k</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">243</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">4 min read</span>
                                    </div>
                                    <div className="flex-1"></div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-500">SHARE:</span>
                                        <button className="bg-[#3b5998] text-white p-2 rounded">
                                            <Facebook className="h-4 w-4" />
                                        </button>
                                        <button className="bg-[#1da1f2] text-white p-2 rounded">
                                            <Twitter className="h-4 w-4" />
                                        </button>
                                        <button className="bg-red-500 text-white p-2 rounded">
                                            <Mail className="h-4 w-4" />
                                        </button>
                                        <button className="bg-gray-200 text-gray-700 p-2 rounded">
                                            <Share2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose max-w-none">
                                <p className="text-lg leading-relaxed">
                                    Bungie has confirmed that Destiny 2 will launch on PC on October 24, 2017, nearly seven weeks after the console release on September 6. The announcement was accompanied by the reveal of official system requirements and details of PC-exclusive features that will take advantage of the platform's capabilities.
                                </p>

                                <p>
                                    The PC release date confirmation comes after months of speculation following Bungie's earlier announcement that the PC version would launch later than its console counterparts. While PC players will have to wait longer than their console counterparts, Bungie has emphasized that the delay will ensure a polished, optimized experience tailored specifically for the platform.
                                </p>

                                <div className="my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white text-xl">🖥️</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">PC Version Key Details</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "PC release date: October 24, 2017",
                                                "Uncapped framerate and 4K resolution support",
                                                "21:9 ultrawide monitor compatibility",
                                                "Full mouse and keyboard control with custom key mapping",
                                                "Available exclusively through Blizzard's Battle.net platform",
                                            ].map((detail, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                                                        <Check className="h-4 w-4 text-restorative-gold" />
                                                    </div>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <h2>System Requirements</h2>
                                <p>
                                    Alongside the release date, Bungie has revealed the official minimum and recommended system requirements for the PC version of Destiny 2. The specifications suggest a well-optimized game that should run adequately on mid-range hardware while offering enhanced visual fidelity for players with more powerful systems.
                                </p>

                                <p>
                                    "We've worked closely with our partners at NVIDIA and AMD to ensure that Destiny 2 takes full advantage of the PC platform," explained David Shaw, PC Project Lead at Bungie. "Our goal was to create a version of the game that feels at home on PC, not just a console port with higher resolution."
                                </p>

                                <div className="my-8">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/destiny-2.png"
                                                alt="Guardians in combat with the Cabal in Destiny 2, showcasing the game's impressive visuals on PC"
                                                width={800}
                                                height={450}
                                                className="w-full"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                                                    PC GAMING
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 m-0">
                                                The PC version of Destiny 2 features enhanced visuals with support for 4K resolution and uncapped framerates
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Minimum System Requirements</h2>
                                <ul>
                                    <li><strong>OS:</strong> Windows 7, 8.1, or 10 (64-bit)</li>
                                    <li><strong>CPU:</strong> Intel Core i3-3250 or AMD FX-4350</li>
                                    <li><strong>GPU:</strong> NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB</li>
                                    <li><strong>RAM:</strong> 6GB</li>
                                    <li><strong>Storage:</strong> 68GB available space</li>
                                    <li><strong>Internet:</strong> Broadband internet connection</li>
                                </ul>

                                <h2>Recommended System Requirements</h2>
                                <ul>
                                    <li><strong>OS:</strong> Windows 10 (64-bit)</li>
                                    <li><strong>CPU:</strong> Intel Core i5-2400 or AMD Ryzen R5 1600X</li>
                                    <li><strong>GPU:</strong> NVIDIA GeForce GTX 970 4GB or AMD Radeon R9 390 8GB</li>
                                    <li><strong>RAM:</strong> 8GB</li>
                                    <li><strong>Storage:</strong> 68GB available space</li>
                                    <li><strong>Internet:</strong> Broadband internet connection</li>
                                </ul>

                                <h2>PC-Exclusive Features</h2>
                                <p>
                                    The PC version of Destiny 2 will include several features exclusive to the platform. Most notably, the game will support uncapped framerates, allowing players with high-end hardware to experience smoother gameplay than the 30fps cap on standard consoles (though the PS4 Pro and Xbox One X versions will support 60fps in certain modes).
                                </p>

                                <p>
                                    Additionally, PC players will enjoy support for 4K resolution, ultrawide 21:9 monitors, and customizable field-of-view settings. The game has been rebuilt with mouse and keyboard controls in mind, featuring full key remapping options and adjustable sensitivity settings for precise aiming with a mouse.
                                </p>

                                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                                    "We know PC players have high expectations, and we've worked hard to deliver an experience that meets those standards. Destiny 2 on PC isn't just a port—it's been built from the ground up to shine on the platform."
                                    <footer className="mt-2 text-right text-sm">— David Shaw, PC Project Lead at Bungie</footer>
                                </blockquote>

                                <h2>Battle.net Exclusivity</h2>
                                <p>
                                    As previously announced, Destiny 2 will be the first non-Blizzard game available through Blizzard's Battle.net platform. This exclusivity means that players will need to create or use an existing Battle.net account to purchase and play the game on PC.
                                </p>

                                <p>
                                    "Partnering with Blizzard allows us to bring Destiny 2 to PC without compromising our vision," explained Mark Noseworthy, Destiny 2 Project Lead. "Battle.net provides a secure, well-established platform with robust social features that align with the connected experience we're creating with Destiny 2."
                                </p>

                                <h2>Beta Reception and Pre-Order Details</h2>
                                <p>
                                    The PC beta for Destiny 2, which ran from August 28-31, was well-received by players and critics alike. Praise was directed toward the game's smooth performance, tight mouse and keyboard controls, and visual fidelity on high-end systems. Some concerns were raised about certain aspects of the user interface that still felt console-oriented, though Bungie has stated they are addressing this feedback.
                                </p>

                                <p>
                                    Pre-orders for the PC version are currently available through Battle.net, with the base game priced at $59.99. The Digital Deluxe Edition ($99.99) includes the expansion pass covering two planned expansions, as well as additional premium digital content. Players who pre-order any edition will receive early access to the Coldheart exotic trace rifle when the game launches.
                                </p>

                                <p>
                                    With its October 24 release date, Destiny 2 enters a crowded PC release window that includes other major titles like Wolfenstein II: The New Colossus and Assassin's Creed Origins. However, given the anticipation surrounding Bungie's first PC release since Halo 2 in 2007, and the positive reception to the beta, many analysts expect Destiny 2 to perform strongly despite the competition.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Link href="/tag/destiny-2" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    destiny 2
                                </Link>
                                <Link href="/tag/bungie" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    bungie
                                </Link>
                                <Link href="/tag/fps" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    fps
                                </Link>
                                <Link href="/tag/pc-gaming" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    pc gaming
                                </Link>
                                <Link href="/tag/battle-net" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    battle.net
                                </Link>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-10">
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src="/commenter-gordon.jpg"
                                                alt="James Parker"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover ring-2 ring-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                                                <span className="text-sm">✍️</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800">James Parker</h3>
                                            <p className="text-gray-600 mt-2 leading-relaxed">
                                                James specializes in PC gaming and hardware. With extensive experience covering both the technical and gameplay aspects of major releases, he brings detailed insights on how games perform across different system configurations. A former competitive Halo player, he has closely followed Bungie's development journey from their Microsoft days to Destiny 2.
                                            </p>
                                            <div className="flex gap-2 mt-4">
                                                <Link
                                                    href="/author/james-parker"
                                                    className="text-restorative-gold hover:text-restorative-gold/80 hover:underline text-sm font-medium flex items-center gap-1 transition-colors"
                                                >
                                                    <span>View all posts</span>
                                                    <span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <CommentsSection
                                commentCount={243}
                                comments={[
                                    {
                                        author: "Dylan McKenzie",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "2 days ago",
                                        content: "The wait is painful, but I'd rather they take the time to get the PC version right than rush it out. The beta performance was fantastic on my mid-range rig, so I'm optimistic about the final release.",
                                        likes: 76,
                                        replies: 5
                                    },
                                    {
                                        author: "Marie Daddario",
                                        avatar: "/commenter-marie.jpg",
                                        time: "3 days ago",
                                        content: "As someone who played hundreds of hours of the original Destiny on PS4, I'm so excited to play the sequel with mouse and keyboard. The controls felt great in the beta, especially for precision weapons like hand cannons.",
                                        likes: 52,
                                        replies: 4
                                    },
                                    {
                                        author: "Margaery Tyrell",
                                        avatar: "/author-margaery.jpg",
                                        time: "4 days ago",
                                        content: "The system requirements are pretty reasonable. I was worried my GTX 960 wouldn't cut it, but looks like I should be able to run it decently at 1080p. Might be time to upgrade my CPU though.",
                                        likes: 48,
                                        replies: 7
                                    }
                                ]}
                            />

                            {/* Related Videos Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                                <RelatedVideos
                                    videos={[
                                        {
                                            title: "Destiny 2 PC Beta: Performance Analysis Across Multiple GPUs",
                                            category: "GAMING",
                                            image: "/destiny-2-performance.png",
                                            views: "947K views",
                                            time: "14:22",
                                            url: "/gaming/destiny-2-performance"
                                        },
                                        {
                                            title: "Destiny 2: Everything We Know About The PC Version",
                                            category: "GAMING",
                                            image: "/destiny-2-pc-features.png",
                                            views: "1.3M views",
                                            time: "18:16",
                                            url: "/gaming/destiny-2-pc-features"
                                        },
                                        {
                                            title: "From Halo to Destiny: Bungie's Evolution as a Studio",
                                            category: "GAMING",
                                            image: "/bungie-evolution.png",
                                            views: "782K views",
                                            time: "22:45",
                                            url: "/gaming/bungie-evolution"
                                        }
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            {/* Sticky Sidebar */}
                            <div className="lg:sticky lg:top-20">
                                {/* Save Button */}
                                <div className="mb-6 flex justify-end">
                                    <button className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                                        <Bookmark className="h-4 w-4" />
                                        <span className="text-sm font-medium">Save</span>
                                    </button>
                                </div>

                                {/* Advertisement */}
                                <div className="mb-8">
                                    <div className="text-xs text-gray-500 uppercase mb-2">Advertisement</div>
                                    <div className="relative w-full h-[90px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                                        <div className="text-white">
                                            <div className="text-sm">Smart & Responsive</div>
                                            <div className="text-xl font-bold">ADVERTISEMENT</div>
                                        </div>
                                        <div className="text-white text-2xl font-bold">728×90</div>
                                    </div>
                                </div>

                                {/* Recommended Videos */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold mb-4">Recommended</h3>
                                    <RecommendedVideos
                                        videos={[
                                            {
                                                title: "Destiny 2 Classes Guide: Which Should You Choose?",
                                                category: "GAMING",
                                                image: "/destiny-2-classes.png",
                                                views: "1.4M views",
                                                time: "12:48",
                                                url: "/gaming/destiny-2-classes"
                                            },
                                            {
                                                title: "The State of PC Gaming in 2017: Big Releases and Trends",
                                                category: "GAMING",
                                                image: "/pc-gaming-2017.png",
                                                views: "876K views",
                                                time: "16:22",
                                                url: "/gaming/pc-gaming-2017"
                                            },
                                            {
                                                title: "How to Build a PC for Destiny 2: Budget to High-End",
                                                category: "GAMING",
                                                image: "/destiny-2-pc-build.png",
                                                views: "653K views",
                                                time: "18:35",
                                                url: "/gaming/destiny-2-pc-build"
                                            },
                                            {
                                                title: "Battle.net Beyond Blizzard: What Destiny 2 Means for the Platform",
                                                category: "GAMING",
                                                image: "/battlenet-expansion.png",
                                                views: "412K views",
                                                time: "14:16",
                                                url: "/gaming/battlenet-expansion"
                                            },
                                            {
                                                title: "October 2017 Game Releases: What to Play This Month",
                                                category: "GAMING",
                                                image: "/october-releases.png",
                                                views: "723K views",
                                                time: "15:48",
                                                url: "/gaming/october-2017-releases"
                                            }
                                        ]}
                                    />
                                </div>

                                {/* Popular Tags */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/tag/fps"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            fps
                                        </Link>
                                        <Link
                                            href="/tag/pc-gaming"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            pc gaming
                                        </Link>
                                        <Link
                                            href="/tag/online-multiplayer"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            online multiplayer
                                        </Link>
                                        <Link
                                            href="/tag/system-requirements"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            system requirements
                                        </Link>
                                        <Link
                                            href="/tag/activision"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            activision
                                        </Link>
                                        <Link
                                            href="/tag/blizzard"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            blizzard
                                        </Link>
                                    </div>
                                </div>

                                {/* Newsletter Signup */}
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Get the latest gaming news and exclusive content delivered to your inbox
                                    </p>
                                    <form className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-white py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-restorative-gold/20 transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AdvertisementBanner />
            </main>
            <SiteFooter />
        </div>
    )
}