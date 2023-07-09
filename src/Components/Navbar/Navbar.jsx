import "./Navbar.css";
import logo from "../../Media/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <nav className="navbar-mobile-container padding-inline-mobile">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div
          className="hamburguer-btn"
          onClick={() => {
            setopenMenu(!openMenu);
          }}
        >
          <div></div>
        </div>
        {openMenu ? (
          <div className="open-mobile-menu">
            <a href="#F">Features</a>
            <a href="#P">Pricing</a>
            <a href="#R">Resources</a>
            <hr />
            <a href="#A">Login</a>
            <button>Sign Up</button>
          </div>
        ) : null}
      </nav>
      <nav className="navbar-desktop-container padding-inline-desktop">
        <div className="logo-links-container">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <a href="#F">Features</a>
          <a href="#P">Pricing</a>
          <a href="#R">Resources</a>
        </div>
        <div className="Aunth-container">
          <a href="#A">Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
