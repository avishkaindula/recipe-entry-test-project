import React, { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:5000/recipes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Recipes = () => {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipes));
  }, []);

  console.log(recipes);
  return <div>Recipes</div>;
};

export default Recipes;
