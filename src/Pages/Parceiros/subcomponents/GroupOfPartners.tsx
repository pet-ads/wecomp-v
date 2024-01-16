import Partner from "./Partner";
import "./GroupOfPartners.css";
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
        <h2 className="partnersTitle">{text}</h2>
      </div>
      <div className="groupOfPartners">
        {partners.map((partner) => (
          <Partner key={partner.id} partner={partner} image={partner.src} isLandscape={isLandscape} />
        ))}
      </div>
    </>
  );
}
