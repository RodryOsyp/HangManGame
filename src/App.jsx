import "./App.css";
import {
  Header,
  Keyboard,
  Word,
  HealthBar,
  GameOver,
  GameStart,
} from "./components";
import { useStore } from "./store/game-store";

function App() {
  const { health, setStartGame, startGame } = useStore();
  return (
    <>
      <div className="wrapper">
        {startGame ? (
          <>
            {health <= 0 ? (
              <GameOver />
            ) : (
              <>
                <Header />
                <HealthBar />
                <Word />
                <Keyboard />
              </>
            )}
          </>
        ) : (
          <GameStart />
        )}
        
      </div>
      <div></div>
    </>
  );
}

export default App;
