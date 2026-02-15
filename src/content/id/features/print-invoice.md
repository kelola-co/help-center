---
title: "Mencetak dan Membagikan Invoice"
excerpt: "Panduan lengkap untuk mencetak struk dan membagikan invoice. Pelajari tentang pengaturan printer, konfigurasi invoice, invoice PDF A4, dan pencetakan struk thermal."
readingTime: 6
lastUpdated: "2026-02-15"
category: "features"
difficulty: "beginner"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan mampu:
- Mengatur dan menghubungkan printer thermal Bluetooth
- Mengkonfigurasi tampilan dan konten invoice
- Mencetak struk thermal (58mm dan 80mm)
- Membuat dan membagikan invoice PDF A4
- Menyesuaikan footer dan branding struk

---

## Jenis Invoice

Kelola menyediakan dua jenis invoice untuk kebutuhan berbeda:

| Jenis | Terbaik Untuk | Format | Berbagi |
|-------|---------------|--------|---------|
| **Struk Thermal** | Struk pelanggan cepat, POS retail | Kertas thermal 58mm atau 80mm | Printer Bluetooth |
| **Invoice A4** | Invoice formal, catatan akuntansi | PDF A4 | Bagikan sebagai PDF |

---

## Printer yang Didukung

### Printer Struk Thermal

Kelola mendukung printer thermal Bluetooth yang menggunakan perintah ESC/POS:

**Ukuran Kertas:**
- **58mm** (2 inci) - Struk ringkas
- **80mm** (3 inci) - Struk retail standar

**Persyaratan Printer:**
- Konektivitas Bluetooth
- Dukungan perintah ESC/POS
- Teknologi pencetakan thermal

**Printer yang Direkomendasikan:**
- Printer thermal Bluetooth portabel
- Printer POS/kasir yang umum digunakan di restoran dan retail
- Tersedia di marketplace mulai dari ~Rp200.000

> **Catatan:** Printer USB dan jaringan (Wi-Fi/LAN) saat ini tidak didukung untuk aplikasi mobile.

---

## Menghubungkan Printer Anda

### Langkah 1: Memasangkan Printer

1. Nyalakan printer thermal Bluetooth Anda
2. Di perangkat Anda, buka **Pengaturan → Bluetooth**
3. Cari dan pasangkan dengan printer Anda
4. Pastikan printer muncul di daftar perangkat yang dipasangkan

### Langkah 2: Memberikan Izin

Kelola memerlukan izin berikut untuk mencetak:
- **Bluetooth** - Untuk menemukan dan menghubungkan ke printer
- **Lokasi** - Diperlukan oleh Android untuk pemindaian Bluetooth
- **Penyimpanan** - Untuk memproses gambar struk

### Langkah 3: Mencetak Struk Pertama Anda

1. Buka transaksi **Stok Keluar (Penjualan)** yang selesai
2. Ketuk **Lihat Invoice**
3. Pilih tab **Struk**
4. Ketuk **Cetak**
5. Pilih printer yang dipasangkan dari daftar
6. Pilih ukuran kertas (58mm atau 80mm)
7. Struk akan tercetak otomatis

---

## Konfigurasi Invoice

Sesuaikan bagaimana struk dan invoice Anda muncul bagi pelanggan.

### Mengakses Pengaturan Invoice

1. Buka tampilan invoice transaksi apa pun
2. Ketuk **Pengaturan Struk**
3. Sesuaikan opsi di bawah
4. Ketuk **Simpan**

### Opsi Konfigurasi

| Pengaturan | Deskripsi | Default |
|------------|-----------|---------|
| **Sembunyikan Alamat Pelanggan** | Hapus alamat pelanggan dari struk | Mati |
| **Sembunyikan Logo Bisnis** | Hapus logo bisnis Anda | Mati |
| **Sembunyikan Footer Kelola** | Hapus teks "Dibuat oleh kelola.co" | Mati |
| **Posisi Logo** | Tempatkan logo di atas atau bawah | Bawah |
| **Teks Footer** | Tambahkan pesan kustom (maks 200 karakter) | Kosong |

### Opsi Posisi Logo

**Posisi Atas:**
- Logo dan nama bisnis muncul di bagian atas struk
- Tampilan profesional untuk struk formal

**Posisi Bawah (Default):**
- Logo muncul setelah detail transaksi
- Umum untuk struk POS retail

### Ide Footer Kustom

- "Terima kasih atas bisnis Anda!"
- "Ikuti kami di Instagram @bisnisanda"
- "Pengembalian diterima dalam 7 hari dengan struk"
- Jam operasional atau info kontak bisnis Anda

---

## Fitur Struk Thermal

### Apa yang Termasuk

**Header:**
- Logo dan nama bisnis
- Nama pelanggan
- Tanggal dan waktu transaksi
- Label "STRUK"

**Detail Item:**
- Nama produk (diurutkan alfabetis)
- Jumlah × Harga satuan
- Total per baris

**Ringkasan Keuangan:**
- Subtotal
- Biaya tambahan (jika ada)
- Diskon (jika ada)
- **Total**
- Jumlah dibayar (jika pembayaran parsial)
- Sisa saldo (jika belum lunas)

**Footer:**
- Metode pembayaran
- Nama staf yang memproses penjualan
- Catatan transaksi
- Teks footer kustom
- Branding Kelola (opsional)

### Perbedaan Ukuran Kertas

| Fitur | 58mm | 80mm |
|-------|------|------|
| Ukuran teks | Lebih kecil | Standar |
| Lebar nama produk | Lebih sempit | Lebih lebar |
| Terbaik untuk | Ruang terbatas | Retail standar |

---

## Invoice A4 PDF

Buat invoice A4 profesional untuk transaksi formal atau catatan akuntansi.

### Fitur

**Tata Letak Profesional:**
- Format A4 yang bersih dan terstruktur
- Nomor invoice dan tanggal terbit
- Detail pihak Dari/Kepada

**Informasi Bisnis:**
- Nama dan alamat bisnis Anda
- Logo bisnis
- Nama dan alamat pelanggan

**Detail Keuangan:**
- Daftar produk itemized dengan jumlah
- Harga satuan dan total per baris
- Subtotal, biaya tambahan, diskon
- **Total akhir**
- Status pembayaran (lunas/parsial/belum)

**Bagian Detail Bank:**
- Nama bank
- Nomor rekening
- Nama pemilik rekening
- Nomor routing / Kode sortir / BSB / IBAN
- Informasi mata uang

**Fitur Tambahan:**
- Bagian catatan
- Dukungan multi-bahasa (deteksi otomatis)
- Dukungan RTL (Kanan ke Kiri) untuk Arab
- Multi-halaman untuk invoice panjang

### Membagikan Invoice A4

1. Buka tampilan invoice transaksi
2. Pilih tab **Invoice (Faktur)**
3. Tunggu PDF dibuat
4. Ketuk **Bagikan**
5. Pilih metode berbagi Anda (WhatsApp, Email, dll.)

> **Catatan:** Pembuatan invoice A4 memerlukan koneksi internet untuk memuat font.

---

## Berbagi Struk

### Bagikan sebagai Gambar

Untuk berbagi cepat via aplikasi pesan:

1. Buka tampilan struk
2. Ketuk **Bagikan**
3. Struk diambil sebagai gambar PNG
4. Pilih aplikasi berbagi Anda

**Terbaik untuk:**
- Pesan WhatsApp/Telegram
- Lampiran email
- Media sosial

### Bagikan PDF A4

Untuk dokumentasi formal:

1. Buka tab Invoice (Faktur)
2. Tunggu pembuatan PDF
3. Ketuk **Bagikan**
4. PDF mencakup detail bisnis dan info bank Anda

**Terbaik untuk:**
- Catatan akuntansi
- Invoice pelanggan
- Dokumentasi pajak

---

## Pemecahan Masalah

### Printer Tidak Ditemukan

**Periksa:**
- Printer menyala
- Bluetooth aktif di perangkat Anda
- Printer dipasangkan di pengaturan perangkat
- Izin lokasi diberikan (Android)

**Solusi:**
1. Segarkan daftar printer
2. Pasangkan ulang printer di pengaturan perangkat
3. Restart aplikasi Kelola

### Masalah Kualitas Cetak

**Teks pudar:**
- Periksa kualitas kertas thermal
- Pastikan kertas dimuat dengan benar
- Bersihkan head printer

**Teks terpotong:**
- Pilih ukuran kertas yang benar (58mm vs 80mm)
- Periksa lebar kertas cocok dengan pengaturan

### Tidak Dapat Mencetak

**Di Android:**
- Berikan semua izin yang diminta
- Aktifkan layanan lokasi
- Coba pilih printer lagi

**Di iOS:**
- Aktifkan Bluetooth di Pengaturan
- Pastikan printer mendukung Bluetooth iOS

### Invoice A4 Tidak Dapat Dibuat

- Periksa koneksi internet
- Coba muat ulang tab
- Hubungi dukungan jika font gagal dimuat

---

## Praktik Terbaik

### Untuk Bisnis Retail

1. **Gunakan printer 80mm** untuk struk retail standar
2. **Aktifkan logo** untuk pengenalan merek
3. **Tambahkan footer kustom** dengan media sosial atau pesan terima kasih
4. **Cetak segera** setelah setiap penjualan

### Untuk Bisnis Jasa

1. **Gunakan invoice A4** untuk penagihan formal
2. **Isi detail bank** untuk pembayaran pelanggan yang mudah
3. **Sertakan catatan** untuk deskripsi layanan
4. **Bagikan PDF** via email untuk catatan

### Manajemen Struk

- Cetak struk duplikat untuk transaksi bernilai tinggi
- Bagikan salinan digital untuk catatan pelanggan
- Gunakan nomor invoice untuk pelacakan (muncul di A4)

---

## FAQ

**T: Bisakah saya menggunakan printer USB?**
J: Saat ini, hanya printer thermal Bluetooth yang didukung untuk mobile printing. Gunakan versi web (web.kelola.co) untuk dukungan printer USB.

**T: Bisakah saya mencetak dari versi web?**
J: Ya, versi web mendukung pencetakan ke printer apa pun yang terhubung menggunakan fungsi cetak browser Anda.

**T: Bagaimana cara mengubah format nomor invoice?**
J: Nomor invoice dibuat otomatis. Hubungi dukungan untuk permintaan format kustom.

**T: Bisakah saya menambahkan NPWP ke invoice?**
J: NPWP dapat ditambahkan ke profil bisnis Anda. Ini akan muncul di invoice A4 secara otomatis.

**T: Mengapa pencetakan memerlukan izin lokasi?**
A: Android memerlukan izin lokasi untuk penemuan perangkat Bluetooth. Kelola tidak melacak lokasi Anda.

**T: Bisakah saya mencetak dalam bahasa berbeda?**
J: Struk otomatis menggunakan pengaturan bahasa aplikasi Anda. Invoice A4 mendukung banyak bahasa termasuk Arab (RTL), Thai, Cina, dan lainnya.

**T: Bagaimana jika printer saya tidak terdaftar?**
J: Pastikan dipasangkan di pengaturan Bluetooth perangkat terlebih dahulu. Jika masih tidak terdaftar, printer Anda mungkin tidak mendukung standar ESC/POS.

---

## Artikel Terkait

- [Mencatat Penjualan →](../sales/recording-sales)
- [Mengelola Riwayat Transaksi →](../sales/managing-transactions)
- [Manajemen Pelanggan →](../customers/adding-customers)
- [Pengaturan Metode Pembayaran →](../payment-methods/adding-payment-methods)
