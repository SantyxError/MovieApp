import styles from "./BottomNavbar.module.scss";
import { IonIcon } from "@ionic/react";
import {
  compassOutline,
  trophyOutline,
  filmOutline,
  tvOutline,
} from "ionicons/icons";
import { useNavigate } from "react-router-dom";

export const BottomNavbar = () => {

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
    <ul className={styles.menu}>
      <li className={styles.item}>
        <button onClick={navigateToHome}>
          <IonIcon icon={compassOutline} className={styles.icon} />
          <span>Descubrir</span>
        </button>
      </li>
      <li className={styles.item}>
        <button onClick={navigateToFilms}>
          <IonIcon icon={filmOutline} className={styles.icon} />
          <span>Películas</span>
        </button>
      </li>
      <li className={styles.item}>
        <button onClick={navigateToTV}>
          <IonIcon icon={tvOutline} className={styles.icon} />
          <span>TV</span>
        </button>
      </li>
      <li className={styles.item}>
        <button onClick={navigateToTop}>
          <IonIcon icon={trophyOutline} className={styles.icon} />
          <span>Top</span>
        </button>
      </li>
    </ul>
  );
};
