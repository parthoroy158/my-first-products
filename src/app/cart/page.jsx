'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { BsTrash3Fill } from 'react-icons/bs';
import Head from 'next/head';


const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });
    const router = useRouter();

    useEffect(() => {
        const fetchCart = () => {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItems(storedCart);
        };

        fetchCart();
        window.addEventListener('cartUpdated', fetchCart);
        return () => window.removeEventListener('cartUpdated', fetchCart);
    }, []);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        localStorage.setItem('cartTotal', totalAmount.toString());
    }, [totalAmount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const updateQuantity = (id, newQty) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
        toast.success('Item removed');
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        setCartItems([]);
    };

    const handleOrder = async (e) => {
        e.preventDefault();
        if (cartItems.length === 0) return toast.error('🛒 Your cart is empty!');

        setLoading(true);
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
            const res = await fetch('https://www.kinnun.com/api/carts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderData }),
            });

            const data = await res.json();
            if (data?.data?.acknowledged) {
                toast.success('Order Confirmed');
                clearCart();
                const orderId = data?.data?.insertedId;
                if (orderId) {
                    localStorage.setItem('Order_Id', orderId);
                    router.push(`/confirmOrder/${orderId}`);
                }
            } else {
                toast.error(`❌ Order failed: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('🚨 Order Error:', error);
            toast.error('Something went wrong while placing the order.');
        } finally {
            setLoading(false);
        }
    };




    return (
        <div className="max-w-6xl mx-auto px-4 py-12 mt-10 min-h-screen">
            <Head>
                <title>Cart</title>
                <meta name="description" content="Trying to learn as best as I can" />
                <meta name="keywords" content="Next.js, React, JavaScript" />
            </Head>
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

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-16 px-4">
                    <div className="text-5xl mb-4">🛒</div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h2>
                    <p className="text-sm text-gray-500 max-w-md">
                        Looks like you haven’t added anything to your cart yet. Explore our collection and find something you love!
                    </p>

                    <Link href="/">
                        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-md transition-all duration-300 hover:from-indigo-600 hover:to-indigo-700 hover:shadow-xl hover:scale-105 transform">
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
                                    <div>
                                        <Link href={`/cable-protective/${item.id}`} className="hover:underline">
                                            <h2 className="text-lg font-semibold text-gray-800">{item.product_name}</h2>
                                        </Link>
                                        <p className="text-sm text-gray-500">Price: {item.price} {item.currency}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="bg-gray-200 px-2 rounded text-lg font-bold hover:bg-gray-300 dark:text-black"
                                                disabled={item.quantity <= 1}
                                            >–</button>
                                            <span className="px-2 text-black">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="bg-gray-200 px-2 rounded text-lg font-bold hover:bg-gray-300 dark:text-black"
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end gap-2">
                                    <p className="font-semibold text-sky-600">
                                        {(item.price * item.quantity).toFixed(2)} {item.currency}
                                    </p>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-100 border border-red-200 rounded-full hover:bg-red-600 hover:text-white"
                                    >
                                        <BsTrash3Fill className="w-5 h-5" />
                                        <span className="hidden sm:inline">Remove</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="border-t pt-4 mt-6 text-right">
                            <p className="text-lg font-semibold text-gray-700">
                                Total Amount: <span className="text-indigo-600">{totalAmount.toFixed(2)} {cartItems[0]?.currency || 'BDT'}</span>
                            </p>
                        </div>
                    </div>

                    {/* Order Form */}
                    <div className="flex justify-end mt-10">
                        <form
                            onSubmit={handleOrder}
                            className="w-full max-w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 border dark:text-black"
                        >
                            <h2 className="text-xl font-bold text-gray-800 mb-4">📦 Shipping Details</h2>

                            {['name', 'email', 'phone'].map((field) => (
                                <div key={field} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600 capitalize">{field}</label>
                                    <input
                                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                        name={field}
                                        value={form[field]}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={`Enter your ${field}`}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>
                            ))}

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
                                disabled={loading}
                                className={`w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-all duration-200 ${loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'}`}
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            ></path>
                                        </svg>
                                        <span>Placing Order...</span>
                                    </>
                                ) : (
                                    <>
                                        🧾 <span>Place Order & Pay</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;