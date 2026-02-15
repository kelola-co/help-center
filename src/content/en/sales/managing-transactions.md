---
title: "Managing Transaction History"
excerpt: "Complete guide to finding, filtering, editing, and managing all your business transactions in Kelola. Learn search techniques, export methods, and transaction workflows."
readingTime: 6
lastUpdated: "2026-02-15"
category: "sales"
difficulty: "intermediate"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Find any transaction quickly
- Filter and sort transaction history
- Edit and correct transactions
- Export transaction data
- Understand transaction details

---

## Understanding Transaction History

The **History** section is your complete business activity log. Every stock movement is recorded here:

| Transaction Type | When It Appears |
|------------------|-----------------|
| **Stock In** | Inventory received |
| **Stock Out** | Sales made |
| **Stock Audit** | Inventory adjustments |
| **Transfer** | Between businesses |
| **Expense** | Business spending |

---

## Accessing Transaction History

1. Tap **"History"** in bottom navigation
2. View list of all transactions (newest first)
3. Default shows last 30 days

<!-- TODO: Screenshot - History main screen -->

---

## Finding Specific Transactions

### Quick Search

Fastest way to find a transaction:

1. Tap **search bar** at top
2. Type any of:
   - Product name ("Coffee Beans")
   - Customer name ("John Smith")
   - Transaction ID (if known)
   - Amount ("50000")
3. Results filter instantly

<!-- TODO: Screenshot - Search in History -->

### Advanced Filtering

Tap **"Filter"** to narrow results:

**By Transaction Type:**
- Stock In only
- Stock Out only
- Stock Audit
- All types

**By Date Range:**
- Today
- Yesterday
- Last 7 days
- Last 30 days
- Custom range (pick start and end dates)

**By Payment Status:**
- Paid
- Partial
- Unpaid
- All

**By Customer:**
- Select specific customer
- Or search customer name

**By Staff Member:**
- Transactions by specific employee
- Useful for auditing

<!-- TODO: Screenshot - Filter panel open -->

### Sorting Results

Change sort order:

- **Newest first** (default)
- **Oldest first**
- **Highest amount**
- **Lowest amount**
- **By customer name**

---

## Viewing Transaction Details

### Transaction Card

Each transaction shows:
- **Type icon** (in/out/audit/expense)
- **Date and time**
- **Customer name** (if applicable)
- **Product summary**
- **Total amount**
- **Payment status badge**

<!-- TODO: Screenshot - Transaction list items -->

### Detailed View

Tap any transaction to see:

**Header Information:**
- Transaction ID
- Date and time
- Staff who created it
- Transaction type

**Product Details:**
- List of all products
- Quantities
- Unit prices
- Subtotals

**Financial Summary:**
- Total amount
- Amount paid
- Balance due (if any)
- Payment method

**Additional Info:**
- Customer details
- Notes
- Supplier (for Stock In)
- Reference numbers

<!-- TODO: Screenshot - Transaction detail view -->

### Actions from Detail View

Available actions (vary by permissions):
- **Edit** — Modify transaction
- **Delete** — Remove transaction
- **Print** — Print receipt/invoice
- **Share** — Send via WhatsApp/email
- **Duplicate** — Copy for new transaction
- **Return** — Process return/refund

---

## Editing Transactions

### When You Can Edit

Editing allowed for:
- Recent transactions (time limit varies by settings)
- Your own transactions (if permission enabled)
- Any transaction (owner/admin with full permissions)

### What You Can Edit

| Field | Editable? | Notes |
|-------|-----------|-------|
| Product quantities | ✅ Yes | Affects stock |
| Prices | ✅ Yes | Affects revenue |
| Customer | ✅ Yes | Updates linkage |
| Payment status | ✅ Yes | Updates receivables |
| Notes | ✅ Yes | No system impact |
| Date | ⚠️ Limited | May need admin |
| Staff | ❌ No | Creator preserved |

### How to Edit

1. Open transaction detail
2. Tap **"Edit"** (top right)
3. Modify fields as needed
4. Review changes
5. Tap **"Save"**

<!-- TODO: Screenshot - Editing transaction -->

> **⚠️ Important:** Editing affects:
> - Inventory levels (stock recalculated)
> - Financial reports (revenue updated)
> - Customer balances (receivables adjusted)
>
> Edit carefully and document reason in notes.

---

## Deleting Transactions

### When to Delete vs. Edit

**Delete when:**
- Completely wrong transaction
- Duplicate entry
- Test transaction

**Edit when:**
- Minor correction needed
- Amount slightly wrong
- Customer wrong

### How to Delete

1. Open transaction detail
2. Tap three dots menu
3. Select **"Delete"**
4. Confirm deletion
5. (Optional) Enter reason for audit log

> **⚠️ Warning:**
> - Deletion is permanent
> - Stock levels restored
> - Financial records adjusted
> - Action may be logged

### Recovery

Deleted transactions:
- Cannot be recovered by users
- May be recoverable by support (contact within 30 days)
- Consider exporting data before major deletions

---

## Exporting Transaction Data

### Export Options

**For accounting:**
1. Apply filters (date range, type)
2. Tap **"Export"**
3. Select format:
   - **Excel/CSV** — For spreadsheets
   - **PDF** — For records
   - **JSON** — For developers
4. Choose fields to include
5. Download file

<!-- TODO: Screenshot - Export dialog -->

### Export Fields Available

- Transaction ID
- Date and time
- Type (In/Out/Audit)
- Products (with quantities)
- Customer name
- Total amount
- Payment status
- Payment method
- Staff member
- Notes

### Scheduled Exports

**For regular reporting:**

Some plans support:
- Weekly email exports
- Monthly automated reports
- API access for integration

Contact support to set up.

---

## Transaction Workflows

### Daily Reconciliation

**End-of-day routine:**

1. Go to History
2. Filter "Today"
3. Review all transactions:
   - Verify amounts match cash register
   - Check for missing entries
   - Note any discrepancies
4. Export for records
5. Resolve any issues

### Weekly Review

**Business health check:**

1. Filter "Last 7 days"
2. Sort by amount (high to low)
3. Review:
   - Top sales
   - Unusual transactions
   - Pending payments
4. Follow up on receivables

### Monthly Reporting

**Financial summary:**

1. Set custom date range (month)
2. Export all transactions
3. Import to accounting software
4. Reconcile with bank statements

---

## Troubleshooting Common Issues

### "Transaction not found"
- Check date range in filters
- Try different search terms
- Verify transaction wasn't deleted
- Check if viewing correct business (multi-business users)

### "Can't edit transaction"
- Editing time limit may have expired
- Insufficient permissions
- Transaction already exported to accounting (locked)
- Contact owner/admin for assistance

### "Duplicate transactions"
- Search for similar amounts/dates
- Delete the incorrect one
- Add note explaining correction
- Review process to prevent future duplicates

### "Wrong customer attached"
- Edit transaction to change customer
- Or delete and recreate
- Customer history updates automatically

### "Export not working"
- Check internet connection
- Reduce date range (try smaller chunks)
- Clear app cache
- Try different format

---

## FAQ

**Q: How long is transaction history kept?**
A: Forever! Kelola retains all transaction history as long as your account is active.

**Q: Can I see transactions from all my businesses?**
A: No, History is per-business. Switch businesses in Account menu to see other locations.

**Q: Can staff see all transactions or only their own?**
A: Depends on permissions. Staff with `view_all_transactions` can see everything; otherwise only their own.

**Q: How do I find a transaction from months ago?**
A: Use custom date range filter, or search by customer/product name.

**Q: Can I bulk delete transactions?**
A: Not recommended. Bulk deletion is restricted. Contact support if absolutely necessary.

**Q: What's the difference between Delete and Return?**
A: Delete removes the transaction completely. Return creates a reversal transaction while keeping original record.

**Q: Can I attach files to transactions?**
A: Currently no, but you can include file references (invoice numbers, photo IDs) in notes.

