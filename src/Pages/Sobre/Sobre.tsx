import "./AboutTheEvent.css";
import { Box } from "@chakra-ui/react";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";
import ConteinerCard from "../../components/Card/ConteinerCard";

export default function Sobre() {
  return (
    <section id="informacoes" className="about-the-event">
      <ConteinerCard>
        <Box display={"flex"} flexDir={"column"} mt={5}>
          <Infos />
          <Contact isLandscape={true} />
        </Box>
      </ConteinerCard>
    </section>
  );
}
