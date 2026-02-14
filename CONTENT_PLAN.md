# Kelola Help Center - Comprehensive Content Plan

> **Version**: 1.0  
> **Last Updated**: February 15, 2026  
> **Goal**: Create a user-centric, comprehensive help center that makes learning Kelola effortless

---

## 1. Executive Summary

### Current State Analysis
- **Existing Articles**: 21 articles across 6 categories
- **Languages**: English, Indonesian, Thai
- **Quality Issues**: 
  - Many articles are too brief (1-2 min read time)
  - Missing critical user workflows
  - No visual aids or screenshots
  - Incomplete feature coverage (~30% of features documented)

### Target State
- **Target Articles**: 50+ comprehensive articles
- **Coverage**: 100% of core features with step-by-step guides
- **Format**: Mixed content types (quick starts, deep dives, FAQs, video tutorials)
- **User Journey**: Clear learning paths from beginner to advanced

---

## 2. User Personas & Learning Paths

### Persona 1: The New Business Owner ("Rina")
- **Background**: Just opened a small retail shop
- **Goal**: Get up and running quickly, track daily sales
- **Tech Level**: Beginner
- **Pain Points**: Overwhelmed by business management, needs simple guidance

**Learning Path for Rina:**
1. Quick Start Guide (5 min) → Get first product added
2. Record First Sale (3 min) → Build confidence
3. Basic Stock Management (10 min) → Daily operations
4. Understanding Reports (5 min) → Business insights

---

### Persona 2: The Growing Business Manager ("Budi")
- **Background**: Managing 2-3 store locations, has staff
- **Goal**: Scale operations, manage team, control inventory across locations
- **Tech Level**: Intermediate
- **Pain Points**: Needs efficiency, staff coordination, multi-location tracking

**Learning Path for Budi:**
1. Staff Management & Permissions → Team setup
2. Stock Transfer Between Businesses → Multi-location
3. Advanced Reporting → Business intelligence
4. Barcode System → Efficiency gains

---

### Persona 3: The Admin/Staff Member ("Dewi")
- **Background**: Employee using Kelola daily
- **Goal**: Perform daily tasks efficiently without making mistakes
- **Tech Level**: Beginner-Intermediate
- **Pain Points**: Unclear permissions, afraid of errors, needs quick reference

**Learning Path for Dewi:**
1. Understanding My Permissions → What I can/can't do
2. Daily Stock Operations → Stock in/out workflows
3. Handling Customer Transactions → Sales process
4. Troubleshooting Common Issues → Quick problem solving

---

## 3. Content Audit: Existing vs. Needed

### 3.1 Current Content Inventory

| Category | Articles | Coverage Quality |
|----------|----------|------------------|
| About | 3 | ✅ Adequate |
| Stock Management | 5 | ⚠️ Basic (missing workflows) |
| Staff Management | 3 | ⚠️ Basic (missing permissions guide) |
| Key Features | 4 | ❌ Poor (major gaps) |
| Business Reports | 5 | ⚠️ Basic (missing use cases) |
| Subscription | 1 | ❌ Poor (missing pricing details) |

**Total**: 21 articles | **Average Read Time**: 1.5 minutes

### 3.2 Gap Analysis

#### Critical Missing Content

| Feature | Status | Priority |
|---------|--------|----------|
| Product Management | ❌ Not documented | 🔴 Critical |
| Categories Management | ❌ Not documented | 🔴 Critical |
| Transaction History | ❌ Not documented | 🔴 Critical |
| Payment Methods | ❌ Not documented | 🔴 Critical |
| Catalog/Sharing | ❌ Not documented | 🟡 High |
| Stock Alerts | ❌ Not documented | 🟡 High |
| Multi-Business Setup | ❌ Not documented | 🟡 High |
| Account Settings | ❌ Not documented | 🟡 High |
| Login & Authentication | ⚠️ Partial | 🟡 High |
| Barcode Label Printing | ❌ Not documented | 🟢 Medium |
| Expense Categories | ⚠️ Partial | 🟢 Medium |

---

## 4. Proposed New Content Structure

### Category Reorganization

```
help-center/src/content/
├── getting-started/          ← NEW
│   ├── quick-start-guide.md
│   ├── app-navigation.md
│   ├── creating-first-business.md
│   ├── understanding-dashboard.md
│   └── login-and-security.md
│
├── products/                 ← NEW
│   ├── adding-products.md
│   ├── managing-product-images.md
│   ├── using-barcode-sku.md
│   ├── organizing-categories.md
│   ├── editing-and-deleting.md
│   └── product-transaction-history.md
│
├── stock/                    ← EXPANDED
│   ├── understanding-stock-flow.md
│   ├── recording-stock-in.md
│   ├── recording-stock-out.md
│   ├── stock-audit-correction.md
│   ├── transferring-stock.md
│   ├── managing-stock-alerts.md
│   └── editing-stock-records.md
│
├── sales/                    ← NEW
│   ├── recording-a-sale.md
│   ├── managing-transactions.md
│   ├── handling-returns.md
│   ├── customer-selection.md
│   ├── payment-status-tracking.md
│   └── printing-sharing-invoices.md
│
├── customers/                ← EXPANDED
│   ├── adding-customers.md
│   ├── customer-transaction-history.md
│   ├── managing-customer-debt.md
│   └── bulk-customer-actions.md
│
├── suppliers/                ← NEW
│   ├── adding-suppliers.md
│   ├── linking-suppliers-to-purchases.md
│   └── supplier-history.md
│
├── expenses/                 ← EXPANDED
│   ├── recording-expenses.md
│   ├── expense-categories.md
│   ├── analyzing-expenses.md
│   └── expense-reports.md
│
├── staff/                    ← EXPANDED
│   ├── understanding-roles.md
│   ├── inviting-staff-members.md
│   ├── permission-levels-guide.md
│   ├── joining-a-business.md
│   └── managing-team-members.md
│
├── multi-business/           ← NEW
│   ├── creating-businesses.md
│   ├── switching-businesses.md
│   ├── business-settings.md
│   └── archiving-businesses.md
│
├── catalog/                  ← NEW
│   ├── creating-catalogs.md
│   ├── sharing-catalogs.md
│   └── catalog-analytics.md
│
├── reports/                  ← RENAMED (from report)
│   ├── understanding-reports.md
│   ├── financial-reports.md
│   ├── stock-reports.md
│   ├── customer-reports.md
│   ├── receivables-reports.md
│   └── exporting-reports.md
│
├── payment-methods/          ← NEW
│   ├── adding-payment-methods.md
│   ├── managing-payment-types.md
│   └── payment-method-reports.md
│
├── barcode/                  ← NEW
│   ├── scanning-barcodes.md
│   ├── printing-barcode-labels.md
│   └── barcode-setup-guide.md
│
├── subscription/             ← EXPANDED
│   ├── understanding-plans.md
│   ├── how-to-upgrade.md
│   ├── managing-subscription.md
│   ├── cancelling-subscription.md
│   └── premium-features-guide.md
│
├── account/                  ← NEW
│   ├── managing-profile.md
│   ├── changing-language.md
│   ├── notification-settings.md
│   └── data-export.md
│
├── troubleshooting/          ← NEW
│   ├── common-issues.md
│   ├── sync-problems.md
│   ├── printing-issues.md
│   └── contact-support.md
│
└── about/                    ← EXISTING
    ├── what-is-kelola.md
    ├── how-to-download.md
    └── data-security.md
```

---

## 5. Detailed Article Specifications

### 5.1 Content Format Standards

Each article should include:

```markdown
---
title: "Clear, Actionable Title"
excerpt: "Concise description of what user will learn (SEO optimized)"
readingTime: 3-5 (realistic estimate)
lastUpdated: "YYYY-MM-DD"
category: "category-name"
difficulty: "beginner|intermediate|advanced"
audience: "owner|staff|admin|all"
prerequisites: ["article-1", "article-2"] (optional)
---

## What You'll Learn
Brief overview of outcomes

## Prerequisites
What user needs before starting

## Step-by-Step Guide
1. Clear numbered steps
2. With screenshots marked <!-- TODO: Screenshot -->
3. Expected results after each major step

## Tips & Best Practices
- Pro tips
- Common pitfalls to avoid

## Related Articles
- [Link to related content]

## FAQ
**Q: Common question?**
A: Clear answer
```

### 5.2 Priority Content Roadmap

#### Phase 1: Foundation (Week 1-2) - Critical
| Article | Priority | Est. Time | Target Persona |
|---------|----------|-----------|----------------|
| Quick Start Guide | 🔴 P0 | 5 min | All |
| App Navigation Overview | 🔴 P0 | 3 min | All |
| Adding Products | 🔴 P0 | 5 min | Rina |
| Recording Stock In | 🔴 P0 | 5 min | Rina |
| Recording a Sale | 🔴 P0 | 5 min | Rina |
| Understanding Permissions | 🔴 P0 | 5 min | Dewi |

#### Phase 2: Core Operations (Week 3-4) - High Priority
| Article | Priority | Est. Time | Target Persona |
|---------|----------|-----------|----------------|
| Managing Stock Out | 🟡 P1 | 5 min | All |
| Customer Management | 🟡 P1 | 5 min | Rina |
| Transaction History | 🟡 P1 | 5 min | All |
| Expense Tracking | 🟡 P1 | 5 min | Rina |
| Staff Invitation | 🟡 P1 | 5 min | Budi |
| Permission Levels | 🟡 P1 | 5 min | Budi |

#### Phase 3: Advanced Features (Week 5-6) - Medium Priority
| Article | Priority | Est. Time | Target Persona |
|---------|----------|-----------|----------------|
| Stock Alerts | 🟢 P2 | 4 min | Budi |
| Stock Transfer | 🟢 P2 | 5 min | Budi |
| Catalog Creation | 🟢 P2 | 5 min | Rina |
| Barcode Printing | 🟢 P2 | 5 min | Budi |
| Financial Reports | 🟢 P2 | 5 min | Budi |
| Multi-Business | 🟢 P2 | 5 min | Budi |

#### Phase 4: Polish & Advanced (Week 7-8) - Lower Priority
| Article | Priority | Est. Time | Target Persona |
|---------|----------|-----------|----------------|
| Troubleshooting Guide | 🟢 P3 | 10 min | All |
| Data Export | 🟢 P3 | 3 min | Budi |
| Advanced Permissions | 🟢 P3 | 5 min | Budi |
| Subscription Management | 🟢 P3 | 5 min | All |

---

## 6. Content Quality Guidelines

### 6.1 Writing Style

**Do:**
- Use second person ("you", "your")
- Start with action verbs
- Keep sentences under 20 words
- Use bullet points for lists
- Include specific numbers ("Tap 3 times" not "Tap multiple times")

**Don't:**
- Use jargon without explanation
- Write passive sentences
- Assume prior knowledge
- Use generic phrases ("easy to use", "simple")

### 6.2 Visual Content Requirements

| Article Type | Screenshots | Diagrams | Videos |
|--------------|-------------|----------|--------|
| Quick Start | 5-8 | 1 | Optional |
| Feature Guide | 3-5 | 0-1 | Optional |
| Tutorial | 8-12 | 2-3 | Recommended |
| Reference | 1-2 | 0 | No |

### 6.3 Screenshot Standards

- Device frame: Show actual mobile device
- Highlight: Use red circles/arrows for focus
- Annotations: Numbered steps on screenshots
- Consistency: Same device model across all images
- Format: WebP with JPEG fallback

---

## 7. SEO & Discovery Strategy

### 7.1 Keyword Targeting

| Category | Primary Keywords | Secondary Keywords |
|----------|------------------|-------------------|
| Getting Started | "kelola tutorial", "how to use kelola" | "kelola app guide", "kelola setup" |
| Products | "add products kelola", "kelola inventory" | "product management", "SKU barcode" |
| Stock | "stock management", "inventory tracking" | "stock in out", "warehouse app" |
| Sales | "record sales", "point of sale" | "sales tracking", "transaction app" |
| Reports | "business reports", "sales report" | "financial analytics", "kelola reports" |

### 7.2 Cross-Linking Strategy

Every article should link to:
- 2-3 related articles (contextual links)
- 1 parent category overview
- 1 next-step article for learning path

### 7.3 Content Refresh Schedule

| Content Type | Review Frequency | Owner |
|--------------|------------------|-------|
| Feature Guides | Quarterly | Content Team |
| Quick Starts | Monthly | Content Team |
| UI Screenshots | Per Release | Content Team |
| Pricing Info | Immediate on change | Product Team |

---

## 8. Success Metrics

### 8.1 Content Coverage
- [ ] 50+ articles published
- [ ] 100% of core features documented
- [ ] All articles have 3+ minute read time
- [ ] All articles have at least 1 screenshot

### 8.2 User Engagement
- [ ] 70%+ article completion rate
- [ ] < 30 seconds time-to-find-answer
- [ ] < 5% negative feedback rate
- [ ] 20%+ click-through on related articles

### 8.3 SEO Performance
- [ ] 80%+ articles indexed by Google
- [ ] Top 10 ranking for "kelola [feature]" queries
- [ ] Featured snippets for 5+ tutorial queries

---

## 9. Implementation Checklist

### Immediate Actions (This Week)
- [ ] Create new category structure
- [ ] Draft Quick Start Guide
- [ ] Draft App Navigation Overview
- [ ] Create content templates
- [ ] Set up screenshot guidelines

### Short-term (Next 2 Weeks)
- [ ] Complete Phase 1 articles (6 articles)
- [ ] Update existing articles to new format
- [ ] Add screenshots to all articles
- [ ] Implement new navigation

### Medium-term (Next Month)
- [ ] Complete Phase 2 articles (6 articles)
- [ ] Add video tutorials for key flows
- [ ] Implement user feedback system
- [ ] SEO optimization pass

### Long-term (Next Quarter)
- [ ] Complete all planned articles
- [ ] Translate to all supported languages
- [ ] Add interactive tutorials
- [ ] Implement in-app help integration

---

## 10. Content Templates

### Template A: Quick Start Guide
```markdown
---
title: "[Feature] Quick Start"
excerpt: "Get started with [feature] in under 5 minutes"
difficulty: beginner
---

## ⚡ Quick Overview
1-sentence description of the feature and its value

## 🎯 Before You Start
- [ ] Requirement 1
- [ ] Requirement 2

## 📋 Step-by-Step (3-5 steps max)
### Step 1: [Action]
Description with screenshot

### Step 2: [Action]
Description with screenshot

## ✅ Success Check
How user knows they did it right

## 🚀 Next Steps
- [Advanced Guide]
- [Related Feature]
```

### Template B: Comprehensive Guide
```markdown
---
title: "Complete Guide to [Feature]"
excerpt: "Everything you need to know about [feature]"
difficulty: intermediate
---

## Introduction
What this feature does and why it matters

## Prerequisites
What user needs before starting

## Section 1: Basic Usage
### Step 1: ...
### Step 2: ...

## Section 2: Advanced Features
...

## Section 3: Best Practices
...

## Troubleshooting
Common issues and solutions

## FAQ
...
```

### Template C: FAQ / Troubleshooting
```markdown
---
title: "[Feature] FAQ & Troubleshooting"
excerpt: "Common questions and solutions for [feature]"
difficulty: all
---

## Frequently Asked Questions

### Q: Question 1?
**A:** Answer with context

### Q: Question 2?
**A:** Answer with context

## Common Issues

### Issue: [Problem]
**Symptoms:** What user sees
**Solution:** Step-by-step fix
**Prevention:** How to avoid in future

## Still Need Help?
Contact support information
```

---

## Appendix A: Feature-to-Content Mapping

| App Feature | Current Docs | Needed Content | Priority |
|-------------|--------------|----------------|----------|
| Add Product | ❌ | Products > Adding Products | 🔴 P0 |
| Product Images | ❌ | Products > Managing Images | 🟡 P1 |
| Categories | ❌ | Products > Categories | 🟡 P1 |
| Barcode/QR | Partial | Barcode > Complete Guide | 🟡 P1 |
| Stock In | ✅ | Update existing | Keep |
| Stock Out | ✅ | Update existing | Keep |
| Stock Transfer | ✅ | Update existing | Keep |
| Stock Alerts | ❌ | Stock > Managing Alerts | 🟡 P1 |
| Transaction History | ❌ | Sales > Managing Transactions | 🔴 P0 |
| Record Sale | ❌ | Sales > Recording Sales | 🔴 P0 |
| Invoice Print | Partial | Sales > Printing Invoices | 🟡 P1 |
| Customers | Partial | Customers > Complete Guide | 🟡 P1 |
| Suppliers | ❌ | Suppliers > Complete Guide | 🟢 P2 |
| Expenses | Partial | Expenses > Complete Guide | 🟡 P1 |
| Staff Invite | ✅ | Update existing | Keep |
| Permissions | ❌ | Staff > Permissions Guide | 🔴 P0 |
| Reports | Partial | Reports > All Guides | 🟡 P1 |
| Catalog | ❌ | Catalog > Complete Guide | 🟢 P2 |
| Multi-Business | ❌ | Multi-Business > All | 🟢 P2 |
| Subscription | Partial | Subscription > All | 🟡 P1 |
| Payment Methods | ❌ | Payment Methods > All | 🟢 P2 |
| Account Settings | ❌ | Account > All | 🟡 P1 |

---

## Appendix B: Language Coverage Plan

| Language | Status | Coverage Target |
|----------|--------|-----------------|
| English (en) | ✅ Active | 100% |
| Indonesian (id) | ✅ Active | 100% |
| Thai (th) | ⚠️ Partial | 80% (core features only) |
| Vietnamese (vi) | 🔄 Planned | Core features |
| Spanish (es) | 🔄 Planned | Core features |

---

*This content plan is a living document and should be updated as the product evolves.*
