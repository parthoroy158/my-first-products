'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const router = useRouter();

    const fetchCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        setCartItems([]);
    };

    useEffect(() => {
        fetchCart();
        window.addEventListener('cartUpdated', fetchCart);
        return () => window.removeEventListener('cartUpdated', fetchCart);
    }, []);

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    useEffect(() => {
        localStorage.setItem('cartTotal', totalAmount.toString());
    }, [totalAmount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleOrder = async (e) => {
        e.preventDefault();

        // 1. Check if the cart is empty
        if (cartItems.length === 0) {
            toast.error('🛒 Your cart is empty!');
            return;
        }

        // 2. Prepare the order data
        const orderData = {
            customer: form,
            cartItems,
            totalAmount,
            createdAt: new Date().toISOString(),
            orderStatus: 'pending',
            paymentStatus: 'unpaid',
            paymentMethod: 'COD',
        };

        try {
            // 3. Make the API request
            const res = await fetch('https://my-first-products.vercel.app/api/carts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderData }),
            });

            const data = await res.json();
            console.log("📦 Order Response:", data);

            // 4. Handle success response
            if (data?.data?.acknowledged) {
                toast.success(" Order Confirmed");
                clearCart();
                if (data?.data?.insertedId) {
                    console.log("🆔 Inserted Order ID:", data?.data?.insertedId);
                    localStorage.setItem("Order_Id", data?.data?.insertedId )
                  
                    router.push(`/confirmOrder/${data?.data?.insertedId}`);
                }
            } else {
                toast.error(`❌ Failed to place order: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            // 5. Handle request errors
            console.error('🚨 Order Error:', error);
            toast.error('Something went wrong while placing the order.');
        }
    };




    return (
        <div className="max-w-6xl mx-auto px-4 py-12 mt-10 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
                {cartItems.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-full shadow-md transition"
                    >
                        🧹 Clear All
                    </button>
                )}
            </div>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    <p className="text-lg">Your cart is currently empty.</p>
                    <Link href="/">
                        <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                            🛍 Continue Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg border"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.product_name}
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover"
                                    />
                                    <Link href={`/cable-protective/${item.id}`} className="hover:underline">
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{item.product_name}</h2>
                                            <p className="text-sm text-gray-500">Price: {item.price} {item.currency}</p>
                                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="text-right font-semibold text-sky-600">
                                    {(item.price * item.quantity).toFixed(2)} {item.currency}
                                </div>
                            </div>
                        ))}

                        <div className="border-t pt-4 mt-6 text-right">
                            <p className="text-lg font-semibold text-gray-700">
                                Total Amount: <span className="text-indigo-600">{totalAmount.toFixed(2)} {cartItems[0]?.currency || 'BDT'}</span>
                            </p>
                        </div>
                    </div>

                    {/* Shipping Form */}
                    <div className="flex justify-end mt-10">
                        <form onSubmit={handleOrder} className="w-full max-w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 border dark:text-black">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">📦 Shipping Details</h2>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-600 ">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-black"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-600 dark:text-black">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. +8801738579393, 017334036556 Add more Numbers"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-600">Your Address</label>
                                <textarea
                                    name="address"
                                    value={form.address}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your complete address"
                                    rows={3}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg font-medium px-5 md:px-6 py-3 rounded-full shadow-md transition hover:scale-105"
                            >
                                🧾 <span>Place Order & Pay</span>
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
