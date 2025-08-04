import { createLazyFileRoute } from "@tanstack/react-router";
import pestLibrary from "../../../public/pestLibrary";
import PestCard from "../../components/PestCard";
import "../../css/pest-index.css";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export const Route = createLazyFileRoute("/pests/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="pest-index-container">
      <h1 className="sub-header">PESTS WE'RE EXPERTS ON</h1>
      <div className="pest-grid">
        {pestLibrary.map(({ name, img, link }, idx) => (
          <PestCard name={name} img={img} link={link} key={idx} />
        ))}
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
