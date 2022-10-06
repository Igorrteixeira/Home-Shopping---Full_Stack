import { OUserDTO, User } from "../models/User";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
  public static TABLE_USER = "Shopper_user";

  signupDB = async (input: User): Promise<string> => {
    await this.getConnection().from(UserData.TABLE_USER).insert({
      id: input.getId(),
      name: input.getName(),
      email: input.getEmail(),
      password: input.getPassword(),
      roles: input.getRoles(),
    });
    return "successfully created";
  };

  getEmailDb = async (email: string): Promise<OUserDTO[]> => {
    const result: OUserDTO[] = await this.getConnection()
      .from(UserData.TABLE_USER)
      .select("*")
      .where({ email });
    return result;
  };

  getByIdDb = async (id: string): Promise<OUserDTO[]> => {
    const result: OUserDTO[] = await this.getConnection()
      .from(UserData.TABLE_USER)
      .select("*")
      .where({ id });
    return result;
  };
}
