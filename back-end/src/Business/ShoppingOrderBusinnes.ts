import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { UserData } from "../dataBase/UserData";
import { CustomError } from "../error/CustomError";
import { IRemoveStockDTO } from "../models/ShoppingList";
import {ICreateOrderDTO,ShoppingOrder} from "../models/ShoppingOrder";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class ShoppingOrderBusiness {
  constructor(
    private autheticator: Autheticator,
    private userData: UserData,
    private generateId: GenerateId,
    private shoppingOrderData: ShoppingOrderData,
    private productData: ProductsData,
    private shoppingListData: ShoppingListData
  ) {}

  createOrder = async (input: ICreateOrderDTO) => {
    const { token, userName, deliveryDate } = input;
    const validToken = this.autheticator.getTokenData(token);
    const userId = validToken.id;
    const validUser = await this.userData.getByIdDb(userId);

    if (!token || !userName || !deliveryDate) {
      throw new CustomError(422, "Entre com todos parametros");
    }
    if (!validUser) {
      throw new CustomError(401, "Não autorizado token inválido");
    }

    const id = this.generateId.generateId();
    const newOrder = new ShoppingOrder(id, userName, deliveryDate, userId);
    const response = await this.shoppingOrderData.createShoppingOrder(newOrder);

    const removeStock = await this.shoppingListData.getListById(userId);
    for (const produto of removeStock) {
      if (produto.order_id === null) {
        const newQuantity = produto.qty_stock - produto.quantity;
        const newStock: IRemoveStockDTO = {
          productId: produto.id_product,
          qtyStock: newQuantity,
        };
        await this.productData.updateProducts(newStock);
      }
    }
    await this.shoppingListData.updateList(userId, id);
    return response;
  };
}
