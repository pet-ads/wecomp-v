import "./EventClassification.css";

interface ClassificationProps {
  classification?: string;
}

function EventClassification({ classification }: ClassificationProps) {
  let classificacao;
  switch (classification) {
    case "livre":
      classificacao = "Livre";
      break;
    case "basico":
      classificacao = "Básico";
      break;
    case "intermediario":
      classificacao = "Intermediário";
      break;
    case "avancado":
      classificacao = "Avançado";
      break;
    default:
      classificacao = classification;
      break;
  }
  return (
    <div className="eventClassification">
      <p className={classification}>{classificacao}</p>
    </div>
  );
}
export default EventClassification;
