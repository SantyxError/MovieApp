import { useAuth0 } from "@auth0/auth0-react";
import styles from "./BottomNavbar.module.scss";
import { IonIcon } from "@ionic/react";
import {
  compassOutline,
  trophyOutline,
  filmOutline,
  tvOutline,
  heartOutline
} from "ionicons/icons";
import { ReactElement, CSSProperties } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const BottomNavbar = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const { isAuthenticated } = useAuth0()

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

  const navigateToFavorites = (): void => {
    navigate("/favorites");
  };

  const styleProps = {
    '--gridColumns': `${isAuthenticated ? 'repeat(5,1fr)' : 'repeat(4,1fr)'}`
  } as CSSProperties

  return (
    <ul className={styles.menu} style={styleProps}>
      <li className={styles.item}>
        <button onClick={navigateToHome}>
          <IonIcon icon={compassOutline} className={styles.icon} />
          <span>Explora</span>
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

      {isAuthenticated &&
        <li className={styles.item}>
          <button onClick={navigateToFavorites}>
            <IonIcon icon={heartOutline} className={styles.icon} />
            <span>Favs</span>
          </button>
        </li>
      }
    </ul>
  );
};
