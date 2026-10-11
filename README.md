# Smile Dental Studio — portfolio demo

A fictional, responsive static website for a dental clinic portfolio. This is not a real clinic and contains no backend or database.

## Files
- `index.html` — layout, accessible styling, and noindex metadata.
- `app.js` — **CLIENT CONFIGURATION** at the top: clinic name, phone, WhatsApp number, address, map query, hours, services, team placeholders and palette.

## Run it
Open `index.html` in a browser. For publishing, connect this repository to Cloudflare Pages with `main` as the production branch, no build command, and `/` as the output directory.

## Before showing it to a real clinic
1. Replace all bracketed placeholder details with information the clinic has approved.
2. Set `phoneDial` and `whatsapp` in `app.js` to digits only, including country code.
3. Verify the address, map pin, hours, treatments, team names, qualifications and all wording with the clinic.
4. Test calls, WhatsApp handoff, directions, FAQ and mobile layout.
5. Keep `noindex` until the real site is approved and ready to be indexed. Remove it only with the client's approval.

The form opens a prefilled WhatsApp message and does not store or transmit form data to a website server. Appointment requests are not confirmations.

**Disclaimer:** Demo website for portfolio purposes. Not a real clinic. Information is general and not a substitute for professional dental advice.