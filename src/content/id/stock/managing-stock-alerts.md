---
title: "Mengelola Peringatan Stok dan Stok Rendah"
excerpt: "Panduan lengkap mengatur dan mengelola peringatan stok di Kelola. Pelajari cara mengatur ambang batas stok rendah, menerima notifikasi, dan mencegah kehabisan stok."
readingTime: 5
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "intermediate"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan dapat:
- Mengatur peringatan stok rendah untuk produk
- Mengkonfigurasi preferensi notifikasi
- Merespons peringatan stok
- Mencegah kehabisan stok
- Mengelola proses pemesanan ulang

---

## Apa Itu Peringatan Stok?

**Peringatan Stok** memberi tahu Anda ketika inventaris produk turun di bawah ambang batas yang ditetapkan. Ini membantu Anda:
- 🔔 Tidak pernah kehabisan item populer
- 📦 Memesan inventaris tepat waktu
- 💰 Menghindari kehilangan penjualan karena kehabisan stok
- 📊 Merencanakan pembelian dengan lebih baik

---

## Mengatur Peringatan Stok

### Metode 1: Per Produk

Atur peringatan saat menambah atau mengedit produk:

1. Pergi ke **Produk**
2. Pilih produk
3. Ketuk **"Edit"**
4. Temukan bidang **"Peringatan Stok Rendah"**
5. Masukkan jumlah minimum:
   - **Untuk item cepat terjual**: Ambang batas lebih tinggi (misal, 50 unit)
   - **Untuk item lambat terjual**: Ambang batas lebih rendah (misal, 5 unit)
   - **Untuk item kritis**: Tingkat stok pengaman (misal, 100 unit)
6. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Product edit with alert field -->

### Metode 2: Pengaturan Massal

Atur peringatan untuk beberapa produk:

1. Pergi ke **Peringatan Stok** (dari menu utama)
2. Lihat semua produk
3. Ketuk baris produk mana pun
4. Masukkan ambang peringatan
5. Simpan
6. Lanjutkan ke produk berikutnya

<!-- TODO: Screenshot - Stock Alert list view -->

### Metode 3: Saat Stock In

Pengaturan cepat saat menerima inventaris:

1. Setelah Stock In, halaman produk ditampilkan
2. Ketuk **"Atur Peringatan"**
3. Masukkan ambang berdasarkan:
   - Seberapa cepat item terjual
   - Waktu tunggu pemasok
   - Kapasitas penyimpanan
4. Simpan

---

## Memilih Ambang Peringatan

### Faktor yang Perlu Dipertimbangkan

| Faktor | Dampak pada Ambang |
|--------|---------------------|
| **Kecepatan penjualan** | Penjual cepat membutuhkan peringatan lebih tinggi |
| **Waktu tunggu pemasok** | Pengiriman lebih lama = peringatan lebih tinggi |
| **Musim** | Tingkatkan sebelum periode sibuk |
| **Biaya penyimpanan** | Ruang terbatas = ambang lebih rendah |
| **Pentingnya produk** | Item kritis = stok pengaman lebih tinggi |

### Rumus yang Direkomendasikan

**Perhitungan dasar:**
```
Ambang Peringatan = (Penjualan Harian × Hari Waktu Tunggu) + Stok Pengaman

Contoh:
- Menjual 10 unit/hari
- 7 hari waktu tunggu
- 20 unit stok pengaman
- Peringatan pada: (10 × 7) + 20 = 90 unit
```

**Pendekatan konservatif:**
```
Ambang Peringatan = (Penjualan Harian × Waktu Tunggu × 1,5) + Stok Pengaman
```

### Contoh Berdasarkan Jenis Produk

| Jenis Produk | Penjualan Harian | Waktu Tunggu | Ambang Peringatan |
|--------------|------------------|--------------|------------------|
| Best seller | 50 | 5 hari | 300 unit |
| Item reguler | 10 | 7 hari | 90 unit |
| Penjualan lambat | 2 | 14 hari | 40 unit |
| Musiman | Bervariasi | 10 hari | 200 unit (puncak) |

---

## Melihat Peringatan Stok

### Dasbor Peringatan Stok

Akses dari menu utama:

1. Ketuk **"Peringatan Stok"**
2. Lihat dua bagian:
   - **🔴 Di Bawah Ambang** — Perlu perhatian
   - **✅ Di Atas Ambang** — Semuanya baik

<!-- TODO: Screenshot - Stock Alert dashboard -->

### Fitur Daftar Peringatan

Setiap baris menampilkan:
| Kolom | Informasi |
|-------|-----------|
| Produk | Nama dan gambar |
| Stok Saat Ini | Jumlah sebenarnya |
| Peringatan Pada | Ambang yang diatur |
| Status | Seberapa mendesak |

**Opsi pengurutan:**
- Tingkat stok (terendah pertama)
- Nama produk
- Kategori
- Status peringatan

### Peringatan Dasbor Utama

Tampilan cepat dari Utama:
- Badge pada ikon menu
- Titik notifikasi
- Kartu ringkasan: "3 item stok rendah"

Ketuk untuk langsung ke halaman Peringatan Stok.

---

## Pengaturan Notifikasi

### Notifikasi Dalam Aplikasi

Selalu diaktifkan:
- Hitungan badge
- Peringatan dasbor
- Banner dalam aplikasi

### Notifikasi Push

Konfigurasi di **Akun → Notifikasi**:

1. Pergi ke pengaturan Akun
2. Ketuk **"Notifikasi"**
3. Toggle **"Peringatan Stok"**
4. Tetapkan tingkat mendesak:
   - **Semua peringatan** — Setiap pelanggaran ambang
   - **Kritis saja** — Item paling mendesak
   - Ringkasan harian — Sekali per hari

<!-- TODO: Screenshot - Notification settings -->

### Notifikasi Email

Tersedia pada paket premium:

- Email status stok harian
- Ringkasan stok rendah mingguan
- Peringatan langsung untuk item kritis

Konfigurasi di dasbor web.

---

## Merespons Peringatan

### Saat Anda Mendapatkan Peringatan

**Tindakan langsung:**

1. **Periksa stok saat ini**
   - Verifikasi hitungan fisik
   - Periksa pesanan yang tertunda
   - Konfirmasi peringatan akurat

2. **Assess urgency**
   - Seberapa cepat ini terjual?
   - Berapa lama untuk mengisi ulang?
   - Bisakah pelanggan menunggu?

3. **Ambil tindakan**
   - Pesan dari pemasok
   - Transfer dari lokasi lain
   - Perbarui ambang jika salah

### Membuat Pesanan Pembelian

Dari Peringatan Stok:

1. Temukan produk dalam daftar peringatan
2. Ketuk produk
3. Lihat stok saat ini dan ambang
4. Ketuk **"Pesan Stok"** (jika terintegrasi)
5. Atau catat jumlah yang dibutuhkan
6. Hubungi pemasok

### Menandai Peringatan Sudah Ditinjau

Setelah mengambil tindakan:

1. Dalam daftar Peringatan Stok
2. Geser ke kiri pada produk
3. Ketuk **"Tandai Ditinjau"**
4. Peringatan sementara dihapus
5. Muncul kembali jika stok tetap rendah

---

## Praktik Terbaik

### Mengatur Ambang

✅ **Tinjauan reguler**
- Tinjauan ambang bulanan
- Sesuaikan untuk musim
- Perbarui untuk tren penjualan

✅ **Differentiate products**
- Item A (20% teratas): Stok pengaman lebih tinggi
- Item B (30% tengah): Peringatan moderat
- Item C (50% bawah): Prioritas lebih rendah

✅ **Pertimbangkan waktu tunggu**
- Pemasok lokal: Ambang lebih rendah
- Internasional: Ambang lebih tinggi
- Pemasok tidak andal: Buffer ekstra

### Mengelola Peringatan

✅ **Kebiasaan tinjauan harian**
- Periksa peringatan setiap pagi
- Prioritaskan item kritis
- Rencanakan pembelian sesuai

✅ **Jangan abaikan peringatan**
- Atasi dalam 24 jam
- Eskalasi jika ada masalah pemasok
- Dokumentasikan alasan penundaan

✅ **Komunikasikan dengan tim**
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
- PO dihasilkan otomatis
- Email notifikasi ke pemasok
- Saran jumlah pemesanan ulang

Hubungi dukungan untuk pengaturan.

### Peringatan Multi-Lokasi

Untuk bisnis dengan beberapa lokasi:

- Atur peringatan per lokasi
- Transfer stok antar lokasi
- Dasbor peringatan terkonsolidasi

### Penyesuaian Musim

Sebelum musim sibuk:

1. Tingkatkan ambang peringatan
2. Tingkatkan stok pengaman
3. Pre-order inventaris
4. Pantau lebih sering

Setelah musim:

1. Kurangi ambang
2. Bersihkan stok berlebih
3. Tinjau apa yang terjual

---

## Pemecahan Masalah

### "Tidak menerima peringatan"

**Periksa:**
- Notifikasi diaktifkan di pengaturan
- Ambang peringatan sebenarnya diatur
- Stok produk di bawah ambang
- Notifikasi aplikasi diizinkan (pengaturan telepon)

**Coba:**
- Toggle notifikasi mati dan hidup
- Restart aplikasi
- Periksa pengaturan notifikasi telepon

### "Terlalu banyak peringatan"

**Solusi:**
- Naikkan ambang untuk item tidak kritis
- Gunakan ringkasan harian alih-alih langsung
- Fokuskan peringatan hanya pada item A
- Nonaktifkan peringatan untuk penjualan lambat

### "Ambang peringatan terus berubah"

**Kemungkinan penyebab:**
- Beberapa staf mengedit
- Masalah sinkronisasi
- Bug aplikasi

**Perbaiki:**
- Verifikasi hanya staf yang diizinkan yang mengubah ambang
- Periksa siapa yang terakhir memperbarui
- Hubungi dukungan jika berlanjut

### "Tingkat stok salah ditampilkan"

**Periksa:**
- Transaksi yang tidak tersinkronisasi
- Operasi stok yang tertunda
- Masalah sinkronisasi multi-perangkat

**Perbaiki:**
- Tarik ke bawah untuk menyegarkan
- Periksa koneksi internet
- Paksa sinkronisasi di pengaturan

---

## FAQ

**Q: Berapa banyak produk yang bisa memiliki peringatan?**
A: Tanpa batas! Atur peringatan untuk sebanyak mungkin produk yang Anda butuhkan.

**Q: Bisakah saya mengatur peringatan berbeda untuk lokasi berbeda?**
A: Ya, setiap lokasi bisnis memiliki pengaturan peringatan independen.

**Q: Apakah peringatan berfungsi offline?**
A: Peringatan dihitung berdasarkan data yang terakhir disinkronkan. Sinkronkan saat online untuk akurasi.

**Q: Bisakah staf menerima peringatan juga?**
A: Ya, jika mereka memiliki izin yang sesuai dan notifikasi diaktifkan.

**Q: Apa perbedaan antara peringatan dan titik pemesanan ulang?**
A: Peringatan memberitahu Anda. Titik pemesanan ulang adalah kapan Anda harus memesan (biasanya angka yang sama).

**Q: Bisakah saya mengekspor data peringatan?**
A: Ya, gunakan Laporan Stok dan filter untuk item stok rendah.

**Q: Apakah peringatan mempertimbangkan Stock In yang tertunda?**
A: Saat ini peringatan hanya menampilkan stok saat ini. Periksa pesanan tertunda secara terpisah.

---

## Artikel Terkait

- [Mencatat Stock In →](./record-stock-in)
- [Laporan Stok →](../reports/stock-report)
- [Mentransfer Stok →](./stock-transfer)
- [Memahami Aliran Stok →](./understanding-stock-flow)
