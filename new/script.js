// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Form submission handling (replace with your backend logic)
    const contactForm = document.querySelector('.contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        // Replace with your actual form submission logic
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nForm submitted!`);
  
        // Clear form fields
        contactForm.reset();
      });
    }
  
    // Example: Add to Cart button functionality (if you have product cards)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        alert(`Added "${productTitle}" to cart!`);
        // You would replace this alert with your actual cart logic.
      });
    });
  
    // Example: Hover effect on product cards (if you have product cards)
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';
      });
  
      card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.2), -3px -3px 8px rgba(255, 255, 255, 0.8)';
      });
    });
  
    // Example: Clickable team members on About Us page
    const teamMembers = document.querySelectorAll('.team-member');
  
    teamMembers.forEach(member => {
      member.addEventListener('click', function() {
        const name = this.querySelector('h3').textContent;
        alert(`You clicked on ${name}`);
      });
    });
  
    // Example: Update weather display (using dummy data)
    const weatherDisplay = document.querySelector('.weather-display');
  
    if (weatherDisplay) {
      // In a real application, you'd fetch weather data from an API.
      const temperature = '32°C';
      const description = 'Partly cloudy';
      weatherDisplay.textContent = `${temperature} ${description}`;
    }
  });