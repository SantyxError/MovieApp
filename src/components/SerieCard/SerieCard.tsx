import { Serie } from "../../models/Series.model";
import { FC } from "react";
import styles from "./SerieCard.module.scss";

interface Props {
  imgUrl: string;
  serie: Serie;
}

export const SerieCard: FC<Props> = ({ imgUrl, serie }) => {
  return (
    <div className={styles.serie}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + serie.poster_path} className={styles.poster} />
        <div className={styles.vote}>{serie.vote_average}</div>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataSerie}>
          <span className={styles.serieTitle}>{serie.name}</span>
          <span className={styles.serieDate}>{serie.first_air_date}</span>
        </div>
        <button className={styles.infoButton}>+ INFO</button>
      </div>
    </div>
  );
};
