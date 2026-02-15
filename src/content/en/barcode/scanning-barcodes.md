---
title: "Using Barcode Scanner in Kelola"
excerpt: "Complete guide to using barcode scanning in Kelola. Learn to scan products for sales, stock management, and quick product lookup."
readingTime: 5
lastUpdated: "2026-02-15"
category: "barcode"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Scan barcodes with your mobile device
- Use barcode scanning for sales
- Scan for stock operations
- Troubleshoot scanning issues
- Set up barcode workflows

---

## Barcode Scanning Overview

**What You Can Do:**
- 📱 **Mobile scanning** — Use phone camera
- 🔍 **Product lookup** — Find products instantly
- ⚡ **Fast sales** — Quick checkout
- 📦 **Inventory management** — Rapid stock entry
- 🏷️ **Product verification** — Confirm correct item

---

## Supported Barcode Types

Kelola supports common barcode formats:

| Type | Format | Use Case |
|------|--------|----------|
| **EAN-13** | 13 digits | Retail products globally |
| **UPC-A** | 12 digits | North American retail |
| **Code 128** | Alphanumeric | Internal codes, shipping |
| **Code 39** | Alphanumeric | Industrial, defense |
| **QR Code** | 2D | URLs, information |

<!-- TODO: Screenshot - Barcode type examples -->

---

## Mobile App Scanning

### Using Camera Scanner

**For sales and stock:**

1. Open **Stock Out** (or Stock In)
2. Tap **"Scan"** icon (camera)
3. Point camera at barcode
4. Hold steady until beep
5. Product auto-adds to list

**Tips for success:**
- ✅ Good lighting
- ✅ Steady hands
- ✅ Clear barcode (not wrinkled)
- ✅ Close enough to fill frame
- ❌ Avoid glare/shadows

<!-- TODO: Screenshot - Camera scanning interface -->

### Scanning Multiple Items

**Rapid scanning mode:**

1. Keep scan screen open
2. Scan first item
3. Immediately scan next
4. Items accumulate in list
5. Tap "Done" when finished

> **Pro tip:** Practice the rhythm — scan, move, scan, move.

### Manual Entry Fallback

**When scanning fails:**

1. Tap **"Enter Manually"**
2. Type barcode number
3. Tap **"Search"**
4. Select product

---

## Web Scanner (USB)

### Setup

**For desktop/laptop:**

1. Connect USB barcode scanner
2. Wait for driver installation
3. Scanner acts as keyboard input
4. No additional software needed

### Using Web Scanner

**On web.kelola.co:**

1. Open Stock In/Out
2. Click **"Scan Barcode"** button
3. Scanner beeps, product appears
4. Quantity defaults to 1
5. Adjust if needed
6. Scan next item

<!-- TODO: Screenshot - Web scanning interface -->

### Scanner Configuration

**Most scanners work out-of-box.** If issues:

1. Ensure scanner in "HID keyboard" mode
2. Check suffix settings (should send Enter)
3. Verify barcode type enabled
4. Test in text editor first

---

## Scanning Workflows

### Fast Checkout (Retail)

**Scenario:** Customer with multiple items

```
1. Open Stock Out
2. Tap Scan
3. Scan each item rapidly
4. Review list
5. Select customer (optional)
6. Submit sale
7. Print receipt
```

**Time saved:** 50-70% vs manual search

### Receiving Inventory

**Scenario:** Large delivery from supplier

```
1. Open Stock In
2. Tap Scan
3. Scan each item as unloaded
4. Verify quantities match delivery note
5. Submit stock in
6. Organize on shelves
```

**Benefits:**
- Real-time inventory update
- No paperwork backlog
- Immediate discrepancy detection

### Stock Audit

**Scenario:** Monthly inventory count

```
1. Open Stock Audit
2. Tap Scan
3. Scan each item on shelf
4. System shows expected quantity
5. Enter actual count
6. Move to next item
```

**Accuracy:** Eliminates manual entry errors

---

## Barcode Best Practices

### Product Setup

✅ **Assign unique barcodes**
- One barcode per SKU
- No duplicates
- Consistent format

✅ **Print quality labels**
- Clear, high-contrast
- Proper size (min 1.5cm width)
- Durable material
- Proper placement

✅ **Test before use**
- Scan new barcodes
- Verify correct product
- Check all scanner types

### Daily Operations

✅ **Scanner hygiene**
- Clean camera lens regularly
- Wipe scanner window
- Check for damage

✅ **Lighting matters**
- Avoid direct glare
- Ensure adequate light
- Adjust angle if needed

✅ **Backup plan**
- Know manual entry process
- Keep product list accessible
- Train all staff

---

## Troubleshooting

### "Barcode not scanning"

**Common causes:**

| Issue | Solution |
|-------|----------|
| Poor lighting | Move to brighter area |
| Blurry barcode | Hold camera steadier |
| Damaged barcode | Enter manually |
| Wrong barcode type | Check format support |
| Glare/reflection | Adjust angle |
| Too far/close | Find optimal distance |

### "Wrong product found"

**Check:**
- Barcode assigned to correct product
- No duplicate barcodes in system
- Scanner reading complete code

**Fix:**
1. Verify product barcode in system
2. Reassign if wrong
3. Check for duplicates

### "Scanner not working (web)"

**Check:**
- USB connection secure
- Scanner powered on
- Correct mode (keyboard emulation)
- Cursor in scan field

**Try:**
- Different USB port
- Restart browser
- Test in notepad

### "Slow scanning"

**Improvements:**
- Clean camera lens
- Better lighting
- Update app
- Restart device
- Check internet (for lookup)

---

## Advanced Tips

### Bulk Barcode Import

**Setting up many products:**

1. Prepare CSV with: Product Name, Barcode, Price
2. Use web import tool
3. Upload file
4. Verify mappings
5. Import

### Barcode Printing

**Create your own barcodes:**

- Use barcode generator software
- Print on label sheets
- Apply to products
- Scan to verify

### Custom Barcodes

**For products without manufacturer codes:**

1. Generate unique codes
2. Use internal SKU format
3. Print and apply labels
4. Scan in Kelola

---

## FAQ

**Q: Do I need a special device to scan?**
A: No! Use your smartphone camera. USB scanners are optional for high-volume.

**Q: Can I scan without internet?**
A: Product lookup requires internet. Barcode scanning works offline if product cached.

**Q: What if a product has no barcode?**
A: Create and print your own barcode label, or use manual search.

**Q: Can I scan multiple barcodes at once?**
A: No, scan one at a time. But you can scan rapidly in sequence.

**Q: Do barcodes work across all my devices?**
A: Yes! Barcodes are tied to products, accessible on mobile and web.

**Q: Can customers scan my product barcodes?**
A: Only if they have access to your Kelola system. For customer scanning, use catalogs.

