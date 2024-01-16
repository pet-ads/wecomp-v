import { Button, Link } from "@chakra-ui/react";
interface NavButtonProps {
  link: string;
  text: string;
}
export default function NavButton({ text, link }: NavButtonProps) {
  return (
    <Link href={link} target="_blank">
      <Button
        backgroundColor={"blueviolet"}
        color={"#FFFF"}
        mb={10}
        mt={10}
        _hover={{ backgroundColor: "rgba(164, 149, 235)" }}
      >
        {text}
      </Button>
    </Link>
  );
}
