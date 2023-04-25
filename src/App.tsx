import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/settings/globals.scss";

import { Main } from "./views/Main/Main";
import { DiscoverFilms } from "./views/DiscoverFilms/DiscoverFilms";
import { PopularFilms } from "./views/PopularFilms/PopularFilms";
import { DiscoverTV } from "./views/DiscoverTV/DiscoverTV";
import { TopFilms } from "./views/TopFilms/TopFilms";
import { MyFavorites } from "./views/MyFavorites/MyFavorites";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
