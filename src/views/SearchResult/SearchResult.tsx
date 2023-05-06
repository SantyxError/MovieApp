import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SearchResult.module.scss";
import { Spinner } from "../../components/Spinner/Spinner";
import { Search } from "../../models/Search.model";
import { Film } from "../../models/Films.model";
import { FilmCard } from "../../components/FilmCard/FilmCard";

export const SearchResult = (): ReactElement => {

  const { text } = useParams();

  const [data, setData] = useState<Array<Film> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const url: string = `${baseUrl}/search/movie?api_key=${key}&query=${text}&language=es-ES&sort_by=popularity.desc`;

  const imgUrl: string = import.meta.env.VITE_IMG_BASE;

  useEffect(() => {
    fetch(url)
      .then(response => 
        response.json())
      .then((data: Search) => {
        const promises = data.results.map((film: Film) => {
          setIsLoading(true)
          return fetch(`${baseUrl}/movie/${film.id}?api_key=${key}`)
            .then(response => response.json())
            .then(movie => movie);
        });

        Promise.all(promises).then(films => {
          setData(films);
          setIsLoading(false)
        });
      });
  }, []);

  if (isLoading || data === undefined) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  if (!data?.length) {
    return <div className={styles.errorMessage}>No hay resultados</div>
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.text}>Resultados de la búsqueda de {text}: </h1>
      <div className={styles.filmContainer}>
        {data.map((film) => {
          return <FilmCard imgUrl={imgUrl} film={film} key={film.id}/>;
        })}
      </div>
    </section>
  )
}
