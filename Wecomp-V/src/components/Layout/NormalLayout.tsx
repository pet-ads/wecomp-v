import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import Background from "../ParalaxBackground/Backgroun";
import "../ParalaxBackground/Parallax.css";

export default function NormalLayout() {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <Background isLandscape={true}>
          <div className="parallax_layer_base parallax__layer">
            <Inicio text="V Wecomp" subtitle="Em breve" />
            <Sobre />
            <Parceiros isLandscape={true} />
            <Programacao />
            <Local isLandscape={true} />
          </div>
        </Background>
        <Footer isLandscape={true} />
      </div>
    </>
  );
}
