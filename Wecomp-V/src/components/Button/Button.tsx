import { Button, Link } from "@chakra-ui/react";
interface NavButtonProps {
  link: string;
  text: string;
}
export default function NavButton({ text, link }: NavButtonProps) {
  return (
    <Link href={link} target="_blank">
      <Button mb={10} mt={10}>
        {text}
      </Button>
    </Link>
  );
}
