// Select all the pricing plans, toggle button, and "Choose Plan" buttons
const pricingPlans = document.querySelectorAll('.pricing-plan');
const toggleButton = document.getElementById('togglePricing');
const ctaButtons = document.querySelectorAll('.cta-btn'); // Select all "Choose Plan" buttons

// Function to toggle between Monthly and Yearly pricing
function togglePricing() {
    pricingPlans.forEach(plan => {
        const priceElement = plan.querySelector('.price');
        const currentPrice = priceElement.textContent.trim();

        // If the current price contains "/month", toggle to yearly pricing
        if (currentPrice.includes('/month')) {
            const price = parseFloat(currentPrice.replace('$', '').replace('/month', ''));
            priceElement.textContent = `$${(price * 12).toFixed(2)}/year`; // Convert to yearly
        } else {
            const price = parseFloat(currentPrice.replace('$', '').replace('/year', ''));
            priceElement.textContent = `$${(price / 12).toFixed(2)}/month`; // Convert to monthly
        }
    });

    // Toggle the button text to indicate the pricing mode
    if (toggleButton.textContent.includes("Yearly")) {
        toggleButton.textContent = "Switch to Monthly Pricing";
    } else {
        toggleButton.textContent = "Switch to Yearly Pricing";
    }
}

// Function to handle the "Choose Plan" button click
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get selected plan and price from button data attributes
        const plan = button.getAttribute('data-plan');
        const price = button.getAttribute('data-price');

        // Redirect to checkout page with plan info in the URL query parameters
        window.location.href = `checkout.html?plan=${encodeURIComponent(plan)}&price=${encodeURIComponent(price)}`;
    });
});

// Added event listener to the toggle button
toggleButton.addEventListener('click', togglePricing);

