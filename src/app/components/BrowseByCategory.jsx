import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/1.jpg'
import Link from 'next/link';

const BrowseByCategory = () => {

    return (
        <div>
            <div className='rounded-full mt-10'>
                <p className='font-bold text-2xl'>Browse by categories</p>
            </div>
            <Link href='/cable-protective'>
                <div className="w-32 mt-3 group cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="rounded-full overflow-hidden shadow-sm border-2 border-transparent group-hover:border-blue-200 transition duration-300">
                        <Image
                            className="rounded-full object-cover w-full h-full"
                            src={image1}
                            alt="Cable Protective"
                        />
                    </div>
                    <p className="text-center mt-2 text-gray-700 font-medium group-hover:text-blue-400 transition duration-300 hover:underline">
                        Cable-Protective
                    </p>
                </div>
            </Link>

        </div>
    );
};

export default BrowseByCategory;