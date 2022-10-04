import { OProductsDTO } from "../models/Products";
import { DataBase } from "./DataBase";

export class ProductsData extends DataBase {
   public static TABLE_PRODUCTS = "Shopper_products"

   getProducts = async (productId:string):Promise<OProductsDTO[]> =>{
      const response:OProductsDTO[] = await this.getConnection()
      .from(ProductsData.TABLE_PRODUCTS)
      .select()
      .where("id",`${productId}`)
      return response
   }


}