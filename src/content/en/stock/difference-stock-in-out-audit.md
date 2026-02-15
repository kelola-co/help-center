---
title: "Understanding Stock Flow: In, Out, and Audit"
excerpt: "Complete guide to understanding Kelola's three stock management operations. Learn when to use Stock In, Stock Out, and Stock Audit for accurate inventory control."
readingTime: 6
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll understand:
- The difference between Stock In, Out, and Audit
- When to use each operation
- How they affect your inventory
- Best practices for each

---

## The Three Stock Operations

Kelola provides three ways to manage inventory:

| Operation | Icon | Purpose | Stock Effect |
|-----------|------|---------|--------------|
| **Stock In** | 📥 | Add inventory | Increases quantity |
| **Stock Out** | 📤 | Remove inventory | Decreases quantity |
| **Stock Audit** | 🔍 | Correct inventory | Adjusts to match reality |

<!-- TODO: Screenshot - Three stock operation icons -->

---

## Stock In: Adding Inventory

### What It Does

Stock In records products **entering** your inventory.

**Stock change:** ⬆️ Quantity increases

### When to Use Stock In

| Scenario | Example |
|----------|---------|
| **Purchasing from suppliers** | Received 100 units from vendor |
| **Customer returns** | Customer brought back 5 items |
| **Production completion** | Manufactured 50 new units |
| **Finding extra stock** | Discovered 10 units not recorded |
| **Transfer from location** | Received stock from Store B |

### What Gets Recorded

- Product(s) added
- Quantity received
- Buying price (cost)
- Supplier (optional)
- Date
- Notes

### Example Workflow

```
Purchase Order → Delivery Received → Stock In Recorded → Inventory Updated
```

**Result:**
- Before: Coffee Beans = 50 units
- Stock In: +100 units
- After: Coffee Beans = 150 units

---

## Stock Out: Removing Inventory

### What It Does

Stock Out records products **leaving** your inventory.

**Stock change:** ⬇️ Quantity decreases

### When to Use Stock Out

| Scenario | Example |
|----------|---------|
| **Sales to customers** | Sold 3 units to customer |
| **Internal use** | Used 10 units for production |
| **Damage/loss** | 5 units broken, unsellable |
| **Samples given** | Gave 2 units as free samples |
| **Transfer to location** | Sent stock to Store B |
| **Returns to supplier** | Sent 20 defective units back |

### What Gets Recorded

- Product(s) removed
- Quantity sold/used
- Selling price (revenue)
- Customer (optional)
- Payment status
- Date
- Notes

### Example Workflow

```
Customer Order → Items Picked → Stock Out Recorded → Inventory Updated
```

**Result:**
- Before: Coffee Beans = 150 units
- Stock Out: -3 units
- After: Coffee Beans = 147 units

---

## Stock Audit: Correcting Inventory

### What It Does

Stock Audit adjusts inventory to match **physical count**. Use when system and reality don't match.

**Stock change:** ⬆️⬇️ Adjusts up or down to match actual

### When to Use Stock Audit

| Scenario | Why Audit |
|----------|-----------|
| **Periodic stock count** | Monthly/quarterly inventory check |
| **Discrepancy found** | System says 100, shelf has 95 |
| **After stock loss** | Theft, damage, expiration discovered |
| **System errors** | Wrong entry discovered later |
| **Year-end closing** | Annual inventory verification |

### Audit vs. Stock In/Out

| Situation | Use This | Why |
|-----------|----------|-----|
| Bought from supplier | Stock In | Normal business flow |
| Sold to customer | Stock Out | Normal business flow |
| Counted 95, system says 100 | Stock Audit | Correction needed |
| Found 5 extra units | Stock Audit | Adjust to reality |

### What Gets Recorded

- Product audited
- Physical quantity counted
- System quantity (auto-filled)
- Adjustment amount
- Reason for adjustment
- Date
- Notes

### Example Workflow

```
Physical Count → Compare to System → Record Discrepancy → Audit Adjustment
```

**Result:**
- System shows: Coffee Beans = 147 units
- Physical count: 145 units
- Audit: -2 units adjustment
- After: Coffee Beans = 145 units (matches reality)

---

## Comparison Table

| Aspect | Stock In | Stock Out | Stock Audit |
|--------|----------|-----------|-------------|
| **Purpose** | Add inventory | Remove inventory | Correct inventory |
| **Direction** | Inward | Outward | Adjustment |
| **Normal use** | Purchases | Sales | Corrections |
| **Financial impact** | Cost recorded | Revenue recorded | Adjustment recorded |
| **Supplier link** | Yes | No | No |
| **Customer link** | No | Yes | No |
| **Frequency** | Daily | Daily | Weekly/Monthly |
| **Who uses** | All staff | All staff | Admin/Owner |

---

## Decision Flowchart

### Which Operation Do I Need?

```
Did inventory physically arrive from outside?
├── YES → Did you pay for it?
│   ├── YES → STOCK IN (purchase)
│   └── NO → STOCK IN (return to stock)
└── NO → Did inventory physically leave?
    ├── YES → Was it sold?
    │   ├── YES → STOCK OUT (sale)
    │   └── NO → STOCK OUT (loss/use)
    └── NO → Does system match physical count?
        ├── YES → No action needed
        └── NO → STOCK AUDIT (adjustment)
```

<!-- TODO: Screenshot - Decision flowchart visual -->

---

## Common Mistakes

### ❌ Wrong: Using Stock In for Found Items

**Mistake:**
- Found 5 extra units
- Recorded as Stock In

**Problem:**
- Appears as purchase in reports
- Distorts buying costs
- Messes up supplier history

**✅ Correct:**
- Use Stock Audit
- Add note: "Found during stock count"

### ❌ Wrong: Using Stock Out for Damaged Goods

**Mistake:**
- 3 units damaged
- Recorded as Stock Out with $0

**Problem:**
- Appears as sale in reports
- Affects revenue numbers
- Wrong financial data

**✅ Correct:**
- Use Stock Audit (decrease)
- Add note: "Damaged goods - unsellable"
- Or use dedicated "Damage/Loss" reason

### ❌ Wrong: Multiple Audits for Small Corrections

**Mistake:**
- Found discrepancy
- Audited immediately
- Found another issue
- Audited again same day

**Problem:**
- Clutters transaction history
- Hard to track
- Looks unprofessional

**✅ Correct:**
- Complete full physical count first
- Record all discrepancies
- Single audit for all corrections

---

## Best Practices

### For Stock In

✅ **Always link to supplier**
- Better purchase tracking
- Vendor performance data
- Reorder history

✅ **Record immediately**
- Don't let deliveries pile up
- Same day as receipt
- While unpacking

✅ **Check quantities**
- Verify against delivery note
- Note discrepancies
- Photo damaged items

### For Stock Out

✅ **Always link to customer**
- Purchase history
- Debt tracking
- Customer analytics

✅ **Record before delivery**
- Prevents forgotten sales
- Accurate real-time stock
- Better customer service

✅ **Note payment method**
- Cash flow tracking
- Reconciliation aid
- Audit trail

### For Stock Audit

✅ **Do regularly**
- Monthly: Fast-moving items
- Quarterly: All inventory
- Annually: Full audit

✅ **Count when closed**
- No transactions during count
- More accurate
- Less disruption

✅ **Document reasons**
- Why adjustment needed
- Who authorized
- Prevent recurrence

✅ **Investigate discrepancies**
- Don't just adjust
- Find root cause
- Fix process if needed

---

## Integration with Reports

### How Each Affects Reports

**Stock In affects:**
- Inventory valuation (increases)
- Purchase reports
- Supplier performance
- Cost of goods available

**Stock Out affects:**
- Revenue reports
- Customer purchase history
- Sales analytics
- Inventory valuation (decreases)

**Stock Audit affects:**
- Inventory accuracy
- Loss/theft tracking
- Shrinkage reports
- Correction history

---

## Troubleshooting

### "Can't choose Stock Audit"

**Cause:** Permission restricted

**Solution:**
- Only Admin/Owner can audit
- Staff need `stock_audit` permission
- Contact business owner

### "Audit shows wrong adjustment"

**Check:**
- Physical count accuracy
- Pending transactions
- Unit of measure (box vs unit)

### "Stock In/Out not changing inventory"

**Check:**
- Transaction submitted (not draft)
- Sync completed
- Correct product selected
- No error messages

---

## FAQ

**Q: Can I undo a Stock In/Out/Audit?**
A: Yes, go to History, find the transaction, and delete it. Stock reverts automatically.

**Q: What's the difference between Stock Out and Stock Audit (decrease)?**
A: Stock Out is normal business (sales). Audit is correction when things don't match.

**Q: Should I use Stock In for opening inventory?**
A: Yes, for initial setup. Record your starting stock as Stock In with notes "Opening inventory".

**Q: How often should I audit stock?**
A: A-items (fast movers): weekly. B-items: monthly. C-items: quarterly. Full audit: annually.

**Q: Can I audit multiple products at once?**
A: Yes, Stock Audit allows selecting multiple products for batch auditing.

**Q: Do I need to audit if I use Kelola perfectly?**
A: Still recommended. Physical counts catch: theft, damage, expiration, system errors.

