import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import "../ParalaxBackground/Parallax.css";

export default function NormalLayout() {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <div className="parallax_layer_base parallax__layer">
          <Inicio text="V Wecomp" subtitle="Em breve" />
          <Sobre />
          <Parceiros isLandscape={false} />
          <Programacao />
          <Local isLandscape={false} />
        </div>
      </div>
      <Footer isLandscape={true} />
    </>
  );
}
