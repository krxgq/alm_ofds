interface IDelivery {
  orderId: number;
  address: string;
  estimatedTime: string;
  status: string;
}

class Delivery implements IDelivery {
  constructor(
    public orderId: number,
    public address: string,
    public estimatedTime: string,
    public status: string
  ) {}
}

export { Delivery, IDelivery };