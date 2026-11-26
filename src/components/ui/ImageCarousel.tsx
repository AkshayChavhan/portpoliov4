'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  // [index, direction]: direction 1 = moving forward, -1 = moving back
  const [[current, direction], setState] = useState<[number, number]>([0, 0]);
  const reduceMotion = useReducedMotion();

  const prev = () =>
    setState(([c]) => [c === 0 ? images.length - 1 : c - 1, -1]);
  const next = () =>
    setState(([c]) => [c === images.length - 1 ? 0 : c + 1, 1]);
  const goTo = (i: number) =>
    setState(([c]) => (i === c ? [c, 0] : [i, i > c ? 1 : -1]));

  const offset = reduceMotion ? 0 : 60;
  const variants = {
    enter: (dir: number) => ({ x: dir * offset, opacity: 0, scale: reduceMotion ? 1 : 1.02 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir * -offset, opacity: 0, scale: reduceMotion ? 1 : 0.98 }),
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          className="absolute inset-0"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.45 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.45 },
          }}
        >
          <Image
            src={images[current]}
            alt={`${alt} - ${current + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute z-10 left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute z-10 right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute z-10 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: i === current ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                  transform: i === current ? 'scale(1.25)' : 'scale(1)',
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
