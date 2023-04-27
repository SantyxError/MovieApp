import { FC, ReactElement, useState } from "react";
import styles from "./FilmCard.module.scss";
import { Film } from "../../models/Films.model";
import { formatDate } from "../_utils/formatDate";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { SmallSpinner } from "../SmallSpinner/SmallSpinner";

interface Props {
  imgUrl: string;
  film: Film;
}

export const FilmCard: FC<Props> = ({ imgUrl, film }): ReactElement => {

  const {user,isAuthenticated} = useAuth0()
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
  
  return (
    <div className={styles.film}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + film.poster_path} className={styles.poster} />
        <div className={styles.vote}>
          <IonIcon icon={star} className={styles.icon} />
          {film.vote_average}
        </div>

      {isAuthenticated &&
        <button className={styles.favoriteButton} onClick={handleSaveMovie}>
          {isLoading ?
            <SmallSpinner/>
          : 'FAV'}
        </button>
      }

      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataFilm}>
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
