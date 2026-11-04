# Development website QA report — 2026-11-04

## Scope
Reviewed development-branch HTML files: index.html, build-your-plan.html, client-onboarding.html, client-journey.html, pricing-options.html and content-review-demo.html. This is **static inspection**, not automated browser execution, network testing or payment testing.

## Passed static checks
- All six files have one closing HTML tag and viewport metadata.
- Every inline script opening tag has a matching closing tag (five scripted pages; pricing comparison has no script).
- Local HTML navigation references inspected point to files in the development branch.
- No repeated actual `id` attributes were found. Repeated `data-id` values in the review demo are intentional and not duplicate element IDs.
- Standard package rates: $249 / $449 / $699.
- 15%-off monthly prices: $211.65 / $381.65 / $594.15.
- Three monthly discounted payments total: $634.95 / $1,144.95 / $1,782.45.
- The build-your-plan page and intake preview clearly say no checkout or automatic submission is active.
- Premature canonical URLs were removed from five unpublished development pages; homepage canonical points to the existing live homepage.

## Implemented improvements
- Page descriptions where previously missing.
- Theme color metadata, visible focus styles and reduced-motion CSS.
- Links from the package builder to transparent pricing and a user-initiated email inquiry.
- Onboarding and content review demonstrations connected to client journey navigation.

## Outstanding tests — not claimed as passed
- Real browser rendering at 320px, 375px, 768px and desktop widths.
- Keyboard-only tab order, screen reader announcements, color contrast measurement and WCAG audit.
- JavaScript execution, clipboard permissions, mailto behavior, empty/invalid form handling and error messages.
- Lighthouse performance, mobile usability and SEO crawl behavior.
- Shopify subscription plan ownership, selling-plan attachments, minimum billing-cycle enforcement, checkout, tax, cancellation and renewal behavior.
- Secure customer asset transfer and production fulfillment.

## Launch acceptance
A browser-based test and Shopify sandbox/test purchase are required before publication. No live changes, product activation or paid test purchases were performed.
