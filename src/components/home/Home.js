import ConnectFour from "../games/ConnectFour";
import { useState } from "react";
import TicTacToe from "../games/TicTacToe";
import BlackJack from "../games/BlackJack";

const Home = () => {
  const [activeGame, setActiveGame] = useState();
  const connectFour = "connectFour";
  const ticTacToe = "ticTacToe";
  const blackJack = "blackJack";

  const handleSelectGame = (game) => {
    setActiveGame(game);
  };

  return (
    <>
      <h1>Game Center</h1>
      <div>
        <div onClick={() => handleSelectGame(connectFour)}>
          <img src="#" alt="Connect Four" />
          <h3>Connect Four</h3>
          <p>Officia quis cupidatat Lorem occaecat esse amet non mollit.</p>
        </div>
        <div onClick={() => handleSelectGame(ticTacToe)}>
          <img src="#" alt="Tic-Tac-Toe" />
          <h3>Tic-Tac-Toe</h3>
          <p>Officia quis cupidatat Lorem occaecat esse amet non mollit.</p>
        </div>
        <div onClick={() => handleSelectGame(blackJack)}>
          <img src="#" alt="Black Jack" />
          <h3>Black Jack</h3>
          <p>Officia quis cupidatat Lorem occaecat esse amet non mollit.</p>
        </div>
      </div>
      {activeGame === connectFour && <ConnectFour />}
      {activeGame === ticTacToe && <TicTacToe />}
      {activeGame === blackJack && <BlackJack />}
    </>
  );
};

export default Home;
