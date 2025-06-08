'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type CarrosselProps = {
  images: string[];
};

export default function Carousel({ images }: CarrosselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    if (pause || !slider.current) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(timer.current!);
  }, [pause, slider]);

  // Atualize o slider se o número de imagens mudar
  useEffect(() => {
    slider.current?.update();
  }, [images.length, slider]);

  // Se não houver imagens, não renderiza nada
  if (!images || images.length === 0) {
    return (
      <div className="w-full flex justify-center items-center h-[420px] text-gray-400">
        Nenhuma imagem para exibir.
      </div>
    );
  }

  return (
    <div
      className="relative group w-full px-4 md:px-10 xl:px-28 mt-8"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div
        ref={sliderRef}
        className="keen-slider rounded-2xl overflow-hidden shadow-lg"
        style={{ height: 420 }}
      >
        {images.map((src, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <div className="relative w-full h-[420px]">
              <Image
                src={src}
                alt={`Banner ${idx + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "center" }}
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Setas */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-500 rounded-full p-2 shadow transition hidden group-hover:block z-10"
        aria-label="Anterior"
        type="button"
      >
        &#8592;
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-500 rounded-full p-2 shadow transition hidden group-hover:block z-10"
        aria-label="Próximo"
        type="button"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full border-2 border-pink-200 ${
              currentSlide === idx ? "bg-pink-500" : "bg-white/70"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}