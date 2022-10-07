import { Router } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserData } from "../dataBase/UserData";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManeger";


export const userRouter = Router()

export const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new HashManager(),
        new GenerateId(),
        new Autheticator()
    )
)

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);