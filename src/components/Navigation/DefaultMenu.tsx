import styles from "./Nav.module.css";

export default function DefaultMenu() {
  const paths: string[] = ["Início", "Informações", "Parceiros", "Programação", "Local", "Eventos Anteriores"];
  const removeAccentsAndSpaces = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, ""); // Replace spaces with empty string
  };
  return (
    <>
      <ul className={styles.navbarConteiner}>
        {paths.map((path, index) => (
          <li className={styles.navbarItem} key={index}>
            <a className={styles.navbarLink} href={`#${removeAccentsAndSpaces(path.trim().toLowerCase())}`}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
