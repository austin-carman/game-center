import ConnectFour from "../games/ConnectFour";
import { useState } from "react";
import TicTacToe from "../games/TicTacToe";
import BlackJack from "../games/BlackJack";

const Home = () => {
  const connectFour = "connectFour";
  const ticTacToe = "ticTacToe";
  const blackJack = "blackJack";
  const [activeGame, setActiveGame] = useState(connectFour);

  const handleSelectGame = (game) => {
    setActiveGame(game);
  };

  return (
    <>
      <h1 className="home-title">Game Center</h1>
      <div className="home-games-container">
        <div
          className="game-container"
          onClick={() => handleSelectGame(connectFour)}
        >
          <img
            // eslint-disable-next-line no-undef
            src={process.env.PUBLIC_URL + "/connect-four.png"}
            alt="Connect Four"
          />
          <h3>Connect Four</h3>
        </div>
        <div
          className="game-container"
          onClick={() => handleSelectGame(ticTacToe)}
        >
          <img
            // eslint-disable-next-line no-undef
            src={process.env.PUBLIC_URL + "/tic-tac-toe.png"}
            alt="Tic Tac Toe"
          />
          <h3>Tic Tac Toe</h3>
        </div>
        <div
          className="game-container"
          onClick={() => handleSelectGame(blackJack)}
        >
          <img
            // eslint-disable-next-line no-undef
            src={process.env.PUBLIC_URL + "/tic-tac-toe.png"}
            alt="Tic Tac Toe"
          />
          <h3>Black Jack</h3>
        </div>
      </div>
      {activeGame === connectFour && <ConnectFour />}
      {activeGame === ticTacToe && <TicTacToe />}
      {activeGame === blackJack && <BlackJack />}
    </>
  );
};

export default Home;
