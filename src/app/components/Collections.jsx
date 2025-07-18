'use client';
import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/1.jpg';

const Collections = () => {
    return (
        <div className="py-10 px-4">
            <h1 className="text-3xl text-center font-bold mb-8">Collections</h1>

            <div className="flex">
                <div className="card w-64 bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl border border-gray-100">
                    <figure className="relative h-40">
                        <Image
                            src={image1}
                            alt="Collection item"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-xl"
                            priority
                        />
                    </figure>
                    <div className="card-body px-4 py-3">
                        <h2 className="text-base font-semibold flex items-center gap-2 text-gray-800">
                            Elegant Wear
                            <span className="badge badge-success badge-sm">New</span>
                        </h2>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            Timeless, comfortable, and ready for every day. Discover style that suits you.
                        </p>
                        <div className="card-actions mt-3 justify-start gap-2">
                            <div className="badge bg-indigo-100 text-indigo-600 badge-sm">Fashion</div>
                            <div className="badge bg-pink-100 text-pink-600 badge-sm">Men</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Collections;
