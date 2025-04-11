type PestCard = {
  name: string;
  img: string;
  link: string;
};
import { Link } from "@tanstack/react-router";
import "../css/pest-card.css";
import useImgSizeFromWindow from "../hooks/useImgSizeFromWindow";

function PestCard({ name, img, link }: PestCard) {
  const imgSize = useImgSizeFromWindow(0.66, 0.25);
  return (
    <figure className="pest-card-container">
      <Link to={link}>
        <img
          src={img}
          alt=""
          width={imgSize.width}
          height={imgSize.height}
          className="pest-card-img"
        />
      </Link>
      <h4 className="sub-header">{name}</h4>
    </figure>
  );
}

export default PestCard;
