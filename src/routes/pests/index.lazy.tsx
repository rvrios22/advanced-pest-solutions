import { createLazyFileRoute } from "@tanstack/react-router";
import pestLibrary from "../../../public/pestLibrary";
import PestCard from "../../components/PestCard";
import Footer from '../../components/Footer'
import "../../css/pest-index.css";
import ContactForm from "../../components/ContactForm";
export const Route = createLazyFileRoute("/pests/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="pest-index-container">
      <h1 className="sub-header">PESTS WE'RE EXPERTS AT</h1>
      <div className="pest-grid">
        {pestLibrary.map(({ name, img, link }, idx) => (
          <PestCard name={name} img="" link={link} key={idx} />
        ))}
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
