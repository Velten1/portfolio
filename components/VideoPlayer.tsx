'use client'

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-16">
      <video
        src={src}
        controls
        className="w-full h-auto"
        preload="metadata"
        aria-label={`Vídeo: ${title}`}
      >
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    </div>
  )
}

