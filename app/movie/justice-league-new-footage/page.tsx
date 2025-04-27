import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { CommentsSection } from "@/components/comments-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { RecommendedVideos } from "@/components/recommended-videos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function JusticeLeagueNewFootagePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full bg-black">
                    <div className="max-w-6xl mx-auto">
                        <VideoPlayer
                            videoId="justice-league-new-footage"
                            thumbnailUrl="/movie-unsplash-7.jpg"
                            title="Justice League: New Footage Shows More of the Team in Action"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <div className="flex items-center mb-6">
                                    <div className="mr-4">
                                        <Image src="/commenter-dylan.jpg" alt="Author" width={50} height={50} className="rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Ryan Cooper</h3>
                                        <p className="text-sm text-gray-500">Superhero Film Analyst</p>
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
                                        Justice League: New Footage Shows More of the Team in Action
                                    </h1>
                                    <div className="text-sm text-gray-500 mb-4">SEPTEMBER 2, 2017</div>

                                    <p className="lead text-xl mb-6">
                                        Warner Bros. releases extended footage of DC's superhero team ahead of the film's November release, providing the best look yet at the dynamics between Batman, Wonder Woman, Flash, Aquaman, and Cyborg.
                                    </p>

                                    <p>
                                        At a special event in Los Angeles yesterday, Warner Bros. unveiled several minutes of new footage from the upcoming "Justice League" film, offering fans their most comprehensive look yet at DC's premier superhero team in action. The footage, which has since been released online, showcases each team member's abilities and hints at the group's interpersonal dynamics.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Batman's Recruitment Drive</h2>

                                    <p>
                                        The new footage expands on scenes previously glimpsed in trailers, particularly Bruce Wayne's (Ben Affleck) efforts to assemble the team. "I'm building an alliance to defend ourselves," Wayne explains to Diana Prince (Gal Gadot) in one extended sequence, highlighting the film's premise: in the wake of Superman's sacrifice at the end of "Batman v Superman: Dawn of Justice," a new threat emerges that requires a team of heroes to confront.
                                    </p>

                                    <p>
                                        We see more of Wayne's initial meetings with both Arthur Curry/Aquaman (Jason Momoa) and Barry Allen/The Flash (Ezra Miller). The interaction with Aquaman appears tense, with the Atlantean initially rejecting Wayne's offer before later events apparently change his mind. In contrast, the scene with Allen shows the young speedster eagerly accepting the invitation, providing what appears to be much-needed comic relief.
                                    </p>

                                    <div className="my-8 relative aspect-video">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                                            style={{ backgroundImage: `url('/movie-unsplash-7.jpg')` }}
                                        ></div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Team Dynamics</h2>

                                    <p>
                                        Perhaps the most revealing aspect of the new footage is how it showcases the team's interactions. Wonder Woman appears to serve as a co-leader alongside Batman, with Diana often being the voice of reason and inspiration. "Don't engage alone, we do this together," she commands during one battle sequence.
                                    </p>

                                    <p>
                                        The Flash emerges as the team's enthusiastic newcomer, with Miller delivering several humorous lines about his lack of combat experience. "I've just pushed some people and run away," he admits when asked about his fighting credentials. Aquaman is portrayed as the reluctant warrior with a brash attitude, while Cyborg (Ray Fisher) appears more isolated, still coming to terms with the technological changes to his body.
                                    </p>

                                    <div className="bg-white rounded-lg shadow-lg p-6 my-8 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg z-10">
                                            <span className="font-bold text-lg">HEROES</span>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-cover bg-right-bottom opacity-20 z-0"
                                            style={{ backgroundImage: `url('/movie-unsplash-7.jpg')` }}
                                        ></div>

                                        <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                                            Justice League: Character Abilities
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Batman:</span>
                                                <span>New tactical suit with enhanced armor and technology; new vehicles including the Flying Fox and Nightcrawler</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Wonder Woman:</span>
                                                <span>Superhuman strength, speed, and durability; mastery of combat; Lasso of Truth and indestructible bracelets</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">The Flash:</span>
                                                <span>Super speed with the ability to tap into the Speed Force; new suit designed by Bruce Wayne with aerodynamic properties</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Aquaman:</span>
                                                <span>Superhuman strength and swimming ability; control over sea life; the ability to withstand ocean depths; trident weapon</span>
                                            </div>
                                            <div className="bg-white/80 p-3 rounded-lg">
                                                <span className="text-red-500 font-bold mr-2">Cyborg:</span>
                                                <span>Technologically enhanced body with adaptable weaponry; flight capability; access to computer systems; enhanced strength</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Action Sequences</h2>

                                    <p>
                                        The new footage includes extended looks at several action sequences, including a battle in what appears to be an abandoned tunnel system where the team confronts a swarm of Parademons – the alien foot soldiers serving the film's main antagonist, Steppenwolf (Ciarán Hinds).
                                    </p>

                                    <p>
                                        Each hero's unique abilities are on full display during these combat scenes. The Flash's super-speed is visualized with new effects showing the world slowing down around him. Aquaman is seen wielding his trident with devastating power, while Cyborg transforms his limbs into various weapons. Batman appears to rely more on technology and tactical leadership than in previous films, utilizing a variety of gadgets and new vehicles including the "Nightcrawler," a spider-like tank seen climbing walls in the tunnel sequence.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Visual Aesthetic</h2>

                                    <p>
                                        The footage reveals a visual style that appears to blend the darker aesthetic of previous DCEU films with more vibrant colors and lighter moments. Director Zack Snyder's signature visual flair is evident in the slow-motion action sequences and mythic imagery, though there are hints of a more diverse palette than in "Batman v Superman."
                                    </p>

                                    <p>
                                        "There was always a plan to evolve the tone," explained producer Deborah Snyder at the footage presentation. "The characters are bringing their own flavor to the mix, which naturally creates a different feeling than our previous films."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Steppenwolf and the Mother Boxes</h2>

                                    <p>
                                        The new footage offers a clearer glimpse of the film's villain, Steppenwolf, though he remains somewhat shrouded in shadow. His mission appears to involve the collection of three "Mother Boxes" – powerful alien artifacts that were briefly glimpsed in "Batman v Superman" and "Wonder Woman."
                                    </p>

                                    <p>
                                        "The Mother Boxes are central to the plot," said Zack Snyder in a statement accompanying the footage release. "They represent technology far beyond human understanding, and Steppenwolf's quest to unite them drives the conflict of the film."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Superman's Absence</h2>

                                    <p>
                                        Despite Henry Cavill being listed in the film's credits, Superman remains conspicuously absent from the new footage. The Man of Steel's sacrifice at the end of "Batman v Superman" is referenced several times, with characters noting that the world has become more dangerous in his absence.
                                    </p>

                                    <p>
                                        "The world needs Superman, and I made him a promise," Wayne says in one scene, hinting at the possibility of the character's return. However, Warner Bros. continues to keep any potential Superman scenes under wraps, maintaining one of the film's biggest mysteries.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Directorial Changes</h2>

                                    <p>
                                        While not addressed directly in the footage, the presentation acknowledged the significant behind-the-scenes change that occurred when Joss Whedon took over directorial duties after Zack Snyder stepped away following a family tragedy. According to producer Charles Roven, who spoke at the event, the transition has been seamless.
                                    </p>

                                    <p>
                                        "Joss has been working closely with Zack's vision," Roven explained. "The additional photography has been focused on enhancing what was already there rather than changing direction." This statement appears aimed at addressing fan concerns about potential tonal inconsistencies resulting from the directorial change.
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">Response to the Footage</h2>

                                    <p>
                                        Initial reactions to the new footage from those in attendance have been largely positive, with many noting the apparent chemistry between the team members and the impressive scale of the action sequences. Several journalists highlighted Ezra Miller's Flash as a potential breakout character, with his humor providing a counterbalance to the film's more serious elements.
                                    </p>

                                    <p>
                                        "What we're seeing looks like a genuine evolution for the DC films," wrote one attendee on social media. "There's a sense of fun and camaraderie that builds on Wonder Woman's success rather than doubling down on the grimness of earlier entries."
                                    </p>

                                    <h2 className="text-2xl font-bold mt-8 mb-4">What's Next</h2>

                                    <p>
                                        Warner Bros. has announced that a final trailer for "Justice League" will be released in early October, likely featuring additional footage not seen in yesterday's presentation. The studio appears to be carefully controlling what aspects of the film are revealed, particularly regarding Superman's role and the full extent of Steppenwolf's powers and motivations.
                                    </p>

                                    <p>
                                        "Justice League" represents a crucial moment for the DC Extended Universe. Following the critical and commercial success of "Wonder Woman," there's renewed optimism about the franchise's direction. The new footage suggests that the film may be finding a balance between the epic scope established in earlier entries and the more character-driven approach that made Wonder Woman resonate with audiences.
                                    </p>

                                    <p>
                                        "Justice League," starring Ben Affleck, Gal Gadot, Jason Momoa, Ezra Miller, Ray Fisher, and Henry Cavill, is scheduled for release on November 17, 2017.
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
                                        title: "Justice League Official Trailer - Comic-Con 2017",
                                        image: "/desert-rescue.png",
                                        views: "24.5M views",
                                        time: "4:12",
                                    },
                                    {
                                        title: "Evolution of the Justice League in Film & TV",
                                        image: "/women-in-shadows.png",
                                        views: "3.2M views",
                                        time: "18:45",
                                    },
                                    {
                                        title: "Wonder Woman: The DCEU's Game Changer",
                                        image: "/facing-adversaries.png",
                                        views: "5.6M views",
                                        time: "12:39",
                                    },
                                ]}
                            />

                            <CommentsSection
                                commentCount={78}
                                comments={[
                                    {
                                        author: "DCFanatic",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "The team dynamics look amazing! I'm especially excited to see how Flash and Aquaman interact with the rest of the team. The humor seems much more natural than in other superhero team-ups.",
                                        likes: 342,
                                        replies: 23,
                                    },
                                    {
                                        author: "ComicBookGuru",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "I'm cautiously optimistic about this. The footage looks good, but I'm concerned about the director change mid-production. Hoping they managed to maintain a consistent vision.",
                                        likes: 271,
                                        replies: 18,
                                    },
                                    {
                                        author: "SupermanLives",
                                        avatar: "/commenter-gordon.jpg",
                                        time: "3 days ago",
                                        content: "They're clearly saving Superman's return for the movie itself, which is the right call. His absence from the marketing makes his eventual appearance all the more impactful. Can't wait!",
                                        likes: 196,
                                        replies: 12,
                                    },
                                ]}
                            />
                        </div>

                        <div className="lg:w-1/3">
                            <AdvertisementBanner className="mb-8" />

                            <RecommendedVideos
                                videos={[
                                    {
                                        title: "Justice League: New Footage Breakdown",
                                        image: "/movie-unsplash-7.jpg",
                                        views: "1.8M views",
                                        time: "14:32",
                                    },
                                    {
                                        title: "Interview: Gal Gadot on Wonder Woman's Leadership",
                                        image: "/women-in-shadows.png",
                                        views: "3.4M views",
                                        time: "8:27",
                                    },
                                    {
                                        title: "Ezra Miller's Flash: What to Expect",
                                        image: "/desert-rescue.png",
                                        views: "2.1M views",
                                        time: "10:15",
                                    },
                                    {
                                        title: "Steppenwolf: Explaining Justice League's Villain",
                                        image: "/facing-adversaries.png",
                                        views: "1.5M views",
                                        time: "12:48",
                                    },
                                ]}
                            />

                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Justice League
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        DC
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Batman
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Wonder Woman
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        The Flash
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Aquaman
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Cyborg
                                    </Link>
                                    <Link href="#" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        Superman
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                                <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest superhero movie news and updates.</p>
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