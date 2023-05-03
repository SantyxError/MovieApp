import styles from "./DiscoverTV.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { DiscoverTV as DiscoverTVModel } from "../../models/TV.model";
import { TVCard } from "../../components/TVCard/TVCard";
import { Spinner } from "../../components/Spinner/Spinner";
import { Hero } from "../../components/Hero/Hero";
import { Pagination } from "../../components/Pagination/Pagination";

export const DiscoverTV = (): ReactElement => {
  const [data, setData] = useState<DiscoverTVModel | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const url: string = `${baseUrl}/discover/tv?api_key=${key}&language=es-ES&sort_by=popularity.desc&page=${page}&with_original_language=es|en`;

  const imgUrl: string = import.meta.env.VITE_IMG_BASE;

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setTotalPages(90)
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
    <>
    
    <section className={styles.container}>
      <Hero imgUrl={imgUrl} tv={data.results[2]} title="Programas más populares" />
      <div className={styles.filmContainer}>
        {data.results.map((tv) => {
          return <TVCard imgUrl={imgUrl} tv={tv} key={tv.id} />;
        })}
      </div>
    </section>

    <Pagination page={page} totalPages={totalPages} setPage={setPage} setTotalPages={setTotalPages}/>
    </>
  );
};
