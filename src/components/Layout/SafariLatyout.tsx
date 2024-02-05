import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import "../Background/Parallax.css";
import Anteriores from "../../Pages/Anteriors/Anteriores";

interface layoutProps {
  isLandscape: boolean;
}

export default function SafariLayout({ isLandscape }: layoutProps) {
  return (
    <>
      <NavBar />
      <div className="parallax-safari">
        <div className="parallax-image-safari" />
        <div className="main-content-safari">
          <Inicio text="V Semana da Computação" subText="Em Breve..." />
          <Sobre />
          <Parceiros isLandscape={isLandscape} />
          <Programacao />
          <Local isLandscape={isLandscape} />
          <Anteriores />
          <Footer isLandscape={isLandscape} />
        </div>
      </div>
    </>
  );
}
