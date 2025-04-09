import { useEffect, useState } from "react";
import "../../css/navbar.css";
import Hamburger from "./Hamburger";
import Phone from "./Phone";
import MobileMenu from "./MobileMenu";
import { useRouter } from "@tanstack/react-router";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = router.history.subscribe(() => setIsMenuOpen(false));

    return () => unsubscribe();
  }, [router]);
  return (
    <nav>
      <div className="nav-item-left">APS</div>
      <div className="nav-item-right">
        <Phone />
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
