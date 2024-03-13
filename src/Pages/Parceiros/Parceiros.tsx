import "./Parceiros.css";
import { useState, useEffect } from "react";
import AboutPartners from "./subcomponents/AboutPartners";
import GroupOfPartners from "./subcomponents/GroupOfPartners";
import ConteinerCard from "../../components/Card/ConteinerCard";

interface IParceirosProps {
  isLandscape: boolean;
}

export default function Parceiros({ isLandscape }: IParceirosProps) {
  const [haspartner] = useState(false);
  const [supporters, setSupporters] = useState([]);
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("/Data/partners.json");
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
    <div id="parceiros" className={`partners ${isLandscape ? "partners-landscape" : ""}`}>
      <div className="partnersTile">
        {haspartner ? (
          <GroupOfPartners partners={supporters} text="Apoiadores" isLandscape={isLandscape} />
        ) : (
          <AboutPartners />
        )}
        <ConteinerCard heigth="fit=content">
          <GroupOfPartners partners={organizers} text="Realização" isLandscape={isLandscape} />
        </ConteinerCard>
      </div>
    </div>
  );
}
