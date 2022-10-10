import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { IRemoveStockDTO } from "../models/ShoppingList";
import { ICreateOrderDTO, IUpdateOrderDTO, ShoppingOrder } from "../models/ShoppingOrder"
import { Autheticator } from "../services/Authenticator";
import { CorrectDate } from "../services/CorrectDate";

import { GenerateId } from "../services/GenerateId";


export class ShoppingOrderBusiness {
    constructor(
        private autheticator:Autheticator,
        private userData:UserData,
        private generateId:GenerateId,
        private shoppingOrderData:ShoppingOrderData,
        private productData:ProductsData,
        private shoppingListData:ShoppingListData,
    ) {}

    createOrder = async (input:ICreateOrderDTO) =>{
        const {token,userName,deliveryDate} = input
        const validToken = this.autheticator.getTokenData(token)
        const userId = validToken.id
        const validUser = await this.userData.getByIdDb(userId) 
        
        if(!token || !userName || !deliveryDate ){
            throw new CustomError(422,"Enter all parameters");    
        }
        if(!validUser){
            throw new CustomError(401,"not authorized invalid token")
        }
        
        
        const id = this.generateId.generateId()
        const newOrder = new ShoppingOrder(id,userName,deliveryDate,userId)
        const response = await this.shoppingOrderData.createShoppingOrder(newOrder)
        
        const removeStock = await this.shoppingListData.getListById(userId)
        for (const produto of removeStock) {
            if(produto.order_id === null){
                const newQuantity = produto.qty_stock - produto.quantity
                const newStock:IRemoveStockDTO = {
                    productId:produto.id_product,
                    qtyStock:newQuantity
                }
                await this.productData.updateProducts(newStock)
            }       
        }
        await this.shoppingListData.updateList(userId,id)
        
        return response
    }

    getOrder = async (token:string) => {
        const validToken = this.autheticator.getTokenData(token)
        if(!token){
            throw new CustomError(422,"Enter all parameters");    
        }
        if(!validToken){
            throw new CustomError(401,"not authorized invalid token")
        }
        const response = await this.shoppingOrderData.getShoppingOrder(validToken.id)

    
        const formatOrder = response.map(order =>{
            let totalProduct:number = 0
            let count:number = 0
            count = order.quantity * order.price
            totalProduct += count
            const newDate = new CorrectDate().currentDateFormatted(order.delivery_date)
            order.delivery_date = newDate
            return {order,totalProduct}
        }) 
        return formatOrder
    }

    updateOrder  = async (input:IUpdateOrderDTO) => {

    }

}