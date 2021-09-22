export interface Loan {
    name: string
    loanOpenDate: Date;
    loanPeriod: number;
    loanAmount: number;
    loanInterestRate: number;
    loanEnddate: Date;
    vendorId: string;
    emiDueDay: number;
    emiAmount: number;
}