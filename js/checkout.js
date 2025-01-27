// Get URL parameters for plan and price
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get('plan');
const price = urlParams.get('price');

// Display the selected plan and price in the checkout page
document.getElementById('plan-name').textContent = plan;
document.getElementById('plan-price').textContent = price;

// Select the "Complete Purchase" button
const completePurchaseButton = document.querySelector('button[type="submit"]');

// Add an event listener to the button
completePurchaseButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission for demo purposes

    // Collecting the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const billingAddress = document.getElementById("billing-address").value;

    // For demo purposes, we display the collected form data in the console
    console.log("Form Data Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Billing Address:", billingAddress);

    // Show confirmation message (could be a modal or alert)
    alert(`Thank you for your purchase, ${name}!\n\nYour payment details have been received.`);

    document.getElementById("checkout-form").reset(); // Reset form after submission
});
