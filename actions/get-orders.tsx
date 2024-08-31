import { Order } from "@/types";
import { OrderDetails } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;


export const getUserOrders = async (userId : string | null): Promise<Order[]> => {
    
        const res = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId }),
        });

        const orders = await res.json()

        return orders;
    
};


export const getSpecificOrder = async (orderId : string | null): Promise<OrderDetails> => {
    
     
    const res = await fetch(`${URL}/${orderId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    // Parse the JSON response
    const data = await res.json();

    // Assert the type of the data
    return data as OrderDetails;

};

