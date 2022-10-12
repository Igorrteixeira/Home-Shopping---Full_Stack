import { Request, Response } from "express";
import { ShoppingOrderBusiness } from "../Business/ShoppingOrderBusinnes";
import { ICreateOrderDTO } from "../models/ShoppingOrder";

export class ShoppingOrderController {
  constructor(private shoppingOrderBusiness: ShoppingOrderBusiness) {}

  createOrder = async (req: Request, res: Response) => {
    try {
      const input: ICreateOrderDTO = {
        token: req.headers.authorization,
        userName: req.body.userName,
        deliveryDate: req.body.deliveryDate,
      };
      const response = await this.shoppingOrderBusiness.createOrder(input);
      res.status(201).send({ result: response });
    } catch (error) {
      res.status(error.code || 500).send(error.message || error.sqlMessage);
    }
  };

}
