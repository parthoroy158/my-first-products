'use client';
import logo from '../../../public/ChatGPT Image Jul 24, 2025, 11_10_12 AM.png'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';




const Navbar = () => {
    const pathname = usePathname();
    const [orderId, setOrderId] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = () => {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItems(storedCart);
        };

        fetchCart();
        window.addEventListener('cartUpdated', fetchCart);

        return () => window.removeEventListener('cartUpdated', fetchCart);
    }, []);

    useEffect(() => {
        const id = localStorage.getItem('Order_Id');
        setOrderId(id);
    }, []);

    const isActive = (href) => pathname === href;

    return (
        <div className="w-full bg-base-100 dark:bg-white shadow-sm fixed top-0 z-50 dark:text-black">
            <div className="navbar max-w-7xl mx-auto bg-base-100 dark:bg-white">

                {/* Mobile + Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-white rounded-box w-52 z-[999]">
                            <li>
                                <Link href="/" className={isActive('/') ? 'text-primary font-bold' : ''}>Home</Link>
                            </li>
                            <li>
                                <details>
                                    <summary>Items</summary>
                                    <ul className="p-2">
                                        <li className='w-full'>
                                            <Link href="/cable-protective">Cable Protective</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/products/submenu-2">Added Soon More</Link>
                                        </li> */}
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link href="/aboutUs" className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</Link>
                            </li>
                            <li>
                                <Link href="/contactUs" className={isActive('/contactUs') ? 'text-primary font-bold' : ''}>Contact Us</Link>
                            </li>
                            {orderId && (
                                <li>
                                    <Link href={`/confirmOrder/${orderId}`} className={isActive(`/confirmOrder/${orderId}`) ? 'text-primary font-bold' : ''}>My Order</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Logo" width={50} height={40} />
                        <div className="text-center">
                            {/* <img src={logo} alt="" /> */}
                           
                            <h1 className="text-xl font-extrabold text-green-700 tracking-tight">
                                {/* কিনুন<span className="text-gray-500"></span> */}
                            </h1>
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" className={isActive('/') ? 'text-primary font-bold' : ''}>Home</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Items</summary>
                                <ul className="p-2 bg-base-100 dark:bg-white">
                                    <li className='w-35'>
                                        <Link href="/cable-protective">Cable Protective</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/products/submenu-2">Submenu 2</Link>
                                    </li> */}
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/aboutUs" className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</Link>
                        </li>
                        <li>
                            <Link href="/contactUs" className={isActive('/contactUs') ? 'text-primary font-bold' : ''}>Contact Us</Link>
                        </li>
                        {orderId && (
                            <li>
                                <Link href={`/confirmOrder/${orderId}`} className={isActive(`/confirmOrder/${orderId}`) ? 'text-primary font-bold' : ''}>My Order</Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Cart */}
                <div className="navbar-end">
                    <Link
                        href="/cart"
                        className="relative group flex items-center gap-2 px-4 py-2 rounded-full   bg-white/80 hover:border-red-400 hover:bg-white/90 backdrop-blur-md transition-all duration-300  hover:shadow-lg hover:scale-105"
                    >
                        <BsCart3 className="text-2xl text-gray-700 group-hover:text-red-500 transition-transform duration-300 group-hover:scale-110" />

                        {/* Premium floating badge */}
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-2 text-[11px] bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md ring-2 ring-white">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                </div>




            </div>
        </div>
    );
};

export default Navbar;
