import { ReactElement } from "react";
import styles from "./Footer.module.scss";

export const Footer = (): ReactElement => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        2023 Copyright © Santiago Benito. All rights reserved.
      </p>
    </div>
  );
};
