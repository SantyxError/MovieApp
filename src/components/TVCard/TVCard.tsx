import { TV } from "../../models/TV.model";
import { FC, ReactElement, useState } from "react";
import styles from "./TVCard.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { formatDate } from "../_utils/formatDate";
import { IonIcon } from "@ionic/react";
import { heart, star } from "ionicons/icons";
import { SmallSpinner } from "../SmallSpinner/SmallSpinner";

interface Props {
  imgUrl: string;
  tv: TV;
}

export const TVCard: FC<Props> = ({ imgUrl, tv }): ReactElement => {
  
  const { user, isAuthenticated } = useAuth0()
  const navigate: NavigateFunction = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseUrl = import.meta.env.VITE_BASE_URL_LOCALHOST;
  const url = `${baseUrl}/api/favorites`

  const handleSaveTV = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: tv.id,
          user_id: user?.sub
        })
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToItemInfo= (): void => {
    navigate(`/tv/${tv.id}`);
  };

  return (
    <div className={styles.tv}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + tv.poster_path} className={styles.poster} alt={tv.name} onClick={navigateToItemInfo}/>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataTV}>
          <div className={styles.info}>
            <div className={styles.vote}>
              <IonIcon icon={star} className={styles.icon} />
              {tv.vote_average.toFixed(1)}
            </div>
            {isAuthenticated &&
                <button className={styles.favoriteButton}>
                  {isLoading ?
                    <SmallSpinner />
                    : <IonIcon icon={heart} className={styles.icon} />}
                </button>
              }
          </div>
          <span className={styles.tvTitle}>{tv.name}</span>
          <span className={styles.tvDate}>
            {formatDate(tv.first_air_date)}
          </span>
        </div>
        <button className={styles.infoButton}>+ INFO</button>
      </div>
    </div>
  );
};