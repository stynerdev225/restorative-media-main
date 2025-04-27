import { Button } from "@/components/ui/button"

export function TournamentBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[120px] rounded-lg overflow-hidden bg-[#0a1a24]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/tournament-banner-image.jpg')",
              filter: "brightness(0.7)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Watch The International Tournament 2017 Live!</h2>
              <p className="text-sm opacity-80">Support your team to be the champion and win big prize!</p>
            </div>
            <div>
              <Button className="bg-red-500 hover:bg-red-600 rounded-full px-6">WATCH NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
