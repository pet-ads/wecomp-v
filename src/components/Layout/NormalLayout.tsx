import "../Background/Parallax.css";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import Sobre from "../../Pages/Sobre/Sobre";
import Local from "../../Pages/Local/Local";
import Background from "../Background/Background";
import Inicio from "../../Pages/Inicial/PaginaInicial";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Anteriores from "../../Pages/Anteriors/Anteriores";
import Programacao from "../../Pages/Programacao/Programacao";

interface layoutProps {
  isLandscape: boolean;
}

export default function NormalLayout({ isLandscape }: layoutProps) {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <Background isLandscape={isLandscape} />
        <div className="parallax_layer_base parallax__layer">
          <Inicio text="V Semana da computação" subText="02 a 06 de setembro" />
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
