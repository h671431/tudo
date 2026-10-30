# Tudo website (Next.js)

Same design and pages as the earlier static site, rebuilt in Next.js (App Router, plain JavaScript).

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Where things are

- `app/globals.css` – all styling (colours at the top)
- `app/page.js` – home page; other pages are in `app/<name>/page.js`
- `components/` – header, footer, enquiry form, scroll-reveal and the temporary design picker
- `lib/site.js` – brand name and menu

## Before launch

- The forms email enquiries through Web3Forms (`components/EnquiryForm.js`) using
  `web3formsKey` in `lib/site.js`. The inbox they go to is set in the Web3Forms account.
- The colour palette is `theme` in `lib/site.js` (now `"playful"`; `"classic"` is the earlier purple and yellow).
  Set `showDesignPicker: true` to show the palette chooser again.
- Privacy & Terms text is a placeholder and needs legal review.

## Deploy (Vercel)

Push to GitHub, then import the repository on vercel.com and keep the defaults.
