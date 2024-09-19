import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Order } from "@/types"
import Link from "next/link"
import Currency from "@/components/ui/currency"

interface OrderPageProps {
    data: Order[]
}

const OrdersList: React.FC<OrderPageProps> = ({ data }) => {
 
    // format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (data.length === 0) {
        return <div className="text-center text-gray-500">Aucune commande trouvée</div>;
    }

    return (
        <div >
            {data.map((order) => (
                <Card key={order.id} >
                    <CardHeader className=" flex-row   items-center">
                        <div><span style={{ fontWeight: 'bold' }}>Etat de la commande:</span> {order.status} </div>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <div className="grid gap-2 text-sm">
                            <div><span style={{ fontWeight: 'bold' }}>Date de commande:</span> {formatDate(order.createdAt)}</div>
                            {/* <div><span style={{ fontWeight: 'bold' }}>Date de reception estimée:</span> Le 14 Avril , 2024</div> */}
                        </div>
                        <div className="grid gap-2 text-sm ">
                            <div><span style={{ fontWeight: 'bold' }}>Adresse de livraison: </span>{order.address}</div>
                            <div><span style={{ fontWeight: 'bold' }}>Montant total </span><Currency value={order.totalPrice} /></div>
                        </div>
                    </CardContent>

                    <div className="flex justify-center mb-2">
                        <Link className="bg-black text-white px-4 py-2 rounded-md w-full mx-1" href={`/orders/${order.id}`}>
                            Details
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    )

    
}

export default OrdersList;
