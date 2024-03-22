import "./Locationframe.css";
interface LocationProps {
  name: string;
  address: string;
  src: string;
}
export default function LocationFrame({ name, address, src }: LocationProps) {
  return (
    <>
      <div className="locationFrame">
        <div className="text-content">
          <h3>{name}</h3>
        </div>
        <iframe src={src}></iframe>
        <div className="text-content">
          {" "}
          <p>{address}</p>
        </div>
      </div>{" "}
    </>
  );
}
