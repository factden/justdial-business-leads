# Field dictionary

One row per business. Contact and firmographic fields are populated in **Enriched leads** mode (`enrichContacts: true`), per availability. **Discovery** mode returns the listing fields only.

| Field | Type | Description |
|---|---|---|
| `name` | string | Business name |
| `category` | string | Business category |
| `listingType` | string | `Free` or `Paid` (advertiser) listing |
| `phone` | string | Primary phone, the real number (advertiser real mobile when available) |
| `phoneType` | string | `real` or `virtual` |
| `whatsapp` | string | WhatsApp number when exposed |
| `virtualNumber` | string | Displayed call-tracking / virtual number |
| `allPhones` | array | Every phone number on the listing |
| `email` | string | Primary email (when on file) |
| `allEmails` | array | Every email on the listing |
| `contactPerson` | string | Owner / contact-person name |
| `contactRole` | string | Their role (Proprietor, Owner, Director) |
| `allContactPersons` | array | Every named contact with role |
| `website` | string | Business website |
| `gstNumber` | string | Full unmasked GSTIN (masked on the web page) |
| `legalName` | string | Registered legal company name |
| `yearEstablished` | string | Year the business started |
| `employeeCount` | string | Employee band |
| `turnover` | string | Annual turnover band |
| `hours` | string | Business hours |
| `paymentModes` | string | Accepted payment methods |
| `cuisine` | string | Cuisine / sub-type (restaurants) |
| `priceRange` | string | Price tier |
| `tagline` | string | Business tagline |
| `socialLinks` | array | Social-profile URLs (when listed) |
| `area`, `city`, `pincode` | string | Address, broken out |
| `address` | string | Full address |
| `latitude`, `longitude` | number | GPS coordinates |
| `rating`, `reviewCount` | number | Star rating and review count |
| `verified` | boolean | JD-verified listing |
| `businessUrl` | string | Link to the Justdial profile |
| `scrapedAt` | string | ISO timestamp |
| `markdownContent` | string | LLM-ready markdown of the full lead (AI-ingest view) |
