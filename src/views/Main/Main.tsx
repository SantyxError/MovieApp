import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";
import { DiscoverFilms } from "../DiscoverFilms/DiscoverFilms";
import { TopFilms } from "../TopFilms/TopFilms";
import { PopularSeries } from "../PopularSeries/PopularSeries";
import { PopularFilms } from "../PopularFilms/PopularFilms";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
      <Outlet/>
    
      </main>
      <footer>footer</footer>
      <BottomNavbar />
    </div>
  );
};
