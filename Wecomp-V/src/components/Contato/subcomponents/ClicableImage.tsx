interface ClickableImageProps {
  image: string;
  alt: string;
  link: string;
  className: string;
  text: string;
}
function ClickableImage({ image, alt, link, className, text }: ClickableImageProps) {
  return (
    <>
      <a href={link} target="_blank">
        <img className={className} src={image} alt={alt}></img>
      </a>
      <p>{text}</p>
    </>
  );
}

export default ClickableImage;
