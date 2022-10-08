import { Request, Response } from "express";
import { ProductsBusiness } from "../Business/ProductsBusiness";

export class ProductsController {
  constructor(private productsBusinnes: ProductsBusiness) {}

  getProducts = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization;
      const response = await this.productsBusinnes.getProducts(token);
      res.status(200).send(response);
    } catch (error) {
      res.status(error.code).send(error.message || error.sqlMessage);
    }
  };
}
