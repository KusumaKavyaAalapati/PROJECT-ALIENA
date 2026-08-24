const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let counter = 0;
const slideWidth = slides[0].clientWidth;

function slideTo(index) {
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideTo(counter);
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideTo(counter);
});
const shopNowButtons = document.querySelectorAll('.shop-now-btn');

shopNowButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category;
        alert(`You clicked on the Shop Now button for ${category}'s wear.`);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; // Card width + margin
    const containerWidth = cards[0].parentElement.offsetWidth; // Container width
    const cardsPerRow = Math.floor(containerWidth / cardWidth); // Calculate cards per row
  
    cards.forEach((card, index) => {
      if ((index + 1) % cardsPerRow === 0) {
        card.style.width = '30%';
        card.style.marginRight = '0';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
  
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function() {
        // Logic to add product to cart goes here
        alert('Product added to cart!'); // Replace with your actual cart logic
      });
    }
  });


