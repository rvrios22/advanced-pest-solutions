import { useState } from "react";
import "../../css/navbar.css";
import Hamburger from "./Hamburger";
import Phone from "./Phone";
import MobileMenu from "./MobileMenu";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <nav>
      <div className="nav-item-left">APS</div>
      <div className="nav-item-right">
        <Phone />
        <Hamburger />
      </div>
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
}

export default MobileNavbar;
