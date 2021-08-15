import * as crypto from 'crypto';
import { WebhookWayforpayDto } from './types/webhook.type';

export const prepareSignedWebhookResponse =
    (merchantSecretKey: string) => (body: WebhookWayforpayDto) => {
        const answer = {
            orderReference: body.orderReference,
            status: 'accept',
            time: Date.now(),
            signature: '',
        };
        const forHash = [answer.orderReference, answer.status, answer.time].join(';');
        const hash = crypto.createHmac('md5', merchantSecretKey).update(forHash).digest('hex');
        answer.signature = hash;
        return answer;
    };

export const parseWithoutVerificationWebhookWayforpayBody = (body: object): WebhookWayforpayDto => {
    // Terrible object transformations due to WFP sends body of malfowrmed JSON.
    if (typeof body !== 'object') {
        throw new Error('webhook payload should be object');
    }
    const entries = Object.entries(body);
    const firstEntry = entries[0];
    if (!firstEntry) {
        throw new Error('webhook payload first entry undefined');
    }
    const [mainRawBody, objRawProducts = {}] = firstEntry;
    const rawProducts = Object.keys(objRawProducts);
    const rawBody = mainRawBody + '[' + rawProducts + ']}';
    return JSON.parse(rawBody);
};

export const verifyIncomingWebhookOrPanic =
    (merchantSecretKey: string) => (body: WebhookWayforpayDto) => {
        const forHash = [
            body.merchantAccount,
            body.orderReference,
            body.amount,
            body.currency,
            body.authCode,
            body.cardPan,
            body.transactionStatus,
            body.reasonCode,
        ].join(';');
        const expectedMerchantSignature = crypto
            .createHmac('md5', merchantSecretKey)
            .update(forHash)
            .digest('hex');
        if (expectedMerchantSignature !== body.merchantSignature) {
            throw new Error('Corrupted webhook received. Webhook signature is not authentic.');
        }
    };
