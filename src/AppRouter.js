import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import MainPage from "./component/MainPage";
import PokedexPage from "./component/pokedex/PokedexPage";
import PokemonPage from "./component/pokemon/PokemonPage";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate replace to="/pokedex" />} />

            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;