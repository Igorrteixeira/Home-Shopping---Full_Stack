import {IDeleteListDB,OChecksListDTO,OShoppingListDTO,ShoppingList} from "../models/ShoppingList";
import { DataBase } from "./DataBase";

export class ShoppingListData extends DataBase {

  public static TABLE_LIST = "Shopper_shopping_list";
  public static TABLE_PRODUCTS = "Shopper_products";

  createList = async (input: ShoppingList): Promise<String> => {
    await this.getConnection().from(ShoppingListData.TABLE_LIST).insert({
      id: input.getId(),
      id_product: input.getProductId(),
      user_id: input.getUserId(),
    });
    return "successfully inserted";
  };

  getListById = async (userId: string): Promise<OShoppingListDTO[]> => {
    const response: OShoppingListDTO[] = await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .select(
        "Shopper_shopping_list.id",
        "Shopper_shopping_list.id_product",
        "Shopper_shopping_list.user_id",
        "Shopper_products.name",
        "Shopper_products.price",
        "Shopper_products.qty_stock",
        "Shopper_shopping_list.order_id"
      )
      .innerJoin(
        "Shopper_products",
        "Shopper_products.id",
        "Shopper_shopping_list.id_product"
        )
      .where("user_id", `${userId}`);
    return response;
  };

  getProduct = async (input: IDeleteListDB): Promise<OChecksListDTO[]> => {
    const { id, user_id } = input;
    const response: OChecksListDTO[] = await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .select()
      .where({ id })
      .andWhere({ user_id });
    return response;
  };

  deleteList = async (input: IDeleteListDB): Promise<string> => {
    const { id, user_id } = input;
    await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .delete()
      .where({ id })
      .andWhere({ user_id });
    return "successfully deleted";
  };

  updateList = async (id: string, idOrder: string) => {
    await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .update({
        order_id: idOrder,
      })
      .where("user_id", `${id}`)
      .andWhere("order_id", null);
  };
}
