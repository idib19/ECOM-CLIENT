"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { useAuth } from "@clerk/nextjs"; // client compoenents 


// form importssssssss -------------------------------------------------------//////
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
//---------------------------------------------------------------------------------------


import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

import { AlertModal } from "@/components/login-alert-modal";
import { CartItems } from "@/types";




const Summary = (data: any) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const router = useRouter();

    const { isSignedIn, userId, } = useAuth()

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Payment completed.');
            removeAll();
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong.');
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.product.price)
    }, 0);


    // fommmmmmmssssss bulleshitttttttt hereeeeeeeeeee\// validation object using zod
    const formSchema = z.object({
        name: z.string().min(1),
        address: z.string().min(1),
        phone: z.string().min(1),
        email: z.string().email(),
    });


    type OrderFormValues = z.infer<typeof formSchema>

    const form = useForm<OrderFormValues>({
        resolver: zodResolver(formSchema)
    });


    console.log("userId ", userId);


    const onCheckout = async (data: OrderFormValues) => {

        const orderItemsData = items.map((item: CartItems) => ({
            productId: item.product.id,
            options: item.option
        }));

        if (isSignedIn) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkoutEmail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderItemsData: orderItemsData,
                        data,
                        clientId: userId
                    }),


                });

                if (response.ok) {
                    removeAll();
                    toast.success('Commande effectuée avec succès!');
                    router.push(`${process.env.NEXT_PUBLIC_STORE_URL}`)

                } else {
                    const errorData = await response.json();
                    console.error('Error during checkout:', response.statusText, errorData);
                    toast.error('Erreur lors du paiement, veuillez réessayer.');
                }


            } catch (error) {
                console.error('Network error during checkout:', error);
                toast.error('Erreur réseau lors du paiement, veuillez réessayer.');
            }
        }

        else {
            setOpen(true)
        }

    };

    const redirectToLogin = () => {
        setLoading(true);
        router.push('/sign-in')
    }

    //-------------------------------------------------------------------------------
    return (


        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={redirectToLogin}
                loading={loading}
            />
            <div
                className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
                <h2 className="text-lg font-medium text-gray-900">
                    Details de la commande
                </h2>
                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="text-xl font-medium text-gray-900">Total</div>
                        <Currency value={totalPrice} />
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onCheckout)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Nom complet </FormLabel>
                                    <FormControl>
                                        <Input type="string" placeholder="Entre ton nom au complet" {...field} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Adresse de livraison </FormLabel>
                                    <FormControl>
                                        <Input type="string" placeholder="Entre ton adresse" {...field} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Numero de telephone </FormLabel>
                                    <FormControl>
                                        <Input type="string"   {...field} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Adresse courriel </FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Entre ton courriel"  {...field} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={items.length === 0} className="w-full mt-6">
                            Commander
                        </Button>
                    </form>

                </Form>

            </div>

        </>
    );
}

export default Summary;