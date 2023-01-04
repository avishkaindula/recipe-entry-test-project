const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipes-controller");

router.get("/", recipesController.getAllRecipes);
// This route will get all recipes from the database.

router.post("/", recipesController.addRecipe);
// This route will add a new recipe to the database.

module.exports = router;
