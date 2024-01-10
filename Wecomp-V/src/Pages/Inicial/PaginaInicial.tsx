import logoWecomp from "../assets/images/logoCerto.png";
import styles from "./PaginaInicial.module.css";

export default function Inicio() {
  return (
    <div id="inicio" className={styles.banner}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src={logoWecomp}></img>
        <h2 className={styles.bannerTitle}>V Semana da Computação</h2>
        <p className={styles.bannerText}>Em breve</p>
      </div>
    </div>
  );
}
