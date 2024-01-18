// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Importa il tuo store Redux

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import FavoritesPage from "./components/FavoritesPage"; // Importa il tuo componente FavoritesPage

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />{" "}
          {/* Aggiungi la route per la pagina dei preferiti */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
