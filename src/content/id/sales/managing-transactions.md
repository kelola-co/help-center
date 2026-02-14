---
title: "Mengelola Riwayat Transaksi"
excerpt: "Panduan lengkap menemukan, memfilter, mengedit, dan mengelola semua transaksi bisnis di Kelola. Pelajari teknik pencarian, metode ekspor, dan alur kerja transaksi."
readingTime: 6
lastUpdated: "2026-02-15"
category: "sales"
difficulty: "intermediate"
audience: "all"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan dapat:
- Menemukan transaksi apa pun dengan cepat
- Memfilter dan mengurutkan riwayat transaksi
- Mengedit dan memperbaiki transaksi
- Mengekspor data transaksi
- Memahami detail transaksi

---

## Memahami Riwayat Transaksi

Bagian **Riwayat** adalah log aktivitas bisnis lengkap Anda. Setiap pergerakan stok dicatat di sini:

| Jenis Transaksi | Kapan Muncul |
|-----------------|--------------|
| **Stock In** | Inventaris diterima |
| **Stock Out** | Penjualan dibuat |
| **Stock Audit** | Penyesuaian inventaris |
| **Transfer** | Antar bisnis |
| **Expense** | Pengeluaran bisnis |

---

## Mengakses Riwayat Transaksi

1. Ketuk **"Riwayat"** di navigasi bawah
2. Lihat daftar semua transaksi (terbaru pertama)
3. Default menampilkan 30 hari terakhir

<!-- TODO: Screenshot - History main screen -->

---

## Menemukan Transaksi Tertentu

### Pencarian Cepat

Cara tercepat untuk menemukan transaksi:

1. Ketuk **bilah pencarian** di bagian atas
2. Ketik salah satu:
   - Nama produk ("Kopi Biji")
   - Nama pelanggan ("John Smith")
   - ID transaksi (jika diketahui)
   - Jumlah ("50000")
3. Hasil difilter secara instan

<!-- TODO: Screenshot - Search in History -->

### Pemfilteran Lanjutan

Ketuk **"Filter"** untuk mempersempit hasil:

**Berdasarkan Jenis Transaksi:**
- Stock In saja
- Stock Out saja
- Stock Audit
- Semua jenis

**Berdasarkan Rentang Tanggal:**
- Hari ini
- Kemarin
- 7 hari terakhir
- 30 hari terakhir
- Rentang kustom (pilih tanggal mulai dan selesai)

**Berdasarkan Status Pembayaran:**
- Lunas
- Sebagian
- Belum dibayar
- Semua

**Berdasarkan Pelanggan:**
- Pilih pelanggan tertentu
- Atau cari nama pelanggan

**Berdasarkan Staf:**
- Transaksi oleh karyawan tertentu
- Berguna untuk audit

<!-- TODO: Screenshot - Filter panel open -->

### Mengurutkan Hasil

Ubah urutan pengurutan:

- **Terbaru dulu** (default)
- **Terlama dulu**
- **Jumlah tertinggi**
- **Jumlah terendah**
- **Nama pelanggan**

---

## Melihat Detail Transaksi

### Kartu Transaksi

Setiap transaksi menampilkan:
- **Ikon jenis** (in/out/audit/expense)
- **Tanggal dan waktu**
- **Nama pelanggan** (jika berlaku)
- **Ringkasan produk**
- **Jumlah total**
- **Badge status pembayaran**

<!-- TODO: Screenshot - Transaction list items -->

### Tampilan Detail

Ketuk transaksi mana pun untuk melihat:

**Informasi Header:**
- ID transaksi
- Tanggal dan waktu
- Staf yang membuatnya
- Jenis transaksi

**Detail Produk:**
- Daftar semua produk
- Jumlah
- Harga Satuan
- Subtotal

**Ringkasan Finansial:**
- Jumlah total
- Jumlah yang dibayar
- Saldo jatuh tempo (jika ada)
- Metode pembayaran

**Info Tambahan:**
- Detail pelanggan
- Catatan
- Pemasok (untuk Stock In)
- Nomor referensi

<!-- TODO: Screenshot - Transaction detail view -->

### Aksi dari Tampilan Detail

Aksi yang tersedia (bervariasi berdasarkan izin):
- **Edit** — Modifikasi transaksi
- **Hapus** — Hapus transaksi
- **Cetak** — Cetak struk/faktur
- **Bagikan** — Kirim via WhatsApp/email
- **Duplikat** — Salin untuk transaksi baru
- **Retur** — Proses pengembalian/pengembalian dana

---

## Mengedit Transaksi

### Kapan Anda Dapat Mengedit

Mengedit diizinkan untuk:
- Transaksi terbaru (batas waktu bervariasi berdasarkan pengaturan)
- Transaksi Anda sendiri (jika izin diaktifkan)
- Transaksi apa pun (pemilik/admin dengan izin penuh)

### Apa yang Dapat Anda Edit

| Field | Dapat Diedit? | Catatan |
|-------|---------------|---------|
| Jumlah produk | ✅ Ya | Mempengaruhi stok |
| Harga | ✅ Ya | Mempengaruhi pendapatan |
| Pelanggan | ✅ Ya | Memperbarui tautan |
| Status pembayaran | ✅ Ya | Memperbarui piutang |
| Catatan | ✅ Ya | Tidak ada dampak sistem |
| Tanggal | ⚠️ Terbatas | Mungkin perlu admin |
| Staf | ❌ No | Pembuat dipertahankan |

### Cara Mengedit

1. Buka detail transaksi
2. Ketuk **"Edit"** (kanan atas)
3. Modifikasi bidang sesuai kebutuhan
4. Tinjau perubahan
5. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Editing transaction -->

> **⚠️ Penting:** Mengedit memengaruhi:
> - Tingkat inventaris (stok dihitung ulang)
> - Laporan keuangan (pendapatan diperbarui)
> - Saldo pelanggan (piutang disesuaikan)
>
> Edit dengan hati-hati dan dokumentasikan alasan di catatan.

---

## Menghapus Transaksi

### Kapan Menghapus vs. Mengedit

**Hapus ketika:**
- Transaksi sepenuhnya salah
- Entri duplikat
- Transaksi uji

**Edit ketika:**
- Koreksi minor diperlukan
- Jumlah sedikit salah
- Pelanggan salah

### Cara Menghapus

1. Buka detail transaksi
2. Ketuk menu tiga titik
3. Pilih **"Hapus"**
4. Konfirmasi penghapusan
5. (Opsional) Masukkan alasan untuk log audit

> **⚠️ Peringatan:**
> - Penghapusan permanen
> - Tingkat stok dipulihkan
> - Catatan keuangan disesuaikan
> - Tindakan mungkin dicatat

### Pemulihan

Transaksi yang dihapus:
- Tidak dapat dipulihkan oleh pengguna
- Dapat dipulihkan oleh dukungan (hubungi dalam 30 hari)
- Pertimbangkan mengekspor data sebelum penghapusan besar

---

## Mengekspor Data Transaksi

### Opsi Ekspor

**Untuk akuntansi:**
1. Terapkan filter (rentang tanggal, jenis)
2. Ketuk **"Ekspor"**
3. Pilih format:
   - **Excel/CSV** — Untuk spreadsheet
   - **PDF** — Untuk catatan
   - **JSON** — Untuk pengembang)
4. Pilih bidang yang akan disertakan
5. Unduh file

<!-- TODO: Screenshot - Export dialog -->

### Bidang Ekspor yang Tersedia

- ID transaksi
- Tanggal dan waktu
- Jenis (In/Out/Audit)
- Produk (dengan jumlah)
- Nama pelanggan
- Jumlah total
- Status pembayaran
- Metode pembayaran
- Anggota staf
- Catatan

### Ekspor Terjadwal

**Untuk pelaporan reguler:**

Beberapa paket mendukung:
- Ekspor email mingguan
- Laporan otomatis bulanan
- Akses API untuk integrasi

Hubungi dukungan untuk pengaturan.

---

## Alur Kerja Transaksi

### Rekonsiliasi Harian

**Rutinitas akhir hari:**

1. Pergi ke Riwayat
2. Filter "Hari ini"
3. Tinjau semua transaksi:
   - Verifikasi jumlah sesuai dengan kas register
   - Periksa entri yang hilang
   - Catat ketidaksesuaian apa pun
4. Ekspor untuk catatan
5. Atasi masalah apa pun

### Tinjauan Mingguan

**Pemeriksaan kesehatan bisnis:**

1. Filter "7 hari terakhir"
2. Urutkan berdasarkan jumlah (tinggi ke rendah)
3. Tinjau:
   - Penjualan teratas
   - Transaksi tidak biasa
   - Pembayaran tertunda
4. Tindaklanjuti piutang

### Pelaporan Bulanan

**Ringkasan keuangan:**

1. Atur rentang tanggal kustom (bulan)
2. Ekspor semua transaksi
3. Impor ke perangkat lunak akuntansi
4. Rekonsiliasi dengan laporan bank

---

## Memecahkan Masalah Umum

### "Transaksi tidak ditemukan"
- Periksa rentang tanggal dalam filter
- Coba istilah pencarian berbeda
- Verifikasi transaksi tidak dihapus
- Periksa apakah melihat bisnis yang benar (pengguna multi-bisnis)

### "Tidak dapat mengedit transaksi"
- Batas waktu pengeditan mungkin sudah habis
- Izin tidak memadai
- Transaksi sudah diekspor ke akuntansi (terkunci)
- Hubungi pemilik/admin untuk bantuan

### "Transaksi duplikat"
- Cari jumlah/tanggal serupa
- Hapus yang salah
- Tambahkan catatan menjelaskan perbaikan
- Tinjau proses untuk mencegah duplikat masa depan

### "Pelanggan terlampir salah"
- Edit transaksi untuk mengubah pelanggan
- Atau hapus dan buat ulang
- Riwayat pelanggan diperbarui secara otomatis

### "Ekspor tidak berfungsi"
- Periksa koneksi internet
- Kurangi rentang tanggal (coba bagian yang lebih kecil)
- Hapus cache aplikasi
- Coba format berbeda

---

## FAQ

**Q: Berapa lama riwayat transaksi disimpan?**
A: Selamanya! Kelola menyimpan semua riwayat transaksi selama akun Anda aktif.

**Q: Bisakah saya melihat transaksi dari semua bisnis saya?**
A: Tidak, Riwayat per-bisnis. Beralih bisnis di menu Akun untuk melihat lokasi lain.

**Q: Bisakah staf melihat semua transaksi atau hanya milik mereka?**
A: Tergantung pada izin. Staf dengan `view_all_transactions` dapat melihat semuanya; jika tidak, hanya milik mereka sendiri.

**Q: Bagaimana cara menemukan transaksi dari bulan lalu?**
A: Gunakan filter rentang tanggal kustom, atau cari berdasarkan nama produk/pelanggan.

**Q: Bisakah saya menghapus transaksi secara massal?**
A: Tidak disarankan. Penghapusan massal dibatasi. Hubungi dukungan jika benar-benar diperlukan.

**Q: Apa perbedaan antara Hapus dan Retur?**
A: Hapus menghapus transaksi sepenuhnya. Retur membuat transaksi pembalikan sambil menyimpan catatan asli.

**Q: Bisakah saya melampirkan file ke transaksi?**
A: Saat ini tidak, tetapi Anda dapat menyertakan referensi file (nomor faktur, ID foto) di catatan.

---

## Artikel Terkait

- [Mencatat Penjualan →](./recording-sales)
- [Mencatat Stock In →](../stock/record-stock-in)
- [Menangani Retur →](./handling-returns)
- [Manajemen Pelanggan →](../customers/adding-customers)
- [Memahami Laporan →](../reports/understanding-reports)
- [Izin Staf →](../staff/understanding-roles)
