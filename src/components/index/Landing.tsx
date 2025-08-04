import useImgSizeFromWindow from "../../hooks/useImgSizeFromWindow";
import "../../css/landing.css";
import QuoteButton from "../QuoteButton";

function Landing() {
  const imgSize = useImgSizeFromWindow(1, 0.7);
  // const logoSize = useImgSizeFromWindow(0.25, 0.3);

  return (
    <section className="landing-container">
      <img
        src="./truck.webp"
        alt="pest control"
        height={imgSize.height}
        width={imgSize.width}
        className="object-cover-img"
      />
      <div className="landing-text">
        <p className="landing-sub-header text-stroke">
          Your Coachella Valley solutions to pests
        </p>
        {/* <img
          src="./logoWithFlag.webp"
          alt=""
          height={logoSize.height}
          width={logoSize.width}
        /> */}
        {/* <h1 className="text-stroke">
          <span className="red landing-header">ADVANCED</span>
          <span className="white landing-header">PEST</span>
          <span className="blue landing-header">SOLUTIONS</span>
        </h1> */}
        <QuoteButton />
      </div>
    </section>
  );
}

export default Landing;
