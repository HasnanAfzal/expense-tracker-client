import { FundSource } from './fund-source.type';
import { Label } from './label.type';
import { Vendor } from './vendor.type';

export interface Recharge {
    paymentDate: Date;
    vendor: Vendor;
    lables: Array<Label>;
    accountId: string;
    name: string;
    expiresAfter: number;
    renewalDate: Date;
    amount: number;
    fundSource: FundSource
}