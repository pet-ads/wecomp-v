import { useState, useEffect } from "react";
import GroupOfPartners from "./subcomponents/GroupOfPartners";
import "./Parceiros.css";
interface IParceirosProps {
  isLandscape: boolean;
}
export default function Parceiros({ isLandscape }: IParceirosProps) {
  const [supporters, setSupporters] = useState([]);
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("../../../public/Data/partners.json");
        const data = await response.json();
        setSupporters(data.supporters);
        setOrganizers(data.organizers);
      } catch (error) {
        console.error("Ocorreu um erro ao obter os integrantes:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div id="parceiros" className={'partners ${isLandscape ? "partners-landscape" : ""}'}>
      <div className="partnersTile">
        <GroupOfPartners partners={supporters} text="Apoiadores" isLandscape={isLandscape} />
        <GroupOfPartners partners={organizers} text="Realização" isLandscape={isLandscape} />
      </div>
    </div>
  );
}
