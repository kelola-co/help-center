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
        id: 'quick-start',
        title: {
          en: 'Quick Start Guide',
          id: 'Panduan Mulai Cepat'
        },
        excerpt: {
          en: 'Get started with our platform in less than 5 minutes',
          id: 'Mulai menggunakan platform kami dalam waktu kurang dari 5 menit'
        },
        readingTime: 3,
        lastUpdated: '2024-03-20'
      },
      {
        id: 'account-setup',
        title: {
          en: 'Setting Up Your Account',
          id: 'Mengatur Akun Anda'
        },
        excerpt: {
          en: 'Learn how to configure your account for optimal use',
          id: 'Pelajari cara mengkonfigurasi akun Anda untuk penggunaan optimal'
        },
        readingTime: 5,
        lastUpdated: '2024-03-19'
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
        id: 'dashboard',
        title: {
          en: 'Using the Dashboard',
          id: 'Menggunakan Dashboard'
        },
        excerpt: {
          en: 'Navigate and understand your dashboard interface',
          id: 'Navigasi dan pahami antarmuka dashboard Anda'
        },
        readingTime: 4,
        lastUpdated: '2024-03-18'
      },
      {
        id: 'reports',
        title: {
          en: 'Generating Reports',
          id: 'Membuat Laporan'
        },
        excerpt: {
          en: 'Learn how to create and customize reports',
          id: 'Pelajari cara membuat dan menyesuaikan laporan'
        },
        readingTime: 6,
        lastUpdated: '2024-03-17'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: {
      en: 'Troubleshooting',
      id: 'Pemecahan Masalah'
    },
    description: {
      en: 'Common issues and how to resolve them',
      id: 'Masalah umum dan cara mengatasinya'
    },
    icon: '🔧',
    articles: [
      {
        id: 'common-issues',
        title: {
          en: 'Common Issues',
          id: 'Masalah Umum'
        },
        excerpt: {
          en: 'Solutions for frequently encountered problems',
          id: 'Solusi untuk masalah yang sering ditemui'
        },
        readingTime: 5,
        lastUpdated: '2024-03-16'
      },
      {
        id: 'error-codes',
        title: {
          en: 'Error Code Reference',
          id: 'Referensi Kode Error'
        },
        excerpt: {
          en: 'Understanding error messages and their solutions',
          id: 'Memahami pesan error dan solusinya'
        },
        readingTime: 4,
        lastUpdated: '2024-03-15'
      }
    ]
  }
];