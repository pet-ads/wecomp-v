import "./Partner.css";

interface IPartner {
  id?: string;
  src?: string;
  link?: string;
  name?: string;
  width?: string;
}

interface iPartnerProps {
  partner: IPartner;
  image: string;
  isLandscape: boolean;
}

export default function Partner({ partner, image, isLandscape }: iPartnerProps) {
  return (
    <div className="container">
      <div className={`partnerImage ${isLandscape ? "partner-image-landscape" : ""}`}>
        <a href={partner.link} target="_blank" rel="noreferrer">
          <img src={image} alt={partner.name} width={partner.width}></img>
        </a>
      </div>
    </div>
  );
}
