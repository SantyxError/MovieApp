import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";
import { DiscoverFilms } from "../DiscoverFilms/DiscoverFilms";
import { TopFilms } from "../TopFilms/TopFilms";
import { PopularSeries } from "../PopularSeries/PopularSeries";
import { PopularFilms } from "../PopularFilms/PopularFilms";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>

        <DiscoverFilms />
        {/* <PopularFilms/> */}
        {/* <PopularSeries/> */}
        {/* <TopFilms/> */}

      </main>
      <footer>footer</footer>
      <BottomNavbar />
    </div>
  );
};
