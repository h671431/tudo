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
- `components/` – header, footer, demo forms, scroll-reveal and the temporary design picker
- `lib/site.js` – brand name and menu

## Before launch

- The forms are demos: nothing is sent anywhere (`components/DemoForm.js`).
- Remove the design picker when the team has decided: delete `components/DesignPicker.js`, its use in `app/layout.js` and `.design-picker` in `app/globals.css`.
- Privacy & Terms text is a placeholder and needs legal review.

## Deploy (Vercel)

Push to GitHub, then import the repository on vercel.com and keep the defaults.
