import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon, HeartIcon, MessageSquareIcon, ShareIcon } from "lucide-react"

import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"
import { RelatedVideos } from "@/components/related-videos"
import { VideoPlayer } from "@/components/video-player"

export default function InmateStoriesSanQuentinPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Video Hero Section */}
            <div className="relative w-full bg-black">
                <div className="container mx-auto">
                    <VideoPlayer
                        videoId="inmate-stories-san-quentin"
                        thumbnailUrl="/san-quentin-4.jpg"
                        title="Voices from Within: Inmates Share Their Stories"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Article Content - 2/3 width */}
                    <div className="w-full lg:w-2/3">
                        {/* Article Header */}
                        <div className="mb-6">
                            <div className="mb-2">
                                <Link
                                    href="/category/documentary"
                                    className="text-sm font-semibold uppercase text-red-600 hover:text-red-700"
                                >
                                    DOCUMENTARY
                                </Link>
                            </div>
                            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                                Voices from Within: Inmates Share Their Stories
                            </h1>
                            <div className="flex items-center gap-2">
                                <Image src="/author-thomas.jpg" alt="Author" width={40} height={40} className="rounded-full" />
                                <div>
                                    <p className="text-sm font-medium">Robert Chambers</p>
                                    <p className="text-xs text-gray-500">SEPTEMBER 5, 2017</p>
                                </div>
                            </div>
                        </div>

                        {/* Engagement Stats */}
                        <div className="mb-8 flex items-center gap-6 border-b border-t border-gray-200 py-4">
                            <div className="flex items-center gap-1">
                                <HeartIcon className="h-5 w-5 text-gray-400" />
                                <span className="text-sm text-gray-600">1.3K</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                                <span className="text-sm text-gray-600">302</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ShareIcon className="h-5 w-5 text-gray-400" />
                                <span className="text-sm text-gray-600">Share</span>
                            </div>
                            <div className="ml-auto text-sm text-gray-600">22 min read</div>
                        </div>

                        {/* Article Content */}
                        <div className="prose max-w-none">
                            <p className="lead">
                                Behind San Quentin's imposing walls are thousands of individuals with powerful stories to tell. This documentary gives voice to those rarely heard, providing a platform for inmates to share their experiences, struggles, and hopes for the future in their own words.
                            </p>

                            <h2>The Power of Personal Narrative</h2>
                            <p>
                                In a society that often reduces incarcerated individuals to their crimes or prison identification numbers, personal storytelling becomes an act of reclaiming humanity. This documentary centers the voices of six inmates at San Quentin State Prison, each with unique journeys that challenge stereotypes and reveal the complex realities of life behind bars.
                            </p>
                            <p>
                                Over the course of eight months, our film crew conducted extensive interviews, provided storytelling workshops, and supplied recording equipment that allowed participants to document their daily lives when cameras weren't present. The result is an intimate portrait of incarceration rarely seen in mainstream media.
                            </p>

                            {/* Featured Inmate Box */}
                            <div className="my-6 rounded-lg bg-blue-50 p-4">
                                <h3 className="mb-2 text-lg font-semibold text-blue-800">FEATURED VOICE: MARCUS WASHINGTON</h3>
                                <p className="text-blue-800">
                                    Serving a 15-year sentence for armed robbery, Marcus Washington discovered a talent for poetry while incarcerated. His spoken word pieces about childhood trauma and addiction have been published in several literary journals. "Words became my way out," he explains. "Even when your body is confined, your mind can still be free."
                                </p>
                            </div>

                            <h2>Themes of Loss and Separation</h2>
                            <p>
                                A recurring theme across all six stories is the pain of separation from loved ones, particularly children. James Riordan, who is seven years into a twelve-year sentence, speaks movingly about watching his daughters grow up through brief visits and phone calls.
                            </p>
                            <p>
                                "The hardest part isn't the confinement or the conditions," Riordan says. "It's missing the everyday moments—first days of school, birthdays, scraped knees that need kissing. I've become a stranger in my own children's story."
                            </p>
                            <p>
                                The documentary follows Riordan as he prepares for a rare extended family visit, capturing both the joy of connection and the heartbreak of saying goodbye. These scenes offer viewers insight into the ripple effects of incarceration on families and communities.
                            </p>

                            {/* Image Gallery */}
                            <div className="my-8">
                                <h3 className="mb-4 text-xl font-semibold">Documenting Prison Life</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Image
                                            src="/san-quentin-interview.jpg"
                                            alt="Interview at San Quentin"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                        <p className="mt-2 text-sm text-gray-600">
                                            Filmmaker Robert Chambers interviews Carlos Valdez in the prison yard.
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src="/san-quentin-writing.jpg"
                                            alt="Poetry workshop at San Quentin"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                        <p className="mt-2 text-sm text-gray-600">
                                            Inmates participate in a creative writing workshop as part of their storytelling preparation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2>Paths to Incarceration</h2>
                            <p>
                                Each participant in the documentary speaks candidly about the choices and circumstances that led to their imprisonment. Their stories reveal common threads: childhood poverty, educational disadvantages, early exposure to violence, and limited opportunities.
                            </p>
                            <p>
                                "I'm not excusing what I did," says Terrell Phillips, serving twenty years for drug trafficking charges. "But I want people to understand that my choices didn't happen in a vacuum. By the time I was ten, I'd seen more violence than most people see in a lifetime. The streets raised me when nobody else would."
                            </p>
                            <p>
                                These narratives challenge viewers to consider the social factors that contribute to crime and incarceration, without diminishing personal responsibility for harmful actions.
                            </p>

                            <h2>Finding Purpose Through Art</h2>
                            <p>
                                For many of the featured inmates, artistic expression has become a crucial tool for self-reflection and growth. Carlos Valdez, who has served eight years of a life sentence with possibility of parole, discovered painting through a prison arts program and has since developed a distinctive style that combines religious imagery with themes of redemption.
                            </p>
                            <p>
                                "When I paint, I'm not an inmate anymore," Valdez explains. "I'm just a creator, bringing something new into the world. That's powerful when you're in a place designed to restrict and confine you."
                            </p>
                            <p>
                                The documentary showcases Valdez's work and follows his preparation for an exhibition of prison art at a San Francisco gallery, raising questions about how society values or devalues creative work by incarcerated individuals.
                            </p>

                            {/* Quote Box */}
                            <blockquote className="border-l-4 border-red-600 bg-gray-50 p-4 italic">
                                "Everyone has a story worth telling. When we silence or ignore the voices of those behind prison walls, we miss an opportunity to learn something profound about humanity, resilience, and the possibilities for transformation. These aren't just 'prisoner stories'—they're human stories."
                                <footer className="mt-2 text-right text-sm">— Maria Gonzalez, Prison Arts Project Director</footer>
                            </blockquote>

                            <h2>Faith and Spirituality</h2>
                            <p>
                                For several of the men featured, spiritual practice provides crucial support for their emotional and mental well-being. The documentary includes scenes from San Quentin's various religious services and faith-based programs, showing how these communities foster connection and meaning.
                            </p>
                            <p>
                                David Chen, who converted to Buddhism during his incarceration, leads viewers through his daily meditation practice and explains how mindfulness techniques have helped him manage anger and cultivate compassion—even toward those who have harmed him.
                            </p>
                            <p>
                                "Prison can be a place of incredible spiritual growth," Chen reflects. "When everything is stripped away—status, possessions, freedom—you're forced to confront your true self. That's terrifying but also liberating."
                            </p>

                            <h2>Looking Forward: Hope and Uncertainty</h2>
                            <p>
                                The documentary concludes by exploring each participant's hopes and plans for the future. For some, like Marcus Washington who is nearing his release date, these plans are concrete and imminent. Others face the uncertainty of lengthy sentences or parole hearings.
                            </p>
                            <p>
                                The film doesn't shy away from the challenges of reentry. Those nearing release speak candidly about their fears of discrimination, technological changes, and rebuilding damaged relationships. Despite these concerns, each expresses determination to create meaningful lives post-incarceration.
                            </p>
                            <p>
                                "My story isn't over just because I made mistakes," says Washington in the documentary's final scene. "I have so much more to give, so much more to say. This is just one chapter in a much longer book."
                            </p>
                        </div>

                        {/* Author Bio */}
                        <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="flex items-start gap-4">
                                <Image src="/author-thomas.jpg" alt="Robert Chambers" width={80} height={80} className="rounded-full" />
                                <div>
                                    <h3 className="mb-1 text-lg font-bold">Robert Chambers</h3>
                                    <p className="mb-3 text-sm text-gray-600">Documentary Filmmaker & Investigative Journalist</p>
                                    <p className="text-sm text-gray-700">
                                        Robert Chambers has spent over 15 years documenting America's criminal justice system. His work has appeared on major networks and streaming platforms, earning him three Emmy nominations. He specializes in gaining access to restricted environments and telling stories that humanize complex institutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                                    San Quentin
                                </Link>
                                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                                    Personal Stories
                                </Link>
                                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                                    Prison Reform
                                </Link>
                                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                                    Rehabilitation
                                </Link>
                                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                                    Documentary
                                </Link>
                            </div>
                        </div>

                        {/* Comments Section */}
                        <CommentsSection
                            commentCount={6}
                            comments={[
                                {
                                    author: "Margaery Tyrell",
                                    avatar: "/author-margaery.jpg",
                                    time: "3 days ago",
                                    content: "This documentary changed how I think about incarceration. Hearing directly from the inmates themselves provides a perspective we rarely get from mainstream media coverage of prisons.",
                                    likes: 124,
                                    replies: 5
                                },
                                {
                                    author: "Dylan McKenzie",
                                    avatar: "/commenter-dylan.jpg",
                                    time: "5 days ago",
                                    content: "Powerful storytelling. I especially appreciated how the film didn't try to excuse criminal behavior while still showing the humanity of each person featured.",
                                    likes: 78,
                                    replies: 2
                                },
                                {
                                    author: "Marie Daddario",
                                    avatar: "/commenter-marie.jpg",
                                    time: "1 week ago",
                                    content: "I was particularly moved by Carlos Valdez's artwork. Is there any way to view more of his paintings or support the prison arts program?",
                                    likes: 56,
                                    replies: 1
                                }
                            ]}
                        />

                        {/* Related Videos */}
                        <RelatedVideos
                            videos={[
                                {
                                    title: "Inside San Quentin: A Look at California's Oldest Prison",
                                    image: "/san-quentin-1.jpg",
                                    views: "328K views",
                                    time: "21:34",
                                    category: "Documentary",
                                    url: "/documentary/inside-san-quentin",
                                },
                                {
                                    title: "Rehabilitation Programs Making a Difference at San Quentin",
                                    image: "/san-quentin-2.jpg",
                                    views: "245K views",
                                    time: "18:42",
                                    category: "Documentary",
                                    url: "/documentary/rehabilitation-san-quentin",
                                },
                                {
                                    title: "The History of San Quentin: From 1852 to Present Day",
                                    image: "/san-quentin-3.jpg",
                                    views: "189K views",
                                    time: "24:15",
                                    category: "Documentary",
                                    url: "/documentary/history-san-quentin",
                                },
                            ]}
                        />
                    </div>

                    {/* Sidebar - 1/3 width */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Save Button */}
                            <div className="mb-6 flex justify-end">
                                <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                    <BookmarkIcon className="h-5 w-5" />
                                    Save
                                </button>
                            </div>

                            {/* Advertisement */}
                            <div className="mb-8">
                                <AdvertisementBanner />
                            </div>

                            {/* Recommended Videos */}
                            <div className="mb-8 rounded-lg border border-gray-200 p-4">
                                <h3 className="mb-4 text-lg font-semibold">Recommended</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <Image
                                            src="/featured-documentary-1.jpg"
                                            alt="Documentary thumbnail"
                                            width={100}
                                            height={56}
                                            className="rounded-md object-cover"
                                        />
                                        <div>
                                            <h4 className="font-medium leading-snug">
                                                <Link href="/documentary/climate-solutions" className="hover:text-red-600">
                                                    Climate Solutions: Communities Taking Action
                                                </Link>
                                            </h4>
                                            <p className="text-xs text-gray-500">942K views</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Image
                                            src="/featured-documentary-2.jpg"
                                            alt="Documentary thumbnail"
                                            width={100}
                                            height={56}
                                            className="rounded-md object-cover"
                                        />
                                        <div>
                                            <h4 className="font-medium leading-snug">
                                                <Link href="/documentary/sustainable-future" className="hover:text-red-600">
                                                    Building a Sustainable Future: Urban Planning
                                                </Link>
                                            </h4>
                                            <p className="text-xs text-gray-500">736K views</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Image
                                            src="/featured-documentary-3.jpg"
                                            alt="Documentary thumbnail"
                                            width={100}
                                            height={56}
                                            className="rounded-md object-cover"
                                        />
                                        <div>
                                            <h4 className="font-medium leading-snug">
                                                <Link href="/documentary/community-gardens" className="hover:text-red-600">
                                                    Community Gardens: Growing Food and Connection
                                                </Link>
                                            </h4>
                                            <p className="text-xs text-gray-500">524K views</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="rounded-lg border border-gray-200 p-4">
                                <h3 className="mb-2 text-lg font-semibold">Newsletter</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Get the latest documentary updates and exclusive content delivered to your inbox.
                                </p>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                    />
                                    <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}