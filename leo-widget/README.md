# Leo chat widget (UAE)

Vite/React source for the Leo chatbot, ported from the India widget.
It builds to one IIFE that `public/safestorage-chat-widget.iife.js` serves.

## Rebuild
    cd leo-widget && npm install
    VITE_GOOGLE_MAPS_API_KEY=<site key> npm run build
    cp dist/safestorage-chat-widget.iife.js ../public/

The API base is same-origin `/api/leo/*` (see `../app/api/leo` and `../lib/leo-quote.ts`).

## Testing without creating leads
Start the site with `LEO_DRY_RUN=1 npm run dev`. The routes then price and validate but write nothing to the CRM.
