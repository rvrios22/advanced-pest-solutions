import { useEffect, useState } from "react";
import useImgSizeFromWindow from "../hooks/useImgSizeFromWindow";
import "../css/landing.css";
import QuoteButton from "./QuoteButton";

function Landing() {
  const imgSize = useImgSizeFromWindow(1, 0.7);

  return (
    <section className="landing-container">
      <img
        src="./placeHolder.webp"
        alt="pest control"
        height={imgSize.height}
        width={imgSize.width}
        className="landing-img"
      />
      <div className="landing-text">
        <p className="landing-sub-header">
          Your Coachella Valley solutions to pests
        </p>
        <h1>
          <span className="red landing-header">ADVANCED</span>
          <span className="white landing-header">PEST</span>
          <span className="blue landing-header">SOLUTIONS</span>
        </h1>
        <QuoteButton />
      </div>
    </section>
  );
}

export default Landing;
