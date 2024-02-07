import Tab from "./Tab";
import "./PopUpEventTab.css";
import { useState } from "react";

interface PopUpEventTabProps {
  texts: string[];
  descriptions: string[] | string;
}

function PopUpEventTab({ texts, descriptions }: PopUpEventTabProps) {
  const [text, setText] = useState(descriptions[0]);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (newDescription: string, index: number) => {
    setText(newDescription);
    setSelectedTab(index);
  };

  const numberOfTabs = texts.length;

  return (
    <div className="popUpEventTab">
      <div className="tabs">
        {texts.map((text, index) => (
          <Tab
            numberOfTabs={numberOfTabs}
            key={index}
            text={text}
            onClick={() => handleTabClick(descriptions[index], index)}
            isSelected={selectedTab === index}
          />
        ))}
      </div>
      <div className="description-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PopUpEventTab;
