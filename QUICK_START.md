# 🚀 Quick Start Guide

Get your AI Tools Directory up and running in 5 minutes!

## ⚡ Fast Track

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

That's it! 🎉

---

## 📋 Step-by-Step Instructions

### Step 1: Install Dependencies (2-3 minutes)

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- And all other dependencies

**Expected output**: `added XXX packages` ✅

### Step 2: Start Development Server

```bash
npm run dev
```

**Expected output**:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Ready in XXXms
```

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

You should see:
- ✅ Beautiful home page with gradient hero
- ✅ Navigation bar with dark mode toggle
- ✅ Responsive design
- ✅ Smooth animations

### Step 4: Test Features

1. **Toggle Dark Mode**
   - Click the moon/sun icon in navbar
   - Theme should switch instantly
   - Refresh page - theme persists ✅

2. **Explore Tools**
   - Click "Explore Tools" button
   - See 25 AI tools in grid layout
   - Try search, filters, and sorting ✅

3. **View Tool Details**
   - Click "Learn More" on any tool card
   - See full tool information
   - Click "Visit Website" (opens in new tab) ✅

4. **Test Responsiveness**
   - Resize browser window
   - Check mobile view (DevTools)
   - All layouts should adapt ✅

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

---

## 🌐 Deploy to Vercel (5 minutes)

### Option 1: GitHub + Vercel Dashboard

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: AI Tools Directory"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-tools-directory.git
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repo
- Click "Deploy"
- Done! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🎯 What You Get

### Pages
- **Home** (`/`) - Hero, features, categories
- **Explore** (`/explore`) - All tools with filters
- **Tool Details** (`/explore/[slug]`) - Individual tool pages
- **About** (`/about`) - Project information
- **404** - Custom not found page

### Features
- ✅ 25 AI tools across 10+ categories
- ✅ Real-time search
- ✅ Category & pricing filters
- ✅ A-Z sorting
- ✅ Dark mode with persistence
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast (SSG + ISR)

---

## 🐛 Troubleshooting

### Issue: "Module not found" errors

**Solution**: Make sure you ran `npm install`
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Dark mode not working

**Solution**: 
1. Clear browser cache
2. Check localStorage (DevTools → Application → Local Storage)
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Build fails

**Solution**: Check Node.js version
```bash
node --version  # Should be 18.0 or higher
```

---

## 📱 Test Checklist

Before deploying, verify:

- [ ] Home page loads
- [ ] Navigation works
- [ ] Dark mode toggles
- [ ] Search filters tools
- [ ] Category filter works
- [ ] Pricing filter works
- [ ] Sorting works
- [ ] Tool detail pages load
- [ ] External links open
- [ ] Mobile responsive
- [ ] No console errors

---

## 🎨 Customization

### Add More Tools

Edit `data/aitools.json`:

```json
{
  "id": "26",
  "name": "Your Tool Name",
  "slug": "your-tool-name",
  "category": "Category",
  "description": "Description here...",
  "pricing": "Free",
  "logo": "https://images.unsplash.com/...",
  "website": "https://yourtool.com",
  "features": ["Feature 1", "Feature 2"]
}
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "hsl(262.1 83.3% 57.8%)", // Change this
  // ... other colors
}
```

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ... other metadata
}
```

---

## 📚 Learn More

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript**: [typescriptlang.org/docs](https://typescriptlang.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. See `DEPLOYMENT.md` for deployment guide
3. Read `CONTRIBUTING.md` for contribution guidelines
4. Review `PROJECT_SUMMARY.md` for technical details

---

## ✨ Pro Tips

1. **Use TypeScript**: Get autocomplete and type safety
2. **Format on Save**: Enable in your editor
3. **Use Git**: Commit frequently
4. **Test Dark Mode**: Always test both themes
5. **Check Mobile**: Use DevTools device emulation
6. **Optimize Images**: Use Next.js Image component
7. **Monitor Performance**: Use Lighthouse in DevTools

---

**Ready to build something amazing? Let's go! 🚀**

Questions? Check the documentation or create an issue on GitHub.

**Happy coding! 💻✨**
