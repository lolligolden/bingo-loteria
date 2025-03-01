document.addEventListener("DOMContentLoaded", function() {
  const boardContainer = document.getElementById('bingo-board-container');
  const newGameButton = document.getElementById('new-game');
  const drawNumberButton = document.getElementById('draw-number');
  const drawnNumbersDiv = document.getElementById('drawn-numbers');
  const gameStatusDiv = document.getElementById('game-status');
  const boardDesign = document.getElementById('bingo-container');
 const theme1 = document.getElementById('purpleHaze');
theme1.style.textDecoration = "underline";
const theme2 = document.getElementById('circus');
theme2.style.textDecoration = "underline";
  let boards = [];
  let drawnNumbers = [];
  let boardSize = 5;

  function generateBoards(boardCount = 2) {
      boards = [];
      boardContainer.innerHTML = '';
      const numbers = Array.from({ length: 75 }, (_, i) => i + 1);

      for (let b = 0; b < boardCount; b++) {
          const board = [];
          const boardDiv = document.createElement('div');
          boardDiv.classList.add('bingo-board');
          for (let i = 0; i < boardSize * boardSize; i++) {
              const randomIndex = Math.floor(Math.random() * numbers.length);
              const number = numbers.splice(randomIndex, 1)[0];
              const cell = document.createElement('div');
              cell.classList.add('bingo-cell');
              cell.textContent = number;
              cell.addEventListener('click', () => markCell(cell, b, i));
              board.push({ number, cell });
              boardDiv.appendChild(cell);
          }
          boards.push(board);
          boardContainer.appendChild(boardDiv);
      }
  }

  function markCell(boardIndex, cellIndex) {
      cell.classList.toggle('marked');
      checkWin(boardIndex);
  }

  function drawNumber() {
      const availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1).filter(n => !drawnNumbers.includes(n));
      if (availableNumbers.length === 0) {
          gameStatusDiv.textContent = 'All numbers have been drawn!';
          return;
      }
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      const number = availableNumbers.splice(randomIndex, 1)[0];
      drawnNumbers.push(number);
      drawnNumbersDiv.textContent = `Drawn Numbers: ${drawnNumbers.join(', ')}`;
      highlightDrawnNumbers(number);
      boards.forEach((board, index) => checkWin(index));
  }

  function highlightDrawnNumbers(number) {
      boards.forEach(board => {
          board.forEach(cellObj => {
              if (cellObj.number === number) {
                  cellObj.cell.classList.add('marked');
              }
          });
      });
  }

  function checkWin(boardIndex) {
      const board = boards[boardIndex];
      const winningPatterns = [
          // Horizontal
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19],
          [20, 21, 22, 23, 24],
          // Vertical
          [0, 5, 10, 15, 20],
          [1, 6, 11, 16, 21],
          [2, 7, 12, 17, 22],
          [3, 8, 13, 18, 23],
          [4, 9, 14, 19, 24],
          // Diagonal
          [0, 6, 12, 18, 24],
          [4, 8, 12, 16, 20]
      ];
  
      for (const pattern of winningPatterns) {
          if (pattern.every(index => board[index].cell.classList.contains('marked'))) {
              pattern.forEach(index => board[index].cell.classList.add('winning'));
              gameStatusDiv.textContent = `BINGO! BOARD ${boardIndex + 1} WINS!`;
              drawNumberButton.disabled = true; 
              setTimeout(() => {
                  const { playerCount, playerNames } = askForPlayerCountAndNames();
                  generateBoards(playerCount);
                  drawnNumbers = [];
                  drawnNumbersDiv.textContent = 'Drawn Numbers:';
                  gameStatusDiv.textContent = '';
                  console.log(`Players: ${playerNames.join(', ')}`);
                  drawNumberButton.disabled = false; 
              }, 2000);
              return;
          }
      }
  }
  
  

  window.onload = function() {
      const { playerCount, playerNames } = askForPlayerCountAndNames();
      generateBoards(playerCount);
if(playerNames.length === 1) {
      let player1 = document.getElementById('player1');
    player1.textContent = `Player 1: ${playerNames[0]}`;
}
    if(playerNames.length === 2) {
       let player1 = document.getElementById('player1');
    player1.textContent = `Player 1: ${playerNames[0]}`;
      
    let player2 = document.getElementById('player2');
    player2.textContent = `Player 2: ${playerNames[1]}`;
    }
      console.log(`Players: ${playerNames.join(', ')}`);
  };
  
  function askForPlayerCountAndNames() {
      let playerCount = prompt("How many players? 1 or 2?");
      if (playerCount === null) return; 
      while (isNaN(playerCount) || playerCount < 1 || playerCount > 2) {
          alert("Please enter either 1 or 2")
          playerCount = prompt("How many players?  or Two?");
          if (playerCount === null) return;
          playerCount = parseInt(playerCount);
      }
      const playerNames = [];
      for (let i = 0; i < playerCount; i++) {
          const playerName = prompt(`Enter the name of player ${i + 1}:`);
          if (playerName === null) return;
          playerNames.push(playerName);
      }
      return { playerCount, playerNames };
  }
  
  
  newGameButton.addEventListener('click', () => {
      const { playerCount, playerNames } = askForPlayerCountAndNames();
      generateBoards(playerCount);
      drawnNumbers = [];
      drawnNumbersDiv.textContent = 'Drawn Numbers:';
      gameStatusDiv.textContent = '';
  });
  

  drawNumberButton.addEventListener('click', drawNumber);

  generateBoards();
theme1.addEventListener('click', purpleHaze);
theme2.addEventListener('click', circus);



function purpleHaze() {
boardDesign.style.background = "linear-gradient(to top, #cc99ff 0%, #9933ff 80%)";

}; 
 
function circus() {
boardDesign.style.background = "repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg, blue 20deg 30deg)";
  boardDesign.style.color = "black";
}

})




