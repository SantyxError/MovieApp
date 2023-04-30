import { useAuth0 } from "@auth0/auth0-react";

import styles from "./LoginButton.module.scss";
import { IonIcon } from "@ionic/react";
import {
  personCircleOutline
} from "ionicons/icons";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>
    <IonIcon icon={personCircleOutline} className={styles.icon} />
  </button>
}