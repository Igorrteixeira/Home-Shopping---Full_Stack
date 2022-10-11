import { Router } from "express";
import { ShoppingListBusiness } from "../Business/ShoppingListBusiness";
import { ShoppingListController } from "../controller/ShoppingListController";
import { ProductsData } from "../dataBase/ProductsData";
import { ShoppingListData } from "../dataBase/ShoppingListData";
import { ShoppingOrderData } from "../dataBase/ShoppingOrderData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const shoppingListRouter = Router()

export const shoppingListController = new ShoppingListController(
    new ShoppingListBusiness(
        new GenerateId(),
        new Autheticator(),
        new ShoppingListData(),
        new ProductsData(),
        new ShoppingOrderData()
    )
)

shoppingListRouter.post("/create",shoppingListController.createList)
shoppingListRouter.get("",shoppingListController.getListById)
shoppingListRouter.delete("/delete/:id",shoppingListController.deleteList)