const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const campaigns = [
  {
    name: "Brand Awareness Q1",
    platform: "Google Ads",
    spend: 12450.00,
    clicks: 8320,
    impressions: 198400,
    ctr: 4.19,
    cpc: 1.50,
    mqls: 142,
    sqls: 38,
    costPerSql: 327.63,
    status: "Active"
  },
  {
    name: "Retargeting - Bottom Funnel",
    platform: "Google Ads",
    spend: 5870.50,
    clicks: 3105,
    impressions: 62100,
    ctr: 5.00,
    cpc: 1.89,
    mqls: 98,
    sqls: 29,
    costPerSql: 202.43,
    status: "Active"
  },
  {
    name: "Competitor Conquest",
    platform: "Google Ads",
    spend: 9200.00,
    clicks: 4600,
    impressions: 115000,
    ctr: 4.00,
    cpc: 2.00,
    mqls: 74,
    sqls: 18,
    costPerSql: 511.11,
    status: "Paused"
  },
  {
    name: "Product Launch - Enterprise",
    platform: "Google Ads",
    spend: 18750.00,
    clicks: 6250,
    impressions: 250000,
    ctr: 2.50,
    cpc: 3.00,
    mqls: 210,
    sqls: 55,
    costPerSql: 340.91,
    status: "Active"
  },
  {
    name: "Mid-Market Demand Gen",
    platform: "Google Ads",
    spend: 7340.00,
    clicks: 5245,
    impressions: 131125,
    ctr: 4.00,
    cpc: 1.40,
    mqls: 88,
    sqls: 22,
    costPerSql: 333.64,
    status: "Active"
  }
];

app.get('/api/campaigns', (req, res) => {
  res.json(campaigns);
});

app.listen(PORT, () => {
  console.log(`BurnRate API server running on http://localhost:${PORT}`);
});
