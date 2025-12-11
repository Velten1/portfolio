'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-16">
        <div
          className="relative w-full h-full cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority={currentIndex === 0}
          />
        </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Clique fora da imagem ou pressione ESC para fechar
          </div>
        </div>
      )}
    </>
  )
}

