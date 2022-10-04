
export class ShoppingList {
    constructor(
        private id:string,
        private productId:string,
        private userId:string,
    ) {}

    getId(){
        return this.id
    }
    getProductId(){
        return this.productId
    }
    getUserId(){
        return this.userId
    }
}

export interface ICreateListDTO{
    token:string,
    productId:string
}