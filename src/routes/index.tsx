import { createFileRoute } from "@tanstack/react-router";
import Landing from "../components/Landing";
import About from "../components/About";
import Services from "../components/Services";
import Pests from "../components/Pests";
import ContactForm from "../components/ContactForm";

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
    </>
  );
}
