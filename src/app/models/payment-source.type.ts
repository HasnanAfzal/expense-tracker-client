import { PaymentSourceType } from './payment-source-type.type';

export interface PaymentSource {
    name: string,
    _id: string,
    paymentSourceType: PaymentSourceType
}