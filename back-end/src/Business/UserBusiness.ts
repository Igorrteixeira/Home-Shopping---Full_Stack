import { IloginDTO, ISignupDTO, ROLES, User } from "../models/User";
import { CustomError } from "../error/CustomError";
import { UserData } from "../dataBase/UserData";
import { HashManager } from "../services/HashManeger";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";

export class UserBusiness {
  constructor(
    private userData: UserData,
    private hashManager: HashManager,
    private generateId: GenerateId,
    private autheticator: Autheticator
  ) {}

  signupBusiness = async (input: ISignupDTO) => {
    const { name, email, password, roles } = input;
    const validUser = await this.userData.getEmailDb(email);
    if (!name || !email || !password) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (validUser.length > 0) {
      throw new CustomError(401, "E-mail already registered");
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new CustomError(422, "invalid email format");
    }
    if (password.length < 6 || typeof password !== "string") {
      throw new CustomError( 401,"invalid password format = (string 6 characters");}
    const newPasword = await this.hashManager.hash(password);
    const id = this.generateId.generateId();
    const newUser = new User(id, name, email, newPasword, roles);
    await this.userData.signupDB(newUser);
    const response = this.autheticator.generateToken({ id, roles });
    return response;
  };

  loginBusinnes = async (input: IloginDTO) => {
    const { email, password } = input;
    const [validUser] = await this.userData.getEmailDb(email);
    const validPassword = await this.hashManager.compareHash(
      password,
      validUser.password
    );
    if (!email || !password) {
      throw new CustomError(422, "Enter all parameters");
    }
    if (
      !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )) {
      throw new CustomError(422, "Envalid email format");
    }
    if (!validUser) {
      throw new CustomError(401, "Email not found");
    }
    if (password.length < 6 || typeof password !== "string") {
      throw new CustomError(
        401,
        "invalid password format = (string 6 characters)"
      );
    }
    if (!validPassword) {
      throw new CustomError(401, "password invalid");
    }
    const result = this.autheticator.generateToken({
      id: validUser.id,
      roles: validUser.roles,
    });
    return result;
  };
}
