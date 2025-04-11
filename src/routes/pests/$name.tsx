import { createFileRoute } from "@tanstack/react-router";
import pestLibrary from "../../../public/pestLibrary";
import useImgSizeFromWindow from "../../hooks/useImgSizeFromWindow";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import "../../css/pest-page.css";

const fetchPest = (name: string) => {
  const pest = pestLibrary.find((el) => el.link === `/pests/${name}`);
  return pest;
};

export const Route = createFileRoute("/pests/$name")({
  loader: async ({ params }) => fetchPest(params.name),
  component: RouteComponent,
});

function RouteComponent() {
  const pest = Route.useLoaderData();
  const imgSize = useImgSizeFromWindow(1, 0.66);
  if (!pest) {
    return <>Pest not found</>;
  }
  const { name, desc, img, control } = pest;
  return (
    <>
      <img
        src={img}
        alt={name}
        height={imgSize.height}
        width={imgSize.width}
        className="pest-page-img"
      />
      <h1 className="sub-header">{name}</h1>
      <section className="pest-page-text">
        <p className="general-text">{desc}</p>
        <h2 className="sub-header">Control</h2>
        <p className="general-text">{control}</p>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
