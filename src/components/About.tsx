import useImgSizeFromWindow from "../hooks/useImgSizeFromWindow";
import "../css/about.css";

function About() {
  const imgSize = useImgSizeFromWindow(0.85, 0.7);

  return (
    <section className="about-container">
      <h2 className="sub-header">About Us</h2>
      <div className="grid-two-items">
        <img
        className="object-cover-img"
          src="./placeHolder.webp"
          alt="Owner"
          width={imgSize.width}
          height={imgSize.height}
        />
        <div className="about-me-text-container">
          <p className="general-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolor illo molestias nesciunt officiis odio eos sed dolores pariatur
            quos sit enim officia ea, hic quia labore. Blanditiis, ea
            voluptatibus.
          </p>
          <p className="general-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolor illo molestias nesciunt officiis odio eos sed dolores pariatur
            quos sit enim officia ea, hic quia labore. Blanditiis, ea
            voluptatibus.
          </p>
          <p className="general-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolor illo molestias nesciunt officiis odio eos sed dolores pariatur
            quos sit enim officia ea, hic quia labore. Blanditiis, ea
            voluptatibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
