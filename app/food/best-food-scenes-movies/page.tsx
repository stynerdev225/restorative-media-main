import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BestFoodScenesMoviesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="best-food-scenes-movies"
                            thumbnailUrl="/movie-unsplash-7.jpg"
                            title="The Best Food Scenes in Movies and What They Mean"
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
                                        <h3 className="font-bold">Sophia Rodriguez</h3>
                                        <p className="text-sm text-gray-500">Food & Film Critic</p>
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
                                        The Best Food Scenes in Movies and What They Mean
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 3, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        From lavish feasts to simple meals, food on film is never just about eating—it's a powerful storytelling device that can reveal character, advance plot, and express complex themes.
                                    </p>

                                    <p>
                                        Food has always played a significant role in cinema, serving as much more than mere set dressing. When directors carefully craft food scenes, they're often communicating deeper meanings about culture, relationships, desire, and identity. Let's explore some of the most memorable food moments in film history and unpack their significance.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Power of a Shared Meal</h2>

                                    <p>
                                        Perhaps the most fundamental meaning of food in film is its ability to bring people together. In "Big Night" (1996), directors Stanley Tucci and Campbell Scott tell the story of two Italian immigrant brothers trying to save their failing restaurant with one spectacular meal. The climactic timpano dish becomes a symbol of their cultural heritage, perfectionism, and love.
                                    </p>

                                    <p>
                                        "That final wordless breakfast scene after everything has fallen apart is cinema at its most eloquent," notes food historian Dr. Maricel Presilla. "Without a word of dialogue, the simple preparation and sharing of eggs communicates reconciliation and resilience."
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-7.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Food as Character Development</h2>

                                    <p>
                                        What and how a character eats can reveal volumes about their personality, background, and emotional state. In "The Godfather" (1972), Francis Ford Coppola uses food preparation as character development. The scene where Clemenza teaches Michael Corleone how to make spaghetti sauce ("You never know, you might have to cook for 20 guys someday") subtly marks Michael's initiation into family business.
                                    </p>

                                    <p>
                                        Similarly, in "Goodfellas" (1990), Martin Scorsese uses prison food preparation to show how gangsters maintain their identity and status even behind bars. The careful slicing of garlic with a razor blade illustrates their attention to detail and adherence to standards even in confinement.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-green-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">ICONIC</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-7.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Five Unforgettable Food Scenes
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-green-500 font-bold mr-2">Ratatouille (2007):</span>
                                                <span>The critic Anton Ego's flashback after tasting Remy's ratatouille</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-green-500 font-bold mr-2">Tampopo (1985):</span>
                                                <span>The sensual egg yolk scene that blends food and eroticism</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-green-500 font-bold mr-2">When Harry Met Sally (1989):</span>
                                                <span>The infamous deli scene with "I'll have what she's having"</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-green-500 font-bold mr-2">Babette's Feast (1987):</span>
                                                <span>The elaborate French meal that transforms a puritanical community</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-green-500 font-bold mr-2">Julie & Julia (2009):</span>
                                                <span>Julia Child's transformative first meal in France—sole meunière</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Food as Social Commentary</h2>

                                    <p>
                                        Directors often use food to highlight social disparities and make political statements. In "Parasite" (2019), Bong Joon-ho uses the contrast between the wealthy Park family's premium beef and the poor Kim family's cheap instant noodles to illustrate class division. The ram-don (jjapaguri) topped with expensive steak becomes a perfect visual metaphor for South Korea's economic inequality.
                                    </p>

                                    <p>
                                        "The way Bong contrasts the upstairs-downstairs worlds through food is masterful," says film critic Anthony Lane. "It's not subtle, but it shouldn't be. The stark difference in what people eat tells us everything about who they are in the social hierarchy."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Sensuality of Food</h2>

                                    <p>
                                        Food and desire have been linked in cinema since its earliest days. No film demonstrates this connection more explicitly than "Like Water for Chocolate" (1992), where Laura Esquivel's magical realist novel comes to life through dishes that literally transmit emotions. When Tita's tears fall into the wedding cake batter, guests who eat it are overcome with longing and sadness.
                                    </p>

                                    <p>
                                        More recently, "Chef" (2014) uses the preparation of a simple grilled cheese sandwich as a sensual act that reconnects Jon Favreau's character with his passion for cooking. The lingering close-ups and sizzling sounds turn food preparation into an almost intimate experience for the viewer.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Food as Memory</h2>

                                    <p>
                                        Perhaps the most powerful use of food in cinema is its ability to evoke memory and nostalgia. The most famous example comes from Pixar's "Ratatouille" (2007), when the cynical food critic Anton Ego tastes Remy's ratatouille and is instantly transported to his childhood. The simple peasant dish reconnects him with his humanity and the pure joy of eating.
                                    </p>

                                    <p>
                                        Similarly, in "Eat Drink Man Woman" (1994), Ang Lee uses elaborate traditional Chinese meals to explore family dynamics and generational change. The opening sequence showing the father meticulously preparing a Sunday dinner demonstrates both his love for his daughters and his inability to communicate with them any other way.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Cultural Identity Through Food</h2>

                                    <p>
                                        Food often serves as a gateway to cultural exploration in film. "Crazy Rich Asians" (2018) uses a dumpling-making scene to illustrate family tradition and the outsider status of the American-born protagonist. The generational knowledge passed down through food preparation becomes a powerful symbol of belonging.
                                    </p>

                                    <p>
                                        In "Soul Food" (1997), the Sunday dinner tradition becomes the glue holding an African American family together through crisis. When the matriarch falls ill and the meals stop, the family begins to disintegrate, only to be reunited when they revive the tradition.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Art of Food on Film</h2>

                                    <p>
                                        Creating compelling food scenes presents unique challenges for filmmakers. "Food styling for film is completely different from food styling for photography," explains Susan Spungen, the food stylist for "Julie & Julia" and "Eat Pray Love." "On camera, the food needs to look appealing take after take, sometimes for hours, and it needs to be functional if actors are actually eating it."
                                    </p>

                                    <p>
                                        Directors often employ "food consultants" to ensure authenticity. For "Jiro Dreams of Sushi" (2011), director David Gelb worked closely with master sushi chef Jiro Ono to capture both the precision of his technique and the philosophy behind his culinary artistry.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Food Documentaries as Cultural Artifacts</h2>

                                    <p>
                                        While fictional films use food as metaphor, documentaries like "Chef's Table" and "Street Food" celebrate food culture directly. These visual explorations have transformed food documentation from mere instruction to artistic expression.
                                    </p>

                                    <p>
                                        "The best food documentaries make you hungry not just for the dish, but for the experience and context surrounding it," notes food writer Ruth Reichl. "They help us understand that food is never just food—it's history, politics, science, art, and community all on one plate."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">The Future of Food in Film</h2>

                                    <p>
                                        As global cuisines become more accessible and food culture continues to evolve, filmmakers find new ways to use culinary experiences as storytelling devices. Recent films like "The Menu" (2022) use haute cuisine as the backdrop for exploring obsession, class, and the commodification of art.
                                    </p>

                                    <p>
                                        What remains constant is that food on film is never merely decorative. Whether it's a lavish feast or a simple bowl of soup, what characters eat—and how they eat it—continues to be one of cinema's most effective tools for revealing who they are and what they desire.
                                    </p>

                                    <p>
                                        The next time you watch a movie featuring food prominently, look beyond the appealing visuals. Ask yourself what the director is really saying with that carefully composed plate. Like the best meals, the best food scenes satisfy on multiple levels, feeding both our senses and our minds.
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
                                        <button className="text-green-500">
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
                                        title: "Iconic Restaurant Scenes in Movies",
                                        image: "/desert-rescue.png",
                                        views: "1.2M views",
                                        time: "12:48",
                                    },
                                    {
                                        title: "How Food Stylists Make Movie Food Look Perfect",
                                        image: "/women-in-shadows.png",
                                        views: "3.5M views",
                                        time: "14:22",
                                    },
                                    {
                                        title: "The Art of Cooking Shows: Behind the Scenes",
                                        image: "/facing-adversaries.png",
                                        views: "867K views",
                                        time: "9:34",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={47}
                                comments={[
                                    {
                                        author: "CulinaryFilmBuff",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "Great article! I'd add the spaghetti scene from Lady and the Tramp - probably one of the most iconic food scenes in film history. It's amazing how food can communicate so much without words.",
                                        likes: 218,
                                        replies: 11,
                                    },
                                    {
                                        author: "ChefCinephile",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "Tampopo is my absolute favorite food film. It's essentially a 'ramen western' that treats food preparation with religious reverence. The egg yolk scene mentioned here is unforgettable!",
                                        likes: 176,
                                        replies: 9,
                                    },
                                    {
                                        author: "FilmHistorian",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "Interesting analysis! Food in horror films deserves its own article - from the dinner scene in 'The Texas Chain Saw Massacre' to the surreal food in 'The Cook, the Thief, His Wife & Her Lover.'",
                                        likes: 132,
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
                                        title: "Food on Film: A Visual Feast",
                                        image: "/movie-unsplash-7.jpg",
                                        views: "2.7M views",
                                        time: "18:42",
                                    },
                                    {
                                        title: "Chef's Table: The Art of Plating",
                                        image: "/women-in-shadows.png",
                                        views: "1.9M views",
                                        time: "11:15",
                                    },
                                    {
                                        title: "The Psychology of Comfort Food in Movies",
                                        image: "/desert-rescue.png",
                                        views: "843K views",
                                        time: "9:42",
                                    },
                                    {
                                        title: "Food Critics Review Famous Movie Meals",
                                        image: "/facing-adversaries.png",
                                        views: "1.2M views",
                                        time: "15:38",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Food Cinema
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Culinary Arts
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Food Styling
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Ratatouille
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Iconic Scenes
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Film Analysis
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Cultural Food
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Chef Movies
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest articles on food, film, and culture.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
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