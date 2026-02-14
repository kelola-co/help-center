#!/usr/bin/env node
/**
 * Generate llms-full.txt - Comprehensive documentation export for AI crawlers
 * This script aggregates all help center content into a single LLM-optimized file
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '../src/content');
const OUTPUT_FILE = path.join(__dirname, '../public/llms-full.txt');

async function readMarkdownFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  
  // Parse frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    return { frontmatter: {}, content: content.trim() };
  }
  
  const frontmatterText = frontmatterMatch[1];
  const bodyContent = frontmatterMatch[2].trim();
  
  // Parse YAML frontmatter
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: bodyContent };
}

async function* walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else if (entry.name.endsWith('.md')) {
      yield fullPath;
    }
  }
}

async function generateLlmsFull() {
  console.log('🚀 Generating llms-full.txt...');
  
  let output = `# Kelola.co Help Center - Complete Documentation

> Full documentation export optimized for AI consumption
> Generated: ${new Date().toISOString()}
> Source: https://help.kelola.co

---

## Table of Contents

1. [Overview](#overview)
2. [English Documentation](#english-documentation)
3. [Dokumentasi Bahasa Indonesia](#dokumentasi-bahasa-indonesia)
4. [เอกสารภาษาไทย](#เอกสารภาษาไทย)
5. [Technical Reference](#technical-reference)
6. [Frequently Asked Questions](#frequently-asked-questions)

---

## Overview

Kelola.co is an inventory-first business-management platform built for micro, small, and medium enterprises (MSMEs). 
It centralizes stock, sales, profit tracking, and staff collaboration in a single cloud workspace.

### Key Capabilities
- Real-time stock control with low-stock alerts
- Automated financial reports (P&L, cash flow)
- Role-based staff access (up to 100 staff on higher tiers)
- Omnichannel: Android, iOS, and modern browsers
- Industry-agnostic: retail, F&B, electronics, agriculture, cosmetics, and more

### Supported Platforms
- Android 8+ (Google Play)
- iOS 13+ (App Store)
- Web browsers: Chrome, Safari, Edge, Firefox

### Languages Supported
- Bahasa Indonesia
- English
- Thai, Vietnamese, Filipino, Arabic, Malay

---

`;

  // Process English content
  console.log('📚 Processing English content...');
  output += `## English Documentation\n\n`;
  
  const enFiles = [];
  for await (const file of walkDir(path.join(CONTENT_DIR, 'en'))) {
    enFiles.push(file);
  }
  
  // Sort files by category
  enFiles.sort((a, b) => a.localeCompare(b));
  
  let currentCategory = '';
  for (const file of enFiles) {
    const relativePath = path.relative(path.join(CONTENT_DIR, 'en'), file);
    const category = path.dirname(relativePath);
    const { frontmatter, content } = await readMarkdownFile(file);
    
    if (category !== currentCategory) {
      currentCategory = category;
      const categoryTitles = {
        'about': 'About Kelola',
        'features': 'Key Features',
        'report': 'Business Reports',
        'staff': 'Staff Management',
        'stock': 'Stock Management',
        'subscription': 'Subscription & Billing'
      };
      output += `### ${categoryTitles[category] || category}\n\n`;
    }
    
    output += `#### ${frontmatter.title || path.basename(file, '.md')}\n\n`;
    if (frontmatter.excerpt) {
      output += `> ${frontmatter.excerpt}\n\n`;
    }
    output += `${content}\n\n`;
    output += `---\n\n`;
  }

  // Process Indonesian content
  console.log('📚 Processing Indonesian content...');
  output += `## Dokumentasi Bahasa Indonesia\n\n`;
  
  const idFiles = [];
  for await (const file of walkDir(path.join(CONTENT_DIR, 'id'))) {
    idFiles.push(file);
  }
  
  idFiles.sort((a, b) => a.localeCompare(b));
  
  currentCategory = '';
  for (const file of idFiles) {
    const relativePath = path.relative(path.join(CONTENT_DIR, 'id'), file);
    const category = path.dirname(relativePath);
    const { frontmatter, content } = await readMarkdownFile(file);
    
    if (category !== currentCategory) {
      currentCategory = category;
      const categoryTitles = {
        'about': 'Tentang Kelola',
        'features': 'Fitur Utama',
        'report': 'Laporan Bisnis',
        'staff': 'Manajemen Karyawan',
        'stock': 'Manajemen Stok',
        'subscription': 'Langganan & Billing'
      };
      output += `### ${categoryTitles[category] || category}\n\n`;
    }
    
    output += `#### ${frontmatter.title || path.basename(file, '.md')}\n\n`;
    if (frontmatter.excerpt) {
      output += `> ${frontmatter.excerpt}\n\n`;
    }
    output += `${content}\n\n`;
    output += `---\n\n`;
  }

  // Process Thai content
  console.log('📚 Processing Thai content...');
  output += `## เอกสารภาษาไทย\n\n`;
  
  const thFiles = [];
  for await (const file of walkDir(path.join(CONTENT_DIR, 'th'))) {
    thFiles.push(file);
  }
  
  thFiles.sort((a, b) => a.localeCompare(b));
  
  currentCategory = '';
  for (const file of thFiles) {
    const relativePath = path.relative(path.join(CONTENT_DIR, 'th'), file);
    const category = path.dirname(relativePath);
    const { frontmatter, content } = await readMarkdownFile(file);
    
    if (category !== currentCategory) {
      currentCategory = category;
      const categoryTitles = {
        'about': 'เกี่ยวกับ Kelola',
        'features': 'คุณสมบัติหลัก',
        'report': 'รายงานธุรกิจ',
        'staff': 'การจัดการพนักงาน',
        'stock': 'การจัดการสต็อก',
        'subscription': 'การสมัครสมาชิก'
      };
      output += `### ${categoryTitles[category] || category}\n\n`;
    }
    
    output += `#### ${frontmatter.title || path.basename(file, '.md')}\n\n`;
    if (frontmatter.excerpt) {
      output += `> ${frontmatter.excerpt}\n\n`;
    }
    output += `${content}\n\n`;
    output += `---\n\n`;
  }

  // Add technical reference section
  output += `## Technical Reference\n\n`;
  output += `### Data Security\n\n`;
  output += `Kelola stores all data on encrypted cloud servers with automatic backups. No data is shared with banks or fintech partners.\n\n`;
  output += `### Device Support\n\n`;
  output += `| Category | Supported |\n`;
  output += `|----------|-----------|\n`;
  output += `| Mobile OS | Android 8+, iOS 13+ |\n`;
  output += `| Browsers | Chrome, Safari, Edge, Firefox (latest two versions) |\n`;
  output += `| Printers | Bluetooth thermal 48 mm & 80 mm |\n`;
  output += `| Barcode Scanners | USB HID scanners (web app) |\n\n`;

  // Add FAQ section
  output += `## Frequently Asked Questions\n\n`;
  output += `### General\n\n`;
  output += `**Q: Does Kelola handle decimal quantities?**\n`;
  output += `A: Not yet. Create products in their smallest sellable unit (e.g., grams instead of kg).\n\n`;
  output += `**Q: Do products have SKU, expiry date, and description?**\n`;
  output += `A: Yes, all three fields are available.\n\n`;
  output += `**Q: What is the Online Catalog?**\n`;
  output += `A: A shareable link that shows your live product list with price and stock but customers cannot make purchases.\n\n`;
  output += `**Q: Does Kelola support multiple currencies?**\n`;
  output += `A: Yes – you can choose any currency worldwide.\n\n`;
  output += `**Q: Which languages does the app support?**\n`;
  output += `A: Bahasa Indonesia, English, Thai, Vietnamese, Filipino, Arabic, and Malay.\n\n`;
  output += `**Q: What happens to my history data when my plan's History Window limit is reached?**\n`;
  output += `A: Your historical data is not deleted from the system. It becomes hidden based on your plan's history window. When you upgrade, you'll be able to access all your previously hidden historical data again.\n\n`;
  output += `**Q: Can I import products from Excel or add products in bulk?**\n`;
  output += `A: Yes, you can import products from Excel using the bulk import feature at https://web.kelola.co. This feature is available on all plans including Free.\n\n`;
  output += `**Q: Can I use Kelola on multiple devices?**\n`;
  output += `A: Yes, you can use Kelola on multiple devices by signing in with the same account or add staff to your business so that all the data is in sync.\n\n`;

  // Add contact section
  output += `## Contact & Support\n\n`;
  output += `- **In-App**: Menu → Contact Us\n`;
  output += `- **Help Center**: https://help.kelola.co\n`;
  output += `- **Website**: https://kelola.co\n`;
  output += `- **Email**: halo@kelola.co\n\n`;
  output += `Kelola's support replies in Bahasa Indonesia, English, Thai, or any other supported language based on your message.\n\n`;

  // Add footer
  output += `---\n\n`;
  output += `*This documentation is maintained by the Kelola Team*\n`;
  output += `*For the most up-to-date information, visit https://help.kelola.co*\n`;

  // Write output file
  await fs.writeFile(OUTPUT_FILE, output, 'utf-8');
  
  const stats = await fs.stat(OUTPUT_FILE);
  console.log(`✅ Generated llms-full.txt (${(stats.size / 1024).toFixed(2)} KB)`);
  console.log(`📄 Output: ${OUTPUT_FILE}`);
}

generateLlmsFull().catch(err => {
  console.error('❌ Error generating llms-full.txt:', err);
  process.exit(1);
});
