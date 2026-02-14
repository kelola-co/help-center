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

Di akhir panduan ini, Anda akan mampu:
- Mencatat transaksi penjualan dengan cepat
- Menangani berbagai metode pembayaran
- Menambahkan pelanggan ke transaksi
- Memproses pembayaran parsial
- Melihat dan mengelola riwayat transaksi

---

## Mencatat Penjualan (Stok Keluar)

### Metode 1: Penjualan Cepat (Tercepat)

Terbaik untuk: Kecepatan, satu atau beberapa item, produk yang dikenal

1. **Ketuk tombol "+"** di navigasi bawah
2. Pilih **"Stok Keluar"**
3. **Cari produk** menggunakan:
   - Bilah pencarian (ketik nama produk)
   - Filter kategori
   - Gulir katalog
4. **Ketuk setiap produk** untuk menambahkan ke penjualan
5. **Masukkan jumlah** untuk setiap item
6. **Tetapkan harga** (default ke harga produk, dapat diedit)
7. (Opsional) **Pilih pelanggan** — ketuk "Tambah Pelanggan"
8. (Opsional) **Tambahkan catatan** — metode pembayaran, instruksi khusus
9. **Tinjau total**
10. Ketuk **"Kirim"**

<!-- TODO: Screenshot - Stock Out screen with products selected -->

✅ **Pemeriksaan Berhasil:** Transaksi tersimpan! Stok berkurang secara otomatis.

---

### Metode 2: Dengan Pemindai Barcode

Terbaik untuk: Lingkungan retail, banyak item, checkout cepat

**Aplikasi Mobile:**
1. Di Stok Keluar, ketuk ikon **"Pindai"**
2. Arahkan kamera ke barcode
3. Produk otomatis ditambahkan ke keranjang
4. Sesuaikan jumlah jika perlu
5. Lanjutkan memindai atau ketuk **"Selesai"**

**Web dengan Pemindai:**
1. Klik tombol **"Pindai Barcode"**
2. Pindai dengan pemindai barcode USB
3. Produk otomatis ditambahkan
4. Pindai item berikutnya atau selesai

<!-- TODO: Screenshot - Barcode scanning interface -->

> **💡 Tip Pro:** Tahan tombol pemindai dan pindai beberapa item secara cepat untuk checkout massal.

---

## Menambahkan Informasi Pelanggan

Lacak siapa yang melakukan pembelian untuk manajemen pelanggan yang lebih baik.

### Memilih Pelanggan yang Ada

1. Di layar Stok Keluar, ketuk field **"Pelanggan"**
2. Cari berdasarkan nama atau nomor telepon
3. Ketuk nama pelanggan untuk memilih
4. Info pelanggan dilampirkan ke transaksi

### Menambahkan Pelanggan Baru

1. Ketuk field **"Pelanggan"**
2. Ketuk **"+ Tambah Pelanggan Baru"**
3. Masukkan:
   - Nama (wajib)
   - Nomor telepon (opsional)
   - Email (opsional)
   - Alamat (opsional)
4. Ketuk **"Simpan"**
5. Pelanggan otomatis dipilih untuk transaksi ini

<!-- TODO: Screenshot - Customer selection modal -->

> **Mengapa Menambahkan Pelanggan?**
> - Lacak riwayat pembelian per pelanggan
> - Identifikasi pelanggan teratas
> - Kelola pelacakan kredit/hutang
> - Kirim struk via WhatsApp/email

---

## Penanganan Pembayaran

### Opsi Status Pembayaran

| Status | Gunakan Saat... | Hasil |
|--------|-----------------|-------|
| **Lunas** | Pelanggan membayar penuh | Tidak ada hutang tercatat |
| **Parsial** | Pelanggan membayar sebagian sekarang | Saldo dilacak sebagai hutang |
| **Belum Dibayar** | Akan dibayar nanti | Jumlah penuh dilacak sebagai hutang |

### Mengatur Status Pembayaran

1. Sebelum mengirim, ketuk **"Status Pembayaran"**
2. Pilih status:
   - **Lunas**: Masukkan jumlah diterima (default: jumlah penuh)
   - **Parsial**: Masukkan jumlah diterima sekarang
   - **Belum Dibayar**: Tidak ada pembayaran diterima
3. Ketuk **"Konfirmasi"**
4. Selesaikan transaksi

<!-- TODO: Screenshot - Payment status selection -->

### Alur Kerja Pembayaran Parsial

Saat pelanggan membayar sebagian sekarang, sisanya nanti:

1. Atur status ke **"Parsial"**
2. Masukkan **jumlah diterima** (contoh, 50000 dari total 100000)
3. Kirim transaksi
4. Sisa saldo dilacak di:
   - Profil pelanggan
   - Laporan piutang
   - Riwayat transaksi

**Mencatat Pembayaran Akhir:**
1. Buka **Riwayat**
2. Temukan transaksi asli
3. Ketuk **"Tambah Pembayaran"**
4. Masukkan jumlah pembayaran
5. Simpan

---

## Mengelola Detail Transaksi

### Menambahkan Catatan

Tambahkan konteks ke transaksi:

- **Metode pembayaran**: "Tunai", "Kartu Kredit", "Transfer"
- **Nomor referensi**: Nomor faktur, nomor PO
- **Instruksi khusus**: "Kirim besok", "Bungkus kado"
- **Referensi staf**: Siapa yang menangani penjualan

Untuk menambahkan catatan:
1. Gulir ke field **Catatan** di Stok Keluar
2. Ketik catatan Anda (maks 200 karakter)
3. Termasuk dalam catatan transaksi

### Mengubah Tanggal Transaksi

Untuk mencatat penjualan masa lalu:

1. Ketuk field **"Tanggal"** (default ke hari ini)
2. Pilih tanggal transaksi aktual
3. Pilih waktu jika perlu
4. Konfirmasi

> **Catatan:** Mengedit tanggal mungkin memerlukan izin pemilik/admin.

---

## Tinjauan Ringkasan Transaksi

Sebelum mengirim, verifikasi:

<!-- TODO: Screenshot - Transaction summary with annotations -->

| Elemen | Apa yang Diperiksa |
|--------|-------------------|
| **Daftar Produk** | Item dan jumlah yang benar |
| **Harga** | Harga jual akurat |
| **Subtotal** | Jumlah semua item |
| **Pelanggan** | Pelanggan yang benar dipilih |
| **Status Pembayaran** | Lunas/Parsial/Belum Dibayar benar |
| **Catatan** | Info penting tercatat |
| **Tanggal** | Tanggal transaksi benar |

---

## Setelah Penjualan

### Tindakan Segera

**Cetak Struk:**
1. Setelah mengirim, ketuk **"Cetak Struk"**
2. Hubungkan ke printer Bluetooth (hanya pertama kali)
3. Struk cetak otomatis

**Bagikan Faktur:**
1. Ketuk **"Bagikan Faktur"**
2. Pilih format: PDF, WhatsApp, Email
3. Kirim ke pelanggan

<!-- TODO: Screenshot - Post-transaction options -->

### Melihat di Riwayat

Semua penjualan muncul di **Riwayat**:
- Ketuk **"Riwayat"** di nav bawah
- Filter berdasarkan jenis **"Stok Keluar"**
- Cari berdasarkan pelanggan, produk, atau tanggal
- Ketuk transaksi apa pun untuk detail

---

## Menangani Skenario Khusus

### Retur dan Pengembalian Dana

Saat pelanggan mengembalikan item:

1. Buka **Riwayat**
2. Temukan transaksi penjualan asli
3. Ketuk **"Retur"** atau **"Pengembalian Dana"**
4. Pilih item yang dikembalikan
5. Masukkan jumlah retur
6. Pilih metode pengembalian dana:
   - Pengembalian dana tunai
   - Kredit toko
   - Penukaran
7. Kirim

> **Hasil:** Stok meningkat secara otomatis. Catatan keuangan disesuaikan.

### Diskon dan Perubahan Harga

**Pengurangan Harga Sementara:**
1. Di Stok Keluar, ketuk field harga
2. Masukkan harga jual baru
3. Harga berlaku untuk transaksi ini saja

**Catatan:** Untuk perubahan harga permanen, edit produk sebagai gantinya.

### Pembayaran Terpisah

Saat pelanggan membayar dengan beberapa metode:

1. Atur status pembayaran awal
2. Di catatan, tulis: "Tunai: 50000, Kartu: 50000"
3. Catat jumlah aktual
4. Untuk pelacakan detail, gunakan pembayaran parsial

---

## Pelaporan Penjualan

### Metrik Real-time

Lihat data penjualan di **Laporan**:
- **Penjualan Hari Ini**: Dari dashboard Beranda
- **Penjualan per Periode**: Harian, mingguan, bulanan
- **Penjualan per Produk**: Yang terlaris
- **Penjualan per Pelanggan**: Pelanggan teratas

### Mengekspor Data Penjualan

1. Buka **Riwayat**
2. Terapkan filter (rentang tanggal, jenis)
3. Ketuk **"Ekspor"**
4. Pilih format: PDF, Excel, CSV
5. Bagikan atau simpan file

---

## Praktik Terbaik

### Untuk Akurasi
- ✅ Selalu periksa ulang jumlah sebelum mengirim
- ✅ Verifikasi pemilihan pelanggan untuk pelacakan kredit
- ✅ Tambahkan catatan untuk transaksi yang tidak biasa
- ✅ Hitung uang tunai sebelum menandai "Lunas"

### Untuk Kecepatan
- ✅ Pelajari pintasan keyboard (web)
- ✅ Gunakan pemindai barcode untuk retail
- ✅ Simpan pelanggan sering sebagai favorit
- ✅ Gunakan tambah-cepat untuk item umum

### Untuk Pelayanan Pelanggan
- ✅ Lampirkan pelanggan ke setiap transaksi jika memungkinkan
- ✅ Kirim struk digital via WhatsApp
- ✅ Catat preferensi di catatan pelanggan
- ✅ Tindak lanjuti transaksi yang belum dibayar segera

---

## Pemecahan Masalah

### "Produk tidak ditemukan"
- Periksa ejaan di pencarian
- Coba pindai barcode sebagai gantinya
- Verifikasi produk ada di katalog

### "Stok tidak mencukupi"
- Periksa stok saat ini di Produk
- Mungkin perlu mencatat stok masuk terlebih dahulu
- Verifikasi tidak ada transaksi yang tertunda

### "Tidak dapat mengubah status pembayaran"
- Pengeditan dibatasi setelah waktu tertentu
- Hubungi pemilik/admin untuk penyesuaian
- Buat transaksi penyesuaian sebagai gantinya

### "Struk tidak mencetak"
- Periksa koneksi Bluetooth
- Verifikasi printer memiliki kertas
- Coba hubungkan ulang printer di Akun → Pengaturan

---

## FAQ

**T: Bisakah saya mengedit penjualan setelah dikirim?**
J: Ya, dengan izin yang tepat. Buka Riwayat, temukan transaksi, dan ketuk Edit. Beberapa field mungkin dibatasi.

**T: Bagaimana cara menangani tip/uang kesepakatan?**
J: Tambahkan sebagai produk "Tip" terpisah, atau sertakan di catatan. Untuk pelacakan detail, buat kategori pendapatan tips.

**T: Bagaimana jika saya membuat kesalahan dalam jumlah?**
J: Edit transaksi di Riwayat, atau buat transaksi retur/penyesuaian untuk memperbaiki stok.

**T: Bisakah saya menduplikasi penjualan sebelumnya?**
J: Temukan transaksi di Riwayat, ketuk tiga titik, dan pilih "Duplikat". Ubah sesuai kebutuhan.

**T: Bagaimana cara melacak penjualan per anggota staf?**
J: Setiap transaksi mencatat staf yang membuatnya. Lihat Laporan Staf untuk rincian per anggota tim.

---

## Artikel Terkait

- [Mengelola Riwayat Transaksi →](./managing-transactions)
- [Menangani Retur dan Pengembalian Dana →](./handling-returns)
- [Manajemen Pelanggan →](../customers/adding-customers)
- [Pengaturan Metode Pembayaran →](../payment-methods/adding-payment-methods)
- [Mencetak Struk →](./printing-sharing-invoices)
- [Memahami Laporan →](../reports/understanding-reports)
