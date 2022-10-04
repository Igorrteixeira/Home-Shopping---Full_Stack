import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { ICreateOrderDTO, IUpdateOrderDTO, ShoppingOrder } from "../models/ShoppingOrder"
import { Autheticator } from "../services/Authenticator";

import { GenerateId } from "../services/GenerateId";


export class ShoppingOrderBusiness {
    constructor(
        private autheticator:Autheticator,
        private userData:UserData,
        private generateId:GenerateId,
        private shoppingOrderData:ShoppingOrderData
    ) {}

    createOrder = async (input:ICreateOrderDTO) =>{
        const {token,userName,deliveryDate,listId} = input
        const validToken = this.autheticator.getTokenData(token)
        const validUser = await this.userData.getByIdDb(validToken.id) 

        if(!token || !userName || !deliveryDate || !listId){
            throw new CustomError(422,"Enter all parameters");    
        }

        if(!validUser){
            throw new CustomError(401,"not authorized invalid token")
        }
        // const currentDate = new Date().toLocaleDateString("pt-BR");
        
        // const dateList = deliveryDate.split("/")
        // if(correctDate)
        const id = this.generateId.generateId()
        const newOrder = new ShoppingOrder(id,userName,deliveryDate,listId,validToken.id)
        const response = await this.shoppingOrderData.createShoppingOrder(newOrder)
        return response
    }

    getOrder = async (token:string) => {

    }

    updateOrder  = async (input:IUpdateOrderDTO) => {

    }

}