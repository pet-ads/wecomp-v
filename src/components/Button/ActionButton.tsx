import "./ActionButton.css";

interface ActionButtonProps {
  link?: string;
  text: string;
  action?: () => void;
  isactive?: boolean;
  alt?: string;
  active?: boolean;
}

export default function ActionButton({ text, link, action, active }: ActionButtonProps) {
  return (
    <div>
      {active == false ? (
        <input type="button" value={text} className="disable" />
      ) : (
        <a href={link} target="_blank">
          <input type="button" value={text} className="button" onClick={action} />
        </a>
      )}
    </div>
  );
}
