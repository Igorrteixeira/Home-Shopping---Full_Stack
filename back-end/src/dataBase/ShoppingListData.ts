import { ShoppingList } from "../models/ShoppingList";
import { DataBase } from "./DataBase";
export class ShoppingListData extends DataBase {

    public static TABLE_LIST = "Shopper_shopping_list"

    createList = async (input:ShoppingList) =>{
        await this.getConnection()
        .from(ShoppingListData.TABLE_LIST)
        .insert({
            id:input.getId(),
            id_product:input.getProductId(),
            user_id:input.getUserId()
        })
        return "successfully inserted"
    }

    getList = async () =>{
        
    }
}