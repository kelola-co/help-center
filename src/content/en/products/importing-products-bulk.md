---
title: "Bulk Import Products with Excel"
excerpt: "Learn how to import multiple products at once using Excel or CSV files, saving time when adding products one by one"
readingTime: 8
lastUpdated: "2026-02-16"
category: "products"
difficulty: "intermediate"
audience: "all"
---

## What You'll Learn

After completing this guide, you'll be able to:
- Bulk import products using Excel/CSV files
- Use the paste from Excel feature directly
- Set up multiple wholesale price tiers
- Avoid common import errors

---

## Prerequisites

Bulk product import is only available on the **web version**

**What you need:**
- A Kelola account that's logged in
- An Excel (.xlsx) or CSV file with product data
- Required product data: name, SKU, initial stock

---

## Accessing the Product Import Page

### Step 1: Open the Products Page

1. Open your browser and go to **[web.kelola.co](https://web.kelola.co)**
2. Log in with your Google account
3. From the left menu, select **"Products"**

### Step 2: Open the Import Page

1. On the product list page, look for the **"Import Products"** or **"Import"** button
2. Click the button to open the product import page

> **💡 Tip:** The import button is located near the "+" button for adding new products

---

## Preparing Data in Excel

### Supported Data Structure

| # | Column | Required | Description | Example |
|---|--------|----------|-------------|---------|
| 1 | Product Name | ✅ Required | Product name max 100 characters | "Organic Green Tea 100g" |
| 2 | Category | ❌ Optional | Product group | "Beverages" |
| 3 | SKU | ✅ Required | Internal product code | "TEA-GRN-100" |
| 4 | Initial Stock | ✅ Required | Current inventory count | 50 |
| 5 | Expiry Date | ❌ Optional | Product expiration date (DD-MM-YYYY) | 31-12-2026 |
| 6 | Description | ❌ Optional | Product details | "Premium organic tea" |
| 7 | Buying Price | ❌ Optional | Purchase cost | 25000 |
| 8 | Selling Price | ✅ Required | Retail price | 50000 |

### Wholesale Prices (Optional)

You can add up to 5 wholesale price columns:

| Column | Description | Example |
|--------|-------------|---------|
| Wholesale Price 1 | Price for wholesale tier 1 | 40000 |
| Wholesale Price 2 | Price for wholesale tier 2 | 38000 |
| Wholesale Price 3 | Price for wholesale tier 3 | 35000 |

### Sample Excel File

```
| Product Name | Category | SKU        | Stock | Expiry Date | Description        | Buying Price | Selling Price |
|--------------|----------|------------|------|-------------|-------------------|---------------|---------------|
| Green Tea    | Beverages| TEA-GRN-100| 50   | 31-12-2026  | Organic tea       | 25000         | 50000         |
| Black Coffee | Beverages| COF-BLK-250| 30   | 30-06-2026  | Dark roast coffee | 45000         | 80000         |
| Orange Juice | Beverages| JUC-ORA-1L | 100  |             | 100% fresh orange | 15000         | 25000         |
```

---

## Method 1: Paste Data from Excel Directly

The most convenient method is to copy data from Excel and paste into the table:

### Pasting Steps

1. Open the product import page in Kelola
2. Open your Excel file with product data
3. Select the cells containing data (including table headers)
4. Copy the data (Ctrl+C or Cmd+C)
5. Click on the first cell in the Kelola table (Product Name column)
6. Paste the data (Ctrl+V or Cmd+V)

The system will automatically add new rows and arrange the data correctly!

> **⚠️ Note:** Make sure the column order in Excel matches the order in the Kelola table

---

## Method 2: Fill Data in the Table

If you prefer to enter data one field at a time:

### Adding New Rows

1. Click the **"+"** or **"Add Row"** button to add a new row
2. Fill in the data in each column in order

### Using Tab and Enter Keys

- **Tab**: Move to the next column (right)
- **Shift+Tab**: Move back to the previous column (left)
- **Enter**: Move to the next row (down)
- **Arrow Keys**: Move around between cells

### Adding Wholesale Prices

1. Click the **"+"** button in the wholesale price header column
2. Set the column name (e.g., "Wholesale 10 pcs")
3. Enter prices for each product

---

## Validating and Saving

### Data Validation

Before saving, the system will validate:

- ✅ Product name does not exceed 100 characters
- ✅ SKU is not empty
- ✅ Initial stock is not empty
- ✅ Prices are valid numbers (if provided)

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "SKU Required" | SKU field is empty | Fill in SKU for all products |
| "Stock Required" | Stock field is empty | Enter initial stock quantity |
| "Name Too Long" | Name exceeds 100 characters | Shorten the name |
| "Invalid Price" | Letters in price field | Enter only numbers |

### Saving

1. Review all data one more time
2. Click **"Save Products"**
3. Wait for the upload to complete
4. A confirmation message will appear when done

✅ **Check Success:** All products will now appear in your product list!

---

## Tips and Best Practices

### Preparing Your File

1. **Use the standard template** - Download the template from Kelola to ensure correct column order
2. **Validate data first** - Clean your data before importing, remove empty rows
3. **Back up your data** - Keep your Excel file as a backup

### Avoiding Issues

- **Don't use special symbols** in product names, such as `"|"`, `"\"`, `"/"`
- **SKU must be unique** - The system will reject if SKU already exists
- **Check date format** - Use DD-MM-YYYY format

### Limits

- Maximum **5 wholesale price columns**
- Product name **maximum 100 characters**
- No limit on rows to import (depends on your subscription plan)

---

## Troubleshooting

### "Import Failed"

1. Check that all required data is complete
2. Look at the error message for each row
3. Fix the errors and try again

### "Duplicate SKU"

- Change the SKU to be unique from existing products
- Or edit the existing product instead

### "Data Incorrect After Paste"

- Check the column order in Excel
- Try pasting one row at a time instead of multiple rows at once

---

## FAQ

**Q: How many products can I import at once?**
A: There's no specific limit, but it depends on your subscription plan

**Q: Can I update existing products with import?**
A: No, import only adds new products. To update, edit the existing products instead

**Q: What if I don't have an SKU?**
A: SKU is required - you need to create your own, such as a 5-digit product code

**Q: Can I import from CSV files?**
A: Yes, the system supports both Excel (.xlsx) and CSV

---

## Summary

Bulk importing products with Excel saves significant time, especially when you need to add hundreds of products. Try this feature when starting your business or updating your product catalog!

If you have more questions, contact support anytime
