# Justdial Business Leads Scraper

[![Run on Apify](https://apify.com/actor-badge?actor=factden/justdial-business-leads)](https://apify.com/factden/justdial-business-leads?fpr=factden)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Documentation and examples for the **[Justdial Business Leads Scraper](https://apify.com/factden/justdial-business-leads?fpr=factden)** on the Apify Store, an actor that extracts **business leads with real phone numbers, emails, owner names and GST** from [Justdial](https://www.justdial.com), India's largest business directory.

> ▶ **[Run it on Apify →](https://apify.com/factden/justdial-business-leads?fpr=factden)**

## What it extracts

Pick Indian **cities or states + business categories** (Restaurants, Gyms, Dentists, Plumbers, and more), or paste Justdial URLs, and get a clean, deduplicated lead list:

- **Real phone number** (not the virtual / call-tracking number), including the real mobile behind paid advertisers
- **Email**, **WhatsApp**, **business owner / contact-person name + role**
- **GST number** (full, unmasked, the web page masks it) plus firmographics (legal name, year established, employees, turnover)
- Full **address**, area, city, pincode, **GPS**, rating, review count, category
- `allPhones` / `allEmails` / `allContactPersons`: every contact a business lists, not just the first

Two modes: cheap **Discovery** (listings only) and full **Enriched leads** (all contact + firmographic data). See [FIELDS.md](FIELDS.md) for the full field dictionary.

## Quick start

### API (cURL)
```bash
curl -X POST "https://api.apify.com/v2/acts/factden~justdial-business-leads/runs?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @examples/input.json
```

### Python (Apify client)
```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("factden/justdial-business-leads").call(run_input={
    "cities": ["Mumbai"],
    "categories": ["Restaurants"],
    "maxItems": 100,
    "enrichContacts": True,
})
for lead in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(lead["name"], lead["phone"], lead.get("email"), lead.get("gstNumber"))
```

More: [`snippets/`](snippets/) (Python, JavaScript, shell) and [`examples/`](examples/) (input + sample output as JSON and CSV).

## Output

See [`examples/leads.sample.json`](examples/leads.sample.json) and [`examples/leads-sample.csv`](examples/leads-sample.csv). Download from any run in JSON, CSV, Excel or HTML.

## Use cases

- B2B lead lists for cold calling, WhatsApp outreach and telecalling
- CRM enrichment (add real phone, email, owner name, GST to an existing list)
- Market mapping and TAM analysis (cheap Discovery mode, no contacts)
- Supplier / vendor discovery by city and category

## Cost

Pay-per-result with an Apify free trial to start. Enriched leads and Discovery are billed at different per-result rates (see the [Pricing tab](https://apify.com/factden/justdial-business-leads?fpr=factden)). You pay only for rows delivered.

## FAQ

**Are the phone numbers real?** Yes, the number Justdial displays, and for paid advertisers the real underlying mobile, not just the call-tracking number.

**Do I get the GST number?** Yes, the full unmasked GSTIN when the business has one on file (Justdial masks it on the web page).

**Is it legal?** It collects only publicly available business-listing data. You are responsible for complying with Justdial's Terms, India's DPDP Act, GDPR/CCPA and DND / do-not-contact rules. See [the legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

**Can I use it with the API / MCP?** Yes, via the Apify API/SDK, scheduled tasks, or an MCP server for AI agents.

## Other FactDen scrapers

- [MCA India Company & Director Data Scraper](https://apify.com/factden/mca-company-director-scraper?fpr=factden) ([docs](https://github.com/factden/mca-company-director-scraper))
- [Indeed Jobs Scraper](https://apify.com/factden/indeed-jobs-scraper?fpr=factden)
- [Zomato Restaurant Reviews Scraper](https://apify.com/factden/zomato-restaurant-reviews-scraper?fpr=factden)
- [G2 Software Reviews Scraper](https://apify.com/factden/g2-reviews-scraper?fpr=factden)

[**All FactDen actors →**](https://apify.com/factden?fpr=factden)

## License

MIT, see [LICENSE](LICENSE). This repository contains documentation and examples only; the scraper source is not included.
