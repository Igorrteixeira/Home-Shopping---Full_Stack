import { Router } from "express";
import { ProductsBusiness } from "../Business/ProductsBusiness";
import { ProductsController } from "../controller/ProductsController";
import { ProductsData } from "../dataBase/ProductsData";

export const productsRouter = Router();

export const productsController = new ProductsController(
  new ProductsBusiness(new ProductsData())
);

productsRouter.get("", productsController.getProducts);
