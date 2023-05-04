import { ChangeEvent, ReactElement, useState } from "react";
import styles from "./SearchBox.module.scss";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

export const SearchBox = (): ReactElement => {
  const [text, setText] = useState<string | undefined>(undefined)
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const navigateToResults = (): void => {
    if(text) {
        navigate(`/search/${text}`);
    } else {
        alert('No has introducido ningún texto')
    }
  };

  return (
    <form className={styles.wrapper}>
      <input placeholder="Buscar película" className={styles.box} onChange={handleInputChange} />
      <button
        type="button"
        className={styles.button}
        aria-label="Búsqueda"
        onClick={navigateToResults}>
        <IonIcon icon={search} />
      </button>
    </form>
  )
}
