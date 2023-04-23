import { ReactElement, useEffect, useState } from "react";
import styles from "./PopularFilms.module.scss";
import { Films } from "../../models/Films.model";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Spinner } from "../../components/Spinner/Spinner";

export const PopularFilms = (): ReactElement => {
  const [data, setData] = useState<Films | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const url: string = `${baseUrl}/movie/popular?api_key=${key}&language=es-ES&sort_by=popularity.desc&page=1`;

  const imgUrl: string = import.meta.env.VITE_IMG_BASE;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  if (data === undefined) {
    return (
      <div className={styles.spinnerContainer}>
        No se ha podido resolver la petición
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Películas Populares</h2>
      <div className={styles.filmContainer}>
        {data.results.map((film) => {
          return <FilmCard imgUrl={imgUrl} film={film} />;
        })}
      </div>
    </section>
  );
};
