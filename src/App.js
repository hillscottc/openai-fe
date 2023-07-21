import Header from "./Header";
import RapBattle from "./RapBattle";
import Completer from "./Completer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RapBattle />
        <hr />
        <Completer />
      </main>
    </div>
  );
}

export default App;
