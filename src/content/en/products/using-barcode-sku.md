---
title: "Using Barcodes and SKUs"
excerpt: "Complete guide to using barcodes and SKUs in Kelola. Learn the differences, how to assign them, and best practices for efficient inventory tracking."
readingTime: 5
lastUpdated: "2026-02-15"
category: "products"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Understand the difference between barcodes and SKUs
- Assign and manage SKUs effectively
- Use barcodes for quick product lookup
- Implement best practices for tracking

---

## Barcode vs SKU: What's the Difference?

| Feature | Barcode | SKU |
|---------|---------|-----|
| **Format** | Numbers (scannable) | Alphanumeric code |
| **Source** | Manufacturer/Global | Internal/Your business |
| **Uniqueness** | Globally unique | Unique to your business |
| **Scanning** | Yes - with scanner | No - manual entry |
| **Best For** | Fast checkout | Internal organization |

---

## What is a Barcode?

Barcodes are machine-readable codes used worldwide.

### Types Supported

**EAN/UPC:**
- 8, 12, or 13 digits
- Found on retail products
- Example: `8991234567890`

**Code 128:**
- Variable length
- Letters and numbers
- Good for internal use

**QR Codes:**
- 2D format
- Can store more data
- Growing popularity

### Where Barcodes Come From

- **Manufacturer printed** - On packaged goods
- **Self-generated** - Print your own labels
- **Retailer assigned** - Some businesses create their own

---

## What is an SKU?

SKU = Stock Keeping Unit

Your internal product identifier.

### SKU Format Examples

```
Simple:        PROD001, PROD002
Category:      BEV-COF-001 (Beverage - Coffee)
Variant:       SHIRT-BLU-L (Shirt - Blue - Large)
Hybrid:        2024-ELC-056
```

### SKU Best Practices

**Keep It Short:**
- ✅ `TEA-001` (7 characters)
- ❌ `BEVERAGE-TEA-GREEN-100G-2024-001` (too long)

**Use Consistent Format:**
```
Format: [CATEGORY]-[VARIANT]-[NUMBER]
Examples:
- BEV-COF-001
- BEV-TEA-001
- FOD-SNA-001
```

**Make It Readable:**
- Staff should understand the code
- Avoid random numbers only
- Use meaningful abbreviations

---

## Adding Barcodes to Products

### Method 1: Manual Entry

1. Go to **Products** → Add/Edit
2. Find **Barcode** field
3. Type barcode number
4. Save

### Method 2: Scan with Camera

1. In product form, tap barcode field
2. Select **Scan**
3. Point camera at barcode
4. Auto-fills the field

### Method 3: USB Scanner (Web)

1. Use web version (web.kelola.co)
2. Connect USB barcode scanner
3. Click barcode field
4. Scan product

---

## Adding SKUs to Products

### Creating SKU System

**Step 1: Decide Format**
```
Options:
- Category-Number: BEV-001
- Category-Variant-Number: BEV-GRN-001
- Year-Category-Number: 24-BEV-001
```

**Step 2: Assign Sequentially**
- Start at 001
- Increase by 1 for each product
- Don't reuse old SKUs

**Step 3: Document Your System**
- Write down your format
- Train staff on the system
- Be consistent

### Entering SKUs

1. Open product details
2. Find **SKU** field
3. Enter code
4. Save

> **Tip:** SKUs must be unique. Kelola will warn if you try to use a duplicate.

---

## Using Barcodes in Daily Operations

### Stock In (Purchases)

1. Open **Stock In**
2. Tap **Scan**
3. Scan product barcode
4. Product auto-adds to list
5. Enter quantity

**Speed Benefit:**
- Without barcode: Search → Select (10 seconds)
- With barcode: Scan (2 seconds)

### Stock Out (Sales)

1. Open **Stock Out**
2. Tap **Scan**
3. Scan each item customer buys
4. Items add automatically

**For Multiple Items:**
- Scan same barcode multiple times for quantity
- Or scan once and edit quantity

### Stock Lookup

1. Go to **Products**
2. Use search bar
3. Scan or type barcode/SKU
4. Find product instantly

---

## Barcode and SKU Best Practices

### For New Products

✅ **Assign SKU immediately**
- Don't wait until later
- Easier when adding product

✅ **Add barcode if available**
- Check packaging
- Use manufacturer barcode

✅ **Be consistent**
- Same format for all SKUs
- Same process every time

### For Existing Products

✅ **Backfill missing SKUs**
- Set aside time to update
- Prioritize popular products

✅ **Print barcode labels**
- For products without barcodes
- Use consistent label format

### For Operations

✅ **Train staff**
- Everyone should understand SKUs
- Practice scanning

✅ **Label shelves**
- Show SKU or barcode locations
- Easier stock counting

---

## Generating Barcodes

### When to Generate Your Own

- Products without manufacturer barcodes
- Internal products
- Repackaged goods

### How to Generate

**Option 1: Kelola Web**
- Some versions support label printing
- Check web.kelola.co

**Option 2: Third-Party Tools**
- Online barcode generators
- Label printing software
- Design tools (Canva, etc.)

**Option 3: Professional Services**
- Printing companies
- Label suppliers
- POS equipment vendors

### Barcode Label Format

**Standard Size:**
- 50mm × 25mm (common)
- 40mm × 20mm (small)
- 80mm × 50mm (large)

**Include on Label:**
- Barcode
- Product name
- SKU
- Price (optional)

---

## Troubleshooting

### "Barcode not scanning"

**Check:**
- Camera lens is clean
- Good lighting
- Barcode not damaged
- Correct barcode type

**Try:**
- Manual entry
- Different angle
- Better lighting

### "SKU already exists"

**Solution:**
- Use different SKU
- Check existing product
- May be duplicate entry

### "Barcode already assigned"

**Solution:**
- Verify if same product
- May need to merge products
- Contact support if error

---

## FAQ

**Q: Do I need both barcode and SKU?**
A: Not required, but recommended. SKU is mandatory for organization, barcode is optional but speeds up operations.

**Q: Can I change a barcode later?**
A: Yes, but be careful if you've already printed labels or shared the barcode.

**Q: What if my supplier changes barcodes?**
A: Update in Kelola. You can also keep old barcode in notes.

**Q: Can two products have the same barcode?**
A: No, barcodes must be unique per product.

**Q: Should I include price in SKU?**
A: No, prices change. Keep SKUs price-independent.

**Q: Can SKUs have letters?**
A: Yes, SKUs can be alphanumeric (letters and numbers).

**Q: How long should SKUs be?**
A: 6-12 characters is ideal. Keep them short but meaningful.

