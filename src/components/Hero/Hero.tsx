import { FC, CSSProperties, useState, useEffect } from "react";
import { Film } from "../../models/Films.model";
import styles from "./Hero.module.scss";
import { TV } from "../../models/TV.model";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

interface Props {
  imgUrl: string;
  title: string;
  film?: Film;
  tv?: TV
}

export const Hero: FC<Props> = ({ imgUrl, title, film, tv }) => {
  
  const navigate: NavigateFunction = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleShowModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const navigateToItemInfo = (): void => {
      navigate(`/film/${film?.id}`)
  };

  const styleProps = {
    '--backgroundImageMobile': `url(${imgUrl + (film ? film.poster_path : tv?.poster_path)})`,
    '--backgroundImage': `url(${imgUrl + (film ? film.backdrop_path : tv?.backdrop_path)})`
  } as CSSProperties

  return (
    <>
      <section className={styles.container} style={styleProps}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <div className={styles.infoWrapper}>
          <img src={imgUrl + (film ? film.poster_path : tv?.poster_path)} className={styles.poster} />
          <div className={styles.buttonWrapper}>
            <button className={styles.buttonDetail} onClick={navigateToItemInfo}>Ver Ficha</button>
            <button className={styles.buttonTrailer} onClick={handleShowModal}>Ver trailer</button>
          </div>
        </div>

        <div>
          <h2 className={styles.movieTitle}>{film ? film.title : tv?.original_name}</h2>
          <p className={styles.rating}>
            <IonIcon icon={star} className={styles.icon} />
            {film ? film.vote_average : tv?.vote_average}
          </p>
          <p className={styles.sinopsis}>{film ? film.overview : tv?.overview}</p>
          <div className={styles.buttonWrapperFromLaptop}>
            <button className={styles.buttonDetail} onClick={navigateToItemInfo}>Ver Ficha</button>
            <button className={styles.buttonTrailer} onClick={handleShowModal}>Ver trailer</button>
          </div>
        </div>
      </section>

      {film &&
        <Modal id={film.id} isOpen={isOpenModal} onClose={handleCloseModal} />
      }
    </>
  )
}



