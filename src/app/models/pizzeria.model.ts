export class users
{   
    idUser ?: number;
    email ?: string;
    name ?: string;
    password ?: string;
    idRole ?: number;
    
}

export class products
{
    idProduct ?: number;
    title ?: string;
    description ?: string;
    price?: number;
    imageUrl?: string;
}

export class orderDetail
{
    productName ?: string;
    price ?: number;
    quantity ?: number;
}

export class review
{
    idReview: number;
    idProduct: number;
    idUser: number;
    comment: string;
    stars: number;
    name: string;
}

