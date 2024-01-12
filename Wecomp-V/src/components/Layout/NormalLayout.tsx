import Inicio from "../../Pages/Inicial/PaginaInicial";
import Local from "../../Pages/Local/Local";
import Parceiros from "../../Pages/Parceiros/Parceiros";
import Programacao from "../../Pages/Programacao/Programacao";
import Sobre from "../../Pages/Sobre/Sobre";
import NavBar from "../Navigation/NavBar";

export default function NormalLayout() {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <div className="parallax_layer_base parallax__layer">
          <Inicio text={"V Semana da Computação"} subtitle={"Em breve"} />
          <Sobre />
          <Parceiros isLandscape={true} />
          <Programacao />
          <Local />
        </div>
      </div>
    </>
  );
}
