import dbConnect, { collectionObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export const dynamic = 'force-dynamic'; // Ensures fresh data on each request

const OrderConfirmPage = async ({ params }) => {
    const id = params.id;
    const db = await dbConnect(collectionObj.cart_info);
    const res = await db.findOne({ _id: new ObjectId(id) });

    if (!res) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500 font-semibold text-xl">
                ❌ Order not found.
            </div>
        );
    }

    const { customer, cartItems, totalAmount, createdAt, orderStatus, paymentStatus, paymentMethod } = res;

    return (
        <div className="max-w-5xl mx-auto px-6 py-14 mt-16 min-h-screen text-gray-800 dark:text-black bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-sm">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-700">✨ Order Confirmed</h1>

            {/* Customer Info */}
            <div className="bg-white shadow rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">👤 Customer Information</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p><span className="font-medium">Name:</span> {customer.name}</p>
                    <p><span className="font-medium">Email:</span> {customer.email}</p>
                    <p><span className="font-medium">Phone:</span> {customer.phone}</p>
                    <p><span className="font-medium">Address:</span> {customer.address}</p>
                </div>
            </div>

            {/* Products List */}
            <div className="bg-white shadow rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">🛍️ Product Details</h2>
                <div className="space-y-6">
                    {cartItems?.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-start gap-6 bg-slate-50 rounded-xl p-4 border border-gray-100">
                            <img
                                src={item.image}
                                alt={item.product_name}
                                width={100}
                                height={100}
                                className="rounded-lg border object-cover shadow-sm"
                            />
                            <div className="space-y-1">
                                <p className="text-lg font-medium text-gray-700">{item.product_name}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-gray-600">Price: {item.price} {item.currency}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary and Status */}
            <div className="bg-white shadow rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Order Summary</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-600 text-base">
                    <p><strong>Total:</strong> {totalAmount} BDT</p>
                    <p><strong>Payment Method:</strong> {paymentMethod}</p>
                    <p>
                        <strong>Payment Status:</strong>{' '}
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {paymentStatus === 'paid' ? '✅ Paid' : '❌ Unpaid'}
                        </span>
                    </p>
                    <p>
                        <strong>Order Status:</strong>{' '}
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${orderStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {orderStatus === 'pending' ? '⏳ Pending' : '✔️ Confirmed'}
                        </span>
                    </p>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                    📅 Placed on: {new Date(createdAt).toLocaleString("en-BD", {
                        timeZone: "Asia/Dhaka",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    })}
                </p>
            </div>
        </div>


    );
};

export default OrderConfirmPage;
