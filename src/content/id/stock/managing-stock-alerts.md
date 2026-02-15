---
title: "Mengelola Peringatan Stok dan Inventori Rendah"
excerpt: "Panduan lengkap untuk mengatur dan mengelola peringatan stok di Kelola. Pelajari cara mengkonfigurasi ambang batas stok rendah, menerima notifikasi, dan mencegah kehabisan stok."
readingTime: 5
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "intermediate"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Pada akhir panduan ini, Anda akan dapat:
- Mengatur peringatan stok rendah untuk produk
- Mengkonfigurasi preferensi notifikasi
- Merespons peringatan stok
- Mencegah kehabisan stok
- Mengelola proses pemesanan ulang

---

## Apa itu Peringatan Stok?

**Peringatan Stok** memberi tahu Anda ketika inventori produk turun di bawah ambang batas yang ditetapkan. Ini membantu Anda:
- 🔔 Tidak pernah kehabisan barang populer
- 📦 Memesan ulang inventori tepat waktu
- 💰 Menghindari kehilangan penjualan karena kehabisan stok
- 📊 Merencanakan pembelian dengan lebih baik

---

## Mengatur Peringatan Stok

### Metode 1: Per Produk

Atur peringatan saat menambahkan atau mengedit produk:

1. Buka **Produk**
2. Pilih produk
3. Ketuk **"Edit"**
4. Cari kolom **"Peringatan Stok Rendah"**
5. Masukkan jumlah minimum:
   - **Untuk barang laris**: Ambang batas lebih tinggi (misalnya, 50 unit)
   - **Untuk barang lambat**: Ambang batas lebih rendah (misalnya, 5 unit)
   - **Untuk barang kritis**: Tingkat stok pengaman (misalnya, 100 unit)
6. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Product edit with alert field -->

### Metode 2: Pengaturan Massal

Atur peringatan untuk beberapa produk:

1. Buka **Peringatan Stok** (dari menu utama)
2. Lihat semua produk
3. Ketuk baris produk apa pun
4. Masukkan ambang batas peringatan
5. Simpan
6. Lanjutkan ke produk berikutnya

<!-- TODO: Screenshot - Stock Alert list view -->

### Metode 3: Saat Stok Masuk

Pengaturan cepat saat menerima inventori:

1. Setelah Stok Masuk, halaman produk muncul
2. Ketuk **"Atur Peringatan"**
3. Masukkan ambang batas berdasarkan:
   - Seberapa cepat barang terjual
   - Waktu tunggu pemasok
   - Kapasitas penyimpanan
4. Simpan

---

## Memilih Ambang Batas Peringatan

### Faktor yang Perlu Dipertimbangkan

| Faktor | Dampak pada Ambang Batas |
|--------|--------------------------|
| **Kecepatan penjualan** | Barang laris membutuhkan peringatan lebih tinggi |
| **Waktu tunggu pemasok** | Pengiriman lebih lama = peringatan lebih tinggi |
| **Musiman** | Tingkatkan sebelum periode sibuk |
| **Biaya penyimpanan** | Ruang terbatas = ambang batas lebih rendah |
| **Pentingnya produk** | Barang kritis = stok pengaman lebih tinggi |

### Rumus yang Direkomendasikan

**Perhitungan dasar:**
```
Ambang Batas Peringatan = (Penjualan Harian × Hari Waktu Tunggu) + Stok Pengaman

Contoh:
- Menjual 10 unit/hari
- 7 hari waktu tunggu
- 20 unit stok pengaman
- Peringatan pada: (10 × 7) + 20 = 90 unit
```

**Pendekatan konservatif:**
```
Ambang Batas Peringatan = (Penjualan Harian × Waktu Tunggu × 1,5) + Stok Pengaman
```

### Contoh Berdasarkan Jenis Produk

| Jenis Produk | Penjualan Harian | Waktu Tunggu | Ambang Batas Peringatan |
|--------------|------------------|--------------|-------------------------|
| Terlaris | 50 | 5 hari | 300 unit |
| Barang reguler | 10 | 7 hari | 90 unit |
| Barang lambat | 2 | 14 hari | 40 unit |
| Musiman | Bervariasi | 10 hari | 200 unit (puncak) |

---

## Melihat Peringatan Stok

### Dasbor Peringatan Stok

Akses dari menu utama:

1. Ketuk **"Peringatan Stok"**
2. Lihat dua bagian:
   - **🔴 Di Bawah Ambang Batas** — Perlu perhatian
   - **✅ Di Atas Ambang Batas** — Semua baik

<!-- TODO: Screenshot - Stock Alert dashboard -->

### Fitur Daftar Peringatan

Setiap baris menunjukkan:
| Kolom | Informasi |
|-------|-----------|
| Produk | Nama dan gambar |
| Stok Saat Ini | Kuantitas aktual |
| Peringatan Pada | Ambang batas yang ditetapkan |
| Status | Seberapa mendesak |

**Opsi pengurutan:**
- Berdasarkan level stok (terendah pertama)
- Berdasarkan nama produk
- Berdasarkan kategori
- Berdasarkan status peringatan

### Peringatan Dasbor Beranda

Tampilan cepat dari Beranda:
- Lencana pada ikon menu
- Titik notifikasi
- Kartu ringkasan: "3 barang stok rendah"

Ketuk untuk langsung ke halaman Peringatan Stok.

---

## Pengaturan Notifikasi

### Notifikasi Dalam Aplikasi

Selalu aktif:
- Jumlah lencana
- Peringatan dasbor
- Banner dalam aplikasi

### Notifikasi Push

Konfigurasi di **Akun → Notifikasi**:

1. Buka pengaturan Akun
2. Ketuk **"Notifikasi"**
3. Aktifkan **"Peringatan Stok"**
4. Atur tingkat urgensi:
   - **Semua peringatan** — Setiap pelanggaran ambang batas
   - **Kritis saja** — Barang paling mendesak
   - **Ringkasan harian** — Ringkasan sekali sehari

<!-- TODO: Screenshot - Notification settings -->

### Notifikasi Email

Tersedia di paket premium:

- Email status stok harian
- Ringkasan stok rendah mingguan
- Peringatan langsung untuk barang kritis

Konfigurasi di dasbor web.

---

## Merespons Peringatan

### Saat Anda Mendapatkan Peringatan

**Tindakan segera:**

1. **Periksa stok saat ini**
   - Verifikasi hitungan fisik
   - Periksa pesanan yang tertunda
   - Konfirmasi peringatan akurat

2. **Evaluasi urgensi**
   - Seberapa cepat ini terjual?
   - Berapa lama untuk mengisi ulang?
   - Bisakah pelanggan menunggu?

3. **Ambil tindakan**
   - Pesan dari pemasok
   - Transfer dari lokasi lain
   - Perbarui ambang batas jika salah

### Membuat Purchase Order

Dari Peringatan Stok:

1. Temukan produk di daftar peringatan
2. Ketuk produk
3. Lihat stok saat ini dan ambang batas
4. Ketuk **"Pesan Stok"** (jika terintegrasi)
5. Atau catat jumlah yang dibutuhkan
6. Hubungi pemasok

### Menandai Peringatan Sebagai Sudah Ditinjau

Setelah mengambil tindakan:

1. Di daftar Peringatan Stok
2. Geser kiri pada produk
3. Ketuk **"Tandai Sudah Ditinjau"**
4. Peringatan dihapus sementara
5. Muncul kembali jika stok tetap rendah

---

## Praktik Terbaik

### Menetapkan Ambang Batas

✅ **Tinjau secara teratur**
- Tinjauan ambang batas bulanan
- Sesuaikan untuk musiman
- Perbarui untuk tren penjualan

✅ **Bedakan produk**
- Barang A (20% teratas): Stok pengaman lebih tinggi
- Barang B (30% tengah): Peringatan sedang
- Barang C (50% bawah): Prioritas lebih rendah

✅ **Pertimbangkan waktu tunggu**
- Pemasok lokal: Ambang batas lebih rendah
- Internasional: Ambang batas lebih tinggi
- Pemasok tidak terpercaya: Buffer ekstra

### Mengelola Peringatan

✅ **Kebiasaan tinjauan harian**
- Periksa peringatan setiap pagi
- Prioritaskan barang kritis
- Rencanakan pembelian sesuai

✅ **Jangan abaikan peringatan**
- Tindak lanjuti dalam 24 jam
- Eskalasi jika ada masalah pemasok
- Dokumentasikan alasan keterlambatan

✅ **Komunikasi dengan tim**
- Bagikan status peringatan
- Koordinasikan pembelian
- Latih staf untuk melaporkan stok rendah

### Mencegah Kehabisan Stok

✅ **Rumus stok pengaman**
```
Stok Pengaman = (Penjualan Harian Maks × Waktu Tunggu Maks) - (Penjualan Harian Rata-rata × Waktu Tunggu Rata-rata)
```

✅ **Titik pemesanan ulang**
```
Titik Pemesanan Ulang = (Penjualan Harian Rata-rata × Waktu Tunggu) + Stok Pengaman
```

---

## Fitur Lanjutan

### Pemesanan Ulang Otomatis (Jika Tersedia)

Beberapa integrasi mendukung:
- Pembuatan PO otomatis
- Notifikasi email pemasok
- Saran kuantitas pemesanan ulang

Hubungi dukungan untuk mengatur.

### Peringatan Multi-Lokasi

Untuk bisnis dengan beberapa lokasi:

- Atur peringatan per lokasi
- Transfer stok antar lokasi
- Dasbor peringatan terkonsolidasi

### Penyesuaian Musiman

Sebelum musim sibuk:

1. Tingkatkan ambang batas peringatan
2. Tingkatkan stok pengaman
3. Pesan inventori di muka
4. Pantau lebih sering

Setelah musim:

1. Kurangi ambang batas
2. Hapus kelebihan stok
3. Tinjau apa yang terjual

---

## Pemecahan Masalah

### "Tidak menerima peringatan"

**Periksa:**
- Notifikasi diaktifkan di pengaturan
- Ambang batas peringatan benar-benar ditetapkan
- Stok produk di bawah ambang batas
- Notifikasi aplikasi diizinkan (pengaturan telepon)

**Coba:**
- Matikan dan hidupkan notifikasi
- Restart aplikasi
- Periksa pengaturan notifikasi telepon

### "Terlalu banyak peringatan"

**Solusi:**
- Naikkan ambang batas untuk barang non-kritis
- Gunakan ringkasan harian alih-alih segera
- Fokus peringatan pada barang A saja
- Nonaktifkan peringatan untuk barang lambat

### "Ambang batas peringatan terus berubah"

**Kemungkinan penyebab:**
- Beberapa staf mengedit
- Masalah sinkronisasi
- Bug aplikasi

**Perbaikan:**
- Verifikasi hanya staf yang berwenang mengubah ambang batas
- Periksa terakhir diperbarui oleh
- Hubungi dukungan jika persisten

### "Level stok yang ditampilkan salah"

**Periksa:**
- Transaksi yang belum tersinkron
- Operasi stok yang tertunda
- Masalah sinkronisasi multi-perangkat

**Perbaikan:**
- Tarik ke bawah untuk menyegarkan
- Periksa koneksi internet
- Paksa sinkronisasi di pengaturan

---

## FAQ

**T: Berapa banyak produk yang dapat memiliki peringatan?**
J: Tidak terbatas! Atur peringatan untuk sebanyak produk yang Anda butuhkan.

**T: Bisakah saya mengatur peringatan berbeda untuk lokasi berbeda?**
J: Ya, setiap lokasi bisnis memiliki pengaturan peringatan independen.

**T: Apakah peringatan bekerja offline?**
J: Peringatan dihitung berdasarkan data terakhir yang tersinkron. Sinkronkan saat online untuk akurasi.

**T: Bisakah staf juga menerima peringatan?**
J: Ya, jika mereka memiliki izin yang sesuai dan notifikasi diaktifkan.

**T: Apa bedanya peringatan dan titik pemesanan ulang?**
J: Peringatan memberi tahu Anda. Titik pemesanan ulang adalah kapan Anda harus memesan (biasanya angka yang sama).

**T: Bisakah saya mengekspor data peringatan?**
J: Ya, gunakan Laporan Stok dan filter berdasarkan barang stok rendah.

**T: Apakah peringatan mempertimbangkan stok masuk yang tertunda?**
J: Saat ini peringatan hanya menampilkan stok saat ini. Periksa pesanan yang tertunda secara terpisah.

---

## Artikel Terkait

- [Mencatat Stok Masuk →](./record-stock-in)
- [Laporan Stok →](../report/stock-report)
- [Mentransfer Stok →](./stock-transfer)
- [Memahami Alur Stok →](./record-stock-out)
