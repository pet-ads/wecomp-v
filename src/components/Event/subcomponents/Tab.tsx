import "./Tab.css";
interface TabProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  numberOfTabs: number;
}
function Tab({ text, onClick, isSelected, numberOfTabs }: TabProps) {
  return (
    <p
      className={isSelected ? "tab selected" : "tab not-selected"}
      style={{ width: `${100 / numberOfTabs}%` }}
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default Tab;
