---
title: "Menambah dan Mengelola Produk"
excerpt: "Panduan lengkap untuk menambah produk ke Kelola. Pelajari tentang SKU, barcode, kategori, harga, dan praktik terbaik untuk mengatur persediaan Anda."
readingTime: 6
lastUpdated: "2026-02-15"
category: "products"
difficulty: "beginner"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan mampu:
- Menambah produk dengan detail lengkap
- Menggunakan SKU dan barcode secara efektif
- Mengatur produk dengan kategori
- Menetapkan harga dan stok awal
- Mengelola gambar produk

---

## Menambah Produk Tunggal

### Langkah 1: Buka Layar Tambah Produk

1. Ketuk **"Produk"** di navigasi bawah
2. Ketuk tombol **"+"** (kanan atas)
3. Formulir **Tambah Produk** terbuka

<!-- TODO: Screenshot - Add Product button location -->

### Langkah 2: Masukkan Informasi Dasar

#### Field Wajib
| Field | Deskripsi | Contoh |
|-------|-----------|--------|
| **Nama Produk** | Apa yang Anda sebut produk | "Teh Hijau Organik 100g" |
| **Harga** | Harga jual ke pelanggan | 50000 |

#### Field Opsional (Direkomendasikan)
| Field | Deskripsi | Contoh |
|-------|-----------|--------|
| **SKU** | Kode produk internal Anda | "TEA-GRN-100" |
| **Barcode** | Kode produk yang dapat dipindai | "8991234567890" |
| **Kategori** | Pengelompokan produk | "Minuman" |
| **Stok Awal** | Jumlah saat ini | 50 |
| **Deskripsi** | Detail produk | "Teh organik premium dari Sumatra" |

<!-- TODO: Screenshot - Add Product form with example data -->

### Langkah 3: Tambahkan Gambar Produk

1. Ketuk **ikon kamera** atau placeholder gambar
2. Pilih sumber:
   - **Ambil Foto** — Gunakan kamera (mobile)
   - **Pilih dari Galeri** — Pilih foto yang ada
   - **Hapus** — Hapus gambar saat ini
3. (Opsional) **Pangkas** gambar untuk fokus pada produk
4. Ketuk **"Selesai"**

> **💡 Praktik Terbaik:** Gunakan foto yang jelas, pencahayaan baik dengan latar belakang putih/netral. Gambar persegi berfungsi paling baik.

### Langkah 4: Simpan Produk

1. Tinjau semua informasi yang dimasukkan
2. Ketuk **"Simpan"** (kanan atas)
3. Pesan sukses muncul

✅ **Cek Hasil:** Produk Anda sekarang muncul di daftar Produk!

---

## Memahami Field Produk

### SKU (Stock Keeping Unit)

Pengidentifikasi produk internal Anda.

**Mengapa Menggunakan SKU?**
- Melacak produk tanpa barcode
- Membuat sistem penamaan Anda sendiri
- Komunikasi internal yang lebih mudah

**Praktik Terbaik SKU:**
```
Format: [KATEGORI]-[VARIAN]-[UKURAN]
Contoh:
- TEA-GRN-100 (Teh, Hijau, 100g)
- SHRT-BLU-L (Kemeja, Biru, Large)
- SNCK-CHIP-50 (Makanan Ringan, Keripik, 50g)
```

### Barcode

Pengidentifikasi produk yang dapat dipindai.

**Jenis yang Didukung:**
- UPC/EAN (produk retail)
- Code 128 (penggunaan internal)
- Kode QR (penggunaan fleksibel)

**Cara Menambahkan:**
1. **Entri manual**: Ketik nomor barcode
2. **Pindai**: Gunakan kamera untuk memindai (aplikasi mobile)
3. **Pemindai eksternal**: Gunakan pemindai barcode (web)

> **Catatan:** Barcode harus unik. Jika Anda mendapatkan error, barcode mungkin sudah ditetapkan ke produk lain.

### Kategori

Atur produk ke dalam grup.

**Mengapa Kategori Penting:**
- Pencarian produk lebih cepat
- Pelaporan lebih baik
- Organisasi lebih rapi

**Membuat Kategori:**
1. Di field Kategori, ketuk **"Tambah Baru"**
2. Masukkan nama kategori
3. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Category selection dropdown -->

**Contoh Kategori:**
- Makanan & Minuman
- Elektronik
- Pakaian
- Rumah Tangga
- Bahan Baku

---

## Menambah Produk Secara Massal

Untuk menambah beberapa produk dengan cepat:

### Metode 1: Salin dari yang Ada
1. Temukan produk serupa
2. Ketuk **"Duplikat"** (menu tiga titik)
3. Edit detailnya
4. Simpan sebagai produk baru

### Metode 2: Impor Web
1. Buka **web.kelola.co** di komputer
2. Navigasi ke **Produk → Impor**
3. Unduh **template CSV**
4. Isi produk Anda
5. Unggah file

<!-- TODO: Screenshot - Import products interface -->

---

## Mengelola Detail Produk

### Melihat Informasi Produk

1. Pergi ke **Produk**
2. Ketuk produk apa pun
3. Lihat detail lengkap:
   - Info dasar (nama, SKU, barcode)
   - Jumlah stok saat ini
   - Riwayat harga
   - Riwayat transaksi
   - Gambar produk

<!-- TODO: Screenshot - Product detail screen -->

### Mengedit Produk

1. Buka detail produk
2. Ketuk **"Edit"** (kanan atas)
3. Ubah field apa pun
4. Ketuk **"Simpan"**

> **⚠️ Penting:** Mengedit produk memperbaruinya di mana-mana. Transaksi sebelumnya menyimpan harga asli untuk pelaporan yang akurat.

### Menghapus Produk

1. Buka detail produk
2. Ketuk **"Hapus"** (menu tiga titik)
3. Konfirmasi penghapusan

> **⚠️ Peringatan:** Anda hanya dapat menghapus produk dengan **stok nol dan tidak ada riwayat transaksi**. Pertimbangkan untuk mengarsipkan dengan mengatur stok ke 0.

---

## Praktik Terbaik Organisasi Produk

### Konvensi Penamaan

**Nama Produk yang Baik:**
- ✅ "Biji Kopi Organik - Dark Roast 250g"
- ✅ "Kaos Katun - Hitam - Ukuran M"
- ✅ "Mouse Nirkabel - Logitech M185"

**Hindari:**
- ❌ "Kopi" (terlalu umum)
- ❌ "Item 1" (tidak deskriptif)
- ❌ "Produk Baru" (tidak membantu)

### Tips Hierarki Kategori

Pertahankan sederhana tetapi bermakna:
```
Level 1: Kategori Utama (5-10)
  → Minuman
  → Makanan
  → Elektronik

Level 2: Sub-grup (jika diperlukan)
  → Minuman → Kopi & Teh
  → Minuman → Minuman Ringan
```

### Pengaturan Manajemen Stok

**Stok Awal:**
- Tambahkan jumlah saat ini saat membuat produk
- Gunakan Stok Masuk untuk pembelian di masa depan
- Gunakan Stok Keluar untuk penjualan

**Peringatan Stok Rendah:**
1. Pergi ke **Peringatan Stok** dari menu utama
2. Atur jumlah minimum per produk
3. Dapatkan notifikasi saat stok menipis

---

## Fitur Produk Lanjutan

### Varian Produk

Untuk produk dengan opsi (ukuran, warna, dll):

**Opsi 1: Produk Terpisah**
- Buat setiap varian sebagai produk sendiri
- Gunakan penamaan konsisten: "Kaos - Merah - M", "Kaos - Merah - L"

**Opsi 2: Produk Tunggal dengan Catatan**
- Gunakan field deskripsi untuk varian
- Lacak jumlah total saja

### Produk Bundel

Untuk menjual beberapa item bersama:

1. Buat produk "Bundel"
2. Tetapkan harga untuk bundel
3. Di catatan, daftarkan komponen produk
4. Saat menjual, kurangi stok komponen secara manual

> **Catatan:** Pelacakan bundel otomatis akan datang di pembaruan mendatang.

---

## Pemecahan Masalah

### "Barcode sudah ada"
- Periksa apakah produk sudah ada di katalog Anda
- Pastikan Anda tidak menduplikasi barcode
- Hubungi dukungan jika Anda yakin ini adalah error

### "Tidak dapat menghapus produk"
- Produk memiliki riwayat stok — gunakan Stok Keluar untuk mengosongkan terlebih dahulu
- Produk memiliki transaksi — tidak dapat dihapus, hanya diedit

### "Produk tidak muncul di pencarian"
- Periksa ejaan di nama produk
- Coba cari berdasarkan SKU atau barcode
- Verifikasi produk tidak diarsipkan

### "Unggah gambar gagal"
- Periksa ukuran file (maks 5MB)
- Gunakan format JPG atau PNG
- Pastikan koneksi internet stabil

---

## FAQ

**T: Berapa banyak produk yang bisa saya tambahkan?**
J: Tergantung paket Anda. Paket gratis memungkinkan hingga 100 produk. Paket premium menawarkan produk tidak terbatas.

**T: Bisakah saya mengimpor produk dari Excel?**
J: Ya! Gunakan antarmuka web di web.kelola.co untuk impor CSV.

**T: Apa perbedaan antara SKU dan Barcode?**
J: SKU adalah kode internal Anda, barcode adalah kode yang dapat dipindai dari pabrikan. Keduanya membantu mengidentifikasi produk.

**T: Bisakah saya mengubah barcode produk nanti?**
J: Ya, edit produk dan perbarui field barcode. Pastikan barcode baru belum digunakan.

**T: Bagaimana saya melacak riwayat biaya/harga produk?**
J: Kelola melacak biaya melalui transaksi Stok Masuk. Lihat riwayat transaksi di setiap halaman produk.

---

## Artikel Terkait

- [Menggunakan Barcode dan SKU →](./using-barcode-sku)
- [Mengatur Kategori →](./organizing-categories)
- [Mencatat Stok Masuk →](../stock/record-stock-in)
- [Mengatur Peringatan Stok →](../stock/managing-stock-alerts)
- [Katalog Produk →](../catalog/creating-catalogs)
