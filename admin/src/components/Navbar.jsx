import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <ul className="nav_items">
          <li className="nav_item">
            <a href="/">Projects</a>
          </li>
          <li className="nav_item">
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
