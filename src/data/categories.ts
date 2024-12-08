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
    id: 'getting-started',
    title: {
      en: 'Getting Started',
      id: 'Memulai'
    },
    description: {
      en: 'Learn the basics and get up to speed quickly',
      id: 'Pelajari dasar-dasar dan mulai dengan cepat'
    },
    icon: '🚀',
    articles: [
      {
        id: 'join-business',
        title: {
          en: 'How Staff Can Join a Business',
          id: 'Cara Staff Gabung ke Bisnis'
        },
        excerpt: {
          en: 'How to join a business as staff to enable various collaborations',
          id: 'Cara bergabung ke bisnis sebagai staff untuk bisa melakukan berbagai macam kolaborasi'
        },
        readingTime: 3,
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
          en: 'How to Print Invoice',
          id: 'Cara Cetak Invoice'
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
          en: 'How to Use Barcode Scanner',
          id: 'Cara Pakai Barcode Scanner'
        },
        excerpt: {
          en: 'Input items quickly using a barcode scanner',
          id: 'Input barang dengan cepat menggunakan barcode scanner'
        },
        readingTime: 1,
        lastUpdated: '2024-12-08'
      }
    ]
  },
  // {
  //   id: 'troubleshooting',
  //   title: {
  //     en: 'Troubleshooting',
  //     id: 'Pemecahan Masalah'
  //   },
  //   description: {
  //     en: 'Common issues and how to resolve them',
  //     id: 'Masalah umum dan cara mengatasinya'
  //   },
  //   icon: '🔧',
  //   articles: [
  //     {
  //       id: 'common-issues',
  //       title: {
  //         en: 'Common Issues',
  //         id: 'Masalah Umum'
  //       },
  //       excerpt: {
  //         en: 'Solutions for frequently encountered problems',
  //         id: 'Solusi untuk masalah yang sering ditemui'
  //       },
  //       readingTime: 5,
  //       lastUpdated: '2024-03-16'
  //     },
  //     {
  //       id: 'error-codes',
  //       title: {
  //         en: 'Error Code Reference',
  //         id: 'Referensi Kode Error'
  //       },
  //       excerpt: {
  //         en: 'Understanding error messages and their solutions',
  //         id: 'Memahami pesan error dan solusinya'
  //       },
  //       readingTime: 4,
    //     lastUpdated: '2024-03-15'
    //   }
    // ]
  // }
];
