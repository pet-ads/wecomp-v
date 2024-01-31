import { Box } from "@chakra-ui/react";

interface ClickableImageProps {
  image: string;
  alt: string;
  link: string;
  className: string;
  text: string;
}
function ClickableImage({ image, alt, link, className, text }: ClickableImageProps) {
  return (
    <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <a href={link} target="_blank">
        <img className={className} src={image} alt={alt}></img>
      </a>
      <p>{text}</p>
    </Box>
  );
}

export default ClickableImage;
