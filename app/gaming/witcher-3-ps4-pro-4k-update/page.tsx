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
                            <h1 className="text-3xl font-bold">The Witcher 3 Gets PS4 Pro 4K Update, Xbox One X Support Coming</h1>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>SEPTEMBER 2, 2017</span>
                                <span className="mx-2">•</span>
                                <span className="text-red-500 font-medium">GAMING</span>
                            </div>

                            <div className="relative aspect-video w-full">
                                <Image
                                    src="/witcher-3.png"
                                    alt="The Witcher 3"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p>
                                    CD Projekt Red has announced that The Witcher 3: Wild Hunt has received a new update that brings 4K resolution support to PlayStation 4 Pro owners. Additionally, the developer confirmed that Xbox One X support is on the way.
                                </p>

                                <h2>PS4 Pro Update Details</h2>
                                <p>
                                    The PS4 Pro update, which is available now, offers enhanced performance for Sony's more powerful console. The update brings the following improvements:
                                </p>

                                <ul>
                                    <li>4K resolution support</li>
                                    <li>Enhanced performance for base PS4</li>
                                    <li>Stability improvements</li>
                                    <li>Minor visual improvements</li>
                                </ul>

                                <p>
                                    The update makes the already gorgeous game look even better, with increased detail in character models, environments, and lighting effects. Players with 4K televisions will notice the most dramatic improvements, but even those with standard HD displays should see some visual enhancements.
                                </p>

                                <h2>Xbox One X Support Coming</h2>
                                <p>
                                    CD Projekt Red also confirmed that they are working on a similar update for Microsoft's upcoming Xbox One X console. While no specific release date was given, the developer stated that it would be available "soon" and promised that it would take full advantage of the console's powerful hardware.
                                </p>

                                <p>
                                    The Xbox One X update is expected to include:
                                </p>

                                <ul>
                                    <li>Native 4K resolution support</li>
                                    <li>HDR support</li>
                                    <li>Enhanced graphical features</li>
                                    <li>Improved frame rates</li>
                                </ul>

                                <h2>Game of the Year Edition</h2>
                                <p>
                                    For those who haven't experienced The Witcher 3 yet, CD Projekt Red reminds players that the Game of the Year Edition includes the base game and all downloadable content, including the two major expansions: Hearts of Stone and Blood and Wine. The GOTY edition will also receive the same technical improvements on both PS4 Pro and Xbox One X.
                                </p>

                                <p>
                                    The Witcher 3: Wild Hunt continues to be one of the most acclaimed RPGs of this generation, having won over 800 awards, including numerous Game of the Year honors. With these technical updates, there's never been a better time to experience Geralt of Rivia's epic adventure.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <CommentsSection
                                commentCount={5}
                                comments={[
                                    {
                                        author: "Alex Johnson",
                                        avatar: "/commenter-dylan.jpg",
                                        time: "1 day ago",
                                        content: "Can't wait to experience The Witcher 3 in 4K! This is amazing news.",
                                        likes: 12,
                                        replies: 2
                                    },
                                    {
                                        author: "Sarah Williams",
                                        avatar: "/commenter-marie.jpg",
                                        time: "2 days ago",
                                        content: "The game already looks incredible. I wonder how much better it can get with this update.",
                                        likes: 8,
                                        replies: 1
                                    }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <RelatedVideos
                            videos={[
                                {
                                    title: "Cyberpunk 2077: Everything We Know So Far",
                                    image: "/cyberpunk.png",
                                    views: "156K views",
                                    time: "1 week ago",
                                    url: "/gaming/cyberpunk-2077-everything-we-know"
                                },
                                {
                                    title: "Monster Hunter World: New Gameplay Shows Off Weapons and Environments",
                                    image: "/monster-hunter.png",
                                    views: "103K views",
                                    time: "4 days ago",
                                    url: "/gaming/monster-hunter-world-gameplay"
                                },
                                {
                                    title: "God of War: New Trailer Shows Father-Son Relationship",
                                    image: "/god-of-war.png",
                                    views: "89K views",
                                    time: "2 days ago",
                                    url: "/gaming/god-of-war-new-trailer"
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