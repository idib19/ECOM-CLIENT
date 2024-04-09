"use client";

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import Summary from '@/components/cart/summary'
import CartItem from '@/components/cart/cart-item'

export const revalidate = 0;

const CartPageClient = (data : any) => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    const userId = data.userId

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">Le panier est vide</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                        <Summary data = {userId} />
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default CartPageClient;