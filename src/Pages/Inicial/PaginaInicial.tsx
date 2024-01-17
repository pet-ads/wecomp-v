import "./PaginaInicial.css";
import logoWecomp from "../../assets/images/logoCerto.png";

interface InitialPageProps {
  text: string;
  subText: string;
}
export default function Inicio({ text, subText }: InitialPageProps) {
  return (
    <div id="inicio" className={"banner"}>
      <div className={"banner-container"}>
        <img className={"banner-image"} src={logoWecomp}></img>
        <h2 className={"banner-title"}>{text}</h2>
        <p className={"banner-text"}>{subText}</p>
      </div>
    </div>
  );
}
