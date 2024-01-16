import { Box, Card } from "@chakra-ui/react";
import "./AboutTheEvent.css";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";

export default function Sobre() {
  return (
    <section id="informacoes" className="about-the-event">
      <Card w={"86vw"} margin={"auto"} borderRadius={16} backgroundColor={"rgba(164, 149, 235, 0.2)"} h={"fit-content"}>
        <Box display={"flex"} flexDir={"column"} mt={10} mb={"10vh"}>
          <Infos />
          <Contact isLandscape={true} />
        </Box>
      </Card>
    </section>
  );
}
