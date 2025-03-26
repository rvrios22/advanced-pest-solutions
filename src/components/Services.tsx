import useImgSizeFromWindow from "../hooks/useImgSizeFromWindow";
import "../css/services.css";
import QuoteButton from "./QuoteButton";

function Services() {
  const imgSize = useImgSizeFromWindow(0.95, 0.25);
  return (
    <section className="services-container">
      <div className="relative-container">
        <img
          className="object-cover-img"
          src="./placeHolder.webp"
          alt=""
          width={imgSize.width}
          height={imgSize.height}
        />
        <h2 className="sub-header absolute-el text-stroke">OUR SERVICES</h2>
      </div>
      <h3 className="sub-header">
        We offer a variety of services to suit <span>YOUR</span> specific needs
      </h3>
      <ul className="service-list">
        <li className="service-item general-text">On Demand</li>
        <li className="service-item general-text">Monthly</li>
        <li className="service-item general-text">Bi-monthly</li>
        <li className="service-item general-text">Quarterly</li>
        <li className="service-item general-text">Seasonal</li>
      </ul>
      <div className="services-desc">
        <p className="general-text">
            We aim to give you the best service for your individual needs. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident porro aut in sunt! Vel atque corrupti sint veniam adipisci est enim asperiores consequuntur optio. Optio praesentium alias dicta itaque voluptate?
        </p>
        <QuoteButton />
      </div>
    </section>
  );
}

export default Services;
