import { useAuth0 } from "@auth0/auth0-react";

import styles from "./Logout.module.scss";
import { IonIcon } from "@ionic/react";
import {
  logOutOutline
} from "ionicons/icons";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    <IonIcon icon={logOutOutline} className={styles.icon} />
  </button>
}
