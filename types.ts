export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[]
};

export interface Order {
    id: string;
    isPaid: boolean;
    clientId: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    status : string;
    createdAt: string;
    updatedAt: string;
};


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

