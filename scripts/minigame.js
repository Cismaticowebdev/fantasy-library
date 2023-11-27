window.addEventListener('load', nextRound);

const btnOption1 = document.getElementById('btnOption1');
const btnOption2 = document.getElementById('btnOption2');
const btnOption3 = document.getElementById('btnOption3');
const btnNext = document.getElementById('btnNext');
btnNext.addEventListener('click', nextRound);
let authorNameCurrentRound = '';

//Array to store the 3 buttons to randomize the position
const arrBtn = [];

//Fill the array with the 3 buttons
arrBtn.push(btnOption1, btnOption2, btnOption3);

// Constructor used to create objects with data about the image, correct option and text
function GameObject(imageNumber, copyrightText, correctOption, authorInfo) {
    this.imgPath = `../images/minigame-images/${imageNumber}.jpg`; //The file names are numbers from 1 to 10, that way I have to write less code to get their file path
    this.copyrightText = copyrightText;
    this.correctOption = correctOption;
    this.authorInfo = authorInfo;
}

// Array to store the objects, so that it's easier to iterate or choose a random object for the game
const arrGameObjects = [];

// Create 10 objects
const gameObject1 = new GameObject(1, 'Kyle Cassidy, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons',
    'Patrick Rothfuss',
    'American author known for his ongoing trilogy The Kingkiller Chronicle, which has won him several awards, including the 2007 Quill Award for' +
    'his debut novel, The Name of the Wind.');
const gameObject2 = new GameObject(2, 'Niccolò Caranti, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
    'Steven Erikson',
    'Canadian novelist who was educated and trained as both an archaeologist and anthropologist. He is best known for his' +
    'ten-volume spanning epic fantasy series Malazan Book of the Fallen, which began with the publication of Gardens of the Moon (1999) and was' +
    'completed with the publication of The Crippled God (2011).');
const gameObject3 = new GameObject(3, 'Daniel Ogren, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons',
    'J.K. Rowling',
    'British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007. The series' +
    'has sold over 600 million copies, been translated into 84 languages, and spawned a global media franchise including films and video games.');
const gameObject4 = new GameObject(4, 'Henry Söderlund, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons',
    'George R. R. Martin',
    'American novelist, screenwriter, television producer and short story writer. He is the author of the series of epic fantasy novels A Song of' +
    'Ice and Fire, which were adapted into the Emmy Award-winning HBO series Game of Thrones (2011-2019) and its prequel series House of the Dragon (2022-present).');
const gameObject5 = new GameObject(5, 'Unknown photo studio commissioned by his students 1925/6, Public domain, via Wikimedia Commons',
    'J. R. R. Tolkien',
    'English writer and philologist. He was the author of the high fantasy works The Hobbit and The Lord of the Rings.');
const gameObject6 = new GameObject(6, 'Niccolò Caranti, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
    'Brandon Sanderson',
    'American author of high fantasy and science fiction. He is best known for the Cosmere fictional universe, in which most of his fantasy' +
    'novels, most notably the Mistborn series and The Stormlight Archive, are set.');
const gameObject7 = new GameObject(7, 'Jeanne Collins, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons',
    'Robert Jordan',
    'American author of epic fantasy. He is known best for his series The Wheel of Time (finished by Brandon Sanderson after his death)' +
    'which comprises 14 books and a prequel novel.');
const gameObject8 = new GameObject(8, 'Arild Vågen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons',
    'Joe Abercrombie',
    'British fantasy writer and film editor. He is the author of The First Law trilogy, as well as other fantasy books in the same setting.');
const gameObject9 = new GameObject(9, 'Niccolò Caranti, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
    'Andrzej Sapkowski',
    'Polish fantasy writer, essayist, translator and a trained economist. He is best known for his six-volume series of books The Witcher,' +
    'which revolves around the eponymous "witcher," a monster - hunter, Geralt of Rivia.');
const gameObject10 = new GameObject(10, 'Marian Wood Kolisch, Oregon State University, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons',
    'Ursula K. Le Guin',
    'American author best known for her works of speculative fiction, including science fiction works set in her Hainish universe, and the Earthsea fantasy series.');

// Add objects to the array
arrGameObjects.push(gameObject1, gameObject2, gameObject3, gameObject4, gameObject5, gameObject6, gameObject7, gameObject8, gameObject9, gameObject10);

// Main function that choose a random object from the array and populate the html with the object's info
function nextRound() {
    const gameObject = arrGameObjects[randomNumber()];
    authorNameCurrentRound = gameObject.correctOption;

    resetBtnColors();

    updateImage(gameObject.imgPath);
    updateCopyright(gameObject.copyrightText);
    updateOptions(gameObject.correctOption);
    swapBtns(arrBtn);
    updateInfo(gameObject.authorInfo);
}

// Get a random int number from 0 to 9 (10 numbers because we have 10 objects for the game)
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

// Update the src attribute of the image to change to image showed on the page
function updateImage(imgPath) {
    const gameImage = document.getElementById('gameImage');
    gameImage.setAttribute('src', imgPath);
}

// Update the copyright text that appears under the image, to give credit to the author of the image
function updateCopyright(copyrightText) {
    const txt = document.getElementById('copyrightText');
    txt.textContent = copyrightText;
}

// Update the option showed in every button. The correct Option will be in a random position
function updateOptions(correctOption) {
    shuffleArray(arrOptions);

    if (correctOption !== arrOptions[0]) {
        btnOption1.textContent = arrOptions[0];
    } else {
        btnOption1.textContent = arrOptions[1];
    }

    if (correctOption !== arrOptions[2]) {
        btnOption2.textContent = arrOptions[2];
    } else {
        btnOption2.textContent = arrOptions[3];
    }

    btnOption3.textContent = correctOption;
}

// Update the text on the page giving info about the author
function updateInfo(authorInfo) {
    const txt = document.getElementById('authorInfo');
    txt.textContent = authorInfo;
}

// Array to store all the options for the game (10 author names)
const arrOptions = [];

// Fill the array with all the options in the array of game objects
for (let i = 0; i < arrGameObjects.length; i++) {
    arrOptions[i] = arrGameObjects[i].correctOption;
}

btnOption1.addEventListener('click', checkOption);
btnOption2.addEventListener('click', checkOption);
btnOption3.addEventListener('click', checkOption);

function checkOption() {
    if (btnOption1.textContent === authorNameCurrentRound) {
        btnOption1.classList.remove('btn-dark');
        btnOption1.classList.add('btn-success');
    } else {
        btnOption1.classList.remove('btn-dark');
        btnOption1.classList.add('btn-danger');
    }

    if (btnOption2.textContent === authorNameCurrentRound) {
        btnOption2.classList.remove('btn-dark');
        btnOption2.classList.add('btn-success');
    } else {
        btnOption2.classList.remove('btn-dark');
        btnOption2.classList.add('btn-danger');
    }

    if (btnOption3.textContent === authorNameCurrentRound) {
        btnOption3.classList.remove('btn-dark');
        btnOption3.classList.add('btn-success');
    } else {
        btnOption3.classList.remove('btn-dark');
        btnOption3.classList.add('btn-danger');
    }
}

// Function used to shuffle the array of options to randomize the position of the 3 options every round
// This function is based on the Knuth-Fisher-Yates shuffle algorithm
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let ranNum = Math.floor(Math.random() * (i + 1));
        let aux = arr[i];
        arr[i] = arr[ranNum];
        arr[ranNum] = aux;
    }
}

function swapBtns() {
    shuffleArray(arrBtn);

    const btnContainer = document.getElementById('btnContainer');

    for (let i = 0; i < arrBtn.length; i++) {
        btnContainer.appendChild(arrBtn[i]);
    }
}

function resetBtnColors() {
        btnOption1.classList.remove('btn-success');
        btnOption1.classList.remove('btn-danger');
        btnOption1.classList.add('btn-dark');

        btnOption2.classList.remove('btn-success');
        btnOption2.classList.remove('btn-danger');
        btnOption2.classList.add('btn-dark');

        btnOption3.classList.remove('btn-success');
        btnOption3.classList.remove('btn-danger');
        btnOption3.classList.add('btn-dark');
}