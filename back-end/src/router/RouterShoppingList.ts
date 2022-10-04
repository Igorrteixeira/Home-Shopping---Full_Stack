import { Router } from "express";
import { ShoppingListBusiness } from "../Business/ShoppingOrderBusinnes";
import { ShoppingListController } from "../controller/ShoppingOrderController";
import { ShoppingListData } from "../dataBase/ShoppingOrderData";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";


export const shoppingListRouter = Router()

export const shoppingListController = new ShoppingListController(
    new ShoppingListBusiness(
        new Autheticator(),
        new UserData(),
        new GenerateId(),
        new ShoppingListData(),
    )
)

shoppingListRouter.post("/create",shoppingListController.createList)