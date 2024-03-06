import "./GroupOfPartners.css";
import Partner from "./Partner";
import Header from "../../../components/Header/header";

interface IPartner {
  id: string;
  src: string;
  link?: string;
  name?: string;
  width?: string;
}

interface GroupOfPartnersProps {
  partners: IPartner[];
  text: string;
  isLandscape: boolean;
}

export default function GroupOfPartners({ partners, text, isLandscape }: GroupOfPartnersProps) {
  return (
    <>
      <div className="partnersTitleContainer">
        <Header title={text} />
      </div>
      <div className="groupOfPartners">
        {partners.map((partner) => (
          <Partner key={partner.id} partner={partner} image={partner.src} isLandscape={isLandscape} />
        ))}
      </div>
    </>
  );
}
