import React from "react";
import { Card } from "@chakra-ui/react";

interface iConteinerCardProps {
  children: React.ReactNode | React.ReactNode[];
  heigth: string;
}

export default function ConteinerCard({ children, heigth }: iConteinerCardProps) {
  return (
    <Card
      w={"60vw"}
      margin={"auto"}
      borderRadius={16}
      backgroundColor={"rgba(134, 119, 205, .75)"}
      color={"white"}
      h={heigth}
      mb={"2%"}
    >
      {children}
    </Card>
  );
}
