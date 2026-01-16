# Deployment Guide

This guide will help you deploy your portfolio website to make it live on the internet.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest platform for deploying React/Vite projects. It's free and provides automatic deployments from GitHub.

### Method A: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit your changes
   git commit -m "Initial portfolio website"
   
   # Create a new repository on GitHub.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/MY_PORTFOLIO.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Wait 1-2 minutes and your site will be live!

3. **Your site will be live at:**
   - `https://your-project-name.vercel.app`
   - You can customize the domain in Vercel settings

### Method B: Deploy via Vercel CLI (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build and deploy:**
   ```bash
   # Make sure you're in the project directory
   vercel
   ```

3. **Follow the prompts** - Vercel will guide you through the setup

---

## Option 2: Deploy to Netlify

Netlify is another excellent free hosting option with similar features.

### Method A: Deploy via GitHub (Recommended)

1. **Push your code to GitHub** (same as Vercel method above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/Login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site will be live at:**
   - `https://random-name-12345.netlify.app`
   - You can customize the domain in Netlify settings

### Method B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   # Build the project first
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from GitHub, though setup is slightly more involved.

### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json scripts:**
   Add these scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/MY_PORTFOLIO/'  // Replace with your repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/MY_PORTFOLIO/`

---

## Before Deploying - Test Locally

Always test your build locally before deploying:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

This will show you exactly how your site will look when deployed.

---

## Important Notes

1. **Update Social Links:** Make sure to update your GitHub and LinkedIn links in:
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   - `src/components/Projects.jsx`

2. **Fix Email Typo:** I noticed in Contact.jsx there's a typo: `hilawigirmachew@gamil.com` should be `hilawigirmachew@gmail.com`

3. **Custom Domain (Optional):** Both Vercel and Netlify allow you to use your own custom domain (e.g., `hilawigirmachew.com`) for free

4. **Environment Variables:** If you add any API keys later, configure them in your hosting platform's settings

---

## Quick Start (Recommended Path)

1. Push to GitHub
2. Deploy via Vercel (takes ~5 minutes total)
3. Share your live URL!

Your portfolio will be live and accessible to employers and anyone with the URL!
