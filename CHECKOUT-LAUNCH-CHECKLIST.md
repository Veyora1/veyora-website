# Veyora checkout and fulfillment launch checklist

Status: INTERNAL DRAFT — not published; no payment acceptance authorized.

## Shopify catalog
- Visibility — one month, $249 — draft product 10358494494936
- Growth — one month, $449 — draft product 10358494527704
- Authority — one month, $699 — draft product 10358494593240
- These are **not subscriptions**. Do not advertise automatic monthly renewal until Shopify recurring billing is configured and terms are approved.
- Keep all products in DRAFT until explicit owner approval.

## Dual purchase options
- The package builder previews **one-time** and **monthly subscription** choices at the same price; neither currently checks out.
- Shopify documents a free first-party Shopify Subscriptions app. Installation requires merchant approval; confirm any charges shown before proceeding.
- When configured, attach a monthly selling plan to the same product while retaining the one-time option. Do not create a second chargeable product unnecessarily.
- Confirm compatible payment gateway, customer self-service cancellation, subscription policy, notification emails and test orders before launch.
- Never embed an Admin API token in the public website. Link to verified Shopify product pages only after publication is explicitly approved.

## Before checkout goes live
- [ ] Confirm the Shopify store identity, legal business details and payment provider onboarding.
- [ ] Confirm whether Shopify Basic billing or any other subscription charges are already active. Do not activate any new paid apps.
- [ ] Confirm sales tax treatment for digital marketing services by jurisdiction; seek professional guidance if needed.
- [ ] Approve customer-facing terms: scope, content ownership, permitted asset use, revision limits, refund policy, cancellation and turnaround time.
- [ ] Confirm digital-service products do not require shipping and that order confirmation language is accurate.
- [ ] Establish secure collection of client assets and permissions. Do not ask for account passwords through public forms.
- [ ] Set up order notifications and a reliable method for delivering completed files.
- [ ] Test checkout in Shopify test mode (no real charges) and verify order emails, order records and service intake.
- [ ] Verify approved Shopify checkout URLs before adding links to GitHub Pages.

## Fulfillment workflow
1. Shopify receives a confirmed paid order and sends the normal purchase confirmation.
2. Veyora verifies payment and contacts the buyer using their provided order contact details.
3. Client completes an onboarding brief and supplies approved assets via an agreed secure channel.
4. Veyora creates deliverables in accordance with the purchased package.
5. Client reviews drafts; revisions follow the agreed package limit.
6. Veyora sends final files via an agreed secure delivery method and records completion.
7. No social media or Google Business Profile publishing occurs without client approval.

## Security and privacy
- GitHub Pages is static. Never embed Shopify Admin API credentials, private access tokens, customer records or sensitive uploads in HTML/JavaScript.
- Do not build a fake login or claim a live order tracker exists without a backend.
- Payment must happen only on Shopify-hosted secure checkout.
- Customer uploads, account access and authenticated file delivery require a properly secured service and cannot be implemented by static HTML alone.

## Open decisions
- Is each purchase a one-month nonrenewing engagement, or should we later offer auto-renewing subscriptions?
- What turnaround time is achievable?
- Which delivery channel will Veyora use, and how long will files remain accessible?
- What are the refund and cancellation rules?
