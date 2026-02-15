---
title: "Mencatat Penjualan dan Transaksi"
excerpt: "Panduan langkah demi langkah untuk mencatat penjualan di Kelola. Pelajari cara memproses pesanan pelanggan, menangani berbagai metode pembayaran, dan mengelola alur kerja penjualan."
readingTime: 6
lastUpdated: "2026-02-15"
category: "sales"
difficulty: "beginner"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan dapat:
- Mencatat transaksi penjualan dengan cepat
- Menangani berbagai metode pembayaran
- Menambahkan pelanggan ke transaksi
- Memproses pembayaran parsial
- Melihat dan mengelola riwayat transaksi

---

## Mencatat Penjualan (Stock Out)

### Metode 1: Penjualan Cepat (Tercepat)

Terbaik untuk: Kecepatan, satu atau beberapa item, produk yang sudah dikenal

1. **Ketuk tombol "+"** di navigasi bawah
2. Pilih **"Stock Out"**
3. **Temukan produk** menggunakan:
   - Bilah pencarian (ketik nama produk)
   - Filter kategori
   - Gulir katalog
4. **Ketuk setiap produk** untuk menambahkan ke penjualan
5. **Masukkan jumlah** untuk setiap item
6. **Atur harga** (default ke harga produk, dapat diedit)
7. (Opsional) **Pilih pelanggan** — ketuk "Tambah Pelanggan"
8. (Opsional) **Tambah catatan** — metode pembayaran, instruksi khusus
9. **Periksa total**
10. Ketuk **"Submit"**

<!-- TODO: Screenshot - Stock Out screen with products selected -->

✅ **Pemeriksaan Sukses:** Transaksi tersimpan! Stok berkurang secara otomatis.

---

### Metode 2: Dengan Pemindai Barcode

Terbaik untuk: Lingkungan retail, banyak item, checkout cepat

**Aplikasi Mobile:**
1. Di Stock Out, ketuk ikon **"Scan"**
2. Arahkan kamera ke barcode
3. Produk otomatis ditambahkan ke keranjang
4. Sesuaikan jumlah jika diperlukan
5. Lanjutkan memindai atau ketuk **"Selesai"**

**Web dengan Pemindai:**
1. Klik tombol **"Scan Barcode"**
2. Pindai dengan pemindai barcode USB
3. Produk otomatis ditambahkan
4. Pindai item berikutnya atau selesai

<!-- TODO: Screenshot - Barcode scanning interface -->

> **💡 Tips Pro:** Tahan tombol pemindai dan pindai beberapa item secara cepat untuk checkout massal.

---

## Menambahkan Informasi Pelanggan

Lacak siapa yang melakukan pembelian untuk manajemen pelanggan yang lebih baik.

### Memilih Pelanggan yang Sudah Ada

1. Di layar Stock Out, ketuk kolom **"Pelanggan"**
2. Cari berdasarkan nama atau nomor telepon
3. Ketuk nama pelanggan untuk memilih
4. Info pelanggan terlampir pada transaksi

### Menambahkan Pelanggan Baru

1. Ketuk kolom **"Pelanggan"**
2. Ketuk **"+ Tambah Pelanggan Baru"**
3. Masukkan:
   - Nama (wajib)
   - Nomor telepon (opsional)
   - Email (opsional)
   - Alamat (opsional)
4. Ketuk **"Simpan"**
5. Pelanggan otomatis terpilih untuk transaksi ini

<!-- TODO: Screenshot - Customer selection modal -->

> **Mengapa Menambahkan Pelanggan?**
> - Lacak riwayat pembelian per pelanggan
> - Identifikasi pelanggan terbaik
> - Kelola pelacakan kredit/hutang
> - Kirim struk via WhatsApp/email

---

## Penanganan Pembayaran

### Opsi Status Pembayaran

| Status | Gunakan Saat... | Hasil |
|--------|-----------------|-------|
| **Paid** | Pelanggan membayar penuh | Tidak ada hutang tercatat |
| **Partial** | Pelanggan membayar sebagian sekarang | Saldo dilacak sebagai hutang |
| **Unpaid** | Akan membayar nanti | Jumlah penuh dilacak sebagai hutang |

### Mengatur Status Pembayaran

1. Sebelum submit, ketuk **"Status Pembayaran"**
2. Pilih status:
   - **Paid**: Masukkan jumlah diterima (default: jumlah penuh)
   - **Partial**: Masukkan jumlah diterima sekarang
   - **Unpaid**: Tidak ada pembayaran diterima
3. Ketuk **"Konfirmasi"**
4. Selesaikan transaksi

<!-- TODO: Screenshot - Payment status selection -->

### Alur Kerja Pembayaran Parsial

Saat pelanggan membayar sebagian sekarang, sisanya nanti:

1. Atur status ke **"Partial"**
2. Masukkan **jumlah diterima** (misalnya, 50000 dari total 100000)
3. Submit transaksi
4. Sisa saldo dilacak di:
   - Profil pelanggan
   - Laporan piutang
   - Riwayat transaksi

**Mencatat Pembayaran Akhir:**
1. Buka **History**
2. Temukan transaksi asli
3. Ketuk **"Tambah Pembayaran"**
4. Masukkan jumlah pembayaran
5. Simpan

---

## Mengelola Detail Transaksi

### Menambahkan Catatan

Tambahkan konteks ke transaksi:

- **Metode pembayaran**: "Cash", "Credit Card", "Transfer"
- **Nomor referensi**: Nomor Invoice, PO
- **Instruksi khusus**: "Antar besok", "Bungkus kado"
- **Referensi staf**: Siapa yang menangani penjualan

Untuk menambah catatan:
1. Gulir ke kolom **"Catatan"** di Stock Out
2. Ketik catatan Anda (maks 200 karakter)
3. Termasuk dalam catatan transaksi

### Mengubah Tanggal Transaksi

Untuk mencatat penjualan masa lalu:

1. Ketuk kolom **"Tanggal"** (default ke hari ini)
2. Pilih tanggal transaksi aktual
3. Pilih waktu jika diperlukan
4. Konfirmasi

> **Catatan:** Mengedit tanggal mungkin memerlukan izin owner/admin.

---

## Review Ringkasan Transaksi

Sebelum submit, verifikasi:

<!-- TODO: Screenshot - Transaction summary with annotations -->

| Elemen | Yang Perlu Diperiksa |
|--------|---------------------|
| **Daftar Produk** | Item dan jumlah yang benar |
| **Harga** | Harga jual akurat |
| **Subtotal** | Jumlah semua item |
| **Pelanggan** | Pelanggan yang benar terpilih |
| **Status Pembayaran** | Paid/Partial/Unpaid benar |
| **Catatan** | Info penting tercatat |
| **Tanggal** | Tanggal transaksi benar |

---

## Setelah Penjualan

### Tindakan Segera

**Cetak Struk:**
1. Setelah submit, ketuk **"Cetak Struk"**
2. Hubungkan ke printer Bluetooth (hanya pertama kali)
3. Struk tercetak otomatis

**Bagikan Invoice:**
1. Ketuk **"Bagikan Invoice"**
2. Pilih format: PDF, WhatsApp, Email
3. Kirim ke pelanggan

<!-- TODO: Screenshot - Post-transaction options -->

### Melihat di History

Semua penjualan muncul di **History**:
- Ketuk **"History"** di navigasi bawah
- Filter berdasarkan tipe **"Stock Out"**
- Cari berdasarkan pelanggan, produk, atau tanggal
- Ketuk transaksi apa pun untuk detail

---

## Menangani Skenario Khusus

### Return dan Refund

Saat pelanggan mengembalikan item:

1. Buka **History**
2. Temukan transaksi penjualan asli
3. Ketuk **"Return"** atau **"Refund"**
4. Pilih item yang dikembalikan
5. Masukkan jumlah return
6. Pilih metode refund:
   - Cash refund
   - Store credit
   - Exchange
7. Submit

> **Hasil:** Stok bertambah secara otomatis. Catatan keuangan disesuaikan.

### Diskon dan Perubahan Harga

**Penurunan Harga Sementara:**
1. Di Stock Out, ketuk kolom harga
2. Masukkan harga jual baru
3. Harga berlaku untuk transaksi ini saja

**Catatan:** Untuk perubahan harga permanen, edit produk saja.

### Split Pembayaran

Saat pelanggan membayar dengan beberapa metode:

1. Atur status pembayaran awal
2. Di catatan, tulis: "Cash: 50000, Card: 50000"
3. Catat jumlah aktual
4. Untuk pelacakan detail, gunakan pembayaran parsial

---

## Laporan Penjualan

### Metrik Real-time

Lihat data penjualan di **Reports**:
- **Penjualan Hari Ini**: Dari Home dashboard
- **Penjualan per Periode**: Harian, mingguan, bulanan
- **Penjualan per Produk**: Best sellers
- **Penjualan per Pelanggan**: Pelanggan terbaik

### Mengekspor Data Penjualan

1. Buka **History**
2. Terapkan filter (rentang tanggal, tipe)
3. Ketuk **"Export"**
4. Pilih format: PDF, Excel, CSV
5. Bagikan atau simpan file

---

## Praktik Terbaik

### Untuk Akurasi
- ✅ Selalu periksa ulang jumlah sebelum submit
- ✅ Verifikasi pemilihan pelanggan untuk pelacakan kredit
- ✅ Tambahkan catatan untuk transaksi yang tidak biasa
- ✅ Hitung cash sebelum menandai "Paid"

### Untuk Kecepatan
- ✅ Pelajari keyboard shortcuts (web)
- ✅ Gunakan pemindai barcode untuk retail
- ✅ Simpan pelanggan sering sebagai favorit
- ✅ Gunakan quick-add untuk item umum

### Untuk Pelayanan Pelanggan
- ✅ Lampirkan pelanggan ke setiap transaksi jika memungkinkan
- ✅ Kirim struk digital via WhatsApp
- ✅ Catat preferensi di catatan pelanggan
- ✅ Tindak lanjuti transaksi yang belum dibayar dengan cepat

---

## Troubleshooting

### "Produk tidak ditemukan"
- Periksa ejaan di pencarian
- Coba pindai barcode sebagai gantinya
- Verifikasi produk ada di katalog

### "Stok tidak mencukupi"
- Periksa stok saat ini di Produk
- Mungkin perlu mencatat stock in terlebih dahulu
- Verifikasi tidak ada transaksi tertunda

### "Tidak dapat mengubah status pembayaran"
- Pengeditan dibatasi setelah waktu tertentu
- Hubungi owner/admin untuk penyesuaian
- Buat transaksi penyesuaian sebagai gantinya

### "Struk tidak tercetak"
- Periksa koneksi Bluetooth
- Verifikasi printer memiliki kertas
- Coba hubungkan ulang printer di Account → Settings

---

## FAQ

**Q: Bisakah saya mengedit penjualan setelah submit?**
A: Ya, dengan izin yang sesuai. Buka History, temukan transaksi, dan ketuk Edit. Beberapa bidang mungkin dibatasi.

**Q: Bagaimana cara menangani tip/gratuity?**
A: Tambahkan sebagai produk "Tip" terpisah, atau sertakan di catatan. Untuk pelacakan detail, buat kategori pendapatan tips.

**Q: Bagaimana jika saya salah memasukkan jumlah?**
A: Edit transaksi di History, atau buat transaksi return/penyesuaian untuk memperbaiki stok.

**Q: Bisakah saya menduplikasi penjualan sebelumnya?**
A: Temukan transaksi di History, ketuk tiga titik, dan pilih "Duplicate". Modifikasi sesuai kebutuhan.

**Q: Bagaimana cara melacak penjualan per staf?**
A: Setiap transaksi mencatat staf yang membuatnya. Lihat Staff Reports untuk rincian per anggota tim.


