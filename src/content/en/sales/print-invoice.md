---
title: "Printing and Sharing Invoices"
excerpt: "Complete guide to printing receipts and sharing invoices. Learn about printer setup, invoice configuration, A4 PDF invoices, and thermal receipt printing."
readingTime: 6
lastUpdated: "2026-02-15"
category: "sales"
difficulty: "beginner"
audience: "all"
---

## What You'll Learn

By the end of this guide, you'll be able to:
- Set up and connect Bluetooth thermal printers
- Configure invoice appearance and content
- Print thermal receipts (58mm and 80mm)
- Generate and share A4 PDF invoices
- Customize receipt footer and branding

---

## Invoice Types

Kelola provides two types of invoices for different use cases:

| Type | Best For | Format | Sharing |
|------|----------|--------|---------|
| **Thermal Receipt** | Quick customer receipts, retail POS | 58mm or 80mm thermal paper | Bluetooth printer |
| **A4 Invoice** | Formal invoices, accounting records | A4 PDF | Share as PDF |

---

## Supported Printers

### Thermal Receipt Printers

Kelola supports Bluetooth thermal printers that use ESC/POS commands:

**Paper Sizes:**
- **58mm** (2 inches) - Compact receipts
- **80mm** (3 inches) - Standard retail receipts

**Printer Requirements:**
- Bluetooth connectivity
- ESC/POS command support
- Thermal printing technology

**Recommended Printers:**
- Portable Bluetooth thermal printers
- POS/cashier printers commonly used in restaurants and retail
- Available on marketplaces starting from ~$15 USD

> **Note:** USB and network (Wi-Fi/LAN) printers are not currently supported for mobile apps.

---

## Connecting Your Printer

### Step 1: Pair the Printer

1. Turn on your Bluetooth thermal printer
2. On your device, go to **Settings → Bluetooth**
3. Search for and pair with your printer
4. Ensure the printer appears in paired devices

### Step 2: Grant Permissions

Kelola requires these permissions to print:
- **Bluetooth** - To discover and connect to printers
- **Location** - Required by Android for Bluetooth scanning
- **Storage** - To process receipt images

### Step 3: Print Your First Receipt

1. Open any completed **Stock Out (Sales)** transaction
2. Tap **View Invoice**
3. Select the **Receipt (Struk)** tab
4. Tap **Print**
5. Select your paired printer from the list
6. Choose paper size (58mm or 80mm)
7. The receipt will print automatically

---

## Invoice Configuration

Customize how your receipts and invoices appear to customers.

### Accessing Invoice Settings

1. Open any transaction's invoice view
2. Tap **Invoice Settings** (Pengaturan Struk)
3. Adjust the options below
4. Tap **Save**

### Configuration Options

| Setting | Description | Default |
|---------|-------------|---------|
| **Hide Customer Address** | Remove customer address from receipt | Off |
| **Hide Business Logo** | Remove your business logo | Off |
| **Hide Kelola Footer** | Remove "Created by kelola.co" text | Off |
| **Logo Position** | Place logo at top or bottom | Bottom |
| **Footer Text** | Add custom message (max 200 chars) | Empty |

### Logo Position Options

**Top Position:**
- Logo and business name appear at the top of the receipt
- Professional look for formal receipts

**Bottom Position (Default):**
- Logo appears after the transaction details
- Common for retail POS receipts

### Custom Footer Ideas

- "Thank you for your business!"
- "Follow us on Instagram @yourbusiness"
- "Returns accepted within 7 days with receipt"
- Your business hours or contact info

---

## Thermal Receipt Features

### What's Included

**Header:**
- Business logo and name
- Customer name
- Transaction date and time
- "RECEIPT" label

**Item Details:**
- Product names (sorted alphabetically)
- Quantity × Unit price
- Line item totals

**Financial Summary:**
- Subtotal
- Surcharge (if any)
- Discount (if any)
- **Total amount**
- Paid amount (if partial payment)
- Remaining balance (if unpaid)

**Footer:**
- Payment method
- Staff name who processed the sale
- Transaction notes
- Custom footer text
- Kelola branding (optional)

### Paper Size Differences

| Feature | 58mm | 80mm |
|---------|------|------|
| Text size | Smaller | Standard |
| Product name width | Narrower | Wider |
| Best for | Compact spaces | Standard retail |

![Sample printed receipt result from Kelola](/assets/features/invoice.webp)
*Example thermal receipt output from a completed transaction.*

---

## A4 PDF Invoice

Generate professional A4 invoices for formal transactions or accounting records.

### Features

**Professional Layout:**
- Clean, structured A4 format
- Invoice number and issue date
- From/To party details
- Itemized table with columns

**Business Information:**
- Your business name and address
- Business logo
- Customer name and address

**Financial Details:**
- Itemized product list with quantities
- Unit prices and line totals
- Subtotal, surcharge, discount
- **Final total**
- Payment status (paid/partial/unpaid)

**Bank Details Section:**
- Bank name
- Account number
- Account holder name
- Routing number / Sort code / BSB / IBAN
- Currency information

**Additional Features:**
- Notes section
- Multi-language support (auto-detected)
- RTL (Right-to-Left) support for Arabic
- Multi-page for long invoices

### Sharing A4 Invoices

1. Open the transaction's invoice view
2. Select the **Invoice (Faktur)** tab
3. Wait for the PDF to generate
4. Tap **Share**
5. Choose your sharing method (WhatsApp, Email, etc.)

> **Note:** A4 invoice generation requires an internet connection for font loading.

---

## Sharing Receipts

### Share as Image

For quick sharing via messaging apps:

1. Open the receipt view
2. Tap **Share**
3. The receipt is captured as a PNG image
4. Select your sharing app

**Best for:**
- WhatsApp/Telegram messages
- Email attachments
- Social media

### Share A4 PDF

For formal documentation:

1. Open the Invoice (Faktur) tab
2. Wait for PDF generation
3. Tap **Share**
4. PDF includes your business details and bank info

**Best for:**
- Accounting records
- Customer invoices
- Tax documentation

---

## Troubleshooting

### Printer Not Found

**Check:**
- Printer is powered on
- Bluetooth is enabled on your device
- Printer is paired in device settings
- Location permission is granted (Android)

**Solution:**
1. Refresh the printer list
2. Re-pair the printer in device settings
3. Restart the Kelola app

### Print Quality Issues

**Faded text:**
- Check thermal paper quality
- Ensure paper is loaded correctly
- Clean printer head

**Cut off text:**
- Select correct paper size (58mm vs 80mm)
- Check paper width matches setting

### Cannot Print

**On Android:**
- Grant all requested permissions
- Enable location services
- Try selecting the printer again

**On iOS:**
- Enable Bluetooth in Settings
- Ensure printer supports iOS Bluetooth

### A4 Invoice Won't Generate

- Check internet connection
- Try reloading the tab
- Contact support if fonts fail to load

---

## Best Practices

### For Retail Businesses

1. **Use 80mm printers** for standard retail receipts
2. **Enable logo** for brand recognition
3. **Add custom footer** with social media or thank you message
4. **Print immediately** after each sale

### For Service Businesses

1. **Use A4 invoices** for formal billing
2. **Fill in bank details** for easy customer payments
3. **Include notes** for service descriptions
4. **Share PDF** via email for records

### Receipt Management

- Print duplicate receipts for high-value transactions
- Share digital copies for customer records
- Use invoice numbers for tracking (shown on A4)

---

## FAQ

**Q: Can I use a USB printer?**
A: Currently, only Bluetooth thermal printers are supported for mobile printing. Use the web version (web.kelola.co) for USB printer support.

**Q: Can I print from the web version?**
A: Yes, the web version supports printing to any connected printer using your browser's print function.

**Q: How do I change the invoice number format?**
A: Invoice numbers are auto-generated. Contact support for custom formatting requests.

**Q: Can I add my tax ID to invoices?**
A: Tax ID can be added to your business profile. It will appear on A4 invoices automatically.

**Q: Why does printing require location permission?**
A: Android requires location permission for Bluetooth device discovery. Kelola does not track your location.

**Q: Can I print in different languages?**
A: Receipts automatically use your app's language setting. A4 invoices support multiple languages including Arabic (RTL), Thai, Chinese, and more.

**Q: What if my printer isn't listed?**
A: Ensure it's paired in device Bluetooth settings first. If still not listed, your printer may not support the ESC/POS standard.
