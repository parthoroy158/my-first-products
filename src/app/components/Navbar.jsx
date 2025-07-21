'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';
import imageLogo from '../../../public/logo sticker (1).png';

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
                                        <li>
                                            <Link href="/cable-protective">Cable Protective</Link>
                                        </li>
                                        <li>
                                            <Link href="/products/submenu-2">Added Soon More</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link href="/aboutUs" className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</Link>
                            </li>
                            {orderId && (
                                <li>
                                    <Link href={`/confirmOrder/${orderId}`} className={isActive(`/confirmOrder/${orderId}`) ? 'text-primary font-bold' : ''}>My Order</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={imageLogo} alt="Logo" width={40} height={40} />
                        <span className="btn btn-ghost text-xl">kinnun.com</span>
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
                                    <li>
                                        <Link href="/cable-protective">Cable Protective</Link>
                                    </li>
                                    <li>
                                        <Link href="/products/submenu-2">Submenu 2</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/aboutUs" className={isActive('/aboutUs') ? 'text-primary font-bold' : ''}>About Us</Link>
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
                    <Link href="/cart" className="flex items-center gap-1">
                        <BsCart3 className="text-2xl" />
                        <span className="text-red-500">+{cartItems.length}</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
