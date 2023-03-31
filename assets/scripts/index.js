const cells = document.querySelectorAll('.cell'); //The function checks all possible winning options  
let gameOver = false;


//The main function that checks everything, victory, defeat, Artificial Intelligence moves and more.
cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (!gameOver && cell.textContent === '') {
        cell.textContent = 'X';
        checkDraw();
        if(!gameOver){
          win();
          II();
        }
      }
    });
  });


//The function checks all possible winning options
function win() {
  // Setting variables by field number
    const cell0 = document.querySelector('[data-index="0"]');
    const cell1 = document.querySelector('[data-index="1"]');
    const cell2 = document.querySelector('[data-index="2"]');
    const cell3 = document.querySelector('[data-index="3"]');
    const cell4 = document.querySelector('[data-index="4"]');
    const cell5 = document.querySelector('[data-index="5"]');
    const cell6 = document.querySelector('[data-index="6"]');
    const cell7 = document.querySelector('[data-index="7"]');
    const cell8 = document.querySelector('[data-index="8"]');


    // Checking the winnings for X
    if (cell0.textContent === 'X' && cell1.textContent === 'X' && cell2.textContent === 'X') { // first row
        console.log('WIN1');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell0.textContent === 'X' && cell3.textContent === 'X' && cell6.textContent === 'X') { // first row down
        console.log('WIN2');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell3.textContent === 'X' && cell4.textContent === 'X' && cell5.textContent === 'X'){ // second row  
        console.log('WIN3');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if(cell1.textContent === 'X' && cell4.textContent === 'X' && cell7.textContent === 'X') { // second row down  
        console.log('WIN4');  
        gameOver = true;  
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell6.textContent === 'X' && cell7.textContent === 'X' && cell8.textContent === 'X') { // third row 
        console.log('WIN5');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell2.textContent === 'X' && cell5.textContent === 'X' && cell8.textContent === 'X') { // third row down
        console.log('WIN6');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if(cell0.textContent === 'X' && cell4.textContent == 'X' && cell8.textContent === 'X') { // Diagonal upper left
        console.log('WINISKOSOK1');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell6.textContent === 'X' && cell4.textContent === 'X' && cell2.textContent === 'X') { // Diagonal lower left
        console.log('WINISKOSOK2'); 
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your win!';
        result.classList.add('win');

        setTimeout(() => {
            location.reload();
        }, 15000);

        // Checking the winnings for O


      } else if (cell0.textContent === 'O' && cell1.textContent === 'O' && cell2.textContent === 'O') { // first row 
        console.log('WIN1 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell0.textContent === 'O' && cell3.textContent === 'O' && cell6.textContent === 'O') { // first row down
        console.log('WIN2 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell3.textContent === 'O' && cell4.textContent === 'O' && cell5.textContent === 'O'){ // second row
        console.log('WIN3 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if(cell1.textContent === 'O' && cell4.textContent === 'O' && cell7.textContent === 'O') { // second row down  
        console.log('WIN4 - O');    
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell6.textContent === 'O' && cell7.textContent === 'O' && cell8.textContent === 'O') { // third row 
        console.log('WIN5 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell2.textContent === 'O' && cell5.textContent === 'O' && cell8.textContent === 'O') { // third row down
        console.log('WIN6 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if(cell0.textContent === 'O' && cell4.textContent == 'O' && cell8.textContent === 'O') { // Diagonal upper left
        console.log('WINISKOSOK1 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000);

      } else if (cell6.textContent === 'O' && cell4.textContent === 'O' && cell2.textContent === 'O') { // Diagonal lower left
        console.log('WINISKOSOK2 - O');
        gameOver = true;
        let result = document.querySelector('.textgame');
        result.textContent = 'Your Lose!';
        result.classList.add('loose');

        setTimeout(() => {
            location.reload();
        }, 15000); }

}

//Checks if all the cells are free and if not and the game has not ended with the win function , then it means it 's a draw
function checkDraw() {
    let cells = Array.from(document.querySelectorAll('.cell'));
  
    // Check if there are still free cells
    let freeCells = cells.filter(cell => cell.textContent === '');
    if (freeCells.length === 0) {
      let result = document.querySelector('.textgame');
      result.textContent = 'Ничья!';
      result.classList.add('draw');
      gameOver = true;
      setTimeout(() => {
        location.reload();
      }, 15000);
    }
  }


//An artificial intelligence function that checks the free cells and walks on them, it also checks whether it is a win or a draw, and in this case it stops walking
function II() {
    let cells = document.querySelectorAll('.cell');
    let field;
    let cellfield;
  
    do {
      field = Math.floor(Math.random() * 9);
      cellfield = cells[field];
    } while (cellfield.textContent !== '');
  
    cellfield.textContent = 'O';
    checkDraw();
    win();
}