# 📸 How to Add Your Profile Picture

## Quick Steps

### Option 1: Add Your Photo (Recommended)

1. **Prepare your image**
   - Take a professional photo of yourself
   - Save as: `profile.jpg` or `profile.png`
   - Recommended size: 400x400 pixels (square)
   - File size: Less than 500KB

2. **Add to project**
   - Create folder: `public/` (if it doesn't exist)
   - Place your image in: `public/profile.jpg`

3. **Done!**
   - Run: `npm run dev`
   - Your photo will appear on the Hero section

---

## Directory Structure

```
portfolio/
├── public/
│   └── profile.jpg          ← Add your photo here
├── src/
├── package.json
└── etc...
```

---

## What It Looks Like

After adding your photo, it will appear in:
- **Desktop**: Right side of Hero section (large rounded image)
- **Tablet**: Shows below welcome text
- **Mobile**: Displays as a preview

---

## Image Tips

✅ **Good photos:**
- Professional headshot
- Clear, well-lit
- Smiling or neutral expression
- No distracting background
- Square format preferred

❌ **Avoid:**
- Tiny photos
- Very pixelated images
- Overly casual photos
- Background too busy
- Too large file sizes

---

## Troubleshooting

### Photo not showing?
1. Make sure you created `public/` folder
2. Check filename: must be exactly `profile.jpg` (or `.png`)
3. Refresh browser: Ctrl+F5 (or Cmd+Shift+R on Mac)
4. Check console for errors: Press F12 → Console tab

### Photo is blurry?
- Use a higher resolution image
- Recommended: 400x400px or larger

### Photo is cut off?
- Make sure it's square format (1:1 ratio)
- If rectangular, it will be cropped to fit

---

## Image Format Options

You can use either:
- `profile.jpg` (recommended)
- `profile.png` (supports transparency)
- `profile.webp` (modern format)

---

## Edit the Code (Advanced)

If you want to use a different filename or location, edit:

**File:** `src/sections/Hero.jsx`

Find this line:
```jsx
<img 
    src="/profile.jpg" 
    alt="Profile" 
    className="w-full h-full object-cover rounded-3xl" 
/>
```

Change `/profile.jpg` to your image path, for example:
- `/my-photo.png`
- `/avatar.jpg`
- `/images/me.jpg`

---

## Steps to Add Photo

### 1. Create the public folder
```bash
# If public folder doesn't exist, create it
mkdir -p public
```

### 2. Add your image
- Save your photo as `profile.jpg`
- Move it to `public/profile.jpg`

### 3. Test
```bash
npm run dev
```

### 4. View
Open http://localhost:3001 and scroll down to Hero section

Your photo should now appear! 📸

---

## Common Issues

**"My photo still doesn't show"**
1. Check if file exists: `public/profile.jpg`
2. Check spelling: exactly `profile.jpg`
3. Try refreshing: F5 or Ctrl+F5
4. Check browser console for errors: F12

**"Photo looks weird/distorted"**
- Make sure it's square (1:1 ratio)
- Original must be high quality
- Try a different image

**"File too large/taking too long"**
- Resize image to ~400x400 pixels
- Reduce file size using online tools
- Convert to WebP format

---

**Done!** Your portfolio now displays your profile photo! 📸
