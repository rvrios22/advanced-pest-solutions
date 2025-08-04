import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";
import MobileNavbar from "../components/nav/MobileNavbar";
import Navbar from "../components/nav/Navbar";
import "../css/reset.css";
import "../css/global.css";
import "../css/footer.css";

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
      <footer>
        <div className="footer-child">
          <h6 className="sub-header">Contact us</h6>
          <p className="general-text">
            Phone: <a href="tel:+1-760-343-8622">1-760-343-8622</a>
          </p>
          <p className="general-text">
            Email: <a href="mailto:">test@gmail.com</a>
          </p>
          <p className="general-text">
            Address:{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              123 street
            </a>
          </p>
        </div>
        <div className="footer-child">
          <h6 className="sub-header">Hours</h6>
          <p className="general-text">Mondays - Fridays: 8AM - 5PM</p>
          <p className="general-text">Saturdays: 8AM - 2PM</p>
          <p className="general-text">Sundays: Closed</p>
        </div>
        <div className="footer-child">
          <h6 className="sub-header">Social Media</h6>
          <div className="footer-flex">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="instagram" height={35} />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="facebook" height={30} />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/google.svg" alt="google" height={30} />
            </a>
          </div>
        </div>
        <p className="general-text">
          Designed and developed by{" "}
          <a
            href="http://riosdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riosdev.com
          </a>
        </p>
      </footer>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
