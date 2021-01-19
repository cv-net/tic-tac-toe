// if someone clicked before you, switch colors?
// if (player = 0) {} else {}

// if someone clicked this before, you can't click it
let currentPlayer = 0;
let resetButton = document.getElementById('reset');

let allBoxes = [ ... document.getElementsByClassName('box')];
//makes HTML collection an array

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let player1Position = [];
let player2Position = [];

function isWinner (position) {
    for (let i = 0 ; i < winningCombos.length ; i++ ) { 
        if (position.includes(winningCombos[i])) {
            let isWin = true;
        } else {
            let isWin = false;
        }
    }
}

//click if player 0, change color, say its player1s turn, change currentplayer
allBoxes.forEach(element => element.addEventListener('click', (event) => {
    let target = event.target;
    if (target.innerHTML == '') {
        if (currentPlayer == 0) {

            target.innerHTML = '<p>X</p>';
            target.style.color = 'blue';
            //target's ID, add to array which is this player's position
            let eventId = target.getAttribute('id');
            player1Position.push(parseInt(eventId));
            //Trying another way to make isWinner a function
            isWinner(player1Position);
            if (isWin = true) {
                // function endGame();
                console.log('Player 1 Wins!');

            } else {

            currentPlayer = 1;
            //display 'Player 2, your turn!'

            };
        } else {

            target.innerHTML = '<p>O</p>';
            target.style.color = 'coral';
            let eventId = target.getAttribute('id');
            player2Position.push(parseInt(eventId));
            isWinner(player2Position);
            if (isWin = true) {
                // function endGame();
                console.log('Player 2 Wins!');

            } else {

            currentPlayer = 1;
            //display 'Player 1, your turn!'

            };


        }
    }
})); //else if, if there are no free boxes, then it's a tie? maybe

resetButton.addEventListener('click', () => {
    for ( let i = 0 ; i < allBoxes.length ; i++ ) {
        allBoxes[i].innerHTML = '';
    }
});




// $('#flashMessage').hide()

// $('#previewButton').click(function(){

// const title = $('#blogTitleInput').val();

// const content = $('#blogContentInput').val();

// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').text(content);
// $('#flashMessage') {

// .slideDown(1000)
// .delay(3000)
// .slideUp();
// title = '';
// content = '';

// });








// allBoxes.forEach( element => element.addEventListener('click', (event) => {
//     console.log({element});
//     let {target} = element;
//     if (currentPlayer == 0) {
//         target.innerText = "X";
//         target.style.cssText = "color: coral";
//     } else {
//         target.innerText = "O";

//         target.style.cssText = "color: blue";
//     }
// }));




