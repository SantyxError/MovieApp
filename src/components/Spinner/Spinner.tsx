import { ReactElement } from "react";
import styles from "./Spinner.module.scss";

export const Spinner = (): ReactElement => {
  return (
    <div className={styles.loader}>
      <div className={styles.filmStrip} />
      <p className={styles.text}>loading</p>
    </div>
  );
};
