// Complete Recipe Database for Meal Planning

const recipes = {
    breakfast: [
        {
            id: 'b1',
            name: 'Vegetable Masala Omelette + Toast',
            male: {
                ingredients: '3 eggs + 2 egg whites, 2 whole wheat toast, 1 cup sautéed vegetables',
                calories: 400,
                protein: 32,
                carbs: 28,
                fat: 15
            },
            female: {
                ingredients: '2 eggs + 1 egg white, 1 whole wheat toast, ¾ cup sautéed vegetables',
                calories: 280,
                protein: 22,
                carbs: 18,
                fat: 10
            },
            recipe: 'Whisk eggs with chopped onion, tomato, spinach, green chili. Cook with minimal oil (1 tsp). Season with turmeric, salt, pepper. Serve with toasted whole wheat bread.'
        },
        {
            id: 'b2',
            name: 'Moong Dal Chilla + Mint Chutney',
            male: {
                ingredients: '3 medium chillas (60g moong dal), 2 tbsp mint chutney',
                calories: 380,
                protein: 28,
                carbs: 40,
                fat: 10
            },
            female: {
                ingredients: '2 medium chillas (40g moong dal), 1 tbsp mint chutney',
                calories: 250,
                protein: 18,
                carbs: 28,
                fat: 6
            },
            recipe: 'Soak moong dal for 4 hours. Grind to smooth batter with ginger, green chili, salt. Cook on non-stick pan. Serve with fresh mint-coriander chutney.'
        },
        {
            id: 'b3',
            name: 'Protein Besan Chilla + Egg',
            male: {
                ingredients: '3 chillas (45g besan), mixed vegetables, 1 boiled egg',
                calories: 420,
                protein: 30,
                carbs: 35,
                fat: 12
            },
            female: {
                ingredients: '2 chillas (30g besan), mixed vegetables',
                calories: 280,
                protein: 18,
                carbs: 28,
                fat: 8
            },
            recipe: 'Mix besan with water, chopped vegetables, spices. Cook thin pancakes on pan. Serve males with 1 boiled egg for extra protein.'
        },
        {
            id: 'b4',
            name: 'Quinoa Upma + Almonds',
            male: {
                ingredients: '1.5 cups cooked quinoa (60g dry), vegetables, 10 almonds',
                calories: 390,
                protein: 18,
                carbs: 45,
                fat: 12
            },
            female: {
                ingredients: '1 cup cooked quinoa (40g dry), vegetables, 6 almonds',
                calories: 260,
                protein: 12,
                carbs: 30,
                fat: 8
            },
            recipe: 'Roast quinoa lightly. Cook with onions, curry leaves, mustard seeds, vegetables. Season with turmeric, salt. Garnish with chopped almonds.'
        },
        {
            id: 'b5',
            name: 'Scrambled Eggs + Multigrain Bread',
            male: {
                ingredients: '3 whole eggs, mixed vegetables, 2 multigrain bread slices',
                calories: 410,
                protein: 28,
                carbs: 30,
                fat: 16
            },
            female: {
                ingredients: '2 whole eggs, mixed vegetables, 1 multigrain bread slice',
                calories: 290,
                protein: 20,
                carbs: 20,
                fat: 12
            },
            recipe: 'Scramble eggs with diced onions, tomatoes, bell peppers. Season with herbs, salt, pepper. Toast multigrain bread. Serve together.'
        },
        {
            id: 'b6',
            name: 'Chia Protein Pudding',
            male: {
                ingredients: '3 tbsp chia seeds, 1 scoop whey protein, mixed nuts',
                calories: 380,
                protein: 30,
                carbs: 25,
                fat: 15
            },
            female: {
                ingredients: '2 tbsp chia seeds, ½ scoop whey protein, mixed nuts',
                calories: 260,
                protein: 20,
                carbs: 18,
                fat: 10
            },
            recipe: 'Soak chia seeds in almond milk overnight. Mix with protein powder, vanilla. Top with chopped almonds, walnuts. Refrigerate until thick.'
        },
        {
            id: 'b7',
            name: 'Paneer Bhurji + Whole Wheat Roti',
            male: {
                ingredients: '150g paneer, mixed vegetables, 2 whole wheat rotis',
                calories: 450,
                protein: 30,
                carbs: 40,
                fat: 18
            },
            female: {
                ingredients: '100g paneer, mixed vegetables, 1 whole wheat roti',
                calories: 300,
                protein: 20,
                carbs: 25,
                fat: 12
            },
            recipe: 'Crumble paneer. Sauté with onions, tomatoes, capsicum, green chilies. Season with turmeric, red chili powder, garam masala. Serve with fresh rotis.'
        },
        {
            id: 'b8',
            name: 'Oats Protein Upma',
            male: {
                ingredients: '1.5 cups cooked oats (75g dry), mixed vegetables',
                calories: 360,
                protein: 20,
                carbs: 50,
                fat: 8
            },
            female: {
                ingredients: '1 cup cooked oats (50g dry), mixed vegetables',
                calories: 250,
                protein: 14,
                carbs: 35,
                fat: 6
            },
            recipe: 'Dry roast oats. Cook with onions, carrots, beans, curry leaves, mustard seeds. Season with salt, turmeric. Add protein powder if desired.'
        },
        {
            id: 'b9',
            name: 'Protein Smoothie Bowl',
            male: {
                ingredients: '1 cup spinach, 1 scoop protein powder, ¼ cup granola, berries',
                calories: 350,
                protein: 25,
                carbs: 35,
                fat: 10
            },
            female: {
                ingredients: '½ cup spinach, ½ scoop protein powder, 2 tbsp granola, berries',
                calories: 250,
                protein: 18,
                carbs: 25,
                fat: 7
            },
            recipe: 'Blend spinach, protein powder, banana, almond milk. Pour into bowl. Top with granola, fresh berries, chia seeds.'
        },
        {
            id: 'b10',
            name: 'Cottage Cheese Pancakes',
            male: {
                ingredients: '3 pancakes (150g cottage cheese, 2 eggs), fresh berries',
                calories: 370,
                protein: 28,
                carbs: 30,
                fat: 12
            },
            female: {
                ingredients: '2 pancakes (100g cottage cheese, 1 egg), fresh berries',
                calories: 260,
                protein: 20,
                carbs: 22,
                fat: 8
            },
            recipe: 'Blend cottage cheese, eggs, small amount of flour. Cook as pancakes on non-stick pan. Serve with fresh berries and a drizzle of honey.'
        },
        {
            id: 'b11',
            name: 'Enhanced Protein Poha',
            male: {
                ingredients: '1.5 cups poha (90g dry), 100g paneer cubes, mixed nuts',
                calories: 400,
                protein: 22,
                carbs: 45,
                fat: 12
            },
            female: {
                ingredients: '1 cup poha (60g dry), 75g paneer cubes, mixed nuts',
                calories: 280,
                protein: 16,
                carbs: 32,
                fat: 8
            },
            recipe: 'Wash and drain poha. Cook with onions, tomatoes, curry leaves, turmeric. Add paneer cubes and nuts. Garnish with coriander and lemon.'
        },
        {
            id: 'b12',
            name: 'Protein Egg Sandwich',
            male: {
                ingredients: '3 scrambled eggs, 2 multigrain bread slices, vegetables',
                calories: 420,
                protein: 30,
                carbs: 32,
                fat: 14
            },
            female: {
                ingredients: '2 scrambled eggs, 1 multigrain bread slice, vegetables',
                calories: 290,
                protein: 20,
                carbs: 20,
                fat: 10
            },
            recipe: 'Scramble eggs with vegetables. Toast multigrain bread. Layer with lettuce, tomato, cucumber. Make sandwich with egg filling.'
        },
        {
            id: 'b13',
            name: 'Protein Dosa + Sambar',
            male: {
                ingredients: '2 dosas (120g batter), 1 cup sambar, 2 tbsp coconut chutney',
                calories: 390,
                protein: 25,
                carbs: 48,
                fat: 8
            },
            female: {
                ingredients: '1 dosa (60g batter), ½ cup sambar, 1 tbsp coconut chutney',
                calories: 270,
                protein: 18,
                carbs: 32,
                fat: 6
            },
            recipe: 'Make dosas with fermented batter. Prepare sambar with lentils and vegetables. Serve hot with coconut chutney and sambar.'
        },
        {
            id: 'b14',
            name: 'Tofu Scramble Delight',
            male: {
                ingredients: '150g tofu scrambled, mixed vegetables, 1 bread slice',
                calories: 380,
                protein: 28,
                carbs: 25,
                fat: 15
            },
            female: {
                ingredients: '100g tofu scrambled, mixed vegetables, ½ bread slice',
                calories: 260,
                protein: 20,
                carbs: 18,
                fat: 10
            },
            recipe: 'Crumble tofu and sauté with turmeric, nutritional yeast, vegetables. Season with herbs and spices. Serve with toasted bread.'
        },
        {
            id: 'b15',
            name: 'Stuffed Protein Paratha + Curd',
            male: {
                ingredients: '2 stuffed parathas (dal/paneer filling), ½ cup fresh curd',
                calories: 430,
                protein: 26,
                carbs: 42,
                fat: 14
            },
            female: {
                ingredients: '1 stuffed paratha (dal/paneer filling), ¼ cup fresh curd',
                calories: 290,
                protein: 18,
                carbs: 28,
                fat: 10
            },
            recipe: 'Make parathas with dal or paneer filling. Cook on tawa with minimal oil. Serve hot with fresh curd and pickle.'
        }
    ],

    lunch: [
        {
            id: 'l1',
            name: 'Dal Tadka + Brown Rice + Vegetable Curry',
            male: {
                ingredients: '1.5 cups brown rice, 1 cup dal, 1 cup mixed vegetable curry',
                calories: 480,
                protein: 22,
                carbs: 65,
                fat: 12
            },
            female: {
                ingredients: '1 cup brown rice, ¾ cup dal, ¾ cup mixed vegetable curry',
                calories: 340,
                protein: 16,
                carbs: 48,
                fat: 8
            },
            recipe: 'Cook brown rice. Prepare dal tadka with toor dal, turmeric, cumin tempering. Make mixed vegetable curry with seasonal vegetables.'
        },
        {
            id: 'l2',
            name: 'Paneer Tikka + Quinoa + Salad',
            male: {
                ingredients: '150g paneer tikka, 1 cup quinoa, large mixed salad',
                calories: 460,
                protein: 28,
                carbs: 42,
                fat: 16
            },
            female: {
                ingredients: '100g paneer tikka, ¾ cup quinoa, mixed salad',
                calories: 320,
                protein: 20,
                carbs: 30,
                fat: 10
            },
            recipe: 'Marinate paneer in yogurt and spices. Grill or bake. Serve with cooked quinoa and fresh salad with lemon dressing.'
        },
        {
            id: 'l3',
            name: 'Chole (Chickpea Curry) + Brown Rice',
            male: {
                ingredients: '1.5 cups chickpea curry, 1 cup brown rice, small salad',
                calories: 470,
                protein: 24,
                carbs: 68,
                fat: 10
            },
            female: {
                ingredients: '1 cup chickpea curry, ¾ cup brown rice, small salad',
                calories: 330,
                protein: 18,
                carbs: 48,
                fat: 7
            },
            recipe: 'Soak and cook chickpeas with onion-tomato gravy, garam masala. Serve with brown rice and cucumber-tomato salad.'
        },
        {
            id: 'l4',
            name: 'Egg Curry + Roti + Vegetable Side',
            male: {
                ingredients: '3 eggs in curry, 2 whole wheat rotis, vegetable side dish',
                calories: 490,
                protein: 30,
                carbs: 48,
                fat: 16
            },
            female: {
                ingredients: '2 eggs in curry, 1 whole wheat roti, vegetable side dish',
                calories: 340,
                protein: 22,
                carbs: 32,
                fat: 11
            },
            recipe: 'Boil eggs. Prepare curry with onion-tomato gravy, spices. Serve with fresh rotis and sautéed vegetables.'
        },
        {
            id: 'l5',
            name: 'Rajma (Kidney Beans) + Brown Rice + Salad',
            male: {
                ingredients: '1.5 cups rajma, 1 cup brown rice, side salad',
                calories: 475,
                protein: 26,
                carbs: 70,
                fat: 8
            },
            female: {
                ingredients: '1 cup rajma, ¾ cup brown rice, side salad',
                calories: 335,
                protein: 19,
                carbs: 50,
                fat: 6
            },
            recipe: 'Soak kidney beans overnight. Cook with onion-tomato gravy, spices. Serve with brown rice and fresh vegetable salad.'
        },
        {
            id: 'l6',
            name: 'Mixed Vegetable Khichdi + Curd + Papad',
            male: {
                ingredients: '2 cups vegetable khichdi, ½ cup curd, 2 papads',
                calories: 460,
                protein: 20,
                carbs: 64,
                fat: 12
            },
            female: {
                ingredients: '1.5 cups vegetable khichdi, ⅓ cup curd, 1 papad',
                calories: 330,
                protein: 14,
                carbs: 46,
                fat: 8
            },
            recipe: 'Cook rice and moong dal with mixed vegetables, turmeric. Serve with fresh curd and roasted papad.'
        },
        {
            id: 'l7',
            name: 'Palak Paneer + Roti + Dal',
            male: {
                ingredients: '150g palak paneer, 2 rotis, ½ cup dal',
                calories: 485,
                protein: 28,
                carbs: 46,
                fat: 18
            },
            female: {
                ingredients: '100g palak paneer, 1 roti, ⅓ cup dal',
                calories: 340,
                protein: 20,
                carbs: 32,
                fat: 12
            },
            recipe: 'Blanch spinach, blend. Cook paneer with spinach gravy. Serve with rotis and dal.'
        },
        {
            id: 'l8',
            name: 'Soya Chunk Curry + Brown Rice + Vegetables',
            male: {
                ingredients: '150g soya chunks, 1 cup brown rice, mixed vegetables',
                calories: 470,
                protein: 32,
                carbs: 62,
                fat: 8
            },
            female: {
                ingredients: '100g soya chunks, ¾ cup brown rice, mixed vegetables',
                calories: 330,
                protein: 24,
                carbs: 44,
                fat: 6
            },
            recipe: 'Soak soya chunks, squeeze water. Cook in spicy tomato gravy. Serve with brown rice and vegetables.'
        },
        {
            id: 'l9',
            name: 'Tofu Stir-fry + Quinoa + Steamed Vegetables',
            male: {
                ingredients: '150g tofu stir-fry, 1 cup quinoa, steamed vegetables',
                calories: 465,
                protein: 26,
                carbs: 48,
                fat: 16
            },
            female: {
                ingredients: '100g tofu stir-fry, ¾ cup quinoa, steamed vegetables',
                calories: 330,
                protein: 18,
                carbs: 36,
                fat: 11
            },
            recipe: 'Stir-fry tofu with vegetables, soy sauce, ginger, garlic. Serve with quinoa and steamed veggies.'
        },
        {
            id: 'l10',
            name: 'Mushroom Curry + Roti + Salad',
            male: {
                ingredients: '200g mushroom curry, 2 rotis, large salad',
                calories: 455,
                protein: 22,
                carbs: 52,
                fat: 14
            },
            female: {
                ingredients: '150g mushroom curry, 1 roti, medium salad',
                calories: 320,
                protein: 16,
                carbs: 36,
                fat: 10
            },
            recipe: 'Cook mushrooms with onion-tomato gravy. Serve with whole wheat rotis and fresh salad.'
        },
        {
            id: 'l11',
            name: 'Mixed Dal + Brown Rice + Roasted Vegetables',
            male: {
                ingredients: '1 cup mixed dal, 1 cup brown rice, roasted vegetables',
                calories: 475,
                protein: 24,
                carbs: 68,
                fat: 10
            },
            female: {
                ingredients: '¾ cup mixed dal, ¾ cup brown rice, roasted vegetables',
                calories: 335,
                protein: 17,
                carbs: 50,
                fat: 7
            },
            recipe: 'Cook mixed lentils with turmeric. Serve with brown rice and oven-roasted vegetables.'
        },
        {
            id: 'l12',
            name: 'Egg Fried Rice + Vegetable Soup',
            male: {
                ingredients: '1.5 cups egg fried rice (2 eggs), 1 cup vegetable soup',
                calories: 480,
                protein: 26,
                carbs: 58,
                fat: 14
            },
            female: {
                ingredients: '1 cup egg fried rice (1 egg), ¾ cup vegetable soup',
                calories: 340,
                protein: 18,
                carbs: 42,
                fat: 10
            },
            recipe: 'Make fried rice with scrambled eggs, vegetables, soy sauce. Serve with hot vegetable soup.'
        },
        {
            id: 'l13',
            name: 'Vegetable Pulao + Raita + Dal',
            male: {
                ingredients: '1.5 cups vegetable pulao, ½ cup raita, ½ cup dal',
                calories: 470,
                protein: 20,
                carbs: 66,
                fat: 12
            },
            female: {
                ingredients: '1 cup vegetable pulao, ⅓ cup raita, ⅓ cup dal',
                calories: 330,
                protein: 14,
                carbs: 48,
                fat: 8
            },
            recipe: 'Cook basmati rice with mixed vegetables, spices. Serve with cucumber raita and dal.'
        },
        {
            id: 'l14',
            name: 'Paneer Wrap with Vegetables + Soup',
            male: {
                ingredients: '2 whole wheat wraps with 100g paneer, vegetables, 1 cup soup',
                calories: 485,
                protein: 28,
                carbs: 50,
                fat: 16
            },
            female: {
                ingredients: '1 whole wheat wrap with 75g paneer, vegetables, ¾ cup soup',
                calories: 340,
                protein: 20,
                carbs: 36,
                fat: 11
            },
            recipe: 'Grill paneer with vegetables. Wrap in whole wheat tortilla with hummus. Serve with soup.'
        },
        {
            id: 'l15',
            name: 'Vegetable Biryani + Raita + Salad',
            male: {
                ingredients: '1.5 cups vegetable biryani, ½ cup raita, side salad',
                calories: 480,
                protein: 18,
                carbs: 72,
                fat: 12
            },
            female: {
                ingredients: '1 cup vegetable biryani, ⅓ cup raita, side salad',
                calories: 340,
                protein: 13,
                carbs: 52,
                fat: 8
            },
            recipe: 'Layer cooked rice with spiced vegetables, herbs. Dum cook. Serve with raita and salad.'
        }
    ],

    snack: [
        {
            id: 's1',
            name: 'Roasted Chickpeas + Green Tea',
            male: {
                ingredients: '1 cup roasted chickpeas, 1 cup green tea',
                calories: 220,
                protein: 12,
                carbs: 35,
                fat: 4
            },
            female: {
                ingredients: '¾ cup roasted chickpeas, 1 cup green tea',
                calories: 165,
                protein: 9,
                carbs: 26,
                fat: 3
            },
            recipe: 'Roast chickpeas with spices until crispy. Serve with hot green tea.'
        },
        {
            id: 's2',
            name: 'Protein Smoothie',
            male: {
                ingredients: '1 scoop protein, 1 banana, almond milk, berries',
                calories: 240,
                protein: 25,
                carbs: 28,
                fat: 3
            },
            female: {
                ingredients: '½ scoop protein, ½ banana, almond milk, berries',
                calories: 170,
                protein: 18,
                carbs: 20,
                fat: 2
            },
            recipe: 'Blend protein powder, banana, almond milk, berries. Serve chilled.'
        },
        {
            id: 's3',
            name: 'Sprouts Chaat',
            male: {
                ingredients: '1.5 cups mixed sprouts, vegetables, lemon, spices',
                calories: 210,
                protein: 14,
                carbs: 32,
                fat: 3
            },
            female: {
                ingredients: '1 cup mixed sprouts, vegetables, lemon, spices',
                calories: 150,
                protein: 10,
                carbs: 22,
                fat: 2
            },
            recipe: 'Mix boiled sprouts with chopped vegetables, lemon juice, chaat masala.'
        },
        {
            id: 's4',
            name: 'Greek Yogurt + Berries + Nuts',
            male: {
                ingredients: '200g Greek yogurt, ½ cup berries, 10 mixed nuts',
                calories: 250,
                protein: 20,
                carbs: 22,
                fat: 10
            },
            female: {
                ingredients: '150g Greek yogurt, ¼ cup berries, 6 mixed nuts',
                calories: 180,
                protein: 15,
                carbs: 16,
                fat: 7
            },
            recipe: 'Layer Greek yogurt with fresh berries and chopped nuts.'
        },
        {
            id: 's5',
            name: 'Boiled Eggs + Cucumber Sticks',
            male: {
                ingredients: '2 boiled eggs, unlimited cucumber sticks',
                calories: 155,
                protein: 13,
                carbs: 4,
                fat: 10
            },
            female: {
                ingredients: '1 boiled egg, unlimited cucumber sticks',
                calories: 78,
                protein: 6,
                carbs: 2,
                fat: 5
            },
            recipe: 'Boil eggs. Slice cucumbers. Season eggs with salt and pepper.'
        },
        {
            id: 's6',
            name: 'Roasted Makhana (Fox Nuts)',
            male: {
                ingredients: '2 cups roasted makhana with spices',
                calories: 200,
                protein: 8,
                carbs: 32,
                fat: 4
            },
            female: {
                ingredients: '1.5 cups roasted makhana with spices',
                calories: 150,
                protein: 6,
                carbs: 24,
                fat: 3
            },
            recipe: 'Roast makhana with minimal oil, turmeric, salt, pepper until crispy.'
        },
        {
            id: 's7',
            name: 'Cottage Cheese + Tomatoes',
            male: {
                ingredients: '150g cottage cheese, 1 cup cherry tomatoes',
                calories: 180,
                protein: 18,
                carbs: 10,
                fat: 8
            },
            female: {
                ingredients: '100g cottage cheese, ¾ cup cherry tomatoes',
                calories: 120,
                protein: 12,
                carbs: 7,
                fat: 5
            },
            recipe: 'Cube cottage cheese, mix with cherry tomatoes, herbs, pepper.'
        },
        {
            id: 's8',
            name: 'Protein Bar + Apple',
            male: {
                ingredients: '1 protein bar (20g protein), 1 medium apple',
                calories: 270,
                protein: 22,
                carbs: 35,
                fat: 6
            },
            female: {
                ingredients: '½ protein bar, 1 small apple',
                calories: 180,
                protein: 12,
                carbs: 24,
                fat: 4
            },
            recipe: 'Enjoy protein bar with fresh apple slices.'
        },
        {
            id: 's9',
            name: 'Hummus + Veggie Sticks',
            male: {
                ingredients: '4 tbsp hummus, mixed vegetable sticks',
                calories: 200,
                protein: 8,
                carbs: 20,
                fat: 10
            },
            female: {
                ingredients: '3 tbsp hummus, mixed vegetable sticks',
                calories: 150,
                protein: 6,
                carbs: 15,
                fat: 7
            },
            recipe: 'Prepare fresh hummus or use store-bought. Serve with carrot, cucumber, bell pepper sticks.'
        },
        {
            id: 's10',
            name: 'Paneer Tikka Cubes',
            male: {
                ingredients: '100g grilled paneer tikka cubes',
                calories: 220,
                protein: 18,
                carbs: 6,
                fat: 14
            },
            female: {
                ingredients: '75g grilled paneer tikka cubes',
                calories: 165,
                protein: 14,
                carbs: 4,
                fat: 10
            },
            recipe: 'Marinate paneer in yogurt and spices. Grill and cut into bite-sized cubes.'
        },
        {
            id: 's11',
            name: 'Mixed Nuts + Green Tea',
            male: {
                ingredients: '30g mixed nuts (almonds, walnuts, cashews), green tea',
                calories: 180,
                protein: 6,
                carbs: 8,
                fat: 15
            },
            female: {
                ingredients: '20g mixed nuts, green tea',
                calories: 120,
                protein: 4,
                carbs: 5,
                fat: 10
            },
            recipe: 'Portion mixed nuts. Serve with hot green tea.'
        },
        {
            id: 's12',
            name: 'Moong Dal Chilla (Small)',
            male: {
                ingredients: '2 small chillas (30g dal)',
                calories: 210,
                protein: 15,
                carbs: 28,
                fat: 4
            },
            female: {
                ingredients: '1 small chilla (15g dal)',
                calories: 105,
                protein: 8,
                carbs: 14,
                fat: 2
            },
            recipe: 'Make small moong dal pancakes with vegetables as a light snack.'
        },
        {
            id: 's13',
            name: 'Fruit + Peanut Butter',
            male: {
                ingredients: '1 apple/banana, 2 tbsp peanut butter',
                calories: 270,
                protein: 9,
                carbs: 32,
                fat: 12
            },
            female: {
                ingredients: '1 small fruit, 1 tbsp peanut butter',
                calories: 180,
                protein: 5,
                carbs: 22,
                fat: 8
            },
            recipe: 'Slice apple or banana. Spread with natural peanut butter.'
        },
        {
            id: 's14',
            name: 'Roasted Soya Chunks',
            male: {
                ingredients: '60g roasted soya chunks with spices',
                calories: 200,
                protein: 32,
                carbs: 12,
                fat: 2
            },
            female: {
                ingredients: '40g roasted soya chunks with spices',
                calories: 135,
                protein: 22,
                carbs: 8,
                fat: 1
            },
            recipe: 'Soak soya chunks, squeeze dry. Roast with spices until crispy.'
        },
        {
            id: 's15',
            name: 'Cucumber Yogurt Salad',
            male: {
                ingredients: '1.5 cups cucumber yogurt salad',
                calories: 140,
                protein: 10,
                carbs: 12,
                fat: 6
            },
            female: {
                ingredients: '1 cup cucumber yogurt salad',
                calories: 95,
                protein: 7,
                carbs: 8,
                fat: 4
            },
            recipe: 'Mix diced cucumber with yogurt, mint, salt, cumin powder.'
        }
    ],

    dinner: [
        {
            id: 'd1',
            name: 'Grilled Paneer + Stir-fried Vegetables + Salad',
            male: {
                ingredients: '150g grilled paneer, 1.5 cups stir-fried vegetables, large salad',
                calories: 420,
                protein: 32,
                carbs: 24,
                fat: 20
            },
            female: {
                ingredients: '100g grilled paneer, 1 cup stir-fried vegetables, medium salad',
                calories: 290,
                protein: 22,
                carbs: 16,
                fat: 14
            },
            recipe: 'Marinate and grill paneer. Stir-fry mixed vegetables with minimal oil. Serve with fresh salad.'
        },
        {
            id: 'd2',
            name: 'Dal + Roti + Vegetable Curry (Light)',
            male: {
                ingredients: '1 cup dal, 1 roti, 1 cup vegetable curry',
                calories: 380,
                protein: 20,
                carbs: 48,
                fat: 10
            },
            female: {
                ingredients: '¾ cup dal, 1 roti, ¾ cup vegetable curry',
                calories: 270,
                protein: 15,
                carbs: 35,
                fat: 7
            },
            recipe: 'Cook light dal. Make vegetable curry with minimal oil. Serve with one roti.'
        },
        {
            id: 'd3',
            name: 'Egg White Omelette + Soup + Salad',
            male: {
                ingredients: '4 egg white omelette, 1 cup soup, large salad',
                calories: 260,
                protein: 28,
                carbs: 18,
                fat: 6
            },
            female: {
                ingredients: '3 egg white omelette, ¾ cup soup, medium salad',
                calories: 180,
                protein: 20,
                carbs: 12,
                fat: 4
            },
            recipe: 'Make fluffy egg white omelette with vegetables. Serve with vegetable soup and salad.'
        },
        {
            id: 'd4',
            name: 'Tofu Curry + Cauliflower Rice + Vegetables',
            male: {
                ingredients: '150g tofu curry, 1.5 cups cauliflower rice, vegetables',
                calories: 350,
                protein: 24,
                carbs: 28,
                fat: 14
            },
            female: {
                ingredients: '100g tofu curry, 1 cup cauliflower rice, vegetables',
                calories: 240,
                protein: 16,
                carbs: 20,
                fat: 10
            },
            recipe: 'Cook tofu in spicy curry. Pulse cauliflower to make rice. Serve with sautéed vegetables.'
        },
        {
            id: 'd5',
            name: 'Chickpea Salad Bowl + Hummus',
            male: {
                ingredients: '1.5 cups chickpea salad, 3 tbsp hummus, whole grain crackers',
                calories: 400,
                protein: 20,
                carbs: 52,
                fat: 12
            },
            female: {
                ingredients: '1 cup chickpea salad, 2 tbsp hummus, crackers',
                calories: 280,
                protein: 14,
                carbs: 36,
                fat: 8
            },
            recipe: 'Mix chickpeas with vegetables, lemon dressing. Serve with hummus and crackers.'
        },
        {
            id: 'd6',
            name: 'Palak Soup + Paneer Cubes + Salad',
            male: {
                ingredients: '1.5 cups palak soup, 100g paneer cubes, salad',
                calories: 340,
                protein: 26,
                carbs: 18,
                fat: 16
            },
            female: {
                ingredients: '1 cup palak soup, 75g paneer cubes, salad',
                calories: 240,
                protein: 18,
                carbs: 12,
                fat: 12
            },
            recipe: 'Blend blanched spinach into soup. Add grilled paneer cubes. Serve with fresh salad.'
        },
        {
            id: 'd7',
            name: 'Mushroom Stir-fry + Quinoa + Greens',
            male: {
                ingredients: '200g mushroom stir-fry, 1 cup quinoa, sautéed greens',
                calories: 390,
                protein: 22,
                carbs: 46,
                fat: 12
            },
            female: {
                ingredients: '150g mushroom stir-fry, ¾ cup quinoa, sautéed greens',
                calories: 275,
                protein: 16,
                carbs: 34,
                fat: 8
            },
            recipe: 'Stir-fry mushrooms with garlic, herbs. Serve with quinoa and sautéed leafy greens.'
        },
        {
            id: 'd8',
            name: 'Vegetable Soup + Whole Wheat Bread + Salad',
            male: {
                ingredients: '2 cups vegetable soup, 2 bread slices, large salad',
                calories: 320,
                protein: 16,
                carbs: 48,
                fat: 8
            },
            female: {
                ingredients: '1.5 cups vegetable soup, 1 bread slice, medium salad',
                calories: 220,
                protein: 11,
                carbs: 34,
                fat: 5
            },
            recipe: 'Make hearty vegetable soup with beans. Serve with toasted bread and fresh salad.'
        },
        {
            id: 'd9',
            name: 'Grilled Vegetables + Brown Rice + Dal',
            male: {
                ingredients: 'Grilled vegetables, ¾ cup brown rice, ½ cup dal',
                calories: 380,
                protein: 18,
                carbs: 58,
                fat: 8
            },
            female: {
                ingredients: 'Grilled vegetables, ½ cup brown rice, ⅓ cup dal',
                calories: 270,
                protein: 13,
                carbs: 42,
                fat: 6
            },
            recipe: 'Grill mixed vegetables. Serve with small portion brown rice and light dal.'
        },
        {
            id: 'd10',
            name: 'Egg Bhurji + Roti + Salad',
            male: {
                ingredients: '3 egg bhurji, 1 roti, large salad',
                calories: 410,
                protein: 28,
                carbs: 32,
                fat: 16
            },
            female: {
                ingredients: '2 egg bhurji, 1 roti, medium salad',
                calories: 290,
                protein: 20,
                carbs: 24,
                fat: 11
            },
            recipe: 'Scramble eggs with onions, tomatoes, spices. Serve with roti and salad.'
        },
        {
            id: 'd11',
            name: 'Soya Chunk Dry Curry + Vegetables + Curd',
            male: {
                ingredients: '100g soya dry curry, mixed vegetables, ½ cup curd',
                calories: 340,
                protein: 30,
                carbs: 28,
                fat: 10
            },
            female: {
                ingredients: '75g soya dry curry, mixed vegetables, ⅓ cup curd',
                calories: 240,
                protein: 22,
                carbs: 20,
                fat: 7
            },
            recipe: 'Cook soya chunks dry with spices. Serve with steamed vegetables and curd.'
        },
        {
            id: 'd12',
            name: 'Paneer Bhurji + Salad + Soup',
            male: {
                ingredients: '120g paneer bhurji, large salad, 1 cup soup',
                calories: 380,
                protein: 28,
                carbs: 20,
                fat: 18
            },
            female: {
                ingredients: '80g paneer bhurji, medium salad, ¾ cup soup',
                calories: 270,
                protein: 20,
                carbs: 14,
                fat: 13
            },
            recipe: 'Scramble paneer with vegetables and spices. Serve with salad and light soup.'
        },
        {
            id: 'd13',
            name: 'Mixed Lentil Khichdi (Light) + Curd + Papad',
            male: {
                ingredients: '1.5 cups light khichdi, ½ cup curd, 1 papad',
                calories: 360,
                protein: 18,
                carbs: 52,
                fat: 8
            },
            female: {
                ingredients: '1 cup light khichdi, ⅓ cup curd, 1 papad',
                calories: 250,
                protein: 13,
                carbs: 36,
                fat: 6
            },
            recipe: 'Cook light khichdi with lentils and vegetables. Serve with curd and roasted papad.'
        },
        {
            id: 'd14',
            name: 'Cottage Cheese Bowl + Vegetables + Nuts',
            male: {
                ingredients: '150g cottage cheese, mixed vegetables, 10 nuts',
                calories: 350,
                protein: 26,
                carbs: 22,
                fat: 16
            },
            female: {
                ingredients: '100g cottage cheese, mixed vegetables, 6 nuts',
                calories: 245,
                protein: 18,
                carbs: 16,
                fat: 11
            },
            recipe: 'Mix cottage cheese with fresh vegetables, herbs. Top with chopped nuts.'
        },
        {
            id: 'd15',
            name: 'Vegetable Clear Soup + Paneer Salad',
            male: {
                ingredients: '2 cups vegetable soup, 100g paneer salad',
                calories: 320,
                protein: 24,
                carbs: 20,
                fat: 14
            },
            female: {
                ingredients: '1.5 cups vegetable soup, 75g paneer salad',
                calories: 230,
                protein: 17,
                carbs: 14,
                fat: 10
            },
            recipe: 'Prepare clear vegetable soup. Mix paneer cubes with fresh salad vegetables.'
        }
    ]
};

// Function to get all recipes by category
function getRecipesByCategory(category) {
    return recipes[category] || [];
}

// Function to get recipe by ID
function getRecipeById(id) {
    for (let category in recipes) {
        const recipe = recipes[category].find(r => r.id === id);
        if (recipe) return recipe;
    }
    return null;
}

// Function to get random recipe from category
function getRandomRecipe(category) {
    const categoryRecipes = recipes[category];
    if (!categoryRecipes || categoryRecipes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
    return categoryRecipes[randomIndex];
}

// Function to get recipe with gender-specific data
function getRecipeData(recipeId, gender) {
    const recipe = getRecipeById(recipeId);
    if (!recipe) return null;

    return {
        id: recipe.id,
        name: recipe.name,
        ingredients: recipe[gender].ingredients,
        calories: recipe[gender].calories,
        protein: recipe[gender].protein,
        carbs: recipe[gender].carbs,
        fat: recipe[gender].fat,
        recipe: recipe.recipe
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { recipes, getRecipesByCategory, getRecipeById, getRandomRecipe, getRecipeData };
}
