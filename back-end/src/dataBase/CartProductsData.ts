import { CartProducts } from "../models/CartProducts";
import { DataBase } from "./DataBase";

export class CartProductsData extends DataBase {
  public static TABLE_CART = "Shopper_Cart";

  createCart = async (input: CartProducts): Promise<string> => {
    await this.getConnection().from(CartProductsData.TABLE_CART).insert({
      id: input.getId(),
      list_id: input.getListId(),
      user_id: input.getUserId(),
    });
    return "successfully created";
  };

  getCart = async (id: string) => {
    const response = await this.getConnection()
      .from(CartProductsData.TABLE_CART)
      .select()
      .where("user_id", `${id}`);
    return response;
  };
}
