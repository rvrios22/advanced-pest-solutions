import { createFileRoute } from "@tanstack/react-router";
import Landing from "../components/index/Landing";
import About from "../components/index/About";
import Services from "../components/index/Services";
import Pests from "../components/index/Pests";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Pests />
      <ContactForm />
      <Footer />
    </>
  );
}
