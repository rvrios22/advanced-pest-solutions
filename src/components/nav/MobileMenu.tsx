import QuoteButton from "../QuoteButton";
import { Link } from "@tanstack/react-router";

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <img
        src="/close.svg"
        alt="Close"
        height={30}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <menu>
        <Link to="/">
          <span className="general-text">Home</span>
        </Link>
        <Link to="/pests">
          <span className="general-text">Pest Library</span>
        </Link>
        <a href="#contact">
          <span className="general-text">Contact Us</span>
        </a>
        <QuoteButton />
      </menu>
    </>
  );
}

export default MobileMenu;
