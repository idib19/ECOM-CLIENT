import { getSpecificOrder } from "@/actions/get-orders";
import { auth } from "@clerk/nextjs";
import { OrderDetails } from "./components/orderDetailsPage";



const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
    //Check or not for login state of user and permission to access ressource ?


    const order = await getSpecificOrder(params.orderId);

    
    return (

        <OrderDetails order={order} />

    )
}

export default OrderDetailsPage;