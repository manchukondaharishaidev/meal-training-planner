# 🚀 Meal Planner V2 - Complete Feature Plan

## 📋 V2 Vision Overview

Transform from a static meal planner to an **intelligent, personalized nutrition platform** with user accounts, dynamic calculations, and Telugu language support.

---

## 🎯 Core V2 Features

### 1. 👤 User Authentication & Profiles
- **Login/Signup System**
  - Email/password authentication
  - Google/Facebook social login
  - Password recovery
  - Email verification

- **User Profile Data**
  ```javascript
  userProfile = {
    // Basic Info
    name: string,
    email: string,
    age: number,
    gender: 'male' | 'female',

    // Body Metrics
    currentWeight: number (kg),
    currentBodyFat: number (percentage),
    height: number (cm),

    // Goals
    targetBodyFat: number (default: 13%),
    targetWeight: number (kg),
    activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active',
    dietaryPreferences: ['vegetarian', 'no_onion_garlic', etc],

    // Calculated
    BMI: number,
    BMR: number (Basal Metabolic Rate),
    TDEE: number (Total Daily Energy Expenditure),
    dailyCalorieTarget: number,
    proteinTarget: number (g),
    carbTarget: number (g),
    fatTarget: number (g),

    // Settings
    language: 'en' | 'te', // English or Telugu
    measurementSystem: 'metric' | 'imperial'
  }
  ```

### 2. 🧮 Smart Calorie & Macro Calculator

**Formulas to Implement:**

#### BMR (Basal Metabolic Rate)
```javascript
// Mifflin-St Jeor Equation
Male BMR = (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5
Female BMR = (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161
```

#### TDEE (Total Daily Energy Expenditure)
```javascript
TDEE = BMR × Activity_Multiplier
// Activity Multipliers:
sedentary = 1.2        // Little/no exercise
light = 1.375          // 1-3 days/week
moderate = 1.55        // 3-5 days/week
active = 1.725         // 6-7 days/week
very_active = 1.9      // Athlete level
```

#### Calorie Deficit for Fat Loss
```javascript
// Target 0.5-1 kg fat loss per week
deficit = 500-1000 kcal/day
dailyCalorieTarget = TDEE - deficit

// Ensure minimum:
minimumCalories_male = 1500
minimumCalories_female = 1200
```

#### Macro Distribution
```javascript
// High-protein vegetarian diet
protein_grams = weight_kg × 2.0-2.2  // For muscle preservation
protein_calories = protein_grams × 4

// Fat (healthy minimum)
fat_percentage = 25-30% of total calories
fat_grams = (dailyCalories × fat_percentage) / 9

// Carbs (remainder)
carb_calories = dailyCalories - (protein_calories + fat_calories)
carb_grams = carb_calories / 4
```

### 3. 🥗 Enhanced Recipe Database

**Focus on High-Protein Vegetarian Sources:**

#### Protein Sources (Per 100g)
```javascript
proteinSources = {
  soya_chunks: { protein: 52g, calories: 345, carbs: 33g, fat: 0.5g },
  tofu_firm: { protein: 17g, calories: 144, carbs: 3g, fat: 9g },
  paneer_low_fat: { protein: 18g, calories: 265, carbs: 3g, fat: 20g },
  moong_dal: { protein: 24g, calories: 347, carbs: 63g, fat: 1g },
  masoor_dal: { protein: 25g, calories: 353, carbs: 63g, fat: 1g },
  chickpeas: { protein: 19g, calories: 364, carbs: 61g, fat: 6g },
  black_beans: { protein: 21g, calories: 341, carbs: 62g, fat: 1g },
  quinoa: { protein: 14g, calories: 368, carbs: 64g, fat: 6g },
  chia_seeds: { protein: 17g, calories: 486, carbs: 42g, fat: 31g },
  pumpkin_seeds: { protein: 30g, calories: 559, carbs: 10g, fat: 49g },
  greek_yogurt: { protein: 10g, calories: 59, carbs: 4g, fat: 0.4g },
  cottage_cheese: { protein: 11g, calories: 98, carbs: 3g, fat: 4g }
}
```

#### New Recipe Categories
- **Soya-Based Recipes**: 20+ recipes
- **Tofu Dishes**: 15+ recipes
- **Low-Fat Paneer**: 15+ recipes
- **Lentil/Dal Varieties**: 20+ recipes
- **Seed-Based Meals**: 10+ recipes
- **Protein Smoothies**: 10+ recipes

#### Recipe Structure V2
```javascript
recipeV2 = {
  id: string,
  name_en: string,
  name_te: string, // Telugu translation
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack',

  // Nutrition per serving
  servingSize: number (grams),
  calories: number,
  protein: number,
  carbs: number,
  fat: number,
  fiber: number,

  // Detailed ingredients with quantities
  ingredients: [
    {
      name_en: 'Soya Chunks',
      name_te: 'సోయా చంక్స్',
      quantity: 100,
      unit: 'grams',
      protein: 52,
      calories: 345
    }
  ],

  // Step-by-step instructions
  instructions_en: [
    'Step 1: Soak soya chunks...',
    'Step 2: Boil and squeeze...'
  ],
  instructions_te: [
    'దశ 1: సోయా చంక్స్ నానబెట్టండి...',
    'దశ 2: ఉడకబెట్టి నింపండి...'
  ],

  cookTime: number (minutes),
  prepTime: number (minutes),
  difficulty: 'easy' | 'medium' | 'hard',

  // Tags for filtering
  tags: ['high-protein', 'soya', 'low-fat', 'quick'],

  // Scalable for user's needs
  scalable: true
}
```

### 4. 🎨 Modern UI/UX Design

#### Tech Stack
```
Frontend Framework: React.js with TypeScript
Styling: Tailwind CSS + shadcn/ui components
State Management: Zustand or Context API
Routing: React Router v6
Forms: React Hook Form + Zod validation
Charts: Recharts for progress visualization
Animation: Framer Motion
Icons: Lucide React
```

#### UI Components
- ✅ Login/Signup forms
- ✅ User dashboard (overview)
- ✅ Profile settings page
- ✅ Personalized meal planner
- ✅ Recipe browser with filters
- ✅ Detailed recipe view
- ✅ Progress tracker (weight, body fat, photos)
- ✅ Grocery list generator
- ✅ Meal history calendar
- ✅ Language switcher (EN/TE)
- ✅ Nutrition statistics dashboard

### 5. 🌐 Telugu Language Support (i18n)

#### Key Translations
```json
{
  "meal_planner": "భోజన ప్రణాళిక",
  "protein": "ప్రోటీన్",
  "calories": "కేలరీలు",
  "weight": "బరువు",
  "body_fat": "శరీర కొవ్వు",
  "breakfast": "అల్పాహారం",
  "lunch": "మధ్యాహ్న భోజనం",
  "dinner": "రాత్రి భోజనం",
  "snack": "చిరుతిండి"
}
```

### 6. 📊 Progress Tracking System

**Track Over Time:**
- Weight (weekly weigh-ins)
- Body fat percentage
- Body measurements (waist, chest, arms, thighs)
- Progress photos (before/after)
- Workout completion rate
- Meal adherence rate

**Visualizations:**
- Line charts for weight/body fat trends
- Progress photos timeline
- Macro intake vs targets
- Weekly summary cards
- Achievement badges

### 7. 🛒 Smart Grocery List Generator

Auto-calculate quantities for weekly meal plans with:
- Organized by category (proteins, vegetables, grains, etc.)
- Estimated costs
- Storage information
- Downloadable PDF
- Shareable links

---

## 🏗️ Technical Architecture

### Frontend
```
React App (TypeScript)
├── Authentication (Firebase Auth)
├── Database (Firestore)
├── Hosting (Cloudflare Pages)
└── Storage (Firebase Storage)
```

### Database Schema (Firestore)
```javascript
users/
  {userId}/
    profile: { name, email, age, gender, weight, height, bodyFat, goals }
    measurements/ { date: { weight, bodyFat, waist, chest } }
    meals/ { date: { breakfast, lunch, snack, dinner } }
    progress/ { photos, achievements }

recipes/
  {recipeId}: { name_en, name_te, ingredients, instructions, macros }

ingredients/
  {ingredientId}: { name_en, name_te, protein, calories, avgPrice }
```

---

## 📱 Development Phases

### Phase 1: Core Infrastructure (Week 1-2)
- [ ] Set up React + TypeScript project
- [ ] Configure Tailwind CSS + shadcn/ui
- [ ] Set up Firebase project
- [ ] Implement authentication
- [ ] Set up i18n (English + Telugu)
- [ ] Deploy to Cloudflare Pages

### Phase 2: User Profile & Calculations (Week 2-3)
- [ ] Build user profile form
- [ ] Implement BMR/TDEE calculators
- [ ] Create macro calculator
- [ ] Build profile dashboard

### Phase 3: Recipe System (Week 3-4)
- [ ] Create expanded recipe database (100+ recipes)
- [ ] Build recipe browser with filters
- [ ] Create detailed recipe view
- [ ] Translate all recipes to Telugu

### Phase 4: Meal Planning (Week 4-5)
- [ ] Build personalized meal planner
- [ ] Implement daily meal selection
- [ ] Create weekly meal calendar
- [ ] Show daily macro totals

### Phase 5: Progress Tracking (Week 5-6)
- [ ] Build progress dashboard
- [ ] Add weight/body fat tracking
- [ ] Implement photo upload
- [ ] Create progress charts

### Phase 6: Additional Features (Week 6-7)
- [ ] Build grocery list generator
- [ ] Add shopping list export
- [ ] Create meal history view
- [ ] Add nutrition analytics

### Phase 7: Polish & Launch (Week 7-8)
- [ ] Complete Telugu translations
- [ ] Performance optimization
- [ ] Mobile responsiveness testing
- [ ] Final deployment

---

## 💰 Cost Analysis (Free Tier)

### Firebase Free Tier
- Authentication: 50,000 MAU
- Firestore: 1GB storage, 50k reads/day
- Storage: 5GB
- Hosting: 10GB/month

### Cloudflare Pages
- Bandwidth: Unlimited
- Builds: 500/month

**Supports ~10,000 users on free tier!**

---

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18
npm >= 9
git
```

### Setup Commands
```bash
# Create new React app with TypeScript
npm create vite@latest meal-planner-v2 -- --template react-ts

# Install dependencies
cd meal-planner-v2
npm install

# Install additional packages
npm install firebase react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install react-i18next i18next
npm install react-hook-form zod @hookform/resolvers
npm install recharts framer-motion lucide-react
```

---

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Firebase Docs](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React i18next](https://react.i18next.com)

---

**Ready to build! Let's create something amazing! 🚀**
