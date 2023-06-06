import { useState } from "react";
// import Row from "./Row";

const ConnectFour = () => {
  // eslint-disable-next-line no-unused-vars
  const [gameBoard, setGameBoard] = useState([
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
  ]);

  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  const handleClick = (col) => {
    console.log(col);
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
      <h2>Current Player: {isPlayer1Turn ? "Player 1" : "Player 2"}</h2>
    </div>
  );
};

export default ConnectFour;
