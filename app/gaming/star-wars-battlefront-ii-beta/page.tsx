// filepath: /Users/stynerstiner/Downloads/restorative-media-main/app/gaming/star-wars-battlefront-ii-beta/page.tsx
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

export default function StarWarsBattlefrontBeta() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Video Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="star-wars-battlefront-beta"
                            thumbnailUrl="/space-battles.png"
                            title="Star Wars Battlefront II Beta: First Impressions"
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
                                    Star Wars Battlefront II Beta: The Good, The Bad, and The Loot Boxes
                                </h1>

                                <div className="flex items-center mt-4 mb-6">
                                    <Image
                                        src="/commenter-dylan.jpg"
                                        alt="Author"
                                        width={40}
                                        height={40}
                                        className="rounded-full mr-3"
                                    />
                                    <div>
                                        <div className="text-sm">
                                            by{" "}
                                            <Link href="/author/alex-chen" className="font-medium hover:text-restorative-gold">
                                                Alex Chen
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500">OCTOBER 12, 2017</div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">8.3k</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">674</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">8 min read</span>
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
                                    The highly anticipated Star Wars Battlefront II beta has wrapped up, giving players their first taste of EA DICE's upcoming shooter. Following the mixed reception of 2015's Battlefront, EA promised a more substantial sequel with a single-player campaign, more multiplayer content, and gameplay spanning all three Star Wars eras. After spending several days with the beta, it's clear that Battlefront II is a considerably more ambitious game than its predecessor—but it's not without controversy.
                                </p>

                                <div className="my-6">
                                    <div className="relative rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                                        <Image
                                            src="/space-battles.png"
                                            alt="Star Wars Battlefront II Battle on Theed"
                                            width={900}
                                            height={500}
                                            className="w-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className="text-white text-sm">
                                                The Galactic Assault on Theed features a 40-player battle between droids and clone troopers
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2>Expanded Scale and Scope</h2>
                                <p>
                                    The beta gave players access to four distinct game modes across three maps. The centerpiece was "Galactic Assault," a 40-player battle on Naboo's capital city of Theed, featuring the Separatist droid army against Republic clone troopers. This spectacular mode showcases DICE's attention to visual detail, with stunning environmental effects and authentic Star Wars atmosphere.
                                </p>

                                <p>
                                    Other available modes included "Starfighter Assault," an objective-based space battle around Fondor's Imperial Shipyard; "Strike," a smaller 8v8 objective-focused mode on Takodana; and "Arcade," a simple single-player or co-op mode against AI opponents.
                                </p>

                                <div className="my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white text-xl">🌟</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Beta Highlights</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "Gorgeous visuals and authentic Star Wars atmosphere across all three eras",
                                                "Improved starfighter controls make space battles more engaging",
                                                "Class-based system adds strategic depth to gameplay",
                                                "More content at launch than the previous game",
                                                "Offline Arcade mode for solo players and local co-op",
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

                                <h2>Improved Combat and Class System</h2>
                                <p>
                                    Battlefront II introduces a class-based system that adds welcome strategic depth. Players can choose from four base classes: Assault (balanced fighters), Heavy (high damage output), Officer (support), and Specialist (snipers). Each class has unique abilities, weapons, and customization options, creating more tactical variety than the original game's power-up based approach.
                                </p>

                                <p>
                                    The gunplay feels weightier and more impactful than in the previous Battlefront, with each blaster having distinctive handling characteristics. Time-to-kill has been increased slightly, giving players more opportunity to react during firefights rather than dying instantly.
                                </p>

                                <p>
                                    Heroes also return, with the beta featuring Rey, Han Solo, Darth Maul, and Boba Fett. These powerful characters no longer appear via random power-ups but are instead earned through a new "Battle Points" system that rewards players for objective play, eliminating enemies, and supporting teammates.
                                </p>

                                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/perilous-descent.png"
                                                alt="Darth Maul character in Battlefront II"
                                                width={500}
                                                height={300}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold mb-1">Darth Maul</h4>
                                            <p className="text-sm text-gray-600 m-0">
                                                The Sith lord returns with agile lightsaber combat and Force abilities
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/lone-voyager.png"
                                                alt="Rey character in Battlefront II"
                                                width={500}
                                                height={300}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold mb-1">Rey</h4>
                                            <p className="text-sm text-gray-600 m-0">
                                                The Jakku scavenger features mind trick abilities and rapid lightsaber strikes
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>The Loot Box Controversy</h2>
                                <p>
                                    The most contentious aspect of the beta was undoubtedly the game's progression system, which is heavily tied to randomized loot boxes. Rather than earning specific upgrades by playing as certain classes or completing challenges, players primarily progress by opening "Star Cards" from loot crates.
                                </p>

                                <p>
                                    These Star Cards provide substantial gameplay advantages, such as increased damage, reduced cooldowns, or new abilities. During the beta, there was no apparent limit to how powerful these cards could make a player, raising concerns about "pay-to-win" mechanics. Although EA has stated that high-tier Star Cards will require reaching certain player levels before they can be equipped, the random nature of the progression system has sparked significant backlash from the community.
                                </p>

                                <div className="my-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                                    <h4 className="font-bold text-red-800 mb-2">Community Concerns</h4>
                                    <p className="text-red-700 leading-relaxed mb-0">
                                        The biggest controversy surrounds the loot box system, which appears to give paying players significant advantages over those who don't want to spend additional money beyond the base game's purchase price. Many players have expressed concern that this system undermines competitive balance and creates a frustrating progression path.
                                    </p>
                                </div>

                                <p>
                                    EA and DICE have acknowledged these concerns, releasing a statement that they are "evaluating the beta feedback and will continue to make changes to the final game." Whether these changes will substantially alter the progression system remains to be seen.
                                </p>

                                <h2>Starfighter Assault: A Major Improvement</h2>
                                <p>
                                    One of the most impressive aspects of the beta was the revamped space combat in Starfighter Assault mode. Unlike the original game's somewhat simplistic space battles, Battlefront II's starfighter combat feels much deeper and more satisfying. The controls are more responsive, the objectives more varied, and the three starfighter classes (Fighter, Interceptor, and Bomber) each have distinct roles.
                                </p>

                                <p>
                                    The Fondor map showcased during the beta featured a multi-phase assault on an Imperial Star Destroyer, with objectives that changed as the battle progressed. The dogfighting was exhilarating, with tense moments of weaving through space station structures while being pursued by enemy fighters. This mode alone represents a significant improvement over the previous game.
                                </p>

                                <div className="my-8">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/space-battles.png"
                                                alt="Space battle around Imperial Shipyard"
                                                width={800}
                                                height={450}
                                                className="w-full"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                                                    STARFIGHTER ASSAULT
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 m-0">
                                                The Starfighter Assault mode features thrilling space combat with improved controls and objectives
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Arcade Mode: Offline Options</h2>
                                <p>
                                    For those who prefer playing offline or just want to practice, the Arcade mode offers single-player and local split-screen options. While limited in the beta to just team deathmatch scenarios on Theed, the full game promises more variety in missions and settings.
                                </p>

                                <p>
                                    The Arcade mode isn't particularly deep, but it does provide a welcome option for casual play or for learning the game's mechanics without the pressure of online competition. It's a mode that was sorely missing from the original game at launch.
                                </p>

                                <h2>Technical Performance</h2>
                                <p>
                                    On a technical level, the beta showed that DICE continues to excel at creating stunning visuals and audio. The game's presentation is impeccable, with incredibly detailed environments, character models, and special effects. The sound design is equally impressive, with iconic Star Wars audio enhancing the immersion.
                                </p>

                                <p>
                                    Performance was generally solid across platforms, with occasional server issues that can be expected in a beta test. Load times were somewhat lengthy, particularly when first joining a match, but the game maintained a stable frame rate during gameplay.
                                </p>

                                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                                    "Battlefront II represents a significant step forward in terms of content and gameplay mechanics. The concern is whether the progression system will undermine what could otherwise be an excellent Star Wars experience."
                                    <footer className="mt-2 text-right text-sm">— Alex Chen, Restorative Media Gaming Editor</footer>
                                </blockquote>

                                <h2>Final Impressions</h2>
                                <p>
                                    Star Wars Battlefront II's beta showed a game with significantly more depth and content than its predecessor. The class-based system, improved starfighter combat, and the promise of content from all three Star Wars eras make for an enticing package. The presentation remains top-notch, with DICE's Frostbite engine producing some of the most visually striking Star Wars scenes in any game to date.
                                </p>

                                <p>
                                    However, the progression system casts a shadow over these improvements. The heavy reliance on randomized loot boxes for core gameplay advantages is concerning, especially given the apparent option to purchase these boxes with real money. This could potentially create an uneven playing field that favors those willing to spend beyond the initial $60 price tag.
                                </p>

                                <p>
                                    The full game launches on November 17, with EA Access and Origin Access members getting a limited trial on November 9. While the core gameplay is promising, the progression system may ultimately determine whether Battlefront II fulfills the potential that was evident in this beta.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Link href="/tag/star-wars" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    star wars
                                </Link>
                                <Link href="/tag/battlefront" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    battlefront
                                </Link>
                                <Link href="/tag/ea" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    ea
                                </Link>
                                <Link href="/tag/dice" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    dice
                                </Link>
                                <Link href="/tag/beta" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    beta
                                </Link>
                                <Link href="/tag/gaming-news" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    gaming news
                                </Link>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-10">
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src="/commenter-dylan.jpg"
                                                alt="Alex Chen"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover ring-2 ring-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                                                <span className="text-sm">✍️</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800">Alex Chen</h3>
                                            <p className="text-gray-600 mt-2 leading-relaxed">
                                                Alex is Restorative Media's lead gaming editor and has been covering the industry for over a decade. A lifelong Star Wars fan and competitive FPS player, he's particularly interested in the intersection of game design and player experience. He plays on PC, PlayStation, and Xbox.
                                            </p>
                                            <div className="flex gap-2 mt-4">
                                                <Link
                                                    href="/author/alex-chen"
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
                                commentCount={674}
                                comments={[
                                    {
                                        author: "ForceUser87",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "The gameplay is amazing but the loot box system is a total disaster. I don't want to spend hundreds of dollars just to stay competitive online. EA really needs to fix this before launch.",
                                        likes: 234,
                                        replies: 18
                                    },
                                    {
                                        author: "ImperialCommander",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "2 days ago",
                                        content: "The starfighter combat is a HUGE improvement over the first game. I spent almost all my time in that mode and it feels so much more satisfying now. Can't wait to try more ships in the full game!",
                                        likes: 146,
                                        replies: 7
                                    },
                                    {
                                        author: "RebelScum42",
                                        avatar: "/commenter-marie.jpg",
                                        time: "3 days ago",
                                        content: "Visually it's stunning, but I'm worried the progression system is going to ruin what could have been a great game. Hoping EA listens to all the feedback.",
                                        likes: 198,
                                        replies: 24
                                    }
                                ]}
                            />

                            {/* Related Videos Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                                <RelatedVideos
                                    videos={[
                                        {
                                            title: "Star Wars Battlefront II: All Heroes Gameplay",
                                            category: "GAMING",
                                            image: "/space-battles.png",
                                            views: "2.1M views",
                                            time: "24:16",
                                            url: "/gaming/star-wars-battlefront-heroes"
                                        },
                                        {
                                            title: "Battlefront II vs Original Battlefront II (2005): What's Changed",
                                            category: "GAMING",
                                            image: "/related-special-effects.png",
                                            views: "1.8M views",
                                            time: "18:42",
                                            url: "/gaming/battlefront-comparison"
                                        },
                                        {
                                            title: "EA's Loot Box Problem: Gaming's Gambling Controversy",
                                            category: "GAMING",
                                            image: "/gaming-lootbox-controversy.png",
                                            views: "3.7M views",
                                            time: "22:08",
                                            url: "/gaming/lootbox-controversy"
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
                                                title: "How to Earn Battle Points Fast in Battlefront II",
                                                category: "GAMING",
                                                image: "/glowing-victory-cup.png",
                                                views: "786K views",
                                                time: "12:18",
                                                url: "/gaming/battlefront-battle-points"
                                            },
                                            {
                                                title: "Best Star Cards for Each Class in Battlefront II",
                                                category: "GAMING",
                                                image: "/ninja-warriors.png",
                                                views: "942K views",
                                                time: "15:54",
                                                url: "/gaming/battlefront-star-cards"
                                            },
                                            {
                                                title: "Top 10 Star Wars Games of All Time",
                                                category: "GAMING",
                                                image: "/space-battles.png",
                                                views: "3.6M views",
                                                time: "28:42",
                                                url: "/gaming/top-star-wars-games"
                                            },
                                            {
                                                title: "The Rise and Fall of LucasArts",
                                                category: "GAMING",
                                                image: "/low-poly-black-bg.png",
                                                views: "1.2M views",
                                                time: "35:18",
                                                url: "/gaming/lucasarts-history"
                                            },
                                            {
                                                title: "Upcoming Star Wars Games You Need to Know About",
                                                category: "GAMING",
                                                image: "/corporate-divide.png",
                                                views: "2.1M views",
                                                time: "16:44",
                                                url: "/gaming/upcoming-star-wars-games"
                                            }
                                        ]}
                                    />
                                </div>

                                {/* Popular Tags */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/tag/star-wars"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            star wars
                                        </Link>
                                        <Link
                                            href="/tag/electronic-arts"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            electronic arts
                                        </Link>
                                        <Link
                                            href="/tag/fps-games"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            fps games
                                        </Link>
                                        <Link
                                            href="/tag/beta-reviews"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            beta reviews
                                        </Link>
                                        <Link
                                            href="/tag/loot-boxes"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            loot boxes
                                        </Link>
                                        <Link
                                            href="/tag/multiplayer"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            multiplayer
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