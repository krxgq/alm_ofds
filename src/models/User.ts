import { IOrder } from "./Order";

interface IUser {
  id: number;
  name: string;
  email: string;
  orders: IOrder[];
}

class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public orders: IOrder[]
  ) {}
}

export { User, IUser };