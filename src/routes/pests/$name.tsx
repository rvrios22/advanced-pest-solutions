import { createFileRoute } from "@tanstack/react-router";
import pestLibrary from "../../../public/pestLibrary";

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
  if (!pest) {
    return <>Pest not found</>;
  }
  const { name, desc } = pest;
  return (
    <>
      {name}, {desc}
    </>
  );
}
