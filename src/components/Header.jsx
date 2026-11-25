import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
}

export default Header;
