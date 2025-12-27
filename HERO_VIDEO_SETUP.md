# Hero Video Setup Guide

## Overview

The hero section now features an auto-playing property video with premium effects. The video automatically loops and includes smooth animations, overlays, and interactive controls.

## Features

### ✨ Premium Effects
- **Auto-playing video** - Loops seamlessly
- **Animated overlays** - Subtle color gradients that pulse
- **Shimmer effect** - Smooth light sweep across video
- **Border glow** - Emerald-tinted border with shadow
- **Play/Pause control** - Appears on hover
- **Loading state** - Smooth transition while video loads
- **Fallback placeholder** - Beautiful animated placeholder if video doesn't exist

### 🎨 Visual Enhancements
- Gradient overlays for depth
- Color-tinted borders (emerald glow)
- Smooth transitions and animations
- Professional video filters (brightness/contrast)
- Responsive design

## Setup Instructions

### 1. Add Your Video File

Place your property video in the `public/videos/` directory:

```
public/
  videos/
    hero-property.mp4  (required)
    hero-property.webm (optional, for better browser support)
```

### 2. Video Specifications

**Recommended:**
- **Format**: MP4 (H.264 codec) + WebM (optional)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 4:3 (matches component)
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Under 5MB for fast loading
- **Content**: 
  - Calm American suburban neighborhood at golden hour
  - Professional real estate agent reviewing data on tablet
  - Slow, cinematic movement
  - Professional, high-quality footage

### 3. Video Content Ideas

**Option 1: Property Showcase**
- Slow pan across beautiful suburban neighborhood
- Golden hour lighting
- Professional, cinematic quality

**Option 2: Agent at Work**
- Real estate agent reviewing property data on tablet
- Modern office or outdoor setting
- Professional, confident demeanor

**Option 3: Combined**
- Start with neighborhood view
- Transition to agent reviewing data
- Smooth, professional editing

### 4. Optimization Tips

**Reduce File Size:**
```bash
# Using ffmpeg to compress video
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -crf 23 -preset medium hero-property.mp4

# Create WebM version for better compression
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 hero-property.webm
```

**Optimize for Web:**
- Use H.264 codec for MP4
- Keep bitrate reasonable (2-5 Mbps)
- Consider using WebM for smaller file sizes
- Test on different devices/browsers

## How It Works

### Video Component (`HeroVideo.tsx`)
1. Attempts to load video from `/videos/hero-property.mp4`
2. If video exists: Shows video with effects
3. If video doesn't exist: Shows animated placeholder
4. Auto-plays, loops, and is muted (for autoplay policies)
5. Includes play/pause control on hover

### Placeholder Component (`HeroVideoPlaceholder.tsx`)
- Beautiful animated fallback
- Floating property icons
- Gradient backgrounds
- Shimmer effects
- Professional appearance

## Customization

### Change Video Path
Edit `components/home/HeroVideo.tsx`:
```tsx
<source src="/videos/your-video.mp4" type="video/mp4" />
```

### Adjust Effects
Edit `app/globals.css`:
```css
video {
  filter: brightness(1.05) contrast(1.1); /* Adjust brightness/contrast */
}
```

### Modify Overlays
Edit `components/home/HeroVideo.tsx`:
```tsx
{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 ..." />
```

## Browser Support

- ✅ Chrome/Edge (Full support)
- ✅ Firefox (Full support)
- ✅ Safari (Full support)
- ✅ Mobile browsers (Full support)

## Performance

- Video loads lazily
- Optimized for web delivery
- Smooth 60fps animations
- Minimal performance impact

## Troubleshooting

### Video Not Playing
1. Check file path: `/public/videos/hero-property.mp4`
2. Verify file format (MP4 H.264)
3. Check browser console for errors
4. Ensure file size is reasonable (< 10MB)

### Autoplay Blocked
- Video is muted by default (required for autoplay)
- User can click play/pause button
- Placeholder shows if video fails to load

### Performance Issues
- Compress video file
- Use WebM format for smaller size
- Consider lower resolution (1080p is usually enough)

## Next Steps

1. ✅ Add your property video to `public/videos/hero-property.mp4`
2. ✅ Test on different browsers
3. ✅ Optimize video file size
4. ✅ Customize effects if needed

The video component is ready to use! Just add your video file and it will automatically display with all the premium effects.

