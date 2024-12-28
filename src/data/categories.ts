export interface Category {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  icon: string;
  articles: Article[];
}

export interface Article {
  id: string;
  title: {
    en: string;
    id: string;
  };
  excerpt: {
    en: string;
    id: string;
  };
  readingTime: number;
  lastUpdated: string;
}

export const categories: Category[] = [
  {
    id: 'about',
    title: {
      en: 'About Kelola',
      id: 'Tentang Kelola'
    },
    description: {
      en: 'Learn the basics and get up to speed quickly',
      id: 'Pelajari dasar-dasar dan mulai dengan cepat'
    },
    icon: '👥',
    articles: [
      {
        id: 'what-is-kelola',
        title: {
          en: 'What is Kelola',
          id: 'Apa itu Kelola'
        },
        excerpt: {
          en: 'A simple app for small business',
          id: 'Aplikasi simple untuk bisnis kecil'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'data-security',
        title: {
          en: 'Data Security',
          id: 'Keamanan Data'
        },
        excerpt: {
          en: 'Your data is safe and secure',
          id: 'Data Anda aman dan terjaga'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'how-to-download',
        title: {
          en: 'How to Download',
          id: 'Cara Download'
        },
        excerpt: {
          en: 'How to download Kelola',
          id: 'Cara download Kelola'
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
      id: 'Fitur Utama'
    },
    description: {
      en: 'Explore our platform\'s main features',
      id: 'Jelajahi fitur utama platform kami'
    },
    icon: '⭐',
    articles: [
      {
        id: 'print-invoice',
        title: {
          en: 'Print Invoice',
          id: 'Cetak Invoice'
        },
        excerpt: {
          en: 'How to print an invoice or transaction receipt in the Kelola app',
          id: 'Cara mencetak invoice atau struk bukti transaksi di aplikasi Kelola'
        },
        readingTime: 4,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'barcode-scanner',
        title: {
          en: 'Barcode Scanner',
          id: 'Barcode Scanner'
        },
        excerpt: {
          en: 'Input items quickly using a barcode scanner',
          id: 'Input barang dengan cepat menggunakan barcode scanner'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'customer',
        title: {
          en: 'Customer Management',
          id: 'Manajemen Pelanggan'
        },
        excerpt: {
          en: 'Manage your customers with ease',
          id: 'Manajemen pelanggan dengan mudah'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'vendor',
        title: {
          en: 'Vendor Management',
          id: 'Manajemen Vendor'
        },
        excerpt: {
          en: 'Manage your vendors with ease',
          id: 'Manajemen vendor dengan mudah'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'reports',
    title: {
      en: 'Business Reports',
      id: 'Laporan Bisnis'
    },
    description: {
      en: 'Generate reports for your business',
      id: 'Buat laporan untuk bisnis Anda'
    },
    icon: '📊',
    articles: [
      {
        id: 'accounting-report',
        title: {
          en: 'Accounting Report',
          id: 'Laporan Akuntansi'
        },
        excerpt: {
          en: 'Generate accounting reports for your business',
          id: 'Buat laporan akuntansi untuk bisnis Anda'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'stock-report',
        title: {
          en: 'Stock Report',
          id: 'Laporan Stok'
        },
        excerpt: {
          en: 'Generate stock reports for your business',
          id: 'Buat laporan stok untuk bisnis Anda'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'customers-report',
        title: {
          en: 'Customers Report',
          id: 'Laporan Pelanggan'
        },
        excerpt: {
          en: 'Generate customers reports for your business',
          id: 'Buat laporan pelanggan untuk bisnis Anda'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'staff',
    title: {
      en: 'Staff Management',
      id: 'Manajemen Karyawan'
    },
    description: {
      en: 'Manage your staff with ease',
      id: 'Manajemen karyawan dengan mudah'
    },
    icon: '👨‍👩‍👦‍👦',
    articles: [
      {
        id: 'what-is-staff',
        title: {
          en: 'What is Staff Management',
          id: 'Apa itu Manajemen Karyawan'
        },
        excerpt: {
          en: 'How to manage your staff in Kelola',
          id: 'Cara manajemen karyawan di Kelola'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'invite-staff',
        title: {
          en: 'Invite Staff',
          id: 'Undang Karyawan'
        },
        excerpt: {
          en: 'How to invite staff to Kelola',
          id: 'Cara undang karyawan ke Kelola'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'join-business',
        title: {
          en: 'How Staff Join Business',
          id: 'Cara Karyawan Bergabung Bisnis'
        },
        excerpt: {
          en: 'How to join a business in Kelola with an invitation code',
          id: 'Cara bergabung dengan bisnis di Kelola dengan kode undangan'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'stock',
    title: {
      en: 'Stock Management',
      id: 'Manajemen Stok'
    },
    description: {
      en: 'Manage your stock with ease',
      id: 'Manajemen stok dengan mudah'
    },
    icon: '📦',
    articles: [
      {
        id: 'difference-stock-in-out-audit',
        title: {
          en: 'Difference Stock In, Out, and Audit',
          id: 'Perbedaan Stock In, Out, dan Audit'
        },
        excerpt: {
          en: 'Difference between stock in, out, and audit',
          id: 'Perbedaan antara stock in, out, dan audit'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'record-stock-in',
        title: {
          en: 'Record Stock In',
          id: 'Catat Stok Masuk'
        },
        excerpt: {
          en: 'How to stock in',
          id: 'Cara catat stok masuk'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'record-stock-out',
        title: {
          en: 'Record Stock Out',
          id: 'Catat Stok Keluar'
        },
        excerpt: {
          en: 'How to stock out',
          id: 'Cara catat stok keluar'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      },
      {
        id: 'delete-or-edit-record',
        title: {
          en: 'Delete or Edit Record',
          id: 'Hapus atau Edit Catatan'
        },
        excerpt: {
          en: 'How to delete or edit a record',
          id: 'Cara hapus atau edit catatan'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  {
    id: 'subscription',
    title: {
      en: 'Subscription',
      id: 'Langganan'
    },
    description: {
      en: 'Upgrade your account to get more features',
      id: 'Upgrade akun Anda untuk mendapatkan lebih banyak fitur'
    },
    icon: '💰',
    articles: [
      {
        id: 'how-to-upgrade',
        title: {
          en: 'How to Upgrade',
          id: 'Cara Upgrade'
        },
        excerpt: {
          en: 'How to upgrade your account to get more features',
          id: 'Cara upgrade akun Anda untuk mendapatkan lebih banyak fitur'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  }
];
