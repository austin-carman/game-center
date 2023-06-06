import { useState } from "react";

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
    if (gameBoard[0][col]) {
      setMessage("No available moves here");
      return;
    }
    const newBoard = [...gameBoard];
    let row = 5;
    while (newBoard[row][col] !== null) {
      row = row - 1;
    }
    newBoard[row][col] = isPlayer1Turn ? 1 : 2;
    setGameBoard(newBoard);

    console.log("check if move results in win");

    setIsPlayer1Turn(!isPlayer1Turn);
  };

  return (
    <div>
      <h2>Connect 4</h2>
      <table id="board">
        {gameBoard.map((row, i) => (
          <tr key={i}>
            {row.map((square, j) => (
              <td
                key={j}
                onClick={() => handleClick(j)}
                style={{
                  width: "75px",
                  height: "75px",
                  border: "1px solid black",
                  backgroundColor:
                    square === 1 ? "red" : square === 2 ? "blue" : "white",
                }}
              >
                {square || ""}
              </td>
            ))}
          </tr>
        ))}
      </table>
      <h3>Current Player: {isPlayer1Turn ? "Player 1" : "Player 2"}</h3>
      <h4>{message}</h4>
    </div>
  );
};

export default ConnectFour;
