# Justdial Business Leads Scraper — https://apify.com/factden/justdial-business-leads
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
