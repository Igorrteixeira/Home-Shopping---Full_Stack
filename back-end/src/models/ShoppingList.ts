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
  productId: string;
}
export interface IDeleteListDB {
  id_product: string;
  user_id: string;
}

export interface OShoppingListDTO {
  id: string;
  id_product: string;
  user_id: string;
}
