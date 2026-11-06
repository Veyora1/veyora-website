# Veyora — Owner handoff and launch decisions
Prepared 2026-11-06. All changes remain on feature/interactive-storefront; live GitHub Pages and Shopify draft products were not published.

## Decisions only the owner can finalize
1. **Month 4 of discounted subscription:** choose (a) subscription ends after three payments, (b) continues at 15% off, or (c) continues at full price with advance notice and legally sufficient consent. No default selected.
2. **Service agreement:** approve service start, delivery timeline, cancellation cutoff, refund policy, revisions, ownership/licensing of deliverables, and applicable customer disclosures. Draft: CUSTOMER-SERVICE-AGREEMENT-DRAFT.md.
3. **Shopify Subscriptions UI:** verify all three draft products are attached to a monthly plan; verify whether a minimum three billing cycles can be enforced and whether post-month-three behavior can be configured. Connected app cannot create these plans with its present permissions.
4. **Payments:** configure/verify merchant payment gateway, taxes, recurring payment eligibility and store policies in Shopify. Do not share credentials.
5. **Secure assets:** select an approved customer file-transfer/storage method and data retention policy before collecting logos, footage or private customer materials.
6. **Approval to launch:** explicitly approve the final website, terms, published products, subscription plan and checkout testing. Publishing remains blocked until approval.

## Work completed in development
- Seven linked website pages with responsive navigation, metadata, visible keyboard focus and reduced-motion styles.
- Plan builder with one-time/flexible monthly/proposed three-month discounted price previews, copyable inquiry and user-initiated email draft.
- Onboarding and review demonstrations, support FAQs and transparent pricing.
- Customer communications, approval packet, content production SOP, fulfillment schedule, CSV trackers, marketing campaign drafts.
- Repeatable dependency-free static smoke-test source: tests/site-smoke.test.js.
- Connected-store product audit and subscription research.

## Tests completed versus not completed
- Completed: static page structure, script tag balance, local link resolution, unique IDs, basic navigation, pricing arithmetic.
- Not completed: real-browser/screen-reader tests, live email handoff, secure file transfer, subscription checkout, payment/tax/cancellation tests, automated order-triggered emails.

## No-cost and publication guardrails
No new paid services or purchases were authorized. No changes to default branch or live website. Shopify products remain draft; do not activate checkout before verification.

## Owner reply template
- Month-four behavior:
- Service start / delivery timing:
- Cancellation / refunds:
- Secure asset transfer preference:
- Shopify Subscriptions plan attached to all 3 products?:
- Approve launch? (yes/no, after testing):
