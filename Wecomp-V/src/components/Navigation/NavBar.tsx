import LogoIFSP from "../Logos/IFSPLogo";
import styles from "./Nav.module.css";

export default function NavBar() {
  const paths: string[] = ["Início", "Parceiros", "Sobre", "Programação", "Local"];
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  return (
    <nav className={styles.navbar}>
      <LogoIFSP />
      <ul className={styles.navbarConteiner}>
        {paths.map((path, index) => (
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} key={index} href={`#${removeAccents(path.toLowerCase())}`}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
