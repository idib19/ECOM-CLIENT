
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { OrderDetails } from "@/types"
import Currency from "@/components/ui/currency"


interface OrderDetailsProps {
    order: OrderDetails
}


export const OrderDetailsPage: React.FC<OrderDetailsProps> = ({ order }) => { 

    // Calculate total cost using reduce()

    return (
        <main className="flex flex-col gap-8 p-4 md:p-6">
            <div className="flex items-center gap-4">
                <h1 className="font-semibold text-lg md:text-xl">
                    Order #{order?.id} -<span className="font-normal text-gray-500 dark:text-gray-400"> {order?.name} </span>
                    <span className="font-normal text-gray-500 dark:text-gray-400">On </span>
                </h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
                <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Produits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px] hidden md:table-cell">Image</TableHead>
                                        <TableHead className="max-w-[150px]">Name</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order?.orderItems?.map((orderItem) => (
                                        <TableRow key={orderItem.id}>
                                            <TableCell className="hidden md:table-cell">
                                                <img
                                                    alt="Product image"
                                                    className="aspect-square rounded-md object-cover"
                                                    height="64"
                                                    src={orderItem.product.images.at(0)?.url}
                                                    width="64"
                                                />
                                            </TableCell>
                                            <TableCell className="font-medium">{orderItem.product.name}</TableCell>
                                            <TableCell>{orderItem.quantity.toString()}</TableCell>
                                            <TableCell><Currency value={orderItem.product.price} /></TableCell>
                                            <TableCell><Currency value={orderItem.product.price * orderItem.quantity} /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Paiement</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center">
                                <div>Subtotal</div>
                                <div className="ml-auto"><Currency value={order.totalPrice} /></div>
                            </div>
                            <div className="flex items-center">
                                <div>Discount</div>
                                <div className="ml-auto"><Currency value={-0} /></div>
                            </div>
                            <Separator />
                            <div className="flex items-center font-medium">
                                <div>Total</div>
                                <div className="ml-auto"><Currency value={order.totalPrice} /></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
                    <Card>
                        <div>
                            <CardHeader className="flex flex-row items-center space-y-0">
                                <CardTitle>Contact</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                                <div className="grid gap-1">
                                    <span className="">{order?.phone}</span>
                                    <div>{order?.email}</div>
                                </div>
                            </CardContent>
                        </div>
                        <Separator />
                        <div>
                            <CardHeader>
                                <CardTitle>Adresse de livraison</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                                <div>
                                    {order?.address}
                                </div>
                            </CardContent>
                        </div>
                       
                    </Card>


                </div>
            </div>
        </main>
    )
}