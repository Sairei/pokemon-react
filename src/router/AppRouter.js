import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import MainPage from "../component/MainPage";
import PokedexPage from "../component/pokedex/PokedexPage";
import PokemonPage from "../component/pokemon/PokemonPage";
import TypePage from "../component/types/TypePage";
import PokemonProvider from "./provider/PokemonProvider";;

function AppRouter() {
  return (
    <>
      <PokemonProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<Navigate replace to="/pokedex" />} />

              <Route path="/pokedex" element={<PokedexPage />} />
              <Route path="/pokemon/:id" element={<PokemonPage />} />

              <Route path="/types" element={<TypePage />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </>
  );
}

export default AppRouter;