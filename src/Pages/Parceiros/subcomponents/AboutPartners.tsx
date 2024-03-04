import "./AboutPartners.css";
import ConteinerCard from "../../../components/Card/ConteinerCard";

export default function aboutPartner() {
  return (
    <div className="Partnerconteiner">
      <ConteinerCard heigth="100%">
        <div className="partner-description">
          <h3>Apoiadores</h3>
          <p>
            Junte-se a nós para a Semana da Computação! Agradecemos aos nossos apoiadores por tornarem este evento
            possível. Suas contribuições são fundamentais para o sucesso da nossa iniciativa. Fique atento para mais
            detalhes sobre nossos incríveis apoiadores em breve.
          </p>
        </div>
      </ConteinerCard>
    </div>
  );
}
