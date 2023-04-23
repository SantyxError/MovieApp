import { ReactElement } from "react";
import { BottomNavbar } from "../../components/BottomNavbar/BottomNavbar";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Main.module.scss";
import { Outlet } from "react-router-dom";

export const Main = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />

        <Footer />
      </main>
      <BottomNavbar />
    </div>
  );
};
