# trulyfreeqr.com: site facts for the fact-check gate

Verified against the code and the live service on 2026-10-12. Update this file when the product changes.

## Author
- George Smith, Founder, Klickify Agency. No other credentials, years of experience, clients or anecdotes may be attributed to him.

## What the site is
- A free QR code generator. Free because it is ad-supported (Google AdSense, which uses cookies). No subscription, no account, no signup, no email required.
- QR types: URL, WiFi, vCard, Email, Text, PDF. Nothing else (no SMS, no social-profile type, no app-store type, no payment type).
- Downloads: PNG (1100 x 1100 px) and SVG only.
- Customization in the generator: colors, frames, shapes, and uploading a logo. Error correction is fixed at level M; the logo overlay is about 22% of the code width.
- Only URL and PDF codes can be made dynamic ("Make Dynamic (Free)" button). WiFi, vCard, Email and Text codes are always static: their data is inside the code.
- A dynamic code is a QR image that encodes a short link, https://trulyfreeqr.link/r/ plus 8 characters. The server looks up the destination and redirects immediately (HTTP 302). It records the scan for analytics. Dynamic codes do not expire. Free to create and edit.

## How editing works (there are NO edit links)
- There are no accounts, no passwords, no emailed links and no "edit link" or "management link". Never describe one.
- After "Make Dynamic (Free)", the code appears in My QR Codes (/dashboard). To change the destination: open My QR Codes in the SAME browser on the SAME device, click Edit on the code, paste the new URL, Save. The change is instant.
- The list of codes and the key that authorizes edits live in that browser's local storage. Clearing site data or using another browser/device means the user can no longer edit those codes. The printed codes keep working with their last destination. The site cannot recover access.
- My QR Codes shows scans, devices, countries and hours per code. It also lets the user copy the short link and download a PNG of the dynamic code.
- Only the current destination is stored: no history of past destinations, no scheduled changes.
- A dynamic code depends on this service being online. Static codes do not.
- PDF type: you can upload a PDF (PDF only, up to 20 MB) or paste a link. Uploaded PDFs are stored on the site's server and served from a trulyfreeqr.link URL. Do not claim PDF uploads stay on the user's device.

## Safe-Scan (what it really does)
- When a dynamic code is created or edited, the destination is checked: only https is accepted, well-known URL shorteners (bit.ly, tinyurl.com, youtu.be, wa.me and similar) are rejected, a short list of high-risk domains, TLDs and URL patterns is rejected, and the address is looked up on Google Safe Browsing. A destination that fails is refused (on an edit, the old destination stays).
- Every dynamic code also has a Safe-Scan page (trulyfreeqr.link/safe/<id>) that shows the destination and the check results.
- Safe-Scan does NOT run when someone scans the printed code. The scan redirects straight to the destination with no preview and no warning page. Never claim a check, preview, delay or warning at scan time, real-time monitoring, anomaly detection or automatic review.
- It cannot stop a sticker placed over a printed code, or a destination page that is compromised after the code was created.

## Things the site does NOT offer (never claim them)
- Self-serve custom domains or a public API (the site only says enterprise users can contact support about them), white-label, team accounts, logins, edit links, bulk/CSV generation, built-in A/B split testing (users can only change a code's destination by hand), retargeting pixels, password-protected codes, expiring codes, print services, scan alerts, change history, scheduled updates, a "Print PDF" option.

## Claims to reject
- Statistics, percentages or case-study results without a named, checkable source. A statistic attributed to a named organization (APWG, FBI, Kaspersky, Starbucks) must be one that organization actually published.
- Anything specific about competitors' pricing, limits or features.
- "Never expire" applies to our dynamic codes; do not generalize it to other services.
- Anecdotes presented as real ("a restaurant told me", "I added this after seeing...").
