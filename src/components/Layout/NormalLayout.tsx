import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";

interface layoutProps {
  isLandscape: boolean;
}

export default function NormalLayout({ isLandscape }: layoutProps) {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <div className="parallax_layer_base parallax__layer">
          <Inicio text="V Wecomp" subText="Em breve..." />
          <Sobre />
          <Parceiros isLandscape={isLandscape} />
          <Programacao />
          <Local isLandscape={isLandscape} />
        </div>
      </div>
      <Footer isLandscape={isLandscape} />
    </>
  );
}
