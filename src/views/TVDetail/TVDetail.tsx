import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import styles from "./TVDetail.module.scss";
import { CSSProperties, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { TV } from "../../models/TV.model";
import { IonIcon } from "@ionic/react";
import { arrowBack, star } from "ionicons/icons";
import { formatDate } from "../../components/_utils/formatDate";
import { Pagination } from "../../components/Pagination/Pagination";

export const TVDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState<TV | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const url: string = `${baseUrl}/tv/${id}?api_key=${key}&language=es-ES`;

  const imgUrl: string = import.meta.env.VITE_IMG_BASE;

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

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToHome = (): void => {
    navigate('/');
  };

  const styleProps = {
    '--backgroundImage': `url(${imgUrl + (data?.backdrop_path)})`
  } as CSSProperties

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
      <section className={styles.container} style={styleProps}>
        <div className={styles.wrapper}>
          <div className={styles.film}>
            <div className={styles.background}>
              <button className={styles.returnButton} onClick={navigateToHome}>
                <IonIcon icon={arrowBack} className={styles.icon} />
                <span>Volver</span>
              </button>
            </div>

            <div>
              <button className={styles.returnButtonLaptop} onClick={navigateToHome}>
                <IonIcon icon={arrowBack} className={styles.icon} />
                <span>Volver</span>
              </button>
              <img src={imgUrl + data.poster_path} className={styles.poster} />
            </div>

            <div className={styles.info}>
              <div className={styles.vote}>
                <IonIcon icon={star} className={styles.icon} />
                {data.vote_average.toFixed(1)}
              </div>
              <h1>{data.name} ({formatDate(data.first_air_date)})</h1>
              <p>{data.overview}</p>
              <button className={styles.button}>Ver trailer</button>
            </div>
          </div>
        </div>
      </section>

      <Pagination />
    </>
  )
}