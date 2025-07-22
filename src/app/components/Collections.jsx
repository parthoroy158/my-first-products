'use client';
import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/1.jpg';
import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';

import Link from 'next/link';

const Collections = () => {
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
            image: image6,
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
        
    ];


    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold mb-6">Collections</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {items.map((item, index) => (
                    <Link href={`/cable-protective/${item.id}`} key={index}>
                        <div className="card h-full flex flex-col bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg border border-gray-200">
                            <figure className="relative w-full h-36 md:h-40">
                                <Image
                                    src={item.image}
                                    alt={item.product_name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-t-lg"
                                    priority
                                />
                            </figure>

                            <div className="card-body px-3 py-2 flex flex-col justify-between flex-1">
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

                                <div className="card-actions mt-2 flex-wrap gap-1 justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="badge bg-pink-100 text-pink-600 badge-xs">{item.winder_style}</div>
                                        <div className={`badge badge-xs ${item.stock === "In Stock" ? "bg-green-100 text-green-600" : "bg-pink-100 text-pink-600"}`}>{item.stock}
                                        </div>

                                    </div>
                                    <div>
                                        <p className="badge bg-indigo-100 text-indigo-600 badge-md font-bold">Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Link href="/cable-protective">
                    <p className="text-xl btn btn-ghost border-b-2 border-b-sky-500 rounded-md transition-all duration-300 ease-in-out hover:bg-sky-100 hover:text-sky-700 hover:scale-105">
                        View All
                    </p>
                </Link>
            </div>


        </div>
    );
};

export default Collections;
