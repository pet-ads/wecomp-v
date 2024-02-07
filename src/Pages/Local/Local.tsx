import "./Location.css";
import LocationFrame from "./subcomponents/LocationFrame";
import Locations from "../../../public/Data/location.json";

interface ILocationProps {
  isLandscape: boolean;
}
export default function Local({ isLandscape }: ILocationProps) {
  return (
    <div id="local" className={`local ${isLandscape ? "local-landscape" : ""}`}>
      <h1 className="title">Locais do Evento </h1>
      <div className="locations">
        {Locations.map((location) => {
          return <LocationFrame address={location.address} name={location.name} src={location.src} />;
        })}
      </div>
    </div>
  );
}
