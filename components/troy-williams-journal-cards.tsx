"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ArrowRight } from "lucide-react"

interface JournalCardProps {
    category: string
    title: string
    date: string
    imageSrc: string
    slug: string
}

export function TroyWilliamsJournalCards() {
    // Array of journal entries with all the data provided
    const journalEntries: JournalCardProps[] = [
        {
            category: "FOOD",
            title: "Chicago's Best Burger: Because we all love Krabby Patty",
            date: "SEPTEMBER 5, 2017",
            imageSrc: "/chicago-burger.png",
            slug: "/food/chicago-best-burger"
        },
        {
            category: "MOVIE",
            title: "Agent 327: Operation Barbershop: An Animated Film Based on Martin Lodewijk's Comic",
            date: "SEPTEMBER 5, 2017",
            imageSrc: "/anonymous-tapes.png", // Using a suitable image from available assets
            slug: "/movie/agent-327-operation-barbershop"
        },
        {
            category: "MOVIE",
            title: "This Theory About The Ending Of Interstellar Changes Everything",
            date: "SEPTEMBER 5, 2017",
            imageSrc: "/space-battles.png", // Using a suitable image from available assets
            slug: "/movie/interstellar-theory"
        },
        {
            category: "FOOD",
            title: "This Great Street Food Truck You Should Try in Seminyak",
            date: "SEPTEMBER 5, 2017",
            imageSrc: "/street-food-seminyak.png",
            slug: "/food/seminyak-street-food"
        },
        {
            category: "TV",
            title: "Game of Thrones Season 8: Everything We Know So Far",
            date: "SEPTEMBER 4, 2017",
            imageSrc: "/castle-contemplation.png",
            slug: "game-of-thrones-season-8"
        },
        {
            category: "MOVIE",
            title: "Blade Runner 2049: New Trailer Reveals More About Ryan Gosling's Character",
            date: "SEPTEMBER 4, 2017",
            imageSrc: "/perilous-descent.png", // Using a suitable image from available assets
            slug: "/movie/blade-runner-2049-trailer"
        },
        {
            category: "TV",
            title: "Stranger Things Season 2 Will Be Darker and More Intense",
            date: "SEPTEMBER 4, 2017",
            imageSrc: "/mysterious-couple.png", // Using a suitable image from available assets
            slug: "stranger-things-season-2"
        },
        {
            category: "MOVIE",
            title: "Star Wars: The Last Jedi Director Explains Why Kylo Ren Is Compelling",
            date: "SEPTEMBER 4, 2017",
            imageSrc: "/last-jedi.png", // Using a suitable image from available assets
            slug: "/movie/star-wars-last-jedi-kylo-ren"
        },
        {
            category: "TV",
            title: "The Walking Dead Season 8 Will Have More Action Than Ever Before",
            date: "SEPTEMBER 3, 2017",
            imageSrc: "/facing-adversaries.png", // Using a suitable image from available assets
            slug: "walking-dead-season-8"
        },
        {
            category: "MOVIE",
            title: "IT Movie Review: A Terrifying Adaptation of Stephen King's Novel",
            date: "SEPTEMBER 3, 2017",
            imageSrc: "/mysterious-couple.png", // Using a suitable image from available assets
            slug: "/movie/it-movie-review"
        },
        {
            category: "FOOD",
            title: "The Best Food Scenes in Movies and What They Mean",
            date: "SEPTEMBER 3, 2017",
            imageSrc: "/herbed-scramble.png", // Using a suitable image from available assets
            slug: "/food/food-scenes-in-movies"
        },
        {
            category: "TV",
            title: "Westworld Season 2: New Characters and Locations Revealed",
            date: "SEPTEMBER 3, 2017",
            imageSrc: "/desert-rescue.png", // Using a suitable image from available assets
            slug: "westworld-season-2"
        },
        {
            category: "MOVIE",
            title: "Thor: Ragnarok Director Explains Why He Chose '80s Aesthetic'",
            date: "SEPTEMBER 2, 2017",
            imageSrc: "/infinity-war.png", // Using a suitable image from available assets
            slug: "/movie/thor-ragnarok-80s-aesthetic"
        },
        {
            category: "TV",
            title: "The Crown Season 2 Gets Release Date and First Trailer",
            date: "SEPTEMBER 2, 2017",
            imageSrc: "/women-in-shadows.png", // Using a suitable image from available assets
            slug: "the-crown-season-2"
        },
        {
            category: "MOVIE",
            title: "Justice League: New Footage Shows More of the Team in Action",
            date: "SEPTEMBER 2, 2017",
            imageSrc: "/wonder-woman.png", // Using a suitable image from available assets
            slug: "/movie/justice-league-new-footage"
        },
        {
            category: "TV",
            title: "Black Mirror Season 4: All Episode Titles and Directors Revealed",
            date: "SEPTEMBER 2, 2017",
            imageSrc: "/sci-fi-adventures.png", // Using a suitable image from available assets
            slug: "black-mirror-season-4"
        },
    ]

    const JournalCard = ({ entry }: { entry: JournalCardProps }) => {
        return (
            <div className="group">
                <Link href={entry.slug.startsWith('/') ? entry.slug : `/troy-williams-journal/${entry.slug}`}>
                    <div className="relative overflow-hidden rounded-lg mb-3 shadow-sm">
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={entry.imageSrc}
                                alt={entry.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-3 left-3">
                                <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                                    {entry.category}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-base mb-1 text-black line-clamp-2 group-hover:text-yellow-600 transition-colors">
                            {entry.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            <span>{entry.date}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    // Featured journal entry - the first one
    const featuredEntry = journalEntries[0]

    return (
        <div className="py-10">
            <div className="container mx-auto px-4">
                {/* Featured Article */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-black">Featured Article</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-[400px] rounded-xl overflow-hidden">
                            <Image
                                src={featuredEntry.imageSrc}
                                alt={featuredEntry.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="px-2 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded">
                                    {featuredEntry.category}
                                </span>
                                <h3 className="text-white font-bold text-2xl mt-3 mb-2">
                                    {featuredEntry.title}
                                </h3>
                                <div className="flex items-center text-sm text-white/80">
                                    <CalendarDays className="h-4 w-4 mr-1" />
                                    <span>{featuredEntry.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-bold text-black">About This Article</h3>
                            <p className="text-gray-700">
                                Join Troy Williams as he explores the vibrant food scene in Chicago, hunting for the perfect burger that reminds him of his childhood favorite cartoon. This culinary adventure traverses the city's diverse neighborhoods in search of that perfect combination of juicy patty, fresh toppings, and perfectly toasted bun.
                            </p>
                            <p className="text-gray-700">
                                From downtown diners to hidden gems in residential areas, Troy's journey is as much about the people behind the grill as it is about the food they create. Each burger tells a story about Chicago's rich cultural tapestry and the power of food to bring communities together.
                            </p>
                            <div className="mt-auto">
                                <Link href={featuredEntry.slug.startsWith('/') ? featuredEntry.slug : `/troy-williams-journal/${featuredEntry.slug}`} className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 group">
                                    Read Full Article
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Journal Entries */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-black">Latest Articles</h2>
                        <Link href="/troy-williams-journal/all" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
                            View All Articles <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {journalEntries.slice(1).map((entry, index) => (
                            <JournalCard key={index} entry={entry} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}