# Examples

- `input.json`, a ready-to-run actor input (Mumbai restaurants, enriched).
- `leads.sample.json`, one representative enriched lead (full field shape).
- `leads-sample.csv`, the same data as CSV.

Run with the input:
```bash
curl -X POST "https://api.apify.com/v2/acts/factden~justdial-business-leads/runs?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" -d @input.json
```
