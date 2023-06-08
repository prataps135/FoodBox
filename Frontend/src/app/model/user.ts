import { Address } from "./address";

export class User{
    id:number;
    name:string;
    email:string;
    password:string;
    phoneNo:number;
    address:Address[];
}