import useImgSizeFromWindow from "../hooks/useImgSizeFromWindow";
import '../css/about.css'

function About() {
  const imgSize = useImgSizeFromWindow(0.85, 0.5);

  return (
    <section className="about-container">
      <h2 className="sub-header">About Us</h2>
      <img
        src="./placeHolder.webp"
        alt="Owner"
        width={imgSize.width}
        height={imgSize.height}
      />
      <p className="general-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti quasi consequatur ullam doloremque. Nam ab ipsam, cumque explicabo earum assumenda consectetur voluptatibus quibusdam, temporibus eveniet officia illo perferendis minima.
      Provident, praesentium? Sed deleniti temporibus labore ratione numquam hic harum quo velit? Id provident quis vero, recusandae quas, aut ipsum ea quae, maiores nihil ducimus ab qui dolorum? Similique, laborum.</p>
      <p className="general-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti quasi consequatur ullam doloremque. Nam ab ipsam, cumque explicabo earum assumenda consectetur voluptatibus quibusdam, temporibus eveniet officia illo perferendis minima.
      Provident, praesentium? Sed deleniti temporibus labore ratione numquam hic harum quo velit? Id provident quis vero, recusandae quas, aut ipsum ea quae, maiores nihil ducimus ab qui dolorum? Similique, laborum.</p>
      <p className="general-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti quasi consequatur ullam doloremque. Nam ab ipsam, cumque explicabo earum assumenda consectetur voluptatibus quibusdam, temporibus eveniet officia illo perferendis minima.
      Provident, praesentium? Sed deleniti temporibus labore ratione numquam hic harum quo velit? Id provident quis vero, recusandae quas, aut ipsum ea quae, maiores nihil ducimus ab qui dolorum? Similique, laborum.</p>
    </section>
  );
}

export default About;
