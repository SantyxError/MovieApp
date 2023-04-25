import { ReactElement, useEffect, useState } from "react";
import styles from "./MyFavorites.module.scss";

interface Favourite {
  id: number;
  user_id: number;
}

export const MyFavorites = (): ReactElement => {
  const [favorites, setFavorites] = useState<Array<Favourite> | undefined>(
    undefined
  );

  const baseUrl: string = import.meta.env.VITE_BASE_URL_LOCALHOST;
  const url = `${baseUrl}/api/favorites`;

  const fetchData = async (): Promise<void> => {
    const response = await fetch(url);
    const data = await response.json();

    setFavorites(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (favorites === undefined) {
    return <div>No existen favoritos</div>;
  }

  return (
    <div style={{ color: "white" }}>
      <span>{favorites[0].id}</span>
      <span>{favorites[0].user_id}</span>
    </div>
  );
};
