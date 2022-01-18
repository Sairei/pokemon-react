import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "../component/home/HomePage";
import MainPage from "../component/MainPage";
import PokedexPage from "../component/pokedex/PokedexPage";
import PokemonPage from "../component/pokemon/PokemonPage";
import PokemonMorePage from "../component/more/PokemonMorePage";
import TypePage from "../component/types/TypePage";
import PokemonProvider from "./provider/PokemonProvider";;

function AppRouter() {
  return (
    <>
      <PokemonProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />

              <Route path="/pokedex" element={<PokedexPage />} />
              <Route path="/pokemon/:id" element={<PokemonPage />} />
              <Route path="/pokemon/:id/more" element={<PokemonMorePage />} />

              <Route path="/types" element={<TypePage />} />
              <Route path="/type/:selectedType" element={<TypePage />} />

              {/* Pour pallier les problème de lien dans le fil d'ariane */}
              <Route path="/pokemon" element={<Navigate replace to="/pokedex" />} />
              <Route path="/type" element={<Navigate replace to="/types" />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </>
  );
}

export default AppRouter;