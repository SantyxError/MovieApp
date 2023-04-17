import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.filmStrip} />
      <p className={styles.text}>loading</p>
    </div>
  );
};
