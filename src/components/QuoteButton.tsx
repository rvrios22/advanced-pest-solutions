import { Link } from "@tanstack/react-router";

function QuoteButton() {
  const style = {
    // width: "30%",
    minWidth: 'fit-content',
    backgroundColor: "red",
    border: "1px solid black",
    borderRadius: "10px",
    padding: ".25em .5em",
    color: "white",
    fontSize: "clamp(1.1em, 1.5vw, 2em)",
    whiteSpace: 'nowrap',
    WebkitTextStroke: 'none'
  };

  return (
    <Link to="/quote">
      <button style={style}>GET A FREE QUOTE</button>
    </Link>
  );
}

export default QuoteButton;
