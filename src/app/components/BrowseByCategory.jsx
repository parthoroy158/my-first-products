import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import image1 from '../../../public/1.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';

// Category data with unique links
const categories = [
    { img: image1, label: 'Cable Protectors', href: '/cable-protective' },
  
];

const BrowseByCategory = () => {
    return (
        <div className="mt-10">
            {/* Section Title */}
            <div className="mb-4">
                <h2 className="font-bold text-2xl text-gray-800">🔍 Browse by Categories</h2>
            </div>

            {/* Carousel */}
            <div className="overflow-x-auto">
                <div className="flex gap-5 w-max px-1 sm:px-2 pb-3 scroll-smooth">
                    {categories.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <div className="w-32 flex-shrink-0 group cursor-pointer transition-transform duration-300 transform hover:scale-105">
                                <div className="rounded-full overflow-hidden shadow border-2 border-transparent group-hover:border-blue-300 transition duration-300">
                                    <Image
                                        src={item.img}
                                        alt={item.label}
                                        width={128}
                                        height={128}
                                        className="rounded-full object-cover w-full h-full"
                                    />
                                </div>
                                <p className="text-center mt-2 text-sm text-gray-700 font-medium group-hover:text-blue-500 transition hover:underline">
                                    {item.label}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseByCategory;
