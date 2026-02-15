---
title: "Memahami Peran dan Izin Pengguna"
excerpt: "Panduan lengkap tentang sistem izin Kelola. Pelajari tentang peran Owner, Admin, dan Staff, apa yang dapat dilakukan masing-masing, dan cara mengatur kontrol akses untuk tim Anda."
readingTime: 7
lastUpdated: "2026-02-15"
category: "staff"
difficulty: "intermediate"
audience: "owner"
---

## Apa yang Akan Anda Pelajari

Pada akhir panduan ini, Anda akan memahami:
- Tiga peran pengguna di Kelola
- Apa yang dapat dan tidak dapat dilakukan setiap peran
- Cara memberikan izin yang sesuai
- Praktik terbaik untuk kontrol akses tim
- Cara mengaudit dan mengelola aktivitas staf

---

## Ikhtisar Peran Pengguna

Kelola memiliki tiga peran bawaan yang dirancang untuk tanggung jawab berbeda:

| Peran | Terbaik Untuk | Tingkat Akses |
|-------|---------------|---------------|
| **Owner** | Pemilik bisnis, pendiri | Akses penuh |
| **Admin** | Manajer, supervisor | Akses diperluas |
| **Staff** | Karyawan, kasir, pekerja | Akses terbatas |

<!-- TODO: Screenshot - Roles comparison table/visual -->

---

## Peran Owner

### Siapa yang Seharusnya Menjadi Owner
- Pendiri/pemilik bisnis
- Pemegang akun utama
- Orang yang bertanggung jawab atas operasi bisnis

### Kemampuan

#### ✅ Akses Penuh Ke:
- **Pengaturan Bisnis**
  - Mengedit informasi bisnis
  - Mengubah paket langganan
  - Mengarsipkan/menghapus bisnis
  - Mengelola semua metode pembayaran

- **Manajemen Staff**
  - Mengundang staf baru
  - Menghapus anggota staf
  - Mengubah peran staf
  - Melihat semua aktivitas staf

- **Manajemen Produk**
  - Menambah/mengedit/menghapus semua produk
  - Mengelola kategori
  - Mengatur harga beli (biaya)
  - Impor produk massal

- **Data Keuangan**
  - Melihat laporan keuangan lengkap
  - Melihat harga beli dan margin keuntungan
  - Mengakses laporan akuntansi
  - Mengekspor semua data

- **Kontrol Transaksi**
  - Mengedit transaksi apa pun
  - Menghapus transaksi
  - Melihat semua riwayat transaksi
  - Mengesampingkan pembatasan apa pun

- **Konfigurasi Sistem**
  - Mengatur printer
  - Mengkonfigurasi notifikasi
  - Mengelola integrasi
  - Mengakses pengaturan API

### Keterbatasan
- Tidak dapat menghapus diri sendiri tanpa mentransfer kepemilikan
- Perubahan langganan mungkin memerlukan konfirmasi pembayaran

---

## Peran Admin

### Siapa yang Seharusnya Menjadi Admin
- Manajer toko
- Supervisor
- Staf senior yang tepercaya
- Akuntan/buku keeper

### Kemampuan

#### ✅ Dapat Melakukan:
- **Manajemen Staff**
  - Mengundang pengguna level Staff
  - Melihat daftar staf (tidak dapat menghapus Owner)
  - Melihat laporan aktivitas staf

- **Manajemen Produk**
  - Menambah dan mengedit produk
  - Mengelola kategori
  - Memperbarui jumlah stok
  - Melihat harga beli (jika diaktifkan)

- **Transaksi**
  - Mencatat semua jenis transaksi
  - Mengedit transaksi terbaru
  - Melihat riwayat transaksi
  - Memproses retur

- **Laporan**
  - Mengakses sebagian besar laporan
  - Mengekspor data
  - Melihat analitik

#### ❌ Tidak Dapat Melakukan:
- Menghapus Owner atau Admin lain
- Mengubah paket langganan
- Mengarsipkan/menghapus bisnis
- Mengedit transaksi pribadi Owner
- Mengakses beberapa pengaturan keuangan sensitif

<!-- TODO: Screenshot - Admin dashboard view -->

---

## Peran Staff

### Siapa yang Seharusnya Menjadi Staff
- Penjual
- Kasir
- Pekerja gudang
- Karyawan paruh waktu

### Kemampuan Default

#### ✅ Biasanya Dapat Melakukan:
- **Operasi Harian**
  - Mencatat Stock Out (penjualan)
  - Melihat katalog produk
  - Memeriksa level stok
  - Mencetak struk

- **Interaksi Pelanggan**
  - Menambah pelanggan baru
  - Melihat daftar pelanggan
  - Mencatat pembelian pelanggan
  - Mencetak struk pelanggan

#### ❌ Tidak Dapat Melakukan (default):
- Menghapus transaksi
  - Mengedit transaksi masa lalu
  - Melihat harga beli (biaya)
  - Melihat margin keuntungan
  - Mengakses laporan keuangan
  - Mengundang staf lain
  - Mengubah pengaturan bisnis
  - Mengelola langganan

<!-- TODO: Screenshot - Staff simplified interface -->

---

## Sistem Izin Granular

Selain peran dasar, Kelola memungkinkan izin yang disesuaikan dengan lebih rinci.

### Kategori Izin

#### 1. Izin Produk
| Izin | Deskripsi |
|------|-----------|
| `view_products` | Melihat katalog produk |
| `add_products` | Membuat produk baru |
| `edit_products` | Memodifikasi produk yang ada |
| `delete_products` | Menghapus produk |
| `view_buying_price` | Melihat info biaya/harga |

#### 2. Izin Stok
| Izin | Deskripsi |
|------|-----------|
| `stock_in` | Mencatat stok masuk |
| `stock_out` | Mencatat penjualan/stok keluar |
| `stock_audit` | Melakukan penghitungan stok |
| `view_stock_history` | Melihat pergerakan stok |
| `edit_stock_records` | Memodifikasi entri masa lalu |

#### 3. Izin Transaksi
| Izin | Deskripsi |
|------|-----------|
| `create_transactions` | Mencatat transaksi baru |
| `edit_own_transactions` | Mengedit entri mereka sendiri |
| `edit_all_transactions` | Mengedit entri siapa pun |
| `delete_transactions` | Menghapus transaksi |
| `view_all_transactions` | Melihat riwayat lengkap |

#### 4. Izin Laporan
| Izin | Deskripsi |
|------|-----------|
| `view_basic_reports` | Ringkasan penjualan sederhana |
| `view_financial_reports` | Laba/rugi, akuntansi |
| `view_staff_reports` | Performa tim |
| `export_data` | Mengunduh laporan |

#### 5. Izin Staff
| Izin | Deskripsi |
|------|-----------|
| `invite_staff` | Menambah anggota tim baru |
| `manage_staff` | Mengedit/menghapus staf |
| `view_staff_activity` | Melihat apa yang dilakukan staf |

---

## Mengatur Izin

### Template Peran Default

Saat mengundang staf, pilih preset:

| Template | Terbaik Untuk | Izin Utama |
|----------|---------------|------------|
| **Cashier** | Penjualan front desk | Stock out, tambah pelanggan, cetak struk |
| **Warehouse** | Staf inventori | Stock in/out, lihat stok, tanpa harga |
| **Manager** | Supervisor toko | Semua operasi, laporan, tanpa pengaturan admin |
| **Accountant** | Buku keeper | Lihat semua data, laporan, tanpa operasi stok |
| **Custom** | Peran khusus | Anda memilih setiap izin |

<!-- TODO: Screenshot - Permission template selection -->

### Membuat Izin Kustom

1. Buka **Akun → Manajemen Staff**
2. Pilih anggota staf
3. Ketuk **"Izin"**
4. Aktifkan/nonaktifkan izin individual
5. Simpan perubahan

> **💡 Praktik Terbaik:** Mulailah dengan pembatasan, kemudian berikan lebih banyak akses sesuai kebutuhan. Lebih mudah menambahkan izin daripada menghapusnya.

---

## Praktik Terbaik Penetapan Peran

### Untuk Tim Kecil (1-5 orang)
```
Owner: 1 orang (pemilik bisnis)
Admin: 1 orang (manajer atau staf senior)
Staff: 2-3 orang (semua orang lain)
```

### Untuk Tim Sedang (5-15 orang)
```
Owner: 1 orang
Admin: 2-3 orang (supervisor shift)
Staff: 5-12 orang (kasir, gudang)
Custom: 1-2 orang (akuntan dengan akses khusus)
```

### Untuk Multi-Lokasi
```
Setiap Lokasi:
- 1 Admin (manajer lokasi)
- 2-5 Staff (pekerja lokasi)

Pusat:
- Owner (pengawasan keseluruhan)
- 1 Admin (manajer regional)
```

---

## Pertimbangan Keamanan

### Praktik Terbaik

1. **Prinsip Hak Akses Minimum**
   - Berikan akses minimum yang dibutuhkan untuk pekerjaan
   - Tinjau izin secara berkala
   - Hapus akses saat staf keluar

2. **Pemisahan Tugas**
   - Orang berbeda untuk penjualan dan penghitungan inventori
   - Persetujuan manajer untuk transaksi besar
   - Tinjauan owner untuk laporan keuangan

3. **Pemantauan Aktivitas**
   - Periksa Laporan Staff secara teratur
   - Tinjau edit transaksi
   - Pantau pola yang tidak biasa

### Tanda Peringatan yang Perlu Diwaspadai

| Tanda Peringatan | Tindakan |
|------------------|----------|
| Edit transaksi yang sering | Tinjau dengan anggota staf |
| Akses di luar jam kerja | Verifikasi jika sah |
| Penyesuaian stok yang tidak biasa | Selidiki segera |
| Beberapa upaya login yang gagal | Periksa keamanan akun |

---

## Mengelola Akses Staff

### Mengundang Staff

1. Buka **Akun → Manajemen Staff**
2. Ketuk **"Undang Staff"**
3. Masukkan alamat email
4. Pilih peran (Staff/Admin)
5. Pilih template izin
6. Kirim undangan

Staff menerima email dengan:
- Link unduhan untuk aplikasi
- Kode bergabung untuk bisnis Anda
- Instruksi untuk memulai

<!-- TODO: Screenshot - Staff invitation flow -->

### Menghapus Staff

1. Buka **Akun → Manajemen Staff**
2. Temukan anggota staf
3. Ketuk **"Hapus"**
4. Konfirmasi penghapusan

> **⚠️ Penting:** Staff yang dihapus segera kehilangan akses. Riwayat transaksi mereka tetap tersimpan untuk arsip.

### Mengubah Peran

1. Pilih anggota staf
2. Ketuk **"Ubah Peran"**
3. Pilih peran baru
4. Sesuaikan izin jika diperlukan
5. Simpan

---

## Laporan Aktivitas Staff

### Apa yang Dapat Anda Lacak

| Metrik | Mengapa Penting |
|--------|-----------------|
| Transaksi yang dibuat | Ukuran produktivitas |
| Item terjual | Performa penjualan |
| Nilai transaksi rata-rata | Indikator efisiensi |
| Waktu login | Verifikasi kehadiran |
| Edit yang dilakukan | Pelacakan akurasi |
| Kesalahan/void | Kebutuhan pelatihan |

### Mengakses Laporan

1. Buka **Laporan → Laporan Staff**
2. Pilih rentang tanggal
3. Pilih anggota staf (atau semua)
4. Lihat ringkasan atau daftar detail
5. Ekspor jika diperlukan

<!-- TODO: Screenshot - Staff report interface -->

---

## Skenario Izin Umum

### Skenario 1: Kasir Baru
**Kebutuhan:** Dapat menjual tetapi tidak melihat biaya
**Pengaturan:**
- Peran: Staff
- Izin: Stock out, tambah pelanggan, cetak struk
- Tidak: Lihat harga beli, edit transaksi, akses laporan

### Skenario 2: Manajer Inventori
**Kebutuhan:** Mengelola stok tetapi tidak keuangan
**Pengaturan:**
- Peran: Staff atau Admin
- Izin: Stock in/out/audit, lihat riwayat stok, tambah produk
- Tidak: Lihat harga beli (opsional), laporan keuangan

### Skenario 3: Manajer Toko
**Kebutuhan:** Menjalankan lokasi tetapi tidak mengubah pengaturan
**Pengaturan:**
- Peran: Admin
- Izin: Semua operasi, lihat laporan, undang staf
- Tidak: Perubahan langganan, arsip bisnis, hapus owner

### Skenario 4: Akuntan
**Kebutuhan:** Melihat data tetapi tidak beroperasi
**Pengaturan:**
- Peran: Staff (kustom)
- Izin: Lihat semua transaksi, akses semua laporan, ekspor data
- Tidak: Buat transaksi, edit produk, operasi stok

---

## Pemecahan Masalah

### "Staff tidak dapat melihat produk"
- Periksa izin `view_products`
- Verifikasi mereka berada di bisnis yang benar
- Periksa apakah produk diarsipkan

### "Staff tidak dapat mencatat penjualan"
- Pastikan izin `stock_out` diaktifkan
- Periksa apakah mereka telah mencapai batas transaksi (langganan)
- Verifikasi stok tersedia

### "Staff melihat harga yang salah"
- Mereka melihat harga beli bukan harga jual
- Hapus izin `view_buying_price`
- Staff seharusnya hanya melihat harga jual

### "Tidak dapat mengubah peran seseorang"
- Hanya Owner yang dapat mengubah peran Admin
- Tidak dapat memodifikasi peran pengguna level lebih tinggi
- Hubungi dukungan jika perlu transfer kepemilikan

---

## FAQ

**Q: Bisakah saya memiliki banyak Owner?**
A: Tidak, setiap bisnis memiliki satu Owner. Anda dapat memiliki banyak Admin dengan akses serupa.

**Q: Dapatkah Staff melihat transaksi satu sama lain?**
A: Tergantung pada izin `view_all_transactions`. Tanpa itu, mereka hanya melihat milik mereka sendiri.

**Q: Apa yang terjadi saat saya menurunkan langganan?**
A: Batasan staff mungkin berlaku. Staff berlebih kehilangan akses sampai Anda meningkatkan atau menghapus pengguna.

**Q: Dapatkah Staff menggunakan versi web?**
A: Ya, izin berlaku di seluruh mobile dan web. Login yang sama berfungsi di mana saja.

**Q: Bagaimana saya tahu apa yang dapat dilakukan anggota staf?**
A: Buka Manajemen Staff, pilih pengguna, dan lihat daftar izin mereka.

**Q: Bisakah saya mengatur pembatasan berbasis waktu?**
A: Saat ini belum. Staff memiliki akses kapan pun mereka login. Pantau melalui laporan aktivitas.


