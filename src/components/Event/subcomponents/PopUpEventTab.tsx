import Tab from "./Tab";
import "./PopUpEventTab.css";
import { useState } from "react";

interface PopUpEventTabProps {
  texts: string[];
  descriptions: string[] | string;
}

export default function PopUpEventTab({ texts, descriptions }: PopUpEventTabProps) {
  const [text, setText] = useState(Array.isArray(descriptions) ? descriptions[0] : descriptions);
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
            onClick={() => handleTabClick(Array.isArray(descriptions) ? descriptions[index] : descriptions, index)}
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
