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
          src="./selfie.webp"
          alt="Owner"
          width={imgSize.width}
          height={imgSize.height}
        />
        <div className="about-me-text-container">
          <p
            className="general-text"
            style={{
              height: window.innerWidth >= 500 ? imgSize.height : "auto",
            }}
          >
            At Advance Pest Solutions in Indio, CA, we offer tailored protection
            for homes and businesses throughout the Coachella Valley. Known for
            expert insect control and rodent removal service in Indio CA, we
            tackle mice, rats, german roach, bedbugs and other invaders using
            proper solutions and exclusion methods to keep pests out for good.
            Whether you need a one-time fix or ongoing protection, our flexible
            plans—short-term and long-term pest control in Indio CA and all
            cities surrounding —are designed to match your schedule and budget
            with effective coverage. We specialize in safe insect control and
            rodent control in Indio Ca. and all cities surrounding, applying
            industry-standard products with a focus on safety, thorough
            eradication, and prevention of future outbreaks Serving both homes
            and businesses, our comprehensive solutions for residential and
            commercial pest extermination in all cities of the Coachella Valley
            include inspections, treatment plans, and educational guidance to
            maintain pest-free properties year-round Facing an urgent
            infestation? Our same-day pest control services in the entire
            Coachella Valley CA ensure prompt, professional response to resolve
            issues fast and minimize disruption. Backed by 15 years of
            experience, Advance Pest Solutions combines expert techniques,
            reliable service, and neighborhood trust to deliver peace of mind
            and clean, safe environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
