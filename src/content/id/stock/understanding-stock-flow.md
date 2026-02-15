---
title: "Memahami Alur Stok"
excerpt: "Pahami bagaimana stok bergerak di sistem Kelola melalui transaksi penjualan, pembelian, retur, dan penyesuaian."
readingTime: 5
lastUpdated: "2026-02-14"
category: "stock"
difficulty: "Menengah"
audience: ["Pemilik Bisnis", "Manajer Toko", "Admin"]
---

# Memahami Alur Stok

## Ikhtisar

Alur stok di Kelola mencakup semua pergerakan produk masuk dan keluar dari inventaris Anda. Memahami alur ini penting untuk mengelola stok dengan akurat.

## Jenis Pergerakan Stok

### Stok Masuk (Stock In)
Stok bertambah ketika:
- **Pembelian**: Menerima produk dari supplier
- **Retur Penjualan**: Pelanggan mengembalikan produk
- **Penyesuaian**: Koreksi stok positif

### Stok Keluar (Stock Out)
Stok berkurang ketika:
- **Penjualan**: Transaksi kasir
- **Retur Pembelian**: Mengembalikan produk ke supplier
- **Penyesuaian**: Koreksi stok negatif
- **Rusak/Hilang**: Produk tidak layak jual

### Transfer Stok
Memindahkan stok antar lokasi (jika menggunakan fitur multi-lokasi):
- Stok berkurang di lokasi pengirim
- Stok bertambah di lokasi penerima

## Alur Stok Standar

```
Pembelian → Stok Masuk → Inventaris → Penjualan → Stok Keluar
                ↑                              ↓
                └────── Retur Penjualan ←──────┘
```

## Melacak Riwayat Stok

### Catatan Stok
Setiap pergerakan stok tercatat dengan detail:
- Tanggal dan waktu
- Jenis transaksi
- Jumlah perubahan
- Stok sebelum dan sesudah
- Staff yang bertanggung jawab
- Catatan (jika ada)

### Akses Riwayat:
1. Buka menu **Stok**
2. Pilih produk
3. Tekan tab **Riwayat Stok**

## Penyesuaian Stok

### Kapan Perlu Penyesuaian:
- Selisih stok fisik vs sistem
- Produk rusak/expired
- Produk hilang
- Saldo awal stok

### Cara Penyesuaian:
1. Buka menu **Stok** → **Penyesuaian**
2. Pilih produk
3. Masukkan stok aktual
4. Sistem menghitung selisih otomatis
5. Tambahkan alasan penyesuaian
6. Konfirmasi

## Tips Mengelola Alur Stok

- Lakukan **stock opname** rutin (bulanan/mingguan)
- Periksa riwayat stok untuk melacak perbedaan
- Pantau produk dengan pergerakan stok tinggi
- Dokumentasikan setiap penyesuaian dengan alasan yang jelas

<!-- TODO: Screenshot riwayat stok -->
<!-- TODO: Screenshot form penyesuaian stok -->
