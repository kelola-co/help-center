---
title: "Understanding Stock Flow"
excerpt: "Learn how inventory moves through your business. Understand stock in, stock out, transfers, and how transactions affect your inventory levels."
readingTime: 4
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Understand how inventory moves in Kelola
- Track stock in, out, and adjustments
- See how transactions affect stock levels
- Manage stock transfers between locations

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

## Types of Stock Transactions

### 1. Stock In (Purchases)

**Purpose:** Record inventory coming in

**Common Uses:**
- Supplier purchases
- Production output
- Customer returns

**What You Record:**
- Product
- Quantity received
- Buying price (cost)
- Supplier
- Notes

**Effect:** +Quantity to stock

### 2. Stock Out (Sales)

**Purpose:** Record inventory going out

**Common Uses:**
- Customer sales
- Samples/giveaways
- Internal consumption

**What You Record:**
- Product
- Quantity sold
- Selling price
- Customer
- Payment status

**Effect:** -Quantity from stock

### 3. Stock Transfer

**Purpose:** Move stock between businesses/locations

**When to Use:**
- Multiple store locations
- Warehouse to store
- Between business units

**What Happens:**
- Decrease at source
- Increase at destination
- Tracked as transfer

### 4. Stock Audit/Adjustment

**Purpose:** Correct inventory counts

**When to Use:**
- Physical count differs from system
- Damage/spoilage discovered
- Theft/loss
- Initial setup

**Types:**
- **Positive** - Add stock (found extra)
- **Negative** - Remove stock (missing/damaged)

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

**Q: Can I edit past stock transactions?**
A: Yes, with proper permissions. Editing changes stock levels automatically.

**Q: How often should I do physical stock counts?**
A: Depends on business size. Weekly for fast-moving, monthly for slow-moving items.

---

## Related Articles

- [Recording Stock In →](./record-stock-in)
- [Recording Stock Out →](./record-stock-out)
- [Stock Audit and Corrections →](./difference-stock-in-out-audit)
- [Stock Transfer →](./stock-transfer)
- [Stock Reports →](../report/stock-report)
