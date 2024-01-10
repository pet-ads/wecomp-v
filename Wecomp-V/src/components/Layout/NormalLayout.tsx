import Inicio from "../../Pages/PaginaInicial";
import NavBar from "../Navigation/NavBar";

export default function NormalLayout() {
  return (
    <>
      <NavBar />
      <div className="scroll-container parallax">
        <div className="parallax_layer_base parallax__layer">
          <Inicio />
        </div>
      </div>
    </>
  );
}
