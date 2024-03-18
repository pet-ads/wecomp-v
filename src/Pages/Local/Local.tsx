import "./Location.css";
import LocationFrame from "./subcomponents/LocationFrame";
import Locations from "../../../public/Data/location.json";
import ConteinerCard from "../../components/Card/ConteinerCard";

interface ILocationProps {
  isLandscape: boolean;
}
export default function Local({ isLandscape }: ILocationProps) {
  return (
    <div id="local" className={`local ${isLandscape ? "local-landscape" : ""}`}>
      <div className="conteinerCard">
        <ConteinerCard heigth="fit-content" width="90vw">
          <h1 className="title">Locais do Evento </h1>
          <div className="locations">
            {Locations.map((location) => {
              return <LocationFrame address={location.address} name={location.name} src={location.src} />;
            })}
          </div>
        </ConteinerCard>
      </div>
    </div>
  );
}
