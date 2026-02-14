---
title: " Menggunakan Pemindai Barcode di Kelola"
excerpt: "Panduan lengkap menggunakan pemindaian barcode di Kelola. Pelajari cara memindai produk untuk penjualan, manajemen stok, dan pencarian produk cepat."
readingTime: 5
lastUpdated: "2026-02-15"
category: "barcode"
difficulty: "beginner"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan dapat:
- Memindai barcode dengan perangkat mobile Anda
- Menggunakan pemindaian barcode untuk penjualan
- Memindai untuk operasi stok
- Memecahkan masalah pemindaian
- Mengatur alur kerja barcode

---

## Ringkasan Pemindaian Barcode

**Yang Dapat Anda Lakukan:**
- 📱 **Pemindaian mobile** — Gunakan kamera hp
- 🔍 **Pencarian produk** — Temukan produk secara instan
- ⚡ **Penjualan cepat** — Checkout cepat
- 📦 **Manajemen inventaris** — Entri stok cepat
- 🏷️ **Verifikasi produk** — Konfirmasi item yang benar

---

## Jenis Barcode yang Didukung

Kelola mendukung format barcode umum:

| Jenis | Format | Kasus Penggunaan |
|-------|--------|-----------------|
| **EAN-13** | 13 digit | Produk ritel global |
| **UPC-A** | 12 digit | Ritel Amerika Utara |
| **Code 128** | Alfanumerik | Kode internal, pengiriman |
| **Code 39** | Alfanumerik | Industri, pertahanan |
| **QR Code** | 2D | URL, informasi |

<!-- TODO: Screenshot - Barcode type examples -->

---

## Pemindaian Aplikasi Mobile

### Menggunakan Pemindaian Kamera

**Untuk penjualan dan stok:**

1. Buka **Stock Out** (atau Stock In)
2. Ketuk ikon **"Pindai"** (kamera)
3. Arahkan kamera ke barcode
4. Tahan hingga berbip
5. Produk otomatis ditambahkan ke daftar

**Tips keberhasilan:**
- ✅ Pencahayaan baik
- ✅ Tangan stabil
- ✅ Barcode jelas (tidak kusut)
- ✅ Cukup dekat memenuhi bingkai
- ❌ Hindari silau/naungan

<!-- TODO: Screenshot - Camera scanning interface -->

### Memindai Beberapa Item

**Mode pemindaian cepat:**

1. Jaga layar pindaian terbuka
2. Pindai item pertama
3. Segera pindai berikutnya
4. Item terakumulasi dalam daftar
5. Ketuk "Selesai" saat selesai

> **Tips pro:** Latih ritme — pindai, geser, pindai, geser.

### Entri Manual Cadangan

**Saat pemindaian gagal:**

1. Ketuk **"Masukkan Manual"**
2. Ketik nomor barcode
3. Ketuk **"Cari"**
4. Pilih produk

---

## Pemindaian Web (USB)

### Pengaturan

**Untuk desktop/laptop:**

1. Hubungkan pemindai barcode USB
2. Tunggu instalasi driver
3. Pemindai bertindak sebagai input keyboard
4. Tidak perlu perangkat lunak tambahan

### Menggunakan Pemindaian Web

**Di web.kelola.co:**

1. Buka Stock In/Out
2. Klik tombol **"Pindai Barcode"**
3. Pemindai berbip, produk muncul
4. Jumlah default ke 1
5. Sesuaikan jika perlu
6. Pindai item berikutnya

<!-- TODO: Screenshot - Web scanning interface -->

### Konfigurasi Pemindai

**Sebagian besar pemindai bekerja langsung.** Jika ada masalah:

1. Pastikan pemindai dalam mode "HID keyboard"
2. Periksa pengaturan akhiran (seharusnya kirim Enter)
3. Verifikasi jenis barcode diaktifkan
4. Coba dulu di editor teks

---

## Alur Kerja Pemindaian

### Checkout Cepat (Ritel)

**Skenario:** Pelanggan dengan beberapa item

```
1. Buka Stock Out
2. Ketuk Pindai
3. Pindai setiap item dengan cepat
4. Tinjau daftar
5. Pilih pelanggan (opsional)
6. Kirim penjualan
7. Cetak struk
```

**Waktu dihemat:** 50-70% vs pencarian manual

### Menerima Inventaris

**Skenario:** Pengiriman besar dari pemasok

```
1. Buka Stock In
2. Ketuk Pindai
3. Pindai setiap item saat dibongkar
4. Verifikasi jumlah sesuai dengan surat jalan
5. Kirim stock in
6. Atur di rak
```

**Manfaat:**
- Pembaruan inventaris real-time
- Tidak ada backlog kertas
- Deteksi ketidaksesuaian langsung

### Audit Stok

**Skenario:** Hitungan inventaris bulanan

```
1. Buka Stock Audit
2. Ketuk Pindai
3. Pindai setiap item di rak
4. Sistem menunjukkan jumlah yang diharapkan
5. Masukkan jumlah aktual
6. Pindah ke item berikutnya
```

**Akurasi:** Menghilangkan kesalahan entri manual

---

## Praktik Terbaik Barcode

### Pengaturan Produk

✅ **Tetapkan barcode unik**
- Satu barcode per SKU
- Tidak ada duplikat
- Format konsisten

✅ **Cetak label berkualitas**
- Jelas, kontras tinggi
- Ukuran yang tepat (min lebar 1,5cm)
- Material tahan lama
- Penempatan yang tepat

✅ **Test sebelum użycie**
- Pindai barcode baru
- Verifikasi produk benar
- Periksa semua jenis pemindai

### Operasi Harian

✅ **Kebersihan pemindai**
- Bersihkan lensa kamera secara teratur
- Bersihkan jendela pemindai
- Periksa kerusakan

✅ **Pencahayaan penting**
- Hindari silau langsung
- Pastikan pencahayaan cukup
- Sesuaikan sudut jika perlu

✅ **Rencana cadangan**
- Ketahui proses entri manual
- Jaga daftar produk dapat diakses
- Latih semua staf

---

## Pemecahan Masalah

### "Barcode tidak terpindai"

**Penyebab umum:**

| Masalah | Solusi |
|--------|--------|
| Pencahayaan buruk | Pindah ke area lebih terang |
| Barcode buram | Pegang kamera lebih stabil |
| Barcode rusak | Masukkan secara manual |
| Jenis barcode salah | Periksa dukungan format |
| Silau/refleksi | Sesuaikan sudut |
| Terlalu jauh/dekat | Temukan jarak optimal |

### "Produk salah ditemukan"

**Periksa:**
- Barcode ditetapkan ke produk benar
- Tidak ada barcode duplikat dalam sistem
- Pemindai membaca kode lengkap

**Perbaiki:**
1. Verifikasi barcode produk dalam sistem
2. Tetapkan ulang jika salah
3. Periksa duplikat

### "Pemindai tidak berfungsi (web)"

**Periksa:**
- Koneksi USB aman
- Pemindai menyala
- Mode benar (emulasi keyboard)
- Kursor di bidang pindaian

**Coba:**
- Port USB berbeda
- Restart browser
- Coba di notepad

### "Pemindaian lambat"

**Perbaikan:**
- Bersihkan lensa kamera
- Pencahayaan lebih baik
- Perbarui aplikasi
- Restart perangkat
- Periksa internet (untuk pencarian)

---

## Tips Lanjutan

### Impor Barcode Massal

**Mengatur banyak produk:**

1. Siapkan CSV dengan: Nama Produk, Barcode, Harga
2. Gunakan alat impor web
3. Unggah file
4. Verifikasi pemetaan
5. Impor

### Mencetak Barcode

**Buat barcode sendiri:**

- Gunakan perangkat lunak generator barcode
- Cetak pada lembar label
- Terapkan ke produk
- Pindai untuk memverifikasi

### Barcode Kustom

**Untuk produk tanpa kode produsen:**

1. Buat kode unik
2. Gunakan format SKU internal
3. Cetak dan terapkan label
4. Pindai di Kelola

---

## FAQ

**Q: Apakah saya memerlukan perangkat khusus untuk memindai?**
A: Tidak! Gunakan kamera hp Anda. Pemindai USB opsional untuk volume tinggi.

**Q: Bisakah saya memindai tanpa internet?**
A: Pencarian produk memerlukan internet. Pemindaian barcode berfungsi offline jika produk di-cache.

**Q: Bagaimana jika produk tidak memiliki barcode?**
A: Buat dan cetak label barcode Anda sendiri, atau gunakan pencarian manual.

**Q: Bisakah saya memindai beberapa barcode sekaligus?**
A: Tidak, pindai satu per satu. Tetapi Anda dapat memindai dengan cepat secara berurutan.

**Q: Apakah barcode berfungsi di semua perangkat saya?**
A: Ya! Barcode terikat pada produk, dapat diakses di mobile dan web.

**Q: Bisakah pelanggan memindai barcode produk saya?**
A: Hanya jika mereka memiliki akses ke sistem Kelola Anda. Untuk pemindaian pelanggan, gunakan katalog.

---

## Artikel Terkait

- [Menambah Produk dengan Barcode →](../products/adding-products)
- [Mencatat Stock In →](../stock/record-stock-in)
- [Mencatat Penjualan →](../sales/recording-sales)
- [Mencetak Label Barcode →](./printing-barcode-labels)
