"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla rounded-2xl mx-4" ref={emblaRef}>
      <div className="embla__container aspect-3/2">

      <Image className="embla_slide" width={1200} height={800} alt="Teste" src={"/banners/passeios-noturnos.png"} />

      <Image className="embla_slide" width={1200} height={800} alt="Teste" src={"/banners/passeios-noturnos.png"} />

      <Image className="embla_slide" width={1200} height={800} alt="Teste" src={"/banners/passeios-noturnos.png"} />

      </div>
    </div>
  );
}
