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
    id: 'stock',
    title: {
      en: 'Stock Management',
      id: 'Manajemen Stok',
      th: 'การจัดการสต็อก'
    },
    description: {
      en: 'Manage your stock with ease',
      id: 'Manajemen stok dengan mudah',
      th: 'จัดการสต็อกของคุณได้อย่างง่ายดาย'
    },
    icon: '📦',
    articles: [
      {
        id: 'difference-stock-in-out-audit',
        title: {
          en: 'Difference Stock In, Out, and Audit',
          id: 'Perbedaan Stok Masuk, Keluar, dan Audit',
          th: 'ความแตกต่างระหว่างรับสินค้าเข้า จ่ายสินค้าออก และตรวจนับ'
        },
        excerpt: {
          en: 'Difference between stock in, out, and audit',
          id: 'Perbedaan antara stok masuk, keluar, dan audit',
          th: 'ความแตกต่างระหว่างรับสินค้าเข้า จ่ายสินค้าออก และตรวจนับ'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'record-stock-in',
        title: {
          en: 'Record Stock In',
          id: 'Catat Stok Masuk',
          th: 'บันทึกการรับสินค้าเข้า'
        },
        excerpt: {
          en: 'Complete guide to recording purchases and managing incoming inventory',
          id: 'Panduan lengkap mencatat pembelian dan mengelola stok masuk',
          th: 'คู่มือฉบับสมบูรณ์ในการบันทึกการซื้อและจัดการสต็อกขาเข้า'
        },
        readingTime: 2,
        lastUpdated: '2025-02-15'
      },
      {
        id: 'record-stock-out',
        title: {
          en: 'Record Stock Out',
          id: 'Catat Stok Keluar',
          th: 'บันทึกการจ่ายสินค้าออก'
        },
        excerpt: {
          en: 'How to stock out',
          id: 'Cara catat stok keluar',
          th: 'วิธีบันทึกการจ่ายสินค้าออก'
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
    id: 'staff',
    title: {
      en: 'Staff Management',
      id: 'Manajemen Karyawan',
      th: 'การจัดการพนักงาน'
    },
    description: {
      en: 'Manage your staff with ease',
      id: 'Manajemen karyawan dengan mudah',
      th: 'จัดการพนักงานของคุณได้อย่างง่ายดาย'
    },
    icon: '👨‍👩‍👦‍👦',
    articles: [
      {
        id: 'what-is-staff',
        title: {
          en: 'What is Staff Management',
          id: 'Apa itu Manajemen Karyawan',
          th: 'การจัดการพนักงานคืออะไร'
        },
        excerpt: {
          en: 'How to manage your staff in Kelola',
          id: 'Cara manajemen karyawan di Kelola',
          th: 'วิธีจัดการพนักงานใน Kelola'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'invite-staff',
        title: {
          en: 'Invite Staff',
          id: 'Undang Karyawan',
          th: 'เชิญพนักงาน'
        },
        excerpt: {
          en: 'How to invite staff to Kelola',
          id: 'Cara undang karyawan ke Kelola',
          th: 'วิธีเชิญพนักงานเข้า Kelola'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
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
      en: 'Explore our platform\'s main features',
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
    icon: '📊',
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
    icon: '💰',
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
    icon: '👥',
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
