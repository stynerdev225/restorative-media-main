// Developed by Stiner.dev
// Professional Web Developer
// Date: April 26, 2025
// Contact: stiner.dev

// Project: RESTORATIVE MEDIA Website
// Client: Troy Williams (Owner of RESTORATIVE MEDIA)

// Project Overview:
// "Restorative Media" is a multimedia content platform featuring articles, videos, and vlogs focused on technology, gaming, food, movies, sports, and music. 
// Key features include user authentication, subscription plans, content pitching, journal entries, and channel-based organization. 
// Built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and optimized for responsive, cross-platform performance.

// Disclaimer:
// This website was developed by Stiner.dev as a personal favor, without financial compensation or formal employment. 
// Development is provided "as-is" with no warranties or guarantees of future maintenance, security, or legal compliance. 
// Stiner.dev assumes no responsibility for copyright, licensing, or legal issues arising from the client's content, images, branding, or assets. 
// The client, Troy Williams and RESTORATIVE MEDIA, is solely responsible for ensuring all necessary rights, licenses, and security practices are upheld after project delivery.
// Stiner.dev is not liable for future updates, content management, hacking, or misuse post-handoff.

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { FeaturedVideos } from "@/components/featured-videos"
import { TournamentBanner } from "@/components/tournament-banner"
import { GamersSection } from "@/components/gamers-section"
import { GamingNews } from "@/components/gaming-news"
import { MovieTVSection } from "@/components/movie-tv-section"
import { PopularChannels } from "@/components/popular-channels"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 sm:px-0">
        <HeroSection />
        <AdvertisementBanner />
        <FeaturedVideos />
        <TournamentBanner />
        <GamersSection />
        <GamingNews />
        <MovieTVSection />
        <PopularChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
