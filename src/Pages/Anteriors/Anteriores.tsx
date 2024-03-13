import "./anteriores.css";
import EdicaoCard from "./EdicaoCard";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/Carousel";
import eventosAnteriores from "../../../public/Data/anteriores.json";

export default function Preview() {
  return (
    <div id="eventosanteriores" className="eventos-anteriores">
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
