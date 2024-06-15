"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Product, Options } from "@/types";

import useCart from "@/hooks/use-cart";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import SizeSelector from "./ui/product/product-sizes";
import ColorSelector from "./ui/product/product-colors";


interface InfoProps {
    data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
    // cart data 
    const cart = useCart();


    // static attributes : colors and sizes 

    const availableSizes = ['S', 'M', 'L', 'XL'];
    const availableColors = ['#FFFFFF', '#00FF00', '#0000FF', '#FFFF00']; // Example colors


    // usestate and callback functions to handle selection 
    const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0]);
    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    };

    const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);
    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

    //  options selection for the product 
    const options : Options = {
        size : selectedSize,
        color : selectedColor
    }


    
    const onAddToCart = () => {
        cart.addItem(data, options);
    }

    

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                {/*Prices should be in XOF not $ OR EUROS*/}
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <SizeSelector
                    sizes={availableSizes}
                    selectedSize={selectedSize}
                    onSelectSize={handleSizeSelect}
                />

                <ColorSelector
                    colors={availableColors}
                    selectedColor={selectedColor}
                    onSelectColor={handleColorSelect}
                />
                
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Ajouter au panier
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
}

export default Info;