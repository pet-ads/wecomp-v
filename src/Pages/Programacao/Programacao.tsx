import "./Programacao.css";
import { useState } from "react";
import Event from "../../components/Event/Event";
import Header from "../../components/Header/header";
import events from "../../../public/Data/events.json";
import Carousel from "../../components/Carousel/Carousel";
import AboutSchedule from "./subcomponents/AboutSchedule/AboutSchedule";
import ConteinerCard from "../../components/Card/ConteinerCard";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Programacao() {
  const [hasEvents] = useState(false);
  const width = useBreakpointValue({ base: "80vw", md: "fit-content", lg: "40vw" }) ?? "80vw";

  return (
    <div id="programacao" className="schedule">
      <div className={hasEvents ? "ScheduleConteiner" : "conteiner-text"}>
        <ConteinerCard width={width} heigth="auto">
          {" "}
          {hasEvents === false ? "" : <Header title="Programação" />}
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
        </ConteinerCard>
      </div>
    </div>
  );
}
