import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>main</main>
      <footer>footer</footer>
      <BottomNavbar />
    </div>
  );
};
