#!/bin/bash

# Script to add navigation to all HTML files

# Define the navigation styles
NAV_STYLES='
        .nav-menu {
            background: white;
            padding: 15px 25px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .nav-menu a {
            color: #667eea;
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 20px;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .nav-menu a:hover {
            background: #667eea;
            color: white;
        }'

# Meal navigation
MEAL_NAV='        <div class="nav-menu">
            <a href="index.html">🏠 Dashboard</a>
            <a href="meal_plan_pdf.html">📋 All Meal Plans</a>
            <a href="breakfast_options.html">🌅 Breakfast</a>
            <a href="lunch_options.html">🍽️ Lunch</a>
            <a href="snack_options.html">🥗 Snacks</a>
            <a href="dinner_options.html">🌙 Dinner</a>
        </div>'

# Training navigation
TRAIN_NAV='        <div class="nav-menu">
            <a href="index.html">🏠 Dashboard</a>
            <a href="meal_plan_pdf.html">📋 All Meal Plans</a>
            <a href="male_training_pdf.html">💪 Male Training</a>
            <a href="female_training_pdf.html">🏃‍♀️ Female Training</a>
        </div>'

echo "Adding navigation to HTML files..."

# For lunch, snack, and dinner options
for file in lunch_options.html snack_options.html dinner_options.html; do
    if [ -f "$file" ]; then
        # Add styles if not present
        if ! grep -q "nav-menu" "$file"; then
            # Find the last style tag before closing and add nav styles
            sed -i.bak '/\.container {/a\
\
'"$NAV_STYLES"'' "$file"
        fi

        # Add navigation menu if not present
        if ! grep -q '<div class="nav-menu">' "$file"; then
            sed -i.bak '/<div class="container">/a\
'"$MEAL_NAV"'' "$file"
        fi

        echo "✓ Updated $file"
    fi
done

# For training files
for file in male_training_pdf.html female_training_pdf.html; do
    if [ -f "$file" ]; then
        # Add styles if not present
        if ! grep -q "nav-menu" "$file"; then
            sed -i.bak '/body {/a\
\
'"$NAV_STYLES"'' "$file"
        fi

        # Add navigation menu if not present
        if ! grep -q '<div class="nav-menu">' "$file"; then
            sed -i.bak '/<body>/a\
    <div class="container">\
'"$TRAIN_NAV"'\
    <\/div>' "$file"
        fi

        echo "✓ Updated $file"
    fi
done

echo "Navigation added successfully!"
echo "Backup files created with .bak extension"
