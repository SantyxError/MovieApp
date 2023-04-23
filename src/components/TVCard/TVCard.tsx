import { TV } from "../../models/TV.model";
import { FC, ReactElement } from "react";
import styles from "./TVCard.module.scss";

interface Props {
  imgUrl: string;
  tv: TV;
}

export const TVCard: FC<Props> = ({ imgUrl, tv }): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl + tv.poster_path} className={styles.poster} />
        <div className={styles.vote}>{tv.vote_average}</div>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.data}>
          <span className={styles.title}>{tv.name}</span>
          <span className={styles.date}>{tv.first_air_date}</span>
        </div>
        <button className={styles.infoButton}>+ INFO</button>
      </div>
    </div>
  );
};
