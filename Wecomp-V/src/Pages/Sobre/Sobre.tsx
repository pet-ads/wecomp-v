import { Box, Card, Heading } from "@chakra-ui/react";
import "./AboutTheEvent.css";

import AccordionContainer from "../../components/Accordion/AccordionConteiner";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";

export default function Sobre() {
  return (
    <section id="informacoes" className="about-the-event">
      <header>
        <Heading>Informações do Evento</Heading>
      </header>
      <Card
        display={"flex"}
        width={"90vw"}
        justifySelf={"center"}
        alignSelf={"center"}
        borderRadius={16}
        boxShadow={" 0 4px 8px rgba(0, 0, 0, 0.1)"}
      >
        <Box display={"flex"} flexDir={"column"}>
          <Infos />
        </Box>
        <Box>
          <AccordionContainer title="Informoções de contato" children={<Contact isLandscape={true} />} />
        </Box>
      </Card>
    </section>
  );
}
