import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import MainPage from "./component/MainPage";
import PokedexPage from "./component/pokedex/PokedexPage";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate replace to="/pokedex" />} />

            <Route path="/pokedex" element={<PokedexPage />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;