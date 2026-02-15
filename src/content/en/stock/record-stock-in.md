---
title: "Recording Stock In (Purchases)"
excerpt: "Complete guide to recording incoming inventory and purchases in Kelola. Learn how to add stock, track supplier information, manage costs, and handle receiving workflows."
readingTime: 6
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "beginner"
audience: "all"
prerequisites: ["products/adding-products"]
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Record inventory purchases and receipts
- Link stock to suppliers
- Track buying prices and costs
- Handle partial deliveries
- Manage stock in history

---

## What is Stock In?

**Stock In** records products entering your inventory. Use this when:
- ✅ Receiving goods from suppliers
- ✅ Adding initial stock for new products
- ✅ Recording returns from customers
- ✅ Correcting inventory (with notes)
- ✅ Transferring from another location

**Result:** Stock quantity increases, costs are tracked, records are created.

---

## The Stock In Interface

Kelola provides an intuitive two-panel interface:

<!-- TODO: Screenshot - Stock In split-screen view -->

| Panel | Purpose |
|-------|---------|
| **Left Panel** | Product catalog — search and select |
| **Right Panel** | Selected items — quantities and prices |
| **Bottom Bar** | Summary and action buttons |

### Mobile vs. Web

**Mobile App:**
- Swipe between panels
- Optimized for touch
- Camera for barcode scanning

**Web (web.kelola.co):**
- Side-by-side panels
- Keyboard shortcuts
- USB barcode scanner support

---

## Step-by-Step Guide

### Step 1: Access Stock In

1. Open Kelola app
2. Tap **"Stock In"** from main menu, OR
3. Tap **"+"** button → **"Stock In"**

<!-- TODO: Screenshot - Navigation to Stock In -->

### Step 2: Select Products

**Method A: Browse and Tap**
1. Scroll through product catalog (left panel)
2. Use category filters to narrow down
3. Tap product to add to right panel

**Method B: Search**
1. Tap search bar
2. Type product name
3. Tap product from results

**Method C: Barcode Scan (Fastest)**
1. Tap **"Scan"** icon
2. Scan product barcode
3. Product auto-adds to selection

<!-- TODO: Screenshot - Product selection with all three methods -->

> **💡 Pro Tip:** You can add multiple products before proceeding to quantity entry.

### Step 3: Enter Quantities

For each product in the right panel:

1. Tap the **quantity field**
2. Enter number received:
   - Use **+ / -** buttons for small adjustments
   - Type directly for large numbers
3. Quantity updates automatically

**Quantity Tips:**
- Use your unit of measure (pieces, kg, boxes)
- Be consistent with how you sell
- Note: "5 boxes" vs "5 pieces" matters!

### Step 4: Set Buying Prices (Optional but Recommended)

Track what you paid to calculate profit.

1. Tap the **price field** (shows pencil icon)
2. Enter buying price per unit
3. Tap **Save**

**Why This Matters:**
- Accurate profit calculations
- Cost of goods sold (COGS) tracking
- Price change history

> **Note:** Viewing buying prices requires `view_buying_price` permission. Staff without this permission will only see selling prices.

<!-- TODO: Screenshot - Setting buying price -->

### Step 5: Select Supplier (Recommended)

Track who you bought from.

1. Tap **"Choose Supplier"** at top
2. Options:
   - **Select existing**: Search your supplier list
   - **Add new**: Tap "+ New Supplier"
3. Supplier linked to transaction

**Adding a New Supplier:**
1. Tap **"+ New Supplier"**
2. Enter:
   - Supplier name (required)
   - Phone number (optional)
   - Email (optional)
   - Address (optional)
3. Tap **"Save"**

<!-- TODO: Screenshot - Supplier selection and creation -->

> **Benefit:** Track purchases per supplier, manage vendor relationships, simplify reordering.

### Step 6: Set Transaction Date (If Needed)

Default is today. Change for:
- Recording past purchases
- Backdated bookkeeping
- Different accounting period

1. Tap **date field** (top right)
2. Select date from calendar
3. Select time if needed
4. Tap **"Confirm"**

> **Note:** Editing dates may require owner/admin permission depending on your settings.

### Step 7: Add Reference Notes

Add context for future reference:

- **Invoice number**: "INV-2024-00123"
- **PO number**: "PO-45678"
- **Delivery note**: "Received via FedEx"
- **Condition notes**: "2 items damaged"

1. Scroll to **Notes** field (bottom)
2. Type reference information
3. Max 200 characters

<!-- TODO: Screenshot - Notes field with example -->

### Step 8: Review and Submit

Check everything before saving:

| Check | Why It Matters |
|-------|----------------|
| Products correct? | Wrong items = inventory errors |
| Quantities accurate? | Affects stock levels |
| Prices entered? | Impacts profit calculations |
| Supplier selected? | Tracks vendor history |
| Date correct? | Affects reporting periods |

**Submit:**
1. Review summary at bottom:
   - Total products (unique items)
   - Total quantity (all units)
   - Total buying price (if visible)
2. Tap **"Submit"**
3. Success confirmation appears

<!-- TODO: Screenshot - Summary bar with all totals -->

✅ **Success Check:**
- Stock quantities increased
- Transaction saved to History
- Stock Report updated
- Supplier history updated

---

## Special Scenarios

### Partial Delivery

When supplier delivers part of your order:

1. Record only received items
2. Add note: "Partial delivery, remaining 50 units expected Jan 15"
3. Create new Stock In later for remaining items

### Handling Damaged Goods

If some items arrive damaged:

**Option A: Record all, note damage**
1. Enter total received quantity
2. In notes: "5 units damaged, claimed with supplier"
3. Create Stock Out later for damaged items

**Option B: Record only good items**
1. Enter only usable quantity
2. Don't pay for damaged items
3. Separate transaction for replacements

### Multiple Supplier Delivery

If shipment contains items from multiple suppliers:

1. Create **separate Stock In transactions**
2. One per supplier
3. Keeps accounting clean

### Returns to Stock

When customers return items:

1. Create Stock In
2. Select returned products
3. Add note: "Customer return - [Customer name] - [Reason]"
4. Optional: Link to original sale in notes

---

## Stock In Best Practices

### For Accuracy

✅ **Count before entering**
- Physically count items
- Compare to delivery note
- Then enter in Kelola

✅ **Check immediately**
- Verify quality on arrival
- Note damages right away
- Resolve discrepancies with supplier

✅ **Use reference numbers**
- Always link to invoice/PO
- Easier reconciliation
- Audit trail

### For Efficiency

✅ **Barcode scanning**
- Use for large deliveries
- Much faster than manual search
- Reduces errors

✅ **Template approach**
- Common orders = similar entries
- Copy patterns from history
- Train staff on typical workflows

✅ **Regular timing**
- Set specific receiving times
- Batch entries if possible
- Don't let backlog build up

### For Cost Tracking

✅ **Always enter buying prices**
- Even if similar to last time
- Prices change frequently
- Essential for profit reports

✅ **Include all costs**
- Product cost
- Shipping/freight
- Taxes and duties
- Full landed cost if possible

---

## Managing Stock In History

### Viewing Past Entries

1. Go to **History** (bottom nav)
2. Tap **Filter** → Select **"Stock In"**
3. Apply date range if needed
4. Tap any transaction for details

### Editing Stock In

**When allowed (Owner/Admin):**
1. Open transaction from History
2. Tap **"Edit"**
3. Modify fields as needed
4. Save changes

> **⚠️ Warning:** Editing affects inventory levels and reports. Edit carefully!

### Deleting Stock In

**If entered by mistake:**
1. Open transaction
2. Tap **"Delete"** (three dots menu)
3. Confirm deletion
4. Stock automatically adjusted back

> **Note:** Deleting removes the transaction entirely. Consider editing instead if you need record retention.

---

## Troubleshooting

### "Product not found"
- Product may not exist yet — add it first
- Check spelling in search
- Try searching by SKU/barcode

### "Cannot set buying price"
- Requires `view_buying_price` permission
- Contact your admin/owner
- Subscription may limit this feature

### "Stock not updating"
- Check internet connection
- Sync may be pending
- Pull down to refresh

### "Supplier not in list"
- Add new supplier during Stock In
- Or go to Suppliers section first
- Check spelling when searching

### "Duplicate transaction warning"
- Similar transaction recently created
- Verify this is a new delivery
- Check if you're accidentally duplicating

---

## FAQ

**Q: Can I record stock in without a supplier?**
A: Yes, supplier is optional. But tracking suppliers helps with vendor management and reordering.

**Q: What if I don't know the buying price?**
A: You can leave it blank, but your profit reports won't be accurate. Enter estimated price or update later.

**Q: Can I add products during stock in?**
A: Yes! If product doesn't exist, you can create it quickly without leaving the Stock In screen.

**Q: How do I handle returns to supplier?**
A: Use Stock Out with negative effect, or create a specific "Return to Supplier" transaction type (if available).

**Q: Can I import bulk stock in from Excel?**
A: Yes, use the web interface at web.kelola.co for CSV import of large stock receipts.

**Q: What's the difference between Stock In and Stock Audit?**
A: Stock In adds inventory (receiving). Stock Audit corrects inventory to match physical count (adjusting).

