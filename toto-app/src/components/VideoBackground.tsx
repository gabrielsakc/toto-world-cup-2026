import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4'

const FADE_DURATION = 0.5 // seconds

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function tick() {
      if (!video) return
      const t   = video.currentTime
      const dur = video.duration || 0

      if (dur > 0) {
        // Fade in during first FADE_DURATION seconds
        if (t < FADE_DURATION) {
          video.style.opacity = String(t / FADE_DURATION)
        }
        // Fade out during last FADE_DURATION seconds
        else if (t > dur - FADE_DURATION) {
          video.style.opacity = String((dur - t) / FADE_DURATION)
        }
        // Full opacity in between
        else {
          video.style.opacity = '1'
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    function handleEnded() {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => {
        if (!video) return
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    // Kick off
    video.style.opacity = '0'
    video.play().catch(() => {})
    rafRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 0 }}
    />
  )
}
