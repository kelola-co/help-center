---
title: "Menggunakan Barcode dan SKU"
excerpt: "Panduan lengkap tentang penggunaan barcode dan SKU untuk identifikasi dan pelacakan produk yang efisien."
readingTime: 5
lastUpdated: "2026-02-14"
category: "products"
difficulty: "Menengah"
audience: ["Pemilik Bisnis", "Admin", "Kasir"]
---

# Menggunakan Barcode dan SKU

## Ikhtisar

Barcode dan SKU (Stock Keeping Unit) adalah sistem identifikasi yang membantu Anda melacak produk dengan cepat dan akurat. Kelola mendukung berbagai format barcode dan memungkinkan SKU kustom.

## Perbedaan Barcode dan SKU

| Fitur | Barcode | SKU |
|-------|---------|-----|
| Format | Angka (biasanya 8-13 digit) | Alphanumeric (bebas) |
| Standar | EAN-8, EAN-13, UPC | Kustom |
| Pencetakan | Memerlukan printer barcode | Dapat dicetak biasa |
| Pemindaian | Menggunakan scanner | Manual/diketik |

## Menambahkan Barcode

### Saat Membuat Produk:

1. Pada form tambah produk, isi field **Barcode**
2. Masukkan nomor barcode (biasanya tertera di kemasan produk)
3. Simpan produk

### Scan Barcode:

1. Ketuk field barcode
2. Arahkan kamera ke barcode produk
3. Sistem akan otomatis mengisi nomor barcode

### Untuk Produk Tanpa Barcode:

Anda dapat membuat barcode sendiri menggunakan generator barcode online, lalu cetak dan tempel ke produk.

## Menambahkan SKU

SKU adalah kode internal Anda untuk mengidentifikasi produk. Format bebas sesuai kebutuhan bisnis.

### Contoh Format SKU:
- `F&B-BRG-001` (Food & Beverage - Burger - 001)
- `ELC-HP-SMG-001` (Electronics - HP - Samsung - 001)
- `MIN-COL-330` (Minuman - Cola - 330ml)

### Tips Membuat SKU:
- Gunakan singkatan kategori
- Sertakan merek/varian
- Akhiri dengan nomor urut
- Konsisten dalam format

## Menggunakan Barcode di Kasir

1. Buka menu **Kasir**
2. Arahkan scanner ke barcode produk
3. Produk akan otomatis ditambahkan ke keranjang

Atau:

1. Tekan ikon **Scan** di kasir
2. Pindai barcode menggunakan kamera
3. Produk akan ditambahkan otomatis

## Manajemen Barcode

### Multiple Barcode per Produk
Kelola mendukung satu barcode per produk. Untuk varian (ukuran/warna), buat produk terpisah dengan barcode berbeda.

### Mencari dengan Barcode
Gunakan fitur pencarian di halaman produk dengan memasukkan nomor barcode.

<!-- TODO: Screenshot field barcode di form produk -->
<!-- TODO: Screenshot scan barcode di kasir -->
