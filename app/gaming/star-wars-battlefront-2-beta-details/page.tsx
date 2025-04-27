import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CommentsSection } from "@/components/comments-section";
import { RelatedVideos } from "@/components/related-videos";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
    return (
        <>
            <SiteHeader />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">Star Wars Battlefront II Beta Details and Dates Revealed</h1>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>SEPTEMBER 2, 2017</span>
                                <span className="mx-2">•</span>
                                <span className="text-red-500 font-medium">GAMING</span>
                            </div>

                            <div className="relative aspect-video w-full">
                                <Image
                                    src="/star-wars.png"
                                    alt="Star Wars Battlefront II"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p>
                                    Electronic Arts and DICE have officially announced the details and dates for the upcoming Star Wars Battlefront II beta. Players will be able to get their first hands-on experience with the highly anticipated sequel next month.
                                </p>

                                <h2>Beta Dates</h2>
                                <p>
                                    The Star Wars Battlefront II beta will begin on October 4th for players who pre-ordered the game and will open to everyone on October 6th. The beta will conclude on October 9th, giving players several days to explore the game's new features and content.
                                </p>

                                <h2>What's Included</h2>
                                <p>
                                    The beta will feature the Galactic Assault mode on Naboo's Theed city, where players can participate in 40-player battles as either the Separatist droid army or the Republic clone troopers. This is the same epic battle that was showcased at E3 2017.
                                </p>

                                <p>
                                    Players will also get to experience the new Starfighter Assault mode, which offers improved space combat with new controls and abilities. DICE has promised more details about this mode in the coming weeks.
                                </p>

                                <h2>Heroes and Classes</h2>
                                <p>
                                    The beta will feature several iconic heroes including Rey, Darth Maul, Han Solo, and Boba Fett. Players will also get to experience the new class-based system that replaces the previous game's power-up tokens.
                                </p>

                                <p>
                                    The four classes available in the beta will be:
                                </p>
                                <ul>
                                    <li>Assault - Versatile soldiers effective at medium range</li>
                                    <li>Heavy - Equipped with powerful weapons and shields</li>
                                    <li>Officer - Support class that can buff allies</li>
                                    <li>Specialist - Long-range fighters with sniper capabilities</li>
                                </ul>

                                <h2>Pre-Order Bonuses</h2>
                                <p>
                                    EA has reminded players that pre-ordering the game will not only grant early access to the beta but also unlock exclusive content in the full game, including The Last Jedi-themed looks for Kylo Ren and Rey.
                                </p>

                                <p>
                                    Star Wars Battlefront II will launch on November 17th, 2017, for PlayStation 4, Xbox One, and PC.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <CommentsSection 
                                commentCount={10} 
                                comments={[
                                    { 
                                        author: "John Doe", 
                                        avatar: "/commenter-dylan.jpg", 
                                        time: "2 days ago", 
                                        content: "This is amazing!", 
                                        likes: 5, 
                                        replies: 0 
                                    },
                                    { 
                                        author: "Jane Smith", 
                                        avatar: "/commenter-marie.jpg", 
                                        time: "3 days ago", 
                                        content: "Can't wait to try this out!", 
                                        likes: 3, 
                                        replies: 0 
                                    }
                                ]} 
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <RelatedVideos
                            videos={[
                                {
                                    title: "Fortnite Battle Royale Mode Announced, Free-to-Play Coming Soon",
                                    image: "/fortnite.png",
                                    views: "124K views",
                                    time: "3 days ago",
                                    url: "/gaming/fortnite-battle-royale-mode-announced"
                                },
                                {
                                    title: "Red Dead Redemption 2 Gameplay Details Leaked Online",
                                    image: "/red-dead.png",
                                    views: "98K views",
                                    time: "1 week ago",
                                    url: "/gaming/red-dead-redemption-2-gameplay-details-leaked"
                                },
                                {
                                    title: "Assassin's Creed Origins: New Gameplay Shows Off Ancient Egypt",
                                    image: "/assassins-creed.png",
                                    views: "87K views",
                                    time: "5 days ago",
                                    url: "/gaming/assassins-creed-origins-gameplay"
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <SiteFooter />
        </>
    );
}