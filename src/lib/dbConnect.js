import React from 'react';
const { MongoClient, ServerApiVersion } = require('mongodb');

export const collectionObj = {
    cart_info: "cart_orders"
}

const dbConnect = (collectionName) => {

    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
};

export default dbConnect;