import { ShoppingOrder } from "../models/ShoppingOrder";
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

}
