"use client"
import React, { useEffect, useState } from 'react';

const Delete = () => {
   const [orderId, setOrderId] = useState(null);

 

    const handleDelete = () => {

    }
    return (
        <div>
            <button className="text-red-500 font-medium hover:underline w-30" onClick={handleDelete}>Delete Order</button>
        </div>
    );
};

export default Delete;