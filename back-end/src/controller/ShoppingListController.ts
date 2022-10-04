import {Request,Response} from "express"
import { ShoppingListBusiness } from "../Business/ShoppingListBusiness"
import { ICreateListDTO } from "../models/ShoppingList"
export class ShoppingListController {
    constructor(private shoppingListBusiness:ShoppingListBusiness) {}

    createList = async (req:Request,res:Response) =>{
        try {
            const input:ICreateListDTO = {
                token:req.headers.authorization,
                productId:req.params.id
            }
            const response = await this.shoppingListBusiness.createListBusiness(input)
            res.status(201).send({result:response})
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage)
        }
    }

    getList = async (req:Request,res:Response) =>{
        try {
            const token = req.headers.authorization
            const response = await this.shoppingListBusiness.getListBusiness(token)
            res.status(201).send({result:response})
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage)
        }
    }

    updateList = async (req:Request,res:Response) =>{
        try {
            
        } catch (error) {
            res.status(error.code || 500).send(error.message || error.sqlMessage)
        }
    }
}