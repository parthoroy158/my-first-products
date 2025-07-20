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
    const body = await req.json(); // Correct way to read request body
    console.log("This is the cart:", body);
    const db = dbConnect(collectionObj.cart_info)
    const res = db.insertOne(body)

    return NextResponse.json(body);
};



