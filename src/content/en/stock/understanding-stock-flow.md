---
title: "Understanding Stock Flow"
excerpt: "Complete guide to understanding how inventory moves through your business. Learn when to use Stock In, Stock Out, Stock Audit, and transfers for accurate inventory control."
readingTime: 6
lastUpdated: "2026-02-17"
category: "stock"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Understand how inventory moves in Kelola
- Know the difference between Stock In, Stock Out, and Stock Audit
- Track stock in, out, and adjustments
- See how transactions affect stock levels
- Manage stock transfers between locations
- Choose the right operation for each situation

---

## The Stock Flow Cycle

Inventory in Kelola follows a simple lifecycle:

```
Stock In → Inventory → Stock Out
(Purchases)          (Sales)
```

### Stock In (Adding Inventory)

**When to use:**
- Buying from suppliers
- Receiving deliveries
- Manufacturing/production
- Returns from customers

**Result:** Stock quantity increases

### Inventory (Holding)

**What happens:**
- Stock sits in inventory
- Available for sale
- Tracked in real-time
- Alerts when low

### Stock Out (Removing Inventory)

**When to use:**
- Selling to customers
- Internal use
- Damage/loss
- Returns to suppliers

**Result:** Stock quantity decreases

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
| **Transfer from location** | Received stock from Store B |

**Note:** For found items or discrepancies, use Stock Audit instead (see Common Mistakes below).

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
| **Samples given** | Gave 2 units as free samples |
| **Transfer to location** | Sent stock to Store B |
| **Returns to supplier** | Sent 20 defective units back |

**Note:** For damaged goods or losses discovered during counts, use Stock Audit instead (see Common Mistakes below).

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
| **Found extra stock** | Discovered units not recorded |
| **Initial setup** | Recording opening inventory |

### Audit vs. Stock In/Out

| Situation | Use This | Why |
|-----------|----------|-----|
| Bought from supplier | Stock In | Normal business flow |
| Sold to customer | Stock Out | Normal business flow |
| Counted 95, system says 100 | Stock Audit | Correction needed |
| Found 5 extra units | Stock Audit | Adjust to reality |
| 3 units damaged during count | Stock Audit | Correction, not a sale |

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

## Stock Transfer

**Purpose:** Move stock between businesses/locations

**When to Use:**
- Multiple store locations
- Warehouse to store
- Between business units

**What Happens:**
- Decrease at source
- Increase at destination
- Tracked as transfer

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

## How Stock Levels Change

### Example Transaction Flow

**Starting Point:**
```
Product: Coffee Beans
Current Stock: 50 units
```

**Day 1: Stock In (Purchase)**
```
Receive: 100 units
New Stock: 50 + 100 = 150 units
```

**Day 2: Stock Out (Sale)**
```
Sell: 30 units
New Stock: 150 - 30 = 120 units
```

**Day 3: Stock Out (Sale)**
```
Sell: 20 units
New Stock: 120 - 20 = 100 units
```

**Day 4: Stock Audit (Adjustment)**
```
Physical count: 98 units
System shows: 100 units
Adjust: -2 units (damage)
New Stock: 100 - 2 = 98 units
```

### Viewing Stock History

Every change is tracked:
1. Go to **History**
2. Filter by product
3. See all transactions
4. View who made changes

---

## Understanding the Stock Equation

```
Starting Stock
+ Stock In (purchases, returns)
- Stock Out (sales, usage)
+/- Adjustments (audit)
= Current Stock
```

### Real Example

```
January 1: Starting stock = 100 units

January 5: Stock In +50 units
January 10: Stock Out -30 units
January 15: Stock Out -20 units
January 20: Adjustment -5 (damaged)
January 25: Stock In +40 units

February 1: Current stock = ?

100 + 50 - 30 - 20 - 5 + 40 = 135 units
```

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

## Stock Flow Best Practices

### Record Immediately

✅ **Enter transactions promptly**
- Record purchases when received
- Record sales when made
- Don't backlog entries

**Why:** Accurate real-time stock levels

### Be Accurate

✅ **Double-check quantities**
- Count physical stock
- Verify before submitting
- Review before saving

**Why:** Prevents inventory discrepancies

### Use Notes

✅ **Add context**
- Why stock changed
- Reference numbers
- Special circumstances

**Why:** Audit trail and clarity

### Regular Audits

✅ **Physical counts**
- Monthly or quarterly
- Compare to system
- Adjust as needed

**Why:** Catch errors early

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

## Common Stock Scenarios

### Scenario 1: Normal Sale

```
Customer buys 5 units
↓
Record Stock Out
↓
Stock decreases by 5
↓
Sale recorded in reports
```

### Scenario 2: Customer Return

```
Customer returns 2 units
↓
Record Stock In (Return)
↓
Stock increases by 2
↓
Refund or store credit issued
```

### Scenario 3: Damaged Goods

```
Find 3 damaged units
↓
Record Stock Audit (Negative)
↓
Stock decreases by 3
↓
Add note: "Damaged - water spill"
```

### Scenario 4: Supplier Return

```
Return 10 defective units to supplier
↓
Record Stock Out (Return to Supplier)
↓
Stock decreases by 10
↓
Credit received from supplier
```

---

## Stock Alerts and Monitoring

### Low Stock Alerts

Set minimum levels:
1. Go to **Stock Alerts**
2. Set minimum quantity per product
3. Get notified when stock runs low

### High Stock Alerts

Avoid overstocking:
- Set maximum levels
- Monitor slow-moving items
- Adjust purchasing

---

## Stock Flow Reports

### Stock Movement Report

See all changes:
- Date/time
- Type (in/out/adjustment)
- Quantity
- Staff who recorded

### Current Stock Report

Snapshot of inventory:
- Current quantities
- Total value
- By category
- By location

### Stock History

Timeline view:
- All transactions
- Trend over time
- Seasonal patterns

### Integration with Reports

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

## Troubleshooting Stock Issues

### "Stock doesn't match physical count"

**Possible Causes:**
- Missing transactions
- Wrong quantities entered
- Returns not recorded
- Theft/damage not logged

**Solution:**
1. Count physical stock
2. Review all transactions
3. Make adjustment
4. Investigate discrepancies

### "Negative stock showing"

**Cause:**
- Selling more than recorded
- Data entry errors

**Solution:**
- Check recent sales
- Verify purchase records
- Adjust if needed

### "Can't record stock out"

**Cause:**
- No stock available
- Product out of stock

**Solution:**
- Check current stock
- Record stock in first
- Or check if wrong product

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

**Q: What happens to stock when I delete a transaction?**
A: Stock is adjusted back. Deleting a sale adds stock back. Deleting a purchase removes stock.

**Q: Can I have negative stock?**
A: Kelola can be configured to allow or prevent negative stock. Check your settings.

**Q: How do I track stock across multiple locations?**
A: Use different businesses for each location, or use Stock Transfer between them.

**Q: What's the difference between Stock Out and Stock Audit?**
A: Stock Out is for sales/usage. Stock Audit is for corrections and adjustments.

**Q: Can I undo a Stock In/Out/Audit?**
A: Yes, go to History, find the transaction, and delete it. Stock reverts automatically.

**Q: What's the difference between Stock Out and Stock Audit (decrease)?**
A: Stock Out is normal business (sales). Audit is correction when things don't match.

**Q: Should I use Stock In for opening inventory?**
A: Yes, for initial setup. Record your starting stock as Stock In with notes "Opening inventory".

**Q: Can I edit past stock transactions?**
A: Yes, with proper permissions. Editing changes stock levels automatically.

**Q: How often should I do physical stock counts?**
A: A-items (fast movers): weekly. B-items: monthly. C-items: quarterly. Full audit: annually.

**Q: Can I audit multiple products at once?**
A: Yes, Stock Audit allows selecting multiple products for batch auditing.

**Q: Do I need to audit if I use Kelola perfectly?**
A: Still recommended. Physical counts catch: theft, damage, expiration, system errors.
