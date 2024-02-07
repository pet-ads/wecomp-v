import styles from "./Nav.module.css";
import DefaultMenu from "./DefaultMenu";
import DropdownMenu from "./DropDownNav";
import useIsMobile from "../../hooks/useIsMobile";

export default function NavBar() {
  const isMobile = useIsMobile();
  return <nav className={styles.navbar}>{isMobile ? <DropdownMenu /> : <DefaultMenu />}</nav>;
}
