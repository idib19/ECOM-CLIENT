'use client'
import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Product, Options } from "@/types";
import useCart from "@/hooks/use-cart";
import { Card, CardContent } from "@/components/ui/card";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { toast } from 'react-hot-toast';

interface InfoProps {
  productData: Product;
  isDialog?: boolean;
  onClose?: () => void;
}

const ProductDetail: React.FC<InfoProps> = ({ productData, isDialog, onClose }) => {
  // Cart functionality
  const cart = useCart();

  // Product options 
  type Size = 'S' | 'M' | 'L' | 'XL';
  const [selectedSize, setSelectedSize] = useState<Size>('S');
  // Stock status simulation - this should come from your backend
  const [stockStatus, setStockStatus] = useState({
    S: 10,
    M: 8,
    L: 15,
    XL: 10
  });

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
  };

  const getCurrentStock = () => stockStatus[selectedSize];

  const isOutOfStock = getCurrentStock() === 0;

  const onAddToCart = () => {
    if (!isOutOfStock) {
      cart.addItem(productData, { size: selectedSize });
    }
    else {
      toast.error('Cet article est en rupture de stock');
    }
  };

  console.log(productData.variants)

  return (
    <Card className={`bg-white ${isDialog ? 'rounded-lg shadow-lg' : ''}`}>
      <CardContent className="p-6">
        {isDialog && (
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        )}
        
        {!isDialog && (
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.name}</h1>
        )}

        <div className="flex items-end justify-between mb-6">
          <Currency 
            value={productData?.price} 
          />
          <span className={`text-sm ${isOutOfStock ? 'text-red-500' : 'text-green-500'}`}>
            {isOutOfStock ? 'Rupture de stock' : ''} {/* Removed stock quantity display */}
          </span>
        </div>

        <div className="space-y-6">
          {/* Size Selector */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Taille</label>
            <div className="flex gap-3">
              {Object.keys(stockStatus).map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size as Size)}
                  className={`
                    px-4 py-2 rounded-md transition-all
                    ${selectedSize === size 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-300 hover:border-gray-400'
                    }
                    ${stockStatus[size as Size] === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'cursor-pointer'
                    }
                  `}
                  disabled={stockStatus[size as Size] === 0}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            onClick={onAddToCart}
            disabled={isOutOfStock}
            className={`
              w-full mt-6 py-3 flex items-center justify-center gap-2
              ${isOutOfStock 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-black hover:bg-gray-800'
              }
            `}
          >
            <ShoppingCart size={20} />
            {isOutOfStock ? 'Rupture de stock' : 'Ajouter au panier'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
