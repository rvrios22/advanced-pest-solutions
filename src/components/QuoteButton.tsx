import { Link } from "@tanstack/react-router";
import '../css/quote-button.css'
function QuoteButton() {
  // const style = {
  //   minWidth: 'fit-content',
  //   backgroundColor: "red",
  //   border: "1px solid black",
  //   borderRadius: "10px",
  //   padding: ".25em .5em",
  //   color: "white",
  //   fontSize: "clamp(1.1em, 1.5vw, 2em)",
  //   whiteSpace: 'nowrap',
  //   WebkitTextStroke: 'none',
  // };

  return (
    <Link to="/quote">
      <button className="quote-button">GET A FREE QUOTE</button>
    </Link>
  );
}

export default QuoteButton;
