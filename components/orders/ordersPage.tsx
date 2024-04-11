import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Order } from "@/types"

interface OrderPageProps {
    data: Order[]
}


const OrdersList: React.FC<OrderPageProps> = ({ data }) => {

    // fetch order details

    return (
        <div >
            {data.map((order) => (
                <Card key={order.id} >
                    <CardHeader className=" flex-row   items-center">
                        {/* <CardTitle className="">Order Number :</CardTitle> */}
                        <div><span style={{ fontWeight: 'bold' }}>Etat de la commande:</span> {order.status} </div>
                        {/* <CardDescription className="pb-1 ">{order.id}</CardDescription> */}
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <div className="grid gap-2 text-sm">
                            <div><span style={{ fontWeight: 'bold' }}>Date de commande:</span> {order.createdAt}</div>
                            <div><span style={{ fontWeight: 'bold' }}>Date de reception estimée:</span> Le 14 Avril , 2024</div>
                        </div>
                        <div className="grid gap-2 text-sm ">
                            <div className="font-medium"><span style={{ fontWeight: 'bold' }}>Order Status : </span>Shipping address</div>
                            <div><span style={{ fontWeight: 'bold' }}>Adresse de livraison: </span>{order.address}</div>
                            <div><span style={{ fontWeight: 'bold' }}>Montant total : </span>62.17 $</div>
                        </div>
                    </CardContent>
                    <div className="flex justify-center mb-2"> {/* Center the button */}
                        <button className="bg-black text-white px-4 py-2 rounded-md w-full mx-1">
                            Details
                        </button>
                    </div>
                </Card>
            ))}

        </div>

    )
}

export default OrdersList;
