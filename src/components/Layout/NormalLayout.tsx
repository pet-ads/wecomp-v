import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import "../Background/Parallax.css";

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
          <Inicio text="V Semana da computação" subText="Em breve..." />
          <Sobre />
          <Parceiros isLandscape={isLandscape} />
          <Programacao />
          <Local isLandscape={isLandscape} />
          <Footer isLandscape={isLandscape} />
        </div>
      </div>
    </>
  );
}
