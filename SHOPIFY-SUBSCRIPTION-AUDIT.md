# Shopify integration and subscription audit — 2026-11-04

## Confirmed connected-store product state
- Visibility — product ID 10358494494936 — **DRAFT**, one-time variant $249.
- Growth — product ID 10358494527704 — **DRAFT**, one-time variant $449.
- Authority — product ID 10358494593240 — **DRAFT**, one-time variant $699.
- All three have one variant each, no featured product image, and product tags including `not-subscription`. They are not ready to market as active subscriptions.

## Documentation findings
Shopify subscription purchase options are represented by **selling plan groups** and **selling plans** attached to products/variants. A checkout purchase option requires the variant and selling-plan identifiers. See:
- https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions
- https://shopify.dev/docs/apps/build/purchase-options/subscriptions/model-subscriptions-solution

**Important:** The documentation establishes the general subscription model, not that the installed free Shopify Subscriptions app enforces a three-payment minimum. This remains **unverified**.

## Connected-app constraints
Earlier attempt to create a selling plan through the connected API failed due to missing `write_products` and one of `write_own_subscription_contracts` / `write_purchase_options` permissions, plus order-information permission. The absence of selling plans in the connected app's earlier query is not proof that plans owned by Shopify Subscriptions do not exist.

## Safe next steps
1. In Shopify Subscriptions, verify the monthly plan exists and each product is attached.
2. Verify whether the app supports a fixed three-payment commitment, cancellation restrictions, and the post-month-three transition.
3. Choose and approve post-month-three behavior before publishing discounted recurring billing.
4. Confirm checkout and recurring payment gateway eligibility, and display legally compliant terms.
5. Only after approval: connect actual product and selling-plan IDs, test checkout and customer cancellation.
6. Keep product drafts unpublished and checkout disabled until final approval.

## Current disposition
No selling plans or checkout links were created by this audit. No new charges authorized. Do not label a discounted three-month purchase option as enforceable until verified.


## Additional technical finding (2026-11-06)
Shopify's subscription platform supports pricing policies that can change after a specified number of billing cycles, **but documentation states the subscription contract's line-item price does not update automatically**; the subscription app must apply the change. See https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts . Platform capability does not establish support in the installed Shopify Subscriptions app or current connector permissions. Do not promise a month-four price change until the installed app's behavior has been verified.
