
// Select all elements with the class card from the DOM
const cards = document.querySelectorAll('.card');

// Iterate through all cards to add an event listener onclick
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Select the paragraph within the card element
        let txt = card.querySelector('p');

        // Toggle the text display when the user clicks on the card
        if (txt.style.display === 'block') {
            txt.style.display = 'none';
        } else {
            txt.style.display = 'block';
        }

        // Select the image within the card element
        let image = card.querySelector('img');

        // Toggle the opacity of the image when the user clicks the card to make the text visible
        if (image.style.opacity === '1') {
            image.style.opacity = '0.2';
        } else if (image.style.opacity !== '1' && image.style.opacity !== '0.2') {
            image.style.opacity = '0.2';
        } else {
            image.style.opacity = '1';
        }
    });
});