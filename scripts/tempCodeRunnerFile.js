//Array to store the 3 buttons to randomize the position
const arrBtn = [];

//Fill the array with the 3 buttons
arrBtn.push(btnOption1, btnOption2, btnOption3);

function swapBtns() {
    const btnContainer = document.getElementById('btnContainer');  

    for (let i = 0; i > arrBtn.length - 1; i++) {
        btnContainer.appendChild(arrBtn[i]);
    }
}