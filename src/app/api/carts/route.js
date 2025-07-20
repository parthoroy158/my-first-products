"use server"
import { NextResponse } from 'next/server';

import dbConnect, { collectionObj } from '@/lib/dbConnect';

export const GET = async () => {

    try {
        const collection = dbConnect(collectionObj.cart_info);
        const result = await collection.find({}).toArray();
        return NextResponse.json(result);
    }

    catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }

};


export const POST = async (req) => {
    try {
        const { orderData } = await req.json();
        console.log("This is the cart:", orderData);

        if (!orderData) {
            return NextResponse.json({ message: 'Missing order data' }, { status: 400 });
        }

        const db = dbConnect(collectionObj.cart_info);
        const result = await db.insertOne(orderData);
        console.log("This is the result from the server side:", result);

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.error('Error inserting order:', error);
        return NextResponse.json(
            { error: 'Failed to insert order' },
            { status: 500 }
        );
    }
};




