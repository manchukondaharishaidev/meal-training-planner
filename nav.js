// Navigation component - add to all pages

document.addEventListener('DOMContentLoaded', function() {
    // Determine navigation type based on page
    const currentPage = window.location.pathname.split('/').pop();
    let navHTML = '';

    if (currentPage.includes('training')) {
        // Training navigation
        navHTML = `
            <div class="nav-menu" style="background: white; padding: 15px 25px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); margin-bottom: 20px; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
                <a href="index.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🏠 Dashboard</a>
                <a href="meal_plan_pdf.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">📋 All Meal Plans</a>
                <a href="male_training_pdf.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">💪 Male Training</a>
                <a href="female_training_pdf.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🏃‍♀️ Female Training</a>
            </div>
        `;
    } else if (currentPage.includes('options') || currentPage.includes('meal_plan')) {
        // Meal navigation
        navHTML = `
            <div class="nav-menu" style="background: white; padding: 15px 25px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); margin-bottom: 20px; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
                <a href="index.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🏠 Dashboard</a>
                <a href="meal_plan_pdf.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">📋 All Meal Plans</a>
                <a href="breakfast_options.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🌅 Breakfast</a>
                <a href="lunch_options.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🍽️ Lunch</a>
                <a href="snack_options.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🥗 Snacks</a>
                <a href="dinner_options.html" style="color: #667eea; text-decoration: none; padding: 8px 15px; border-radius: 20px; transition: all 0.3s ease; font-size: 14px;">🌙 Dinner</a>
            </div>
        `;
    }

    // Insert navigation at the top of container
    if (navHTML) {
        const container = document.querySelector('.container') || document.body;
        container.insertAdjacentHTML('afterbegin', navHTML);

        // Add hover effects
        const links = container.querySelectorAll('.nav-menu a');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.background = '#667eea';
                this.style.color = 'white';
            });
            link.addEventListener('mouseleave', function() {
                this.style.background = 'transparent';
                this.style.color = '#667eea';
            });
        });
    }
});
