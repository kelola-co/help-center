---
title: "Cara Menggunakan Barcode Scanner"
excerpt: "Input barang dengan cepat menggunakan barcode scanner USB dengan Kelola Web"
readingTime: 2
lastUpdated: "2026-02-15"
category: "features"
---

## Ikhtisar

Gunakan barcode scanner USB dengan Kelola Web untuk menambahkan produk dengan cepat selama operasi stok. Scanner berfungsi sebagai perangkat input keyboard - cukup pindai dan barcode muncul di kolom pencarian.

## Pengaturan

### 1. Peralatan Scanner
- Beli barcode scanner USB dari marketplace mana saja
- Pastikan memiliki koneksi USB untuk penggunaan laptop/PC
- Sebagian besar scanner berfungsi sebagai perangkat "plug and play"

### 2. Koneksi Perangkat
1. Hubungkan scanner ke laptop atau PC Anda via USB
2. Tunggu instalasi driver otomatis
3. Scanner bertindak sebagai input keyboard (mode HID)
4. Tidak perlu software tambahan

## Penggunaan

### 1. Akses Kelola Web
Buka Kelola Web melalui [web.kelola.co](https://web.kelola.co)

### 2. Navigasi ke Halaman Stok
Buka halaman manajemen stok yang Anda inginkan:
- Stok Masuk
- Stok Keluar
- Audit Stok

### 3. Mulai Scanning
1. Klik tombol **Scan Barcode** atau letakkan kursor di kolom pencarian
2. Arahkan scanner ke barcode barang
3. Tekan trigger scanner
4. Nomor barcode muncul di kolom
5. Produk terisi otomatis jika ditemukan di database

## Konfigurasi Scanner

**Sebagian besar scanner berfungsi langsung.** Jika Anda mengalami masalah:

1. Pastikan scanner dalam mode "HID keyboard"
2. Periksa pengaturan suffix (harus mengirim Enter/Return setelah pindai)
3. Verifikasi tipe barcode diaktifkan (EAN, UPC, Code 128)
4. Tes di text editor terlebih dahulu untuk memastikan mengetik angka

## Tips

- Scanner berfungsi seperti keyboard - "mengetik" nomor barcode
- Pastikan kursor berada di kolom yang benar sebelum memindai
- Pencahayaan yang baik membantu scanner membaca barcode lebih baik
- Tahan scanner stabil saat memindai

## Pemecahan Masalah

**Scanner tidak berfungsi:**
- Periksa koneksi USB
- Coba port USB berbeda
- Restart browser
- Tes scanner di Notepad/TextEdit terlebih dahulu

**Barcode tidak ditemukan:**
- Produk mungkin belum ada di database
- Barcode mungkin perlu ditambahkan ke produk terlebih dahulu
- Periksa kesalahan ketik atau digit yang hilang
