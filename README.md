# Install

```sh
yarn add overshom-wayforpay
```

# Overview

This is TypeScript library to work with WayForPay.
Completely typed and ready to use.

More features implementation are welcome to be merged from type-safe high-quality PRs.

# Usage

Below are steps to demonstrate basic flow for creating invoice and monitoring webhook on server when invoiced paid.

## Initialize WFP with your credentials.

```ts
import { WFP, WFP_CONFIG } from 'overshom-wayforpay';

WFP_CONFIG.DEFAULT_PAYMENT_CURRENCY = 'UAH';

export const wfp = new WFP({
    MERCHANT_ACCOUNT: 'test_merch_n1',
    MERCHANT_SECRET_KEY: 'flk3409refn54t54t*FNJRET',
    MERCHANT_DOMAIN_NAME: 'https://product.com',
    // service URL needed to receive webhooks
    SERVICE_URL: 'https://api.product.com/wayforpay-webhook',
});
```

## Create invoice

```ts
const invoice = await wfp.createInvoiceUrl({
    orderReference: (Math.random() * 1e17).toString(),
    productName: ['Product title'],
    productCount: [1],
    productPrice: [1],
});
```

```ts
// invoice structure sample
{
  invoiceUrl: 'https://secure.wayforpay.com/invoice/ib35935c03535',
  reason: 'Ok',
  reasonCode: 1100,
  qrCode: 'https://wayforpay.com/qr/img/ib35935c03535?type=i&size=200'
}
```

Redirect users to `invoiceUrl` or show them QR code so they can pay for the invoice on secure WayForPay page in browser.

## Monitor invoice status changes via webhook

Using simple express server might look next:

```ts
import express from 'express';

const app = express();

app.use(express.json());

app.post(WAYFORPAY_WEBHOOK_ROUTE, (req, res) => {
    // if webhook payload corrupted / signature invalid next line will throw an error
    const data = wfp.parseAndVerifyIncomingWebhook(req.body);
    if (data.transactionStatus === 'Approved') {
        // TODO process transaction
    }
    // create special-format response for WFP server so it stops sending this webhook.
    const answer = wfp.prepareSignedWebhookResponse(data);
    res.send(answer);
});
```
