import { useEffect, useState } from "react";
import styles from "./DiscoverFilms.module.scss";
import { Films } from "../../models/Films.model";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Spinner } from "../../components/Spinner/Spinner";

export const DiscoverFilms = () => {
  const [data, setData] = useState<Films | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  // const url = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${key}&language=es-ES`;
  const url = `${baseUrl}/movie/now_playing?api_key=${key}&language=es-ES`

  const imgUrl = import.meta.env.VITE_IMG_BASE;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
       <h2 className={styles.title}>Últimas Pelculas</h2>
       <div className={styles.filmContainer}>
      {data.results.map((film) => {
        return <FilmCard imgUrl={imgUrl} film={film} />;
      })}
       </div>
    </section>
  );
};
