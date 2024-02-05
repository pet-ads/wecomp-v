import LogoIFSP from "../Logos/IFSPLogo";
import styles from "./Nav.module.css";

export default function DefaultMenu() {
  const paths: string[] = ["Início", "Informações", "Parceiros", "Programação", "Local", "Eventos anteriores"];
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  return (
    <>
      <LogoIFSP />
      <ul className={styles.navbarConteiner}>
        {paths.map((path, index) => (
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} key={index} href={`#${removeAccents(path.trim().toLowerCase())}`}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
