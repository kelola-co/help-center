import type { YouTubeVideo } from '../types/youtube';

// Extract video ID from YouTube URL
function getVideoId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : '';
}

// Your tutorial videos - add more videos to this array
export const tutorialVideos: YouTubeVideo[] = [
  {
    id: getVideoId('https://youtu.be/ZatTryOOWKY?si=e8jw2BSoiL-1QyQN'),
    title: 'Buat Harga Grosir',
    duration: '0:30'
  },
  {
    id: getVideoId('https://youtu.be/quAU6UW-bx8?si=dvndeVg-fwZ7XeIy'),
    title: 'Buat Catalog Online',
    duration: '1:15'
  },
  {
    id: getVideoId('https://youtu.be/LV2-vQLYSVw?si=fY_f_1re38uicVOt'),
    title: 'Buat Tambah Staff',
    duration: '2:30'
  },
  {
    id: getVideoId('https://youtu.be/nN2WQCJEvqw?si=jhJzzryXI-xgInLj'),
    title: 'Cek Omset & Profit',
    duration: '1:45'
  },
  {
    id: getVideoId('https://youtu.be/x1WgF27qX9s?si=-se5TixRxfpzBfWm'),
    title: 'Cek Barang Terlaris',
    duration: '3:00'
  },
  {
    id: getVideoId('https://youtu.be/yttbZeGQzvE?si=JwNvYcY5siUaz0u5'),
    title: 'Cek Pembeli Terbanyak',
    duration: '3:00'
  },
  
];

// You can also organize videos by categories if needed
export const videoCategories = {
  tutorials: tutorialVideos,
  // Add more categories as needed
  // tips: [],
  // guides: [],
}; 