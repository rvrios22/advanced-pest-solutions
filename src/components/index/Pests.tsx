import pestLibrary from "./../../../public/pestLibrary";
import PestCard from "../PestCard";
import { Link } from "@tanstack/react-router";
import "../../css/index-pest.css";
function Pests() {
  return (
    <section className="index-pests-section">
      <h2 className="sub-header">
        Pests We're <span className="red">EXPERTS</span> At
      </h2>
      <div className="index-pests-container">
        {pestLibrary.slice(0, 6).map((pest, idx) => (
          <PestCard key={idx} name={pest.name} img={pest.img} link={pest.link} />
        ))}
      </div>
      <p className="general-text">
        <Link to="/pests">See More...</Link>
      </p>
    </section>
  );
}

export default Pests;
