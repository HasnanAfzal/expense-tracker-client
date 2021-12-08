import { Label } from './label.type';
import { Vendor } from './vendor.type';

export interface Loan {
    name: string
    loanStartDate: Date;
    loanDuration: number;
    loanAmount: number;
    loanInterestDate: number;
    loanEndDate: Date;
    vendor: Vendor;
    emiDueDay: number;
    emiAmount: number;
    labels?: Array<Label>
}