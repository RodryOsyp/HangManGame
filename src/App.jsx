import "./App.css";
import {
  Header,
  Keyboard,
  Word,
  HealthBar,
  GameOver,
  GameStart,
  Congratulation,
} from "./components";
import { useStore } from "./store/game-store";

function App() {
  const store = useStore();
  console.log(store.isWin);
  
  return (
    <>
      <div className="wrapper">
        {store.isWin&&<Congratulation/>}
        {store.startGame ? (
          <>
            {store.health <= 0 ? (
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
