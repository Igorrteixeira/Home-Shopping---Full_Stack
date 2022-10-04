export enum ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}
 
 export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private roles:ROLES = ROLES.NORMAL
    ) {}
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPassword() {
      return this.password;
    }
    getRoles(){
      return this.roles
    }
  
  }
  export interface ISignupDTO{
    name:string,
    email:string,
    password:string,
    roles:ROLES 
  }

  export interface OUserDTO{
    id:string,
    name:string,
    email:string,
    password:string,
    roles:ROLES 
  }
  export interface IloginDTO{
    email:string,
    password:string 
  }
  