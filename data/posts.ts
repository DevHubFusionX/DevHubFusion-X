export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  body: PostSection[];
}

export interface PostSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'callout' | 'code';
  content?: string;
  items?: string[];
  label?: string;
  language?: string;
}

export const posts: Post[] = [
  {
    slug: "how-much-does-it-cost-to-build-an-app-in-nigeria",
    title: "How Much Does It Cost to Build an App in Nigeria? (2026 Real Numbers)",
    excerpt: "A no-nonsense breakdown of app development costs in Nigeria — from a simple business app to a full SaaS platform — with real naira figures from someone actively building them.",
    category: "Cost & Pricing",
    readTime: "7 min read",
    date: "2026-07-28",
    featured: true,
    body: [
      { type: "paragraph", content: "This is the most Googled question in the Nigerian tech space — and most answers are either vague or wildly inaccurate. Here are real numbers, broken down by what you are actually building." },
      { type: "heading", content: "The Short Answer" },
      { type: "paragraph", content: "A basic business app: ₦300,000 – ₦800,000. A custom web application with a backend: ₦800,000 – ₦2.5M. A full SaaS platform or marketplace: ₦2.5M – ₦8M+. A ride-hailing or real-time logistics system: ₦1.5M – ₦6M." },
      { type: "callout", label: "Why the range is wide", content: "App cost is determined by three things: the number of features, whether you need a backend database, and whether you need real-time functionality (like live maps or chat). A booking form costs a fraction of a real-time driver-tracking system — they are different engineering problems." },
      { type: "heading", content: "Category 1: Simple Business App (₦300K – ₦800K)" },
      { type: "paragraph", content: "This gets you a professional web application with a frontend, basic forms, contact system, and possibly a simple admin dashboard. Good for service businesses, portfolio sites with enquiry systems, or landing pages with a booking form. No complex backend, no real-time features, no payment processing." },
      { type: "list", items: ["Professional responsive design", "Contact or booking forms", "Basic admin panel to view submissions", "WhatsApp integration", "Simple database if needed"] },
      { type: "heading", content: "Category 2: Custom Web Application with Backend (₦800K – ₦2.5M)" },
      { type: "paragraph", content: "This is where most serious businesses sit. You get a custom-built system — a booking engine, an inventory manager, a client portal, a logistics tracker — with a proper database, user authentication, and business-specific logic. This is the category where WordPress collapses and custom code earns its cost." },
      { type: "list", items: ["Custom database and business logic", "User registration and login (JWT authentication)", "Payment gateway integration (Paystack / Flutterwave)", "Admin dashboard for managing data", "Mobile-responsive across all devices", "API integrations (Google Maps, SMS, email)"] },
      { type: "heading", content: "Category 3: SaaS Platform or Marketplace (₦2.5M – ₦8M+)" },
      { type: "paragraph", content: "A multi-tenant platform that other businesses subscribe to and use. The additional cost over a custom app comes from multi-tenancy (keeping each customer's data separate), subscription billing with automated renewals, self-service onboarding, customer analytics dashboards, and the support infrastructure." },
      { type: "callout", label: "Common mistake", content: "Founders often budget for a 'Category 2' custom app when they actually need a 'Category 3' SaaS product. The difference in engineering scope is substantial. If other businesses are paying to use your software, you are building a SaaS — budget accordingly." },
      { type: "heading", content: "Category 4: Real-Time Platform (Ride-Hailing / Logistics) (₦1.5M – ₦6M)" },
      { type: "paragraph", content: "These sit in their own category because of real-time infrastructure requirements. Live GPS tracking requires WebSocket connections, location polling, map API calls (₦200K–₦800K/month at scale on Google Maps Platform), and a backend that handles concurrent state for dozens or hundreds of drivers simultaneously." },
      { type: "heading", content: "What Actually Drives the Cost Up" },
      { type: "list", items: ["Real-time features (live location, live chat, live notifications)", "Payment processing and automated splits or payouts", "Multiple user roles (admin, driver, rider, customer — each is a separate UI)", "Third-party API integrations (Google Maps, SMS, KYC verification)", "Security requirements (healthcare, fintech, or enterprise data)", "Scale requirements (building for 10 users vs. 10,000 users requires different architecture)"] },
      { type: "heading", content: "How to Get an Accurate Quote" },
      { type: "paragraph", content: "Write down every screen a user will see and every action they can take. That list — called a scope document — is what any serious developer prices from. Vague briefs get vague quotes. The more specific your requirements, the more accurate and honest the number you receive." },
    ]
  },
  {
    slug: "paystack-vs-flutterwave-for-nigerian-business",
    title: "Paystack vs Flutterwave: Which Is Better for Your Nigerian Business?",
    excerpt: "Both are market leaders. But they serve different business models. Here is the honest breakdown that Nigerian founders need before they integrate either one.",
    category: "Tools & Platforms",
    readTime: "6 min read",
    date: "2026-07-14",
    featured: true,
    body: [
      { type: "paragraph", content: "This is a question I answer almost weekly for clients. Both Paystack and Flutterwave are excellent — but they make different trade-offs. The right choice depends on your specific business model, not brand loyalty." },
      { type: "heading", content: "The One-Line Answer" },
      { type: "paragraph", content: "Use Paystack if your customers are primarily in Nigeria and you want the simplest, most reliable local integration. Use Flutterwave if you are handling cross-border payments across Africa, or if you need multi-currency support for international clients." },
      { type: "heading", content: "Paystack: Why It Dominates Nigeria" },
      { type: "paragraph", content: "Paystack was built specifically for Nigeria first. The developer experience is cleaner, onboarding is faster, and settlement is simpler. For Nigerian card payments, bank transfers, USSD, and Pay-with-Bank, Paystack's conversion rates are consistently higher because they have optimised every step of the local payment flow." },
      { type: "list", items: ["1.5% per transaction (capped at ₦2,000) for Nigerian cards", "Free for transactions under ₦2,500", "Instant settlement available", "Best-in-class developer documentation", "Owned by Stripe — world-class infrastructure"] },
      { type: "callout", label: "Important", content: "Stripe itself does not support Nigerian-registered businesses directly. If you are a Nigerian company, Paystack is your path to Stripe-quality infrastructure. Do not attempt to use Stripe with a Nigerian business account — accounts get flagged and funds frozen." },
      { type: "heading", content: "Flutterwave: When It Makes More Sense" },
      { type: "paragraph", content: "Flutterwave is built for cross-Africa and global reach. If you are collecting payments in Kenya, Ghana, South Africa, or from US and UK clients, Flutterwave's multi-currency accounts and broader country coverage give it a meaningful advantage over Paystack." },
      { type: "list", items: ["Supports 30+ African countries vs Paystack's primary Nigeria focus", "Multi-currency settlement (USD, GBP, EUR, NGN, KES, GHS)", "Better for marketplaces with international seller payouts", "Flutterwave Storefront for quick online stores", "More complex integration, more powerful at scale"] },
      { type: "heading", content: "Fees Side by Side" },
      { type: "list", items: ["Paystack local: 1.5% + ₦100 (capped at ₦2,000)", "Paystack international card: 3.9% + ₦100", "Flutterwave local: 1.4% (NGN)", "Flutterwave international: 3.8%", "Both charge similar fees — the differentiator is not price, it is feature set and target market"] },
      { type: "heading", content: "My Recommendation" },
      { type: "paragraph", content: "For most Nigerian businesses selling to Nigerian customers: start with Paystack. The developer experience is better, setup is faster, and local payment conversion is higher. If you expand to multiple African countries or need USD settlements, add Flutterwave or switch. You can run both simultaneously — many platforms do." },
      { type: "paragraph", content: "When I build for clients, I default to Paystack for Nigerian-market products. For marketplaces with cross-border seller payouts or for businesses serving multiple African countries, Flutterwave is the better architecture choice." },
    ]
  },
  {
    slug: "how-to-build-an-ecommerce-website-in-nigeria",
    title: "How to Build an E-Commerce Website in Nigeria (Step-by-Step Guide)",
    excerpt: "The complete guide to building and launching an online store in Nigeria — covering platforms, payment gateways, logistics integrations, and what actually makes sales.",
    category: "Build Guides",
    readTime: "9 min read",
    date: "2026-06-30",
    body: [
      { type: "paragraph", content: "Over 80% of Nigerian shoppers browse on mobile, most pay via bank transfer, and logistics is the number one reason for cart abandonment. Building an e-commerce site in Nigeria that actually sells requires understanding these realities from the start." },
      { type: "heading", content: "Step 1: Choose Your Platform Honestly" },
      { type: "paragraph", content: "This is the most consequential decision. Most people default to WordPress + WooCommerce because it is 'cheaper upfront'. That is true. But if your product catalogue is large, you need custom checkout flows, or performance matters to you — custom code will serve you better and cost less over 24 months." },
      { type: "list", items: ["WordPress + WooCommerce: Best for simple stores under 200 products with standard checkout", "Shopify: Good for founders who want to manage everything themselves, but recurring USD fees add up in naira", "Custom Next.js: Best for performance, custom logic, and scale — higher upfront cost, lower long-term cost"] },
      { type: "callout", label: "Nigeria-specific reality", content: "80%+ of your traffic will be on mobile, mostly on data. A 4MB page that loads in 12 seconds kills conversions. Performance is not optional — it is your number one sales tool. This is why I default to Next.js for e-commerce clients: it is 3–5x faster than equivalent WordPress stores out of the box." },
      { type: "heading", content: "Step 2: Payment Gateway Setup" },
      { type: "paragraph", content: "Paystack is the clear choice for Nigerian e-commerce. Integrate card, bank transfer, and USSD as payment options — Nigerian customers use all three. Bank transfer is increasingly the dominant payment method, especially for high-value purchases. If you disable bank transfer, you are leaving money on the table." },
      { type: "heading", content: "Step 3: Logistics Integration" },
      { type: "paragraph", content: "Delivery is the most painful part of Nigerian e-commerce. Your options are building a custom delivery booking system (expensive), integrating with a logistics API (GIG Logistics, Sendstack, Kwik), or doing it manually via WhatsApp (cheap but does not scale). For a serious store, integrate at least one logistics API for automatic shipment creation and tracking." },
      { type: "heading", content: "Step 4: The Checkout Flow — Get This Right" },
      { type: "paragraph", content: "Nigerian e-commerce checkout has specific requirements. Collect phone number (WhatsApp) as a required field — customers expect order updates on WhatsApp. State-based delivery fee calculation is essential. Offer a 'Pay on Delivery' option even if you do not honour it — its presence alone increases trust. Keep the checkout to two screens maximum." },
      { type: "heading", content: "Step 5: What Actually Drives Sales" },
      { type: "list", items: ["WhatsApp chat button — Nigerian shoppers want to ask questions before buying", "Product videos — short clips convert significantly better than photos alone", "Clear return policy — fear of being scammed is the top purchase barrier", "Social proof — testimonials and customer photos, not stock images", "Delivery time estimate on the product page — not buried in FAQs"] },
      { type: "heading", content: "What to Budget" },
      { type: "list", items: ["Custom-built store (Next.js): ₦600K – ₦1.8M", "WordPress + WooCommerce setup: ₦200K – ₦500K", "Paystack integration: usually included in build cost", "Logistics API integration: ₦100K – ₦300K additional", "Hosting (custom): ₦30K – ₦100K/year on Vercel or Render"] },
    ]
  },
  {
    slug: "how-to-digitize-your-business-in-nigeria",
    title: "How to Digitize Your Business in Nigeria: A Practical Guide for 2026",
    excerpt: "Every Nigerian business that digitizes its operations cuts costs, serves more customers, and scales faster. Here is the practical roadmap — from where to start to what it costs.",
    category: "Business Strategy",
    readTime: "8 min read",
    date: "2026-06-16",
    body: [
      { type: "paragraph", content: "Digitizing your business does not mean building an app. For most Nigerian businesses, it means replacing manual processes with software so your team spends less time on paperwork and more time serving customers. Here is how to think about it." },
      { type: "heading", content: "What 'Digitizing' Actually Means" },
      { type: "paragraph", content: "It means moving repeatable tasks — booking, invoicing, inventory tracking, payment collection, customer communication — from manual methods (phone calls, WhatsApp, Excel) into software that handles them automatically. The goal is always the same: reduce errors, increase speed, serve more customers without hiring proportionally more staff." },
      { type: "heading", content: "The Four Areas Most Nigerian Businesses Digitize First" },
      { type: "subheading", content: "1. Booking and Scheduling" },
      { type: "paragraph", content: "If you book appointments, deliveries, or service slots — and you are currently doing this on WhatsApp, by phone, or in a physical diary — a booking system is your first and highest-ROI digitization project. Customers self-book 24/7, you get automated reminders, and no-shows drop significantly." },
      { type: "subheading", content: "2. Payment Collection" },
      { type: "paragraph", content: "Moving from cash collection or manual bank transfers to an integrated payment link or invoice system (Paystack Payment Links, or a custom invoicing system) immediately improves cashflow tracking and reduces payment disputes." },
      { type: "subheading", content: "3. Inventory and Stock Management" },
      { type: "paragraph", content: "If you sell physical products and track inventory in Excel or by memory — this breaks at scale. A simple custom inventory system with alerts for low stock, automated reorder suggestions, and sales history can be built for ₦200K–₦600K and saves that in wasted stock within months." },
      { type: "subheading", content: "4. Customer Records and CRM" },
      { type: "paragraph", content: "Most Nigerian businesses have no systematic record of past customers, what they bought, and when they last engaged. A simple CRM (Customer Relationship Manager) lets you send WhatsApp follow-ups, birthday offers, and service reminders automatically." },
      { type: "callout", label: "Where to start", content: "Start with whichever manual process currently takes the most staff hours per week. That is your highest-ROI digitization target. Do not digitize everything at once — pick one process, automate it completely, measure the result, then move to the next." },
      { type: "heading", content: "What It Costs in Nigeria" },
      { type: "list", items: ["Simple booking system: ₦200K – ₦500K", "Payment link integration (Paystack): ₦50K – ₦150K", "Custom inventory system: ₦250K – ₦700K", "Simple CRM with WhatsApp integration: ₦300K – ₦800K", "Full business operations platform: ₦1.5M – ₦4M"] },
      { type: "heading", content: "What You Should NOT Do" },
      { type: "paragraph", content: "Do not buy an expensive off-the-shelf ERP system (SAP, Odoo) when you have 10 employees. Do not build a mobile app before you have a web system. Do not try to digitize ten things simultaneously. And do not let a developer talk you into a 'full solution' when you only need a booking form and a payment link." },
    ]
  },
  {
    slug: "how-to-hire-a-web-developer-in-nigeria",
    title: "How to Hire a Web Developer in Nigeria: What to Look For (and What to Avoid)",
    excerpt: "Most businesses in Nigeria have been burned by a bad hire or a bad agency. This guide tells you exactly what to look for, what questions to ask, and what red flags to run from.",
    category: "Hiring & Outsourcing",
    readTime: "6 min read",
    date: "2026-06-02",
    body: [
      { type: "paragraph", content: "I hear the same story every month. A business owner paid a developer 60–70% upfront, received a project that never fully worked, and the developer became unreachable. Here is how to protect yourself and find a developer who will actually deliver." },
      { type: "heading", content: "The Most Important Thing: Evaluate the Portfolio" },
      { type: "paragraph", content: "Ask to see live URLs — not screenshots, not Figma designs, not video demos. Live, working URLs you can actually use. Click through the product. Check if it loads fast. Submit a test form. Try it on mobile. A developer who cannot show you live work they have built is a developer who has not built much." },
      { type: "callout", label: "Red flag", content: "If a developer shows you 'projects' that are only Figma mockups or static screenshots and claims they 'built' them — that is a designer presenting work, not a developer. Insist on live links." },
      { type: "heading", content: "Questions to Ask Before You Pay a Single Naira" },
      { type: "list", items: ["What is your exact tech stack for this project? (They should answer without hesitating)", "Can I speak to a previous client? (Legitimate developers will provide references)", "What happens if bugs are found after launch? (Should include a support window)", "Who owns the code and domain after I pay? (You should own everything)", "What does the handover look like? (Source code, database backup, admin credentials)", "What is your payment milestone structure? (Never pay 100% upfront)"] },
      { type: "heading", content: "Payment Structure That Protects You" },
      { type: "paragraph", content: "Never pay more than 30–40% upfront for any project. A fair structure for most Nigerian web projects: 30–40% to start, 30% on delivery of the design/frontend, 30% on full delivery and testing. The final payment only releases when you have tested the product and it works as agreed." },
      { type: "heading", content: "Where to Find Legitimate Developers in Nigeria" },
      { type: "list", items: ["LinkedIn — search 'web developer Lagos' or 'full-stack developer Nigeria', check their post history and engagement", "Upwork — Nigerian developers with verified reviews and work history, more expensive but protected", "Direct referrals — best source; ask founders in your network who built their product", "Tech Twitter/X — developers who write about what they build are usually serious practitioners"] },
      { type: "heading", content: "Red Flags That Should Make You Walk Away" },
      { type: "list", items: ["Asks for full payment upfront with no milestone structure", "Cannot explain what technology they will use or why", "No live portfolio links — only screenshots or mockups", "Gives you a quote within 10 minutes of hearing your requirements (a serious developer asks questions)", "Promises an unusually fast timeline without asking about feature complexity", "Disappears between initial contact and project start — they will disappear during the project too"] },
      { type: "heading", content: "How to Write a Brief That Gets Accurate Quotes" },
      { type: "paragraph", content: "Describe what your users will do, screen by screen. 'I need a booking app' tells a developer nothing. 'A customer lands on the site, selects a service, picks a date and time, enters their details, pays via Paystack, and receives a WhatsApp confirmation' — that is a brief. The more specific your description, the more accurate the quote and the less room for scope disputes later." },
    ]
  },
  {
    slug: "wordpress-vs-nextjs-which-is-better-for-nigerian-business",
    title: "WordPress vs Next.js: Which Is Better for a Nigerian Business Website?",
    excerpt: "WordPress runs 43% of the internet but that does not mean it is right for your Nigerian business. A direct comparison with real performance data and naira cost figures.",
    category: "Technical Decisions",
    readTime: "6 min read",
    date: "2026-05-19",
    body: [
      { type: "paragraph", content: "The 'WordPress vs custom code' question comes up in almost every initial client conversation. The honest answer is not that one is universally better — it is that they are optimised for completely different use cases." },
      { type: "heading", content: "When WordPress Is the Right Choice" },
      { type: "paragraph", content: "WordPress makes sense when your website's primary job is publishing content and non-technical staff need to edit it regularly without developer help. A news blog, a church website, a simple brochure site. If your site is 10 static pages that change twice a year, WordPress is faster to set up and cheaper short-term." },
      { type: "heading", content: "When Next.js (Custom Code) Is the Right Choice" },
      { type: "paragraph", content: "Custom code is the right choice the moment your website needs to do something specific to your business — custom booking logic, payment processing, user accounts, inventory integration, an admin dashboard, real-time data. The moment you have these requirements, WordPress becomes a platform you are fighting instead of using." },
      { type: "callout", label: "Real numbers from a client project", content: "A logistics client came to me with a WordPress site scoring 28/100 on Google PageSpeed. 47 plugins, constant plugin conflicts, ₦80,000/month in 'maintenance' that was really firefighting. We rebuilt in Next.js: performance score 96/100, zero plugins, ₦0/month maintenance for 8 months. The rebuild paid for itself in 6 months of saved maintenance fees." },
      { type: "heading", content: "Performance: Why This Matters for Nigerian Businesses" },
      { type: "paragraph", content: "The majority of your customers are on mobile data. A 1-second improvement in load time increases conversions by 7%. A Next.js site, built correctly, loads 3–5x faster than an equivalent WordPress site. In a market where most people are on 4G data and paying per MB, speed is a direct revenue driver." },
      { type: "heading", content: "Total Cost of Ownership Over 2 Years" },
      { type: "list", items: ["WordPress build: ₦150K – ₦400K upfront + ₦30K – ₦100K/year plugins + ₦30K – ₦150K/year maintenance", "Next.js build: ₦350K – ₦900K upfront + ₦20K – ₦50K/year hosting + near-zero maintenance", "WordPress total at 2 years: ₦340K – ₦950K", "Next.js total at 2 years: ₦390K – ₦1M", "The difference narrows or reverses at 18–24 months, before accounting for performance gains"] },
      { type: "heading", content: "My Recommendation" },
      { type: "paragraph", content: "If your website is your product, your booking system, your customer portal, or your operations tool — build with Next.js. If your website is a simple marketing brochure that non-technical staff edit frequently — WordPress is fine. The question to ask: 'If this website goes down or performs badly, does it cost my business money?' If yes, use Next.js." },
    ]
  },
  {
    slug: "how-to-accept-online-payment-nigeria",
    title: "How to Accept Online Payment on Your Nigerian Website (Complete Setup Guide)",
    excerpt: "Step-by-step guide to accepting card, bank transfer, and USSD payments on your Nigerian business website — with exact integration steps for Paystack.",
    category: "Tools & Platforms",
    readTime: "7 min read",
    date: "2026-05-05",
    body: [
      { type: "paragraph", content: "Accepting online payment in Nigeria is now simpler than it has ever been. Paystack has made developer integration clean, customer experience smooth, and settlement fast. Here is exactly how to do it." },
      { type: "heading", content: "What You Need Before You Start" },
      { type: "list", items: ["A registered Nigerian business (or your personal name is sufficient for sole traders)", "A valid Nigerian bank account for settlement", "A Paystack business account (free to create at paystack.com)", "Your website (any stack — Paystack integrates with everything)", "Your CAC document if you want to remove the ₦2,000 transaction cap"] },
      { type: "heading", content: "The Three Types of Integration" },
      { type: "subheading", content: "Option 1: Paystack Payment Link (No Code Required)" },
      { type: "paragraph", content: "Create a payment page directly in your Paystack dashboard. Share the link on WhatsApp, Instagram, or add a button on your website. Best for: service businesses, freelancers, or businesses that want payment capability within 30 minutes without developer help." },
      { type: "subheading", content: "Option 2: Paystack Inline (Light Code Integration)" },
      { type: "paragraph", content: "Paste a script tag into your website and call the Paystack popup from a button click. The customer completes payment in a Paystack-hosted modal — you never touch card data. This works in plain HTML websites, WordPress, any platform." },
      { type: "subheading", content: "Option 3: Full API Integration (Custom Checkout)" },
      { type: "paragraph", content: "Build your own checkout UI and call the Paystack API from your backend. This gives you full control over the user experience, allows you to store transaction records in your own database, and enables split payments, subscriptions, and automated refunds. This is what I implement for clients who need a professional e-commerce or SaaS product." },
      { type: "heading", content: "Payment Methods Your Customers Can Use" },
      { type: "list", items: ["Nigerian debit/credit cards (Verve, Mastercard, Visa)", "Bank transfer (customers transfer to a generated virtual account)", "USSD (no internet required — works on any phone)", "Mobile money (limited availability)", "QR code payment"] },
      { type: "callout", label: "Critical for Nigerian e-commerce", content: "Always enable bank transfer as a payment option. In 2026, bank transfer has overtaken card as the most used payment method for online purchases above ₦10,000. Customers who see only 'pay with card' will often abandon checkout and send a manual transfer directly — which you then have to reconcile manually." },
      { type: "heading", content: "Settlement and Fees" },
      { type: "paragraph", content: "Paystack settles to your bank account the next business day. Fees: 1.5% per transaction for Nigerian cards, capped at ₦2,000 per transaction. Transactions below ₦2,500 are free. International cards: 3.9% + ₦100. For high-volume businesses, Paystack offers negotiated rates." },
      { type: "heading", content: "What to Do After a Successful Payment" },
      { type: "paragraph", content: "Always verify transactions server-side. Do not trust client-side callbacks — a customer can manipulate the frontend to fake a successful payment response. After every payment, call the Paystack verify endpoint from your backend, check that the amount matches what you expected, and only then confirm the order or grant access." },
    ]
  },
];
