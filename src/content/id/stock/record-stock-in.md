---
title: "Mencatat Stok Masuk (Pembelian)"
excerpt: "Panduan lengkap untuk mencatat persediaan masuk dan pembelian di Kelola. Pelajari cara menambah stok, melacak informasi supplier, mengelola biaya, dan menangani alur kerja penerimaan."
readingTime: 6
lastUpdated: "2026-02-15"
category: "stock"
difficulty: "beginner"
audience: "all"
prerequisites: ["products/adding-products"]
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan mampu:
- Mencatat pembelian persediaan dan penerimaan
- Menghubungkan stok ke supplier
- Melacak harga beli dan biaya
- Menangani pengiriman parsial
- Mengelola riwayat stok masuk

---

## Apa itu Stok Masuk?

**Stok Masuk** mencatat produk yang memasuki persediaan Anda. Gunakan ini saat:
- ✅ Menerima barang dari supplier
- ✅ Menambahkan stok awal untuk produk baru
- ✅ Mencatat retur dari pelanggan
- ✅ Memperbaiki persediaan (dengan catatan)
- ✅ Mentransfer dari lokasi lain

**Hasil:** Jumlah stok meningkat, biaya dilacak, catatan dibuat.

---

## Antarmuka Stok Masuk

Kelola menyediakan antarmuka dua panel yang intuitif:

<!-- TODO: Screenshot - Stock In split-screen view -->

| Panel | Tujuan |
|-------|--------|
| **Panel Kiri** | Katalog produk — cari dan pilih |
| **Panel Kanan** | Item yang dipilih — jumlah dan harga |
| **Bilah Bawah** | Ringkasan dan tombol aksi |

### Mobile vs. Web

**Aplikasi Mobile:**
- Geser antar panel
- Dioptimalkan untuk sentuhan
- Kamera untuk pemindaian barcode

**Web (web.kelola.co):**
- Panel berdampingan
- Pintasan keyboard
- Dukungan pemindai barcode USB

---

## Panduan Langkah demi Langkah

### Langkah 1: Akses Stok Masuk

1. Buka aplikasi Kelola
2. Ketuk **"Stok Masuk"** dari menu utama, ATAU
3. Ketuk tombol **"+"** → **"Stok Masuk"**

<!-- TODO: Screenshot - Navigation to Stock In -->

### Langkah 2: Pilih Produk

**Metode A: Jelajahi dan Ketuk**
1. Gulir katalog produk (panel kiri)
2. Gunakan filter kategori untuk mempersempit
3. Ketuk produk untuk menambahkan ke panel kanan

**Metode B: Cari**
1. Ketuk bilah pencarian
2. Ketik nama produk
3. Ketuk produk dari hasil

**Metode C: Pindai Barcode (Tercepat)**
1. Ketuk ikon **"Pindai"**
2. Pindai barcode produk
3. Produk otomatis ditambahkan ke pilihan

<!-- TODO: Screenshot - Product selection with all three methods -->

> **💡 Tip Pro:** Anda dapat menambahkan beberapa produk sebelum melanjutkan ke entri jumlah.

### Langkah 3: Masukkan Jumlah

Untuk setiap produk di panel kanan:

1. Ketuk **field jumlah**
2. Masukkan jumlah yang diterima:
   - Gunakan tombol **+ / -** untuk penyesuaian kecil
   - Ketik langsung untuk angka besar
3. Jumlah diperbarui otomatis

**Tips Jumlah:**
- Gunakan unit pengukuran Anda (pieces, kg, box)
- Konsisten dengan cara Anda menjual
- Catatan: "5 box" vs "5 pieces" penting!

### Langkah 4: Atur Harga Beli (Opsional tapi Direkomendasikan)

Lacak berapa yang Anda bayar untuk menghitung laba.

1. Ketuk **field harga** (menunjukkan ikon pensil)
2. Masukkan harga beli per unit
3. Ketuk **Simpan**

**Mengapa Ini Penting:**
- Perhitungan laba yang akurat
- Pelacakan Harga Pokok Penjualan (HPP)
- Riwayat perubahan harga

> **Catatan:** Melihat harga beli memerlukan izin `view_buying_price`. Staf tanpa izin ini hanya akan melihat harga jual.

<!-- TODO: Screenshot - Setting buying price -->

### Langkah 5: Pilih Supplier (Direkomendasikan)

Lacak dari siapa Anda membeli.

1. Ketuk **"Pilih Supplier"** di atas
2. Opsi:
   - **Pilih yang ada**: Cari daftar supplier Anda
   - **Tambah baru**: Ketuk "+ Supplier Baru"
3. Supplier ditautkan ke transaksi

**Menambahkan Supplier Baru:**
1. Ketuk **"+ Supplier Baru"**
2. Masukkan:
   - Nama supplier (wajib)
   - Nomor telepon (opsional)
   - Email (opsional)
   - Alamat (opsional)
3. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Supplier selection and creation -->

> **Manfaat:** Lacak pembelian per supplier, kelola hubungan vendor, sederhanakan pemesanan ulang.

### Langkah 6: Atur Tanggal Transaksi (Jika Diperlukan)

Default adalah hari ini. Ubah untuk:
- Mencatat pembelian masa lalu
- Pembukuan backdated
- Periode akuntansi berbeda

1. Ketuk **field tanggal** (kanan atas)
2. Pilih tanggal dari kalender
3. Pilih waktu jika perlu
4. Ketuk **"Konfirmasi"**

> **Catatan:** Mengedit tanggal mungkin memerlukan izin pemilik/admin tergantung pada pengaturan Anda.

### Langkah 7: Tambahkan Catatan Referensi

Tambahkan konteks untuk referensi di masa depan:

- **Nomor invoice**: "INV-2024-00123"
- **Nomor PO**: "PO-45678"
- **Catatan pengiriman**: "Diterima via FedEx"
- **Catatan kondisi**: "2 item rusak"

1. Gulir ke field **Catatan** (bawah)
2. Ketik informasi referensi
3. Maks 200 karakter

<!-- TODO: Screenshot - Notes field with example -->

### Langkah 8: Tinjau dan Kirim

Periksa semuanya sebelum menyimpan:

| Periksa | Mengapa Penting |
|---------|-----------------|
| Produk benar? | Item salah = kesalahan persediaan |
| Jumlah akurat? | Mempengaruhi level stok |
| Harga dimasukkan? | Dampak pada perhitungan laba |
| Supplier dipilih? | Melacak riwayat vendor |
| Tanggal benar? | Mempengaruhi periode pelaporan |

**Kirim:**
1. Tinjau ringkasan di bawah:
   - Total produk (item unik)
   - Total jumlah (semua unit)
   - Total harga beli (jika terlihat)
2. Ketuk **"Kirim"**
3. Konfirmasi sukses muncul

<!-- TODO: Screenshot - Summary bar with all totals -->

✅ **Cek Hasil:**
- Kuantitas stok meningkat
- Transaksi tersimpan ke Riwayat
- Laporan Stok diperbarui
- Riwayat supplier diperbarui

---

## Skenario Khusus

### Pengiriman Parsial

Saat supplier mengirimkan sebagian dari pesanan Anda:

1. Catat hanya item yang diterima
2. Tambahkan catatan: "Pengiriman parsial, sisa 50 unit diharapkan 15 Jan"
3. Buat Stok Masuk baru nanti untuk item yang tersisa

### Menangani Barang Rusak

Jika beberapa item tiba dalam kondisi rusak:

**Opsi A: Catat semua, catat kerusakan**
1. Masukkan total jumlah yang diterima
2. Di catatan: "5 unit rusak, diklaim dengan supplier"
3. Buat Stok Keluar nanti untuk item yang rusak

**Opsi B: Catat hanya item yang bagus**
1. Masukkan hanya jumlah yang dapat digunakan
2. Jangan bayar untuk item yang rusak
3. Transaksi terpisah untuk pengganti

### Pengiriman Multi-Supplier

Jika pengiriman berisi item dari beberapa supplier:

1. Buat **transaksi Stok Masuk terpisah**
2. Satu per supplier
3. Menjaga kebersihan akuntansi

### Retur ke Stok

Saat pelanggan mengembalikan item:

1. Buat Stok Masuk
2. Pilih produk yang dikembalikan
3. Tambahkan catatan: "Retur pelanggan - [Nama Pelanggan] - [Alasan]"
4. Opsional: Tautkan ke penjualan asli di catatan

---

## Praktik Terbaik Stok Masuk

### Untuk Akurasi

✅ **Hitung sebelum memasukkan**
- Hitung fisik item
- Bandingkan dengan catatan pengiriman
- Kemudian masukkan di Kelola

✅ **Periksa segera**
- Verifikasi kualitas saat tiba
- Catat kerusakan segera
- Selesaikan perbedaan dengan supplier

✅ **Gunakan nomor referensi**
- Selalu tautkan ke invoice/PO
- Rekonsiliasi lebih mudah
- Jejak audit

### Untuk Efisiensi

✅ **Pemindaian barcode**
- Gunakan untuk pengiriman besar
- Jauh lebih cepat dari pencarian manual
- Mengurangi kesalahan

✅ **Pendekatan template**
- Pesanan umum = entri serupa
- Salin pola dari riwayat
- Latih staf pada alur kerja tipikal

✅ **Waktu teratur**
- Tetapkan waktu penerimaan tertentu
- Batch entri jika memungkinkan
- Jangan biarkan backlog menumpuk

### Untuk Pelacakan Biaya

✅ **Selalu masukkan harga beli**
- Bahkan jika mirip dengan terakhir kali
- Harga sering berubah
- Penting untuk laporan laba

✅ **Sertakan semua biaya**
- Biaya produk
- Pengiriman/freight
- Pajak dan bea
- Biaya landed penuh jika memungkinkan

---

## Mengelola Riwayat Stok Masuk

### Melihat Entri Masa Lalu

1. Pergi ke **Riwayat** (nav bawah)
2. Ketuk **Filter** → Pilih **"Stok Masuk"**
3. Terapkan rentang tanggal jika perlu
4. Ketuk transaksi apa pun untuk detail

### Mengedit Stok Masuk

**Kika diizinkan (Pemilik/Admin):**
1. Buka transaksi dari Riwayat
2. Ketuk **"Edit"**
3. Ubah field sesuai kebutuhan
4. Simpan perubahan

> **⚠️ Peringatan:** Mengedit mempengaruhi level persediaan dan laporan. Edit dengan hati-hati!

### Menghapus Stok Masuk

**Jika salah masuk:**
1. Buka transaksi
2. Ketuk **"Hapus"** (menu tiga titik)
3. Konfirmasi penghapusan
4. Stok otomatis disesuaikan kembali

> **Catatan:** Menghapus menghilangkan transaksi sepenuhnya. Pertimbangkan untuk mengedit sebagai gantinya jika Anda perlu menyimpan catatan.

---

## Pemecahan Masalah

### "Produk tidak ditemukan"
- Produk mungkin belum ada — tambahkan terlebih dahulu
- Periksa ejaan di pencarian
- Coba cari berdasarkan SKU/barcode

### "Tidak dapat mengatur harga beli"
- Memerlukan izin `view_buying_price`
- Hubungi admin/owner Anda
- Langganan mungkin membatasi fitur ini

### "Stok tidak diperbarui"
- Periksa koneksi internet
- Sinkronisasi mungkin tertunda
- Tarik ke bawah untuk menyegarkan

### "Supplier tidak ada di daftar"
- Tambahkan supplier baru selama Stok Masuk
- Atau pergi ke bagian Suppliers terlebih dahulu
- Periksa ejaan saat mencari

### "Peringatan transaksi duplikat"
- Transaksi serupa baru-baru ini dibuat
- Verifikasi ini adalah pengiriman baru
- Periksa apakah Anda secara tidak sengaja menduplikasi

---

## FAQ

**T: Bisakah saya mencatat stok masuk tanpa supplier?**
J: Ya, supplier adalah opsional. Tetapi melacak supplier membantu dengan manajemen vendor dan pemesanan ulang.

**T: Bagaimana jika saya tidak tahu harga beli?**
J: Anda dapat membiarkannya kosong, tetapi laporan laba Anda tidak akan akurat. Masukkan harga estimasi atau perbarui nanti.

**T: Bisakah saya menambahkan produk selama stok masuk?**
J: Ya! Jika produk tidak ada, Anda dapat membuatnya dengan cepat tanpa meninggalkan layar Stok Masuk.

**T: Bagaimana cara menangani retur ke supplier?**
J: Gunakan Stok Keluar dengan efek negatif, atau buat jenis transaksi "Retur ke Supplier" tertentu (jika tersedia).

**T: Bisakah saya mengimpor stok masuk massal dari Excel?**
J: Ya, gunakan antarmuka web di web.kelola.co untuk impor CSV dari resi stok besar.

**T: Apa perbedaan antara Stok Masuk dan Audit Stok?**
J: Stok Masuk menambah persediaan (menerima). Audit Stok memperbaiki persediaan agar sesuai dengan hitungan fisik (menyesuaikan).


