'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import image1 from '../../../../public/1.jpg';
import image2 from '../../../../public/2.jpg';
import image3 from '../../../../public/3.jpg';
import image4 from '../../../../public/4.jpg';
import image5 from '../../../../public/5.jpg';
import image6 from '../../../../public/6.jpg';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const page = ({ params }) => {
    const route = useRouter()
    const [quantity, setQuantity] = useState(1);
    const id = Number(params.id);

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
            product_features: "Cartoon",
            stock: "In Stock"
        },
        {
            id: 6,
            brand: "Other",
            price: 50,
            currency: "BDT",
            image: image2,
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

    const product = items.find(item => item.id === id);
    if (!product) return <div className="text-center mt-16 text-red-600 text-xl">Product not found.</div>;

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const handleAddToCart = () => {
        if (!product) return;

        const newItem = {
            id: product.id,
            product_name: product.product_name,
            price: product.price,
            currency: product.currency,
            image: product.image?.src || '',
            quantity,
        };

        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = existingCart.findIndex(item => item.id === newItem.id);

        if (itemIndex !== -1) {
            existingCart[itemIndex].quantity += quantity;
        } else {
            existingCart.push(newItem);
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));
        toast.success(`Added ${quantity} x ${product.product_name} to cart`);
        route.push('/cart');
    };


    const isOutOfStock = product.stock === "Stock Out";

    return (
        <div className="max-w-6xl mx-auto py-12 mt-16 min-h-screen px-4">
            <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-2 gap-10 items-start">
                {/* Image */}
                <div className="w-full rounded-lg overflow-hidden border aspect-square relative">
                    <Image
                        src={product.image}
                        alt={product.product_name}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                {/* Info */}
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-bold text-gray-900">{product.product_name}</h1>
                        <div className={`badge px-3 py-1 rounded-full w-25 text-xs ${isOutOfStock ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {product.stock}
                        </div>
                    </div>

                    <p className="text-xl text-sky-600 font-semibold">
                        {product.currency} {product.price}
                    </p>
                    <p className="text-sm text-gray-600">{product.product_features} | {product.winder_type}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <p><span className="font-medium">Brand:</span> {product.brand}</p>
                        <p><span className="font-medium">Color:</span> {product.color}</p>
                        <p><span className="font-medium">Material:</span> {product.material}</p>
                        <p><span className="font-medium">Size:</span> {product.size}</p>
                        <p><span className="font-medium">Applicable:</span> {product.applicable_products}</p>
                        <p><span className="font-medium">Winder Style:</span> {product.winder_style}</p>
                        <p><span className="font-medium">After-sales:</span> {product.after_sales_service}</p>
                        <p><span className="font-medium">Packing List:</span> {product.packing_list}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 border-t pt-4">
                        {/* Quantity Control */}
                        <div>
                            <span className="block text-sm font-medium text-black mb-1">Quantity:</span>
                            <div className="flex items-center border border-gray-300 px-3 py-1 rounded-full bg-gray-50">
                                <button onClick={decrement} className="text-xl font-bold px-2 text-black">−</button>
                                <span className="w-8 text-center text-black">{quantity}</span>
                                <button onClick={increment} className="text-xl font-bold px-2 text-black">+</button>
                            </div>
                        </div>

                        {/* Total Price */}
                        <div className="text-sm sm:text-base font-semibold text-gray-800">
                            Total Payable: <span className="text-sky-600">{(quantity * product.price).toFixed(2)} {product.currency}</span>
                        </div>
                    </div>


                    {/* Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`mt-4 w-full md:w-auto px-6 py-3 rounded-full text-white font-semibold transition duration-300 ${isOutOfStock
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md'
                            }`}
                    >
                        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
