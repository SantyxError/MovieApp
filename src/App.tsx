import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/settings/globals.scss";

import { Main } from "./views/Main/Main";
import { DiscoverFilms } from "./views/DiscoverFilms/DiscoverFilms";
import { PopularFilms } from "./views/PopularFilms/PopularFilms";
import { PopularSeries } from "./views/PopularSeries/PopularSeries";
import { TopFilms } from "./views/TopFilms/TopFilms";

const App: React.FC = () => {

  return <BrowserRouter>
    <Routes>
      <Route element={<Main/>}>
        <Route path="/" element={<DiscoverFilms />} />
        <Route path="/peliculas" element={<PopularFilms />} />
        <Route path="/tv" element={<PopularSeries />} />
        <Route path="/top" element={<TopFilms />} />
      </Route>
    </Routes>
  </BrowserRouter>
};

export default App;
