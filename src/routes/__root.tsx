import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";
import MobileNavbar from "../components/nav/MobileNavbar";
import Navbar from "../components/nav/Navbar";
import "../css/reset.css";
import "../css/global.css";
import Footer from "../components/Footer";

const RootComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth > 600 ? <Navbar /> : <MobileNavbar />}
      <div style={{ minHeight: "100dvh" }}>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
      <Footer />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
