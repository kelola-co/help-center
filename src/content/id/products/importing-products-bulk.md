---
title: "Mengimpor Produk Massal dengan Excel"
excerpt: "Pelajari cara mengimpor beberapa produk sekaligus menggunakan file Excel atau CSV, hemat waktu dalam menambahkan produk satu per satu"
readingTime: 8
lastUpdated: "2026-02-16"
category: "products"
difficulty: "intermediate"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Setelah membaca panduan ini, Anda akan dapat:
- Mengimpor produk massal dengan file Excel/CSV
- Menggunakan fitur tempel dari Excel langsung
- Menetapkan harga grosir beberapa level
- Menghindari kesalahan umum dalam pengimporan

---

## Persyaratan

Impor produk massal hanya dapat dilakukan di **versi web** saja

**Yang perlu disiapkan:**
- Akun Kelola yang sudah login
- File Excel (.xlsx) atau CSV dengan data produk
- Data produk yang wajib ada: nama, SKU, stok awal

---

## Mengakses Halaman Impor Produk

### Langkah 1: Buka Halaman Produk

1. Buka browser dan pergi ke **[web.kelola.co](https://web.kelola.co)**
2. Login dengan akun Google Anda
3. Dari menu di sisi kiri, pilih **"Produk"**

### Langkah 2: Buka Halaman Impor

1. Di halaman daftar produk, cari tombol **"Impor Produk"** atau **"Import"**
2. Klik tombol tersebut untuk membuka halaman impor produk

> **💡 Tips:** Tombol impor berada di dekat tombol "+" untuk menambah produk baru

---

## Menyiapkan Data di Excel

### Struktur Data yang Didukung

| No | Kolom | Wajib | Deskripsi | Contoh |
|----|-------|-------|-----------|--------|
| 1 | Nama Produk | ✅ Wajib | Nama produk maks 100 karakter | "Kopi Hitam 250g" |
| 2 | Kategori | ❌ Opsional | Grup produk | "Minuman" |
| 3 | SKU | ✅ Wajib | Kode produk internal | "KOP-HIT-250" |
| 4 | Stok Awal | ✅ Wajib | Jumlah stok di gudang | 50 |
| 5 | Tanggal Kadaluarsa | ❌ Opsional | Tanggal produk kedaluwarsa (DD-MM-YYYY) | 31-12-2026 |
| 6 | Deskripsi | ❌ Opsional | Detail produk | "Kopi arabika berkualitas" |
| 7 | Harga Beli | ❌ Opsional | Harga beli dari supplier | 25000 |
| 8 | Harga Jual | ❌ Opsional | Harga jual eceran | 50000 |

### Harga Grosir (Opsional)

Anda dapat menambahkan kolom harga grosir maks 5 level:

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Harga Grosir 1 | Harga untuk pelanggan grosir level 1 | 40000 |
| Harga Grosir 2 | Harga untuk pelanggan grosir level 2 | 38000 |
| Harga Grosir 3 | Harga untuk pelanggan grosir level 3 | 35000 |

### Contoh File Excel

```
| Nama Produk  | Kategori  | SKU         | Stok | Tgl Kadaluarsa | Deskripsi        | Harga Beli | Harga Jual |
|--------------|-----------|-------------|------|----------------|------------------|------------|------------|
| Teh Hijau    | Minuman   | TEH-HIJ-100 | 50   | 31-12-2026     | Teh Organik      | 25000      | 50000      |
| Kopi Hitam   | Minuman   | KOP-HIT-250 | 30   | 30-06-2026     | Kopi panggang    | 45000      | 80000      |
| Jus Jeruk 1L | Minuman   | JUS-JER-1L  | 100  |                | Jeruk segar 100% | 15000      | 25000      |
```

---

## Cara 1: Menempel Data dari Excel Langsung

Cara paling mudah adalah menyalin data dari Excel dan menempel ke tabel:

### Langkah Menempel Data

1. Buka halaman impor produk di Kelola
2. Buka file Excel dengan data produk Anda
3. Pilih sel yang berisi data (termasuk header tabel)
4. Salin data (Ctrl+C atau Cmd+C)
5. Klik sel pertama di tabel Kelola (kolom nama produk)
6. Tempel data (Ctrl+V atau Cmd+V)

Sistem akan menambahkan baris baru secara otomatis dan menyusun data dengan benar!

> **⚠️ Catatan:** Pastikan urutan kolom di Excel sesuai dengan urutan di tabel Kelola

---

## Cara 2: Mengisi Data di Tabel

Jika ingin mengisi data satu per satu:

### Menambah Baris Baru

1. Klik tombol **"+"** atau **"Tambah Baris"** untuk menambah baris baru
2. Isi data di setiap kolom sesuai urutan

### Menggunakan Tombol Tab dan Enter

- **Tab**: Pindah ke kolom berikutnya (kanan)
- **Shift+Tab**: Kembali ke kolom sebelumnya (kiri)
- **Enter**: Pindah ke baris berikutnya (bawah)
- **Arrow Keys**: Bergerak antar kolom

### Menambah Harga Grosir

1. Klik tombol **"+"** di header kolom harga grosir
2. Beri nama kolom (contoh: "Grosir 10 pcs")
3. Isi harga untuk setiap produk

---

## Memeriksa dan Menyimpan

### Validasi Data

Sebelum menyimpan, sistem akan memeriksa:

- ✅ Nama produk tidak lebih dari 100 karakter
- ✅ SKU tidak boleh kosong
- ✅ Stok awal tidak boleh kosong
- ✅ Harga harus berupa angka yang valid (jika diisi)

### Kesalahan yang Mungkin Terjadi

| Kesalahan | Penyebab | Cara Mengatasi |
|-----------|----------|----------------|
| "SKU wajib" | Kolom SKU kosong | Isi SKU untuk setiap produk |
| "Stok wajib" | Kolom stok kosong | Isi jumlah stok awal |
| "Nama terlalu panjang" | Nama lebih dari 100 karakter | Potong agar lebih pendek |
| "Harga tidak valid" | Huruf di kolom harga | Isi hanya angka |

### Menyimpan

1. Periksa semua data lagi
2. Klik tombol **"Simpan Produk"** atau **"Save Products"**
3. Tunggu hingga pengunggahan selesai
4. Pesan konfirmasi akan muncul setelah selesai

✅ **Cek Keberhasilan:** Semua produk akan muncul di daftar produk!

---

## Tips dan Best Practice

### Menyiapkan File

1. **Gunakan template standar** - Unduh template dari Kelola agar urutan kolom benar
2. **Periksa data sebelumnya** - Bersihkan data sebelum mengimpor, hapus baris kosong
3. **Cadangkan data** - Simpan file Excel sebagai backup

### Menghindari Masalah

- **Jangan gunakan simbol khusus** di nama produk, seperti `"|"`, `"\"`, `"/"`
- **SKU harus unik** - Sistem akan menolak jika SKU sudah ada
- **Periksa format tanggal** - Gunakan format DD-MM-YYYY

### Batasan

- Maksimum **5 kolom harga grosir**
- Nama produk **maksimum 100 karakter**
- Tidak terbatas jumlah baris yang diimpor (tergantung paket langganan)

---

## Pemecahan Masalah

### "Impor Gagal"

1. Periksa kelengkapan data
2. Lihat pesan error di setiap baris
3. Perbaiki dan coba lagi

### "SKU Duplikat"

- Ubah SKU agar tidak sama dengan produk yang ada
- Atau edit produk yang ada sebagai gantinya

### "Data Tidak Benar Setelah Ditempel"

- Periksa urutan kolom di Excel
- Coba tempel satu baris saja instead of multiple bars simultaneously

---

## FAQ

**Q: Berapa banyak produk yang bisa diimpor sekaligus?**
A: Tidak ada batasan pasti, tergantung paket langganan Anda

**Q: Bisakah memperbarui produk yang sudah ada dengan impor?**
A: Tidak bisa, impor hanya menambah produk baru. Untuk memperbarui, edit produk yang ada

**Q: Apa yang harus dilakukan jika tidak punya SKU?**
A: SKU wajib ada, Anda harus membuat sendiri. Contoh: kode produk 5 digit

**Q: Bisakah mengimpor dari file CSV?**
A: Bisa, sistem support Excel (.xlsx) dan CSV

---

## Ringkasan

Mengimpor produk massal dengan Excel sangat menghemat waktu, terutama saat harus menambah ratusan produk. Coba fitur ini saat memulai bisnis atau memperbarui katalog produk Anda!

Jika ada pertanyaan lain, hubungi tim support kapan saja
