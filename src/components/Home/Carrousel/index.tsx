"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "promo",
      content: {
        tag: "Melhores ofertas personalizadas",
        title: "Queima de estoque Nike",
        emoji: "🔥",
        description:
          "Consequat culpa exercitation mollit nisl excepteur do do tempor laboris eiusmod irure consectetur.",
        buttonText: "Ver Ofertas",
        image: "/nike-shoe.png",
      },
    },
    {
      type: "image",
      content: {
        src: "/home-slide-1.jpeg",
        alt: "Product showcase 1",
      },
    },
    {
      type: "image",
      content: {
        src: "/home-slide-2.jpeg",
        alt: "Product showcase 2",
      },
    },
    {
      type: "image",
      content: {
        src: "/home-slide-3.jpeg?height=auto&width=full",
        alt: "Product showcase 3",
      },
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 12000);
    return () => clearInterval(timer);
  }, [nextSlide]); 

  return (
    <div className="relative w-full mx-auto rounded-2xl overflow-hidden">
      <div className="relative h-[681px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              {slide.type === "promo" ? (
                <div className="flex flex-col md:flex-row items-center justify-between h-full py-6 md:py-8">
                  <div className="flex-1 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                    <div className="relative">
                      <Image
                        src={slide.content.image || "/placeholder.svg"}
                        alt="Nike Shoe"
                        width={700}
                        height={400}
                        className="w-[400px] h-[300px] xl:w-full xl:h-full object-contain transform hover:scale-105 transition-transform duration-300 -rotate-[19.34rad]"
                      />
                    </div>
                    <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-36 md:h-36 z-10">
                      <Image src="/dot.svg" alt="Decoração" width={144} height={144} />
                    </div>
                  </div>
                  
                  <div className="flex-1 max-w-md order-2 md:order-1 text-center md:text-left">
                    <div className="inline-block text-orange-400 font-bold text-[16px] text-xs px-3 py-1 rounded-full mb-4">
                      {slide.content.tag}
                    </div>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                      {slide.content.title}{" "}
                      <span className="text-xl md:text-6xl">
                        {slide.content.emoji}
                      </span>
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed font-normal text-sm md:text-base">
                      {slide.content.description}
                    </p>

                    <button className="w-full md:w-auto xl:w-56 bg-primary hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                      {slide.content.buttonText}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full p-4 md:p-8">
                  <Image
                    src={slide.content.src || "/placeholder.svg"}
                    alt={slide.content.alt || "Foto Sapato Nike"}
                    width={800}
                    height={600}
                    quality={95}
                    priority={index === 0}
                    className="w-full h-[90%] object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-primary scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}