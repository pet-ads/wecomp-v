import logoWecomp from "../../assets/images/logoCerto.png";
import styles from "./PaginaInicial.module.css";

interface InitialPageProps {
  text: string;
  subtitle: string;
}
export default function Inicio({ text, subtitle }: InitialPageProps) {
  return (
    <div id="inicio" className={styles.banner}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src={logoWecomp}></img>
        <h2 className={styles.bannerTitle}>{text}</h2>
        <p className={styles.bannerText}>{subtitle}</p>
      </div>
    </div>
  );
}
