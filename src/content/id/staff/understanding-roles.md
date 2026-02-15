---
title: "Memahami Peran dan Izin Pengguna"
excerpt: "Panduan lengkap untuk sistem izin Kelola. Pelajari tentang peran Owner, Admin, dan Staff, apa yang dapat dilakukan masing-masing, dan cara mengatur kontrol akses untuk tim Anda."
readingTime: 7
lastUpdated: "2026-02-15"
category: "staff"
difficulty: "intermediate"
audience: "owner"
---

## Apa yang Akan Anda Pelajari

Di akhir panduan ini, Anda akan memahami:
- Tiga peran pengguna di Kelola
- Apa yang dapat dan tidak dapat dilakukan setiap peran
- Cara menetapkan izin yang sesuai
- Praktik terbaik untuk kontrol akses tim
- Cara mengaudit dan mengelola aktivitas staf

---

## Ikhtisar Peran Pengguna

Kelola memiliki tiga peran bawaan yang dirancang untuk berbagai tanggung jawab:

| Peran | Terbaik Untuk | Tingkat Akses |
|-------|---------------|---------------|
| **Owner** | Pemilik bisnis, pendiri | Akses penuh |
| **Admin** | Manajer, supervisor | Akses diperluas |
| **Staff** | Karyawan, kasir, pekerja | Akses terbatas |

<!-- TODO: Screenshot - Roles comparison table/visual -->

---

## Peran Owner

### Siapa yang Harus Menjadi Owner
- Pendiri/pemilik bisnis
- Pemegang akun utama
- Orang yang bertanggung jawab atas operasi bisnis

### Kemampuan

#### ✅ Akses Penuh Ke:
- **Pengaturan Bisnis**
  - Edit informasi bisnis
  - Ubah paket langganan
  - Arsipkan/hapus bisnis
  - Kelola semua metode pembayaran

- **Manajemen Staf**
  - Undang staf baru
  - Hapus anggota staf
  - Ubah peran staf
  - Lihat semua aktivitas staf

- **Manajemen Produk**
  - Tambah/edit/hapus semua produk
  - Kelola kategori
  - Tetapkan harga beli (biaya)
  - Impor produk massal

- **Data Keuangan**
  - Lihat laporan keuangan lengkap
  - Lihat harga beli dan margin laba
  - Akses laporan akuntansi
  - Ekspor semua data

- **Kontrol Transaksi**
  - Edit transaksi apa pun
  - Hapus transaksi
  - Lihat semua riwayat transaksi
  - Batalkan pembatasan apa pun

- **Konfigurasi Sistem**
  - Atur printer
  - Konfigurasi notifikasi
  - Kelola integrasi
  - Akses pengaturan API

### Keterbatasan
- Tidak dapat menghapus diri sendiri tanpa mentransfer kepemilikan
- Perubahan langganan mungkin memerlukan konfirmasi pembayaran

---

## Peran Admin

### Siapa yang Harus Menjadi Admin
- Manajer toko
- Supervisor
- Staf senior yang dipercaya
- Akuntan/pembukuan

### Kemampuan

#### ✅ Dapat Melakukan:
- **Manajemen Staf**
  - Undang pengguna level Staff
  - Lihat daftar staf (tidak dapat menghapus Owner)
  - Lihat laporan aktivitas staf

- **Manajemen Produk**
  - Tambah dan edit produk
  - Kelola kategori
  - Perbarui jumlah stok
  - Lihat harga beli (jika diaktifkan)

- **Transaksi**
  - Catat semua jenis transaksi
  - Edit transaksi terbaru
  - Lihat riwayat transaksi
  - Proses retur

- **Laporan**
  - Akses sebagian besar laporan
  - Ekspor data
  - Lihat analitik

#### ❌ Tidak Dapat Melakukan:
- Hapus Owner atau Admin lain
- Ubah paket langganan
- Arsipkan/hapus bisnis
- Edit transaksi pribadi Owner
- Akses beberapa pengaturan keuangan sensitif

<!-- TODO: Screenshot - Admin dashboard view -->

---

## Peran Staff

### Siapa yang Harus Menjadi Staff
- Asisten penjualan
- Kasir
- Pekerja gudang
- Karyawan paruh waktu

### Kemampuan Default

#### ✅ Biasanya Dapat Melakukan:
- **Operasi Harian**
  - Catat Stok Keluar (penjualan)
  - Lihat katalog produk
  - Periksa level stok
  - Cetak struk

- **Interaksi Pelanggan**
  - Tambah pelanggan baru
  - Lihat daftar pelanggan
  - Catat pembelian pelanggan
  - Cetak struk pelanggan

#### ❌ Tidak Dapat Melakukan (default):
- Hapus transaksi
- Edit transaksi masa lalu
- Lihat harga beli (biaya)
- Lihat margin laba
- Akses laporan keuangan
- Undang staf lain
- Ubah pengaturan bisnis
- Kelola langganan

<!-- TODO: Screenshot - Staff simplified interface -->

---

## Sistem Izin Granular

Di luar peran dasar, Kelola memungkinkan izin yang disesuaikan dengan baik.

### Kategori Izin

#### 1. Izin Produk
| Izin | Deskripsi |
|------|-----------|
| `view_products` | Lihat katalog produk |
| `add_products` | Buat produk baru |
| `edit_products` | Ubah produk yang ada |
| `delete_products` | Hapus produk |
| `view_buying_price` | Lihat info biaya/harga |

#### 2. Izin Stok
| Izin | Deskripsi |
|------|-----------|
| `stock_in` | Catat stok masuk |
| `stock_out` | Catat penjualan/keluar |
| `stock_audit` | Lakukan penghitungan stok |
| `view_stock_history` | Lihat pergerakan stok |
| `edit_stock_records` | Ubah entri masa lalu |

#### 3. Izin Transaksi
| Izin | Deskripsi |
|------|-----------|
| `create_transactions` | Catat transaksi baru |
| `edit_own_transactions` | Edit entri mereka sendiri |
| `edit_all_transactions` | Edit entri siapa pun |
| `delete_transactions` | Hapus transaksi |
| `view_all_transactions` | Lihat riwayat lengkap |

#### 4. Izin Laporan
| Izin | Deskripsi |
|------|-----------|
| `view_basic_reports` | Ringkasan penjualan sederhana |
| `view_financial_reports` | Laba/rugi, akuntansi |
| `view_staff_reports` | Kinerja tim |
| `export_data` | Unduh laporan |

#### 5. Izin Staf
| Izin | Deskripsi |
|------|-----------|
| `invite_staff` | Tambah anggota tim baru |
| `manage_staff` | Edit/hapus staf |
| `view_staff_activity` | Lihat apa yang dilakukan staf |

---

## Menyiapkan Izin

### Template Peran Default

Saat mengundang staf, pilih preset:

| Template | Terbaik Untuk | Izin Utama |
|----------|---------------|------------|
| **Kasir** | Penjualan front desk | Stok keluar, tambah pelanggan, cetak struk |
| **Gudang** | Staf persediaan | Stok masuk/keluar, lihat stok, tanpa harga |
| **Manajer** | Supervisor toko | Semua operasi, laporan, tanpa pengaturan admin |
| **Akuntan** | Pembukuan | Lihat semua data, laporan, tanpa operasi stok |
| **Kustom** | Peran khusus | Anda pilih setiap izin |

<!-- TODO: Screenshot - Permission template selection -->

### Membuat Izin Kustom

1. Buka **Akun → Manajemen Staf**
2. Pilih anggota staf
3. Ketuk **"Izin"**
4. Aktifkan/nonaktifkan izin individual
5. Simpan perubahan

> **💡 Praktik Terbaik:** Mulai dari yang restrictif, kemudian berikan lebih banyak akses sesuai kebutuhan. Lebih mudah menambah izin daripada menghapusnya.

---

## Praktik Terbaik Penetapan Peran

### Untuk Tim Kecil (1-5 orang)
```
Owner: 1 orang (pemilik bisnis)
Admin: 1 orang (manajer atau staf senior)
Staff: 2-3 orang (semua orang lain)
```

### Untuk Tim Menengah (5-15 orang)
```
Owner: 1 orang
Admin: 2-3 orang (supervisor shift)
Staff: 5-12 orang (kasir, gudang)
Kustom: 1-2 orang (akuntan dengan akses khusus)
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

1. **Prinsip Hak Akses Terendah**
   - Berikan akses minimum yang dibutuhkan untuk pekerjaan
   - Tinjau izin secara teratur
   - Hapus akses saat staf keluar

2. **Pemisahan Tugas**
   - Orang berbeda untuk penjualan dan penghitungan persediaan
   - Persetujuan manajer untuk transaksi besar
   - Tinjauan owner untuk laporan keuangan

3. **Pemantauan Aktivitas**
   - Periksa Laporan Staf secara teratur
   - Tinjau edit transaksi
   - Pantau pola yang tidak biasa

### Tanda Merah yang Perlu Diwaspadai

| Tanda Peringatan | Tindakan |
|------------------|----------|
| Edit transaksi sering | Tinjau dengan anggota staf |
| Akses di luar jam kerja | Verifikasi jika sah |
| Penyesuaian stok tidak biasa | Investigasi segera |
| Beberapa upaya login gagal | Periksa keamanan akun |

---

## Mengelola Akses Staf

### Mengundang Staf

1. Buka **Akun → Manajemen Staf**
2. Ketuk **"Undang Staf"**
3. Masukkan alamat email
4. Pilih peran (Staff/Admin)
5. Pilih template izin
6. Kirim undangan

Staf menerima email dengan:
- Link unduhan aplikasi
- Kode gabung untuk bisnis Anda
- Instruksi untuk memulai

<!-- TODO: Screenshot - Staff invitation flow -->

### Menghapus Staf

1. Buka **Akun → Manajemen Staf**
2. Temukan anggota staf
3. Ketuk **"Hapus"**
4. Konfirmasi penghapusan

> **⚠️ Penting:** Staf yang dihapus segera kehilangan akses. Riwayat transaksi mereka tetap ada untuk catatan.

### Mengubah Peran

1. Pilih anggota staf
2. Ketuk **"Ubah Peran"**
3. Pilih peran baru
4. Sesuaikan izin jika perlu
5. Simpan

---

## Laporan Aktivitas Staf

### Apa yang Dapat Anda Lacak

| Metrik | Mengapa Penting |
|--------|-----------------|
| Transaksi yang dibuat | Ukuran produktivitas |
| Item terjual | Kinerja penjualan |
| Nilai transaksi rata-rata | Indikator efisiensi |
| Waktu login | Verifikasi kehadiran |
| Edit yang dibuat | Pelacakan akurasi |
| Kesalahan/batal | Kebutuhan pelatihan |

### Mengakses Laporan

1. Buka **Laporan → Laporan Staf**
2. Pilih rentang tanggal
3. Pilih anggota staf (atau semua)
4. Lihat ringkasan atau daftar detail
5. Ekspor jika perlu

<!-- TODO: Screenshot - Staff report interface -->

---

## Skenario Izin Umum

### Skenario 1: Kasir Baru
**Butuh:** Dapat menjual tetapi tidak melihat biaya
**Setup:**
- Peran: Staff
- Izin: Stok keluar, tambah pelanggan, cetak struk
- Tidak: Lihat harga beli, edit transaksi, akses laporan

### Skenario 2: Manajer Persediaan
**Butuh:** Kelola stok tetapi tidak keuangan
**Setup:**
- Peran: Staff atau Admin
- Izin: Stok masuk/keluar/audit, lihat riwayat stok, tambah produk
- Tidak: Lihat harga beli (opsional), laporan keuangan

### Skenario 3: Manajer Toko
**Butuh:** Jalankan lokasi tetapi tidak ubah pengaturan
**Setup:**
- Peran: Admin
- Izin: Semua operasi, lihat laporan, undang staf
- Tidak: Perubahan langganan, arsip bisnis, hapus owner

### Skenario 4: Akuntan
**Butuh:** Lihat data tetapi tidak operasi
**Setup:**
- Peran: Staff (kustom)
- Izin: Lihat semua transaksi, akses semua laporan, ekspor data
- Tidak: Buat transaksi, edit produk, operasi stok

---

## Pemecahan Masalah

### "Staf tidak dapat melihat produk"
- Periksa izin `view_products`
- Verifikasi mereka berada di bisnis yang benar
- Periksa apakah produk diarsipkan

### "Staf tidak dapat mencatat penjualan"
- Pastikan izin `stock_out` diaktifkan
- Periksa apakah mereka mencapai batas transaksi (langganan)
- Verifikasi stok tersedia

### "Staf melihat harga yang salah"
- Mereka melihat harga beli alih-alih harga jual
- Hapus izin `view_buying_price`
- Staff seharusnya hanya melihat harga jual

### "Tidak dapat mengubah peran seseorang"
- Hanya Owner yang dapat mengubah peran Admin
- Tidak dapat memodifikasi peran pengguna level lebih tinggi
- Hubungi dukungan jika transfer kepemilikan diperlukan

---

## FAQ

**T: Bisakah saya memiliki beberapa Owner?**
J: Tidak, setiap bisnis memiliki satu Owner. Anda dapat memiliki beberapa Admin dengan akses serupa.

**T: Bisakah Staff melihat transaksi satu sama lain?**
J: Tergantung pada izin `view_all_transactions`. Tanpa itu, mereka hanya melihat transaksi mereka sendiri.

**T: Apa yang terjadi saat saya menurunkan langganan?**
J: Batasan staf mungkin berlaku. Staf berlebih kehilangan akses sampai Anda meningkatkan atau menghapus pengguna.

**T: Bisakah Staff menggunakan versi web?**
J: Ya, izin berlaku di seluruh mobile dan web. Login yang sama berfungsi di mana saja.

**T: Bagaimana saya tahu apa yang dapat dilakukan anggota staf?**
J: Buka Manajemen Staf, pilih pengguna, dan lihat daftar izin mereka.

**T: Bisakah saya mengatur pembatasan berbasis waktu?**
J: Saat ini tidak. Staf memiliki akses setiap kali mereka login. Pantau melalui laporan aktivitas.

---

## Artikel Terkait

- [Mengundang Anggota Staf →](./inviting-staff)
- [Cara Staf Bergabung dengan Bisnis Anda →](./join-business)
- [Praktik Terbaik Manajemen Staf →](./managing-team)
- [Memahami Laporan →](../reports/understanding-reports)
