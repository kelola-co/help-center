# Content Update Plan: Broken Links Fix

**Created:** 2026-02-15  
**Updated:** 2026-02-15  
**Status:** ✅ English Complete | ⏳ ID/TH Pending  
**Priority:** High (affects user experience)

---

## Executive Summary

Found **14 categories** of broken internal links across 60+ files in the help center. Links point to:
- Non-existent content files
- Wrong folder names (typo: `reports` vs `report`)
- Wrong file names (typo: `inviting-staff` vs `invite-staff`)
- Future content that was never created

### Progress Status

| Language | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 | Status |
|----------|---------|---------|---------|---------|---------|--------|
| **English (EN)** | ✅ Done | ✅ Done | ✅ Done | ✅ Done | ✅ Done | **COMPLETE** |
| **Indonesian (ID)** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Not Started |
| **Thai (TH)** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Not Started |

---

## ✅ English Completion Summary

### Files Modified: 20+ English files

**Link Fixes Applied:**
- ✅ `inviting-staff` → `invite-staff` (3 files)
- ✅ `../reports/` → `../report/` (21 links in 14 files)
- ✅ `reports/stock-reports` → `report/stock-report` (3 files)
- ✅ Fixed various dead links to non-existent content

**New Content Created (7 files):**

| File | Path | Size | Description |
|------|------|------|-------------|
| handling-returns.md | `src/content/en/sales/` | 7,132 bytes | Processing returns & refunds |
| understanding-reports.md | `src/content/en/reports/` | 8,180 bytes | Guide to all report types |
| printing-sharing-invoices.md | `src/content/en/sales/` | 5,838 bytes | Print & share invoices |
| organizing-categories.md | `src/content/en/products/` | 5,221 bytes | Product category best practices |
| using-barcode-sku.md | `src/content/en/products/` | 6,533 bytes | Barcode & SKU guide |
| understanding-stock-flow.md | `src/content/en/stock/` | 7,174 bytes | Inventory movement concepts |
| printing-barcode-labels.md | `src/content/en/barcode/` | 7,164 bytes | Label printing guide |

**Verification:** All 100+ internal links in English content now valid ✅

---

## Remaining Work for ID/TH

### Phase 1: Critical Link Errors (Quick Fixes)

**Priority:** 🔴 HIGH  
**Time Estimate:** 30 minutes per language  

#### 1.1 Fix `inviting-staff` → `invite-staff`

| File | Language | Current | Fix |
|------|----------|---------|-----|
| `src/content/id/staff/understanding-roles.md:449` | ID | `./inviting-staff` | `./invite-staff` |
| `src/content/th/staff/understanding-roles.md:449` | TH | `./inviting-staff` | `./invite-staff` |

#### 1.2 Fix `../reports/` → `../report/`

Apply same fixes as English:
- `../reports/understanding-reports` → `../report/accounting-report`
- `../reports/stock-reports` → `../report/stock-report`

**Affected ID/TH files:** 14 files each language

---

### Phase 2: Create Missing Core Content

**Priority:** 🟡 MEDIUM  
**Time Estimate:** 4-6 hours per language

#### Translate to Indonesian (ID):

1. **handling-returns.md** → `src/content/id/sales/handling-returns.md`
2. **understanding-reports.md** → `src/content/id/reports/understanding-reports.md`
3. **printing-sharing-invoices.md** → `src/content/id/sales/printing-sharing-invoices.md`

#### Translate to Thai (TH):

1. **handling-returns.md** → `src/content/th/sales/handling-returns.md`
2. **understanding-reports.md** → `src/content/th/reports/understanding-reports.md`
3. **printing-sharing-invoices.md** → `src/content/th/sales/printing-sharing-invoices.md`

**Translation Notes:**
- Use English versions as base
- Maintain technical terms (SKU, API, etc.) in English
- Keep frontmatter structure identical
- Preserve TODO comments for screenshots

---

### Phase 3: Create Supporting Content

**Priority:** 🟢 LOW  
**Time Estimate:** 6-8 hours per language

#### Translate to Indonesian (ID):

1. **organizing-categories.md** → `src/content/id/products/organizing-categories.md`
2. **using-barcode-sku.md** → `src/content/id/products/using-barcode-sku.md`
3. **understanding-stock-flow.md** → `src/content/id/stock/understanding-stock-flow.md`
4. **printing-barcode-labels.md** → `src/content/id/barcode/printing-barcode-labels.md`

#### Translate to Thai (TH):

1. **organizing-categories.md** → `src/content/th/products/organizing-categories.md`
2. **using-barcode-sku.md** → `src/content/th/products/using-barcode-sku.md`
3. **understanding-stock-flow.md** → `src/content/th/stock/understanding-stock-flow.md`
4. **printing-barcode-labels.md** → `src/content/th/barcode/printing-barcode-labels.md`

---

### Phase 4: Fix Remaining Broken Links

**Priority:** 🟡 MEDIUM  
**Time Estimate:** 1 hour per language

Apply same link replacements as English:

| Broken Link | Replacement (ID/TH) |
|-------------|---------------------|
| `../products/managing-product-images` | `../products/adding-products` |
| `../reports/staff-reports` | `../staff/understanding-roles` |
| `../account/data-export` | `../account/managing-profile` |
| `./understanding-dashboard` | Remove or use `./quick-start-guide` |
| `./creating-first-business` | Remove or use `./quick-start-guide` |

---

## Implementation Priority Matrix

| Phase | Task | Impact | Effort | Priority |
|-------|------|--------|--------|----------|
| **ID** | Fix critical typos | High | 30 min | 🔴 P0 |
| **ID** | Create core content | High | 4 hrs | 🟡 P1 |
| **ID** | Create supporting content | Low | 6 hrs | 🟢 P2 |
| **ID** | Remove dead links | Medium | 30 min | 🟡 P1 |
| **TH** | Fix critical typos | High | 30 min | 🔴 P0 |
| **TH** | Create core content | High | 4 hrs | 🟡 P1 |
| **TH** | Create supporting content | Low | 6 hrs | 🟢 P2 |
| **TH** | Remove dead links | Medium | 30 min | 🟡 P1 |

**Total Remaining Time:** ~22 hours (11 hours per language)

---

## Quick Commands for Remaining Work

### Check ID broken links:
```bash
grep -rn "\[.*→.*\]" src/content/id --include="*.md" | grep -E "(inviting-staff|reports\/|managing-product-images|staff-reports|data-export|understanding-dashboard|creating-first-business)"
```

### Check TH broken links:
```bash
grep -rn "\[.*→.*\]" src/content/th --include="*.md" | grep -E "(inviting-staff|reports\/|managing-product-images|staff-reports|data-export|understanding-dashboard|creating-first-business)"
```

---

## English File Changes Reference

### Modified Files (EN):

**Phase 1 - Link Fixes:**
- `src/content/en/staff/understanding-roles.md`
- `src/content/en/staff/invite-staff.md`
- `src/content/en/staff/managing-team.md`
- `src/content/en/sales/recording-sales.md`
- `src/content/en/sales/managing-transactions.md`
- `src/content/en/customers/adding-customers.md`
- `src/content/en/multi-business/creating-businesses.md`
- `src/content/en/catalog/creating-catalogs.md`
- `src/content/en/getting-started/quick-start-guide.md`
- `src/content/en/getting-started/app-navigation.md`
- `src/content/en/stock/record-stock-in.md`
- `src/content/en/stock/managing-stock-alerts.md`
- `src/content/en/stock/difference-stock-in-out-audit.md`
- `src/content/en/products/adding-products.md`
- `src/content/en/barcode/scanning-barcodes.md`
- `src/content/en/report/expense.md`

**Phase 2 - New Files:**
- `src/content/en/sales/handling-returns.md`
- `src/content/en/reports/understanding-reports.md`
- `src/content/en/sales/printing-sharing-invoices.md`

**Phase 3 - New Files:**
- `src/content/en/products/organizing-categories.md`
- `src/content/en/products/using-barcode-sku.md`
- `src/content/en/stock/understanding-stock-flow.md`
- `src/content/en/barcode/printing-barcode-labels.md`

---

## Next Steps

1. ✅ **English Complete** - All fixes applied and verified
2. ⏳ **Execute ID Phase 1-4** - Apply same fixes to Indonesian
3. ⏳ **Execute TH Phase 1-4** - Apply same fixes to Thai
4. ⏳ **Final Verification** - Run link checker on all languages

---

## Notes

- Some links in `public/llms-full.txt` are also broken - this is a generated file
- Fix source files (ID/TH) and regenerate llms-full.txt after all fixes
- Consider implementing automated link checking in CI/CD
- The `printing-sharing-invoices.md` content overlaps with `features/print-invoice.md` - consider consolidating in future

---

## Appendix: Content Template for New Files

```markdown
---
title: "Title"
excerpt: "Brief description"
readingTime: 5
lastUpdated: "2026-02-15"
category: "category-name"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

## Main Sections

## FAQ

## Related Articles
- [Link →](../path/to/article)
```
