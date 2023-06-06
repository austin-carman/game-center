import { useState } from "react";
import "../../styles/ConnectFour.css";

const ConnectFour = () => {
  const [gameBoard, setGameBoard] = useState([
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
  ]);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState(null);

  const handleClick = (col) => {
    if (winner) {
      return;
    }
    // TODO: check if board is filled - no more moves
    // check if selected column has available moves
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
    const gameIsOver = checkIfWinningMove(newBoard);
    if (gameIsOver) {
      setWinner(isPlayer1Turn ? "Player 1" : "Player 2");
      return;
    }
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  // check if 4 consecutive tokens in any direction -> returns true or false
  const checkIfWinningMove = (board) => {
    return checkHorizontalWin(board) ||
      checkVerticalWin(board) ||
      checkDiagonalWin(board)
      ? true
      : false;
  };

  // Check for 4 consecutive tokens horizontally -> returns true or false
  const checkHorizontalWin = (board) => {
    for (let i = 0; i < board.length; i++) {
      let count = 1;
      for (let j = 0; j < 6; j++) {
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
    return false;
  };

  // Check for 4 consecutive tokens vertically -> returns true or false
  const checkVerticalWin = (board) => {
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
    return false;
  };

  // Check for 4 consecutive tokens diagonally -> returns true or false
  // eslint-disable-next-line no-unused-vars
  const checkDiagonalWin = (board) => {
    console.log(board);
    return false;
  };

  return (
    <div>
      <h2>Connect 4</h2>
      <div className="player-turn-container">
        <div
          className={
            isPlayer1Turn ? "player1 player-token" : "player2 player-token"
          }
        ></div>
        <h3>{isPlayer1Turn ? "Player 1" : "Player 2"}</h3>
      </div>
      <h4 className="message">{message}</h4>
      {winner && (
        <div className="winner">
          <h2>{winner} Wins!</h2>
          {/* <button>Play Again</button> */}
        </div>
      )}
      <table id="board" cellSpacing={10}>
        {gameBoard.map((row, i) => (
          <tr key={i} className="row">
            {row.map((square, j) => (
              <td
                key={j}
                onClick={() => handleClick(j)}
                // eslint-disable-next-line prettier/prettier
                className={square === 1 ? "red square" : square === 2 ? "blue square" : "white square"}
              ></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ConnectFour;
