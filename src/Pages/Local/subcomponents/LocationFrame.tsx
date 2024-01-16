import "./Locationframe.css";
interface LocationProps {
  name: string;
  address: string;
  src: string;
}
export default function LocationFrame({ name, address, src }: LocationProps) {
  return (
    <div className="locationFrame">
      <div>
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
      <iframe src={src}></iframe>
    </div>
  );
}
