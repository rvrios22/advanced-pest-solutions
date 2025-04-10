import { useEffect, useState } from "react";
import "../../css/navbar.css";
import Hamburger from "./Hamburger";
import Phone from "./Phone";
import MobileMenu from "./MobileMenu";
import { Link, useRouter } from "@tanstack/react-router";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = router.history.subscribe(() => setIsMenuOpen(false));

    return () => unsubscribe();
  }, [router]);
  return (
    <nav>
      <div className="nav-item-left">
        <Link to="/">APS</Link>
      </div>
      <div className="nav-item-right">
        <a href="tel:+1-760-343-8622">
          <Phone />
        </a>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Hamburger />
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </nav>
  );
}

export default MobileNavbar;
