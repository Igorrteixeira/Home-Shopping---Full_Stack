import { UserBusiness } from "../Business/UserBusiness";
import { Request, Response } from "express";
import { IloginDTO, ISignupDTO } from "../models/User";

export class UserController {
  constructor(private useBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupDTO = req.body;
      const response = await this.useBusiness.signupBusiness(input);
      res.status(201).send({ token: response });
    } catch (error) {
      res.status(error.code).send(error.message || error.sqlMessage);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const input: IloginDTO = req.body;

      const response = await this.useBusiness.loginBusinnes(input);
      res.status(201).send({ token: response });
    } catch (error) {
      res.status(error.code).send(error.message || error.sqlMessage);
    }
  };
}
