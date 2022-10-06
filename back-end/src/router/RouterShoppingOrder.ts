import { Router } from "express";
import { ShoppingOrderBusiness } from "../Business/ShoppingOrderBusinnes";
import { ShoppingOrderController } from "../controller/ShoppingOrderController";
import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const shoppingOrderRouter = Router()

export const shoppingOrderController = new ShoppingOrderController(
    new ShoppingOrderBusiness(
        new Autheticator(),
        new UserData(),
        new GenerateId(),
        new ShoppingOrderData(),
        new ProductsData(),
        new ShoppingListData()
        
    )
)

shoppingOrderRouter.post("/create",shoppingOrderController.createOrder)
shoppingOrderRouter.get("",shoppingOrderController.getOrder)