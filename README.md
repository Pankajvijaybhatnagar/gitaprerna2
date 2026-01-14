# 🕉️ Gita Prerna - भगवद् गीता की प्रेरणा

A beautiful, modern web application for exploring the Bhagavad Gita in Hindi and English.

## 🎨 Design Colors (As Requested)
- **Primary**: `#72471c` (Rich Brown)
- **Secondary**: `#a59069` (Golden Brown)  
- **Background**: White with cream accents

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```
**Wait time:** 2-3 minutes (downloads ~200MB of node_modules)

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Open [http://localhost:3000](http://localhost:3000)

## ✨ What's Included

### Pages (4)
1. **Home** (`/`) - Beautiful landing page
2. **Chapters** (`/chapters`) - List all 18 chapters
3. **Chapter Detail** (`/chapter/[id]`) - Full chapter content
4. **Admin** (`/admin`) - Manage chapters

### Components (9)
- `Header.js` - Navigation with mobile menu
- `Footer.js` - Site footer
- `ChapterForm.js` - Add/Edit chapters
- `Button.js` - Reusable button
- `Card.js` - Card component
- `Loading.js` - Loading state

### Features
✅ Bilingual (Hindi & English)
✅ Responsive design
✅ Beautiful animations
✅ Admin panel with CRUD
✅ Data persistence (localStorage)
✅ 2 pre-loaded chapters

## 📦 What You Need

### Required Software
1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **npm** (comes with Node.js)

### Check Your Installation
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## 🛠️ Installation Steps (Detailed)

### 1. Extract This Project
Unzip the folder to your desired location

### 2. Open Terminal/Command Prompt
- **Windows**: Right-click folder → "Open in Terminal"
- **Mac**: Right-click folder → "New Terminal at Folder"
- **Linux**: Right-click folder → "Open in Terminal"

### 3. Navigate to Project (if needed)
```bash
cd path/to/gita-prerna-complete
```

### 4. Install All Dependencies
```bash
npm install
```

**This will download:**
- Next.js 15.1.3
- React 19.0.0
- Framer Motion
- Zustand
- Tailwind CSS
- Lucide React icons
- And all their dependencies (~200MB)

**Expected output:**
```
added 312 packages in 2m
```

### 5. Start the App
```bash
npm run dev
```

**Expected output:**
```
▲ Next.js 15.1.3
- Local:        http://localhost:3000
- Ready in 2.3s
```

### 6. Open Your Browser
Navigate to: `http://localhost:3000`

🎉 **Done! Your app is running!**

## 📁 Project Structure

```
gita-prerna-complete/
│
├── 📄 Configuration Files
│   ├── package.json          # Dependencies list
│   ├── next.config.js        # Next.js config
│   ├── tailwind.config.js    # Tailwind CSS config
│   ├── postcss.config.js     # PostCSS config
│   ├── jsconfig.json         # JavaScript config
│   ├── .eslintrc.json        # ESLint config
│   └── .gitignore            # Git ignore rules
│
├── 📱 app/ (Next.js App Directory)
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   ├── globals.css           # Global styles
│   │
│   ├── chapters/
│   │   └── page.js           # Chapters list
│   │
│   ├── chapter/[id]/
│   │   └── page.js           # Individual chapter
│   │
│   └── admin/
│       └── page.js           # Admin panel
│
├── 🧩 components/
│   ├── layout/
│   │   ├── Header.js         # Navigation
│   │   └── Footer.js         # Footer
│   │
│   ├── admin/
│   │   └── ChapterForm.js    # Chapter form
│   │
│   └── ui/
│       ├── Button.js         # Button component
│       ├── Card.js           # Card component
│       └── Loading.js        # Loading component
│
├── 📊 lib/
│   └── store.js              # Zustand store
│
├── 📂 public/
│   ├── images/               # Images folder
│   └── fonts/                # Fonts folder
│
├── 📚 data/
│   └── (optional data files)
│
└── 🗂️ After npm install:
    ├── node_modules/         # All dependencies (auto-generated)
    └── .next/                # Build output (auto-generated)
```

## 🎯 Using the App

### View Chapters
1. Click "Explore Chapters" on home page
2. Browse the 2 default chapters
3. Click any chapter to read full content

### Admin Panel
1. Click "Admin" in navigation
2. Add new chapters
3. Edit existing chapters
4. Delete chapters
5. Reset to default

### Adding a Chapter
1. Go to Admin (`/admin`)
2. Click "Add New Chapter"
3. Fill in all fields:
   - Hindi Title: कर्म योग
   - English Title: The Yoga of Action
   - Verses: 43
   - Summaries (both languages)
   - Key Teachings (add multiple)
   - Detailed Explanations
4. Click "Add Chapter"

## 🔧 Available Commands

```bash
# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Module not found errors?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### npm install fails?
```bash
# Try with legacy peer deps
npm install --legacy-peer-deps
```

### Styles not loading?
- Check if `globals.css` is imported in `app/layout.js`
- Verify `tailwind.config.js` exists
- Clear browser cache (Ctrl+Shift+R)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📱 Responsive Design

Works perfectly on:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px+)
- 📱 Tablet (768px+)
- 📱 Mobile (320px+)

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary-brown: #72471c;     /* Your color */
  --secondary-brown: #a59069;    /* Your color */
}
```

### Change Fonts
Edit `app/layout.js`:
```javascript
import { YourFont } from 'next/font/google'
```

### Add More Chapters
Use the Admin Panel at `/admin`

## 🚀 Deployment

### Deploy to Vercel (Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! ✅

### Deploy to Netlify
1. Build: `npm run build`
2. Publish directory: `.next`
3. Deploy via Netlify CLI or drag-and-drop

## 📚 Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **Framer Motion** - Animations
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 🔐 Data Storage

- Uses browser **localStorage**
- Data persists across sessions
- No backend required
- Can be cleared: `localStorage.clear()`

## 💾 Default Content

Includes 2 pre-loaded chapters:
1. **Chapter 1**: अर्जुन विषाद योग
2. **Chapter 2**: सांख्य योग

## ❓ Need Help?

### Common Issues

**Q: npm install is slow**
A: Normal! Downloads ~200MB. Wait 2-3 minutes.

**Q: Port error when starting**
A: Use `npm run dev -- -p 3001`

**Q: White screen in browser**
A: Check terminal for errors. Try `rm -rf .next && npm run dev`

**Q: Chapters not saving**
A: Check browser console. localStorage must be enabled.

## 📞 Support

- Check terminal for error messages
- Read error messages carefully
- Ensure Node.js v18+ is installed
- Try reinstalling: `rm -rf node_modules && npm install`

## ✅ Success Checklist

After setup, you should see:
- ✅ Home page with Om symbol
- ✅ Navigation menu working
- ✅ 2 chapters in list
- ✅ Admin panel accessible
- ✅ No console errors

## 🎉 You're Ready!

Your complete Gita Prerna application is ready to use!

**Commands to remember:**
- Start: `npm run dev`
- Stop: Press `Ctrl+C` in terminal
- Admin: Go to `/admin` in browser

---

**Made with 🙏 and devotion**

**ॐ शान्ति शान्ति शान्ति:**
#   g i t a p r e r n a 2  
 