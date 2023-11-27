// Make an array with the i elements (stars incons)
const stars = document.querySelectorAll('.bi');

// Loop through each element to add an event listener
// Star is the element of the array, index is the index position of that element in the array (from 0 to 4 (5 elements))
stars.forEach((star, index) => {
    star.addEventListener('mouseover', function () {

        // Loop to make the stars filled. This fill the icons making a change to the class they have (thanks to using the incons from bootstrap)
        // It start at the star where the mouse is, and fill that star and the others on the left
        for (let i = index; i >= 0; i--) {
            stars[i].classList.remove('bi-star');
            stars[i].classList.add('bi-star-fill');
        }
    });
});

// Select the container where the stars are
const rating = document.getElementById('ratingStars');

// Add an event listener to the container so when the mouse leave the stars block, they reset (the will be not filled)
rating.addEventListener('mouseout', function () {
    stars.forEach(star => {
        star.classList.remove('bi-star-fill');
        star.classList.add('bi-star');
    });
});