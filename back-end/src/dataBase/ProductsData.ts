import { OProductsDTO } from "../models/Products";
import { IRemoveStockDTO } from "../models/ShoppingList";
import { DataBase } from "./DataBase";

export class ProductsData extends DataBase {
  public static TABLE_PRODUCTS = "Shopper_products";

  getProducts = async (productId: string): Promise<OProductsDTO[]> => {
    const response: OProductsDTO[] = await this.getConnection()
      .from(ProductsData.TABLE_PRODUCTS)
      .select()
      .where("id", `${productId}`);
    return response;
  };

  getAllProducts = async () => {
      const response = await this.getConnection()
      .from(ProductsData.TABLE_PRODUCTS)
      .select()
      return response
  }

  updateProducts = async (input:IRemoveStockDTO) => {
    await this.getConnection()
    .from(ProductsData.TABLE_PRODUCTS)
    .update({
      qty_stock:input.qtyStock
    })
    .where("id",`${input.productId}`)
  };
}
