import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { CustomError } from "../error/CustomError";
import { ICreateListDTO, IDeleteListDB, IDeleteListDTO, ShoppingList } from "../models/ShoppingList"
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class ShoppingListBusiness {
    constructor(
        private generateId:GenerateId,
        private autheticator:Autheticator,
        private shoppingListData:ShoppingListData,
        private productData:ProductsData,

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
        const [products] = await this.productData.getProducts(productId)
        if(products.qty_stock < 1){
            throw new CustomError(404,"product is out of stock")
        }
        const id = this.generateId.generateId()
        const newList = new ShoppingList(id,productId,validtoken.id)
        const response = await this.shoppingListData.createList(newList)
        
        return response
    }

    getListBusiness = async (token:string)=>{
        const validtoken = this.autheticator.getTokenData(token)
        if (!token) {
            throw new CustomError(422, "Enter all parameters");
         }
        if(!validtoken){
            throw new CustomError(401,"invalid token")
        }

        const response = await this.shoppingListData.getListById(validtoken.id)

        return response
    }

    deleteListBusiness = async (input:IDeleteListDTO) =>{
        const {token,productId} = input
        const validtoken = this.autheticator.getTokenData(token)
        
        if (!token || !productId) {
            throw new CustomError(422, "Enter all parameters");
         }
        if(!validtoken){
            throw new CustomError(401,"invalid token")
        }
        const inputDelete:IDeleteListDB = {
            id_product:productId,
            user_id:validtoken.id
        } 
        const validProduct = await this.shoppingListData.getProduct(inputDelete)
        if(validProduct.length < 1){
            throw new CustomError(404,"Product not found in the list");  
        }
        const response = await this.shoppingListData.deleteList(inputDelete)
        return response
    }
}