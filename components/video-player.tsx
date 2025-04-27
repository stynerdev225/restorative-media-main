"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  thumbnailUrl: string
  title: string
}

export function VideoPlayer({ videoId, thumbnailUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative w-full aspect-video bg-black">
      {/* Video Thumbnail */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${thumbnailUrl})`,
          opacity: isPlaying ? 0 : 1,
        }}
      ></div>

      {/* Play Button Overlay (only when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-restorative-gold/80 flex items-center justify-center transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white fill-white" />
          </button>
        </div>
      )}

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between text-white flex-wrap gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={handlePlayPause} className="hover:text-restorative-gold">
              {isPlaying ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            <button className="hover:text-restorative-gold hidden sm:block">
              <SkipBack className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button className="hover:text-restorative-gold hidden sm:block">
              <SkipForward className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="text-xs sm:text-sm font-medium">2:14 / 8:32</div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handleMuteToggle} className="hover:text-restorative-gold">
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <button className="hover:text-restorative-gold">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-restorative-gold w-1/4 rounded-full"></div>
        </div>
      </div>

      {/* Video Title Overlay */}
      <div className="absolute top-4 left-4 right-4 text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold drop-shadow-md">{title}</h2>
      </div>
    </div>
  )
}
