import dbConnect, { collectionObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({ params }) => {
    const id = await params.id
    console.log("This is the params:", id)
    const db = dbConnect(collectionObj.cart_info)
    const res = await db.findOne({ _id: new ObjectId(id) })
    console.log("This is the res", res)
    const order = await res?.orderData;
    console.log("This is the order", order)

    return (
        <div className="w-full py-12 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 border border-gray-200">
                {/* Header */}
                <div className="mb-8 border-b pb-6 flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-extrabold text-green-700">✅ Order Confirmed</h1>
                        <p className="text-sm text-gray-500 mt-1">Thank you for your purchase!</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-400">Order ID</p>
                        <p className="font-mono text-sm bg-gray-100 dark:text-black px-2 py-1 rounded">{id}</p>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">👤 Customer Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                        <p><strong>Name:</strong> {order?.customer?.name}</p>
                        <p><strong>Email:</strong> {order?.customer?.email}</p>
                        <p><strong>Phone:</strong> {order?.customer?.phone}</p>
                        <p><strong>Address:</strong> {order?.customer?.address}</p>
                    </div>
                </div>

                {/* Items */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">📦 Order Items</h2>
                    <div className="space-y-4">
                        {order?.cartItems?.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 border rounded-md bg-gray-50">
                                <img src={item.image} alt={item.product_name} className="w-16 h-16 object-cover rounded-md border" />
                                <div>
                                    <p className="font-medium text-gray-900">{item.product_name}</p>
                                    <p className="text-sm text-gray-600">Price: {item.price} {item.currency}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <div className="border-t pt-6 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <p><strong>Total:</strong> {order?.totalAmount} {order?.cartItems?.[0]?.currency || 'BDT'}</p>
                    <p><strong>Status:</strong> <span className="capitalize">{order?.orderStatus}</span></p>
                    <p><strong>Payment:</strong> <span className="capitalize">{order?.paymentStatus}</span> ({order?.paymentMethod})</p>
                    <p><strong>Date:</strong> {new Date(order?.createdAt).toLocaleString()}</p>
                </div>

                {/* Footer Button */}
                
            </div>
        </div>

    );
};

export default page;