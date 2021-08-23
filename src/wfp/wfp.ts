import { InvoiceParams } from './types/invoice-params';
import { restApi } from './rest.api';
import {
    prepareSignedWebhookResponse,
    parseWithoutVerificationWebhookWayforpayBody,
    verifyIncomingWebhookOrPanic,
    prepareBodyForCurrencyRatesRequest,
} from './util';
import { CurrencyRateSymbol } from './types/currency.type';

export class WFP {
    readonly MERCHANT_ACCOUNT: string;
    readonly MERCHANT_SECRET_KEY: string;
    // service url needed for webhook
    readonly SERVICE_URL: string;
    readonly MERCHANT_DOMAIN_NAME: string;

    prepareSignedWebhookResponse;
    verifyIncomingWebhookOrPanic;

    constructor(props: {
        MERCHANT_ACCOUNT: string;
        MERCHANT_SECRET_KEY: string;
        SERVICE_URL: string;
        MERCHANT_DOMAIN_NAME: string;
    }) {
        this.MERCHANT_ACCOUNT = props.MERCHANT_ACCOUNT;
        this.MERCHANT_SECRET_KEY = props.MERCHANT_SECRET_KEY;
        this.SERVICE_URL = props.SERVICE_URL;
        this.MERCHANT_DOMAIN_NAME = props.MERCHANT_DOMAIN_NAME;
        this.prepareSignedWebhookResponse = prepareSignedWebhookResponse(props.MERCHANT_SECRET_KEY);
        this.verifyIncomingWebhookOrPanic = verifyIncomingWebhookOrPanic(props.MERCHANT_SECRET_KEY);
    }

    parseAndVerifyIncomingWebhook(body: object) {
        const parsed = parseWithoutVerificationWebhookWayforpayBody(body);
        this.verifyIncomingWebhookOrPanic(parsed);
        return parsed;
    }

    async createInvoiceUrl(props: {
        orderReference: string;
        productName: string[];
        productCount: number[];
        productPrice: number[];
    }) {
        const amount = props.productPrice.reduce((a, v) => a + v, 0);
        const body = new InvoiceParams({
            orderReference: props.orderReference,
            merchantAccount: this.MERCHANT_ACCOUNT,
            serviceUrl: this.SERVICE_URL,
            merchantDomainName: this.MERCHANT_DOMAIN_NAME,
            MERCHANT_SECRET_KEY: this.MERCHANT_SECRET_KEY,
            amount,
            productName: props.productName,
            productCount: props.productCount,
            productPrice: props.productPrice,
        });
        const data = await restApi.baseCall<{
            invoiceUrl: string;
            qrCode: string;
        }>(body);
        return data;
    }

    async getCurrencyRates() {
        const body = prepareBodyForCurrencyRatesRequest({
            merchantAccount: this.MERCHANT_ACCOUNT,
            merchantSecretKey: this.MERCHANT_SECRET_KEY,
        });
        const data = await restApi.baseCall<{
            rates: Record<CurrencyRateSymbol, number>;
        }>(body);
        return data;
    }
}
