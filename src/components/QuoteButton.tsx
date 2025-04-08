import { Link } from "@tanstack/react-router";
import "../css/quote-button.css";
function QuoteButton() {
  return (
    <a href="#contact">
      <button className="quote-button">GET A FREE QUOTE</button>
    </a>
  );
}

export default QuoteButton;
