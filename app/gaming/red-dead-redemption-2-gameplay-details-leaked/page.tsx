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

export default function RedDeadArticle() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Video Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="red-dead-redemption-2-gameplay-details"
                            thumbnailUrl="/red-dead-redemption-2.png"
                            title="Red Dead Redemption 2 Gameplay Details Leaked"
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
                                    Red Dead Redemption 2 Gameplay Details Leaked
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
                                            <Link href="/author/jason-miller" className="font-medium hover:text-restorative-gold">
                                                Jason Miller
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500">AUGUST 10, 2018</div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">9.4k</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">542</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">6 min read</span>
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
                                    An anonymous source has leaked several gameplay details about Rockstar Games' highly anticipated Red Dead Redemption 2, providing new insights into the game's mechanics, world design, and character development systems ahead of its October 26 release date.
                                </p>

                                <p>
                                    According to the leaked information, which aligns with previously confirmed details from Rockstar, Red Dead Redemption 2 will feature the most ambitious and immersive open-world environment the studio has created to date, with unprecedented levels of interaction and environmental detail.
                                </p>

                                <div className="my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white text-xl">🤠</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Key Gameplay Features</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "Detailed interaction system for NPCs with context-sensitive dialog options",
                                                "Dynamic weather affecting gameplay and character appearance",
                                                "Realistic wildlife behavior with over 200 species of animals",
                                                "Camp management system with morale mechanics",
                                                "Enhanced Dead Eye targeting system with multiple stages",
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

                                <h2>An Unprecedented Level of World Interaction</h2>
                                <p>
                                    The leaked details suggest that Red Dead Redemption 2 will push the boundaries of NPC interaction in open-world games. Players will reportedly be able to interact with virtually every character in the game using a context-sensitive dialog system that offers different options based on the situation.
                                </p>

                                <p>
                                    "You can greet people, antagonize them, rob them, or just observe them going about their daily routines," the source claimed. "How you interact with the world will affect how people respond to you, with a new 'reputation' system that's more nuanced than the honor system from the first game."
                                </p>

                                <div className="my-8">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/western-landscape.png"
                                                alt="Western landscape reminiscent of Red Dead Redemption 2's environment"
                                                width={800}
                                                height={450}
                                                className="w-full"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                                                    ENVIRONMENT
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 m-0">
                                                The game will feature diverse environments from snowy mountains to swamplands
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Dynamic Weather and Environmental Effects</h2>
                                <p>
                                    Among the most significant revelations from the leak is the extent to which weather and environmental conditions will affect gameplay. The source described a system where mud accumulates on clothes and equipment during rainstorms, while snow affects movement speed and body temperature.
                                </p>

                                <p>
                                    "Your character can actually get visibly dirty or clean depending on what you've been doing," the source explained. "If you've been riding hard through mud or haven't bathed in a while, NPCs will comment on your appearance or even refuse service in some establishments."
                                </p>

                                <p>
                                    This level of environmental interaction extends to the wildlife system as well. According to the leak, the game will feature over 200 species of animals, each with their own behavioral patterns, hunting strategies, and ecosystem relationships.
                                </p>

                                <h2>The Gang Camp: A Living Community</h2>
                                <p>
                                    One of the most significant new mechanics revealed in the leak is the gang camp system. As part of Dutch van der Linde's gang, protagonist Arthur Morgan will need to contribute to the camp's wellbeing by hunting for food, gathering supplies, and completing missions to raise morale.
                                </p>

                                <p>
                                    "The camp is essentially a living community that changes and evolves based on your actions," the source said. "If you bring in food and money regularly, morale will be high, and you'll gain access to better items and side missions. Neglect the camp, and members will start complaining, arguing, or even leaving."
                                </p>

                                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                                    "The gang camp is essentially a living community that changes and evolves based on your actions. Your choices affect not just the gameplay, but the narrative and relationships with other gang members. It's the most ambitious system Rockstar has ever created for dynamic storytelling."
                                    <footer className="mt-2 text-right text-sm">— Anonymous source close to development</footer>
                                </blockquote>

                                <h2>Enhanced Combat Mechanics</h2>
                                <p>
                                    The leak also detailed improvements to the game's combat systems, particularly the iconic Dead Eye targeting feature. According to the source, Dead Eye will now progress through multiple stages as the player advances, adding new capabilities like automatic target selection, critical hit identification, and even trajectory visualization.
                                </p>

                                <p>
                                    "The gunplay feels much weightier than the first game," the source claimed. "Each weapon has unique handling characteristics, reload animations, and maintenance requirements. If you don't clean your guns regularly, they'll jam or lose accuracy over time."
                                </p>

                                <p>
                                    The leak suggests that melee combat has been completely redesigned as well, with context-sensitive animations that change depending on position, environment, and weapon. Bar fights, for instance, will involve smashing bottles, throwing opponents into furniture, and using improvised weapons in more dynamic ways than the first game.
                                </p>

                                <h2>Expanded Customization Options</h2>
                                <p>
                                    Player customization appears to be significantly expanded in Red Dead Redemption 2, according to the leaked information. Arthur Morgan's appearance can be customized with different haircuts, beard styles, and clothing options, all of which grow and change dynamically over time.
                                </p>

                                <p>
                                    "Your hair and beard actually grow in real-time as you play," the source explained. "You can visit barbers to get specific styles, or let it grow wild. Different clothing options aren't just cosmetic either—they affect how you perform in different environments and how NPCs react to you."
                                </p>

                                <p>
                                    This customization extends to horses as well, with the leak describing a deep bonding system where caring for a horse improves its performance, while neglect can lead to injury or even death. Different horse breeds will reportedly offer various strengths and weaknesses in areas like speed, stamina, and handling.
                                </p>

                                <h2>A Changing World</h2>
                                <p>
                                    Perhaps the most ambitious aspect of the game revealed in the leak is how the world itself will change over time. Towns will reportedly grow and evolve throughout the story, with new buildings appearing, established structures changing ownership, and the landscape bearing the marks of player actions and historical events.
                                </p>

                                <p>
                                    "The world doesn't reset when you leave an area," the source claimed. "If you get into a shootout in a saloon, the bullet holes will remain in the walls. If you help build a ranch in a side mission, that ranch will continue to develop over time and become a permanent part of the world."
                                </p>

                                <p>
                                    This persistent world approach appears to extend to the game's economy as well, with a system where player actions can affect local prices and availability of goods. Hunting too many deer in one region, for example, might cause their population to temporarily decline, while selling too many of one item to a local vendor could drive its price down.
                                </p>

                                <h2>Rockstar's Response</h2>
                                <p>
                                    Rockstar Games has not officially commented on these leaked details, maintaining their carefully controlled information release schedule. The company recently released a new trailer focusing on story elements, with a gameplay demonstration promised in the coming weeks.
                                </p>

                                <p>
                                    The authenticity of the leak cannot be fully verified, but several details align with information Rockstar has already confirmed, lending credibility to the source. Industry analysts have noted that the described features would represent a natural evolution of systems Rockstar has been developing across their titles for years.
                                </p>

                                <p>
                                    Red Dead Redemption 2 is scheduled for release on October 26, 2018, for PlayStation 4 and Xbox One. Rockstar has not announced a PC version, though their history with Grand Theft Auto V suggests one may follow at a later date.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Link href="/tag/red-dead-redemption-2" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    red dead redemption 2
                                </Link>
                                <Link href="/tag/rockstar-games" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    rockstar games
                                </Link>
                                <Link href="/tag/open-world" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    open world
                                </Link>
                                <Link href="/tag/leak" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    leak
                                </Link>
                                <Link href="/tag/western" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    western
                                </Link>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-10">
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src="/commenter-dylan.jpg"
                                                alt="Jason Miller"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover ring-2 ring-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                                                <span className="text-sm">✍️</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800">Jason Miller</h3>
                                            <p className="text-gray-600 mt-2 leading-relaxed">
                                                Jason has been covering the gaming industry for over a decade, with a particular focus on Rockstar Games and open-world titles. Before joining our team, he worked as a game designer at several major studios, giving him unique insight into the development process.
                                            </p>
                                            <div className="flex gap-2 mt-4">
                                                <Link
                                                    href="/author/jason-miller"
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
                                commentCount={542}
                                comments={[
                                    {
                                        author: "Arthur Morgan Fan",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "2 days ago",
                                        content: "The dynamic weather system sounds incredible. If this is true, it's going to set a new standard for environmental immersion in open world games. Can't wait to see how the mud and snow mechanics actually work in practice.",
                                        likes: 217,
                                        replies: 18
                                    },
                                    {
                                        author: "WesternGamer",
                                        avatar: "/commenter-marie.jpg",
                                        time: "3 days ago",
                                        content: "I'm most excited about the camp system and how your actions affect your gang. That could add so much replay value if it's as deep as they're claiming. The first RDR was already a masterpiece, this sounds next-level.",
                                        likes: 189,
                                        replies: 12
                                    },
                                    {
                                        author: "SkepticalGamer",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "I'll believe it when I see it. These 'leaks' always make the game sound better than it ends up being. Remember the leaks about GTA V having all these dynamic systems that never made it into the final game? Let's wait for official gameplay.",
                                        likes: 94,
                                        replies: 27
                                    }
                                ]}
                            />

                            {/* Related Videos Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                                <RelatedVideos
                                    videos={[
                                        {
                                            title: "Red Dead Redemption 2: Everything We Know So Far",
                                            category: "GAMING",
                                            image: "/rdr2-everything-we-know.png",
                                            views: "3.2M views",
                                            time: "18:24",
                                            url: "/gaming/rdr2-everything-we-know"
                                        },
                                        {
                                            title: "Evolution of Rockstar's Open World Design",
                                            category: "GAMING",
                                            image: "/rockstar-evolution.png",
                                            views: "2.1M views",
                                            time: "25:47",
                                            url: "/gaming/rockstar-evolution"
                                        },
                                        {
                                            title: "From Red Dead Revolver to Redemption: The Complete Story",
                                            category: "GAMING",
                                            image: "/red-dead-history.png",
                                            views: "1.5M views",
                                            time: "32:18",
                                            url: "/gaming/red-dead-history"
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
                                    <div className="relative w-full h-[90px] bg-gradient-to-r from-amber-900 to-amber-700 rounded-xl overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                                        <div className="text-white">
                                            <div className="text-sm">Premium Gaming</div>
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
                                                title: "Red Dead Redemption 2 Trailer Analysis",
                                                category: "GAMING",
                                                image: "/rdr2-trailer-analysis.png",
                                                views: "4.1M views",
                                                time: "15:36",
                                                url: "/gaming/rdr2-trailer-analysis"
                                            },
                                            {
                                                title: "The Most Anticipated Games of 2018",
                                                category: "GAMING",
                                                image: "/anticipated-games-2018.png",
                                                views: "2.8M views",
                                                time: "22:14",
                                                url: "/gaming/anticipated-games-2018"
                                            },
                                            {
                                                title: "How Rockstar Creates Realistic Worlds",
                                                category: "GAMING",
                                                image: "/rockstar-world-building.png",
                                                views: "1.9M views",
                                                time: "27:53",
                                                url: "/gaming/rockstar-world-building"
                                            },
                                            {
                                                title: "The History of Western Games",
                                                category: "GAMING",
                                                image: "/western-games-history.png",
                                                views: "1.2M views",
                                                time: "24:42",
                                                url: "/gaming/western-games-history"
                                            },
                                            {
                                                title: "From GTA to Red Dead: Rockstar's Legacy",
                                                category: "GAMING",
                                                image: "/rockstar-legacy.png",
                                                views: "3.3M views",
                                                time: "36:21",
                                                url: "/gaming/rockstar-legacy"
                                            }
                                        ]}
                                    />
                                </div>

                                {/* Popular Tags */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/tag/red-dead-redemption-2"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            red dead redemption 2
                                        </Link>
                                        <Link
                                            href="/tag/rockstar-games"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            rockstar games
                                        </Link>
                                        <Link
                                            href="/tag/open-world"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            open world
                                        </Link>
                                        <Link
                                            href="/tag/leak"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            leak
                                        </Link>
                                        <Link
                                            href="/tag/western"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            western
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