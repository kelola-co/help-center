---
title: "Memahami Peran dan Izin Pengguna"
excerpt: "Panduan lengkap tentang sistem izin Kelola. Pelajari tentang peran Owner dan Staff, apa yang dapat dilakukan masing-masing, dan cara mengatur kontrol akses untuk tim Anda."
readingTime: 5
lastUpdated: "2026-02-15"
category: "staff"
difficulty: "intermediate"
audience: "owner"
---

## Apa yang Akan Anda Pelajari

Pada akhir panduan ini, Anda akan memahami:
- Dua peran pengguna di Kelola
- Apa yang dapat dan tidak dapat dilakukan setiap peran
- Cara kerja izin untuk anggota staff
- Praktik terbaik untuk kontrol akses tim

---

## Ikhtisar Peran Pengguna

Kelola memiliki dua peran bawaan:

| Peran | Terbaik Untuk | Tingkat Akses |
|-------|---------------|---------------|
| **Owner** | Pemilik bisnis, pendiri | Akses penuh |
| **Staff** | Karyawan, kasir, pekerja | Akses terbatas berdasarkan izin |

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
  - Mengelola semua metode pembayaran
  - Beralih antar beberapa bisnis

- **Manajemen Staff**
  - Mengundang staf baru
  - Menghapus anggota staf
  - Mengatur izin staff
  - Melihat daftar staff

- **Manajemen Produk**
  - Menambah/mengedit/menghapus semua produk
  - Mengelola kategori
  - Mengatur harga beli (biaya)
  - Impor produk via web

- **Data Keuangan**
  - Melihat laporan keuangan lengkap
  - Melihat harga beli dan margin keuntungan
  - Mengakses laporan akuntansi
  - Melihat laporan piutang

- **Kontrol Transaksi**
  - Mengedit transaksi
  - Menghapus transaksi
  - Melihat semua riwayat transaksi

- **Fitur Tambahan**
  - Membuat katalog online
  - Mencetak label barcode
  - Mengelola peringatan stok
  - Mengakses versi web

### Batas Staff per Paket
- **Gratis**: 1 anggota staff
- **Basic**: 3 anggota staff
- **Plus**: 5 anggota staff
- **Advance**: Staff tidak terbatas

---

## Peran Staff

### Siapa yang Seharusnya Menjadi Staff
- Penjual
- Kasir
- Pekerja gudang
- Karyawan paruh waktu
- Anggota tim mana pun yang membutuhkan akses terbatas

### Cara Kerja Izin Staff

Anggota staff menerima izin yang diatur oleh Owner. Setiap anggota staff dapat memiliki izin berbeda berdasarkan tanggung jawab mereka.

#### Izin yang Tersedia

**Izin Produk:**
- Melihat produk
- Menambah produk
- Mengedit produk
- Menghapus produk

**Izin Stok:**
- Stok masuk (mencatat pembelian)
- Stok keluar (mencatat penjualan)
- Audit stok/penyesuaian
- Transfer stok

**Izin Transaksi:**
- Melihat riwayat transaksi
- Mengedit transaksi

**Izin Laporan:**
- Melihat laporan akuntansi
- Melihat laporan stok
- Melihat laporan pelanggan
- Melihat laporan piutang

**Izin Kontak:**
- Mengelola pelanggan
- Mengelola supplier

**Izin Lainnya:**
- Mengelola pengeluaran
- Mengundang staff lain (jarang diberikan)
- Mengubah profil bisnis

### Akses Default Staff

Saat diundang, staff biasanya memiliki akses ke:
- Mencatat stok masuk/keluar
- Melihat produk
- Melihat riwayat transaksi
- Mengelola pelanggan (jika diaktifkan)

### Apa yang Tidak Dapat Dilakukan Staff (default):
- Menghapus transaksi (kecuali diberikan izin)
- Melihat harga beli (kecuali diberikan izin)
- Mengakses laporan keuangan (kecuali diberikan izin)
- Mengundang staff lain (kecuali diberikan izin)
- Mengubah pengaturan bisnis
- Mengelola langganan
- Membuat katalog online

---

## Mengatur Izin Staff

### Saat Mengundang Staff

1. Buka **Beranda** → **Staff** (hanya owner)
2. Ketuk **"+"** untuk mengundang staff baru
3. Masukkan nomor telepon staff
4. Atur izin dengan mengaktifkan/menonaktifkan sakelar:
   - Dapat menambah produk
   - Dapat mengedit produk
   - Dapat menghapus produk
   - Dapat stok masuk
   - Dapat stok keluar
   - Dapat melihat laporan
   - dll.
5. Kirim undangan

Staff menerima:
- SMS dengan link unduhan
- Kode bergabung untuk bisnis Anda
- Instruksi untuk memulai

### Mengedit Izin Staff

1. Buka **Beranda** → **Staff**
2. Ketuk anggota staff
3. Aktifkan/nonaktifkan izin
4. Simpan perubahan

> **💡 Praktik Terbaik:** Mulailah dengan izin minimal dan tambahkan lebih banyak sesuai kebutuhan. Lebih mudah memberikan akses daripada mencabutnya.

---

## Praktik Terbaik Penetapan Peran

### Untuk Tim Kecil (1-5 orang)
```
Owner: 1 orang (pemilik bisnis)
Staff: 1-4 orang (karyawan dengan izin yang sesuai)
```

### Untuk Tim Sedang (5-15 orang)
```
Owner: 1 orang
Staff: 4-14 orang dengan izin bervariasi:
- Beberapa dengan akses operasional penuh
- Beberapa dengan akses terbatas (hanya kasir)
- Beberapa dengan akses laporan (manajer)
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
   - Tinjauan owner untuk laporan keuangan
   - Mata banyak pada penyesuaian stok

3. **Pemantauan Aktivitas**
   - Periksa Riwayat secara teratur
   - Tinjau edit transaksi
   - Pantau pola yang tidak biasa

### Tanda Peringatan yang Perlu Diwaspadai

| Tanda Peringatan | Tindakan |
|------------------|----------|
| Edit transaksi yang sering | Tinjau dengan anggota staf |
| Akses di luar jam kerja | Verifikasi jika sah |
| Penyesuaian stok yang tidak biasa | Selidiki segera |

---

## Mengelola Akses Staff

### Mengundang Staff

1. Buka **Beranda** → **Staff**
2. Ketuk tombol **"+"**
3. Masukkan nomor telepon
4. Atur izin
5. Kirim undangan

### Menghapus Staff

1. Buka **Beranda** → **Staff**
2. Temukan anggota staf
3. Ketuk **"Hapus"**
4. Konfirmasi penghapusan

> **⚠️ Penting:** Staff yang dihapus segera kehilangan akses. Riwayat transaksi mereka tetap tersimpan untuk arsip.

### Mengubah Izin

1. Pilih anggota staf
2. Aktifkan/nonaktifkan izin
3. Simpan perubahan

Izin diperbarui segera.

---

## Skenario Izin Umum

### Skenario 1: Kasir/Penjual
**Kebutuhan:** Dapat menjual tetapi tidak melihat biaya
**Pengaturan:**
- Dapat stok keluar
- Dapat melihat produk
- Dapat menambah pelanggan
- Tidak dapat melihat harga beli
- Tidak dapat mengedit transaksi
- Tidak dapat mengakses laporan

### Skenario 2: Manajer Inventori
**Kebutuhan:** Mengelola stok tetapi tidak keuangan
**Pengaturan:**
- Dapat stok masuk/keluar/audit
- Dapat menambah/mengedit produk
- Dapat melihat laporan stok
- Tidak dapat melihat harga beli (opsional)
- Tidak dapat melihat laporan akuntansi

### Skenario 3: Manajer/Supervisor
**Kebutuhan:** Menjalankan operasi dan melihat laporan
**Pengaturan:**
- Semua izin stok
- Manajemen produk
- Melihat semua laporan
- Tidak dapat mengundang staff
- Tidak dapat mengubah langganan

### Skenario 4: Akuntan/Buku Keeper
**Kebutuhan:** Melihat data tetapi tidak beroperasi
**Pengaturan:**
- Melihat semua transaksi
- Mengakses semua laporan
- Melihat harga beli
- Tidak dapat membuat transaksi
- Tidak dapat mengedit produk

---

## Pemecahan Masalah

### "Staff tidak dapat melihat produk"
- Periksa apakah mereka memiliki izin untuk melihat produk
- Verifikasi mereka login ke bisnis yang benar
- Periksa apakah produk tersedia

### "Staff tidak dapat mencatat penjualan"
- Pastikan izin "Stok Keluar" diaktifkan
- Periksa apakah mereka telah mencapai batas staff (langganan)
- Verifikasi stok tersedia

### "Staff melihat harga yang salah"
- Mereka melihat harga beli bukan harga jual
- Hapus izin untuk melihat harga beli
- Staff seharusnya hanya melihat harga jual

### "Tidak dapat mengundang lebih banyak staff"
- Periksa batas staff paket langganan Anda
- Gratis: 1 staff, Basic: 3 staff, Plus: 5 staff, Advance: tidak terbatas
- Upgrade langganan jika diperlukan

---

## FAQ

**Q: Bisakah saya memiliki banyak Owner?**
A: Tidak, setiap bisnis memiliki satu Owner yang membuatnya. Namun, Anda dapat memberikan izin ekstensif kepada anggota staff untuk bertindak sebagai manajer.

**Q: Dapatkah Staff melihat transaksi satu sama lain?**
A: Ya, semua staff dapat melihat riwayat transaksi lengkap di bagian Riwayat, tergantung pada izin mereka.

**Q: Apa yang terjadi saat saya menurunkan langganan?**
A: Batasan staff berlaku. Jika Anda memiliki lebih banyak staff daripada paket baru Anda, staff berlebih akan kehilangan akses sampai Anda meningkatkan atau menghapus pengguna.

**Q: Dapatkah Staff menggunakan versi web?**
A: Ya, staff dapat login di web.kelola.co dengan izin yang sama seperti aplikasi mobile.

**Q: Bagaimana saya tahu apa yang dapat dilakukan anggota staf?**
A: Buka Beranda → Staff, pilih pengguna, dan lihat daftar izin mereka.

**Q: Bisakah Staff mengundang staff lain?**
A: Hanya jika Anda memberikan izin khusus untuk mengundang staff. Sebagian besar bisnis membatasi ini hanya untuk Owner.

**Q: Berapa banyak staff yang dapat saya tambahkan?**
A: Tergantung pada langganan Anda:
- Gratis: 1 staff
- Basic: 3 staff
- Plus: 5 staff
- Advance: Staff tidak terbatas

---

## Batas Staff per Paket Langganan

| Paket | Batas Staff | Batas Produk | Batas Katalog |
|-------|-------------|--------------|---------------|
| Gratis | 1 | 100 | 1 |
| Basic | 3 | 500 | 3 |
| Plus | 5 | 2.000 | 5 |
| Advance | Tidak terbatas | Tidak terbatas | Tidak terbatas |
