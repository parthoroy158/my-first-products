'use client';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        src: 'https://i.ibb.co/SL4B6qH/Bag-1.gif',
        alt: 'Slide 1',
    },
    {
        src: 'https://i.ibb.co/KzWwjdnG/item2.gif',
        alt: 'Slide 2',
    },
    {
        src: 'https://i.ibb.co/691xYQS/item-3.png',
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
        <div className='w-full mt-16 pt-2 bg-[#F5F5F5]'> 
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden  md:rounded-xl rounded-xl pt-18 shadow-2xl">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
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
                <div className="absolute top-1/2 left-3 right-3 flex justify-between items-center transform -translate-y-1/2 z-20 px-2 sm:px-4">
                    <button
                        onClick={goToPrev}
                        className="text-white text-xl sm:text-2xl md:text-xl bg-black/40 hover:bg-black/60 hover:scale-105 transition-all duration-300 rounded-full p-2 sm:p-3 shadow-lg"
                        aria-label="Previous Slide"
                    >
                        ❮
                    </button>
                    <button
                        onClick={goToNext}
                        className="text-white text-xl sm:text-2xl md:text-xl bg-black/40 hover:bg-black/60 hover:scale-105 transition-all duration-300 rounded-full p-2 sm:p-3 shadow-lg"
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
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === current
                                ? 'bg-white'
                                : 'bg-gray-400 hover:bg-white/70'
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
