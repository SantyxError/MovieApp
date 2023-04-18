import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";
import { DiscoverFilms } from "../DiscoverFilms/DiscoverFilms";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
       
        <DiscoverFilms />
      </main>
      <footer>footer</footer>
      <BottomNavbar />
    </div>
  );
};
