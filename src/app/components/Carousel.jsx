'use client';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        src: 'https://i.ibb.co/SL4B6qH/Bag-1.gif',
        alt: 'Slide 1',
    },
    {
        src: 'https://i.ibb.co/SL4B6qH/Bag-1.gif',
        alt: 'Slide 2',
    },
    {
        src: 'https://i.ibb.co/SL4B6qH/Bag-1.gif',
        alt: 'Slide 3',
    },
    {
        src: 'https://i.ibb.co/SL4B6qH/Bag-1.gif',
        alt: 'Slide 4',
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(interval);
    }, [length]);

    const goToPrev = () => {
        setCurrent((prev) => (prev - 1 + length) % length);
    };

    const goToNext = () => {
        setCurrent((prev) => (prev + 1) % length);
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl ">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 pt-16 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                >
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2 z-20">
                <button
                    onClick={goToPrev}
                    className=" text-white hover:text-2xl hover:rounded-2xl opacity-75 shadow-md"
                    aria-label="Previous Slide"
                >
                    ❮
                </button>
                <button
                    onClick={goToNext}
                    className=" opacity-75 text-white hover:text-2xl hover:rounded-2xl hover:h-full shadow-md"
                    aria-label="Next Slide"
                >
                    ❯
                </button>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-primary' : 'bg-gray-400 hover:bg-primary/50'
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
