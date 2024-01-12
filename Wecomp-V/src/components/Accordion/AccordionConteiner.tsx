import { ReactNode } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

interface AccordionContainerProps {
  title: string;
  children: ReactNode;
}

export default function AccordionContainer({ title, children }: AccordionContainerProps) {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
