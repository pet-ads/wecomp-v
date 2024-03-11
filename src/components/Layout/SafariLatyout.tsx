import "../Background/Parallax.css";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import Sobre from "../../Pages/Sobre/Sobre";
import Local from "../../Pages/Local/Local";
import Inicio from "../../Pages/Inicial/PaginaInicial";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Anteriores from "../../Pages/Anteriors/Anteriores";
import Programacao from "../../Pages/Programacao/Programacao";

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
          <Inicio text="V Semana da Computação" subText="02 de setembro a 06 de setembro" />
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
