'use client'
import React, { ImgHTMLAttributes } from 'react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

interface Image extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

interface CarouselProps {
  images: Image[];
}

const fourth: React.FC<CarouselProps> = ({ images }) => {
  console.log(images)
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen">
      <div className="carousel ">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentSlide}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img src={image.src} alt={`Slide ${index + 1}`} className="max-h-full max-w-full object-contain" />
          </Transition>
        ))}
      </div>

      <div className="carousel-indicators absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full focus:outline-none focus:ring-2 ${
              index === currentSlide ? 'bg-blue-500 ring-blue-400' : 'bg-gray-300 ring-transparent'
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default fourth