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

export default function DeathStrandingArticle() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Video Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="death-stranding-e3"
                            thumbnailUrl="/death-stranding.png"
                            title="Death Stranding: No showing at E3 this year, says Kojima"
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
                                    Death Stranding: No showing at E3 this year, says Kojima
                                </h1>

                                <div className="flex items-center mt-4 mb-6">
                                    <Image
                                        src="/author-margaery.jpg"
                                        alt="Author"
                                        width={40}
                                        height={40}
                                        className="rounded-full mr-3"
                                    />
                                    <div>
                                        <div className="text-sm">
                                            by{" "}
                                            <Link href="/author/james-peterson" className="font-medium hover:text-restorative-gold">
                                                James Peterson
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500">SEPTEMBER 5, 2017</div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">2.3k</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">187</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">5 min read</span>
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
                                    Hideo Kojima has confirmed that his highly anticipated game Death Stranding will not make an appearance at this year's Electronic Entertainment Expo (E3). The news comes as a disappointment to fans who were hoping to get a new glimpse of the mysterious title during gaming's biggest annual event.
                                </p>

                                <p>
                                    In a statement released via social media, Kojima explained that the development team is focused on polishing the gameplay rather than preparing demo materials for the show. "We've made the difficult decision to skip E3 this year," Kojima wrote. "The team is making great progress, but we want to wait until we can show something that truly represents our vision for Death Stranding."
                                </p>

                                <div className="my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white text-xl">🎮</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Death Stranding - What We Know So Far</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "Announced at E3 2016 with a cryptic trailer featuring Norman Reedus",
                                                "Stars Norman Reedus, Mads Mikkelsen, and Guillermo del Toro",
                                                "Developed by Kojima Productions after Hideo Kojima's departure from Konami",
                                                "Uses Guerrilla Games' Decima Engine (same as Horizon Zero Dawn)",
                                                "PlayStation 4 exclusive with no confirmed release date",
                                            ].map((fact, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                                                        <Check className="h-4 w-4 text-restorative-gold" />
                                                    </div>
                                                    <span className="text-gray-700">{fact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <h2>Fan Reactions and Industry Impact</h2>
                                <p>
                                    The announcement has been met with mixed reactions from the gaming community. While many fans expressed disappointment, others praised Kojima's commitment to quality over marketing schedules. Social media has been buzzing with theories about the game's development status, with some suggesting the decision indicates potential delays.
                                </p>

                                <p>
                                    Industry analysts point out that this isn't unusual for Kojima, who has a history of perfectionistic tendencies and secretive development processes. "Kojima has always been a developer who prioritizes his creative vision above all else," said gaming analyst Michael Thompson. "This decision is consistent with his approach to game development throughout his career."
                                </p>

                                <div className="my-8">
                                    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                        <div className="relative">
                                            <Image
                                                src="/kojima-working.jpg"
                                                alt="Hideo Kojima working in his studio"
                                                width={800}
                                                height={450}
                                                className="w-full"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                                                    BEHIND THE SCENES
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 m-0">
                                                Hideo Kojima working with his team at Kojima Productions on Death Stranding
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>What's Next for Death Stranding?</h2>
                                <p>
                                    Despite skipping E3, Kojima hinted that fans might not have to wait too long for new information. "We're planning to reveal more about Death Stranding later this year through different channels," he stated. This has led to speculation that Sony's PlayStation Experience event in December could be a potential venue for the next reveal.
                                </p>

                                <p>
                                    Sony Interactive Entertainment, the game's publisher, has remained supportive of Kojima's decision. In a brief statement, a Sony representative said: "We fully support Kojima Productions' development timeline and look forward to sharing more about Death Stranding when the time is right."
                                </p>

                                <h2>The Mysterious World of Death Stranding</h2>
                                <p>
                                    Since its announcement in 2016, Death Stranding has puzzled and fascinated gamers with its surreal trailers featuring disappearing babies, invisible creatures detected by mechanical arm-like sensors, and a world that seems to blur the lines between life and death.
                                </p>

                                <p>
                                    What little we know about the gameplay suggests a open-world action game with social connection elements, though how these will manifest remains unclear. Kojima has previously described the game as focusing on "connection" rather than "competition" like most action games.
                                </p>

                                <p>
                                    "In Death Stranding, we aim to create something that offers a new type of gameplay experience," Kojima explained in a previous interview. "Something that challenges conventional thinking about video games and provides players with a profound connection to the game world and other players."
                                </p>

                                <blockquote className="border-l-4 border-restorative-gold bg-gray-50 p-4 italic">
                                    "Games are a wonderful medium because they allow you to experience things physically. I want to create a game where players feel something they've never felt before—a new type of emotion."
                                    <footer className="mt-2 text-right text-sm">— Hideo Kojima, Game Creator</footer>
                                </blockquote>

                                <h2>E3 Without Kojima</h2>
                                <p>
                                    This year's E3 will still feature plenty of major announcements from gaming's biggest publishers and developers, but Kojima's absence will certainly be felt. The legendary designer's presentations have historically been highlights of the show, dating back to his Metal Gear Solid reveals during his time at Konami.
                                </p>

                                <p>
                                    For now, fans of Kojima's unique brand of game design will have to remain patient. If history is any indication, when Death Stranding is finally ready to be shown again, it will be well worth the wait.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Link href="/tag/death-stranding" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    death stranding
                                </Link>
                                <Link href="/tag/hideo-kojima" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    hideo kojima
                                </Link>
                                <Link href="/tag/e3" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    e3
                                </Link>
                                <Link href="/tag/ps4" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    ps4
                                </Link>
                                <Link href="/tag/kojima-productions" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                                    kojima productions
                                </Link>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-10">
                                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src="/author-margaery.jpg"
                                                alt="James Peterson"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover ring-2 ring-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                                                <span className="text-sm">✍️</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800">James Peterson</h3>
                                            <p className="text-gray-600 mt-2 leading-relaxed">
                                                James is a gaming journalist with over a decade of industry experience. He specializes in covering major game developers and industry events, with particular expertise in Japanese game design and development practices.
                                            </p>
                                            <div className="flex gap-2 mt-4">
                                                <Link
                                                    href="/author/james-peterson"
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
                            <CommentsSection />

                            {/* Related Videos Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                                <RelatedVideos videos={[]} />
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
                                    <RecommendedVideos videos={[]} />
                                </div>

                                {/* Popular Tags */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/tag/ps5"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            ps5
                                        </Link>
                                        <Link
                                            href="/tag/xbox-series-x"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            xbox series x
                                        </Link>
                                        <Link
                                            href="/tag/nintendo-switch"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            nintendo switch
                                        </Link>
                                        <Link
                                            href="/tag/pc-gaming"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            pc gaming
                                        </Link>
                                        <Link
                                            href="/tag/game-development"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            game development
                                        </Link>
                                        <Link
                                            href="/tag/esports"
                                            className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                                        >
                                            esports
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