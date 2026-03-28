# BurnRate API

A lightweight Express.js API server serving sample Google Ads campaign data.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server runs on **http://localhost:3001**.

## API Endpoints

### `GET /api/campaigns`

Returns a JSON array of Google Ads campaigns.

**Campaign fields:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Campaign name |
| `platform` | string | Advertising platform |
| `spend` | number | Total spend in USD |
| `clicks` | number | Total clicks |
| `impressions` | number | Total impressions |
| `ctr` | number | Click-through rate (%) |
| `cpc` | number | Cost per click (USD) |
| `mqls` | number | Marketing qualified leads |
| `sqls` | number | Sales qualified leads |
| `costPerSql` | number | Cost per SQL (USD) |
| `status` | string | Campaign status (Active / Paused) |

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
