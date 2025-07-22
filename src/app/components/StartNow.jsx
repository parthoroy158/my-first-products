"use client"
import React from 'react';

const StartNow = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: window.scrollY + 500, 
            behavior: 'smooth'
        })
    }

    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto mt-15 bg-blue-100 md:h-35  rounded-2xl'>
                <div className='md:flex justify-between p-10 items-center'>
                    <div>
                        <p className='font-bold text-2xl'>Shop Happy — Safe Payments</p>  <p className='mb-5'>On-Time Deliveries</p>
                    </div>
                    <div className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95" onClick={handleScroll}>
                        Start Now
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StartNow;