import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#cart">Cart</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;