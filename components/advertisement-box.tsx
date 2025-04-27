import Image from "next/image"

interface AdvertisementBoxProps {
  width: number | string
  height: number | string
  text?: string
  buttonText?: string
  className?: string
}

export function AdvertisementBox({
  width,
  height,
  text = "ADVERTISEMENT",
  buttonText = "LEARN MORE",
  className = "",
}: AdvertisementBoxProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-md ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/advertisement-watch.png" alt="Advertisement" fill priority className="object-cover" />
      </div>

      {/* Overlay with content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 p-4">
        <p className="text-xs text-white mb-1 font-light">Smart & Responsive</p>
        <p className="text-sm text-white uppercase font-bold mb-4">{text}</p>

        {buttonText && (
          <button className="bg-black text-white text-xs px-6 py-2 rounded hover:bg-gray-800 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}
