import { useEffect, useRef } from 'react'

// ─── Flood-fill chroma key ────────────────────────────────────────────────────
// Starts from every edge pixel and "fills" outward — identical to Photoshop's
// Magic Wand / Select-by-Color on the background.
// This correctly keeps the dog's white paws (not connected to the edges) while
// removing the background gray that IS connected to the edges.

const TOLERANCE = 62   // colour-distance cutoff (euclidean RGB)
const FEATHER   = 14   // soft-edge blend width

function floodKey(
  data: Uint8ClampedArray,
  w: number,
  h: number,
  bgR: number,
  bgG: number,
  bgB: number,
) {
  const n       = w * h
  const visited = new Uint8Array(n)          // 1 byte per pixel
  const queue   = new Int32Array(n * 2)      // worst-case all pixels ×4 neighbours, capped
  let head = 0, tail = 0

  // ── Seed: every pixel on the four edges ────────────────────────────────────
  for (let x = 0; x < w; x++) {
    queue[tail++] = x                   // top row
    queue[tail++] = (h - 1) * w + x    // bottom row
  }
  for (let y = 1; y < h - 1; y++) {
    queue[tail++] = y * w               // left col
    queue[tail++] = y * w + (w - 1)    // right col
  }

  // ── BFS ────────────────────────────────────────────────────────────────────
  while (head < tail) {
    const idx = queue[head++]
    if (visited[idx]) continue
    visited[idx] = 1

    const p  = idx << 2                 // idx * 4
    const dr = data[p]     - bgR
    const dg = data[p + 1] - bgG
    const db = data[p + 2] - bgB
    const dist = Math.sqrt(dr * dr + dg * dg + db * db)

    if (dist >= TOLERANCE) continue     // foreground pixel — stop spreading here

    // Make transparent (with soft feather near the edge)
    if (dist <= TOLERANCE - FEATHER) {
      data[p + 3] = 0
    } else {
      data[p + 3] = Math.round(
        ((dist - (TOLERANCE - FEATHER)) / FEATHER) * 255,
      )
    }

    // Push 4-connected neighbours
    const x = idx % w
    const y = (idx / w) | 0
    if (x > 0)     queue[tail++] = idx - 1
    if (x < w - 1) queue[tail++] = idx + 1
    if (y > 0)     queue[tail++] = idx - w
    if (y < h - 1) queue[tail++] = idx + w
  }
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function TotoVideoCanvas({
  src   = '/video/toto.mp4',
  style = {} as React.CSSProperties,
}) {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  // Persists across renders without causing re-renders
  const state = useRef({ bg: [235, 235, 235] as [number, number, number], ready: false })

  useEffect(() => {
    const video  = videoRef.current!
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d', { willReadFrequently: true })!

    const MAX_W   = 640   // process at this width max (saves CPU)
    let   tick    = 0

    function process() {
      tick++
      rafRef.current = requestAnimationFrame(process)

      if (tick % 2 !== 0)    return   // ~30 fps
      if (video.readyState < 2) return

      // ── One-time initialisation once we know video dimensions ────────────
      if (!state.current.ready && video.videoWidth > 0) {
        const scale    = Math.min(1, MAX_W / video.videoWidth)
        canvas.width   = Math.round(video.videoWidth  * scale)
        canvas.height  = Math.round(video.videoHeight * scale)

        // Draw one frame, sample the 4 corners for background colour
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        const cw = canvas.width, ch = canvas.height
        const pts = [
          ctx.getImageData(2,      2,      1, 1).data,
          ctx.getImageData(cw - 3, 2,      1, 1).data,
          ctx.getImageData(2,      ch - 3, 1, 1).data,
          ctx.getImageData(cw - 3, ch - 3, 1, 1).data,
        ]
        state.current.bg = [
          Math.round(pts.reduce((s, d) => s + d[0], 0) / 4),
          Math.round(pts.reduce((s, d) => s + d[1], 0) / 4),
          Math.round(pts.reduce((s, d) => s + d[2], 0) / 4),
        ]
        state.current.ready = true
        console.log('[TotoVideo] background colour detected:', state.current.bg)
      }

      if (!state.current.ready) return

      // ── Draw frame → key → put back ────────────────────────────────────────
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const [bgR, bgG, bgB] = state.current.bg
      floodKey(imgData.data, canvas.width, canvas.height, bgR, bgG, bgB)
      ctx.putImageData(imgData, 0, 0)
    }

    process()
    return () => cancelAnimationFrame(rafRef.current)
  }, [src])

  return (
    <>
      {/* Hidden source video — drives the canvas */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ display: 'none' }}
      />

      {/* Transparent canvas — only the dog + flag remain */}
      <canvas
        ref={canvasRef}
        style={{
          height: '100%',
          width:  'auto',
          filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.75))',
          ...style,
        }}
      />
    </>
  )
}
