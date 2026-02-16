---
title: "Stock Report"
excerpt: "Comprehensive inventory tracking with product-level details, stock movements, profit analysis, and downloadable reports"
readingTime: 3
lastUpdated: "2026-02-14"
category: "report"
---

## What is the Stock Report?

The **Stock Report** provides detailed insights into your inventory movements and performance. It shows you exactly how much stock has come in, gone out, and the profitability of each product during a specific time period.

## Why Use Stock Reports?

Stock reports help you:
- **Track inventory flow** – Monitor stock in, out, and current levels
- **Identify best-selling products** – See which products have high stock out volumes
- **Analyze product profitability** – Understand which products generate the most profit
- **Optimize stock levels** – Identify slow-moving vs fast-moving inventory
- **Staff performance** – Track which staff members handle the most stock transactions

## Stock Report Dashboard

The dashboard consists of:

### Summary Cards

| Card | Description |
|------|-------------|
| **Total Products** | Total number of products in your catalog |
| **Total Product Quantity** | Sum of all units currently in stock across all products |

### Product Details Table

A comprehensive list showing for each product:

| Column | Description |
|--------|-------------|
| **Product Name** | Product name with image, category, and SKU |
| **Stock In** | Total units received during the selected period |
| **Stock Out** | Total units sold/outgoing during the period |
| **Profit** | Profit generated from this product (requires permission) |
| **Current Stock** | Latest available stock quantity |

> **Note:** Profit data requires permission to view capital prices. If you see "-", you may not have access.

## How to View Stock Reports

### Step 1: Access Stock Reports
1. Open Kelola app
2. From **Home** screen, tap **"View Reports"** (Lihat Laporan)
3. Select **"Stock Report"** (Laporan Stok)

**Note:** Access to reports requires permission. If you don't see the report option, contact your business owner.

### Step 2: Set Date Range
Use the **date picker** to select your analysis period:
- **Quick presets** – Last 7 days, 30 days, this month, last month, etc.
- **Custom range** – Select specific start and end dates

The report will show stock movements that occurred within this date range.

### Step 3: Filter by Staff (Optional)
Use the **Staff Filter** to:
- View stock transactions by specific staff members
- Analyze individual staff performance
- Track who handled specific stock movements

Select one or multiple staff from the dropdown.

**Subscription Required:** Stock Report access requires a paid subscription (Basic, Plus, or Advance plan). Free plan users have limited or no access to detailed reports.

## Understanding the Product Table

### Product Information
Each row shows:
- **Product Image** – Thumbnail of the product
- **Product Name** – Click to see full name if truncated
- **Category** – Product category
- **SKU** – Product SKU code

### Stock In
Total quantity received through:
- Stock In transactions (purchases from suppliers)
- Stock Transfers from other businesses
- Stock Audit adjustments (positive)

### Stock Out
Total quantity outgoing through:
- Stock Out transactions (sales to customers)
- Stock Transfers to other businesses
- Stock Audit adjustments (negative)

### Profit Calculation
```
Product Profit = (Stock Out × Selling Price) − (Stock Out × Buying Price)
```

Or simplified:
```
Profit = Stock Out Quantity × (Selling Price − Buying Price)
```

This shows the gross profit for each product during the selected period.

### Current Stock
The latest available quantity for each product, reflecting all transactions up to now (not just the selected date range).

## Sorting the Report

Click on column headers to sort:

| Sort By | Description |
|---------|-------------|
| **Name** | Alphabetical order by product name |
| **Stock In** | Highest to lowest incoming quantities |
| **Stock Out** | Highest to lowest outgoing quantities |
| **Profit** | Highest to lowest profit (if accessible) |

Click again to reverse the sort order (ascending/descending).

## Analyzing Your Stock Data

### Identify Fast-Moving Products
Sort by **Stock Out** (descending) to see:
- Your best-selling products
- Products that need frequent restocking
- Top performers by volume

### Identify Slow-Moving Products
Sort by **Stock Out** (ascending) to see:
- Products with low sales volume
- Potential dead stock
- Items that may need promotions

### Track Purchase Patterns
Sort by **Stock In** to see:
- Which products you restock most frequently
- Products with high purchasing activity
- Seasonal stocking patterns

### Profitability Analysis
Sort by **Profit** (if accessible) to see:
- Your most profitable products
- High-margin vs high-volume products
- Products contributing most to bottom line

## Downloading Stock Reports

Export detailed stock data to Excel:

1. Apply desired filters (date range, staff)
2. Set your preferred sorting
3. Click the **"Download"** button at the top right
4. The Excel file will include:
   - Product name
   - Category
   - SKU
   - Stock In quantity
   - Stock Out quantity
   - Profit (if accessible)
   - Current stock quantity

> **Tip:** Download reports regularly to track inventory trends over time.

## Common Use Cases

### Weekly Inventory Review
1. Set date range to "Last 7 Days"
2. Review Stock In to see what was received
3. Review Stock Out to see what sold
4. Identify products needing reorder

### Monthly Performance Analysis
1. Set date range to current month
2. Sort by Profit to see top performers
3. Identify products with high Stock In but low Stock Out (overstocking)
4. Plan purchasing strategy for next month

### Staff Performance Review
1. Filter by individual staff member
2. Compare Stock In/Out volumes
3. Identify training needs or top performers

### Seasonal Analysis
1. Set date range to previous season (e.g., last December)
2. Compare with current period
3. Identify seasonal trends
4. Plan inventory for upcoming season

## Tips for Accurate Stock Reporting

### Record All Transactions
- Ensure all Stock In, Stock Out, and Audit transactions are recorded
- Missing transactions will affect report accuracy

### Set Accurate Prices
- Keep buying prices updated for accurate profit calculations
- Set correct selling prices for revenue tracking

### Use Consistent Units
- Ensure product units are consistent (pieces, kg, liters, etc.)
- Mixed units can cause confusion in quantity reporting

### Regular Audits
- Perform stock audits periodically to correct discrepancies
- Adjust stock quantities to match physical counts

## Understanding Stock Movements

### Stock In Sources
Stock In quantities come from:
- **Purchase Orders** – Buying from suppliers
- **Returns** – Customer returns (if recorded as Stock In)
- **Transfers** – Stock received from other business locations
- **Audits** – Positive adjustments from stock counts

### Stock Out Destinations
Stock Out quantities go to:
- **Sales** – Sold to customers
- **Transfers** – Sent to other business locations
- **Damages/Losses** – Recorded through Stock Audit
- **Internal Use** – Used for business operations

### Deleted Products
If you see "Product Deleted" in the report:
- The product was removed from your catalog
- Historical data is preserved for reporting
- SKU and category may show as "Info Not Found"

## How Stock Data is Calculated

### Real-Time Updates
Stock movements are recorded in real-time as you:
- Record Stock In transactions
- Process Stock Out sales
- Perform Stock Audits
- Transfer stock between businesses

### Data Sources
The report combines data from:
- **Stock In transactions** → Incoming quantities
- **Stock Out transactions** → Outgoing quantities
- **Product Catalog** → Current stock levels, prices, details
- **Stock Audits** → Adjustments to quantities

### Date Range Impact
- **Stock In/Out** – Shows only transactions within the selected date range
- **Current Stock** – Shows latest quantity regardless of date range (real-time)
- **Profit** – Calculated based on transactions within the date range

## Related Features

- **[Financial Report](./accounting-report)** – Overall business financial performance
- **[Stock In](../stock/record-stock-in)** – Record incoming inventory
- **[Stock Out](../stock/record-stock-out)** – Record sales and outgoing stock
- **[Stock Transfer](../stock/stock-transfer)** – Move stock between businesses
- **[Product List](../barcode/scanning-barcodes)** – Manage your product catalog

## Need Help?

If you have questions about stock reports or need help analyzing your inventory data, please contact our support team through the **Contact Us** button in the Kelola app.
