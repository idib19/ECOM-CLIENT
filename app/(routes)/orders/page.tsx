import OrdersPageClient from "@/components/orders/ordersPage"
import { getUserOrders } from "@/actions/get-orders";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const OrdersPage = async () => {

    const { userId } = auth();

    if (!userId) {
        // User is not authenticated, redirect to login page
        redirect("/sign-in");
    }

    const orders = await getUserOrders(userId);

    // Upon receiving the order data, use JavaScript's sorting methods (e.g., Array.prototype.sort) to sort the order array by the createdAt property in descending order.
    // This might be suitable for a small number of orders.

    return (

        <OrdersPageClient data={orders} />

    )
}

export default OrdersPage;