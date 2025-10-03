# 🚀 Complete GitHub Setup & Deployment Guide

## Step 1: Create GitHub Account (2 minutes)

### 1.1 Sign Up
1. Go to **[github.com/signup](https://github.com/signup)**
2. Enter your email address
3. Click **"Continue"**
4. Create a password (must be strong)
5. Choose a username (e.g., `harish-meals`, `harishmanchukonda`, etc.)
6. Click **"Continue"**
7. Verify you're human (solve puzzle)
8. Click **"Create account"**

### 1.2 Verify Email
1. Check your email inbox
2. Find email from GitHub
3. Click verification link
4. You're now signed in to GitHub!

---

## Step 2: Configure Git on Your Computer (1 minute)

### 2.1 Set Your Name and Email
Open Terminal and run these commands (replace with YOUR info):

```bash
# Set your name (will appear on commits)
git config --global user.name "Your Name"

# Set your email (use the email you signed up with)
git config --global user.email "your.email@example.com"

# Example:
git config --global user.name "Harish Manchukonda"
git config --global user.email "harish@example.com"
```

### 2.2 Verify Configuration
```bash
# Check your settings
git config --global --list
```

You should see:
```
user.name=Your Name
user.email=your.email@example.com
```

---

## Step 3: Create Repository on GitHub (2 minutes)

### 3.1 Create New Repository
1. Click the **"+"** icon (top right corner)
2. Select **"New repository"**

### 3.2 Repository Settings
Fill in these details:
- **Repository name**: `meal-training-planner` (or any name you like)
- **Description**: "Personal Meal & Training Planner for reaching 13% body fat"
- **Visibility**: Select **"Public"** (required for free GitHub Pages)
- **Initialize**: DO NOT check any boxes (we already have files)
- Click **"Create repository"**

### 3.3 Copy Repository URL
After creation, you'll see a page with instructions. Copy the HTTPS URL:
```
https://github.com/YOUR_USERNAME/meal-training-planner.git
```

---

## Step 4: Push Your Code to GitHub (2 minutes)

### Method A: Using Terminal (Recommended)

```bash
# 1. Navigate to your project
cd /Users/harishmanchukonda/Desktop/Meal_Training_Plan

# 2. Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/meal-training-planner.git

# 3. Push your code
git push -u origin main
```

### If you get authentication error:

#### Option 1: Use Personal Access Token (Recommended)
1. On GitHub, click your profile picture → **Settings**
2. Scroll down to **Developer settings** (bottom left)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name: "Meal Planner Upload"
6. Select expiration: 90 days (or No expiration)
7. Check these scopes:
   - ✅ **repo** (all boxes)
   - ✅ **workflow**
8. Click **Generate token**
9. **COPY THE TOKEN** (you'll only see it once!)

Now push again:
```bash
git push -u origin main
```

When asked for username: Enter your GitHub username
When asked for password: **Paste the token** (not your actual password)

#### Option 2: Use GitHub CLI (Easier)
```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login
gh auth login
# Follow prompts: choose HTTPS, login with browser

# Push
git push -u origin main
```

---

## Step 5: Enable GitHub Pages (1 minute)

### 5.1 Go to Repository Settings
1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. Click **"Pages"** in left sidebar (under "Code and automation")

### 5.2 Configure Pages
1. Under **"Source"**:
   - Branch: Select **"main"**
   - Folder: Keep as **"/ (root)"**
2. Click **"Save"**
3. Wait 2-3 minutes for deployment

### 5.3 Get Your Website URL
After 2-3 minutes, refresh the page. You'll see:
```
Your site is live at https://YOUR_USERNAME.github.io/meal-training-planner/
```

**🎉 That's it! Your website is now live!**

---

## Step 6: Access Your Website (30 seconds)

### On Computer
1. Open browser
2. Go to: `https://YOUR_USERNAME.github.io/meal-training-planner/`
3. Bookmark it!

### On Phone
1. Open the URL in Safari (iPhone) or Chrome (Android)
2. **iPhone**: Tap Share → "Add to Home Screen" → "Add"
3. **Android**: Tap ⋮ (menu) → "Add to Home screen" → "Add"
4. Now it opens like an app! 📱

---

## 🔄 How to Update Your Website

Whenever you make changes to your files:

```bash
# 1. Save your changes

# 2. Stage all changes
git add .

# 3. Commit with a message
git commit -m "Update: description of what you changed"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes, your website updates automatically!
```

### Example Update Flow
```bash
# Add a new recipe to recipes.js
# Edit the file, save it

git add .
git commit -m "Add new breakfast recipe: Protein Pancakes"
git push

# Website updates in 1-2 minutes!
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied (publickey)"
**Solution**: Use Personal Access Token (see Step 4, Option 1)

### Problem: "fatal: remote origin already exists"
**Solution**:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/meal-training-planner.git
```

### Problem: Website shows 404
**Solutions**:
1. Wait 5 minutes after enabling Pages
2. Check URL is exactly: `https://YOUR_USERNAME.github.io/meal-training-planner/`
3. Ensure repository is Public
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)

### Problem: Changes not showing
**Solutions**:
1. Make sure you ran `git push`
2. Check push succeeded (no errors)
3. Wait 2 minutes
4. Hard refresh browser (Cmd+Shift+R or Ctrl+F5)
5. Clear cache

### Problem: Can't find Settings
**Solution**: You must be on the repository page, logged in, and be the owner

---

## 📋 Complete Command Reference

### Initial Setup (Run Once)
```bash
# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Navigate to project
cd /Users/harishmanchukonda/Desktop/Meal_Training_Plan

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/meal-training-planner.git

# Push code
git push -u origin main
```

### Regular Updates (After Changes)
```bash
git add .
git commit -m "Description of changes"
git push
```

### Check Status Anytime
```bash
git status              # See what's changed
git log --oneline       # See commit history
git remote -v          # See connected repositories
```

---

## ✅ Final Checklist

### Setup Complete When:
- [ ] GitHub account created
- [ ] Email verified
- [ ] Git configured (name and email)
- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] GitHub Pages enabled
- [ ] Website URL works
- [ ] Bookmarked on computer
- [ ] Added to phone home screen
- [ ] Shared URL with wife

### Your Info (Fill This In):
- **GitHub Username**: ________________
- **Repository Name**: meal-training-planner
- **Website URL**: https://________________.github.io/meal-training-planner/
- **Token Saved**: ☐ Yes, in password manager

---

## 🎯 Quick Start Commands (Copy-Paste)

After creating GitHub account and repository:

```bash
# 1. Configure git (replace with YOUR info)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 2. Go to project
cd /Users/harishmanchukonda/Desktop/Meal_Training_Plan

# 3. Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/meal-training-planner.git

# 4. Push code (use token as password if asked)
git push -u origin main
```

Then enable GitHub Pages in repository settings!

---

## 🌟 Alternative: Super Easy Method (No Git Commands)

### Upload via GitHub Website

1. **Create repository** (Steps 1-3 above)
2. **On repository page**: Click "uploading an existing file"
3. **Drag all files** from your `Meal_Training_Plan` folder
4. **Commit message**: "Initial upload"
5. **Click** "Commit changes"
6. **Enable Pages** in Settings
7. **Done!** ✨

This method is easier but you'll need to re-upload files for updates.

---

## 📞 Getting Help

### GitHub Help
- [GitHub Docs](https://docs.github.com)
- [GitHub Pages Guide](https://pages.github.com)

### Common Issues
- [GitHub Authentication](https://docs.github.com/en/authentication)
- [Troubleshooting Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

### Need Support?
1. Check error message in terminal
2. Google the exact error
3. Check browser console (F12) for website errors
4. Read DEPLOYMENT.md for alternatives (Netlify, Vercel)

---

**Your meal planner will be live at:**
```
https://YOUR_USERNAME.github.io/meal-training-planner/
```

**Share this URL with your wife and access from any device! 📱💻**

---

*Happy meal planning! 🍽️💪*
