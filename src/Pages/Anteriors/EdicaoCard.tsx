import "./anteriores.css";

interface eCardProp {
  image: string;
  imageDesc: string;
  name: string;
  link: string;
}
export default function EdicaoCard({ image, imageDesc, name, link }: eCardProp) {
  return (
    <div className="edicao">
      <div className="edicaoBanner">
        <a href={link} target="_blank">
          {" "}
          <img className="edicaoImage" src={image} alt={imageDesc} />
        </a>
      </div>
      <a href={link} target="_blank">
        <h3 className="edicaoName">{name}</h3>
      </a>
    </div>
  );
}
