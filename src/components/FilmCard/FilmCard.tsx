import { FC } from "react";
import styles from "./FilmCard.module.scss";
import { Film } from "../../models/Films.model";

interface Props {
  imgUrl: string;
  film: Film;
}

export const FilmCard: FC<Props> = ({ imgUrl, film }) => {
  return (
    <div className={styles.film}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + film.poster_path} className={styles.poster} />
        <div className={styles.vote}>{film.vote_average}</div>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataFilm}>
          <span>{film.title}</span>
          <span>{film.release_date}</span>
        </div>
        <button className={styles.infoButton}>+ INFO</button>
      </div>
    </div>
  );
};
