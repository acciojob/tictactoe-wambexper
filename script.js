//your JS code here. If required.
// Function to initialize the game
function initializeGame() {
  const player1Name = document.getElementById("player-1").value;
  const player2Name = document.getElementById("player-2").value;

  if (!player1Name || !player2Name) {
    alert("Please enter names for both players.");
    return;
  }

  // Create the game board
  createBoard();
  document.getElementById("player-1").disabled = true;
  document.getElementById("player-2").disabled = true;
  document.getElementById("submit").disabled = true;
}

// Create the game board with cells
function createBoard() {
  const board = document.getElementById("board");

  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

// Handle a cell click event
function handleCellClick(event) {
  const cell = event.target;

  // Check if the cell is empty
  if (!cell.textContent) {
    if (isPlayer1Turn()) {
      cell.textContent = "X";
      document.querySelector(".message").textContent = "It's " + getPlayer1Name() + "'s turn.";
    } else {
      cell.textContent = "O";
      document.querySelector(".message").textContent = "It's " + getPlayer2Name() + "'s turn.";
    }
  } else {
    alert("This cell is already taken. Try another one.");
  }
}

// Check if it's player 1's turn
function isPlayer1Turn() {
  return document.querySelector(".message").textContent.includes(getPlayer1Name());
}

// Get player 1's name
function getPlayer1Name() {
  return document.getElementById("player-1").value;
}

// Get player 2's name
function getPlayer2Name() {
  return document.getElementById("player-2").value;
}

// Initialize the game when the "Start Game" button is clicked
document.getElementById("submit").addEventListener("click", initializeGame);
// Make sure to replace 'baseUrl' with your actual URL if not defined
const baseUrl = "http://localhost:3000";

// Cypress test
describe("Tic Tac Toe Game", () => {
  it("should allow players to make moves and display messages", () => {
    cy.visit(baseUrl);

    // Wait for elements to be visible and enter player names
    cy.get('#player-1').should('be.visible').type('Player1');
    cy.get('#player-2').should('be.visible').type('Player2');
    cy.get('#submit').click();

    // Wait for message to update
    cy.get('.message').should('contain', "Player1, you're up");

    // Make moves
    cy.get('#1').click();
    cy.get('#4').click();

    // Check whose turn it is
    cy.get('.message').should('contain', "Player2, you're up");
    cy.get('#2').click();
    cy.get('#5').click();
    cy.get('#3').click();

    // Check for player 1's win
    cy.get('.message').should('contain', "Player1 congratulations you won!");
  });
});
