import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import {CartItems } from "@/types";


interface CartItemProps {
    data: CartItems;
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.product.id);
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.product.images[0].url}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold text-black">
                            {data.product.name}
                        </div>
                    </div>

                    <div className="mt-1 flex text-sm items-center">
                        <p className="text-gray-500 font-semibold text-lg">{data.option.size}</p>
                        <div className="ml-4 border-l border-gray-200 pl-4 flex items-center">
                            <div
                                className="h-6 w-6 rounded-full border"
                                style={{ backgroundColor: data.option.color }}
                            />
                        </div>
                    </div>
                    <Currency value={data.product.price} />
                </div>
            </div>
        </li>
    );
}

export default CartItem;