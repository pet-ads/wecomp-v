import React from "react";
import { Card } from "@chakra-ui/react";

interface iConteinerCardProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function ConteinerCard({ children }: iConteinerCardProps) {
  return (
    <Card w={"70vw"} margin={"auto"} borderRadius={16} backgroundColor={"rgba(164, 149, 235, .75)"} color={"white"}>
      {children}
    </Card>
  );
}
