import styles from "./IfspLogo.module.css";
import IFSPLogo from "../../assets/images/logoIFSPbranco.png";
export default function LogoIFSP() {
  return (
    <a href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
      <img className={styles.IFSPLogo} src={IFSPLogo} alt="Identidade visual IFSP/SCL" />
    </a>
  );
}
