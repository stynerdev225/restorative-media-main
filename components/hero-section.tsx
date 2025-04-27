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

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/urban-panorama.png')",
          filter: "brightness(0.7)",
        }}
      >
        <img
          src="/professional-recording-studio.png"
          alt="Professional Recording Studio"
          className="absolute bottom-0 right-0 h-full max-h-[80%] object-contain z-10 opacity-80"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <div className="mb-2 sm:mb-4 bg-black/30 rounded-full p-2 sm:p-4">
          <Play className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-2">
          RESTORATIVE MEDIA
        </h1>
        <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-8 tracking-widest">
          PREMIUM VIDEO MAGAZINE & VLOG PLATFORM
        </p>
        <Button className="bg-restorative-gold hover:bg-restorative-gold/90 text-white uppercase tracking-wider">
          Watch Videos
        </Button>
      </div>
    </section>
  )
}
