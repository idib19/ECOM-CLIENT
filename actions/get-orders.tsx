import { Order } from "@/types";
import { OrderDetails } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;


export const getUserOrders = async (userId : string | null): Promise<Order[]> => {
    
        const res = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId }),
        });

        return res.json();
    
};


export const getSpecificOrder = async (orderId : string | null): Promise<OrderDetails> => {
    
    const res = await fetch(`${URL}/${orderId}`);

    return res.json();

};

