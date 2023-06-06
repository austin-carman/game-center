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

  const handleClick = (col) => {
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
    console.log(gameIsOver);
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  const checkIfWinningMove = (board) => {
    console.log(board);
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
