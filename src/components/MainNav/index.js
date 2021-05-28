
import React from "react";
import Logo from "../../assets/images/RailsbankLogoWhite.png";
import "./style.css";

function MainNav() {
  return (
    <nav id="mainNav">
      <div className="vertContainer">
        <div id="mainLogo">
          <img className="image" src={Logo} />
        </div>
      </div>
      <div className="column"></div>
      <div className="vertContainer">
      <div className="navItems">
        <div className="navItem active">
          <p>Information</p>
        </div>
        <div className="navItem">
          <p>Products</p>
        </div>
        <div className="navItem">
          <p>Developers</p>
        </div>
        <div className="navItem">
          <p>Studio</p>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default MainNav;

