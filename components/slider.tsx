"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({stopOnInteraction: false, delay: 4000})]);

  return (
    <div className="embla rounded-2xl" ref={emblaRef}>
      <div className="embla__container aspect-3/2">

      <Image loading="eager" className="embla_slide w-full h-full" width={1200} height={800} alt="Teste" src={"/banners/passeios-noturnos.png"} />

      <Image loading="eager" className="embla_slide w-full h-full" width={1200} height={800} alt="Teste" src={"/banners/pet-shops.png"} />

      </div>
    </div>
  );
}
