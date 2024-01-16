import { Box, Card } from "@chakra-ui/react";
import "./AboutTheEvent.css";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";

export default function Sobre() {
  return (
    <section id="informacoes" className="about-the-event">
      <Card
        maxWidth={"80vw"}
        w={"80vw"}
        margin={"auto"}
        borderRadius={32}
        backgroundColor={"rgba(164, 149, 235, 0.2)"}
        maxH={"70vh"}
        h={"fit-content"}
      >
        <Box display={"flex"} flexDir={"column"} mt={10} mb={"10vh"}>
          <Infos />
          <Contact isLandscape={true} />
        </Box>
      </Card>
    </section>
  );
}
