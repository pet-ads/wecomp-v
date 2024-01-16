import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import Background from "../ParalaxBackground/Backgroun";
import "../../components/ParalaxBackground/Parallax.css";

interface layoutProps {
  isLandscape: boolean;
}

export default function NormalLayout({ isLandscape }: layoutProps) {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <Background isLandscape={isLandscape}>
          <div className="parallax_layer_base parallax__layer">
            <Inicio text="V Wecomp" subText="Em breve..." />
            <Sobre />
            <Programacao />
            <Parceiros isLandscape={isLandscape} />
            <Local isLandscape={isLandscape} />
          </div>
        </Background>
      </div>
      <Footer isLandscape={isLandscape} />
    </>
  );
}
