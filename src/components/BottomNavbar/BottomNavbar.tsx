import styles from "./BottomNavbar.module.scss";
import { IonIcon } from "@ionic/react";
import {
  compassOutline,
  trophyOutline,
  filmOutline,
  tvOutline,
} from "ionicons/icons";
import { ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const BottomNavbar = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  const navigateToHome = (): void => {
    navigate("/");
  };

  const navigateToFilms = (): void => {
    navigate("/peliculas");
  };

  const navigateToTV = (): void => {
    navigate("/tv");
  };

  const navigateToTop = (): void => {
    navigate("/top");
  };

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
