import NavButton from "../../../components/Button/NavButton";
import "../AboutTheEvent.css";

export default function Infos() {
  return (
    <>
      <div className="event-description">
        <h3>Sobre a wecomp:</h3>
        <p>
          A Wecomp é a semana da computação do IFSP São Carlos, que neste ano realizará sua quarta edição. O objetivo do
          evento é proporcionar uma maior interação entre os estudantes, o mercado de tecnologia e a cidade de São
          Carlos. Ao longo de cinco dias de evento, serão realizados diversos minicursos, talks e processos seletivos,
          que visam reduzir a distância entre a teoria e a prática, ensinar tecnologias novas e promover o ingresso dos
          participantes no mercado de trabalho
        </p>
      </div>
      <div>
        <NavButton link="http://petads.paginas.scl.ifsp.edu.br" text="Veja Mais" />
      </div>
    </>
  );
}
