---
title: "Mengelola Riwayat Transaksi"
excerpt: "Panduan lengkap untuk menemukan, memfilter, mengedit, dan mengelola semua transaksi bisnis Anda di Kelola. Pelajari teknik pencarian, metode ekspor, dan alur kerja transaksi."
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

Bagian **History** adalah log aktivitas bisnis lengkap Anda. Setiap pergerakan stok tercatat di sini:

| Tipe Transaksi | Kapan Muncul |
|----------------|--------------|
| **Stock In** | Inventori diterima |
| **Stock Out** | Penjualan dilakukan |
| **Stock Audit** | Penyesuaian inventori |
| **Transfer** | Antar bisnis |
| **Expense** | Pengeluaran bisnis |

---

## Mengakses Riwayat Transaksi

1. Ketuk **"History"** di navigasi bawah
2. Lihat daftar semua transaksi (terbaru pertama)
3. Default menampilkan 30 hari terakhir

<!-- TODO: Screenshot - History main screen -->

---

## Menemukan Transaksi Tertentu

### Pencarian Cepat

Cara tercepat untuk menemukan transaksi:

1. Ketuk **bilah pencarian** di atas
2. Ketik salah satu:
   - Nama produk ("Coffee Beans")
   - Nama pelanggan ("John Smith")
   - ID Transaksi (jika diketahui)
   - Jumlah ("50000")
3. Hasil tersaring secara instan

<!-- TODO: Screenshot - Search in History -->

### Filter Lanjutan

Ketuk **"Filter"** untuk menyempitkan hasil:

**Berdasarkan Tipe Transaksi:**
- Stock In saja
- Stock Out saja
- Stock Audit
- Semua tipe

**Berdasarkan Rentang Tanggal:**
- Hari ini
- Kemarin
- 7 hari terakhir
- 30 hari terakhir
- Rentang kustom (pilih tanggal mulai dan akhir)

**Berdasarkan Status Pembayaran:**
- Paid
- Partial
- Unpaid
- Semua

**Berdasarkan Pelanggan:**
- Pilih pelanggan tertentu
- Atau cari nama pelanggan

**Berdasarkan Staf:**
- Transaksi oleh karyawan tertentu
- Berguna untuk auditing

<!-- TODO: Screenshot - Filter panel open -->

### Mengurutkan Hasil

Ubah urutan sortir:

- **Terbaru pertama** (default)
- **Terlama pertama**
- **Jumlah tertinggi**
- **Jumlah terendah**
- **Berdasarkan nama pelanggan**

---

## Melihat Detail Transaksi

### Kartu Transaksi

Setiap transaksi menampilkan:
- **Ikon tipe** (in/out/audit/expense)
- **Tanggal dan waktu**
- **Nama pelanggan** (jika berlaku)
- **Ringkasan produk**
- **Jumlah total**
- **Badge status pembayaran**

<!-- TODO: Screenshot - Transaction list items -->

### Tampilan Detail

Ketuk transaksi apa pun untuk melihat:

**Informasi Header:**
- ID Transaksi
- Tanggal dan waktu
- Staf yang membuatnya
- Tipe transaksi

**Detail Produk:**
- Daftar semua produk
- Jumlah
- Harga satuan
- Subtotal

**Ringkasan Keuangan:**
- Jumlah total
- Jumlah dibayar
- Saldo terutang (jika ada)
- Metode pembayaran

**Info Tambahan:**
- Detail pelanggan
- Catatan
- Supplier (untuk Stock In)
- Nomor referensi

<!-- TODO: Screenshot - Transaction detail view -->

### Tindakan dari Tampilan Detail

Tindakan yang tersedia (berbeda berdasarkan izin):
- **Edit** — Modifikasi transaksi
- **Delete** — Hapus transaksi
- **Print** — Cetak struk/invoice
- **Share** — Kirim via WhatsApp/email
- **Duplicate** — Salin untuk transaksi baru
- **Return** — Proses return/refund

---

## Mengedit Transaksi

### Kapan Anda Bisa Mengedit

Pengeditan diizinkan untuk:
- Transaksi terbaru (batas waktu bervariasi berdasarkan pengaturan)
- Transaksi Anda sendiri (jika izin diaktifkan)
- Transaksi apa pun (owner/admin dengan izin penuh)

### Apa yang Bisa Anda Edit

| Bidang | Dapat Diedit? | Catatan |
|--------|---------------|---------|
| Jumlah produk | ✅ Ya | Mempengaruhi stok |
| Harga | ✅ Ya | Mempengaruhi pendapatan |
| Pelanggan | ✅ Ya | Memperbarui keterkaitan |
| Status pembayaran | ✅ Ya | Memperbarui piutang |
| Catatan | ✅ Ya | Tidak berdampak sistem |
| Tanggal | ⚠️ Terbatas | Mungkin perlu admin |
| Staf | ❌ Tidak | Pembuat dipertahankan |

### Cara Mengedit

1. Buka detail transaksi
2. Ketuk **"Edit"** (kanan atas)
3. Modifikasi bidang sesuai kebutuhan
4. Review perubahan
5. Ketuk **"Simpan"**

<!-- TODO: Screenshot - Editing transaction -->

> **⚠️ Penting:** Pengeditan memengaruhi:
> - Level inventori (stok dihitung ulang)
> - Laporan keuangan (pendapatan diperbarui)
> - Saldo pelanggan (piutang disesuaikan)
>
> Edit dengan hati-hati dan dokumentasikan alasan di catatan.

---

## Menghapus Transaksi

### Kapan Menghapus vs. Mengedit

**Hapus saat:**
- Transaksi benar-benar salah
- Entri duplikat
- Transaksi uji coba

**Edit saat:**
- Koreksi minor diperlukan
- Jumlah sedikit salah
- Pelanggan salah

### Cara Menghapus

1. Buka detail transaksi
2. Ketuk menu tiga titik
3. Pilih **"Hapus"**
4. Konfirmasi penghapusan
5. (Opsional) Masukkan alasan untuk audit log

> **⚠️ Peringatan:**
> - Penghapusan bersifat permanen
> - Level stok dikembalikan
> - Catatan keuangan disesuaikan
> - Tindakan mungkin dicatat

### Pemulihan

Transaksi yang dihapus:
- Tidak dapat dipulihkan oleh pengguna
- Mungkin dapat dipulihkan oleh support (hubungi dalam 30 hari)
- Pertimbangkan untuk mengekspor data sebelum penghapusan besar

---

## Mengekspor Data Transaksi

### Opsi Ekspor

**Untuk akuntansi:**
1. Terapkan filter (rentang tanggal, tipe)
2. Ketuk **"Export"**
3. Pilih format:
   - **Excel/CSV** — Untuk spreadsheet
   - **PDF** — Untuk catatan
   - **JSON** — Untuk developer
4. Pilih bidang untuk disertakan
5. Unduh file

<!-- TODO: Screenshot - Export dialog -->

### Bidang Ekspor yang Tersedia

- ID Transaksi
- Tanggal dan waktu
- Tipe (In/Out/Audit)
- Produk (dengan jumlah)
- Nama pelanggan
- Jumlah total
- Status pembayaran
- Metode pembayaran
- Anggota staf
- Catatan

### Ekspor Terjadwal

**Untuk pelaporan rutin:**

Beberapa paket mendukung:
- Ekspor email mingguan
- Laporan otomatis bulanan
- Akses API untuk integrasi

Hubungi support untuk mengatur.

---

## Alur Kerja Transaksi

### Rekonsiliasi Harian

**Rutinitas akhir hari:**

1. Buka History
2. Filter "Hari ini"
3. Review semua transaksi:
   - Verifikasi jumlah cocok dengan kas register
   - Periksa entri yang hilang
   - Catat ketidaksesuaian apa pun
4. Ekspor untuk catatan
5. Selesaikan masalah apa pun

### Review Mingguan

**Pemeriksaan kesehatan bisnis:**

1. Filter "7 hari terakhir"
2. Urutkan berdasarkan jumlah (tinggi ke rendah)
3. Review:
   - Penjualan teratas
   - Transaksi yang tidak biasa
   - Pembayaran tertunda
4. Tindak lanjuti piutang

### Pelaporan Bulanan

**Ringkasan keuangan:**

1. Atur rentang tanggal kustom (bulan)
2. Ekspor semua transaksi
3. Impor ke software akuntansi
4. Rekonsiliasi dengan rekening bank

---

## Troubleshooting Masalah Umum

### "Transaksi tidak ditemukan"
- Periksa rentang tanggal di filter
- Coba istilah pencarian berbeda
- Verifikasi transaksi tidak dihapus
- Periksa apakah melihat bisnis yang benar (pengguna multi-bisnis)

### "Tidak dapat mengedit transaksi"
- Batas waktu pengeditan mungkin telah berakhir
- Izin tidak mencukupi
- Transaksi sudah diekspor ke akuntansi (terkunci)
- Hubungi owner/admin untuk bantuan

### "Transaksi duplikat"
- Cari jumlah/tanggal yang mirip
- Hapus yang salah
- Tambahkan catatan menjelaskan koreksi
- Review proses untuk mencegah duplikat di masa depan

### "Pelanggan yang salah terlampir"
- Edit transaksi untuk mengubah pelanggan
- Atau hapus dan buat ulang
- Riwayat pelanggan diperbarui otomatis

### "Ekspor tidak berfungsi"
- Periksa koneksi internet
- Kurangi rentang tanggal (coba potongan lebih kecil)
- Bersihkan cache aplikasi
- Coba format berbeda

---

## FAQ

**Q: Berapa lama riwayat transaksi disimpan?**
A: Selamanya! Kelola menyimpan semua riwayat transaksi selama akun Anda aktif.

**Q: Bisakah saya melihat transaksi dari semua bisnis saya?**
A: Tidak, History per-bisnis. Beralih bisnis di menu Account untuk melihat lokasi lain.

**Q: Bisakah staf melihat semua transaksi atau hanya milik mereka sendiri?**
A: Tergantung izin. Staf dengan `view_all_transactions` dapat melihat semuanya; jika tidak hanya milik mereka sendiri.

**Q: Bagaimana cara menemukan transaksi dari bulan lalu?**
A: Gunakan filter rentang tanggal kustom, atau cari berdasarkan nama pelanggan/produk.

**Q: Bisakah saya menghapus transaksi secara massal?**
A: Tidak disarankan. Penghapusan massal dibatasi. Hubungi support jika benar-benar diperlukan.

**Q: Apa perbedaan antara Delete dan Return?**
A: Delete menghapus transaksi sepenuhnya. Return membuat transaksi pembalik sambil menyimpan catatan asli.

**Q: Bisakah saya melampirkan file ke transaksi?**
A: Saat ini tidak, tetapi Anda dapat menyertakan referensi file (nomor invoice, ID foto) di catatan.

---

## Artikel Terkait

- [Mencatat Penjualan →](./recording-sales)
- [Mencatat Stock In →](../stock/record-stock-in)
- [Menangani Return →](../sales/handling-returns)
- [Manajemen Pelanggan →](../customers/adding-customers)
- [Memahami Laporan →](../reports/understanding-reports)
- [Izin Staf →](../staff/understanding-roles)
