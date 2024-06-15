import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";

import { Product,Options,CartItems} from '@/types';



interface CartStore {
    items: CartItems[];
    addItem: (product: Product, options: Options) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product, options: Options) => {

            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.product.id === data.id);

            if (existingItem) {
                return toast('Cet article se trouve déjà dans le panier.');
            }

            set({ items: [...get().items, { product : data, option : options }] });

            toast.success('Article ajouté au panier');
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.product.id !== id)] });
            toast.success('Article retiré du panier');
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    }));

export default useCart;