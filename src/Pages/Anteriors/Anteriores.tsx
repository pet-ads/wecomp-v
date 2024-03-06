import "./anteriores.css";
import EdicaoCard from "./EdicaoCard";
import Carousel from "../../components/Carousel/Carousel";
import eventosAnteriores from "../../../public/Data/anteriores.json";
import Header from "../../components/Header/header";

export default function Preview() {
  return (
    <div id="retrospectiva" className="eventos-anteriores">
      <Header title="Eventos Anteriores" />
      <div className="container">
        <Carousel>
          {eventosAnteriores.map((eventoAnterior) => {
            return (
              <EdicaoCard
                image={eventoAnterior.image}
                imageDesc={eventoAnterior.imageDesc}
                name={eventoAnterior.Name}
                link={eventoAnterior.link}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
