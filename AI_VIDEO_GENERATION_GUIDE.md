# AI Video Generation Guide for Real Estate Hero

## Quick Start

Generate an AI video for your hero section using one of these tools, then place it in `public/videos/hero-property.mp4`.

## Best AI Video Tools

### 1. **RunwayML** (Recommended)
- **Website**: https://runwayml.com
- **Best for**: High-quality, cinematic videos
- **Cost**: Free tier available, paid plans start at $12/month

**Steps:**
1. Sign up at RunwayML
2. Go to "Gen-2" or "Gen-3" video generation
3. Use the prompt below
4. Export as MP4 (1080p)
5. Download and place in `public/videos/hero-property.mp4`

### 2. **Pika Labs** (Discord Bot)
- **Discord**: Join Pika Labs Discord server
- **Best for**: Quick generation, free tier
- **Cost**: Free (with limits)

**Steps:**
1. Join Pika Labs Discord: https://discord.gg/pika
2. Go to a generation channel
3. Use command: `/create [prompt]`
4. Download result and place in `public/videos/hero-property.mp4`

### 3. **Stable Video Diffusion**
- **Website**: https://stability.ai
- **Best for**: Open-source, customizable
- **Cost**: Free (self-hosted) or API pricing

### 4. **Kaiber** (Easy to Use)
- **Website**: https://kaiber.ai
- **Best for**: Beginners, music videos
- **Cost**: Free tier, paid plans available

## Perfect Prompts for Real Estate Hero Video

### Option 1: Suburban Neighborhood (Recommended)
```
Cinematic slow-motion drone shot of a beautiful American suburban neighborhood at golden hour. 
Warm sunlight filters through mature trees. Modern homes with manicured lawns. 
Professional real estate agent in business attire reviewing property data on a tablet, 
sitting at an elegant outdoor table. Soft focus, shallow depth of field. 
4K quality, smooth camera movement, professional real estate commercial style.
```

### Option 2: Agent at Work
```
Professional real estate agent in modern office reviewing property listings on tablet. 
Golden hour lighting through large windows. Slow push-in camera movement. 
Calm, confident, professional atmosphere. Soft focus background, sharp foreground. 
Real estate commercial style, 4K quality, cinematic.
```

### Option 3: Property Showcase
```
Slow cinematic pan across beautiful suburban neighborhood at sunset. 
Modern American homes with perfect landscaping. Golden hour lighting creates warm glow. 
Professional real estate agent visible in foreground reviewing tablet. 
Smooth camera movement, shallow depth of field, professional real estate commercial aesthetic.
```

### Option 4: Combined Scene
```
Wide establishing shot of upscale suburban neighborhood transitioning to close-up 
of professional real estate agent reviewing property data on tablet. 
Golden hour lighting, warm color palette, smooth camera movement. 
Professional real estate commercial style, 4K quality, cinematic.
```

## Detailed Prompt Breakdown

### Scene Description
- **Location**: American suburban neighborhood
- **Time**: Golden hour (sunset/sunrise)
- **Subject**: Professional real estate agent with tablet
- **Mood**: Calm, professional, trustworthy

### Technical Specifications
- **Style**: Cinematic, professional real estate commercial
- **Camera**: Slow movement, smooth transitions
- **Focus**: Shallow depth of field (agent sharp, background soft)
- **Quality**: 4K (3840x2160) or 1080p (1920x1080)
- **Duration**: 10-30 seconds (will loop)
- **Aspect Ratio**: 4:3 or 16:9 (we'll crop to 4:3)

### Visual Elements
- Warm, golden lighting
- Professional attire
- Modern technology (tablet)
- Beautiful property backdrop
- Soft, professional color grading

## Step-by-Step: RunwayML (Easiest Method)

### 1. Create Account
- Go to https://runwayml.com
- Sign up (free tier available)
- Verify email

### 2. Generate Video
1. Click "Gen-2" or "Gen-3" in dashboard
2. Select "Text to Video"
3. Paste one of the prompts above
4. Set duration: 10-30 seconds
5. Set aspect ratio: 16:9 (we'll crop)
6. Click "Generate"

### 3. Export & Download
1. Wait for generation (2-5 minutes)
2. Preview the video
3. Click "Export" → "MP4"
4. Select quality: 1080p or 4K
5. Download to your computer

### 4. Optimize Video
```bash
# Install ffmpeg first, then run:
ffmpeg -i downloaded-video.mp4 -vcodec h264 -acodec aac -crf 23 -preset medium -vf "scale=1920:1080" hero-property.mp4
```

### 5. Add to Project
1. Create folder: `public/videos/`
2. Place file: `public/videos/hero-property.mp4`
3. Restart dev server: `npm run dev`
4. Video will auto-play in hero section!

## Alternative: Use Stock Video

If AI generation takes too long, use these stock video sources:

### Free Stock Videos
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay Videos**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co

**Search Terms:**
- "real estate agent tablet"
- "suburban neighborhood golden hour"
- "professional real estate"
- "property showcase"

### Premium Stock Videos
- **Shutterstock**: https://www.shutterstock.com/video
- **Getty Images**: https://www.gettyimages.com/videos
- **Adobe Stock**: https://stock.adobe.com/video

## Video Optimization

### Compress Video (Reduce File Size)
```bash
# Using ffmpeg
ffmpeg -i input.mp4 \
  -vcodec h264 \
  -acodec aac \
  -crf 23 \
  -preset medium \
  -vf "scale=1920:1080" \
  -movflags +faststart \
  hero-property.mp4
```

### Create WebM Version (Better Compression)
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  hero-property.webm
```

## Testing Your Video

1. **Check File Size**: Should be under 5MB for fast loading
2. **Test Autoplay**: Video should auto-play and loop
3. **Test on Mobile**: Ensure it works on phones/tablets
4. **Check Performance**: Should load smoothly

## Troubleshooting

### Video Not Playing
- ✅ Check file path: `public/videos/hero-property.mp4`
- ✅ Verify file format: MP4 (H.264)
- ✅ Check file size: Under 10MB recommended
- ✅ Clear browser cache

### Video Too Large
- Compress using ffmpeg (see above)
- Use WebM format for smaller size
- Reduce resolution to 1080p

### Autoplay Blocked
- Video is muted by default (required)
- User can click play/pause button
- This is normal browser behavior

## Quick AI Video Services Comparison

| Service | Quality | Speed | Cost | Ease of Use |
|---------|---------|-------|------|-------------|
| RunwayML | ⭐⭐⭐⭐⭐ | Medium | $12/mo | ⭐⭐⭐⭐ |
| Pika Labs | ⭐⭐⭐⭐ | Fast | Free | ⭐⭐⭐⭐⭐ |
| Stable Video | ⭐⭐⭐⭐ | Slow | Free | ⭐⭐ |
| Kaiber | ⭐⭐⭐ | Fast | Free tier | ⭐⭐⭐⭐⭐ |

## Recommended Workflow

1. **Start with Pika Labs** (free, fast)
   - Test prompts quickly
   - Generate multiple variations
   - Find what works best

2. **Refine with RunwayML** (if needed)
   - Higher quality output
   - More control
   - Professional results

3. **Optimize & Deploy**
   - Compress video
   - Test on site
   - Monitor performance

## Next Steps

1. ✅ Choose an AI video tool
2. ✅ Generate video with one of the prompts
3. ✅ Download and optimize
4. ✅ Place in `public/videos/hero-property.mp4`
5. ✅ Test on your site!

Your hero video component is ready - just add your AI-generated video file!

