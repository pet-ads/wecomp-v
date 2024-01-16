import { Box, Card } from "@chakra-ui/react";
import "./AboutTheEvent.css";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";

export default function Sobre() {
  return (
    <section id="informacoes" className="about-the-event">
      <Card w={"70vw"} margin={"auto"} borderRadius={16} backgroundColor={"rgba(164, 149, 235, .75)"} mt={"15vh"}>
        <Box display={"flex"} flexDir={"column"} mt={5}>
          <Infos />
          <Contact isLandscape={true} />
        </Box>
      </Card>
    </section>
  );
}
