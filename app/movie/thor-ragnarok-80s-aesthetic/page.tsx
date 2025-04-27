import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ThorRagnarokAestheticPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="thor-ragnarok-aesthetic"
                            thumbnailUrl="/movie-unsplash-9.jpg"
                            title="Thor: Ragnarok Director Explains Why He Chose '80s Aesthetic'"
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
                                        <h3 className="font-bold">Marcus Jenkins</h3>
                                        <p className="text-sm text-gray-500">Film & Comic Book Reporter</p>
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
                                        Thor: Ragnarok Director Explains Why He Chose '80s Aesthetic'
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 2, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Taika Waititi reveals how Jack Kirby's artwork, Flash Gordon, and '80s sci-fi influenced the visual style of Marvel's upcoming cosmic adventure.
                                    </p>

                                    <p>
                                        In a recent interview, "Thor: Ragnarok" director Taika Waititi explained his decision to embrace a vibrant, retro aesthetic for the third installment in the Thor franchise. The film, which is set to be released on November 3, 2017, represents a significant visual departure from previous entries in the Marvel Cinematic Universe.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Kirby's Cosmic Canvas</h2>

                                    <p>
                                        Waititi cited legendary comic book artist Jack Kirby, who co-created Thor and countless other Marvel characters, as his primary influence for the film's look. "Kirby's work is just so bombastic and colorful and psychedelic," Waititi said. "When you look at the original Thor comics and his cosmic work, there's a playfulness and an energy that we wanted to capture."
                                    </p>

                                    <p>
                                        The director explained that previous Thor films had taken a more grounded approach to the character's Norse mythology, but he wanted to embrace the cosmic weirdness that made Kirby's work so distinctive. "We're dealing with alien planets and space gladiators in this film. It would almost be a disservice to Kirby's vision to make that look too serious or realistic."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-9.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Retrofuturism and '80s Sci-Fi</h2>

                                    <p>
                                        Beyond Kirby's influence, Waititi revealed that he drew heavily from '80s science fiction films and their distinctive visual language. "I grew up watching movies like Flash Gordon, Krull, and The Neverending Story. There was something so imaginative and unapologetically fun about those films," he explained. "They weren't afraid of bright colors or synthesizer music or going completely over the top."
                                    </p>

                                    <p>
                                        The film's trailers have already showcased this approach, with the planet Sakaar featuring a color palette reminiscent of '80s neon aesthetics, and the inclusion of Led Zeppelin's "Immigrant Song" further reinforcing the retro vibe. According to Waititi, even the film's logo was redesigned to evoke the feeling of VHS science fiction movies from the era.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">INFLUENCES</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-9.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Key Visual Inspirations for Thor: Ragnarok
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Jack Kirby:</span>
                                                <span>The legendary comic artist's cosmic Thor stories and New Gods series</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Flash Gordon (1980):</span>
                                                <span>The camp sci-fi classic's vibrant color palette and costume design</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">He-Man and the Masters of the Universe:</span>
                                                <span>The animated series' combination of science fiction and fantasy elements</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Blade Runner:</span>
                                                <span>The neon-lit urban environments inspired Sakaar's city design</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Heavy Metal Magazine:</span>
                                                <span>The sci-fi/fantasy publication's psychedelic and surreal artwork</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Marvel's Blessing for a New Direction</h2>

                                    <p>
                                        Waititi, known for comedic indies like "What We Do in the Shadows" and "Hunt for the Wilderpeople," might seem like an unexpected choice for a major superhero film. However, the director explained that Marvel Studios president Kevin Feige was fully supportive of his vision for a more colorful, humorous take on Thor.
                                    </p>

                                    <p>
                                        "Kevin and the Marvel team were actually pushing for even more color and more weirdness," Waititi revealed. "They recognized that the Thor franchise needed to evolve, and they gave me the freedom to reinvent it in a way that feels fresh but still respectful to what came before."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Humor as a Storytelling Tool</h2>

                                    <p>
                                        The '80s influence extends beyond just the visual aesthetic to the film's tone, which embraces the humor often found in sci-fi adventures of that era. "The best '80s sci-fi movies didn't take themselves too seriously," Waititi noted. "Look at something like Big Trouble in Little China or The Fifth Element – they're these big, ambitious films with imaginative worlds, but they're not afraid to be funny."
                                    </p>

                                    <p>
                                        Chris Hemsworth, who returns as Thor, has expressed enthusiasm for this new approach. "I've wanted to show more of Thor's personality and humor for a while now," the actor said in a separate interview. "Taika has given me the chance to really play with the character in ways I haven't before. It feels like we're making the kind of Thor movie I would have loved as a kid."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">A Practical Approach</h2>

                                    <p>
                                        Despite the film's fantastical elements, Waititi insisted on using practical effects and sets wherever possible, another callback to the filmmaking techniques of the 1980s. "We built these massive sets for Sakaar that are just dripping with detail and color," the director explained. "Of course there's CGI, but we wanted actors to be able to interact with real environments as much as possible."
                                    </p>

                                    <p>
                                        This approach extended to creature design as well, with many of the film's aliens featuring practical makeup and costume elements. "There's something so charming about the creature designs in '80s movies like The Dark Crystal or Labyrinth," Waititi said. "We wanted to capture some of that tangible quality."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Soundtrack</h2>

                                    <p>
                                        The film's music also reflects its '80s inspirations, with composer Mark Mothersbaugh (formerly of the band Devo) creating a score that incorporates synthesizers alongside traditional orchestral elements. "Mark's music adds this perfect retro-futuristic layer to the film," Waititi enthused. "It's both epic and quirky in a way that perfectly matches the visuals."
                                    </p>

                                    <p>
                                        The use of Led Zeppelin's "Immigrant Song" in the trailers and film was a deliberate choice as well. "That song has these Norse mythology references in the lyrics, but it also just rocks so hard," Waititi said. "It has this perfect blend of the mythic and the awesome that we're going for."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Balancing Old and New</h2>

                                    <p>
                                        While embracing a new visual direction, Waititi was careful to note that "Thor: Ragnarok" still honors what came before. "We're not rebooting Thor or pretending the other movies didn't happen," he clarified. "We're evolving the character and his world. The events of the previous films still matter, but we're taking him to new places – literally and figuratively."
                                    </p>

                                    <p>
                                        This evolution includes a new look for Thor himself, who loses his long hair and trademark hammer during the course of the film. "We wanted to strip Thor back to his essentials and rebuild him," Waititi explained. "The visual changes to the character reflect his internal journey."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Early Reactions</h2>

                                    <p>
                                        While the film won't be released until November, early footage has been met with enthusiasm from critics and fans alike, with many praising the distinctive visual style. Industry insiders who have seen portions of the film describe it as a breath of fresh air for the Marvel Cinematic Universe.
                                    </p>

                                    <p>
                                        "We're seventeen films into this cinematic universe now," Waititi reflected. "I think audiences are ready for filmmakers to take some risks and offer different flavors. Not every Marvel movie needs to look or feel the same."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Future of the MCU</h2>

                                    <p>
                                        Waititi's approach may signal a more visually diverse future for Marvel films. The upcoming "Black Panther" film from director Ryan Coogler also appears to have a distinctive visual identity, suggesting that Marvel is encouraging directors to put more of their personal stamp on these franchise entries.
                                    </p>

                                    <p>
                                        "What's exciting about where Marvel is right now is that they're confident enough in their universe to let filmmakers bring their own vision," Waititi concluded. "They know fans want consistency in terms of quality, but not necessarily in terms of style. I hope 'Ragnarok' opens the door for even more visual experimentation in superhero films."
                                    </p>

                                    <p>
                                        "Thor: Ragnarok" stars Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, and Jeff Goldblum. The film opens nationwide on November 3, 2017.
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
                                        title: "Marvel's Phase 3: The Road to Infinity War",
                                        image: "/desert-rescue.png",
                                        views: "3.8M views",
                                        time: "14:22",
                                    },
                                    {
                                        title: "The Evolution of Thor in the MCU",
                                        image: "/women-in-shadows.png",
                                        views: "2.5M views",
                                        time: "12:48",
                                    },
                                    {
                                        title: "Taika Waititi: From Indie Films to Marvel",
                                        image: "/facing-adversaries.png",
                                        views: "1.2M views",
                                        time: "9:35",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={62}
                                comments={[
                                    {
                                        author: "MarvelFan84",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "This looks so different from the first two Thor movies! I was skeptical at first, but the trailers have completely won me over. The Jack Kirby influence is so obvious and I love it.",
                                        likes: 234,
                                        replies: 16,
                                    },
                                    {
                                        author: "RetroGamer",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "As someone who grew up with 80s sci-fi, I'm so excited for this aesthetic. Flash Gordon was my jam as a kid! Hope they keep the humor balanced with some real stakes though.",
                                        likes: 187,
                                        replies: 9,
                                    },
                                    {
                                        author: "ComicBookScholar",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "Jack Kirby would be proud. His cosmic artwork was decades ahead of its time, and it's great to see his influence finally making it to the screen in such a direct way.",
                                        likes: 153,
                                        replies: 7,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Thor: Ragnarok Official Trailer",
                                        image: "/movie-unsplash-9.jpg",
                                        views: "28.3M views",
                                        time: "2:12",
                                    },
                                    {
                                        title: "Interview: Chris Hemsworth on the New Thor",
                                        image: "/women-in-shadows.png",
                                        views: "4.7M views",
                                        time: "8:35",
                                    },
                                    {
                                        title: "The Influence of Jack Kirby on Modern Comics",
                                        image: "/desert-rescue.png",
                                        views: "1.3M views",
                                        time: "15:42",
                                    },
                                    {
                                        title: "Making of Thor: Ragnarok - Behind the Scenes",
                                        image: "/facing-adversaries.png",
                                        views: "3.9M views",
                                        time: "10:28",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Thor: Ragnarok
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Marvel
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Taika Waititi
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Chris Hemsworth
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Jack Kirby
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        MCU
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        80s Aesthetic
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Superhero Movies
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest movie news and Marvel updates.</p>
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