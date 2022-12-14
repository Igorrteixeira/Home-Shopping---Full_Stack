import {
  IDeleteListDB,
  OShoppingListDTO,
  ShoppingList,
} from "../models/ShoppingList";
import { DataBase } from "./DataBase";

export class ShoppingListData extends DataBase {
  public static TABLE_LIST = "Shopper_shopping_list";
  public static TABLE_PRODUCTS = "Shopper_products";

  createList = async (input: ShoppingList): Promise<String> => {
    await this.getConnection().from(ShoppingListData.TABLE_LIST).insert({
      id: input.getId(),
      id_product: input.getProductId(),
      user_id: input.getUserId(),
      quantity: input.getQuantity(),
    });
    return "Adicionado com sucesso";
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
        "Shopper_shopping_list.order_id",
        "Shopper_shopping_list.quantity"
      )
      .innerJoin(
        "Shopper_products",
        "Shopper_products.id",
        "Shopper_shopping_list.id_product"
      )
      .where("user_id", `${userId}`)
      .andWhere("order_id", null);
    return response;
  };

  deleteList = async (input: IDeleteListDB): Promise<string> => {
    const { id, user_id } = input;
    await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .delete()
      .where({ id })
      .orWhere("id_product", `${id}`)
      .andWhere({ user_id });
    return "Deletado com sucesso";
  };

  updateQtyList = async (quantity: number, id: string) => {
    await this.getConnection()
      .from(ShoppingListData.TABLE_LIST)
      .update({
        quantity,
      })
      .where({ id });
    return "Sucesso";
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
