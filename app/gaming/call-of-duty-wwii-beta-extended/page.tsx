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

export default function CallOfDutyWWIIArticle() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Video Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="call-of-duty-wwii-beta-extended"
                            thumbnailUrl="/call-of-duty.png"
                            title="Call of Duty: WWII Beta Extended, New Features Added"
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
                                    Call of Duty: WWII Beta Extended, New Features Added
                                </h1>

                                <div className="flex items-center mt-4 mb-6">
                                    <Image
                                        src="/author-gordon.jpg"
                                        alt="Author"
                                        width={40}
                                        height={40}
                                        className="rounded-full mr-3"
                                    />
                                    <div>
                                        <div className="text-sm">
                                            by{" "}
                                            <Link href="/author/chris-bennett" className="font-medium hover:text-restorative-gold">
                                                Chris Bennett
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500">SEPTEMBER 3, 2017</div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">2.8k</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">186</span>
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
                                    Sledgehammer Games has announced a two-day extension to the Call of Duty: WWII multiplayer beta, giving players additional time to experience the franchise's return to its World War II roots. Originally scheduled to end today, the beta will now continue until Tuesday, September 5, at 10 AM PT, with several new features being added for the extended period.
                                </p>

                                <p>
                                    The extension comes in response to enthusiastic player engagement throughout the beta's first weekend. Activision reports that millions of players have participated in the test, providing valuable feedback that will help refine the game before its full release in November. Along with the extended playtime, Sledgehammer is introducing new content to give players a more comprehensive look at what the final game will offer.
                                </p>

                                <div className="my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white text-xl">🎖️</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Beta Extension Additions</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "Level cap increased from 25 to 30, unlocking new weapons and equipment",
                                                "New map 'Aachen' added, featuring urban combat in a war-torn German city",
                                                "New mode 'Kill Confirmed' now available",
                                                "Additional weapon variants and division skill unlocks",
                                                "New scorestreak: Flamethrower",
                                            ].map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                                                        <Check className="h-4 w-4 text-restorative-gold" />
                                                    </div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <h2>New Map: Aachen</h2>
                                <p>
                                    The most significant addition to the extended beta is the new map, Aachen. Based on the German city that saw intense fighting during the Battle of Aachen in 1944, the map features a mix of close-quarters street combat and longer sightlines through bombed-out buildings. Players must navigate through partially collapsed structures, debris-filled streets, and underground passages as they engage in firefights across this war-torn urban landscape.
                                </p>

                                <p>
                                    "Aachen demonstrates our commitment to authentic World War II environments," explained Michael Condrey, co-founder of Sledgehammer Games. "We've recreated the devastation of urban warfare while maintaining a map design that offers diverse combat opportunities for different playstyles. It's a good example of how we're balancing historical accuracy with engaging gameplay."
                                </p>

                                <div className="my-8">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/call-of-duty.png"
                                                alt="Soldiers engaged in intense combat in the streets of Aachen in Call of Duty: WWII"
                                                width={800}
                                                height={450}
                                                className="w-full"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                                                    MULTIPLAYER
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 m-0">
                                                The new Aachen map features intense urban combat through destroyed buildings and narrow streets
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Kill Confirmed Mode</h2>
                                <p>
                                    The addition of Kill Confirmed adds another classic Call of Duty game mode to the beta. In this team-based mode, players must collect dog tags dropped by defeated enemies to score points. Simply eliminating opponents isn't enough—securing the dog tag confirms the kill and earns points for your team. Players can also deny enemy points by collecting their teammates' dog tags before opponents can reach them.
                                </p>

                                <p>
                                    Kill Confirmed joins Team Deathmatch, Domination, Hardpoint, and War as the available modes in the beta. War mode, a new narrative-driven multiplayer experience unique to Call of Duty: WWII, has been particularly well-received by players during the beta's first weekend.
                                </p>

                                <h2>Level Cap Increase</h2>
                                <p>
                                    Raising the level cap from 25 to 30 gives players access to new weapons, equipment, and scorestreaks. Notable additions include the M1A1 Carbine for the Infantry Division, new Basic Training skills, and the Flamethrower scorestreak. The Flamethrower allows players to unleash streams of fire on enemies, creating both direct damage and area denial capabilities.
                                </p>

                                <p>
                                    The level cap increase also unlocks additional weapon attachments and division skills, giving players more opportunities to customize their loadouts and experiment with different combat strategies. These new progression rewards provide a glimpse into the deeper customization options that will be available in the full game.
                                </p>

                                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                                    "The community response to the beta has been incredible. We've been monitoring feedback closely, and this extension allows us to test some new content while giving players more time with the core experience. The data we're collecting is invaluable for fine-tuning the game before launch."
                                    <footer className="mt-2 text-right text-sm">— Michael Condrey, Co-Founder, Sledgehammer Games</footer>
                                </blockquote>

                                <h2>Technical Improvements</h2>
                                <p>
                                    The extended beta also incorporates several technical improvements based on player feedback from the first weekend. These include adjustments to spawn points, weapon balancing tweaks, and fixes for various bugs identified by the community. Sledgehammer has particularly focused on server stability and matchmaking improvements to ensure smoother online play.
                                </p>

                                <p>
                                    "We've already implemented numerous changes based on the data and feedback from the first weekend," explained Glen Schofield, co-founder of Sledgehammer Games. "The extension gives us an opportunity to test these refinements with a large player base and make further adjustments before launch. We're committed to delivering the best possible experience when the game releases in November."
                                </p>

                                <h2>Positive Reception</h2>
                                <p>
                                    The beta has been generally well-received by players and critics alike, with particular praise directed at the game's return to a boots-on-the-ground approach after several years of futuristic Call of Duty titles featuring advanced movement mechanics. The World War II setting has also drawn positive comments, with many appreciating the authentic weapons, environments, and overall atmosphere.
                                </p>

                                <p>
                                    The new Divisions system, which replaces the traditional Create-a-Class feature, has generated mixed feedback. Some players appreciate the streamlined approach and the distinct playstyles offered by each Division, while others miss the more flexible customization of previous games. Sledgehammer has indicated they're carefully evaluating feedback regarding this new system.
                                </p>

                                <p>
                                    Call of Duty: WWII is scheduled for release on November 3, 2017, for PlayStation 4, Xbox One, and PC. A second beta period is expected to take place before launch, likely including PC players who have not yet had the opportunity to test the game.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Link href="/tag/call-of-duty" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    call of duty
                                </Link>
                                <Link href="/tag/activision" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    activision
                                </Link>
                                <Link href="/tag/fps" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    fps
                                </Link>
                                <Link href="/tag/world-war-ii" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    world war ii
                                </Link>
                                <Link href="/tag/multiplayer" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    multiplayer
                                </Link>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-10">
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src="/author-gordon.jpg"
                                                alt="Chris Bennett"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover ring-2 ring-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                                                <span className="text-sm">✍️</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800">Chris Bennett</h3>
                                            <p className="text-gray-600 mt-2 leading-relaxed">
                                                Chris specializes in first-person shooters and competitive multiplayer games. A longtime Call of Duty enthusiast, he has covered the franchise for over a decade and has competed in several amateur tournaments. He brings both analytical depth and hands-on experience to his coverage of shooters and esports.
                                            </p>
                                            <div className="flex gap-2 mt-4">
                                                <Link
                                                    href="/author/chris-bennett"
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
                                commentCount={186}
                                comments={[
                                    {
                                        author: "Margaery Tyrell",
                                        avatar: "/author-margaery.jpg",
                                        time: "2 days ago",
                                        content: "The War mode is honestly the best addition to Call of Duty multiplayer in years. It feels fresh while still maintaining that classic COD gameplay. Hoping they add more operations in the full game!",
                                        likes: 53,
                                        replies: 4
                                    },
                                    {
                                        author: "Dylan McKenzie",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "3 days ago",
                                        content: "I've been waiting for COD to go back to WWII for so long. The weapons feel great and the maps are well designed. Not sure how I feel about the Divisions system replacing Create-a-Class though.",
                                        likes: 48,
                                        replies: 6
                                    },
                                    {
                                        author: "Marie Daddario",
                                        avatar: "/commenter-marie.jpg",
                                        time: "4 days ago",
                                        content: "The Aachen map is a real highlight - the destroyed city setting creates some interesting gameplay opportunities. Love how you can use the rubble for cover or get height advantages from the second stories of buildings.",
                                        likes: 37,
                                        replies: 2
                                    }
                                ]}
                            />

                            {/* Related Videos Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                                <RelatedVideos
                                    videos={[
                                        {
                                            title: "Call of Duty: WWII - All Weapons Breakdown & Analysis",
                                            category: "GAMING",
                                            image: "/cod-wwii-weapons.png",
                                            views: "756K views",
                                            time: "16:42",
                                            url: "/gaming/cod-wwii-weapons"
                                        },
                                        {
                                            title: "Call of Duty: WWII - War Mode Gameplay and Strategy Guide",
                                            category: "GAMING",
                                            image: "/cod-wwii-war-mode.png",
                                            views: "923K views",
                                            time: "14:18",
                                            url: "/gaming/cod-wwii-war-mode"
                                        },
                                        {
                                            title: "The Evolution of Call of Duty: From WW2 to Advanced Warfare and Back",
                                            category: "GAMING",
                                            image: "/cod-evolution.png",
                                            views: "1.4M views",
                                            time: "22:35",
                                            url: "/gaming/cod-evolution"
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
                                                title: "Call of Duty: WWII - Division System Explained",
                                                category: "GAMING",
                                                image: "/cod-divisions.png",
                                                views: "675K views",
                                                time: "13:24",
                                                url: "/gaming/cod-divisions"
                                            },
                                            {
                                                title: "Competitive Analysis: Will COD: WWII Revitalize the Pro Scene?",
                                                category: "GAMING",
                                                image: "/cod-competitive.png",
                                                views: "524K views",
                                                time: "18:56",
                                                url: "/gaming/cod-competitive"
                                            },
                                            {
                                                title: "Sledgehammer Games: The History of COD's Newest Studio",
                                                category: "GAMING",
                                                image: "/sledgehammer-history.png",
                                                views: "432K views",
                                                time: "15:42",
                                                url: "/gaming/sledgehammer-history"
                                            },
                                            {
                                                title: "Fall 2017 FPS Showdown: COD vs Battlefield vs Destiny",
                                                category: "GAMING",
                                                image: "/fps-showdown.png",
                                                views: "872K views",
                                                time: "20:18",
                                                url: "/gaming/fps-showdown-2017"
                                            },
                                            {
                                                title: "World War II in Video Games: A Historical Perspective",
                                                category: "GAMING",
                                                image: "/ww2-games-history.png",
                                                views: "615K views",
                                                time: "24:10",
                                                url: "/gaming/ww2-games-history"
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
                                            href="/tag/activision"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            activision
                                        </Link>
                                        <Link
                                            href="/tag/multiplayer"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            multiplayer
                                        </Link>
                                        <Link
                                            href="/tag/ps4"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            ps4
                                        </Link>
                                        <Link
                                            href="/tag/xbox-one"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            xbox one
                                        </Link>
                                        <Link
                                            href="/tag/beta"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            beta
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