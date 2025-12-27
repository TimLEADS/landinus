# Quick AI Video Generation Guide

## 🚀 Fastest Way to Get Your Video

### Option 1: Pika Labs (Free & Fast) ⭐ Recommended for Quick Start

1. **Join Discord**: https://discord.gg/pika
2. **Go to any generation channel** (like #generate-1)
3. **Copy and paste this command**:

```
/create Cinematic slow-motion drone shot of a beautiful American suburban neighborhood at golden hour. Warm sunlight filters through mature trees. Modern homes with manicured lawns. Professional real estate agent in business attire reviewing property data on a tablet, sitting at an elegant outdoor table. Soft focus, shallow depth of field. 4K quality, smooth camera movement, professional real estate commercial style. --aspect-ratio 16:9 --duration 15
```

4. **Wait 1-2 minutes** for generation
5. **Download the video**
6. **Place in**: `public/videos/hero-property.mp4`
7. **Done!** Video will auto-play on your site

### Option 2: RunwayML (Best Quality)

1. **Sign up**: https://runwayml.com (free tier available)
2. **Click "Gen-2" or "Gen-3"**
3. **Paste this prompt**:

```
Cinematic slow-motion drone shot of a beautiful American suburban neighborhood at golden hour. Warm sunlight filters through mature trees. Modern homes with manicured lawns. Professional real estate agent in business attire reviewing property data on a tablet, sitting at an elegant outdoor table. Soft focus, shallow depth of field. 4K quality, smooth camera movement, professional real estate commercial style.
```

4. **Set duration**: 15-20 seconds
5. **Set aspect ratio**: 16:9
6. **Click Generate** (takes 2-5 minutes)
7. **Export as MP4** (1080p or 4K)
8. **Place in**: `public/videos/hero-property.mp4`

### Option 3: Use Free Stock Video (Instant)

1. **Visit**: https://www.pexels.com/videos/
2. **Search**: "real estate agent tablet" or "suburban neighborhood"
3. **Download** a video you like
4. **Place in**: `public/videos/hero-property.mp4`
5. **Done!**

## 📋 All Prompts (Copy & Paste Ready)

### Prompt 1: Suburban Neighborhood ⭐ Best Choice
```
Cinematic slow-motion drone shot of a beautiful American suburban neighborhood at golden hour. Warm sunlight filters through mature trees. Modern homes with manicured lawns. Professional real estate agent in business attire reviewing property data on a tablet, sitting at an elegant outdoor table. Soft focus, shallow depth of field. 4K quality, smooth camera movement, professional real estate commercial style.
```

### Prompt 2: Agent at Work
```
Professional real estate agent in modern office reviewing property listings on tablet. Golden hour lighting through large windows. Slow push-in camera movement. Calm, confident, professional atmosphere. Soft focus background, sharp foreground. Real estate commercial style, 4K quality, cinematic.
```

### Prompt 3: Property Showcase
```
Slow cinematic pan across beautiful suburban neighborhood at sunset. Modern American homes with perfect landscaping. Golden hour lighting creates warm glow. Professional real estate agent visible in foreground reviewing tablet. Smooth camera movement, shallow depth of field, professional real estate commercial aesthetic.
```

## 🎯 What You Need

- **File Location**: `public/videos/hero-property.mp4`
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Under 5MB recommended (for fast loading)

## ✅ After Adding Video

1. Restart dev server: `npm run dev`
2. Visit homepage
3. Video should auto-play and loop
4. If video doesn't exist, beautiful animated placeholder shows

## 🆘 Troubleshooting

**Video not playing?**
- Check file is at: `public/videos/hero-property.mp4`
- File must be MP4 format
- Clear browser cache

**File too large?**
- Use online compressor: https://www.freeconvert.com/video-compressor
- Or use ffmpeg: `ffmpeg -i input.mp4 -crf 23 output.mp4`

**Need more help?**
- See full guide: `AI_VIDEO_GENERATION_GUIDE.md`
- Visit helper page: `/ai-video-helper`

## 🎬 That's It!

Your hero video component is ready. Just add your video file and it will automatically display with all premium effects!

