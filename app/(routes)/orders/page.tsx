import OrdersPageClient from "@/components/orders/ordersPage"
import { getUserOrders } from "@/actions/get-orders";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const OrdersPage = async () => {

    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const orders = await getUserOrders(userId);

    console.log( "orders list : ", orders)
    return (

        <OrdersPageClient data={orders} />

    )
}

export default OrdersPage;