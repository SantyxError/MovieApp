import { FC, ReactElement } from "react";
import styles from "./FilmCard.module.scss";
import { Film } from "../../models/Films.model";
import { formatDate } from "../_utils/formatDate";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

interface Props {
  imgUrl: string;
  film: Film;
}

export const FilmCard: FC<Props> = ({ imgUrl, film }): ReactElement => {
  return (
    <div className={styles.film}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + film.poster_path} className={styles.poster} />
        <div className={styles.vote}>
          <IonIcon icon={star} className={styles.icon} />
          {film.vote_average}
        </div>
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
