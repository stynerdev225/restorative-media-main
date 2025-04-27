interface AdvertisementBannerProps {
  className?: string;
}

export function AdvertisementBanner({ className = "" }: AdvertisementBannerProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto my-6 px-4 ${className}`}>
      <div className="relative w-full h-[70px] sm:h-[90px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden flex items-center justify-between px-3 sm:px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
        <div className="text-white">
          <div className="text-xs sm:text-sm">Smart & Responsive</div>
          <div className="text-base sm:text-xl font-bold">ADVERTISEMENT</div>
        </div>
        <div className="text-white text-lg sm:text-2xl font-bold">728×90</div>
      </div>
    </div>
  )
}
