import { ReactElement, useEffect, useState } from "react";
import styles from "./MyFavorites.module.scss";
import { Film } from "../../models/Films.model";
import { Spinner } from "../../components/Spinner/Spinner";
import { FilmCard } from "../../components/FilmCard/FilmCard";

interface Favorites {
  id: string
  user_id: string
}

export const MyFavorites = (): ReactElement => {
  const [favorites, setFavorites] = useState<Array<Film> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseUrlFavorites: string = import.meta.env.VITE_BASE_URL_LOCALHOST;
  const urlFavorites = `${baseUrlFavorites}/api/favorites`;

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;

  const imgUrl: string = import.meta.env.VITE_IMG_BASE;

  useEffect(() => {
    fetch(urlFavorites)
      .then(response => response.json())
      .then(data => {
        const promises = data.map((film: Favorites) => {
          return fetch(`${baseUrl}/movie/${film.id}?api_key=${key}`)
            .then(response => response.json())
            .then(movie => movie);
        });

        Promise.all(promises).then(films => {
          setFavorites(films);
        });
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  if (favorites === undefined) {
    return (
      <div className={styles.spinnerContainer}>
        No existen favoritos
      </div>
    );
  }

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>Mis favoritos</h2>
        <div className={styles.filmContainer}>
          {favorites.map((film) => {
            return <FilmCard imgUrl={imgUrl} film={film} key={film.id} />;
          })}
        </div>
      </section>
    </>
  );
};
