---
title: "Laporan Stok"
excerpt: "Pelacakan inventori komprehensif dengan detail tingkat produk, pergerakan stok, analisis laba, dan laporan yang dapat diunduh"
readingTime: 3
lastUpdated: "2026-02-14"
category: "report"
---

## Apa itu Laporan Stok?

**Laporan Stok** memberikan wawasan detail tentang pergerakan dan kinerja inventori Anda. Ini menunjukkan berapa banyak stok yang masuk, keluar, dan profitabilitas setiap produk selama periode waktu tertentu.

## Mengapa Menggunakan Laporan Stok?

Laporan stok membantu Anda:
- **Melacak alur inventori** – Pantau stok masuk, keluar, dan level saat ini
- **Mengidentifikasi produk terlaris** – Lihat produk mana yang memiliki volume stok keluar tinggi
- **Menganalisis profitabilitas produk** – Pahami produk mana yang menghasilkan laba terbanyak
- **Mengoptimalkan level stok** – Identifikasi inventori yang bergerak lambat vs cepat
- **Kinerja staf** – Lacak anggota staf mana yang menangani transaksi stok terbanyak

## Dasbor Laporan Stok

Dasbor terdiri dari:

### Kartu Ringkasan

| Kartu | Deskripsi |
|-------|-----------|
| **Total Produk** | Jumlah total produk dalam katalog Anda |
| **Total Kuantitas Produk** | Jumlah semua unit yang saat ini ada di stok di semua produk |

### Tabel Detail Produk

Daftar komprehensif yang menunjukkan untuk setiap produk:

| Kolom | Deskripsi |
|-------|-----------|
| **Nama Produk** | Nama produk dengan gambar, kategori, dan SKU |
| **Stok Masuk** | Total unit yang diterima selama periode yang dipilih |
| **Stok Keluar** | Total unit yang terjual/keluar selama periode tersebut |
| **Laba** | Laba yang dihasilkan dari produk ini (memerlukan izin) |
| **Stok Saat Ini** | Kuantitas stok terbaru yang tersedia |

> **Catatan:** Data laba memerlukan izin untuk melihat harga modal. Jika Anda melihat "-", Anda mungkin tidak memiliki akses.

## Cara Melihat Laporan Stok

### Langkah 1: Akses Laporan Stok
1. Masuk ke Kelola.co (Web: [web.kelola.co](https://web.kelola.co) atau Aplikasi Mobile)
2. Dari menu utama, pilih **"Laporan"**
3. Pilih **"Laporan Stok"**

### Langkah 2: Atur Rentang Tanggal
Gunakan **pemilih tanggal** untuk memilih periode analisis Anda:
- **Preset cepat** – 7 hari terakhir, 30 hari terakhir, bulan ini, bulan lalu, dll.
- **Rentang kustom** – Pilih tanggal mulai dan berakhir tertentu

Laporan akan menunjukkan pergerakan stok yang terjadi dalam rentang tanggal ini.

### Langkah 3: Filter berdasarkan Staf (Opsional)
Gunakan **Filter Staf** untuk:
- Melihat transaksi stok oleh anggota staf tertentu
- Menganalisis kinerja individu staf
- Melacak siapa yang menangani pergerakan stok tertentu

Pilih satu atau beberapa staf dari dropdown.

## Memahami Tabel Produk

### Informasi Produk
Setiap baris menunjukkan:
- **Gambar Produk** – Thumbnail produk
- **Nama Produk** – Klik untuk melihat nama lengkap jika terpotong
- **Kategori** – Kategori produk
- **SKU** – Kode SKU produk

### Stok Masuk
Total kuantitas yang diterima melalui:
- Transaksi Stok Masuk (pembelian dari supplier)
- Transfer Stok dari bisnis lain
- Penyesuaian Audit Stok (positif)

### Stok Keluar
Total kuantitas yang keluar melalui:
- Transaksi Stok Keluar (penjualan ke pelanggan)
- Transfer Stok ke bisnis lain
- Penyesuaian Audit Stok (negatif)

### Perhitungan Laba
```
Laba Produk = (Stok Keluar × Harga Jual) − (Stok Keluar × Harga Beli)
```

Atau disederhanakan:
```
Laba = Kuantitas Stok Keluar × (Harga Jual − Harga Beli)
```

Ini menunjukkan laba kotor untuk setiap produk selama periode yang dipilih.

### Stok Saat Ini
Kuantitas terbaru yang tersedia untuk setiap produk, mencerminkan semua transaksi hingga sekarang (bukan hanya rentang tanggal yang dipilih).

## Mengurutkan Laporan

Klik pada header kolom untuk mengurutkan:

| Urutkan Berdasarkan | Deskripsi |
|---------------------|-----------|
| **Nama** | Urutan alfabet berdasarkan nama produk |
| **Stok Masuk** | Kuantitas masuk tertinggi ke terendah |
| **Stok Keluar** | Kuantitas keluar tertinggi ke terendah |
| **Laba** | Laba tertinggi ke terendah (jika dapat diakses) |

Klik lagi untuk membalik urutan pengurutan (naik/turun).

## Menganalisis Data Stok Anda

### Identifikasi Produk Cepat Laku
Urutkan berdasarkan **Stok Keluar** (menurun) untuk melihat:
- Produk terlaris Anda
- Produk yang perlu sering diisi ulang
- Performer terbaik berdasarkan volume

### Identifikasi Produk Lambat Laku
Urutkan berdasarkan **Stok Keluar** (menaik) untuk melihat:
- Produk dengan volume penjualan rendah
- Potensi stok mati
- Item yang mungkin perlu promosi

### Lacak Pola Pembelian
Urutkan berdasarkan **Stok Masuk** untuk melihat:
- Produk mana yang Anda isi ulang paling sering
- Produk dengan aktivitas pembelian tinggi
- Pola pengisian musiman

### Analisis Profitabilitas
Urutkan berdasarkan **Laba** (jika dapat diakses) untuk melihat:
- Produk paling menguntungkan Anda
- Produk margin tinggi vs volume tinggi
- Produk yang paling berkontribusi pada laba bersih

## Mengunduh Laporan Stok

Ekspor data stok detail ke Excel:

1. Terapkan filter yang diinginkan (rentang tanggal, staf)
2. Atur pengurutan yang Anda inginkan
3. Klik tombol **"Unduh"** di kanan atas
4. File Excel akan mencakup:
   - Nama produk
   - Kategori
   - SKU
   - Kuantitas Stok Masuk
   - Kuantitas Stok Keluar
   - Laba (jika dapat diakses)
   - Kuantitas stok saat ini

> **Tip:** Unduh laporan secara teratur untuk melacak tren inventori dari waktu ke waktu.

## Kasus Penggunaan Umum

### Tinjauan Inventori Mingguan
1. Atur rentang tanggal ke "7 Hari Terakhir"
2. Tinjau Stok Masuk untuk melihat apa yang diterima
3. Tinjau Stok Keluar untuk melihat apa yang terjual
4. Identifikasi produk yang perlu dipesan ulang

### Analisis Kinerja Bulanan
1. Atur rentang tanggal ke bulan ini
2. Urutkan berdasarkan Laba untuk melihat performer terbaik
3. Identifikasi produk dengan Stok Masuk tinggi tetapi Stok Keluar rendah (kelebihan stok)
4. Rencanakan strategi pembelian untuk bulan berikutnya

### Tinjauan Kinerja Staf
1. Filter berdasarkan anggota staf individu
2. Bandingkan volume Stok Masuk/Keluar
3. Identifikasi kebutuhan pelatihan atau performer terbaik

### Analisis Musiman
1. Atur rentang tanggal ke musim sebelumnya (misalnya, Desember lalu)
2. Bandingkan dengan periode saat ini
3. Identifikasi tren musiman
4. Rencanakan inventori untuk musim mendatang

## Tips untuk Pelaporan Stok yang Akurat

### Catat Semua Transaksi
- Pastikan semua transaksi Stok Masuk, Stok Keluar, dan Audit tercatat
- Transaksi yang hilang akan mempengaruhi akurasi laporan

### Tetapkan Harga yang Akurat
- Perbarui harga beli untuk perhitungan laba yang akurat
- Tetapkan harga jual yang benar untuk pelacakan pendapatan

### Gunakan Unit yang Konsisten
- Pastikan unit produk konsisten (pcs, kg, liter, dll.)
- Unit yang bercampur dapat menyebabkan kebingungan dalam pelaporan kuantitas

### Audit Rutin
- Lakukan audit stok secara berkala untuk memperbaiki ketidaksesuaian
- Sesuaikan kuantitas stok agar sesuai dengan hitungan fisik

## Memahami Pergerakan Stok

### Sumber Stok Masuk
Kuantitas Stok Masuk berasal dari:
- **Pesanan Pembelian** – Membeli dari supplier
- **Retur** – Retur pelanggan (jika dicatat sebagai Stok Masuk)
- **Transfer** – Stok yang diterima dari lokasi bisnis lain
- **Audit** – Penyesuaian positif dari penghitungan stok

### Tujuan Stok Keluar
Kuantitas Stok Keluar pergi ke:
- **Penjualan** – Dijual ke pelanggan
- **Transfer** – Dikirim ke lokasi bisnis lain
- **Kerusakan/Kehilangan** – Dicatat melalui Audit Stok
- **Penggunaan Internal** – Digunakan untuk operasi bisnis

### Produk yang Dihapus
Jika Anda melihat "Produk Dihapus" dalam laporan:
- Produk tersebut dihapus dari katalog Anda
- Data historis dipertahankan untuk pelaporan
- SKU dan kategori mungkin menunjukkan "Info Tidak Ditemukan"

## Bagaimana Data Stok Dihitung

### Pembaruan Real-Time
Pergerakan stok dicatat secara real-time saat Anda:
- Mencatat transaksi Stok Masuk
- Memproses penjualan Stok Keluar
- Melakukan Audit Stok
- Mentransfer stok antar bisnis

### Sumber Data
Laporan menggabungkan data dari:
- **Transaksi Stok Masuk** → Kuantitas masuk
- **Transaksi Stok Keluar** → Kuantitas keluar
- **Katalog Produk** → Level stok saat ini, harga, detail
- **Audit Stok** → Penyesuaian kuantitas

### Dampak Rentang Tanggal
- **Stok Masuk/Keluar** – Menunjukkan hanya transaksi dalam rentang tanggal yang dipilih
- **Stok Saat Ini** – Menunjukkan kuantitas terbaru terlepas dari rentang tanggal (real-time)
- **Laba** – Dihitung berdasarkan transaksi dalam rentang tanggal

## Fitur Terkait

- **[Laporan Keuangan](./accounting-report)** – Kinerja keuangan bisnis secara keseluruhan
- **[Stok Masuk](../stock/record-stock-in)** – Mencatat inventori masuk
- **[Stok Keluar](../stock/record-stock-out)** – Mencatat penjualan dan stok keluar
- **[Transfer Stok](../stock/stock-transfer)** – Memindahkan stok antar bisnis
- **[Daftar Produk](../features/barcode-scanner)** – Mengelola katalog produk Anda

## Butuh Bantuan?

Jika Anda memiliki pertanyaan tentang laporan stok atau memerlukan bantuan menganalisis data inventori Anda, silakan hubungi tim support kami melalui tombol **Hubungi Kami** di aplikasi Kelola.
