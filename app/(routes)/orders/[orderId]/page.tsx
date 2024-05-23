import { getSpecificOrder } from "@/actions/get-orders";
import { OrderDetailsPage } from "./components/orderDetailsPage";



const OrderDetailsPageServer = async ({ params }: { params: { orderId: string } }) => {
    //Check or not for login state of user and permission to access ressource ?


    const order = await getSpecificOrder(params.orderId);

    console.log(`order fetched from server  : ` + order)


    return (

        <OrderDetailsPage order={order} />

    )
}

export default OrderDetailsPageServer;