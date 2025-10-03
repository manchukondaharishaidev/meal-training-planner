# 🏋️ Personal Meal & Training Planner

A comprehensive web-based meal planning and training schedule application designed to help you and your wife reach 13% body fat through proper nutrition and exercise.

## 📋 Features

### 🍽️ Meal Planning
- **60 Total Recipes**: 15 each for Breakfast, Lunch, Snacks, and Dinner
- **Gender-Specific Portions**: Customized servings for male and female nutritional needs
- **Macro Tracking**: Automatic calculation of calories, protein, carbs, and fat
- **Indian Vegetarian + Eggs**: All recipes are vegetarian with egg options
- **Daily Meal Planner**: Select and track meals for each day

### 💪 Training Programs
- **7-Day Training Schedules**: Separate programs for male and female
- **Male Focus**: Belly fat reduction + muscle building
- **Female Focus**: Belly fat + thighs & glutes toning
- **Detailed Exercise Instructions**: Sets, reps, and rest periods included

### 📊 Tracking & Planning
- **User Profiles**: Separate profiles for you and your wife
- **Date-Based Planning**: Plan meals for any day
- **Nutrition Summary**: Daily totals for all macros
- **Local Storage**: Data persists in your browser
- **Mobile Responsive**: Works on all devices

### 🎯 Nutritional Targets

#### Male
- 🎯 1900 kcal/day
- 💪 170-185g protein
- 🌾 180g carbs
- 🥑 50g fat

#### Female
- 🎯 1400 kcal/day
- 💪 120-135g protein
- 🌾 140g carbs
- 🥑 40g fat

## 🚀 How to Use Locally

1. **Open the Website**
   - Simply open `index.html` in any web browser
   - No installation or server required!

2. **Select Your Profile**
   - Click on either Male or Female profile
   - Your selection will be saved for future visits

3. **Plan Your Meals**
   - Select a date using the date picker
   - Browse meal options (Breakfast, Lunch, Snacks, Dinner)
   - Click on recipes to view details
   - Selected meals automatically track macros

4. **View Training Schedule**
   - Access your gender-specific 7-day training program
   - Follow detailed exercise instructions
   - Track your progress weekly

## 🌐 Deploy to Free Hosting

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up

2. **Create a New Repository**
   ```bash
   # In your terminal/command prompt, navigate to this folder
   cd /Users/harishmanchukonda/Desktop/Meal_Training_Plan

   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit files
   git commit -m "Initial commit: Meal and Training Planner"

   # Create repository on GitHub (via website or CLI)
   # Then connect and push
   git remote add origin https://github.com/YOUR_USERNAME/meal-training-planner.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/meal-training-planner/`

### Option 2: Netlify

1. **Sign up at [netlify.com](https://www.netlify.com)**

2. **Deploy via Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire folder into Netlify
   - Get instant URL: `https://random-name.netlify.app`

3. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain

### Option 3: Vercel

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Import Project**
   - Click "New Project"
   - Import from GitHub or upload folder
   - Deploy automatically

3. **Access Your Site**
   - Get URL: `https://your-project.vercel.app`

### Option 4: Cloudflare Pages

1. **Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)**

2. **Create a Project**
   - Connect GitHub repository
   - Or upload via CLI

3. **Deploy**
   - Automatic deployment on push
   - Free custom domain support

## 📱 Accessing on Mobile

Once deployed, you can:
- Bookmark the URL on your phone's home screen
- Access it like a mobile app
- Plan meals while grocery shopping
- Check recipes while cooking

## 🗂️ File Structure

```
Meal_Training_Plan/
├── index.html                    # Main dashboard
├── meal_plan_pdf.html           # Meal plan overview
├── breakfast_options.html       # 15 breakfast recipes
├── lunch_options.html           # 15 lunch recipes
├── snack_options.html           # 15 snack recipes
├── dinner_options.html          # 15 dinner recipes
├── male_training_pdf.html       # Male 7-day training schedule
├── female_training_pdf.html     # Female 7-day training schedule
├── recipes.js                   # Recipe database (60 recipes)
├── nav.js                       # Navigation component
├── GroceriesList.pdf           # Shopping list reference
└── README.md                    # This file
```

## 💾 Data Storage

- All data is stored locally in your browser using `localStorage`
- No database or backend required
- Data persists across browser sessions
- Clear browser data will reset the app

## 🔄 Updating Content

To add or modify recipes:

1. **Edit `recipes.js`**
   - Add new recipes to the appropriate category
   - Follow the existing format
   - Include male and female portions

2. **Update HTML Files (if needed)**
   - Modify recipe cards in `*_options.html` files
   - Keep formatting consistent

## 🎨 Customization

### Change Colors
Edit the CSS gradient colors in each HTML file:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Features
The codebase is designed to be easily extensible:
- Add grocery list generator
- Implement meal history
- Add progress tracking
- Create meal prep scheduler

## 📊 Future Enhancements

Potential features to add:
- [ ] Automatic grocery list generator
- [ ] Progress photos upload
- [ ] Weight and measurement tracking
- [ ] Meal prep scheduler
- [ ] Recipe search and filters
- [ ] Print-friendly meal plans
- [ ] Weekly meal calendar view
- [ ] Export meal plans as PDF

## 🤝 Contributing

This is a personal project, but feel free to:
- Fork the repository
- Add new features
- Share improvements

## 📄 License

Free to use for personal purposes.

## 🙏 Acknowledgments

- Recipes designed for Indian vegetarian + eggs diet
- Training plans optimized for fat loss to 13% body fat
- Portion sizes calculated for sustainable results

## 📞 Support

For issues or questions:
- Check browser console for errors
- Ensure JavaScript is enabled
- Try different browsers (Chrome, Firefox, Safari)
- Clear cache and reload

---

## Quick Start Commands

```bash
# 1. Navigate to project folder
cd /Users/harishmanchukonda/Desktop/Meal_Training_Plan

# 2. Open in browser
open index.html

# 3. (Optional) Start local server
python3 -m http.server 8000
# Then visit: http://localhost:8000

# 4. Deploy to GitHub Pages
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Enable GitHub Pages in repo settings
```

---

**Made with ❤️ for achieving health goals together**
