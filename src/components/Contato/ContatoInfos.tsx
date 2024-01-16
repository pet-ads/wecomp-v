import "./subcomponents/Contact.css";
import ClickableImage from "./subcomponents/ClicableImage";

interface ContactProps {
  isLandscape: boolean;
}

function Contact({ isLandscape }: ContactProps) {
  const linkInstagram = "https://www.instagram.com/wecompifsp/";
  const logoInstagram =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

  const linkEmail = "mailto:wecomp.scl@ifsp.edu.br?subject=Contato via Site da Wecomp";
  const logoEmail = "https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png";

  const linkFacebook = "https://web.facebook.com/wecompifsp";
  const logoFacebook =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png";

  return (
    <div className={`contact ${isLandscape ? "contact-landscape" : ""}`} id="contact">
      <h2>Informações de Contato</h2>
      <p className="disclaimer">
        Nos acompanhe pelas nossas redes sociais, onde postaremos as atualizações do evento. Entre em contato conosco
        pelo nosso e-mail oficial!
      </p>
      <h3>Redes Sociais</h3>
      <div className="socialMedia">
        <div className="instagram">
          <ClickableImage
            className={"socialMediaLogo"}
            link={linkInstagram}
            alt="Logo da Rede Social Instagram"
            text="@wecompifsp"
            image={logoInstagram}
          ></ClickableImage>
        </div>
        <div className="facebook">
          <ClickableImage
            className={"socialMediaLogo"}
            link={linkFacebook}
            alt="Logo da Rede Social Facebook"
            text="@wecompifsp"
            image={logoFacebook}
          ></ClickableImage>
        </div>
        <div className="email">
          <ClickableImage
            className="socialMediaLogo"
            link={linkEmail}
            alt="Logo do E-mail Oficial"
            text="wecomp.scl@ifsp.edu.br"
            image={logoEmail}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
