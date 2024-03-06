interface iHeaderProps {
  title: string;
}
export default function Header({ title }: iHeaderProps) {
  return <h1 className="title">{title}</h1>;
}
