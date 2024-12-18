export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[]
    variants: Variant[]
};

type AttributeValue = {
    name: string;
    value: string;
  };
  
  type Attribute = {
    attributeValue: AttributeValue;
  };
  
  type Variant = {
    stockQuantity: number;
    attributes: Attribute[];
  };

// Product variant object spec
export interface Options {
    size: string;
    color?: string;
}

export interface CartItems {
    product: Product;
    option: Options;
}

export interface Order {
    id: string;
    isPaid: boolean;
    clientId: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    totalPrice: number;
};

export interface OrderDetails {
    id: string;
    storeId: string;
    isPaid: boolean;
    name: string;
    phone: string;
    email: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    clientId: string;
    orderItems: {
        id: string;
        product: {
            id: string;
            storeId: string;
            categoryId: string;
            name: string;
            price: any;
            isFeatured: boolean;
            isArchived: boolean;
            sizeId: string;
            colorId: string;
            createdAt: Date;
            updatedAt: Date;
            images: {
                id: string;
                url: string;
            }[];
        };
        quantity: any;
    }[],
    totalPrice: number;
}

export interface Image {
    id: string;
    url: string;
}

export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
};

export interface Size {
    id: string;
    name: string;
    value: string;
};

export interface Color {
    id: string;
    name: string;
    value: string;
};

export interface Attributes {
    id: string;
    name: string;
    value: string;
};
