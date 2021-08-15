import { PaymentCurrencyType } from './currency.type';

export type CardType = 'Visa' | 'MasterCard';

export type TransactionStatusType =
    | 'WaitingAuthComplete'
    | 'Voided'
    | 'Declined'
    | 'Approved'
    | 'Refunded';

export interface WebhookWayforpayDto {
    merchantAccount: string;
    orderReference: string;
    merchantSignature: string;
    amount: number;
    currency: PaymentCurrencyType;
    authCode: string;
    email: string;
    phone: string;
    createdDate: number;
    processingDate: number;
    cardPan: string; // '53****0937';
    cardType: CardType;
    issuerBankCountry: string;
    issuerBankName: string;
    recToken: string;
    transactionStatus: TransactionStatusType;
    reason: string;
    reasonCode: number;
    fee: number;
    paymentSystem: string;
    products: {
        name: string;
        price: number;
        count: number;
    }[];
    acquirerBankName?: string;
    cardProduct?: string;
    clientName?: string;
}
