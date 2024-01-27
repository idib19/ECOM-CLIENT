import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/71d739cd-e561-4065-932c-54df80972872/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query, storeId: string): Promise<Product[]> => {
    // const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);
    
    return res.json();
};

export default getProducts;