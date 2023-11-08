//your JS code here. If required.
let currentPlayer = "X";
let isGameActive = false;
let board = ["", "", "", "", "", "", "", "", ""];

function startGame() {
    const player1Name = document.getElementById("player-1").value;
    const player2Name = document.getElementById("player-2").value;
    document.getElementById("message").textContent = `${player1Name}, you're up`;
    isGameActive = true;
}

function handleClick(cell) {
    const index = cell.id - 1;

    if (board[index] === "" && isGameActive) {
        cell.textContent = currentPlayer;
        board[index] = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("message").textContent = `${currentPlayer === "X" ? player1Name : player2Name}, you're up`;
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("message").textContent = `${currentPlayer === "X" ? player2Name : player1Name}, congratulations you won!`;
            isGameActive = false;
        }
    }

    if (!board.includes("") && isGameActive) {
        document.getElementById("message").textContent = "It's a draw!";
        isGameActive = false;
    }
}

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("click", () => handleClick(cell)));