import pestLibrary from "./../../../public/pestLibrary";
import PestCard from "../PestCard";
import { Link } from "@tanstack/react-router";
import "../../css/index-pest.css";
function Pests() {
  return (
    <section className="index-pests-section">
      <h2 className="sub-header">PESTS WE'RE EXPERTS ON</h2>
      <div className="index-pests-container">
        {pestLibrary.map((pest, idx) => (
          <PestCard key={idx} name={pest.name} img="" link={pest.link} />
        ))}
      </div>
      <p className="general-text">
        <Link to="/pests">See More...</Link>
      </p>
    </section>
  );
}

export default Pests;
