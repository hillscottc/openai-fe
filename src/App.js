import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import RapBattle from "./RapBattle";
import Completer from "./Completer";
import "./App.css";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rap" element={<RapBattle />} />
            <Route path="/completer" element={<Completer />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
