import { OShoppingOrderDTO, ShoppingOrder } from "../models/ShoppingOrder";
import { DataBase } from "./DataBase";

export class ShoppingOrderData extends DataBase {
  public static TABLE_SHOPPING_ORDER = "Shopper_shopping_Order";
  public static TABLE_LIST = "Shopper_shopping_list";

  createShoppingOrder = async (input: ShoppingOrder): Promise<string> => {
    await this.getConnection()
      .from(ShoppingOrderData.TABLE_SHOPPING_ORDER)
      .insert({
        id: input.getId(),
        user_name: input.getUserName(),
        delivery_date: input.getDeliveryDate(),
        user_id: input.getUserId(),
      });
    return "Order registered successfully";
  };

  getShoppingOrder = async (id: string) => {
    const response = await this.getConnection()
      .from(ShoppingOrderData.TABLE_LIST)
      .select(
        "Shopper_shopping_Order.user_name",
        "delivery_date",
        "Shopper_products.name",
        "price",
        "qty_stock",
        "quantity"
      )
      .innerJoin(
        "Shopper_shopping_Order",
        "Shopper_shopping_Order.id",
        "Shopper_shopping_list.order_id"
      )
      .innerJoin(
        "Shopper_products",
        "Shopper_products.id",
        "Shopper_shopping_list.id_product"
      )
      .where("Shopper_shopping_list.user_id", `${id}`);
    return response;
  };
}
