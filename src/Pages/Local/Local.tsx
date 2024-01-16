import "./Location.css";
import LocationFrame from "./subcomponents/LocationFrame";

interface ILocationProps {
  isLandscape: boolean;
}
export default function Local({ isLandscape }: ILocationProps) {
  return (
    <div id="local" className={`local ${isLandscape ? "local-landscape" : ""}`}>
      <h1 className="title">Locais do Evento: </h1>
      <div className="locations">
        <LocationFrame
          address="Rua Aquibadan, 1 - Centro"
          name="Onovolab"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.6643558698506!2d-47.896929323746434!3d-22.02416800692639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d06b8be6d%3A0x8fc2b322136f2e37!2sONOVOLAB%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1684889501351!5m2!1spt-BR!2sbr"
        />
        <LocationFrame
          address="Estrada Municipal Paulo Eduardo de Almeida"
          name="IFSP São Carlos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.0366774959741!2d-47.8786689801622!3d-21.97036865369336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8711e71fe250f%3A0xf5c8879e76e658c4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1685573374949!5m2!1spt-BR!2sbr"
        />
      </div>
    </div>
  );
}
