import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="navbar-logo">
        <h2>Hustle Hub</h2>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mentors">Mentors</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>

      {/* Favorites */}
      <div className="navbar-favorites">
        <NavLink to="/favorites">Favorites</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;