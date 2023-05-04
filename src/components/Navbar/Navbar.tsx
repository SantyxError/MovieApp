import styles from "./Navbar.module.scss";
import logo from "../../assets/img/logo_rojo.svg";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { LogoutButton } from "../LogoutButton /LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { SearchBox } from "./SearchBox/SearchBox";

export const Navbar = (): ReactElement => {

  const { isAuthenticated } = useAuth0()

  const navigate = useNavigate();

  const navigateToHome = (): void => {
    navigate("/");
  };

  const navigateToFilms = (): void => {
    navigate("/peliculas");
  };

  const navigateToTV = (): void => {
    navigate("/tv");
  };

  const navigateToTop = (): void => {
    navigate("/top");
  };

  const navigateToFavorites = (): void => {
    navigate("/favorites");
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="movie app logo" className={styles.logo} onClick={navigateToHome} />

      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li className={styles.item} onClick={navigateToHome}>
            Últimas Películas
          </li>
          <li className={styles.item} onClick={navigateToFilms}>
            Películas más Populares
          </li>
          <li className={styles.item} onClick={navigateToTV}>
            Programas más Populares
          </li>
          <li className={styles.item} onClick={navigateToTop}>
            Películas más Valoradas
          </li>
          {isAuthenticated &&
            <li className={styles.item} onClick={navigateToFavorites}>
              Mis Favoritos
            </li>
          }
        </ul>

        <SearchBox/>

        {isAuthenticated ?
          <LogoutButton /> : <LoginButton />
        }

      </div>
    </nav>
  );
};
