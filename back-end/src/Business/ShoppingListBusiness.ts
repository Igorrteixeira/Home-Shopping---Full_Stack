import { ShoppingListData } from "../dataBase/ShoppingListData";
import { CustomError } from "../error/CustomError";
import { ICreateListDTO, ShoppingList } from "../models/ShoppingList"
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class ShoppingListBusiness {
    constructor(
        private generateId:GenerateId,
        private autheticator:Autheticator,
        private shoppingListData:ShoppingListData,

    ) {}

    createListBusiness = async(input:ICreateListDTO) => {
        const {token,productId} = input
        const validtoken = this.autheticator.getTokenData(token)
        if (!token || !productId) {
            throw new CustomError(422, "Enter all parameters");
         }
        if(!validtoken){
            throw new CustomError(401,"invalid token")
        }
        const id = this.generateId.generateId()
        const newList = new ShoppingList(id,productId,validtoken.id)
        const response = await this.shoppingListData.createList(newList)
        return response
    }

    getListBusiness = async (token:string)=>{
    }

    updateListBusiness = async () =>{

    }
}