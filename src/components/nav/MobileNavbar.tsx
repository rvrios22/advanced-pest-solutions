import React from "react";
import "../../css/navbar.css";
import Hamburger from "./Hamburger";
import Phone from "./Phone";

function MobileNavbar() {
  return (
    <nav>
      <div className="nav-item-left">APS</div>
      <div className="nav-item-right">
        <Phone />
        <Hamburger />
      </div>
    </nav>
  );
}

export default MobileNavbar;
