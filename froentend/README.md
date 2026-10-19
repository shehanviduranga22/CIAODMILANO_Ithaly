# Milano Style Project

## Account API

Account registration and sign-in are handled by `server.js`, which saves and
checks account records in the MongoDB `account_details` collection. Copy
`.env.example` to `.env` and set
`MONGODB_URI` to the MongoDB Atlas connection string with a rotated database
password. The database defaults to `ciao_d_milano`; set `MONGODB_DATABASE` to
use a different database.

For local development, run `npm run dev` to start the storefront; Vite routes
`/api` requests directly to the shared `handleRequest` export in `server.js`.
To run the API as a standalone service, use `npm run dev:account-api`. In
production, deploy this directory with Vercel; its `/api/*` function forwards
requests to the same handler. The frontend uses same-origin `/api` requests, so
no API base URL or production port is exposed. Set `MONGODB_URI` in the Vercel
project's environment variables; `MONGODB_DATABASE` is optional.
The Men, Women, and Accessories storefront pages load their items from the
`men_items`, `women_items`, and `accessories_items` collections through
`GET /api/storefront/{men|women|accessories}`.

Passwords are stored as salted scrypt hashes, never as plain text. MongoDB
credentials must remain in environment variables and must not be committed.
Sign-in verifies the submitted email and password against the stored password
hash and returns success only when both match. Successful sign-in creates a
signed, HttpOnly session cookie; checkout and bag/wishlist additions require
that verified session. The session expires after seven days. “Buy Now” checks
out the selected item and quantity without including other bag items.
After the demo card payment is submitted, the API saves the authenticated
account email, checkout contact and shipping details, payment method, catalog
priced item details, and total amount in the MongoDB `order_details` collection.
Card number and security code are not sent to or stored by the API.
Signed-in clients can view their account details and up to 100 most recent
orders on the account page; order history is filtered by the verified session.
Clients can end their session from the account dashboard using Sign Out.

Create a modern, responsive luxury Italian fashion e-commerce website for **CIAO D MILANO**.

The overall design should feel **premium, elegant, minimal, editorial, and realistic**, inspired by high-end Italian fashion websites. Avoid a generic AI-generated, SaaS, or overly futuristic appearance.

### Design Style
Use large realistic fashion photography, generous whitespace, elegant typography, clean grid layouts, minimal UI elements, and subtle animations. The website should feel like a professional international luxury clothing brand.

### Color Palette
Use a sophisticated neutral palette:
- Warm Ivory / Off White: `#F5F2EC`
- White: `#FFFFFF`
- Near Black: `#111111`
- Deep Black: `#0A0A0A`
- Muted Grey: `#66635F`
- Warm Beige/Taupe: `#C8B9A6`
- Subtle Burgundy Accent: `#6F1D2C`

Keep approximately **70% white/ivory, 20% black/charcoal, and 10% beige/burgundy accents**.

### Typography
Use an elegant serif font such as **Cormorant Garamond, Bodoni Moda, or Playfair Display** for large fashion headings.

Use **Inter, Manrope, or a Helvetica-style sans-serif** for navigation, buttons, product information, forms, and body text.

Use uppercase navigation and buttons with subtle letter spacing.

### Website Architecture
Create:
**Home → Men → Women → Collections → Product Details → Search → Wishlist → Cart → Checkout → Login/Register → About**

Use the same header, footer, colors, typography, spacing, product-card design, and overall visual language across every page.

### Homepage
Create a large cinematic fashion hero section with realistic Italian fashion photography, a strong editorial headline, short supporting text, and a minimal **SHOP COLLECTION** CTA.

Below it, include:
- New Arrivals
- Men's Collection
- Women's Collection
- Featured Products
- Editorial fashion banners
- Brand story
- Newsletter

Use a mixture of full-width images, asymmetric editorial layouts, and clean product grids.

### Shop / Collection Pages
Use 3–4 product columns on desktop and 2 columns on mobile.

Each product should contain:
- Large product image
- Product name
- Category
- Price
- Optional NEW / LIMITED / SOLD OUT label

Keep cards extremely minimal with no heavy shadows or unnecessary containers.

Add filters, categories, sorting, and product-image hover transitions.

### Product Details
Use a two-column desktop layout:

**Left:** Large product image gallery

**Right:** Product name, price, description, color, size selection, size guide, quantity, Add to Bag, Wishlist, product details, materials, care instructions, shipping and returns.

Include a **You May Also Like** section below.

### Header
Create a minimal luxury navigation with the **CIAO D MILANO** logo and links for Men, Women, New Arrivals, and Collections.

Include Search, Account, Wishlist, and Shopping Bag icons.

Make the header sticky with a subtle background/border change when scrolling.

### Cart & Checkout
Keep these pages minimal and premium.

Cart:
Product image → Name → Size/Color → Quantity → Price → Remove.

Checkout:
Contact Information → Shipping Address → Delivery Method → Payment → Order Summary.

Use black rectangular CTA buttons with white uppercase text.

### Footer
Use a deep-black luxury footer containing:
- CIAO D MILANO branding
- Shop links
- Customer Care
- About
- Social Media
- Newsletter
- Privacy Policy
- Terms & Conditions

### Images
Use **realistic professional fashion photography** featuring Italian/European fashion environments, premium clothing, studio photography, Milan-inspired architecture, tailoring, and craftsmanship.

Images should look like real DSLR fashion campaign photography.

Avoid obvious AI-looking faces, oversaturated colors, futuristic environments, cartoonish graphics, and unrealistic clothing.

### UI Rules
Use:
- Large whitespace
- Thin subtle borders
- Mostly square corners
- Large editorial images
- Elegant typography
- Smooth image zoom on hover
- Fade/slide animations around 400–800ms
- Fully responsive layouts

Avoid:
- Glassmorphism
- Neon colors
- Excessive gradients
- Heavy shadows
- Excessively rounded cards
- Pill-shaped buttons
- Too many animations
- Overcrowded sections

### Final Goal
The final website should look like a **real luxury Italian fashion brand**, combining **minimal e-commerce functionality with a premium fashion-magazine/editorial experience**.

The key visual formula is:

**Realistic Fashion Photography + Elegant Serif Typography + Neutral Luxury Colors + Large Whitespace + Minimal UI + Editorial Layout + Subtle Animation.**

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ciao-d-milano-editorial.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c1fd16d3-8213-41d4-87ae-bd398bfab254).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
