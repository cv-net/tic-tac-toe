let currentPlayer = 0;
let resetButton = document.getElementById('reset');
let announcer = document.querySelector('h2');
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

let end = false;

let player1Position = [];
let player2Position = [];


let hasWon;

function isWinner () {
    for (let i = 0 ; i < winningCombos.length ; i++ ) { 
        if (currentPlayer == 0 ) {
            hasWon = winningCombos[i].every(pos => player1Position.includes(pos));

            if (hasWon) {
                announcer.innerHTML = 'Player 1 Wins!'
                console.log('Player 1 Wins!')
                end = true;
                break;
            }

        } else {
            hasWon = winningCombos[i].every(pos => player2Position.includes(pos));

            if (hasWon) {
                announcer.innerHTML = 'Player 2 Wins!'
                console.log('Player 2 Wins!')
                end = true;
                break;
            }
        }
    }
}

function isTie () {
    let combinedPositions = [...player1Position, ...player2Position];
    if ( combinedPositions.length == 9 ) {
        announcer.innerHTML = "It's a tie! Hit the reset button to play again!";
        end = true;
    }
}

//click if player 0, change color, say its player1s turn, change currentplayer
allBoxes.forEach(element => element.addEventListener('click', (event) => {
    let target = event.target;

    if (target.innerHTML == '') {
        if (currentPlayer == 0) {

            target.innerHTML = '<p>X</p>';
            target.style.color = 'blue';
 
            let eventId = target.getAttribute('id');
            player1Position.push(parseInt(eventId));
   
            isWinner();
            if (!hasWon) {
                currentPlayer = 1;
                announcer.innerHTML = 'Player 2, your turn!';
 
            };
            isTie();
        } else {

            target.innerHTML = '<p>O</p>';
            target.style.color = 'coral';

            let eventId = target.getAttribute('id');
            player2Position.push(parseInt(eventId));

            isWinner();
            if (!hasWon) {
                currentPlayer = 0;
                announcer.innerHTML = 'Player 1, your turn!';
            };
            isTie();
        }

    }



})); //else if, if there are no free boxes, then it's a tie? maybe



resetButton.addEventListener('click', () => {
    for ( let i = 0 ; i < allBoxes.length ; i++ ) {
        allBoxes[i].innerHTML = '';
    }
});