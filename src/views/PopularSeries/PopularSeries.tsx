import styles from "./PopularSeries.module.scss";
import { useEffect, useState } from "react";
import { Series } from "../../models/Series.model";
import { SerieCard } from "../../components/SerieCard/SerieCard";
import { Spinner } from "../../components/Spinner/Spinner";


export const PopularSeries = () => {
  const [data, setData] = useState<Series | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/discover/tv?api_key=${key}&language=es-ES&timezone=Europe%2FMadrid&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

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
    <h2 className={styles.title}>Series Populares</h2>
    <div className={styles.filmContainer}>
   {data.results.map((serie) => {
     return <SerieCard imgUrl={imgUrl} serie={serie} />;
   })}
    </div>
 </section>
  )
}
