import LogoIFSP from "../Logos/IFSPLogo";
import styles from "./Nav.module.css";
export default function NavBar() {
  const paths: string[] = ["Início", "Sobre", "Programaçao", "Parceiros", "Local"];

  return (
    <nav className={styles.navbar}>
      <LogoIFSP />
      <ul className={styles.navbarConteiner}>
        {paths.map((path, index) => (
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} key={index} href={`#${path}`}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
