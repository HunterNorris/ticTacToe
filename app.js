const player1 = "X";
const player2 = "O";

let currentPlayer = player1;

// puts a mark when clicked
const cells = document.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', newMove)
}


function newMove (event){
    const target = event.target;
    if (target.innerText === ""){
        target.id = currentPlayer;
        target.innerText = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;   
    }   
 }

// Here I would need to make an array with 9 items, one that holds the value (x, o, or null) of each cell/tile/td on the board. I made several attempts at this, watched some tutorials, read some documentation, but nothing seemed to be working for me. I had to move on so there would be other code & proof of work in this project, but you can see my 5 failed attempts, commented out at the end of this page of code. The rest of this was contingent on having an array with those values (called boardArray) to work. Since I don't have boardArray, it does not work, but hopefully the thought process/psuedo-coding is headed in the right direction.


//  A function that Defines the cases win which one could win
const congrats = document.getElementsById(congrats)
function winner(){
    // Horizontal Wins    
    if (boardArray[0] === currentPlayer && boardArray[1] === currentPlayer && boardArray[2] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    if (boardArray[3] === currentPlayer && boardArray[4] === currentPlayer && boardArray[5] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    if (boardArray[6] === currentPlayer && boardArray[7] === currentPlayer && boardArray[8] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    // Vertical Wins
    if (boardArray[0] === currentPlayer && boardArray[3] === currentPlayer && boardArray[6] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    if (boardArray[1] === currentPlayer && boardArray[4] === currentPlayer && boardArray[7] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    if (boardArray[2] === currentPlayer && boardArray[5] === currentPlayer && boardArray[8] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    // Diagonal Wins
    if (boardArray[0] === currentPlayer && boardArray[4] === currentPlayer && boardArray[8] === currentPlayer){
        congrats.className = "show"
        return true;
    }
    if (boardArray[6] === currentPlayer && boardArray[4] === currentPlayer && boardArray[2] === currentPlayer){
        congrats.className = "show"
        return true;
    }
}
winner ()

// Clear Board Button .... doesn't seem to be working, either
function clearBoard(){
    const cellArray = Array.from(document.getElementsByTagName("td"));
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].innerText = '';
    }   
}
const clear = document.getElementById('clear-board');
clear.addEventListener('click', clearBoard)



// ** 1st attempt trying to get an array of the values of the cells
// for (let i = 0; i < cells.length; i++) {
//     let boardArray = [];
//     boardArray = boardArray.slice(cells[i].innerText);
//    return boardArray;
// }
// console.log(boardArray)


// ** 2nd Try trying to get an aray of the values of the cells
// let boardArray = Array.from(document.getElementById('board').getElementsByTagName("td").innerText)
// console.log (boardArray)


// ** 3rd Try tyring to get an array of the values of the cells
// let boardArray = Array.from[document.getElementById('cell').innerText]
// console.log (boardArray)

// ** 4th attempt - trying to make an array from the table
// const table = [document.querySelectorAll('data-index-number')]
// console.log (table)

// ** 5th attempt at getting an array of the cells' values
// for (let i = 0; i < cells.length; i++) {
//     let boardArray = [cells]
// }


// ** This checks the cell number
// const id = target.dataset.indexNumber;