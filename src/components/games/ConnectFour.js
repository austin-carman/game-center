import { useState } from "react";
import "../../styles/ConnectFour.css";

const ConnectFour = () => {
  const initialStates = {
    gameBoard: [
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
    ],
    isPlayer1Turn: true,
    message: "",
    winner: null,
  };
  const [gameBoard, setGameBoard] = useState(initialStates.gameBoard);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(
    initialStates.isPlayer1Turn
  );
  const [message, setMessage] = useState(initialStates.message);
  const [winner, setWinner] = useState(initialStates.winner);

  const handleClick = (col) => {
    // if the game has already been won, don't allow more moves
    if (winner) {
      return;
    }
    // If the column is full, show "Invalid move" to user
    if (gameBoard[0][col]) {
      setMessage("Invalid move");
      setTimeout(() => {
        setMessage("");
      }, 1000);
      return;
    } else {
      setMessage("");
    }
    // find first row available in column
    const newBoard = [...gameBoard];
    let row = 5;
    while (newBoard[row][col] !== null) {
      row = row - 1;
    }
    // assign player to square
    newBoard[row][col] = isPlayer1Turn ? 1 : 2;
    setGameBoard(newBoard);
    // check if move won game
    const gameIsOver = checkIfWin(newBoard);
    if (gameIsOver) {
      setWinner(isPlayer1Turn ? "Player 1" : "Player 2");
      return;
    }
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  // Check if 4 consecutive tokens in any direction -> returns true or false
  const checkIfWin = (board) => {
    // Check Horizontally
    for (let i = 0; i < board.length; i++) {
      let count = 1;
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === board[i][j + 1] && board[i][j] !== null) {
          count++;
        } else {
          count = 1;
        }
        if (count === 4) {
          return true;
        }
      }
    }

    // Check vertically
    for (let j = 0; j < board[0].length; j++) {
      let count = 1;
      for (let i = 0; i < board.length - 1; i++) {
        if (board[i][j] === board[i + 1][j] && board[i][j] !== null) {
          count++;
        } else {
          count = 1;
        }
        if (count === 4) {
          return true;
        }
      }
    }

    // Check diagonals from top left to bottom right
    for (let i = 0; i < board.length - 3; i++) {
      for (let j = 0; j < board[0].length - 3; j++) {
        if (
          board[i][j] !== null &&
          board[i][j] === board[i + 1][j + 1] &&
          board[i][j] === board[i + 2][j + 2] &&
          board[i][j] === board[i + 3][j + 3]
        ) {
          return true;
        }
      }
    }

    // Check diagonals from top right to bottom left
    for (let i = 0; i < board.length - 3; i++) {
      for (let j = board[0].length - 1; j >= 3; j--) {
        if (
          board[i][j] !== null &&
          board[i][j] === board[i + 1][j - 1] &&
          board[i][j] === board[i + 2][j - 2] &&
          board[i][j] === board[i + 3][j - 3]
        ) {
          return true;
        }
      }
    }

    return false;
  };

  // reset state for new game
  const handleReset = () => {
    setGameBoard(initialStates.gameBoard);
    setIsPlayer1Turn(initialStates.isPlayer1Turn);
    setMessage(initialStates.message);
    setWinner(initialStates.winner);
  };

  return (
    <div>
      <div className="player-reset-container">
        <div className="player-container">
          <div
            className={
              isPlayer1Turn ? "player1 player-token" : "player2 player-token"
            }
          ></div>
          <h3 style={{ color: winner && "red" }}>
            {isPlayer1Turn ? "Player 1" : "Player 2"}
            {winner ? " Wins!" : "'s Turn"}
          </h3>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h4 className="message">{message}</h4>
      <table id="board" cellSpacing={10}>
        <tbody>
          {gameBoard.map((row, i) => (
            <tr key={i} className="row">
              {row.map((square, j) => (
                <td
                  key={j}
                  onClick={() => handleClick(j)}
                  // eslint-disable-next-line prettier/prettier
                  className={square === 1 ? "player1 square" : square === 2 ? "player2 square" : "white square"}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectFour;
