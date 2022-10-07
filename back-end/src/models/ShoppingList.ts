export class ShoppingList {
  constructor(
    private id: string,
    private productId: string,
    private userId: string
  ) {}

  getId() {
    return this.id;
  }
  getProductId() {
    return this.productId;
  }
  getUserId() {
    return this.userId;
  }
}

export interface ICreateListDTO {
  token: string;
  productId: string;
}

export interface IDeleteListDTO {
  token: string;
  id: string;
}
export interface IDeleteListDB {
  id: string;
  user_id: string;
}

export interface ICheckListDB {
  id_product: string;
  user_id: string;
}

export interface IRemoveStockDTO{
  productId:string,
  qtyStock:number
}

export interface OChecksListDTO {
  id: string;
  id_product: string;
  user_id: string;
}

export interface OShoppingListDTO {
  id: string;
  id_product: string;
  user_id: string,
  name:string,
  price:number,
  qty_stock:number,
  order_id:string | null

}


