import { Order } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;


const getOrders = async (userId : string | null): Promise<Order[]> => {
    
        const res = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId }),
        });

        return res.json();
    
};

export default getOrders;