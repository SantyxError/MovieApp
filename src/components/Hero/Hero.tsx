import { FC, CSSProperties } from "react";
import { Film } from "../../models/Films.model";
import styles from "./Hero.module.scss";
import { TV } from "../../models/TV.model";

interface Props {
  imgUrl: string;
  title: string;
  film?: Film;
  tv?: TV
}

export const Hero: FC<Props> = ({ imgUrl, title, film, tv }) => {

  const styleProps = {
    '--backgroundImageMobile': `url(${imgUrl + (film ? film.poster_path : tv?.poster_path)})`,
    '--backgroundImage': `url(${imgUrl + (film ? film.backdrop_path : tv?.backdrop_path)})`
  } as CSSProperties

  return (
    <section className={styles.container} style={styleProps}>

      <h1 className={styles.mainTitle}>{title}</h1>
      <div className={styles.infoWrapper}>
        <img src={imgUrl + (film ? film.poster_path : tv?.poster_path)} className={styles.poster} />
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonDetail}>Ver Ficha</button>
          <button className={styles.buttonTrailer}>Ver trailer</button>
        </div>
      </div>

      <h2 className={styles.movieTitle}>{film ? film.title : tv?.original_name}</h2>
      <div className={styles.sinopsisContainer}>
        <h4 className={styles.sinopsis}>{film ? film.overview : tv?.overview}</h4>
        <p className={styles.sinopsisText}>{ }</p>

      </div>

    </section>
  )
}


