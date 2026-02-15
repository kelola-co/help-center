---
title: "Adding and Managing Products"
excerpt: "Complete guide to adding products to Kelola. Learn about SKUs, barcodes, categories, pricing, and best practices for organizing your inventory."
readingTime: 6
lastUpdated: "2026-02-15"
category: "products"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Add products with complete details
- Use SKUs and barcodes effectively
- Organize products with categories
- Set pricing and initial stock
- Manage product images

---

## Adding a Single Product

### Step 1: Open Add Product Screen

1. Tap **"Products"** in the bottom navigation
2. Tap the **"+"** button (top right)
3. The **Add Product** form opens

<!-- TODO: Screenshot - Add Product button location -->

### Step 2: Enter Basic Information

#### Required Fields
| Field | Description | Example |
|-------|-------------|---------|
| **Product Name** | What you call the product | "Organic Green Tea 100g" |
| **Price** | Selling price to customers | 50000 |

#### Optional Fields (Recommended)
| Field | Description | Example |
|-------|-------------|---------|
| **SKU** | Your internal product code | "TEA-GRN-100" |
| **Barcode** | Scannable product code | "8991234567890" |
| **Category** | Product grouping | "Beverages" |
| **Initial Stock** | Current quantity | 50 |
| **Description** | Product details | "Premium organic tea from Sumatra" |

<!-- TODO: Screenshot - Add Product form with example data -->

### Step 3: Add Product Image

1. Tap the **camera icon** or image placeholder
2. Choose source:
   - **Take Photo** — Use camera (mobile)
   - **Choose from Gallery** — Select existing photo
   - **Remove** — Delete current image
3. (Optional) **Crop** the image to focus on the product
4. Tap **"Done"**

> **💡 Best Practice:** Use clear, well-lit photos with white/neutral backgrounds. Square images work best.

### Step 4: Save the Product

1. Review all entered information
2. Tap **"Save"** (top right)
3. Success message appears

✅ **Success Check:** Your product now appears in the Products list!

---

## Understanding Product Fields

### SKU (Stock Keeping Unit)

Your internal product identifier.

**Why Use SKUs?**
- Track products without barcodes
- Create your own naming system
- Easier internal communication

**SKU Best Practices:**
```
Format: [CATEGORY]-[VARIANT]-[SIZE]
Examples:
- TEA-GRN-100 (Tea, Green, 100g)
- SHRT-BLU-L (Shirt, Blue, Large)
- SNCK-CHIP-50 (Snacks, Chips, 50g)
```

### Barcode

Scannable product identifier.

**Types Supported:**
- UPC/EAN (retail products)
- Code 128 (internal use)
- QR Codes (flexible use)

**How to Add:**
1. **Manual entry**: Type the barcode number
2. **Scan**: Use camera to scan (mobile app)
3. **External scanner**: Use barcode scanner (web)

> **Note:** Barcodes must be unique. If you get an error, the barcode might already be assigned to another product.

### Category

Organize products into groups.

**Why Categories Matter:**
- Faster product finding
- Better reporting
- Cleaner organization

**Creating Categories:**
1. In the Category field, tap **"Add New"**
2. Enter category name
3. Tap **"Save"**

<!-- TODO: Screenshot - Category selection dropdown -->

**Category Examples:**
- Food & Beverages
- Electronics
- Clothing
- Household
- Raw Materials

---

## Bulk Adding Products

For adding multiple products quickly:

### Method 1: Copy from Existing
1. Find a similar product
2. Tap **"Duplicate"** (three dots menu)
3. Edit the details
4. Save as new product

### Method 2: Web Import
1. Go to **web.kelola.co** on computer
2. Navigate to **Products → Import**
3. Download the **CSV template**
4. Fill in your products
5. Upload the file

<!-- TODO: Screenshot - Import products interface -->

---

## Managing Product Details

### Viewing Product Information

1. Go to **Products**
2. Tap any product
3. View complete details:
   - Basic info (name, SKU, barcode)
   - Current stock quantity
   - Price history
   - Transaction history
   - Product image

<!-- TODO: Screenshot - Product detail screen -->

### Editing a Product

1. Open product details
2. Tap **"Edit"** (top right)
3. Modify any field
4. Tap **"Save"**

> **⚠️ Important:** Editing a product updates it everywhere. Previous transactions keep the original price for accurate reporting.

### Deleting a Product

1. Open product details
2. Tap **"Delete"** (three dots menu)
3. Confirm deletion

> **⚠️ Warning:** You can only delete products with **zero stock and no transaction history**. Consider archiving instead by setting stock to 0.

---

## Product Organization Best Practices

### Naming Conventions

**Good Product Names:**
- ✅ "Organic Coffee Beans - Dark Roast 250g"
- ✅ "T-Shirt Cotton - Black - Size M"
- ✅ "Wireless Mouse - Logitech M185"

**Avoid:**
- ❌ "Coffee" (too vague)
- ❌ "Item 1" (not descriptive)
- ❌ "New Product" (not helpful)

### Category Hierarchy Tips

Keep it simple but meaningful:
```
Level 1: Major Categories (5-10)
  → Beverages
  → Food
  → Electronics

Level 2: Sub-grouping (if needed)
  → Beverages → Coffee & Tea
  → Beverages → Soft Drinks
```

### Stock Management Setup

**Initial Stock:**
- Add current quantity when creating product
- Use Stock In for future purchases
- Use Stock Out for sales

**Low Stock Alerts:**
1. Go to **Stock Alert** from main menu
2. Set minimum quantity per product
3. Get notified when stock runs low

---

## Advanced Product Features

### Product Variants

For products with options (size, color, etc.):

**Option 1: Separate Products**
- Create each variant as its own product
- Use consistent naming: "T-Shirt - Red - M", "T-Shirt - Red - L"

**Option 2: Single Product with Notes**
- Use description field for variants
- Track total quantity only

### Bundle Products

For selling multiple items together:

1. Create a "Bundle" product
2. Set price for the bundle
3. In notes, list component products
4. When selling, manually deduct component stock

> **Note:** Automated bundle tracking coming in future updates.

---

## Troubleshooting

### "Barcode already exists"
- Check if the product already exists in your catalog
- Ensure you're not duplicating barcodes
- Contact support if you believe this is an error

### "Cannot delete product"
- Product has stock history — use Stock Out to zero it first
- Product has transactions — cannot delete, only edit

### "Product not showing in search"
- Check spelling in product name
- Try searching by SKU or barcode
- Verify product wasn't archived

### "Image upload failed"
- Check file size (max 5MB)
- Use JPG or PNG format
- Ensure stable internet connection

---

## FAQ

**Q: How many products can I add?**
A: Depends on your plan. Free plan allows up to 100 products. Premium plans offer unlimited products.

**Q: Can I import products from Excel?**
A: Yes! Use the web interface at web.kelola.co for CSV import.

**Q: What's the difference between SKU and Barcode?**
A: SKU is your internal code, barcode is the manufacturer's scannable code. Both help identify products.

**Q: Can I change a product's barcode later?**
A: Yes, edit the product and update the barcode field. Ensure the new barcode isn't already in use.

**Q: How do I track product cost/pricing history?**
A: Kelola tracks costs through Stock In transactions. View transaction history on each product page.

---

## Related Articles

- [Barcode Scanner →](../features/barcode-scanner)
- [Recording Stock In →](../stock/record-stock-in)
- [Recording Stock In →](../stock/record-stock-in)
- [Setting Stock Alerts →](../stock/managing-stock-alerts)
- [Product Catalogs →](../catalog/creating-catalogs)
