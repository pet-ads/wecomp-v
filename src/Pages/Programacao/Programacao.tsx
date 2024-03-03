import "./Programacao.css";
import { useState } from "react";
import Event from "../../components/Event/Event";
import events from "../../../public/Data/events.json";
import Carousel from "../../components/Carousel/Carousel";
import AboutSchedule from "./subcomponents/AboutSchedule/AboutSchedule"; // Corrigido aqui

export default function Programacao() {
  const [hasEvents] = useState(false);
  return (
    <div id="programacao" className="schedule">
      {hasEvents === false ? "" : <h2 className="scheduleTitle">Programação</h2>}

      {hasEvents === false ? (
        <AboutSchedule />
      ) : (
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
              link={event.link}
              active={event.active}
              location={event.location}
              description={event.description}
              vacancies={event.vacancies}
              bio={event.bio}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}
