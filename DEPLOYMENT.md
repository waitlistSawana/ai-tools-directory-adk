# 🚀 Deployment Guide

This guide will walk you through deploying the AI Tools Directory to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed locally

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: AI Tools Directory"
```

2. **Create GitHub Repository**
- Go to [GitHub](https://github.com/new)
- Create a new repository named `ai-tools-directory`
- Don't initialize with README (we already have one)

3. **Push to GitHub**
```bash
git remote add origin https://github.com/yourusername/ai-tools-directory.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `ai-tools-directory` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables**
   - No environment variables needed for this project
   - Skip this section

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Follow Prompts**
- Set up and deploy: `Y`
- Which scope: Select your account
- Link to existing project: `N`
- Project name: `ai-tools-directory`
- Directory: `./`
- Override settings: `N`

5. **Production Deployment**
```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. **Add Domain in Vercel**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update DNS Records**
   - Add A record or CNAME as instructed
   - Wait for DNS propagation (up to 48 hours)

## Step 4: Verify Deployment

### Check These URLs:
- ✅ Home: `https://your-domain.vercel.app/`
- ✅ Explore: `https://your-domain.vercel.app/explore`
- ✅ About: `https://your-domain.vercel.app/about`
- ✅ Tool Detail: `https://your-domain.vercel.app/explore/chatgpt`
- ✅ Sitemap: `https://your-domain.vercel.app/sitemap.xml`

### Performance Checks:
1. **Lighthouse Audit**
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit
   - Aim for 90+ scores

2. **Mobile Responsiveness**
   - Test on different devices
   - Use Chrome DevTools device emulation

3. **Dark Mode**
   - Toggle dark mode
   - Verify theme persistence

## Step 5: Continuous Deployment

Vercel automatically deploys on every push to `main`:

```bash
# Make changes
git add .
git commit -m "Update: Added new feature"
git push origin main

# Vercel will automatically deploy
```

### Preview Deployments
- Every pull request gets a preview URL
- Test changes before merging to main

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Type errors**
```bash
# Run type check locally
npm run build
# Fix all TypeScript errors before deploying
```

### Runtime Errors

**Check Vercel Logs**
- Go to your project dashboard
- Click on the deployment
- View "Functions" logs

**Common Issues:**
- Missing environment variables
- Incorrect file paths (use absolute imports)
- Image optimization errors

### Performance Issues

**Enable Edge Runtime** (optional)
Add to page files:
```typescript
export const runtime = 'edge';
```

**Optimize Images**
- Use Next.js Image component
- Provide width and height
- Use appropriate formats (WebP)

## Alternative Deployment Platforms

### Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Deploy**
```bash
netlify deploy --prod
```

### Railway

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Deploy**
```bash
railway login
railway init
railway up
```

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Search functionality works
- [ ] Filters apply properly
- [ ] Dark mode toggles
- [ ] Mobile responsive
- [ ] SEO metadata present
- [ ] Sitemap accessible
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Custom domain configured (if applicable)

## Monitoring

### Vercel Analytics
- Enable in project settings
- Track page views and performance
- Monitor Web Vitals

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user insights

## Updates and Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Scheduled Tasks
- Review and update AI tools data monthly
- Check for broken links
- Update dependencies quarterly
- Monitor performance metrics

---

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: [Create an issue](https://github.com/yourusername/ai-tools-directory/issues)
