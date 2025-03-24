import { useEffect, useState } from "react";
import "../css/landing.css";
import QuoteButton from "./QuoteButton";

function Landing() {
  const [imgSize, setImgSize] = useState({
    height: window.innerHeight * 0.7,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleImgResize = () => {
      setImgSize({
        width: window.innerWidth,
        height: window.innerHeight * 0.7,
      });
    };
    window.addEventListener("resize", handleImgResize);

    return () => window.removeEventListener("resize", handleImgResize);
  }, []);

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
        <p className="sub-header">Your Coachella Valley solutions to pests</p>
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
