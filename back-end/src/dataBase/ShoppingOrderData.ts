import { OShoppingOrderDTO, ShoppingOrder } from "../models/ShoppingOrder";
import { DataBase } from "./DataBase";

export class ShoppingOrderData extends DataBase {
    public static TABLE_SHOPPING_ORDER = "Shopper_shopping_Order"
    public static TABLE_LIST = "Shopper_shopping_list"

    createShoppingOrder = async (input:ShoppingOrder):Promise<string> => {
        await this.getConnection()
        .from(ShoppingOrderData.TABLE_SHOPPING_ORDER)
        .insert({
            id:input.getId(),
            name:input.getUserName(),
            delivery_date:input.getDeliveryDate(),
            user_id:input.getUserId() 
        })
        return "Order registered successfully"
    }

    getShoppingOrder = async (id:string) =>{
        const response = await this.getConnection()
        .from(ShoppingOrderData.TABLE_LIST)
        .select(
            "Shopper_shopping_Order.id",
            "Shopper_shopping_Order.name",
            "delivery_date",
            "Shopper_shopping_Order.user_id",
            // "Shopper_products.id",
            // "Shopper_products.name",
            // "price",
            )
        
            .innerJoin("Shopper_shopping_Order","Shopper_shopping_list.order_id","Shopper_shopping_order.id")
            // .innerJoin("Shopper_products","Shopper_shopping_list.id_product","Shopper_products.id")
            
            .where("user_id",`${id}`)
        return response
    }

    updateShoppingOrder = async () =>{

    }
}