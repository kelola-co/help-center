---
title: "Understanding User Roles and Permissions"
excerpt: "Complete guide to Kelola's permission system. Learn about Owner and Staff roles, what each can do, and how to set up access control for your team."
readingTime: 5
lastUpdated: "2026-02-15"
category: "staff"
difficulty: "intermediate"
audience: "owner"
---

## What You'll Learn

By the end of this guide, you'll understand:
- The two user roles in Kelola
- What each role can and cannot do
- How permissions work for staff members
- Best practices for team access control

---

## User Roles Overview

Kelola has two built-in roles:

| Role | Best For | Access Level |
|------|----------|--------------|
| **Owner** | Business owners, founders | Full access |
| **Staff** | Employees, cashiers, workers | Limited access based on permissions |

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
  - Manage all payment methods
  - Switch between multiple businesses

- **Staff Management**
  - Invite new staff
  - Remove staff members
  - Set staff permissions
  - View staff list

- **Product Management**
  - Add/edit/delete all products
  - Manage categories
  - Set buying prices (cost)
  - Import products via web

- **Financial Data**
  - View complete financial reports
  - See buying prices and profit margins
  - Access accounting reports
  - View receivables reports

- **Transaction Control**
  - Edit transactions
  - Delete transactions
  - View all transaction history

- **Additional Features**
  - Create online catalogs
  - Print barcode labels
  - Manage stock alerts
  - Access web version

### Staff Limit by Plan
- **Free**: 1 staff member
- **Basic**: 3 staff members
- **Plus**: 5 staff members
- **Advance**: Unlimited staff members

---

## Staff Role

### Who Should Be Staff
- Sales associates
- Cashiers
- Warehouse workers
- Part-time employees
- Any team member who needs limited access

### How Staff Permissions Work

Staff members receive permissions set by the Owner. Each staff member can have different permissions based on their responsibilities.

#### Available Permissions

**Product Permissions:**
- View products
- Add products
- Edit products
- Delete products

**Stock Permissions:**
- Stock in (record purchases)
- Stock out (record sales)
- Stock audit/adjustment
- Stock transfer

**Transaction Permissions:**
- View transaction history
- Edit transactions

**Report Permissions:**
- View accounting reports
- View stock reports
- View customer reports
- View receivables reports

**Contact Permissions:**
- Manage customers
- Manage suppliers

**Other Permissions:**
- Manage expenses
- Invite other staff (rarely granted)
- Change business profile

### Default Staff Access

When invited, staff typically have access to:
- Record stock in/out
- View products
- View transaction history
- Manage customers (if enabled)

### What Staff Cannot Do (by default):
- Delete transactions (unless granted permission)
- View buying prices (unless granted permission)
- Access financial reports (unless granted permission)
- Invite other staff (unless granted permission)
- Change business settings
- Manage subscriptions
- Create online catalogs

---

## Setting Up Staff Permissions

### When Inviting Staff

1. Go to **Home** → **Staff** (owner only)
2. Tap **"+"** to invite new staff
3. Enter staff phone number
4. Set permissions by toggling switches:
   - Can add products
   - Can edit products
   - Can delete products
   - Can stock in
   - Can stock out
   - Can view reports
   - etc.
5. Send invitation

Staff receives:
- SMS with download link
- Join code for your business
- Instructions to get started

### Editing Staff Permissions

1. Go to **Home** → **Staff**
2. Tap on staff member
3. Toggle permissions on/off
4. Save changes

> **💡 Best Practice:** Start with minimal permissions and add more as needed. It's easier to grant access than to remove it.

---

## Role Assignment Best Practices

### For Small Teams (1-5 people)
```
Owner: 1 person (business owner)
Staff: 1-4 people (employees with appropriate permissions)
```

### For Medium Teams (5-15 people)
```
Owner: 1 person
Staff: 4-14 people with varied permissions:
- Some with full operational access
- Some with limited access (cashiers only)
- Some with reporting access (managers)
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
   - Owner review for financial reports
   - Multiple eyes on stock adjustments

3. **Activity Monitoring**
   - Check History regularly
   - Review transaction edits
   - Monitor unusual patterns

### Red Flags to Watch

| Warning Sign | Action |
|--------------|--------|
| Frequent transaction edits | Review with staff member |
| Access outside work hours | Verify if legitimate |
| Unusual stock adjustments | Investigate immediately |

---

## Managing Staff Access

### Inviting Staff

1. Go to **Home** → **Staff**
2. Tap **"+"** button
3. Enter phone number
4. Set permissions
5. Send invitation

### Removing Staff

1. Go to **Home** → **Staff**
2. Find staff member
3. Tap **"Remove"**
4. Confirm removal

> **⚠️ Important:** Removed staff immediately lose access. Their transaction history remains for records.

### Changing Permissions

1. Select staff member
2. Toggle permissions on/off
3. Save changes

Permissions update immediately.

---

## Common Permission Scenarios

### Scenario 1: Cashier/Sales Person
**Need:** Can sell but not see costs
**Setup:**
- Can stock out
- Can view products
- Can add customers
- Cannot view buying price
- Cannot edit transactions
- Cannot access reports

### Scenario 2: Inventory Manager
**Need:** Manage stock but not financials
**Setup:**
- Can stock in/out/audit
- Can add/edit products
- Can view stock reports
- Cannot view buying price (optional)
- Cannot view accounting reports

### Scenario 3: Manager/Supervisor
**Need:** Run operations and view reports
**Setup:**
- All stock permissions
- Product management
- View all reports
- Cannot invite staff
- Cannot change subscription

### Scenario 4: Accountant/Bookkeeper
**Need:** See data but not operate
**Setup:**
- View all transactions
- Access all reports
- View buying prices
- Cannot create transactions
- Cannot edit products

---

## Troubleshooting

### "Staff can't see products"
- Check if they have permission to view products
- Verify they're logged into correct business
- Check if products are in stock

### "Staff can't record sales"
- Ensure "Stock Out" permission is enabled
- Check if they've reached staff limits (subscription)
- Verify stock is available

### "Staff sees wrong prices"
- They're seeing buying price instead of selling price
- Remove permission to view buying prices
- Staff should only see selling price

### "Can't invite more staff"
- Check your subscription plan's staff limit
- Free: 1 staff, Basic: 3 staff, Plus: 5 staff, Advance: unlimited
- Upgrade subscription if needed

---

## FAQ

**Q: Can I have multiple Owners?**
A: No, each business has one Owner who created it. However, you can grant extensive permissions to staff members to act as managers.

**Q: Can Staff see each other's transactions?**
A: Yes, all staff can view the complete transaction history in the History section, depending on their permissions.

**Q: What happens when I downgrade subscription?**
A: Staff limits apply. If you have more staff than your new plan allows, excess staff will lose access until you upgrade or remove users.

**Q: Can Staff use the web version?**
A: Yes, staff can log in at web.kelola.co with the same permissions as the mobile app.

**Q: How do I know what a staff member can do?**
A: Go to Home → Staff, select the user, and view their permission list.

**Q: Can Staff invite other staff?**
A: Only if you grant them the specific permission to invite staff. Most businesses restrict this to the Owner only.

**Q: How many staff can I add?**
A: Depends on your subscription:
- Free: 1 staff
- Basic: 3 staff
- Plus: 5 staff
- Advance: Unlimited staff

---

## Staff Limits by Subscription Plan

| Plan | Staff Limit | Product Limit | Catalog Limit |
|------|-------------|---------------|---------------|
| Free | 1 | 100 | 1 |
| Basic | 3 | 500 | 3 |
| Plus | 5 | 2,000 | 5 |
| Advance | Unlimited | Unlimited | Unlimited |
