// Justdial Business Leads Scraper — https://apify.com/factden/justdial-business-leads
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('factden/justdial-business-leads').call({
  cities: ['Mumbai'],
  categories: ['Restaurants'],
  maxItems: 100,
  enrichContacts: true,
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
items.forEach((l) => console.log(l.name, l.phone, l.email, l.gstNumber));
