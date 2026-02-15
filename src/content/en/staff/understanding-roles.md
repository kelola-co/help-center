---
title: "Understanding User Roles and Permissions"
excerpt: "Complete guide to Kelola's permission system. Learn about Owner, Admin, and Staff roles, what each can do, and how to set up access control for your team."
readingTime: 7
lastUpdated: "2026-02-15"
category: "staff"
difficulty: "intermediate"
audience: "owner"
---

## What You'll Learn

By the end of this guide, you'll understand:
- The three user roles in Kelola
- What each role can and cannot do
- How to assign appropriate permissions
- Best practices for team access control
- How to audit and manage staff activities

---

## User Roles Overview

Kelola has three built-in roles designed for different responsibilities:

| Role | Best For | Access Level |
|------|----------|--------------|
| **Owner** | Business owners, founders | Full access |
| **Admin** | Managers, supervisors | Extended access |
| **Staff** | Employees, cashiers, workers | Limited access |

<!-- TODO: Screenshot - Roles comparison table/visual -->

---

## Owner Role

### Who Should Be Owner
- Business founder/owner
- Primary account holder
- Person responsible for business operations

### Capabilities

#### ✅ Full Access To:
- **Business Settings**
  - Edit business information
  - Change subscription plan
  - Archive/delete business
  - Manage all payment methods

- **Staff Management**
  - Invite new staff
  - Remove staff members
  - Change staff roles
  - View all staff activities

- **Product Management**
  - Add/edit/delete all products
  - Manage categories
  - Set buying prices (cost)
  - Bulk import products

- **Financial Data**
  - View complete financial reports
  - See buying prices and profit margins
  - Access accounting reports
  - Export all data

- **Transaction Control**
  - Edit any transaction
  - Delete transactions
  - View all transaction history
  - Override any restriction

- **System Configuration**
  - Set up printers
  - Configure notifications
  - Manage integrations
  - Access API settings

### Limitations
- Cannot remove themselves without transferring ownership
- Subscription changes may require payment confirmation

---

## Admin Role

### Who Should Be Admin
- Store managers
- Supervisors
- Trusted senior staff
- Accountants/bookkeepers

### Capabilities

#### ✅ Can Do:
- **Staff Management**
  - Invite Staff-level users
  - View staff list (cannot remove Owners)
  - See staff activity reports

- **Product Management**
  - Add and edit products
  - Manage categories
  - Update stock quantities
  - View buying prices (if enabled)

- **Transactions**
  - Record all transaction types
  - Edit recent transactions
  - View transaction history
  - Process returns

- **Reports**
  - Access most reports
  - Export data
  - View analytics

#### ❌ Cannot Do:
- Remove Owners or other Admins
- Change subscription plan
- Archive/delete business
- Edit Owner's personal transactions
- Access some sensitive financial settings

<!-- TODO: Screenshot - Admin dashboard view -->

---

## Staff Role

### Who Should Be Staff
- Sales associates
- Cashiers
- Warehouse workers
- Part-time employees

### Default Capabilities

#### ✅ Typically Can Do:
- **Daily Operations**
  - Record Stock Out (sales)
  - View product catalog
  - Check stock levels
  - Print receipts

- **Customer Interaction**
  - Add new customers
  - View customer list
  - Record customer purchases
  - Print customer receipts

#### ❌ Cannot Do (by default):
- Delete transactions
  - Edit past transactions
  - View buying prices (cost)
  - See profit margins
  - Access financial reports
  - Invite other staff
  - Change business settings
  - Manage subscriptions

<!-- TODO: Screenshot - Staff simplified interface -->

---

## Granular Permission System

Beyond basic roles, Kelola allows fine-tuned permissions.

### Permission Categories

#### 1. Product Permissions
| Permission | Description |
|------------|-------------|
| `view_products` | See product catalog |
| `add_products` | Create new products |
| `edit_products` | Modify existing products |
| `delete_products` | Remove products |
| `view_buying_price` | See cost/pricing info |

#### 2. Stock Permissions
| Permission | Description |
|------------|-------------|
| `stock_in` | Record incoming stock |
| `stock_out` | Record sales/outgoing |
| `stock_audit` | Perform stock counts |
| `view_stock_history` | See stock movements |
| `edit_stock_records` | Modify past entries |

#### 3. Transaction Permissions
| Permission | Description |
|------------|-------------|
| `create_transactions` | Record new transactions |
| `edit_own_transactions` | Edit their own entries |
| `edit_all_transactions` | Edit anyone's entries |
| `delete_transactions` | Remove transactions |
| `view_all_transactions` | See complete history |

#### 4. Report Permissions
| Permission | Description |
|------------|-------------|
| `view_basic_reports` | Simple sales summaries |
| `view_financial_reports` | Profit/loss, accounting |
| `view_staff_reports` | Team performance |
| `export_data` | Download reports |

#### 5. Staff Permissions
| Permission | Description |
|------------|-------------|
| `invite_staff` | Add new team members |
| `manage_staff` | Edit/remove staff |
| `view_staff_activity` | See what staff did |

---

## Setting Up Permissions

### Default Role Templates

When inviting staff, choose a preset:

| Template | Best For | Key Permissions |
|----------|----------|-----------------|
| **Cashier** | Front desk sales | Stock out, add customers, print receipts |
| **Warehouse** | Inventory staff | Stock in/out, view stock, no pricing |
| **Manager** | Store supervisors | All operations, reports, no admin settings |
| **Accountant** | Bookkeepers | View all data, reports, no stock operations |
| **Custom** | Special roles | You choose each permission |

<!-- TODO: Screenshot - Permission template selection -->

### Creating Custom Permissions

1. Go to **Account → Staff Management**
2. Select staff member
3. Tap **"Permissions"**
4. Toggle individual permissions on/off
5. Save changes

> **💡 Best Practice:** Start restrictive, then grant more access as needed. It's easier to add permissions than remove them.

---

## Role Assignment Best Practices

### For Small Teams (1-5 people)
```
Owner: 1 person (business owner)
Admin: 1 person (manager or senior staff)
Staff: 2-3 people (everyone else)
```

### For Medium Teams (5-15 people)
```
Owner: 1 person
Admin: 2-3 people (shift supervisors)
Staff: 5-12 people (cashiers, warehouse)
Custom: 1-2 people (accountant with special access)
```

### For Multi-Location
```
Each Location:
- 1 Admin (location manager)
- 2-5 Staff (location workers)

Central:
- Owner (overall oversight)
- 1 Admin (regional manager)
```

---

## Security Considerations

### Best Practices

1. **Principle of Least Privilege**
   - Give minimum access needed for the job
   - Regularly review permissions
   - Remove access when staff leave

2. **Separation of Duties**
   - Different people for sales and inventory counting
   - Manager approval for large transactions
   - Owner review for financial reports

3. **Activity Monitoring**
   - Regularly check Staff Reports
   - Review transaction edits
   - Monitor unusual patterns

### Red Flags to Watch

| Warning Sign | Action |
|--------------|--------|
| Frequent transaction edits | Review with staff member |
| Access outside work hours | Verify if legitimate |
| Unusual stock adjustments | Investigate immediately |
| Multiple failed login attempts | Check account security |

---

## Managing Staff Access

### Inviting Staff

1. Go to **Account → Staff Management**
2. Tap **"Invite Staff"**
3. Enter email address
4. Select role (Staff/Admin)
5. Choose permission template
6. Send invitation

Staff receives email with:
- Download link for app
- Join code for your business
- Instructions to get started

<!-- TODO: Screenshot - Staff invitation flow -->

### Removing Staff

1. Go to **Account → Staff Management**
2. Find staff member
3. Tap **"Remove"**
4. Confirm removal

> **⚠️ Important:** Removed staff immediately lose access. Their transaction history remains for records.

### Changing Roles

1. Select staff member
2. Tap **"Change Role"**
3. Select new role
4. Adjust permissions if needed
5. Save

---

## Staff Activity Reports

### What You Can Track

| Metric | Why It Matters |
|--------|----------------|
| Transactions made | Productivity measure |
| Items sold | Sales performance |
| Average transaction value | Efficiency indicator |
| Login times | Attendance verification |
| Edits made | Accuracy tracking |
| Errors/voids | Training needs |

### Accessing Reports

1. Go to **Reports → Staff Reports**
2. Select date range
3. Choose staff member (or all)
4. View summary or detailed list
5. Export if needed

<!-- TODO: Screenshot - Staff report interface -->

---

## Common Permission Scenarios

### Scenario 1: New Cashier
**Need:** Can sell but not see costs
**Setup:**
- Role: Staff
- Permissions: Stock out, add customers, print receipts
- No: View buying price, edit transactions, access reports

### Scenario 2: Inventory Manager
**Need:** Manage stock but not financials
**Setup:**
- Role: Staff or Admin
- Permissions: Stock in/out/audit, view stock history, add products
- No: View buying price (optional), financial reports

### Scenario 3: Store Manager
**Need:** Run location but not change settings
**Setup:**
- Role: Admin
- Permissions: All operations, view reports, invite staff
- No: Subscription changes, archive business, remove owners

### Scenario 4: Accountant
**Need:** See data but not operate
**Setup:**
- Role: Staff (custom)
- Permissions: View all transactions, access all reports, export data
- No: Create transactions, edit products, stock operations

---

## Troubleshooting

### "Staff can't see products"
- Check `view_products` permission
- Verify they're in correct business
- Check if products are archived

### "Staff can't record sales"
- Ensure `stock_out` permission is enabled
- Check if they've reached transaction limits (subscription)
- Verify stock is available

### "Staff sees wrong prices"
- They're seeing buying price instead of selling price
- Remove `view_buying_price` permission
- Staff should only see selling price

### "Can't change someone's role"
- Only Owners can change Admin roles
- Can't modify roles of higher-level users
- Contact support if ownership transfer needed

---

## FAQ

**Q: Can I have multiple Owners?**
A: No, each business has one Owner. You can have multiple Admins with similar access.

**Q: Can Staff see each other's transactions?**
A: Depends on `view_all_transactions` permission. Without it, they only see their own.

**Q: What happens when I downgrade subscription?**
A: Staff limits may apply. Excess staff lose access until you upgrade or remove users.

**Q: Can Staff use the web version?**
A: Yes, permissions apply across mobile and web. Same login works everywhere.

**Q: How do I know what a staff member can do?**
A: Go to Staff Management, select the user, and view their permission list.

**Q: Can I set time-based restrictions?**
A: Not currently. Staff have access whenever they log in. Monitor through activity reports.

---

## Related Articles

- [Inviting Staff Members →](./invite-staff)
- [How Staff Join Your Business →](./join-business)
- [Staff Management Best Practices →](./managing-team)
- [Financial Reports →](../report/accounting-report)
