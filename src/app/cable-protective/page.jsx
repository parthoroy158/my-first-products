'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../public/1.jpg';
import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';
import image7 from '../../../public/7.jpg';
import image8 from '../../../public/8.jpg';
import image9 from '../../../public/9.jpg';
import image10 from '../../../public/10.jpg';
import image11 from '../../../public/11.jpg';
import image12 from '../../../public/12.jpg';
import image13 from '../../../public/13.jpg';
import image14 from '../../../public/14.jpg';
import image15 from '../../../public/15.jpg';
import image16 from '../../../public/16.jpg';
import image17 from '../../../public/17.jpg';
import image18 from '../../../public/18.jpg';
import image19 from '../../../public/19.jpg';
import image20 from '../../../public/20.jpg';
import image21 from '../../../public/21.jpg';
import image22 from '../../../public/22.jpg';
import image23 from '../../../public/23.jpg';
import image24 from '../../../public/24.jpg';
import image25 from '../../../public/25.jpg';
import image26 from '../../../public/26.jpg';
import image27 from '../../../public/27.jpg';
import image28 from '../../../public/28.jpg';
import toast from 'react-hot-toast';
import StartNow from '../components/StartNow';
import Head from 'next/head';







const page = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const items = [
        {
            id: 1,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image1,
            product_name: "Nourishing liduo (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "New sections (e.g., testimonials, featured products)?",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 2,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image2,
            product_name: "Cute stars (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 3,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image3,
            product_name: "Milk tea (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "Stock Out"
        },
        {
            id: 4,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image4,
            product_name: "Black violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables(Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 5,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image5,
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 6,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image6,
            product_name: "Avocado (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 7,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image7,
            product_name: "Pink clouds [unpackaged]",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 8,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image8,
            product_name: "Black briquettes [unpackaged",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 9,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image9,
            product_name: "Little green dragon",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 10,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image10,
            product_name: "Hot dog",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 11,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image11,
            product_name: "Faceless man",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 12,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image12,
            product_name: "Cinnamon dog",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 13,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image13,
            product_name: "Blue cat",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 14,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image14,
            product_name: "French fries",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 15,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image15,
            product_name: "Little duck",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 16,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image16,
            product_name: "K cat",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 17,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image17,
            product_name: "Hamburger",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 18,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image18,
            product_name: "Pink love dinosaur",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 19,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image19,
            product_name: "Blue love dinosaur",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 20,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image20,
            product_name: "mickey",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 21,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image21,
            product_name: "Blue sesame street",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 22,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image22,
            product_name: "Red sesame street",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 23,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image23,
            product_name: "Crescent cat",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 24,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image24,
            product_name: "Star dew",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 25,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image25,
            product_name: "Stitch",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 26,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image26,
            product_name: "Shiba inu",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 27,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image27,
            product_name: "Cat paw",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 28,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image28,
            product_name: "Poached egg [without packaging]",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "No guarantee",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        }
    ];

    const filteredItems = items.filter((item) =>
        `${item.product_name} ${item.color} ${item.product_features}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleAddToCart = (id) => {
        const product = items.find(item => item.id === id);
        if (!product) return toast.error('Product not found.');

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex(i => i.id === id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id: product.id,
                product_name: product.product_name,
                price: product.price,
                currency: product.currency,
                image: product.image?.src || '',
                quantity: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success(`${product.product_name} added to cart`);
    };

    return (
        <div className="max-w-7xl mx-auto mt-12 min-h-screen px-4 mb-24">
            <Head>
                <title>Buy Cute Cable Protectors | Kinnun.com</title>
                <meta
                    name="description"
                    content="Explore Kinnun's adorable collection of cable protectors for iPhone, Android, and USB cables. Prevent wire breakage with stylish cartoon accessories!"
                />
                <meta
                    name="keywords"
                    content="cable protectors, USB cable cover, cartoon wire guard, iPhone cable protector, Android USB cover, cute cable accessories, buy wire protectors online, Kinnun.com"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Kinnun Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Buy Cute Cable Protectors | Kinnun.com" />
                <meta
                    property="og:description"
                    content="Protect and personalize your charging cables with Kinnun’s cartoon cable covers — perfect for tech lovers in Bangladesh."
                />
                <meta property="og:url" content="https://kinnun.com/cable-protective" />
                <meta property="og:type" content="product.group" />
                <meta property="og:site_name" content="Kinnun.com" />
                <meta
                    property="og:image"
                    content="https://kinnun.com/og-image/cable-protectors-cover.jpg"
                />
            </Head>

            <StartNow />
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-2xl font-extrabold text-gray-800 tracking-tight leading-tight">
                    ✨ Discover the Cutest Cable Protector Collection
                </h1>
                <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
                    Add personality to your devices with our adorable, colorful, and fun cable protectors.
                </p>
                <div className="mt-4 mx-auto w-24 h-1 bg-emerald-500 rounded-full" />
            </div>

            <div className="mb-12 w-full sm:w-2/3 md:w-1/2 mx-auto relative dark:text-black">
                <input
                    type="text"
                    placeholder="Search cute cable protectors…"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full shadow-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 transition-all duration-300"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 text-lg">
                    🔍
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:scale-[1.015] transition-all duration-300 overflow-hidden"
                        >
                            <Link href={`/cable-protective/${item.id}`}>
                                <figure className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.product_name}
                                        fill
                                        className="object-cover transition duration-300"
                                        priority
                                    />
                                </figure>
                            </Link>

                            <div className="flex flex-col flex-1 px-3 py-2 sm:px-4 sm:py-3 justify-between">
                                <Link href={`/cable-protective/${item.id}`}>
                                    <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                                        {item.product_name}
                                        <span className="ml-1 inline-block px-2 py-0.5 text-[10px] bg-green-100 text-green-600 rounded-full">
                                            New
                                        </span>
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-gray-600 mb-1">
                                        {item.product_features} • Color: {item.color}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.price} {item.currency}
                                    </p>
                                </Link>

                                <div className="flex items-center justify-between mt-2 sm:mt-3 text-[11px] sm:text-xs">
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                                            Simple
                                        </span>
                                        <span
                                            className={`px-2 py-0.5 rounded-full whitespace-nowrap ${item.stock === 'In Stock'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-red-100 text-red-500'
                                                }`}
                                        >
                                            {item.stock}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/cable-protective/${item.id}`}
                                        className="flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-800 transition"
                                    >
                                        <span>Details</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>

                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    disabled={item.stock !== 'In Stock'}
                                    className={`mt-2 sm:mt-3 w-full text-xs sm:text-sm py-2 rounded-md font-semibold transition-all duration-300 ${item.stock === 'In Stock'
                                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {item.stock === 'In Stock' ? '🛒 Add to Cart' : '🚫 Out of Stock'}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-sm py-16">
                        <p className="text-xl mb-2">😕 No results found</p>
                        <p className="text-sm">Try different keywords or clear your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;