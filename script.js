// script.js

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Add functionality to filter images based on category
            const category = this.textContent.toLowerCase();
            filterImages(category);
        });
    });
});

function filterImages(category) {
    const images = document.querySelectorAll('.image-item');
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
