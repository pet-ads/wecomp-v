import "./GroupOfPartners.css";
import Partner from "./Partner";

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
        <h1 className="partnersTitle">{text}</h1>
      </div>
      <div className="groupOfPartners">
        {partners.map((partner) => (
          <Partner key={partner.id} partner={partner} image={partner.src} isLandscape={isLandscape} />
        ))}
      </div>
    </>
  );
}
