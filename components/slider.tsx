// components/slider.tsx

"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type SliderProps = {
  className?: string;
};

const slides = [
  { src: "/banners/passeios-noturnos.png", alt: "Passeios noturnos com seu pet" },
  { src: "/banners/pet-shops.png", alt: "Pet shops parceiros" },
];

export function Slider({ className }: SliderProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false, delay: 4000 }),
  ]);

  return (
    <div
      className={`embla rounded-2xl overflow-hidden ${className}`}
      ref={emblaRef}
      aria-label="Banners promocionais"
    >
      <div className="embla__container aspect-3/2">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            priority={index === 0}
            className="embla_slide w-full h-full object-cover"
            width={1200}
            height={800}
            alt={slide.alt}
            src={slide.src}
          />
        ))}
      </div>
    </div>
  );
}