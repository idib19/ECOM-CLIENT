import OrdersPageClient from "@/components/orders/ordersPage"
import { getUserOrders } from "@/actions/get-orders";
import { auth } from "@clerk/nextjs";

export default async function OrdersPage() {
    const { userId } = auth();


    console.log("idUser:  ", userId)
    const orders = await getUserOrders(userId);

    // Upon receiving the order data, use JavaScript's sorting methods (e.g., Array.prototype.sort) to sort the order array by the createdAt property in descending order.
    // This might be suitable for a small number of orders.



    return (

        <OrdersPageClient data={orders} />

    )
}