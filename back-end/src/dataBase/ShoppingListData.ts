import { IDeleteListDB, OShoppingListDTO, ShoppingList } from "../models/ShoppingList";
import { DataBase } from "./DataBase";

export class ShoppingListData extends DataBase {

    public static TABLE_LIST = "Shopper_shopping_list"
    public static TABLE_PRODUCTS = "Shopper_products"

    createList = async (input:ShoppingList):Promise<String> =>{
        await this.getConnection()
        .from(ShoppingListData.TABLE_LIST)
        .insert({
            id:input.getId(),
            id_product:input.getProductId(),
            user_id:input.getUserId()
        })

        return "successfully inserted"
    }

    getListById = async (userId:string):Promise<OShoppingListDTO[]> =>{
        const response:OShoppingListDTO[] = await this.getConnection()
        .from(ShoppingListData.TABLE_LIST)
        .select()
        .where("user_id",`${userId}`)
        return response
    }

    getProduct = async (input:IDeleteListDB):Promise<OShoppingListDTO[]> =>{
        const {id_product,user_id}=input
        const response:OShoppingListDTO[] = await this.getConnection()
        .from(ShoppingListData.TABLE_LIST)
        .select()
        .where({id_product})
        .andWhere({user_id})
        return response
    }

    deleteList = async (input:IDeleteListDB):Promise<string> =>{
        const {id_product,user_id}=input
         await this.getConnection()
        .from(ShoppingListData.TABLE_LIST)
        .delete()
        .where({id_product})
        .andWhere({user_id})
        return "successfully deleted"
    }


}