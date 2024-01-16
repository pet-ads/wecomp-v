import "./Event.css";
{
  /*import PopUpEvent from "./subcomponents/PopEvent";*/
}
import ClassificationLevel from "./subcomponents/ClassificationLevel";
import EventStatus from "./subcomponents/EventStatus";
{
  /*import soldOut from "../images/soldOut.png";*/
}
import { iEvent } from "../../Type/EventType";

function Event({ name, image, imageDesc, status, classification, author, date, time }: iEvent) {
  return (
    <div className="event">
      <h2 className="eventTitle">{name}</h2>
      <div className="eventBanner">
        <img className="eventImage" src={image} alt={imageDesc} />
        {status ? <EventStatus status={status} /> : <></>}
        {/* {soldOut ? <img className="sold-out" src={soldOut} alt="teste"/> : <></>} */}
        {classification != undefined ? <ClassificationLevel classification={classification} /> : <></>}
      </div>

      <h3 className="eventAuthor">{author}</h3>
      <div className="eventDateTime">
        <p className="eventDate">{date}</p>
        <p className="eventTime">{time}</p>
      </div>
      {/*<PopUpEvent event={event} />*/}
    </div>
  );
}

export default Event;
