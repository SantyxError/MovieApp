import styles from "./Navbar.module.scss";
import logo from "../../assets/img/logo.png";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/")
  }

  const navigateToFilms = () => {
    navigate("/peliculas")
  }

  const navigateToTV = () => {
    navigate("/tv")
  }

  const navigateToTop = () => {
    navigate("/top")
  }



  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="movie app logo" className={styles.logo} />

      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li className={styles.item} onClick={navigateToHome}>Últimas Películas</li>
          <li className={styles.item}onClick={navigateToFilms}>Películas más Populares</li>
          <li className={styles.item}onClick={navigateToTV}>Programas más Populares</li>
          <li className={styles.item}onClick={navigateToTop}>Películas más Valoradas</li>
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
