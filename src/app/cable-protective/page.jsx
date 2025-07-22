'use client';

import React from 'react';
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
import toast from 'react-hot-toast';

const page = () => {
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
            after_sales_service: "Store three guarantees",
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
            product_name: "Avocado (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            after_sales_service: "Store three guarantees",
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
            after_sales_service: "Store three guarantees",
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
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
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
            product_name: "White violent bear (unpackaged)",
            winder_type: "Data cable protective cover",
            winder_style: "Simple",
            material: "Reeler",
            size: "Consult customer service",
            applicable_products: "Suitable for both data cables (Android + Apple)",
            packing_list: "Consult customer service",
            after_sales_service: "Store three guarantees",
            color: "Cat paw",
            cross_border_special_supply: false,
            product_features: "Cartoon",
            stock: "In Stock"
        }
    ];



    const handleAddToCart = (id) => {
        const product = items.find(item => item.id === id);
        if (!product) {
            toast.error('Product not found.');
            return;
        }

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
        // You can optionally route to cart here: router.push('/cart');
    };

    return (
        <div className="max-w-7xl mx-auto mt-16 min-h-screen px-4 dark:text-black mb-15">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
                {items.map((item) => (
                    <div key={item.id} className="card h-full flex flex-col bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg border border-gray-200">
                        <figure className="relative w-full h-36 md:h-40">
                            <Image
                                src={item.image}
                                alt={item.product_name || "Product image"}
                                fill
                                className="object-cover rounded-t-lg"
                                priority
                            />
                        </figure>

                        <div className="card-body px-3 py-2 flex flex-col justify-between flex-1">
                            <Link href={`/cable-protective/${item.id}`}>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                                        {item.product_name}
                                        <span className="badge badge-success badge-xs">New</span>
                                    </h2>

                                    <p className="text-xs text-gray-600 mt-1 leading-snug">
                                        {item.product_features} design, made from {item.material}. Color: {item.color}.
                                    </p>

                                    <div className="text-xs font-medium mt-1">
                                        Price: {item.price} {item.currency}
                                    </div>
                                </div>
                            </Link>

                            <div className="card-actions mt-2 flex-wrap gap-2 justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="badge bg-pink-100 text-pink-600 badge-xs">{item.winder_style}</div>
                                    <div className={`badge badge-xs ${item.stock === "In Stock" ? "bg-green-100 text-green-600" : "bg-pink-100 text-pink-600"}`}>
                                        {item.stock}
                                    </div>
                                </div>
                                <Link href={`/cable-protective/${item.id}`}>
                                    <p className="badge bg-indigo-100 text-indigo-600 badge-md font-bold">Details</p>
                                </Link>
                            </div>

                            <div>
                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    disabled={item.stock !== 'In Stock'}
                                    className={`w-full mt-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${item.stock === 'In Stock'
                                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    {item.stock === 'In Stock' ? '🛒 Add to Cart' : '🚫 Out of Stock'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
