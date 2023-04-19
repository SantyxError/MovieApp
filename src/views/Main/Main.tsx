import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />

      </main>
      <BottomNavbar />
    </div>
  );
};
