---
title: "Managing Stock Alerts and Low Inventory"
excerpt: "Complete guide to setting up and managing stock alerts in Kelola. Learn to configure low stock thresholds, receive notifications, and prevent stockouts."
readingTime: 5
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "intermediate"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Set up low stock alerts for products
- Configure notification preferences
- Respond to stock alerts
- Prevent stockouts
- Manage reorder processes

---

## What Are Stock Alerts?

**Stock Alerts** notify you when product inventory falls below a set threshold. This helps you:
- 🔔 Never run out of popular items
- 📦 Reorder inventory on time
- 💰 Avoid lost sales from stockouts
- 📊 Plan purchasing better

---

## Setting Up Stock Alerts

### Method 1: Per Product

Set alert while adding or editing a product:

1. Go to **Products**
2. Select a product
3. Tap **"Edit"**
4. Find **"Low Stock Alert"** field
5. Enter minimum quantity:
   - **For fast-moving items**: Higher threshold (e.g., 50 units)
   - **For slow-moving items**: Lower threshold (e.g., 5 units)
   - **For critical items**: Safety stock level (e.g., 100 units)
6. Tap **"Save"**

<!-- TODO: Screenshot - Product edit with alert field -->

### Method 2: Bulk Setup

Set alerts for multiple products:

1. Go to **Stock Alert** (from main menu)
2. View all products
3. Tap any product row
4. Enter alert threshold
5. Save
6. Continue to next product

<!-- TODO: Screenshot - Stock Alert list view -->

### Method 3: During Stock In

Quick set while receiving inventory:

1. After Stock In, product page shows
2. Tap **"Set Alert"**
3. Enter threshold based on:
   - How fast item sells
   - Supplier lead time
   - Storage capacity
4. Save

---

## Choosing Alert Thresholds

### Factors to Consider

| Factor | Impact on Threshold |
|--------|---------------------|
| **Sales velocity** | Fast sellers need higher alerts |
| **Supplier lead time** | Longer delivery = higher alert |
| **Seasonality** | Increase before busy periods |
| **Storage cost** | Limited space = lower thresholds |
| **Product importance** | Critical items = higher safety stock |

### Recommended Formulas

**Basic calculation:**
```
Alert Threshold = (Daily Sales × Lead Time Days) + Safety Stock

Example:
- Sell 10 units/day
- 7 days lead time
- 20 units safety stock
- Alert at: (10 × 7) + 20 = 90 units
```

**Conservative approach:**
```
Alert Threshold = (Daily Sales × Lead Time × 1.5) + Safety Stock
```

### Examples by Product Type

| Product Type | Daily Sales | Lead Time | Alert Threshold |
|--------------|-------------|-----------|-----------------|
| Bestseller | 50 | 5 days | 300 units |
| Regular item | 10 | 7 days | 90 units |
| Slow mover | 2 | 14 days | 40 units |
| Seasonal | Varies | 10 days | 200 units (peak) |

---

## Viewing Stock Alerts

### Stock Alert Dashboard

Access from main menu:

1. Tap **"Stock Alert"**
2. View two sections:
   - **🔴 Below Threshold** — Need attention
   - **✅ Above Threshold** — All good

<!-- TODO: Screenshot - Stock Alert dashboard -->

### Alert List Features

Each row shows:
| Column | Information |
|--------|-------------|
| Product | Name and image |
| Current Stock | Actual quantity |
| Alert At | Threshold set |
| Status | How urgent |

**Sorting options:**
- By stock level (lowest first)
- By product name
- By category
- By alert status

### Home Dashboard Alerts

Quick view from Home:
- Badge on menu icon
- Notification dot
- Summary card: "3 items low stock"

Tap to go directly to Stock Alert page.

---

## Notification Settings

### In-App Notifications

Always enabled:
- Badge counts
- Dashboard alerts
- In-app banners

### Push Notifications

Configure in **Account → Notifications**:

1. Go to Account settings
2. Tap **"Notifications"**
3. Toggle **"Stock Alerts"**
4. Set urgency level:
   - **All alerts** — Every threshold breach
   - **Critical only** — Most urgent items
   - **Daily digest** — Once per day summary

<!-- TODO: Screenshot - Notification settings -->

### Email Notifications

Available on premium plans:

- Daily stock status email
- Weekly low stock summary
- Immediate alerts for critical items

Configure in web dashboard.

---

## Responding to Alerts

### When You Get an Alert

**Immediate actions:**

1. **Check current stock**
   - Verify physical count
   - Check for pending orders
   - Confirm alert is accurate

2. **Assess urgency**
   - How fast does this sell?
   - How long to replenish?
   - Can customers wait?

3. **Take action**
   - Order from supplier
   - Transfer from another location
   - Update threshold if wrong

### Creating a Purchase Order

From Stock Alert:

1. Find product in alert list
2. Tap product
3. View current stock and threshold
4. Tap **"Order Stock"** (if integrated)
5. Or note quantity needed
6. Contact supplier

### Marking Alerts as Reviewed

After taking action:

1. In Stock Alert list
2. Swipe left on product
3. Tap **"Mark Reviewed"**
4. Alert temporarily cleared
5. Reappears if stock remains low

---

## Best Practices

### Setting Thresholds

✅ **Review regularly**
- Monthly threshold review
- Adjust for seasonality
- Update for sales trends

✅ **Differentiate products**
- A-items (top 20%): Higher safety stock
- B-items (middle 30%): Moderate alerts
- C-items (bottom 50%): Lower priority

✅ **Consider lead times**
- Local suppliers: Lower thresholds
- International: Higher thresholds
- Unreliable suppliers: Extra buffer

### Managing Alerts

✅ **Daily review habit**
- Check alerts every morning
- Prioritize critical items
- Plan purchasing accordingly

✅ **Don't ignore alerts**
- Address within 24 hours
- Escalate if supplier issues
- Document reasons for delays

✅ **Communicate with team**
- Share alert status
- Coordinate purchases
- Train staff to report low stock

### Preventing Stockouts

✅ **Safety stock formula**
```
Safety Stock = (Max Daily Sales × Max Lead Time) - (Avg Daily Sales × Avg Lead Time)
```

✅ **Reorder point**
```
Reorder Point = (Avg Daily Sales × Lead Time) + Safety Stock
```

---

## Advanced Features

### Auto-Reorder (If Available)

Some integrations support:
- Automatic PO generation
- Supplier email notifications
- Reorder quantity suggestions

Contact support to set up.

### Multi-Location Alerts

For businesses with multiple locations:

- Set alerts per location
- Transfer stock between locations
- Consolidated alert dashboard

### Seasonal Adjustments

Before busy seasons:

1. Increase alert thresholds
2. Increase safety stock
3. Pre-order inventory
4. Monitor more frequently

After season:

1. Reduce thresholds
2. Clear excess stock
3. Review what sold

---

## Troubleshooting

### "Not receiving alerts"

**Check:**
- Notifications enabled in settings
- Alert thresholds actually set
- Product stock below threshold
- App notifications allowed (phone settings)

**Try:**
- Toggle notifications off and on
- Restart app
- Check phone notification settings

### "Too many alerts"

**Solutions:**
- Raise thresholds for non-critical items
- Use daily digest instead of immediate
- Focus alerts on A-items only
- Disable alerts for slow movers

### "Alert threshold keeps changing"

**Possible causes:**
- Multiple staff editing
- Sync issues
- App bugs

**Fix:**
- Verify only authorized staff change thresholds
- Check last updated by
- Contact support if persistent

### "Wrong stock level shown"

**Check:**
- Unsynced transactions
- Pending stock operations
- Multi-device sync issues

**Fix:**
- Pull down to refresh
- Check internet connection
- Force sync in settings

---

## FAQ

**Q: How many products can have alerts?**
A: Unlimited! Set alerts for as many products as you need.

**Q: Can I set different alerts for different locations?**
A: Yes, each business location has independent alert settings.

**Q: Do alerts work offline?**
A: Alerts calculate based on last synced data. Sync when online for accuracy.

**Q: Can staff receive alerts too?**
A: Yes, if they have appropriate permissions and notifications enabled.

**Q: What's the difference between alert and reorder point?**
A: Alert notifies you. Reorder point is when you should place an order (usually same number).

**Q: Can I export alert data?**
A: Yes, use Stock Report and filter by low stock items.

**Q: Do alerts consider pending stock in?**
A: Currently alerts show current stock only. Check pending orders separately.

