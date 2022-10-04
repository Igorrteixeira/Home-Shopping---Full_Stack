export class ShoppingOrder {
    constructor(
        private id:string,
        private userName:string,
        private deliveryDate:string,
        private listId:string,
        private userId:string
    ) {}

    getId(){
        return this.id
    }
    getUserName(){
        return this.userName
    }
    getDeliveryDate(){
        return this.deliveryDate
    }
    getListId(){
        return this.listId
    }
    getUserId(){
        return this.userId
    }
}

export interface ICreateOrderDTO{
    token:string,
    userName:string,
    deliveryDate:string,
    listId:string,
}

export interface IUpdateOrderDTO{
    token:string,
    deliveryDate:string,
    listId:string,
}