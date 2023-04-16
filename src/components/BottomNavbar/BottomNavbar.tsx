import styles from "./BottomNavbar.module.scss";
import { IonIcon } from "@ionic/react";
import {
  compassOutline,
  trophyOutline,
  filmOutline,
  tvOutline,
} from "ionicons/icons";

export const BottomNavbar = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <IonIcon icon={compassOutline} className={styles.icon} />
        <span>Descubrir</span>
      </li>
      <li className={styles.item}>
        <IonIcon icon={filmOutline} className={styles.icon} />
        <span>Películas</span>
      </li>
      <li className={styles.item}>
        <IonIcon icon={tvOutline} className={styles.icon} />
        <span>Series</span>
      </li>
      <li className={styles.item}>
        <IonIcon icon={trophyOutline} className={styles.icon} />
        <span>Top</span>
      </li>
    </ul>
  );
};
