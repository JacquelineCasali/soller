import React, { useRef } from "react";
import "./Carousel.css";
import styles from "../Button/Button.module.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CardDetalhe from "../Card/CardDetalhe";
import Button from "../Button/Button";

export default function Carousel({ test, onLer }) {
  // const [data, setData] = useState([]);
  const carousel = useRef(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/services/depoimento.json")
  //     .then((response) => response.json())
  //     .then(setData);

  // }, []);

  function handleLeftClick(e) {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  function handleRitghtClick(e) {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if (!test || !test.length) return null;
  return (
    <section className="section">
      <div className="tops">
        <div className="top">
          <h6>Join other Sun harvesters</h6>
          <h1>Make something awesome</h1>
          <p className="paragrafo">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="right">
          <Button text="Request a Quote" theme={styles.amarelo} />
        </div>
      </div>
      <div className="carousel" ref={carousel}>
        {test.map((item) => (
          <div className="item" key={item.id} onClick={() => onLer(item.id)}>
            <CardDetalhe data={item} />
          </div>
        ))}
      </div>

      <div className="setas">
        <BsArrowLeftCircle
          onClick={handleLeftClick}
          size={48}
          color="#FCD34D"
          cursor="pointer"
          className="seta"
        />

        <BsArrowRightCircle
          onClick={handleRitghtClick}
          size={48}
          color="#FCD34D"
          cursor="pointer"
          className="seta"
        />
      </div>
    </section>
  );
}
