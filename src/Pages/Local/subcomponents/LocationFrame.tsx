import { Card } from "@chakra-ui/react";
import "./Locationframe.css";
interface LocationProps {
  name: string;
  address: string;
  src: string;
}
export default function LocationFrame({ name, address, src }: LocationProps) {
  return (
    <Card
      backgroundColor={"rgba(164, 149, 235, 1)"}
      borderRadius={16}
      maxH={"fit-content"}
      maxW={"fit-content"}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      color={"white"}
    >
      <div className="locationFrame">
        <div>
          <h3>{name}</h3>
          <p>{address}</p>
        </div>
        <iframe src={src}></iframe>
      </div>
    </Card>
  );
}
