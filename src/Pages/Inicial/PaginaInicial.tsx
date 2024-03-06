import "./PaginaInicial.css";
import Header from "../../components/Header/header";
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
        <Header title={text} />
        <p className={"banner-text"}>{subText}</p>
      </div>
    </div>
  );
}
