import logoWecomp from "../../assets/images/logoCerto.png";
import "./PaginaInicial.css";

interface InitialPageProps {
  text: string;
  subText: string;
}
export default function Inicio({ text, subText }: InitialPageProps) {
  return (
    <div id="inicio" className={"banner"}>
      <div className={"bannerContainer"}>
        <img className={"bannerImage"} src={logoWecomp}></img>
        <h2 className={"bannerTitle"}>{text}</h2>
        <p className={"bannerText"}>{subText}</p>
      </div>
    </div>
  );
}
