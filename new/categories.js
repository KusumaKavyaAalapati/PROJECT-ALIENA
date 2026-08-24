// script.js

document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
  
    categoryItems.forEach(item => {
      item.addEventListener('click', function() {
        const categoryName = this.querySelector('span').textContent;
        alert(`Clicked on ${categoryName}`);
      });
    });
  
    // Example: Add functionality to bottom navigation links (replace with actual navigation)
    const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
  
    bottomNavLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const linkText = this.querySelector('span').textContent;
        alert(`Navigating to ${linkText}`);
        // Replace with your actual navigation logic
      });
    });
  });