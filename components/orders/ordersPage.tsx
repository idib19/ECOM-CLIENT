import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Order } from "@/types"

interface OrderPageProps {
    data: Order[]
}


const OrdersList: React.FC<OrderPageProps> = ({ data }) => {

    // fetch order details

    return (
        <div>
            {data.map((order) => (
                <Card key={order.id} >
                    <CardHeader>
                        <CardTitle>{order.id}</CardTitle>
                        <CardDescription>{order.status}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2 text-sm">
                            <div>Order date: {order.createdAt}</div>
                            <div>Delivery Date: Mars 23 , 2024</div>
                        </div>
                        <div className="grid gap-2 text-sm">
                            <div className="font-medium">Shipping address</div>
                            <div>{order.address}</div>
                            <div>{order.address}</div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default OrdersList;
