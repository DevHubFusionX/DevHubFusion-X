# Technical Architecture Pitch: Scaling Branda V2 (50,000-Product Store)

**Prepared for:** Branda Engineering Team  
**Candidate:** Franklin Anyanwu (Senior Front-End Engineer & Next.js eCommerce Specialist)  
**Live Portfolio:** [https://devhubfusionx.site/](https://devhubfusionx.site/) | **GitHub:** [https://github.com/DevHubFusionX](https://github.com/DevHubFusionX)

---

## 1. High-Catalog Scalability (50,000+ SKUs)

### Rendering & Caching Strategy
- **On-Demand Incremental Static Regeneration (ISR):**
  - Avoid pre-rendering 50,000 pages at build time (which leads to long CI/CD build bottlenecks).
  - Pre-render top 500 popular/high-traffic products at build time (`fallback: 'blocking'`).
  - Cache remaining 49,500+ product detail pages dynamically on edge, serving static HTML to subsequent visitors with `revalidate: 3600` or on-demand cache tag invalidation via webhook triggers when pricing or inventory updates.
- **Server Components (RSC) by Default:**
  - Keep client bundle lightweight by executing data fetching on server edge nodes.
  - Client components isolated only to interactive boundaries: quantity selectors, variant pickers, and optimistic cart dispatchers.

### Data Fetching & Infinite Scrolling
- **Cursor/Keyset Pagination:**
  - Offset pagination (`OFFSET 45000 LIMIT 24`) degrades database performance at scale.
  - Implement cursor-based indexing for fast `O(1)` query lookups (`where id > cursor order by id limit 24`).
- **DOM Virtualization:**
  - Utilize **TanStack Virtual** to render only the visible 15–20 product cards in the viewport out of thousands of loaded items, keeping DOM node count under 1,500 and preventing mobile memory bloat.

### Instant Client-Side Faceted Filtering
- Filter state synchronized bi-directionally with URL query parameters (`/shop?category=shoes&brand=nike&price=100-500&sort=newest`).
- Use React 19 `useTransition` / deferred values for non-blocking UI updates while filtering large cached arrays.

---

## 2. Technical SEO & Schema.org at 50,000-Scale

### Dynamic Chunked Sitemaps
- Search engines restrict single sitemap files to 50,000 URLs or 50MB.
- Implement Next.js App Router dynamic sitemap indexing:
  - `app/sitemap.ts` exporting `generateSitemaps()` creating partition indices:
    - `/sitemap/1.xml` (products 1–10,000)
    - `/sitemap/2.xml` (products 10,001–20,000)
    - etc., linking back to a unified `sitemap.xml` root index.

### Programmatic Schema.org JSON-LD
- Every product injects structured metadata:
  ```json
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Product Name",
    "image": ["https://cdn.branda.com/prod.webp"],
    "description": "...",
    "sku": "SKU-12345",
    "offers": {
      "@type": "Offer",
      "url": "https://branda.com/product/slug",
      "priceCurrency": "NGN",
      "price": "45000",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Branda" }
    }
  }
  ```
- BreadcrumbList schemas embedded automatically to generate clean Google SERP navigation breadcrumbs.

---

## 3. Core Web Vitals & Image Optimization

- **Largest Contentful Paint (LCP < 1.2s):**
  - Hero and primary product images loaded with `priority` attribute and `sizes` layout descriptors.
  - Automatic WebP/AVIF compression and responsive CDN resizing via Next.js image optimizer.
- **Cumulative Layout Shift (CLS: 0):**
  - Explicit aspect ratios on product image cards (`aspect-square` or `aspect-[4/5]`) to prevent layout jumping while assets load.
- **Interaction to Next Paint (INP < 100ms):**
  - Optimistic cart additions: cart drawer opens instantly, updating total balance and badge count immediately with rollback on network failure.

---

## 4. Live Proof & Project References

1. **Brdgr (GetBrdgr)** — [getbrdgr.com](https://getbrdgr.com) / [brdgr.vercel.app](https://brdgr.vercel.app/)  
   *Next.js (App Router), TypeScript, Tailwind CSS, real-time transaction state & checkout.*
2. **Digital Ehub Storefront** — [devhubfusionx.site/gallery](https://devhubfusionx.site/gallery/)  
   *High-catalog faceted search, Schema.org product indexing, sub-1.1s LCP.*
3. **DevhubxAPI** — [devhubapi.vercel.app](https://devhubapi.vercel.app/)  
   *Payments gateway aggregation (Paystack, Flutterwave), 2.8M+ monthly transactions with 4.2ms edge latency.*

