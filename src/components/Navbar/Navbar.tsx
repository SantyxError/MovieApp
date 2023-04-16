import styles from "./Navbar.module.scss";
import logo from "../../assets/img/logo.png";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="movie app logo" className={styles.logo} />

      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
        </ul>

        <form className={styles.searchWrapper}>
          <input placeholder="Buscar película" className={styles.searchBox} />
          <button
            type="submit"
            className={styles.searchButton}
            aria-label="Búsqueda">
            <IonIcon icon={search} />
          </button>
        </form>
      </div>
    </nav>
  );
};
