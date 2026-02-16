export interface Category {
  id: string;
  title: {
    en: string;
    id: string;
    th: string;
  };
  description: {
    en: string;
    id: string;
    th: string;
  };
  icon: string;
  articles: Article[];
}

export interface Article {
  id: string;
  title: {
    en: string;
    id: string;
    th: string;
  };
  excerpt: {
    en: string;
    id: string;
    th: string;
  };
  readingTime: number;
  lastUpdated: string;
}

export const categories: Category[] = [
  {
    id: 'getting-started',
    title: {
      en: 'Getting Started',
      id: 'Memulai',
      th: 'เริ่มต้นใช้งาน'
    },
    description: {
      en: 'New to Kelola? Start here with quick guides and basics',
      id: 'Baru di Kelola? Mulai di sini dengan panduan cepat dan dasar-dasar',
      th: 'เพิ่งเริ่มใช้ Kelola? เริ่มต้นที่นี่ด้วยคู่มือด่วนและพื้นฐาน'
    },
    icon: '🚀',
    articles: [
      {
        id: 'quick-start-guide',
        title: {
          en: 'Quick Start Guide',
          id: 'Panduan Memulai Cepat',
          th: 'คู่มือเริ่มต้นใช้งานด่วน'
        },
        excerpt: {
          en: 'Get up and running with Kelola in under 5 minutes',
          id: 'Mulai menggunakan Kelola dalam waktu kurang dari 5 menit',
          th: 'เริ่มต้นใช้งาน Kelola ในเวลาไม่ถึง 5 นาที'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'app-navigation',
        title: {
          en: 'App Navigation Guide',
          id: 'Panduan Navigasi Aplikasi',
          th: 'คู่มือการนำทางในแอป'
        },
        excerpt: {
          en: 'Learn your way around the Kelola app and where to find every feature',
          id: 'Pelajari cara mengoperasikan aplikasi Kelola dan di mana menemukan setiap fitur',
          th: 'เรียนรู้วิธีใช้งานแอป Kelola และว่าจะหาแต่ละฟีเจอร์ได้ที่ไหน'
        },
        readingTime: 4,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'products',
    title: {
      en: 'Products',
      id: 'Produk',
      th: 'สินค้า'
    },
    description: {
      en: 'Manage your product catalog, SKUs, barcodes, and categories',
      id: 'Kelola katalog produk, SKU, barcode, dan kategori Anda',
      th: 'จัดการแคตตาล็อกสินค้า SKU บาร์โค้ด และหมวดหมู่ของคุณ'
    },
    icon: '📦',
    articles: [
      {
        id: 'importing-products-bulk',
        title: {
          en: 'Bulk Import Products with Excel',
          id: 'Impor Produk Massal dengan Excel',
          th: 'นำเข้าสินค้าจำนวนมากด้วย Excel'
        },
        excerpt: {
          en: 'Learn how to import multiple products at once using Excel or CSV files, saving time when adding products one by one',
          id: 'Pelajari cara mengimpor beberapa produk sekaligus menggunakan file Excel atau CSV, menghemat waktu saat menambah produk satu per satu',
          th: 'เรียนรู้วิธีนำเข้าสินค้าหลายรายการในครั้งเดียวโดยใช้ไฟล์ Excel หรือ CSV ประหยัดเวลาเมื่อเพิ่มสินค้าทีละรายการ'
        },
        readingTime: 8,
        lastUpdated: '2026-02-16'
      },
      {
        id: 'adding-products',
        title: {
          en: 'Adding and Managing Products',
          id: 'Menambah dan Mengelola Produk',
          th: 'การเพิ่มและจัดการสินค้า'
        },
        excerpt: {
          en: 'Complete guide to adding products with SKUs, barcodes, categories, and images',
          id: 'Panduan lengkap menambah produk dengan SKU, barcode, kategori, dan gambar',
          th: 'คู่มือฉบับสมบูรณ์ในการเพิ่มสินค้าพร้อม SKU บาร์โค้ด หมวดหมู่ และรูปภาพ'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'stock',
    title: {
      en: 'Stock Management',
      id: 'Manajemen Stok',
      th: 'การจัดการสต็อก'
    },
    description: {
      en: 'Manage your stock with ease - in, out, transfers, and audits',
      id: 'Manajemen stok dengan mudah - masuk, keluar, transfer, dan audit',
      th: 'จัดการสต็อกของคุณได้อย่างง่ายดาย - รับเข้า จ่ายออก โอนย้าย และตรวจนับ'
    },
    icon: '📊',
    articles: [
      {
        id: 'difference-stock-in-out-audit',
        title: {
          en: 'Understanding Stock Flow: In, Out, and Audit',
          id: 'Memahami Alur Stok: Masuk, Keluar, dan Audit',
          th: 'การเข้าใจการไหลของสต็อก: เข้า ออก และตรวจนับ'
        },
        excerpt: {
          en: 'Complete guide to understanding when and how to use Stock In, Stock Out, and Stock Audit',
          id: 'Panduan lengkap memahami kapan dan cara menggunakan Stok Masuk, Stok Keluar, dan Audit Stok',
          th: 'คู่มือฉบับสมบูรณ์ในการเข้าใจเมื่อใดและวิธีใช้งานสต็อกเข้า สต็อกออก และการตรวจสอบสต็อก'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'managing-stock-alerts',
        title: {
          en: 'Managing Stock Alerts and Low Inventory',
          id: 'Mengelola Peringatan Stok dan Inventori Rendah',
          th: 'การจัดการการแจ้งเตือนสต็อกและสินค้าคงคลังต่ำ'
        },
        excerpt: {
          en: 'Complete guide to setting up stock alerts, configuring notifications, and preventing stockouts',
          id: 'Panduan lengkap mengatur peringatan stok, mengkonfigurasi notifikasi, dan mencegah kehabisan stok',
          th: 'คู่มือฉบับสมบูรณ์ในการตั้งค่าการแจ้งเตือนสต็อก การกำหนดค่าการแจ้งเตือน และการป้องกันการขาดสต็อก'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'record-stock-in',
        title: {
          en: 'Recording Stock In (Purchases)',
          id: 'Mencatat Stok Masuk (Pembelian)',
          th: 'การบันทึกรับสินค้าเข้า (การซื้อ)'
        },
        excerpt: {
          en: 'Complete guide to recording incoming inventory and purchases with suppliers and costs',
          id: 'Panduan lengkap mencatat inventori masuk dan pembelian dengan supplier dan biaya',
          th: 'คู่มือฉบับสมบูรณ์ในการบันทึกสินค้าคงคลังที่รับเข้าและการซื้อพร้อมซัพพลายเออร์และต้นทุน'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'record-stock-out',
        title: {
          en: 'Recording Stock Out (Sales)',
          id: 'Mencatat Stok Keluar (Penjualan)',
          th: 'การบันทึกจ่ายสินค้าออก (การขาย)'
        },
        excerpt: {
          en: 'How to record sales and outgoing inventory',
          id: 'Cara mencatat penjualan dan inventori keluar',
          th: 'วิธีบันทึกการขายและสินค้าคงคลังที่จ่ายออก'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'delete-or-edit-record',
        title: {
          en: 'Delete or Edit Record',
          id: 'Hapus atau Edit Catatan',
          th: 'ลบหรือแก้ไขรายการ'
        },
        excerpt: {
          en: 'How to delete or edit a record',
          id: 'Cara hapus atau edit catatan',
          th: 'วิธีลบหรือแก้ไขรายการ'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'stock-transfer',
        title: {
          en: 'Stock Transfer Between Businesses',
          id: 'Transfer Stok Antar Bisnis',
          th: 'โอนย้ายสต็อกระหว่างธุรกิจ'
        },
        excerpt: {
          en: 'Transfer inventory between your businesses with automatic product mapping',
          id: 'Pindahkan inventori antar bisnis dengan pemetaan produk otomatis',
          th: 'โอนย้ายสินค้าระหว่างธุรกิจของคุณพร้อมระบบจับคู่สินค้าอัตโนมัติ'
        },
        readingTime: 2,
        lastUpdated: '2025-02-15'
      }
    ]
  },
  {
    id: 'sales',
    title: {
      en: 'Sales',
      id: 'Penjualan',
      th: 'การขาย'
    },
    description: {
      en: 'Record sales, manage transactions, and handle customer orders',
      id: 'Catat penjualan, kelola transaksi, dan tangani pesanan pelanggan',
      th: 'บันทึกการขาย จัดการธุรกรรม และจัดการคำสั่งซื้อของลูกค้า'
    },
    icon: '💰',
    articles: [
      {
        id: 'recording-sales',
        title: {
          en: 'Recording Sales and Transactions',
          id: 'Mencatat Penjualan dan Transaksi',
          th: 'การบันทึกการขายและธุรกรรม'
        },
        excerpt: {
          en: 'Step-by-step guide to recording sales, handling payments, and managing sales workflows',
          id: 'Panduan langkah demi langkah mencatat penjualan, menangani pembayaran, dan mengelola alur kerja penjualan',
          th: 'คู่มือทีละขั้นตอนในการบันทึกการขาย จัดการการชำระเงิน และจัดการเวิร์กโฟลว์การขาย'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'managing-transactions',
        title: {
          en: 'Managing Transaction History',
          id: 'Mengelola Riwayat Transaksi',
          th: 'การจัดการประวัติธุรกรรม'
        },
        excerpt: {
          en: 'Complete guide to finding, filtering, editing, and managing all your business transactions',
          id: 'Panduan lengkap menemukan, menyaring, mengedit, dan mengelola semua transaksi bisnis Anda',
          th: 'คู่มือฉบับสมบูรณ์ในการค้นหา กรอง แก้ไข และจัดการธุรกรรมธุรกิจทั้งหมดของคุณ'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'customers',
    title: {
      en: 'Customers',
      id: 'Pelanggan',
      th: 'ลูกค้า'
    },
    description: {
      en: 'Manage customer relationships and track purchase history',
      id: 'Kelola hubungan pelanggan dan lacak riwayat pembelian',
      th: 'จัดการความสัมพันธ์กับลูกค้าและติดตามประวัติการซื้อ'
    },
    icon: '👥',
    articles: [
      {
        id: 'adding-customers',
        title: {
          en: 'Customer Management Guide',
          id: 'Panduan Manajemen Pelanggan',
          th: 'คู่มือการจัดการลูกค้า'
        },
        excerpt: {
          en: 'Complete guide to managing customers, tracking purchase history, and managing credit/debt',
          id: 'Panduan lengkap mengelola pelanggan, melacak riwayat pembelian, dan mengelola kredit/hutang',
          th: 'คู่มือฉบับสมบูรณ์ในการจัดการลูกค้า ติดตามประวัติการซื้อ และจัดการเครดิต/หนี้'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'staff',
    title: {
      en: 'Staff Management',
      id: 'Manajemen Karyawan',
      th: 'การจัดการพนักงาน'
    },
    description: {
      en: 'Manage your team, roles, and permissions',
      id: 'Kelola tim, peran, dan izin akses Anda',
      th: 'จัดการทีม บทบาท และสิทธิ์การเข้าถึงของคุณ'
    },
    icon: '👨‍👩‍👧‍👦',
    articles: [
      {
        id: 'understanding-roles',
        title: {
          en: 'Understanding User Roles and Permissions',
          id: 'Memahami Peran dan Izin Pengguna',
          th: 'การเข้าใจบทบาทและสิทธิ์ของผู้ใช้'
        },
        excerpt: {
          en: 'Complete guide to Owner, Admin, and Staff roles, permissions, and access control',
          id: 'Panduan lengkap tentang peran Owner, Admin, dan Staff, izin akses, dan kontrol akses',
          th: 'คู่มือฉบับสมบูรณ์เกี่ยวกับบทบาทเจ้าของ ผู้ดูแลระบบ และพนักงาน สิทธิ์การเข้าถึง และการควบคุมการเข้าถึง'
        },
        readingTime: 7,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'invite-staff',
        title: {
          en: 'Inviting Staff Members',
          id: 'Mengundang Anggota Staf',
          th: 'การเชิญพนักงาน'
        },
        excerpt: {
          en: 'Step-by-step guide to inviting team members with invitation codes and permission templates',
          id: 'Panduan langkah demi langkah mengundang anggota tim dengan kode undangan dan templat izin',
          th: 'คู่มือทีละขั้นตอนในการเชิญสมาชิกทีมด้วยรหัสคำเชิญและเทมเพลตสิทธิ์'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'managing-team',
        title: {
          en: 'Managing Team Members',
          id: 'Mengelola Anggota Tim',
          th: 'การจัดการสมาชิกในทีม'
        },
        excerpt: {
          en: 'Guide to managing staff after joining including permissions, monitoring, and departures',
          id: 'Panduan mengelola staf setelah bergabung termasuk izin, pemantauan, dan kepindahan',
          th: 'คู่มือการจัดการพนักงานหลังจากเข้าร่วม รวมถึงสิทธิ์ การติดตาม และการออก'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      },
      {
        id: 'join-business',
        title: {
          en: 'How Staff Join Business',
          id: 'Cara Karyawan Bergabung Bisnis',
          th: 'วิธีให้พนักงานเข้าร่วมธุรกิจ'
        },
        excerpt: {
          en: 'How to join a business in Kelola with an invitation code',
          id: 'Cara bergabung dengan bisnis di Kelola dengan kode undangan',
          th: 'วิธีเข้าร่วมธุรกิจใน Kelola ด้วยรหัสคำเชิญ'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'features',
    title: {
      en: 'Key Features',
      id: 'Fitur Utama',
      th: 'ฟีเจอร์หลัก'
    },
    description: {
      en: "Explore our platform's main features",
      id: 'Jelajahi fitur utama platform kami',
      th: 'สำรวจฟีเจอร์หลักของแพลตฟอร์มเรา'
    },
    icon: '⭐',
    articles: [
      {
        id: 'print-invoice',
        title: {
          en: 'Print Invoice',
          id: 'Cetak Invoice',
          th: 'พิมพ์ใบแจ้งหนี้'
        },
        excerpt: {
          en: 'How to print an invoice or transaction receipt in the Kelola app',
          id: 'Cara mencetak invoice atau struk bukti transaksi di aplikasi Kelola',
          th: 'วิธีพิมพ์ใบแจ้งหนี้หรือใบเสร็จรับเงินในแอป Kelola'
        },
        readingTime: 4,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'barcode-scanner',
        title: {
          en: 'Barcode Scanner',
          id: 'Barcode Scanner',
          th: 'เครื่องสแกนบาร์โค้ด'
        },
        excerpt: {
          en: 'Input items quickly using a barcode scanner',
          id: 'Input barang dengan cepat menggunakan barcode scanner',
          th: 'ป้อนสินค้าอย่างรวดเร็วโดยใช้เครื่องสแกนบาร์โค้ด'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'customer',
        title: {
          en: 'Customer Management',
          id: 'Manajemen Pelanggan',
          th: 'การจัดการลูกค้า'
        },
        excerpt: {
          en: 'Manage your customers with ease',
          id: 'Manajemen pelanggan dengan mudah',
          th: 'จัดการลูกค้าของคุณได้อย่างง่ายดาย'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'vendor',
        title: {
          en: 'Vendor Management',
          id: 'Manajemen Vendor',
          th: 'การจัดการผู้ขาย'
        },
        excerpt: {
          en: 'Manage your vendors with ease',
          id: 'Manajemen vendor dengan mudah',
          th: 'จัดการผู้ขายของคุณได้อย่างง่ายดาย'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'report',
    title: {
      en: 'Business Reports',
      id: 'Laporan Bisnis',
      th: 'รายงานธุรกิจ'
    },
    description: {
      en: 'Generate reports for your business',
      id: 'Buat laporan untuk bisnis Anda',
      th: 'สร้างรายงานสำหรับธุรกิจของคุณ'
    },
    icon: '📈',
    articles: [
      {
        id: 'accounting-report',
        title: {
          en: 'Financial Reports',
          id: 'Laporan Keuangan',
          th: 'รายงานการเงิน'
        },
        excerpt: {
          en: 'Comprehensive financial performance with sales, profit, expense tracking and visual analytics',
          id: 'Kinerja keuangan lengkap dengan pelacakan penjualan, laba, pengeluaran dan analitik visual',
          th: 'ผลประกอบการทางการเงินครบถ้วนด้วยการติดตามยอดขาย กำไร ค่าใช้จ่าย และการวิเคราะห์แบบภาพ'
        },
        readingTime: 3,
        lastUpdated: '2025-02-15'
      },
      {
        id: 'stock-report',
        title: {
          en: 'Stock Report',
          id: 'Laporan Stok',
          th: 'รายงานสต็อก'
        },
        excerpt: {
          en: 'Inventory tracking with product details, stock movements, profit analysis, and downloadable reports',
          id: 'Pelacakan inventori dengan detail produk, pergerakan stok, analisis laba, dan laporan yang dapat diunduh',
          th: 'การติดตามสินค้าคงคลังพร้อมรายละเอียดสินค้า การเคลื่อนไหวสต็อก การวิเคราะห์กำไร และรายงานที่สามารถดาวน์โหลดได้'
        },
        readingTime: 3,
        lastUpdated: '2025-02-15'
      },
      {
        id: 'customers-report',
        title: {
          en: 'Customers Report',
          id: 'Laporan Pelanggan',
          th: 'รายงานลูกค้า'
        },
        excerpt: {
          en: 'Generate customers reports for your business',
          id: 'Buat laporan pelanggan untuk bisnis Anda',
          th: 'สร้างรายงานลูกค้าสำหรับธุรกิจของคุณ'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'receivables-report',
        title: {
          en: 'Receivables Report',
          id: 'Laporan Piutang',
          th: 'รายงานลูกหนี้'
        },
        excerpt: {
          en: 'Track customer unpaid transactions and outstanding balances',
          id: 'Pantau transaksi unpaid pelanggan dan saldo outstanding',
          th: 'ติดตามธุรกรรมค้างชำระของลูกค้าและยอดคงเหลือ'
        },
        readingTime: 2,
        lastUpdated: '2025-02-15'
      },
      {
        id: 'expense',
        title: {
          en: 'Expense Management',
          id: 'Manajemen Pengeluaran',
          th: 'การจัดการค่าใช้จ่าย'
        },
        excerpt: {
          en: 'Track, categorize, and manage business expenses with visual analytics',
          id: 'Lacak, kategorikan, dan kelola pengeluaran bisnis dengan analitik visual',
          th: 'ติดตาม จัดหมวดหมู่ และจัดการค่าใช้จ่ายธุรกิจด้วยการวิเคราะห์แบบภาพ'
        },
        readingTime: 3,
        lastUpdated: '2025-02-15'
      }
    ]
  },
  {
    id: 'subscription',
    title: {
      en: 'Subscription',
      id: 'Langganan',
      th: 'การสมัครสมาชิก'
    },
    description: {
      en: 'Upgrade your account to get more features',
      id: 'Upgrade akun Anda untuk mendapatkan lebih banyak fitur',
      th: 'อัปเกรดบัญชีของคุณเพื่อรับฟีเจอร์เพิ่มเติม'
    },
    icon: '💎',
    articles: [
      {
        id: 'how-to-upgrade',
        title: {
          en: 'How to Upgrade',
          id: 'Cara Upgrade',
          th: 'วิธีอัปเกรด'
        },
        excerpt: {
          en: 'How to upgrade your account to get more features',
          id: 'Cara upgrade akun Anda untuk mendapatkan lebih banyak fitur',
          th: 'วิธีอัปเกรดบัญชีของคุณเพื่อรับฟีเจอร์เพิ่มเติม'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'catalog',
    title: {
      en: 'Product Catalogs',
      id: 'Katalog Produk',
      th: 'แคตตาล็อกสินค้า'
    },
    description: {
      en: 'Create and share curated product collections with customers',
      id: 'Buat dan bagikan koleksi produk pilihan dengan pelanggan',
      th: 'สร้างและแบ่งปันคอลเลกชันสินค้าที่คัดสรรกับลูกค้า'
    },
    icon: '📖',
    articles: [
      {
        id: 'creating-catalogs',
        title: {
          en: 'Creating and Managing Product Catalogs',
          id: 'Membuat dan Mengelola Katalog Produk',
          th: 'การสร้างและจัดการแคตตาล็อกสินค้า'
        },
        excerpt: {
          en: 'Complete guide to creating shareable catalogs, customizing appearance, and tracking performance',
          id: 'Panduan lengkap membuat katalog yang dapat dibagikan, menyesuaikan tampilan, dan melacak kinerja',
          th: 'คู่มือฉบับสมบูรณ์ในการสร้างแคตตาล็อกที่แบ่งปันได้ ปรับแต่งรูปลักษณ์ และติดตามประสิทธิภาพ'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'barcode',
    title: {
      en: 'Barcode',
      id: 'Barcode',
      th: 'บาร์โค้ด'
    },
    description: {
      en: 'Scan and manage products using barcodes',
      id: 'Pindai dan kelola produk menggunakan barcode',
      th: 'สแกนและจัดการสินค้าโดยใช้บาร์โค้ด'
    },
    icon: '🏷️',
    articles: [
      {
        id: 'scanning-barcodes',
        title: {
          en: 'Using Barcode Scanner in Kelola',
          id: 'Menggunakan Pemindai Barcode di Kelola',
          th: 'การใช้งานเครื่องสแกนบาร์โค้ดใน Kelola'
        },
        excerpt: {
          en: 'Complete guide to scanning products for sales, stock management, and quick lookup',
          id: 'Panduan lengkap memindai produk untuk penjualan, manajemen stok, dan pencarian cepat',
          th: 'คู่มือฉบับสมบูรณ์ในการสแกนสินค้าสำหรับการขาย การจัดการสต็อก และการค้นหาอย่างรวดเร็ว'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'multi-business',
    title: {
      en: 'Multi-Business',
      id: 'Multi-Bisnis',
      th: 'หลายธุรกิจ'
    },
    description: {
      en: 'Manage multiple business locations and transfers',
      id: 'Kelola banyak lokasi bisnis dan transfer',
      th: 'จัดการหลายสถานที่ธุรกิจและการโอนย้าย'
    },
    icon: '🏢',
    articles: [
      {
        id: 'creating-businesses',
        title: {
          en: 'Managing Multiple Businesses',
          id: 'Mengelola Beberapa Bisnis',
          th: 'การจัดการหลายธุรกิจ'
        },
        excerpt: {
          en: 'Complete guide to creating, switching between, and managing multiple business locations',
          id: 'Panduan lengkap membuat, beralih antara, dan mengelola banyak lokasi bisnis',
          th: 'คู่มือฉบับสมบูรณ์ในการสร้าง สลับระหว่าง และจัดการหลายสถานที่ธุรกิจ'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'suppliers',
    title: {
      en: 'Suppliers',
      id: 'Supplier',
      th: 'ซัพพลายเออร์'
    },
    description: {
      en: 'Manage vendor relationships and purchase history',
      id: 'Kelola hubungan vendor dan riwayat pembelian',
      th: 'จัดการความสัมพันธ์กับผู้ขายและประวัติการซื้อ'
    },
    icon: '🏭',
    articles: [
      {
        id: 'adding-suppliers',
        title: {
          en: 'Supplier Management Guide',
          id: 'Panduan Manajemen Supplier',
          th: 'คู่มือการจัดการซัพพลายเออร์'
        },
        excerpt: {
          en: 'Complete guide to managing suppliers, tracking purchase history, and streamlining procurement',
          id: 'Panduan lengkap mengelola supplier, melacak riwayat pembelian, dan menyederhanakan pengadaan',
          th: 'คู่มือฉบับสมบูรณ์ในการจัดการซัพพลายเออร์ ติดตามประวัติการซื้อ และทำให้กระบวนการจัดซื้อง่ายขึ้น'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'payment-methods',
    title: {
      en: 'Payment Methods',
      id: 'Metode Pembayaran',
      th: 'วิธีการชำระเงิน'
    },
    description: {
      en: 'Configure and manage payment options',
      id: 'Konfigurasi dan kelola opsi pembayaran',
      th: 'กำหนดค่าและจัดการตัวเลือกการชำระเงิน'
    },
    icon: '💳',
    articles: [
      {
        id: 'adding-payment-methods',
        title: {
          en: 'Payment Methods Guide',
          id: 'Panduan Metode Pembayaran',
          th: 'คู่มือวิธีการชำระเงิน'
        },
        excerpt: {
          en: 'Complete guide to managing payment methods, configuring options, and tracking by payment type',
          id: 'Panduan lengkap mengelola metode pembayaran, mengkonfigurasi opsi, dan melacak berdasarkan jenis pembayaran',
          th: 'คู่มือฉบับสมบูรณ์ในการจัดการวิธีการชำระเงิน กำหนดค่าตัวเลือก และติดตามตามประเภทการชำระเงิน'
        },
        readingTime: 4,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'account',
    title: {
      en: 'Account',
      id: 'Akun',
      th: 'บัญชี'
    },
    description: {
      en: 'Manage your account settings and preferences',
      id: 'Kelola pengaturan dan preferensi akun Anda',
      th: 'จัดการการตั้งค่าและการตั้งค่าบัญชีของคุณ'
    },
    icon: '⚙️',
    articles: [
      {
        id: 'managing-profile',
        title: {
          en: 'Account and Profile Management',
          id: 'Pengelolaan Akun dan Profil',
          th: 'การจัดการบัญชีและโปรไฟล์'
        },
        excerpt: {
          en: 'Complete guide to managing your Kelola account settings, language, notifications, and security',
          id: 'Panduan lengkap mengelola pengaturan akun Kelola, bahasa, notifikasi, dan keamanan',
          th: 'คู่มือฉบับสมบูรณ์ในการจัดการการตั้งค่าบัญชี Kelola ภาษา การแจ้งเตือน และความปลอดภัย'
        },
        readingTime: 5,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: {
      en: 'Troubleshooting',
      id: 'Pemecahan Masalah',
      th: 'การแก้ไขปัญหา'
    },
    description: {
      en: 'Solutions to common issues and errors',
      id: 'Solusi untuk masalah dan error yang umum',
      th: 'วิธีแก้ไขปัญหาและข้อผิดพลาดที่พบบ่อย'
    },
    icon: '🔧',
    articles: [
      {
        id: 'common-issues',
        title: {
          en: 'Troubleshooting Common Issues',
          id: 'Pemecahan Masalah Umum',
          th: 'การแก้ไขปัญหาที่พบบ่อย'
        },
        excerpt: {
          en: 'Solutions to common Kelola problems including login issues, sync problems, errors, and performance',
          id: 'Solusi untuk masalah Kelola yang umum termasuk masalah login, sinkronisasi, error, dan performa',
          th: 'วิธีแก้ปัญหา Kelola ที่พบบ่อย รวมถึงปัญหาการเข้าสู่ระบบ การซิงค์ ข้อผิดพลาด และประสิทธิภาพ'
        },
        readingTime: 6,
        lastUpdated: '2026-02-15'
      }
    ]
  },
  {
    id: 'about',
    title: {
      en: 'About Kelola',
      id: 'Tentang Kelola',
      th: 'เกี่ยวกับ Kelola'
    },
    description: {
      en: 'Learn the basics and get up to speed quickly',
      id: 'Pelajari dasar-dasar dan mulai dengan cepat',
      th: 'เรียนรู้พื้นฐานและเริ่มต้นได้อย่างรวดเร็ว'
    },
    icon: 'ℹ️',
    articles: [
      {
        id: 'what-is-kelola',
        title: {
          en: 'What is Kelola',
          id: 'Apa itu Kelola',
          th: 'Kelola คืออะไร'
        },
        excerpt: {
          en: 'A simple app for small business',
          id: 'Aplikasi simple untuk bisnis kecil',
          th: 'แอปง่ายๆ สำหรับธุรกิจขนาดเล็ก'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'data-security',
        title: {
          en: 'Data Security',
          id: 'Keamanan Data',
          th: 'ความปลอดภัยของข้อมูล'
        },
        excerpt: {
          en: 'Your data is safe and secure',
          id: 'Data Anda aman dan terjaga',
          th: 'ข้อมูลของคุณปลอดภัยและได้รับการปกป้อง'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'how-to-download',
        title: {
          en: 'How to Download',
          id: 'Cara Download',
          th: 'วิธีดาวน์โหลด'
        },
        excerpt: {
          en: 'How to download Kelola',
          id: 'Cara download Kelola',
          th: 'วิธีดาวน์โหลด Kelola'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  }
];
