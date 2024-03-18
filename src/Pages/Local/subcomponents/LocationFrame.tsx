import "./Locationframe.css";
import { Card } from "@chakra-ui/react";
interface LocationProps {
  name: string;
  address: string;
  src: string;
}
export default function LocationFrame({ name, address, src }: LocationProps) {
  return (
    <Card
      backgroundColor={"rgba(0, 0, 0, 0)"}
      borderRadius={8}
      border={"none"}
      w={"auto"}
      h={"auto"}
      display={"flex"}
      alignContent={"space-between"}
      justifyContent={"space-between"}
      color={"white"}
      mt={5}
      mb={5}
    >
      <div className="locationFrame">
        <div className="text-content">
          <h3>{name}</h3>
        </div>
        <iframe src={src}></iframe>
      </div>{" "}
      <div className="text-content">
        {" "}
        <p>{address}</p>
      </div>
    </Card>
  );
}
