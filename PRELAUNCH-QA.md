# Veyora — Prelaunch quality assurance and acceptance checklist

## Static-site checks (development branch)
- [x] Package builder has Visibility, Growth, Authority selections and prices.
- [x] One-time, flexible monthly and proposed 3-month discounted billing options displayed.
- [x] 15% discount calculation: 249 × .85 = 211.65; 449 × .85 = 381.65; 699 × .85 = 594.15.
- [x] Client intake preview provides a locally generated summary; no server submission.
- [x] Pricing comparison page explains total initial 3-month cost and pending terms.
- [x] Checkout buttons remain disabled pending launch approval.
- [ ] Test on actual desktop/mobile browsers, including keyboard navigation, focus, links and responsive layout.
- [ ] Review all marketing claims and confirm service turnaround times.
- [ ] Obtain final approval for customer-facing legal terms.

## Shopify (not yet verified complete)
- [x] Three package products created as DRAFT, no live checkout.
- [ ] Confirm Shopify Subscriptions plan is attached to each of the three products. Current connected API did not return app-owned selling plans; merchant must verify in the Shopify Subscriptions UI.
- [ ] Verify a 3-billing-cycle minimum can be enforced by the installed app and that customer cancellation controls match the contract. If unsupported, choose an honest alternative before launch.
- [ ] Set up separate flexible monthly and discounted 3-month selling plans without double charging.
- [ ] Verify recurring discount duration and post-month-3 pricing and consent.
- [ ] Configure subscription policy, cancellation instructions, taxes and digital-service fulfillment settings.
- [ ] Verify merchant payment gateway supports subscriptions.
- [ ] Perform non-live test transactions for one-time and both subscription types.
- [ ] Verify failed payments, renewal notices, cancellations, and refunds handling.
- [ ] Verify order notifications and manual or automated onboarding delivery.

## Site-to-store integration
- [ ] Verify product publication/channel availability after explicit approval.
- [ ] Collect exact customer-facing product URLs and subscription plan identifiers from Shopify.
- [ ] Connect each billing selection to its actual verified checkout; do not guess Shopify cart links or expose admin credentials.
- [ ] Verify selected package, price, subscription terms and billing cadence at checkout.
- [ ] Verify post-checkout confirmation and onboarding process.

## Operations
- [x] Client onboarding and delivery SOP drafted.
- [x] First-client content templates and approval emails drafted.
- [ ] Select secure file collection method for logos/videos; do not request passwords.
- [ ] Assign turnaround targets, support hours and revision response times.
- [ ] Confirm service terms and business information.
- [ ] Test full fulfillment using a fictitious client and approved sample assets.

## Launch gate
No publishing or activating purchasable products until merchant approves the final website, legal terms, checkout flow and test results. No new spending without explicit authorization.

## Key decision
At the end of the first three discounted months, should billing continue at the discounted rate, switch to standard price after clear advance notice and consent, or end? This decision must be resolved before a recurring plan is offered.
