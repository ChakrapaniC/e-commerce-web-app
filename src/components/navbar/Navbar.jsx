import logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo-name">
          <img src={logo} alt="image"></img>
        </div>
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search..."/>
            <button className="search-button">Search</button>
        </div>
        <div className="login">login</div>
      </header>
    </>
  );
};

export default Navbar;
