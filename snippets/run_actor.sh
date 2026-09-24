#!/usr/bin/env bash
# Justdial Business Leads Scraper — https://apify.com/factden/justdial-business-leads
curl -X POST "https://api.apify.com/v2/acts/factden~justdial-business-leads/runs?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"cities":["Mumbai"],"categories":["Restaurants"],"maxItems":100,"enrichContacts":true}'
