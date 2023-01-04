const Recipe = require("../model/Recipe");

const getAllRecipes = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find();
  } catch (err) {
    console.log(err);
  }

  if (!recipes) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ recipes });
};

exports.getAllRecipes = getAllRecipes;
