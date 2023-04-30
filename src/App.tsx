import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/settings/globals.scss";

import { Main } from "./views/Main/Main";
import { DiscoverFilms } from "./views/DiscoverFilms/DiscoverFilms";
import { PopularFilms } from "./views/PopularFilms/PopularFilms";
import { DiscoverTV } from "./views/DiscoverTV/DiscoverTV";
import { TopFilms } from "./views/TopFilms/TopFilms";
import { MyFavorites } from "./views/MyFavorites/MyFavorites";
import { FilmDetail } from "./views/FilmDetail/FilmDetail";
import { TVDetail } from "./views/TVDetail/TVDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<DiscoverFilms />} />
          <Route path="/peliculas" element={<PopularFilms />} />
          <Route path="/tv" element={<DiscoverTV />} />
          <Route path="/top" element={<TopFilms />} />
          <Route path="/favorites" element={<MyFavorites />} />
          <Route path="/film/:id" element={<FilmDetail />} />
          <Route path="/tv/:id" element={<TVDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
