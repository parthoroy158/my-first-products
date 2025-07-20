'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';
import imageLogo from '../../../public/logo sticker (1).png'

const Navbar = () => {
    const pathname = usePathname();
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

    const isActive = (href) => pathname === href;

    return (
        <div className="w-full bg-base-100 dark:bg-white shadow-sm fixed top-0 z-50 dark:text-black">
            <div className="navbar max-w-7xl mx-auto bg-base-100 dark:bg-white">

                {/* Start: Mobile + Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-white rounded-box w-50 z-[999]"
                        >
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className={isActive('/') ? 'text-primary font-bold' : ''}>Home</a>
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Items
                                    <svg
                                        className="fill-current ml-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/cable-protective" legacyBehavior>
                                            <a>Cable Protective</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/submenu-2" legacyBehavior>
                                            <a>Added Soon More</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/aboutUs" legacyBehavior>
                                    <a className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" legacyBehavior>
                        <div className='flex'>
                            <a className="btn btn-ghost text-xl">kinnun.com</a>
                            {/* <Image className='w-20' src= {imageLogo} /> */}

                        </div>
                    </Link>
                </div>

                {/* Center: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className={isActive('/') ? 'text-primary font-bold' : ''}>Home</a>
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Items</summary>
                                <ul className="p-2 dark:bg-white bg-base-100 w-45 ">
                                    <li className='w-full'>
                                        <Link href="/cable-protective" legacyBehavior>
                                            <a>Cable Protective</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/submenu-2" legacyBehavior>
                                            <a>Submenu 2</a>
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/aboutUs" legacyBehavior>
                                <a className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <Link href='/cart'>
                        <div className='flex items-center'>

                            <BsCart3 className='text-2xl' />
                            <p className='text-red-500'>+{cartItems.length}</p>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
