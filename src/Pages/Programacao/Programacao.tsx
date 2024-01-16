import "./Programacao.css";
import events from "../../../public/Data/events.json";
import Carousel from "../../components/Carousel/Carousel";
import Event from "../../components/Event/Event";

export default function Programacao() {
  return (
    <div id="programacao" className="schedule">
      <h2 className="scheduleTitle">Programação</h2>
      <Carousel>
        {events.listOfEvents.map((event) => (
          <Event
            key={event.id}
            name={event.name}
            image={event.image}
            imageDesc={event.imageDesc}
            status={event.status}
            author={event.author}
            date={event.date}
            time={event.time}
            classification={event.classification}
            id={0}
            link={""}
            active={false}
            location={""}
            description={""}
          />
        ))}
      </Carousel>
    </div>
  );
}
