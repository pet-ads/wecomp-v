import "./subcomponents/Contact.css";
import icons from "../../../public/Data/socialmedia.json";
import ClickableImage from "./subcomponents/ClicableImage";

interface ContactProps {
  isLandscape: boolean;
}

export default function Contact({ isLandscape }: ContactProps) {
  return (
    <div className={`contact ${isLandscape ? "contact-landscape" : ""}`} id="contact">
      <h2>Informações de Contato</h2>
      <p className="disclaimer">
        Nos acompanhe pelas nossas redes sociais, onde divulgaremos as atualizações do evento. Entre em contato conosco
        pelo nosso e-mail oficial:{" "}
        <a href="mailto:wecomp.scl@ifsp.edu.br">
          <u className="mail">wecomp.scl@ifsp.edu.br</u>
        </a>
      </p>
      <div className="socialMedia">
        {Array.isArray(icons) &&
          icons.map((icon) => (
            <div key={icon.id} className={icon.name}>
              <ClickableImage
                className={"socialMediaLogo"}
                link={icon.link}
                alt={icon.alt}
                text={icon.text}
                image={icon.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
