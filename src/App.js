import { Link } from "react-router-dom";
import Routes from "./Routes";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <header>
        <strong>Scott's Chatbots</strong>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rap">Rap Battle</Link>
            </li>
            <li>
              <Link to="/completer">Completer</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
