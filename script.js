// if someone clicked before you, switch colors?
// if (player = 0) {} else {}


// if someone clicked this before, you can't click it
let currentPlayer = 0;

let allBoxes = document.getElementsByClassName('box');

//click, if player 0, change color, say its player1s turn, change currentplayer
allBoxes.addEventListener('click', () => {
    if (currentPlayer == 0) {
        target.style.cssText = "color: coral";
    } else {
        target.style.cssText = "color: blue";
    }
});




