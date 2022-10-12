import { ProductsData } from "../dataBase/ProductsData";
import { CustomError } from "../error/CustomError"

export class ProductsBusiness {
    constructor(private productData:ProductsData){}
   getProducts = async (token:string) => {
        if(!token){
            throw new CustomError(422, "Entre com todos parametros");
        }
        const response = await this.productData.getAllProducts()
        return response
   }
}