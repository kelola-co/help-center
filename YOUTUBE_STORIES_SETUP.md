# YouTube Stories Component Setup

This document explains how to use and customize the Instagram stories-style YouTube video component that has been added to your help center.

## 🎯 What's Been Added

1. **YouTubeStories.astro** - The main component that displays videos in Instagram stories style
2. **youtubeVideos.ts** - Data file containing your video information
3. **youtube.ts** - TypeScript interfaces for type safety
4. Updated homepage to display the stories component

## 🚀 How It Works

The component displays YouTube videos as circular thumbnails in a horizontal scrollable row, similar to Instagram stories. Each video has:
- Circular thumbnail with Instagram-style gradient border
- Video title below the thumbnail
- Duration badge (optional)
- Play icon overlay on hover
- Click to open video in new tab

## 📝 Adding Your Videos

To add your YouTube videos, edit `src/data/youtubeVideos.ts`:

```typescript
export const tutorialVideos: YouTubeVideo[] = [
  {
    id: getVideoId('https://youtu.be/YOUR_VIDEO_ID'),
    title: 'Your Video Title',
    duration: '1:30' // Optional
  },
  // Add more videos...
];
```

### Getting Video Information

1. **Video ID**: Use the `getVideoId()` function with your full YouTube URL
2. **Title**: Provide a short, descriptive title (will be truncated if too long)
3. **Duration**: Optional, format as "MM:SS" or "H:MM:SS"
4. **Thumbnail**: Optional, will auto-generate from YouTube if not provided

## 🎨 Customization Options

### Component Props

```astro
<YouTubeStories 
  videos={tutorialVideos} 
  playlistTitle="Your Custom Title"
/>
```

### Styling Customization

The component uses CSS custom properties that you can override:

```css
.youtube-stories-container {
  /* Customize the container */
}

.story-ring {
  /* Customize the gradient border */
  background: linear-gradient(45deg, #your-colors);
}

.story-item:hover {
  /* Customize hover effects */
}
```

### Mobile Responsiveness

The component is fully responsive:
- Desktop: 80px circular thumbnails
- Mobile: 70px circular thumbnails
- Horizontal scrolling on all devices
- Touch-friendly interactions

## 🌐 Multi-language Support

The component supports your existing multi-language setup. Update the titles in your page:

```typescript
const storyTitles = {
  en: "Video Tutorials",
  id: "Tutorial Video"
};
```

## 📱 Features

- ✅ Instagram-style circular thumbnails
- ✅ Gradient borders like Instagram stories
- ✅ Horizontal scrolling
- ✅ Auto-generated thumbnails from YouTube
- ✅ Click to play videos
- ✅ Mobile responsive
- ✅ Hover effects
- ✅ Duration badges
- ✅ Multi-language support

## 🔧 Advanced Usage

### Multiple Video Categories

You can create different categories of videos:

```typescript
export const videoCategories = {
  tutorials: tutorialVideos,
  tips: tipVideos,
  guides: guideVideos,
};
```

Then use them separately:

```astro
<YouTubeStories videos={videoCategories.tutorials} playlistTitle="Tutorials" />
<YouTubeStories videos={videoCategories.tips} playlistTitle="Quick Tips" />
```

### Custom Thumbnail URLs

If you want to use custom thumbnails instead of YouTube's auto-generated ones:

```typescript
{
  id: 'your-video-id',
  title: 'Custom Video',
  thumbnail: 'https://your-custom-thumbnail.jpg',
  duration: '2:15'
}
```

## 🎯 Next Steps

1. Replace the placeholder video IDs in `src/data/youtubeVideos.ts` with your actual YouTube video URLs
2. Update video titles to match your content
3. Add duration information for better user experience
4. Test the component on different devices
5. Customize the styling to match your brand colors if needed

## 📋 Sample Video Data Format

Here's how to format your video data:

```typescript
{
  id: getVideoId('https://youtu.be/0K8CMwl8xr8?si=juQzbZsvYhQojhLc'),
  title: 'Getting Started Guide',
  duration: '3:45'
}
```

The component will automatically:
- Extract the video ID from the URL
- Generate the thumbnail URL
- Handle the click events to open videos
- Apply the Instagram stories styling 