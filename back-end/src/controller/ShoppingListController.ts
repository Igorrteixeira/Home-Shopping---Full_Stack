import { Request, Response } from "express";
import { ShoppingListBusiness } from "../Business/ShoppingListBusiness";
import { ICreateListDTO, IDeleteListDTO } from "../models/ShoppingList";
export class ShoppingListController {
  constructor(private shoppingListBusiness: ShoppingListBusiness) {}

  createList = async (req: Request, res: Response) => {
    try {
      const input: ICreateListDTO = {
        token: req.headers.authorization,
        productId: req.body.productId,
      };
      const response = await this.shoppingListBusiness.createListBusiness(
        input
      );
      res.status(201).send(response);
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  getListById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization;
      const response = await this.shoppingListBusiness.getListBusiness(token);
      res.status(200).send(response);
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  deleteList = async (req: Request, res: Response) => {
    try {
      const input: IDeleteListDTO = {
        token: req.headers.authorization,
        id: req.params.id,
      };
      const response = await this.shoppingListBusiness.deleteListBusiness(
        input
      );
      res.status(200).send(response);
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

  deleteAll = async (req: Request, res: Response) => {
    try {
      const input: IDeleteListDTO = {
        token: req.headers.authorization,
        id: req.params.id,
      };
      const response = await this.shoppingListBusiness.deleteAll(
        input
      );
      res.status(200).send(response);
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };
}
