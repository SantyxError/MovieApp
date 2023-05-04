import { FC, ReactElement, useState } from "react";
import styles from "./FilmCard.module.scss";
import { Film } from "../../models/Films.model";
import { formatDate } from "../_utils/formatDate";
import { IonIcon } from "@ionic/react";
import { heart, star } from "ionicons/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { SmallSpinner } from "../SmallSpinner/SmallSpinner";
import { NavigateFunction, useNavigate } from "react-router-dom";
import noImage from "../../assets/img/no-image.svg";

interface Props {
  imgUrl: string;
  film: Film;
}

export const FilmCard: FC<Props> = ({ imgUrl, film }): ReactElement => {

  const { user, isAuthenticated } = useAuth0()
  const navigate: NavigateFunction = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseUrl = import.meta.env.VITE_BASE_URL_LOCALHOST;
  const url = `${baseUrl}/api/favorites`

  const handleSaveMovie = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: film.id,
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
    navigate(`/film/${film.id}`);
  };

  return (
    <div className={styles.film}>
      <div className={styles.imgWrapper}>
        <img src={film.poster_path ? imgUrl + film.poster_path : noImage} className={styles.poster} alt={film.title} onClick={navigateToItemInfo}/>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataFilm}>
          <div className={styles.info}>
            <div className={styles.vote}>
              <IonIcon icon={star} className={styles.icon} />
              {film.vote_average.toFixed(1)}
            </div>
            {isAuthenticated &&
                <button className={styles.favoriteButton} onClick={handleSaveMovie}>
                  {isLoading ?
                    <SmallSpinner />
                    : <IonIcon icon={heart} className={styles.icon} />}
                </button>
              }
          </div>
          <span className={styles.filmTitle}>{film.title}</span>
          <span className={styles.filmDate}>
            {formatDate(film.release_date)}
          </span>
        </div>
        <button className={styles.infoButton}>+ INFO</button>
      </div>
    </div>
  );
};
