interface IPaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

class PaymentDetails implements IPaymentDetails {
  constructor(
    public cardNumber: string,
    public expiryDate: string,
    public cvv: string
  ) {}
}

export { PaymentDetails, IPaymentDetails };