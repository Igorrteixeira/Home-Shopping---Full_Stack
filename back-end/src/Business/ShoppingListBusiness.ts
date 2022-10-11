import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { CustomError } from "../error/CustomError";
import {
  ICreateListDTO,
  IDeleteListDB,
  IDeleteListDTO,
  OShoppingListDTO,
  ShoppingList,
} from "../models/ShoppingList";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class ShoppingListBusiness {
  constructor(
    private generateId: GenerateId,
    private autheticator: Autheticator,
    private shoppingListData: ShoppingListData,
    private productData: ProductsData,
    private shoppingOrder: ShoppingOrderData
  ) {}

  createListBusiness = async (input: ICreateListDTO) => {
    const { token, productId } = input;
    console.log(input);
    const validtoken = this.autheticator.getTokenData(token);
    const userId = validtoken.id;

    if (!token || !productId) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!validtoken) {
      throw new CustomError(401, "invalid token");
    }
    const [products] = await this.productData.getProducts(productId);
    if (String(products.id) === productId && products.qty_stock < 1) {
      throw new CustomError(404, "product is out of stock");
    }

    const id = this.generateId.generateId();
    const newList = new ShoppingList(id, productId, userId);

    const list = await this.shoppingListData.getListById(userId);
    if (list.length < 1) {
      const response = await this.shoppingListData.createList(newList);
      return response;
    }
    for (const shoppingList of list) {
      if (
        shoppingList.id_product === productId &&
        shoppingList.order_id === null
      ) {
        const newQuantity = shoppingList.quantity + 1;
        const response = await this.shoppingListData.updateQtyList(
          newQuantity,
          shoppingList.id
        );
        return response;
      }
    }

    const response = await this.shoppingListData.createList(newList);
    return response;
  };

  getListBusiness = async (token: string) => {
    const validtoken = this.autheticator.getTokenData(token);
    if (!token) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!validtoken) {
      throw new CustomError(401, "invalid token");
    }
    const response = await this.shoppingListData.getListById(validtoken.id);
    const list = response.map((list) => {
      let total: number = 0;
      let count: number = 0;
      count = list.quantity * list.price;
      total += count;
      return { list, total };
    });
    return list;
  };

  deleteListBusiness = async (input: IDeleteListDTO) => {
    const { token, id } = input;
    console.log(input)
    const validtoken = this.autheticator.getTokenData(token);
    const userId = validtoken.id;

    if (!token || !id) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (!validtoken) {
      throw new CustomError(401, "invalid token");
    }
    const inputDelete: IDeleteListDB = {
      id,
      user_id: userId,
    };

    const list = await this.shoppingListData.getListById(userId);

    for (const shoppingList of list) {
      if (shoppingList.id === id) {
        if (shoppingList.quantity > 1 && shoppingList.order_id === null) {
          const newQuantity = shoppingList.quantity - 1;
          const response = await this.shoppingListData.updateQtyList(
            newQuantity,
            shoppingList.id
          );
          return response;
        } else if (
          shoppingList.quantity === 1 &&
          shoppingList.order_id === null
        ) {
          const response = await this.shoppingListData.deleteList(inputDelete);
          return response;
        }
      }
    }
    return "Product not found in the list";
  };
}
