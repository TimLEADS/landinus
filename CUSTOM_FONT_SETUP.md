# Custom Font Setup - Unique Typography System

## Current Implementation

I've set up a **unique font combination** that creates a distinctive look:

### Serif Font (Headings): **Cormorant Garamond**
- Elegant, professional serif
- High contrast, modern feel
- Perfect for real estate
- Unique letter-spacing (-0.02em)

### Sans-Serif Font (Body): **Space Grotesk**
- Geometric, clean sans-serif
- Professional and modern
- Excellent readability
- Unique letter-spacing (-0.01em)

## Why This Combination is Unique

1. **Cormorant Garamond** - Not commonly used, elegant serif
2. **Space Grotesk** - Modern geometric sans, distinctive
3. **Custom Letter-Spacing** - Tighter spacing creates unique feel
4. **Font Features** - Kerning and ligatures enabled
5. **Combined Effect** - Creates a premium, distinctive look

## Typography Enhancements Applied

- **Letter-spacing**: Custom negative spacing for modern look
- **Line-height**: Optimized for readability (1.75)
- **Font-smoothing**: Antialiased for crisp rendering
- **Font-features**: Kerning and ligatures enabled
- **Weight hierarchy**: Clear distinction between weights

## To Use Your Own AI-Generated Font

### Step 1: Generate Your Font
Use one of these tools:
- **Calligraphr**: https://www.calligraphr.com (handwriting to font)
- **FontStruct**: https://fontstruct.com (build from blocks)
- **Glyphr Studio**: https://www.glyphrstudio.com (professional)

### Step 2: Export Font Files
Export as:
- `.woff2` (best compression)
- `.woff` (fallback)

### Step 3: Add to Project
Place files in `public/fonts/`:
- `custom-serif.woff2` (for headings)
- `custom-sans.woff2` (for body)

### Step 4: Update CSS
Uncomment the `@font-face` declarations in `app/globals.css`:
```css
@font-face {
  font-family: 'LandSerif';
  src: url('/fonts/custom-serif.woff2') format('woff2');
}
```

## Current Font Stack (Unique Combination)

### Headings:
```
LandSerif → Cormorant Garamond → Playfair Display → Georgia → serif
```

### Body:
```
LandSans → Space Grotesk → System fonts → sans-serif
```

## Font Showcase

Visit `/font-showcase` to see:
- Font samples
- Character sets
- Typography examples
- Size variations

## Why This Looks Unique

1. **Cormorant Garamond** is rarely used in web design
2. **Space Grotesk** is modern and distinctive
3. **Combined** they create a unique, premium feel
4. **Custom spacing** makes it feel custom-designed
5. **Font features** add polish

## Result

Your site now has:
- ✅ Unique font combination
- ✅ Premium typography
- ✅ Distinctive look
- ✅ Professional feel
- ✅ Ready for custom fonts (when you generate them)

The current combination is already unique and distinctive. When you generate your custom AI font, just add it to `public/fonts/` and uncomment the CSS!

