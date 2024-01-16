import "./EventStatus.css";

interface EventStatusI {
  status: string;
}
function EventStatus({ status }: EventStatusI) {
  let status_color;
  switch (status) {
    case "ESGOTOU!":
      status_color = "#CD2C2C";
      break;
    case "ÚLTIMAS VAGAS!":
      status_color = "#FF9900";
      break;
  }
  return (
    <div className="event-status" style={{ backgroundColor: status_color }}>
      <p>{status}</p>
    </div>
  );
}
export default EventStatus;
