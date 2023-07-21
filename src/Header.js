import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div className="App">
      <div className="header">
        <a href="#default" className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          My OpenAI Interface
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
