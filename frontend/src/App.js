import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipe/Recipes";
import AddRecipe from "./components/AddRecipe";
import ViewRecipe from "./components/Recipe/ViewRecipe";
import RecipeEdit from "./components/Recipe/RecipeEdit";

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
          <Route path="/view/:id" element={<ViewRecipe />} exact />
          <Route path="/edit/:id" element={<RecipeEdit />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
