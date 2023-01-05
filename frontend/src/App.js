import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipe/Recipes";
import AddRecipe from "./components/AddRecipe";
import ViewRecipe from "./components/ViewRecipe";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Recipes />} exact />
          <Route path="/add" element={<AddRecipe />} exact />
          <Route path="/view" element={<ViewRecipe />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
