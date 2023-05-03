import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './Modal.module.scss';
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { Spinner } from '../Spinner/Spinner';
import { Trailer } from '../../models/Trailer.model';

interface Props {
  id: number,
  isOpen: boolean,
  onClose: () => void
}

export const Modal: FC<Props> = ({ id, isOpen, onClose }) => {
  const [data, setData] = useState<Trailer | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const key: string = import.meta.env.VITE_API_KEY;
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const url: string = `${baseUrl}/movie/${id}/videos?api_key=${key}&language=es-ES`;
  
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
    <div onClick={onClose} className={`${isOpen ? styles.modal : styles.modalHide}`}>
      <div className={styles.modalContent}>
        <span className={styles.close}>
            <IonIcon icon={close}/>
        </span>
        <iframe className={styles.trailer} src={`https://www.youtube.com/embed/${data.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}