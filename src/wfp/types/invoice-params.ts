import * as crypto from 'crypto';
import { WFP_CONFIG } from '../config';
import { PaymentCurrencyType } from './currency.type';

type InvoiceParamsArguments = Pick<
    InvoiceParams,
    | 'amount'
    | 'productName'
    | 'productCount'
    | 'productPrice'
    | 'orderReference'
    | 'merchantAccount'
    | 'serviceUrl'
    | 'merchantDomainName'
> & {
    MERCHANT_SECRET_KEY: string;
    paymentSystems?: Array<
        | 'card'
        | 'privat24'
        | 'lpTerminal'
        | 'payParts'
        | 'qrCode'
        | 'masterPass'
        | 'visaCheckout'
        | 'googlePay'
        | 'applePay'
    >;
};

export class InvoiceParams {
    readonly merchantAccount: string;
    readonly serviceUrl: string;
    readonly merchantDomainName: string;
    readonly merchantSignature: string;
    readonly transactionType = 'CREATE_INVOICE';
    readonly currency: PaymentCurrencyType = WFP_CONFIG.DEFAULT_PAYMENT_CURRENCY;
    readonly apiVersion = 1;
    readonly orderDate = new Date().getTime();
    holdTimeout = 60;

    readonly amount: number;
    readonly orderReference: string;
    readonly productName: string[];
    readonly productCount: number[];
    readonly productPrice: number[];
    readonly paymentSystems?: string; // semicolon-separated values

    // TODO review clientEmail. Seems that we don't receive invoiceURL in response if email specified.
    readonly clientEmail?: string;

    constructor({
        amount,
        productName,
        productCount,
        productPrice,
        orderReference,
        merchantAccount,
        serviceUrl,
        merchantDomainName,
        MERCHANT_SECRET_KEY,
        paymentSystems,
    }: InvoiceParamsArguments) {
        this.merchantAccount = merchantAccount;
        this.serviceUrl = serviceUrl;
        this.merchantDomainName = merchantDomainName;
        const forHash = [
            this.merchantAccount,
            this.merchantDomainName,
            orderReference,
            this.orderDate,
            amount,
            this.currency,
            productName.join(';'),
            productCount.join(';'),
            productPrice.join(';'),
        ].join(';');
        this.merchantSignature = crypto
            .createHmac('md5', MERCHANT_SECRET_KEY)
            .update(forHash)
            .digest('hex');

        this.amount = amount;
        this.orderReference = orderReference;
        this.productName = productName;
        this.productCount = productCount;
        this.productPrice = productPrice;
        this.paymentSystems = paymentSystems?.join(';');
    }
}
