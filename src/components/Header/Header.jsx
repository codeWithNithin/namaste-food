import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <nav className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <Link to={"/about"}>About</Link>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
