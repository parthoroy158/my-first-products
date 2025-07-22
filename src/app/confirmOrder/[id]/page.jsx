
import Delete from '@/app/action/Delete';
import dbConnect, { collectionObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export const dynamic = 'force-dynamic'; // Ensures fresh data on each request

const OrderConfirmPage = async ({ params }) => {
    const id = params.id;

    // Connect to MongoDB and fetch order
    const db = await dbConnect(collectionObj.cart_info);
    const order = await db.findOne({ _id: new ObjectId(id) });

    if (!order) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500 font-semibold text-xl">
                ❌ Order not found.
            </div>
        );
    }

    const {
        customer,
        cartItems,
        totalAmount,
        createdAt,
        orderStatus,
        paymentStatus,
        paymentMethod,
    } = order;
  
    return (
        <div className="max-w-5xl mx-auto px-6 py-14 mt-16 min-h-screen text-gray-800 dark:text-black bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between w-full mb-10 gap-4">
                <h1 className="text-4xl font-bold text-gray-700 text-center w-full">
                    ✨ Order Confirmed
                </h1>
                {/* <button className="text-red-500 font-medium hover:underline w-30" >Delete Order</button> */}
                <Delete></Delete>
            </div>

            {/* Customer Info */}
            <section className="bg-white shadow rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">👤 Customer Information</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p><span className="font-medium">Name:</span> {customer.name}</p>
                    <p><span className="font-medium">Email:</span> {customer.email}</p>
                    <p><span className="font-medium">Phone:</span> {customer.phone}</p>
                    <p><span className="font-medium">Address:</span> {customer.address}</p>
                </div>
            </section>

            {/* Products List */}
            <section className="bg-white shadow rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">🛍️ Product Details</h2>
                <div className="space-y-6">
                    {cartItems?.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-start gap-6 bg-slate-50 rounded-xl p-4 border border-gray-100"
                        >
                            <Image
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
            </section>

            {/* Summary and Status */}
            <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
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
            </section>
        </div>
    );
};

export default OrderConfirmPage;
