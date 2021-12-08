export interface PayedEMI {
    loanId: string;
    emiMonth: Date;
    emiAmount: number;
    interestAmountCharged: number;
}